"use strict";
const data = window.TRINITY_NOTES;
const main = document.querySelector("#main");
const search = document.querySelector("#search");
const count = document.querySelector("#count");
const clearSearch = document.querySelector("#clear-search");
const sections = document.querySelector("#sections");
const esc = value => String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
const pageById = n => data.pages.find(page => page.n === Number(n));
const pageHref = n => "#notes/narrative/" + n;
const link = (href, label, current=false) => '<a href="'+esc(href)+'"'+(current?' aria-current="page"':'')+'>'+esc(label)+'</a>';
const sources = (ids=[],extra) => '<div class="source-links" aria-label="Source pages">'+ids.map(n=>link(pageHref(n),"P"+String(n).padStart(3,"0"))).join("")+(extra?link("#notes/traveler","T01"):"")+'</div>';
const bullets = items => '<ul class="bullets">'+items.map(item=>"<li>"+esc(item)+"</li>").join("")+"</ul>";
function sourceDetail(page) {
  return '<details><summary>Source wording &amp; uncertainties · '+(page.n ? "P"+String(page.n).padStart(3,"0") : "T01")+'</summary><p class="source-label">Redacted reading transcription · '+esc(page.n?page.n+".jpg":page.source)+' · punctuation and spacing normalized; not a facsimile.</p><div class="transcript">'+esc(page.text)+'</div><h4>Unresolved or editorially qualified</h4>'+bullets(page.flags)+'</details>';
}
function nav(section,topic) {
  document.querySelectorAll("[data-section]").forEach(el=>{
    if(el.dataset.section===section) el.setAttribute("aria-current","page");
    else el.removeAttribute("aria-current");
  });
  sections.innerHTML = section==="analysis" ? link("#analysis","All analysis",!topic)+[...new Set(data.analysis.map(a=>a.group))].map(g=>link("#analysis/"+encodeURIComponent(g),g,topic===g)).join("") : link("#notes/narrative/1","Narrative",topic==="narrative")+data.topics.map(t=>link("#notes/"+t.id,t.title,topic===t.id)).join("")+link("#notes/processes","Process studies",topic==="processes")+link("#notes/traveler","Traveler anatomy",topic==="traveler");
}
function renderPage(n) {
  const page=pageById(n)||data.pages[0];
  const position=data.pages.indexOf(page);
  main.innerHTML='<p class="eyebrow">Notes / Narrative</p><p class="lead">A page at a time, in source order. Choose a numbered leaf or continue with the arrows below.</p><nav class="page-grid" aria-label="Narrative pages">'+data.pages.map(p=>'<a href="'+pageHref(p.n)+'" title="'+esc(p.title)+'" aria-label="Page '+p.n+': '+esc(p.title)+'"'+(p.n===page.n?' aria-current="page"':'')+'>'+String(p.n).padStart(2,"0")+'</a>').join("")+'</nav><article class="sheet"><p class="eyebrow"><span>Leaf '+String(position+1).padStart(2,"0")+' / '+data.pages.length+'</span><span>Source P'+String(page.n).padStart(3,"0")+'</span></p><h2>'+esc(page.title)+'</h2><p class="source-label">Revised learning notes · reported / unverified</p>'+bullets(page.bullets)+'<div class="note-box"><strong>Keep in view</strong>'+bullets(page.flags)+'</div>'+sourceDetail(page)+'</article><nav class="pager" aria-label="Previous and next note">'+(position>0?link(pageHref(data.pages[position-1].n),"← "+data.pages[position-1].title):"<span></span>")+(position<data.pages.length-1?link(pageHref(data.pages[position+1].n),data.pages[position+1].title+" →"):"<span>End of this source set</span>")+'</nav>';
}
function renderTopic(id) {
  const topic=data.topics.find(t=>t.id===id);
  if(!topic) {renderPage(1);return;}
  main.innerHTML='<p class="eyebrow">Notes / Reference</p><h2>'+esc(topic.title)+'</h2><p class="lead">'+esc(topic.intro)+'</p>'+topic.cards.map(([title,text,ids,extra])=>'<article class="card"><span class="status">Sourced synthesis · unverified local claims</span><h3>'+esc(title)+'</h3><p>'+esc(text)+'</p>'+sources(ids,extra)+'</article>').join("")+'<h3 style="margin-top:36px">All source pages in this topic</h3><p class="source-label">Open a page for the full revised note and source wording.</p><div class="topic-pages">'+topic.pages.map(n=>'<a href="'+pageHref(n)+'"><span>'+String(n).padStart(2,"0")+'</span>'+esc(pageById(n).title)+'</a>').join("")+'</div>';
}
function renderGuides(id) {
  const selected=data.guides.find(g=>g.id===id);
  main.innerHTML='<p class="eyebrow">Notes / Process studies</p><h2>'+(selected?esc(selected.title):"Understand the handoff.")+'</h2><p class="lead">Reconstructed study sequences from incomplete notes. Review the gaps with the procedure owner before using them to perform work.</p><nav class="analysis-nav" aria-label="Process studies">'+data.guides.map(g=>link("#notes/processes/"+g.id,g.title,selected===g)).join("")+'</nav>';
  if(!selected){
    main.innerHTML+='<div class="map" aria-label="Candidate route; branches are unresolved"><span>Inspection</span><b>→</b><span>QT1</span><b>→</b><span>Diagnostic</span><b>→</b><span>Repair</span><b>→</b><span>QT3</span><b>→</b><span>Run-In</span></div><p class="source-label">Candidate route from the initial context and later notes; not every unit is known to follow this path. Pass, fail, retry and rework branches are unresolved.</p>'+data.guides.map(g=>'<article class="card"><h3>'+link("#notes/processes/"+g.id,g.title)+'</h3><p>'+esc(g.purpose)+'</p>'+sources(g.sources,g.extraSource)+'</article>').join("");
    return;
  }
  main.innerHTML+='<article class="sheet"><p>'+esc(selected.purpose)+'</p><div class="note-box"><strong>Study sequence only</strong><p>Source gaps prevent this from being an approved or complete operating procedure. The wording organizes the account; it does not authorize actions.</p></div><ol class="study-list">'+selected.steps.map(step=>"<li>"+esc(step)+"</li>").join("")+'</ol><h3>What must be clarified</h3>'+bullets(selected.gaps)+sources(selected.sources,selected.extraSource)+'</article>';
}
function renderTraveler() {
  main.innerHTML='<p class="eyebrow">Notes / Record anatomy</p><h2>The Traveler carries the case.</h2><p class="lead">A field map derived from P048 and the separate illustrated reference T01. Example identities, customer labels, codes and original images are excluded.</p><article class="sheet"><h3>Identity and context</h3>'+bullets(["Received date, country, model/configuration, part number and receiving status.","Unit-matching fields: serial number, service tag, depot number and SR number. Values stay in workplace systems.","Machine model and accessories provide additional context."])+'<h3>Account of the work</h3>'+bullets(["Customer failure description preserves the reported symptom.","Repair notice records actions taken. An action is not proof that the fault was resolved.","Inspection, Pre scan, Diagnostic, Repair, Leak test, Refill, TIM curing, QC and OBA have Pass/Fail and failure-comment areas in T01."])+'<div class="note-box"><strong>Still unknown</strong><p>The current form revision, row owners, optional stages, abbreviations and relationship between row order and actual routing need confirmation.</p></div>'+sources([48])+sourceDetail(data.traveler)+'</article>';
}
function renderAnalysis(group) {
  const entries=group?data.analysis.filter(a=>a.group===group):data.analysis;
  main.innerHTML='<p class="eyebrow">SIFT / Analysis</p><h2>Questions that make<br>the system clearer.</h2><p class="lead">Interpretations, hypotheses and proposals derived from the notes. No measured savings, confirmed diagnoses or personality assessments are implied.</p>'+entries.map(a=>'<article class="card" id="'+a.id+'"><span class="status">'+esc(a.id+" · "+a.group+" · "+a.status)+'</span><h3>'+esc(a.title)+'</h3><p>'+esc(a.text)+'</p><p class="next"><strong>Next useful step:</strong> '+esc(a.next)+'</p>'+sources(a.sources)+'</article>').join("");
  if(!entries.length) main.innerHTML+='<p class="empty">No analysis group found. '+link("#analysis","View all analysis")+'</p>';
}
function searchRecords(query) {
  const terms=query.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
  const records=[
    ...data.pages.map(p=>({type:"Note · P"+String(p.n).padStart(3,"0"),title:p.title,body:[...p.bullets,p.text,...p.flags].join(" "),href:pageHref(p.n)})),
    ...data.topics.flatMap(t=>t.cards.map(([title,text])=>({type:"Reference · "+t.title,title,body:text,href:"#notes/"+t.id}))),
    ...data.guides.map(g=>({type:"Process study",title:g.title,body:[g.purpose,...g.steps,...g.gaps].join(" "),href:"#notes/processes/"+g.id})),
    ...data.analysis.map(a=>({type:"Analysis · "+a.status,title:a.title,body:a.text+" "+a.next,href:"#analysis/"+encodeURIComponent(a.group)+"/"+a.id})),
    {type:"Reference · T01",title:"Traveler anatomy",body:data.traveler.text,href:"#notes/traveler"}
  ];
  return terms.length?records.filter(r=>terms.every(term=>(r.title+" "+r.body).toLocaleLowerCase().includes(term))):[];
}
function render() {
  let parts;
  try {parts=decodeURIComponent(location.hash.slice(1)).split("/");} catch {parts=[];}
  const section=parts[0]==="analysis"?"analysis":"notes";
  const topic=parts[1]||(section==="notes"?"narrative":"");
  nav(section,topic);
  const query=search.value.trim();
  clearSearch.hidden=!query;
  if(query){
    const results=searchRecords(query);
    count.textContent=results.length+" results";
    main.innerHTML='<p class="eyebrow">Search / Entire notebook</p><h2>Find a useful connection.</h2><p class="lead">Results for “'+esc(query)+'” across notes, reference, process studies and analysis.</p>'+results.map(r=>'<a class="result" href="'+esc(r.href)+'"><small>'+esc(r.type)+'</small><h3>'+esc(r.title)+'</h3><p>'+esc(r.body.slice(0,200))+'…</p></a>').join("");
    if(!results.length)main.innerHTML+='<p class="empty">No matching entry. Try a component name or fewer words. The source set is incomplete; absence here does not mean no answer exists.</p>';
    return;
  }
  count.textContent="";
  if(section==="analysis")renderAnalysis(topic);
  else if(topic==="narrative")renderPage(parts[2]);
  else if(topic==="processes")renderGuides(parts[2]);
  else if(topic==="traveler")renderTraveler();
  else renderTopic(topic);
  document.title=(main.querySelector("h2")?.textContent||"Field Notes")+" · Trinity Hub";
  if(section==="analysis" && /^A\d+$/.test(parts[2]||"")) document.getElementById(parts[2])?.scrollIntoView();
}
search.addEventListener("input",render);
clearSearch.addEventListener("click",()=>{search.value="";render();search.focus();});
document.querySelector("#print").addEventListener("click",()=>window.print());
document.addEventListener("click",event=>{
  const anchor=event.target.closest('a[href^="#"]');
  if(anchor && anchor.getAttribute("href")!=="#main" && search.value){search.value="";render();}
});
window.addEventListener("hashchange",render);
render();
