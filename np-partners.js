/* ===== 27 Oct 2026: ADMIN "Partner brands" dashboard (add-only, nothing existing changed).
   Shows only to admins: button appears inside the admin card (My account) and in Control Center > All dashboards.
   59 partners from the 27 Oct 2026 directory. Status / link / earnings / note are editable and saved on this device (localStorage).
   Export CSV button for backup. Add to index.html before </body>:  <script src="np-partners.js"></script> ===== */
(function(){
  if(window.__npPartners)return;window.__npPartners=true;
  if(typeof panel==="undefined"||typeof sheet==="undefined")return;
  var KEY="np_partners_v1";
  var ST=["Not applied","Applied","Approved","Joined","Verifying","Link ready","Authorized","Unverified","Rejected"];
  var AT="ACCESSTRADE TH",DI="Direct";
  /* [name, source, default status, affiliate link ("" = not provided)] */
  var D=[
   ["TG Fone",AT],["Mobi Online by SPVi",AT],["Codashop",AT],["Sephora Thailand",AT],["Thisshop",AT],["Puma Thailand",AT],["Advice Online",AT],["JD Sport",AT],
   ["Go City CPS",AT,"","https://gocity.tpx.lt/QGL2a9Q5"],["Decathlon (Thailand)",AT],["Acerpure Shopee Mall",AT],["Villains SF Shopee Shop",AT],
   ["Airalo - eSIM Store",AT,"","https://airalo.tpx.lt/wtbHFEU2"],["Pelago by Singapore Airlines",AT],["LG Thailand",AT],["CaseClub Online",AT],["Ustore Affiliate SPVi",AT],
   ["CarCash / Car4Cash",AT],["DMM Point Shop",AT],["Adidas Thailand",AT],["Lenovo TH",AT],["ANC Broker",AT],["Traveloka",AT],["iQIYI",AT],["Tune Protect Travel Insurance",AT],
   ["Electrolux",AT],["Anantara Hotels & Resorts",AT],["Como Hotels and Resorts",AT],["Centara Hotels & Resorts",AT],["LEARN PDPA E-Learning",AT],["COMPASIA (Thailand)",AT],
   ["Thanachart Travel Insurance",AT],["HungryHub",AT],["Roddonjai_seller",AT],["ES Skincare Affiliate",AT],["Beauty Buffet (Lazada/Shopee)",AT],["TikTok Shop TH",AT],
   ["Temu Affiliate Program",AT],["Singer Affiliate Program",AT],["HP Thailand Affiliate",AT],["Berry Mobile TRAVeSIM / NihonSIM",AT],["SASOM Affiliate [Web]",AT],
   ["OPPO Thailand",AT],["Krungsri Lady Titanium Card",AT],
   ["Expedia",DI,"Approved"],
   ["Agoda",DI,"Verifying","https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1978831&hl=en-us&city=8584"],
   ["Trip.com",DI,"Joined","https://www.trip.com/hotels/list?city=622&display=Pattaya&optionId=622&optionType=City&optionName=Pattaya&Allianceid=11125087&SID=334380824&trip_sub1=&trip_sub3=D20665514"],
   ["Klook / Klook.com",DI],
   ["12Go.com",DI,"Joined","https://12go.asia/?z=17297397"],
   ["DiscoverCars.com",DI,"Approved","https://www.discovercars.com/?a_aid=Rahulsood03"],
   ["Ticket 2 Attraction",DI],["Grab Taxi",DI],["Grab Motorbike Taxi & Cars",DI],["Grab Food",DI],["Grab Express / Deliveries",DI],["Gtqb Express",DI],["Khunclean",DI],
   ["KKday","Partner link generated","Link ready","https://www.kkday.com?cid=27689&ud1=NamastePattaya&ud2="],
   ["Skoot","Promotion authorized","Authorized"]
  ].map(function(r,i){return {i:i,n:r[0],s:r[1],st:r[2]||(r[1]===AT?"Approved":"Unverified"),l:r[3]||""}});
  var q="",fs="all",ff="all",fl="all";
  function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
  function load(){try{return JSON.parse(localStorage.getItem(KEY)||"{}")}catch(e){return {}}}
  function save(o){try{localStorage.setItem(KEY,JSON.stringify(o))}catch(e){}}
  function rows(){var o=load();return D.map(function(d){var e=o[d.i]||{};return {i:d.i,n:d.n,s:d.s,st:e.st||d.st,l:e.l!=null?e.l:d.l,note:e.note||"",earn:+e.earn||0}})}
  function X(){return typeof ico==="function"?ico("close"):"x"}
  function B(n){return "฿"+Math.round(n).toLocaleString("en-US")}
  if(!document.getElementById("npPtCss")){var st=document.createElement("style");st.id="npPtCss";
    st.textContent='.nppt .kp{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:12px 0}.nppt .kp div{padding:10px;border-radius:14px;background:rgba(255,255,255,.06);text-align:center}.nppt .kp b{display:block;font-size:20px}.nppt .kp small{font-size:11px;opacity:.75}'+
    '.nppt .fl{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:8px 0}.nppt .fl input,.nppt .fl select,.nppt .ed input,.nppt .ed select{width:100%;min-height:44px;box-sizing:border-box;border-radius:12px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.07);color:inherit;font:inherit;padding:0 10px}.nppt .fl .full{grid-column:1/-1}'+
    '.nppt .it{border:1px solid rgba(255,255,255,.14);border-radius:14px;padding:10px 12px;margin:0 0 8px;background:rgba(255,255,255,.04)}.nppt .it .t{display:flex;justify-content:space-between;gap:8px;align-items:flex-start}.nppt .it b{font-size:15px}'+
    '.nppt .it small{display:block;opacity:.75;font-size:12px;margin-top:2px}.nppt .tg{font-size:11px;font-weight:700;padding:3px 9px;border-radius:999px;background:rgba(93,202,165,.18);color:#7be3a0;white-space:nowrap}.nppt .tg.no{background:rgba(255,255,255,.1);color:#ccc}'+
    '.nppt .ac{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px}.nppt .ac a,.nppt .ac button{min-height:40px;padding:0 14px;border-radius:999px;border:1px solid rgba(255,255,255,.22);background:transparent;color:inherit;font:inherit;font-size:13px;font-weight:700;text-decoration:none;display:inline-flex;align-items:center;cursor:pointer}'+
    '.nppt .ed{display:none;margin-top:8px;gap:8px;grid-template-columns:1fr 1fr}.nppt .ed.on{display:grid}.nppt .ed .full{grid-column:1/-1}.nppt .ed label{font-size:12px;opacity:.8;display:block}';
    document.head.appendChild(st)}
  function open(){
    try{lastFocus=document.activeElement}catch(e){}
    panel.innerHTML='<div class="pbody nppt"><div style="display:flex;justify-content:space-between;align-items:center"><h2 id="sheetTitle" style="font-size:20px">Partner brands</h2><button class="theme" id="ptX" aria-label="Close">'+X()+'</button></div>'+
     '<div id="ptK"></div><div class="fl"><input id="ptQ" class="full" type="search" placeholder="Search brand" aria-label="Search brand"><select id="ptS" aria-label="Source"><option value="all">All sources</option><option>'+AT+'</option><option>'+DI+'</option><option>Other</option></select>'+
     '<select id="ptF" aria-label="Status"><option value="all">All statuses</option>'+ST.map(function(s){return '<option>'+s+'</option>'}).join("")+'</select>'+
     '<select id="ptL" class="full" aria-label="Link"><option value="all">With and without link</option><option value="yes">With affiliate link</option><option value="no">Link missing</option></select></div>'+
     '<div class="ac" style="margin-bottom:10px"><button type="button" id="ptCsv">Export CSV</button></div><div id="ptList"></div>'+
     '<p style="font-size:12px;opacity:.7">Status, links, earnings and notes are saved on this device. Link "Not provided" means no verified affiliate URL yet. Status shown is not a claim of payout verification.</p></div>';
    sheet.classList.add("open");document.body.style.overflow="hidden";panel.scrollTop=0;
    var $=function(i){return panel.querySelector("#"+i)};
    $("ptX").onclick=function(){try{closeSheet()}catch(e){}};
    $("ptQ").value=q;$("ptS").value=fs;$("ptF").value=ff;$("ptL").value=fl;
    $("ptQ").oninput=function(){q=this.value;draw()};$("ptS").onchange=function(){fs=this.value;draw()};$("ptF").onchange=function(){ff=this.value;draw()};$("ptL").onchange=function(){fl=this.value;draw()};
    $("ptCsv").onclick=csv;draw();
    try{if(window.npTrack)window.npTrack("service_open","admin_partners")}catch(e){}
  }
  function draw(){
    var all=rows(),$=function(i){return panel.querySelector("#"+i)};if(!$("ptList"))return;
    var wl=all.filter(function(r){return r.l}).length,ap=all.filter(function(r){return /^(Approved|Joined|Link ready|Authorized)$/.test(r.st)}).length,earn=all.reduce(function(s,r){return s+r.earn},0);
    $("ptK").innerHTML='<div class="kp"><div><b>'+all.length+'</b><small>Partners</small></div><div><b>'+ap+'</b><small>Approved / live</small></div><div><b>'+wl+'</b><small>With link</small></div><div><b>'+(all.length-wl)+'</b><small>Link missing</small></div><div><b>'+all.filter(function(r){return r.s===AT}).length+'</b><small>Accesstrade</small></div><div><b>'+B(earn)+'</b><small>Earned</small></div></div>';
    var t=q.trim().toLowerCase();
    var l=all.filter(function(r){return (!t||r.n.toLowerCase().indexOf(t)>-1)&&(fs==="all"||(fs==="Other"?(r.s!==AT&&r.s!==DI):r.s===fs))&&(ff==="all"||r.st===ff)&&(fl==="all"||(fl==="yes"?!!r.l:!r.l))});
    $("ptList").innerHTML=l.length?l.map(function(r){return '<div class="it" data-i="'+r.i+'"><div class="t"><div style="min-width:0"><b>'+(r.i+1)+'. '+esc(r.n)+'</b><small>'+esc(r.s)+' · '+esc(r.st)+(r.earn?' · '+B(r.earn):'')+'</small></div><span class="tg'+(r.l?'':' no')+'">'+(r.l?'Link ready':'No link')+'</span></div>'+
      (r.note?'<small>Note: '+esc(r.note)+'</small>':'')+
      '<div class="ac">'+(r.l?'<a href="'+esc(r.l)+'" target="_blank" rel="noopener noreferrer sponsored">Open</a><button type="button" data-cp>Copy link</button>':'')+'<button type="button" data-ed>Edit</button></div>'+
      '<div class="ed"><div class="full"><label>Status</label><select data-f="st">'+ST.map(function(s){return '<option'+(s===r.st?' selected':'')+'>'+s+'</option>'}).join("")+'</select></div>'+
      '<div class="full"><label>Affiliate link</label><input data-f="l" value="'+esc(r.l)+'" placeholder="https://..." inputmode="url"></div>'+
      '<div><label>Earned (฿)</label><input data-f="earn" value="'+(r.earn||"")+'" inputmode="decimal"></div><div><label>Note</label><input data-f="note" value="'+esc(r.note)+'" maxlength="120"></div>'+
      '<div class="full ac"><button type="button" data-sv>Save</button></div></div></div>'}).join(""):'<p>No partner found.</p>';
    [].forEach.call($("ptList").querySelectorAll(".it"),function(c){var i=+c.dataset.i,r=all[i];
      var ed=c.querySelector("[data-ed]");ed.onclick=function(){c.querySelector(".ed").classList.toggle("on")};
      var cp=c.querySelector("[data-cp]");if(cp)cp.onclick=function(){var b=this;(navigator.clipboard?navigator.clipboard.writeText(r.l):Promise.reject()).then(function(){b.textContent="Copied"},function(){prompt("Copy link:",r.l)})};
      c.querySelector("[data-sv]").onclick=function(){var o=load(),e={};[].forEach.call(c.querySelectorAll("[data-f]"),function(x){e[x.dataset.f]=x.value.trim()});
        o[i]={st:e.st,l:e.l,note:e.note,earn:parseFloat(String(e.earn).replace(/[^0-9.]/g,""))||0};save(o);draw()}});
  }
  function csv(){
    var h=["#","Brand","Source","Status","Affiliate link","Earned THB","Note"],all=rows();
    function q2(v){return '"'+String(v==null?"":v).replace(/"/g,'""')+'"'}
    var t=[h.map(q2).join(",")].concat(all.map(function(r){return [r.i+1,r.n,r.s,r.st,r.l||"Not provided",r.earn,r.note].map(q2).join(",")})).join("\n");
    var a=document.createElement("a");a.href=URL.createObjectURL(new Blob(["\ufeff"+t],{type:"text/csv"}));a.download="namaste-pattaya-partners-27Oct2026.csv";document.body.appendChild(a);a.click();setTimeout(function(){a.remove()},500);
  }
  window.npPartnersAdmin=open;
  /* buttons: admin card in My account, and Control Center > All dashboards */
  function add(){
    var adm=panel.querySelector(".lcard.adm");
    if(adm&&!adm.querySelector("#npPartBtn")){var b=document.createElement("button");b.className="pill";b.id="npPartBtn";b.type="button";b.textContent="Partner brands";b.onclick=open;adm.appendChild(b)}
    var g=panel.querySelector(".npcc-grid");
    if(g&&!g.querySelector("#npPartTile")){var t=document.createElement("button");t.id="npPartTile";t.type="button";t.innerHTML='<b>Partner brands</b><small>59 affiliate partners, links, status</small>';t.onclick=open;g.appendChild(t)}
  }
  var busy=false;new MutationObserver(function(){if(busy)return;busy=true;requestAnimationFrame(function(){busy=false;add()})}).observe(panel,{childList:true,subtree:true});
  add();
})();
