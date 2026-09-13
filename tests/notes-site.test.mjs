import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
const read=file=>fs.readFileSync(new URL("../"+file,import.meta.url),"utf8");
const dataset={window:{}};
vm.runInNewContext(read("site/content.js"),dataset);
const data=dataset.window.TRINITY_NOTES;
const ids=new Set(data.pages.map(p=>p.n));
test("all operational photos are preserved, in order, with source wording and uncertainty",()=>{
 assert.deepEqual([...ids],Array.from({length:48},(_,i)=>i+1).filter(n=>n!==15));
 assert.equal(data.pages.length,47);
 for(const p of data.pages){assert.ok(p.text);assert.ok(p.title);assert.ok(p.bullets.length>=3);assert.ok(p.flags.length);}
 const inventory=JSON.parse(read("notes/source-inventory.json"));
 assert.equal(inventory.images.length,49);
 for(const image of inventory.images){assert.match(image.sha256,/^[a-f0-9]{64}$/);assert.equal(image.originalCommitted,false);}
});
test("every topic, process and analysis reference resolves, and all pages are categorized",()=>{
 const covered=new Set;
 const check=ns=>ns.forEach(n=>assert.ok(ids.has(n),"Unknown source "+n));
 for(const t of data.topics){check(t.pages);t.pages.forEach(n=>covered.add(n));t.cards.forEach(c=>check(c[2]));}
 for(const g of data.guides){check(g.sources);assert.ok(g.gaps.length);assert.ok(g.steps.length);}
 for(const a of [...data.analysis,...data.introspection]){check(a.sources);assert.ok(a.status);assert.ok(a.next);}
 assert.deepEqual([...covered].sort((a,b)=>a-b),[...ids]);
});
test("site payload excludes random notes, network addresses, emails and source-image references",()=>{
 const payload=read("site/content.js");
 assert.doesNotMatch(payload,/stock program|audiobooks|monitor the trades|trading app/i);
 assert.doesNotMatch(payload,/\b(?:\d{1,3}\.){3}\d{1,3}\b/);
 assert.doesNotMatch(payload,/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
 assert.doesNotMatch(read("site/index.html"),/<img\b|https?:\/\//);
 assert.ok(data.pages.find(p=>p.n===34).text.includes("OMITTED"));
 assert.ok(data.pages.find(p=>p.n===47).text.includes("OMITTED"));
});
test("unresolved stage codes, missing steps and process limitations remain visible",()=>{
 assert.match(data.pages.find(p=>p.n===47).flags.join(" "),/reversed/);
 assert.match(data.pages.find(p=>p.n===32).flags.join(" "),/hypothesis|inference|not|unverified/i);
 assert.match(data.guides.find(g=>g.id==="prepare").gaps.join(" "),/4–6/);
 assert.match(data.guides.find(g=>g.id==="pass").gaps.join(" "),/Pass/);
});
function app(){
 const elements=new Map();
 const element=()=>({innerHTML:"",textContent:"",value:"",hidden:false,dataset:{},listeners:{},attrs:{},
 addEventListener(type,fn){this.listeners[type]=fn;},setAttribute(k,v){this.attrs[k]=v;},removeAttribute(k){delete this.attrs[k];},focus(){},querySelector(){return {textContent:"Notebook"};}});
 ["#main","#search","#count","#clear-search","#sections","#print"].forEach(k=>elements.set(k,element()));
 const primary=["notes","analysis","introspection"].map(section=>({...element(),dataset:{section}}));
 const document={title:"",listeners:{},querySelector:s=>elements.get(s),querySelectorAll:()=>primary,addEventListener(type,fn){this.listeners[type]=fn;},getElementById:()=>({scrollIntoView(){}})};
 const context=vm.createContext({window:{TRINITY_NOTES:data,addEventListener(){},print(){}},document,location:{hash:""}});
 vm.runInContext(read("site/app.js"),context);
 return {elements,context,document,route(hash){context.location.hash=hash;vm.runInContext("render()",context);return elements.get("#main").innerHTML;},search(q){elements.get("#search").value=q;vm.runInContext("render()",context);return elements.get("#main").innerHTML;}};
}
test("all narrative, topic, process and analysis routes render without missing data",()=>{
 const a=app();
 for(const p of data.pages)assert.ok(a.route("#notes/narrative/"+p.n).includes("Source P"+String(p.n).padStart(3,"0")));
 for(const t of data.topics)assert.ok(a.route("#notes/"+t.id).includes("All source pages"));
 for(const g of data.guides)assert.ok(a.route("#notes/processes/"+g.id).includes("Study sequence only"));
 for(const group of new Set(data.analysis.map(a=>a.group)))assert.ok(a.route("#analysis/"+group).includes("Next useful step"));
 assert.ok(a.route("#notes/traveler").includes("T01"));
 assert.ok(a.route("#notes/narrative/15").includes("Source P001"));
 assert.doesNotThrow(()=>a.route("#%invalid"));
});
test("search finds source terminology and analysis but never unrelated material",()=>{
 const a=app();
 assert.ok(a.search("sideband").includes("class=\"result\""));
 assert.ok(a.search("FLA FLC").includes("class=\"result\""));
 assert.ok(a.search("stock program").includes("No matching entry"));
 assert.ok(a.search("audiobooks").includes("No matching entry"));
});
test("source and search strings are escaped before HTML rendering",()=>{
 const a=app();
 const html=a.search('<img src=x onerror=alert(1)>');
 assert.ok(html.includes("&lt;img"));
 assert.ok(!html.includes("<img"));
 assert.equal(vm.runInContext('esc("<script>&\\\"\\x27")',a.context),"&lt;script&gt;&amp;&quot;&#39;");
});
test("deployment publishes only site and verifies generated data before upload",()=>{
 const workflow=read(".github/workflows/pages.yml");
 assert.match(workflow,/path: site/);
 assert.match(workflow,/node --test tests\/\*\.test\.mjs/);
 assert.match(workflow,/git diff --exit-code -- notes site\/content\.js/);
 assert.doesNotMatch(read("site/app.js"),/\bfetch\(|XMLHttpRequest|localStorage/);
});

test("Introspection preserves all original entries and legacy bookmarks",()=>{
 assert.equal(data.introspection.length,32);
 const a=app();
 assert.ok(a.route("#introspection").includes("SIFT / Introspection"));
 assert.ok(a.route("#analysis/Questions/A29").includes("Stage names, functions and codes need separate fields"));
 assert.ok(a.route("#analysis/Learning").includes("SIFT / Introspection"));
 assert.ok(a.search("writing preference").includes("#introspection/"));
});
test("operations analysis covers pain points and structural opportunities with traceable plans",()=>{
 assert.equal(data.analysis.length,12);
 const ownerIds=new Set(data.ownerUpdates.map(u=>u.id));
 for(const a of data.analysis){
  assert.match(a.id,/^OP\d+$/);
  for(const key of ["improvements","report","assumptions","questions"])assert.ok(a[key].length);
  for(const key of ["reasoning","measure","pilot","index"])assert.ok(a[key]);
  for(const id of a.updates)assert.ok(ownerIds.has(id));
 }
 const a=app();
 assert.ok(a.route("#analysis").includes("Company operations"));
 assert.ok(a.route("#analysis/Evidence%20readiness/OP01").includes("Find Bianca cases"));
 assert.ok(a.search("OC mac").includes("#analysis/"));
 assert.ok(a.search("refill queue").includes("#analysis/"));
 assert.ok(a.search("probe error").includes("#analysis/"));
 a.search("");
 assert.ok(a.route("#notes/narrative/22").includes("Source P022"));
});
