import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';

const html = readFileSync(new URL('../print/index.html', import.meta.url), 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
const articles = [...html.matchAll(/<article\s+([^>]+)>([\s\S]*?)<\/article>/g)];
const attr = (text, name) => text.match(new RegExp(`(?:^|\\s)${name}="([^"]*)"`))?.[1];

// Exercise the actual inline event handlers with a minimal DOM substitute.
// This verifies print selection, not browser layout or physical pagination.
function harness() {
  const element = (properties = {}) => {
    const listeners = new Map();
    const classes = new Set((properties.className || '').split(/\s+/));
    return {
      ...properties,
      classList: {
        add: name => classes.add(name),
        remove: name => classes.delete(name),
        contains: name => classes.has(name),
        toggle(name, force) {
          const enabled = force ?? !classes.has(name);
          if (enabled) classes.add(name); else classes.delete(name);
          return enabled;
        },
      },
      addEventListener: (name, callback) => listeners.set(name, callback),
      fire: name => listeners.get(name)?.(),
    };
  };
  const sheets = articles.map(([_, attrs]) => {
    const footer = element({ textContent: '' });
    return element({
      id: attr(attrs, 'id'),
      className: attr(attrs, 'class'),
      dataset: { group: attr(attrs, 'data-group') },
      querySelector: selector => {
        assert.equal(selector, '.print-position');
        return footer;
      },
    });
  });
  const boxes = [...html.matchAll(/<input\s+([^>]+)>/g)].map(([_, attrs]) => element({
    value: attr(attrs, 'value'), checked: /\bchecked\b/.test(attrs),
  }));
  const sets = [...html.matchAll(/<button\s+([^>]*data-set[^>]*)>/g)].map(([_, attrs]) => element({
    dataset: { set: attr(attrs, 'data-set') },
  }));
  const singles = [...html.matchAll(/<button\s+([^>]*data-sheet[^>]*)>/g)].map(([_, attrs]) => element({
    hidden: true, dataset: { sheet: attr(attrs, 'data-sheet') },
  }));
  const printButton = element({ disabled: false });
  const status = element({ textContent: '' });
  const controls = element({ hidden: true });
  const body = element();
  const byId = new Map(sheets.map(sheet => [sheet.id, sheet]));
  byId.set('print-selected', printButton);
  byId.set('selection-status', status);
  byId.set('print-controls', controls);
  const selections = new Map([
    ['.sheet', sheets], ['.choice input', boxes],
    ['[data-set]', sets], ['.single-print', singles],
  ]);
  const printCalls = [];
  const window = element({ print: () => printCalls.push(visible()) });
  const visible = () => sheets.filter(sheet => !sheet.classList.contains('excluded')).map(sheet => sheet.id);
  vm.runInNewContext(script, {
    document: { body, getElementById: id => byId.get(id), querySelectorAll: selector => {
      assert.ok(selections.has(selector), `Unexpected selector: ${selector}`);
      return selections.get(selector);
    } },
    window,
  });
  return { sheets, boxes, singles, printButton, status, controls, body, window, visible, printCalls,
    choose: name => sets.find(button => button.dataset.set === name).fire('click'),
  };
}

test('all 17 sheets and 50 questions exist without JavaScript', () => {
  assert.equal(articles.length, 17);
  assert.equal(new Set(articles.map(([_, attrs]) => attr(attrs, 'id'))).size, 17);
  assert.equal((html.match(/<h3>/g) || []).length, 50);
  assert.equal((html.match(/class="writing/g) || []).length, 50);
  assert.equal((html.match(/class="benefit"/g) || []).length, 50);
  for (const [_, attrs, content] of articles) {
    assert.doesNotMatch(attrs, /\bhidden\b|excluded/);
    assert.match(content, /Date \/ shift/);
    assert.match(content, /Source role \/ team or document/);
    assert.match(content, /Basis \(circle\)/);
  }
  assert.match(articles.at(-1)[1], /last-selected/);
});

test('printable content contains no private planning vocabulary', () => {
  const printable = articles.map(article => article[2]).join('\n');
  assert.doesNotMatch(printable, /build\s*order|Machiavellian|obnoxious|jacket|promotion|Quick Test|Error Muncher|Command Companion|Handoff Scribe|SIFT|Trinity|\bBO-\d/i);
});

test('file is self-contained and has no answer persistence or external requests', () => {
  assert.doesNotMatch(html, /<(?:script|img|iframe|link)\b[^>]*(?:src|href)=/i);
  assert.doesNotMatch(html, /@import|url\s*\(|fetch\s*\(|XMLHttpRequest|localStorage|sessionStorage|indexedDB/);
  assert.doesNotMatch(html, /<textarea|contenteditable|<input[^>]+type="(?:text|email|password)"/i);
  const colors = [...html.matchAll(/#[0-9a-f]{3,6}\b/gi)].map(match => match[0].slice(1));
  assert.ok(colors.length > 0);
  assert.ok(colors.every(color => new Set(color.toLowerCase()).size === 1));
  assert.match(html, /@page \{ size: auto; margin: \.5in;/);
  assert.match(html, /\.screen-only \{ display: none !important;/);
  assert.match(html, /\.sheet\.excluded \{ display: none !important;/);
});

test('initial selection includes all sheets with sequential print numbering', () => {
  const h = harness();
  assert.equal(h.visible().length, 17);
  assert.equal(h.controls.hidden, false);
  assert.equal(h.status.textContent, '17 sheets selected');
  assert.ok(h.singles.every(button => !button.hidden));
  h.sheets.forEach((sheet, index) => assert.equal(sheet.querySelector('.print-position').textContent, `Page ${index + 1} of 17`));
});

test('clear disables printing, then select all restores it', () => {
  const h = harness();
  h.choose('none');
  assert.equal(h.visible().length, 0);
  assert.equal(h.printButton.disabled, true);
  h.printButton.fire('click');
  assert.equal(h.printCalls.length, 0);
  assert.ok(h.body.classList.contains('empty'));
  h.choose('all');
  assert.equal(h.visible().length, 17);
  assert.equal(h.printButton.disabled, false);
});

test('preset sets select the intended sheets', () => {
  const h = harness();
  for (const [set, expected] of [
    ['conversation', ['people', 'hardware', 'configuration', 'route', 'access', 'updates']],
    ['template', ['stage', 'procedure', 'error', 'action', 'alias', 'outputs', 'handoff', 'isolation']],
    ['gather', ['gather', 'observe']],
    ['error-pair', ['error', 'action']],
    ['alias-pair', ['alias', 'outputs']],
  ]) {
    h.choose(set);
    assert.deepEqual(h.visible(), expected);
  }
});

test('individual checkbox selections retain document order and renumber pages', () => {
  const h = harness();
  h.choose('none');
  for (const id of ['continuation', 'error', 'action']) {
    const box = h.boxes.find(box => box.value === id);
    box.checked = true;
    box.fire('change');
  }
  assert.deepEqual(h.visible(), ['error', 'action', 'continuation']);
  assert.equal(h.sheets.find(sheet => sheet.id === 'error').querySelector('.print-position').textContent, 'Page 1 of 3');
  assert.deepEqual(h.sheets.filter(sheet => sheet.classList.contains('last-selected')).map(sheet => sheet.id), ['continuation']);
});

test('print selected invokes printing for only the current set', () => {
  const h = harness();
  h.choose('error-pair');
  h.printButton.fire('click');
  assert.deepEqual(h.printCalls, [['error', 'action']]);
  assert.deepEqual(h.visible(), ['error', 'action']);
});

test('each single-sheet button selects and prints only that sheet', () => {
  const h = harness();
  for (const button of h.singles) {
    h.choose('all');
    button.fire('click');
    assert.deepEqual(h.printCalls.at(-1), [button.dataset.sheet]);
    assert.deepEqual(h.visible(), [button.dataset.sheet]);
    assert.equal(h.status.textContent, '1 sheet selected');
    assert.equal(h.sheets.find(sheet => sheet.id === button.dataset.sheet).querySelector('.print-position').textContent, 'Page 1 of 1');
  }
});

test('browser print event synchronizes checkbox state without losing selection', () => {
  const h = harness();
  h.boxes.forEach(box => { box.checked = box.value === 'handoff'; });
  h.window.fire('beforeprint');
  assert.deepEqual(h.visible(), ['handoff']);
  assert.equal(h.status.textContent, '1 sheet selected');
});
