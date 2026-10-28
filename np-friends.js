/* ===== 20 Oct 2026 (Rahul): PRE-LAUNCH LOCK "Coming soon" on every address (namastepattaya.com, www, vercel.app).
   Password: JAISHREERAM (small or capital letters both work). Only a hash is stored here, not the password.
   A phone remembers it after the first correct entry. Investor link: add ?code=JAISHREERAM
   On launch day set NP_LOCK2_ON=false. Old code NAMASTE10DEC no longer opens this lock. ===== */
(function(){
  var NP_LOCK2_ON=true, HASH="fbdb347ca54d0b9832fcecc6839503097802c4c3494d04d4489fd247c204812e", KEY="np_access2";
  if(!NP_LOCK2_ON)return;
  try{var _k=localStorage.getItem(KEY);if(_k===HASH)return}catch(e){}
  var st=document.createElement("style");st.id="npLock2Css";
  st.textContent='html.npLocked,html.npLocked body{overflow:hidden!important}'+
  '#npLock2{position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;padding:24px;box-sizing:border-box;'+
    'background:radial-gradient(120% 80% at 50% 0%,#3a1d6e 0%,#140b26 55%,#07070f 100%);color:#fff;font-family:system-ui,-apple-system,"Segoe UI",sans-serif;text-align:center}'+
  '#npLock2 .bx{width:100%;max-width:360px;display:flex;flex-direction:column;gap:14px;align-items:center}'+
  '#npLock2 .lg{width:84px;height:84px;border-radius:24px;object-fit:cover;box-shadow:0 10px 30px rgba(255,61,127,.35)}'+
  '#npLock2 h1{margin:6px 0 0;font-size:22px;letter-spacing:2px;line-height:1.25}'+
  '#npLock2 h1 b{background:linear-gradient(90deg,#ff8a3d,#ff3d7f,#a46bff);-webkit-background-clip:text;background-clip:text;color:transparent}'+
  '#npLock2 .cs{font-size:15px;color:#cfc8ea}'+
  '#npLock2 input{width:100%;box-sizing:border-box;height:52px;border-radius:16px;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.08);color:#fff;font-size:17px;padding:0 16px;text-align:center;letter-spacing:1px;outline:none}'+
  '#npLock2 input:focus{border-color:#ff8a3d}'+
  '#npLock2 button{width:100%;height:52px;border:0;border-radius:16px;background:linear-gradient(90deg,#ff8a3d,#ff3d7f);color:#fff;font-size:17px;font-weight:700;cursor:pointer}'+
  '#npLock2 .er{min-height:20px;font-size:14px;color:#ff9aa8}'+
  '#npLock2 .tg{font-size:13px;color:#ffb48a;margin-top:10px}';
  (document.head||document.documentElement).appendChild(st);
  document.documentElement.classList.add("npLocked");
  function sha(t){return crypto.subtle.digest("SHA-256",new TextEncoder().encode(t)).then(function(b){return Array.from(new Uint8Array(b)).map(function(x){return x.toString(16).padStart(2,"0")}).join("")})}
  function check(c){return sha(String(c||"").trim().replace(/\s+/g,"").toUpperCase()).then(function(h){return h===HASH})}
  function open(){try{localStorage.setItem(KEY,HASH)}catch(e){}var o=document.getElementById("npLock2");if(o)o.remove();document.documentElement.classList.remove("npLocked")}
  function build(){
    if(document.getElementById("npLock2"))return;
    var o=document.createElement("div");o.id="npLock2";o.setAttribute("role","dialog");o.setAttribute("aria-label","Coming soon");
    o.innerHTML='<div class="bx"><img class="lg" src="logo-192.png" alt="" onerror="this.style.display=\'none\'">'+
      '<h1>NAMASTE PATTAYA<br><b>RESERVATIONS</b></h1><div class="cs">Coming soon · 10 December 2026</div>'+
      '<input id="npLock2In" type="password" autocomplete="off" placeholder="Enter access code" aria-label="Access code">'+
      '<button id="npLock2Go" type="button">Enter</button><div class="er" id="npLock2Er" role="status"></div>'+
      '<div class="tg">Bharat ke liye, ek Bhartiye ka tohfa. Jai Hind</div></div>';
    (document.body||document.documentElement).appendChild(o);
    var i=document.getElementById("npLock2In"),g=document.getElementById("npLock2Go"),er=document.getElementById("npLock2Er");
    function go(){g.disabled=true;check(i.value).then(function(ok){g.disabled=false;if(ok)open();else{er.textContent="Wrong code. Please try again.";i.value="";i.focus()}}).catch(function(){g.disabled=false;er.textContent="Please try again."})}
    g.onclick=go;i.addEventListener("keydown",function(e){if(e.key==="Enter")go()});
  }
  var q=null;try{q=new URLSearchParams(location.search).get("code")}catch(e){}
  build();
  if(q)check(q).then(function(ok){if(ok)open()});
  new MutationObserver(function(){if(!document.getElementById("npLock2")&&document.documentElement.classList.contains("npLocked"))build()}).observe(document.documentElement,{childList:true,subtree:true});
})();

/* ===== EARLY (16 Oct 2026, Rahul): free entry at every club. Runs before the lists are built. ===== */
(function(){
  try{
    if(typeof CLUBS!=="undefined"){CLUBS.forEach(function(c){
      if(!c||!c.pkgs)return;var has=false;
      c.pkgs.forEach(function(p){if(/entry|day ?pass|cover|guest ?list/i.test(p.n||"")){p.p=0;has=true}});
      if(!has&&(c.cat==="nightlife"||c.cat==="beach")){var base=c.pkgs[0]||{};c.pkgs.unshift(Object.assign({},base,{n:"Entry (guest list)",d:"Free entry",p:0}))}
    })}
  }catch(e){}
})();
/* Namaste Pattaya Reservations: Find a buddy (one feature, clear purpose), Find My Friends & Bill Splitter */
(function(){
  var sb=window.supabase?window.supabase.createClient("https://mymtgbmcjbwsnetzwgoy.supabase.co","sb_publishable_ViFodxG8kAENr78Fyp-BwQ_iA_BfAD0"):null;
  var TITLE="Friends Location & Bill Splitter";
  function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
  function rer(list){list.forEach(function(f){try{if(typeof window[f]==="function")window[f]()}catch(e){}})}

  if(typeof INTENTS!=="undefined")INTENTS.forEach(function(i){if(i[0]==="dating")i[2]="Boomer in social places"});
  if(typeof LNAV!=="undefined")LNAV.forEach(function(n){if(n[0]==="friend")n[1]="Boomer"});
  var ht=document.querySelector('.hubtile[data-go="buddy"]');
  if(ht){var hb=ht.querySelector("b"),hs=ht.querySelector("small");if(hb)hb.textContent="Boomer";if(hs)hs.textContent="Meet travellers, safely"}
  var ga=document.querySelector(".goldarea");
  if(ga){
    var dt=ga.querySelector('[data-g="dating"]');if(dt)dt.hidden=true;
    var gt=ga.querySelector(".gtiles");if(gt)gt.style.gridTemplateColumns="1fr 1fr";
    var gb=ga.querySelector('[data-g="buddy"] small');if(gb)gb.textContent="Meet travellers, safely";
    var gp=ga.querySelector(".gtop p");if(gp)gp.textContent="Meet travellers safely, find your friends and split bills.";
    var ft=ga.querySelector('[data-g="friend"]');if(ft){ft.querySelector("b").textContent="Friends & bill splitter";ft.querySelector("small").textContent="Find your group, share costs";ft.onclick=function(){openBoth("find")}}
  }
  rer(["renderIntents","renderLive","renderPeople","renderSwipe","renderLadies"]);

  var sec=document.getElementById("buddy");
  if(sec&&!document.getElementById("npPurpose")){
    var pc=document.createElement("div");pc.id="npPurpose";pc.className="lcard hl nppurpose";
    pc.innerHTML='<span class="k">OUR PURPOSE</span><h4>Boomer is a social feature</h4>'+
      '<p>Boomer helps travellers meet in groups and in public places: for a club night, a meal, sports or sightseeing. It is not an escort, companion or matchmaking service.</p>'+
      '<ul><li>18+ only. Meet only in public places.</li>'+
      '<li>No money, gifts or payment may be offered or asked for meeting anyone.</li>'+
      '<li>Offering or asking for paid companionship or sexual services is forbidden under Thai law (Prevention and Suppression of Prostitution Act B.E. 2539). Such accounts are removed and may be reported to the Thai police.</li>'+
      '<li>Report anyone who breaks these rules. We review every report.</li></ul>'+
      '<button class="pill on" id="npFindBtn" style="margin-top:12px">'+TITLE+'</button>';
    var t=sec.querySelector(".sectiontitle");if(t)t.insertAdjacentElement("afterend",pc);else sec.insertBefore(pc,sec.firstChild);
    pc.querySelector("#npFindBtn").onclick=function(){openBoth("find")};
  }
  var gate=document.getElementById("buddyGate");
  if(gate&&!document.getElementById("bRules")){
    var lab=document.createElement("label");lab.style.cssText="display:flex;gap:8px;align-items:flex-start;margin-top:10px;font-size:14px";
    lab.innerHTML='<input type="checkbox" id="bRules"> I agree to the Boomer rules: social meetings in public places only, and no money or paid services of any kind.';
    var st=document.getElementById("bStart");if(st)st.insertAdjacentElement("beforebegin",lab);
    gate.addEventListener("click",function(e){
      if(!e.target.closest||!e.target.closest("#bStart"))return;
      if(!document.getElementById("bRules").checked){e.stopImmediatePropagation();e.preventDefault();var er=document.getElementById("bErr");if(er)er.textContent="Please agree to the Boomer rules."}
    },true);
  }

  var BAD=/(money|cash|\bpay\b|\bpaid\b|payment|price|\brate\b|baht|฿|\btip\b|short ?time|long ?time|happy ending|escort|\bsex)/i;
  function blocked(){var i=panel.querySelector("#bIn");return i&&BAD.test(i.value)}
  function warn(){var w=panel.querySelector("#bWarn");if(!w){w=document.createElement("p");w.id="bWarn";w.className="err";var bar=panel.querySelector(".chatbar");if(bar)bar.insertAdjacentElement("afterend",w)}
    w.textContent="For everyone's safety, messages about money, payment or paid services are not allowed in Boomer. Please keep it social."}
  panel.addEventListener("click",function(e){if(e.target.closest&&e.target.closest("#bSend")&&blocked()){e.stopImmediatePropagation();e.preventDefault();warn()}},true);
  panel.addEventListener("keydown",function(e){if(e.target&&e.target.id==="bIn"&&e.key==="Enter"&&blocked()){e.stopImmediatePropagation();e.preventDefault();warn()}},true);

  if(!sb)return;

  var user=null,code="",watchId=null,me=null,lastSend=0,stopTimer=null,chan=null,members=[],pending="";
  try{code=localStorage.getItem("np_find_code")||""}catch(e){}
  function saveCode(c){code=c;try{c?localStorage.setItem("np_find_code",c):localStorage.removeItem("np_find_code")}catch(e){}}
  function myName(){var m=(user&&user.user_metadata)||{};return String(m.name||((user&&user.email)||"Friend").split("@")[0]).split(/\s+/)[0]}
  function genCode(){var s="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",o="";for(var i=0;i<6;i++)o+=s[Math.floor(Math.random()*s.length)];return o}
  function dist(a,b,c,d){var R=6371000,r=Math.PI/180,x=(c-a)*r,y=(d-b)*r,h=Math.sin(x/2)*Math.sin(x/2)+Math.cos(a*r)*Math.cos(c*r)*Math.sin(y/2)*Math.sin(y/2);return 2*R*Math.asin(Math.sqrt(h))}
  function dir(a,b,c,d){var r=Math.PI/180,y=Math.sin((d-b)*r)*Math.cos(c*r),x=Math.cos(a*r)*Math.sin(c*r)-Math.sin(a*r)*Math.cos(c*r)*Math.cos((d-b)*r);var deg=(Math.atan2(y,x)/r+360)%360;return ["north","north-east","east","south-east","south","south-west","west","north-west"][Math.round(deg/45)%8]}
  function ago(t){var s=(Date.now()-new Date(t).getTime())/1000;return s<60?"just now":s<3600?Math.round(s/60)+" min ago":Math.round(s/3600)+" h ago"}
  function fmtD(m){return m<1000?Math.round(m)+" m":(m/1000).toFixed(1)+" km"}

  async function join(c){
    c=String(c||"").toUpperCase().replace(/[^A-Z0-9]/g,"");if(c.length<4)return "Enter the group code.";
    var r=await sb.from("np_finder").upsert({code:c,user_id:user.id,name:myName(),sharing:false});
    if(r.error)return r.error.message;saveCode(c);subscribe();return null;
  }
  async function leave(){stopShare();if(code&&user)await sb.from("np_finder").delete().eq("code",code).eq("user_id",user.id);saveCode("");if(chan){sb.removeChannel(chan);chan=null}members=[];render()}
  function startShare(){
    if(!navigator.geolocation){alert("Location is not available on this phone.");return}
    watchId=navigator.geolocation.watchPosition(function(p){
      me=p.coords;var now=Date.now();
      if(now-lastSend>15000){lastSend=now;sb.from("np_finder").upsert({code:code,user_id:user.id,name:myName(),lat:me.latitude,lng:me.longitude,acc:me.accuracy,sharing:true,updated_at:new Date().toISOString()}).then(function(){})}
      render();
    },function(){alert("Please allow location for this app so your group can find you.");stopShare()},{enableHighAccuracy:true,maximumAge:10000,timeout:20000});
    clearTimeout(stopTimer);stopTimer=setTimeout(stopShare,3*3600*1000);render();
  }
  function stopShare(){
    if(watchId!==null){navigator.geolocation.clearWatch(watchId);watchId=null}
    clearTimeout(stopTimer);lastSend=0;
    if(user&&code)sb.from("np_finder").update({sharing:false,lat:null,lng:null}).eq("code",code).eq("user_id",user.id).then(function(){});
    render();
  }
  async function load(){if(!code||!user)return;var r=await sb.from("np_finder").select("*").eq("code",code);members=r.data||[];render()}
  function subscribe(){
    if(chan){sb.removeChannel(chan);chan=null}
    if(!code||!user)return;
    chan=sb.channel("find-"+code).on("postgres_changes",{event:"*",schema:"public",table:"np_finder",filter:"code=eq."+code},load).subscribe();
    load();
  }
  function render(){
    var root=document.getElementById("fdRoot");if(!root)return;
    var h='<div></div><p class="about">Got separated from your group? Share your location with your friends only, and find each other fast.</p>';
    if(!user){
      h+='<p class="small">Log in first to use Friends location.</p><button class="cta" id="fdLog">Log in</button>';
    }else if(!code){
      h+='<button class="cta" id="fdNew">Start a group</button>'+
        '<p class="small" style="margin:14px 0 6px">Or join your friends with their code:</p>'+
        '<div class="post"><input id="fdIn" placeholder="e.g. K7Q2XM" autocapitalize="characters"><button id="fdJoin">Join</button></div><p class="err" id="fdE"></p>';
    }else{
      var link=location.origin+location.pathname+"#find/"+code;
      var sharing=watchId!==null;
      h+='<div class="lcard hl"><span class="k">YOUR GROUP CODE</span><div class="fdcode notranslate" translate="no">'+esc(code)+'</div>'+
        '<div class="fdbtns"><a class="pill on" target="_blank" rel="noopener" style="text-decoration:none" href="https://wa.me/?text='+encodeURIComponent("Join my group on Namaste Pattaya Reservations so we can find each other and split bills: "+link+" (code "+code+")")+'">Invite on WhatsApp</a></div></div>'+
        '<div class="lcard"><div class="lrow"><div><h4>'+(sharing?'<span class="fdlive">Sharing my location</span>':'Location sharing is off')+'</h4><p class="small">Only people in this group can see it. It stops automatically after 3 hours, when you tap Stop, or when you close the app.</p></div></div>'+
        '<div class="fdbtns">'+(sharing?'<button class="pill" id="fdStop">Stop sharing</button>':'<button class="pill on" id="fdStart">Share my location</button>')+'</div></div>'+
        '<h3 style="font-size:16px;margin:16px 0 8px">My group</h3>';
      var others=members.filter(function(m){return m.user_id!==user.id});
      if(!others.length)h+='<p class="small">No friends in this group yet. Send them the code or the WhatsApp invite.</p>';
      others.forEach(function(m){
        var line="Not sharing location",nav="";
        if(m.sharing&&m.lat!=null){
          line=me?(fmtD(dist(me.latitude,me.longitude,m.lat,m.lng))+" "+dir(me.latitude,me.longitude,m.lat,m.lng)+" · "+ago(m.updated_at)):("Sharing · "+ago(m.updated_at)+" · share your location to see the distance");
          nav='<a class="pill on" target="_blank" rel="noopener" style="text-decoration:none" href="https://www.google.com/maps/dir/?api=1&travelmode=walking&destination='+m.lat+','+m.lng+'">Navigate</a>';
        }
        h+='<div class="lcard"><div class="lrow"><div><h4>'+esc(m.name||"Friend")+'</h4><p class="small">'+esc(line)+'</p></div>'+nav+'</div></div>';
      });
      h+='<button class="linkbtn" id="fdLeave">Leave this group</button>';
    }
    root.innerHTML=h;
    var $=function(s){return root.querySelector(s)};
    if($("#fdLog"))$("#fdLog").onclick=function(){closeSheet();setTimeout(function(){var b=document.querySelector(".np-hbtn.user");if(b)b.click()},300)};
    if($("#fdNew"))$("#fdNew").onclick=async function(){this.disabled=true;var e=await join(genCode());if(e)alert(e)};
    if($("#fdJoin"))$("#fdJoin").onclick=async function(){var e=await join($("#fdIn").value);if(e)$("#fdE").textContent=e};
    if($("#fdStart"))$("#fdStart").onclick=startShare;
    if($("#fdStop"))$("#fdStop").onclick=stopShare;
    if($("#fdLeave"))$("#fdLeave").onclick=function(){if(confirm("Leave this group?"))leave()};
  }

  var tab="find",bills=[],bchan=null,bchanCode="";
  function B(n){n=Math.round(Number(n)||0);return "฿"+n.toLocaleString("en-US")}
  function inr(n){var r=(typeof INR_PER_THB!=="undefined")?INR_PER_THB:2.89;return "₹"+Math.round((Number(n)||0)*r).toLocaleString("en-IN")}
  async function loadBills(){
    if(!user||!code){renderBills();return}
    var m=await sb.from("np_finder").select("user_id,name").eq("code",code);members=m.data||members;
    var b=await sb.from("np_group_bills").select("*").eq("code",code).order("created_at",{ascending:false});bills=b.data||[];
    if(bchanCode!==code){if(bchan)sb.removeChannel(bchan);bchanCode=code;
      bchan=sb.channel("bills-"+code).on("postgres_changes",{event:"*",schema:"public",table:"np_group_bills",filter:"code=eq."+code},loadBills).subscribe()}
    renderBills();
  }
  function nameOf(id){if(user&&id===user.id)return "You";var m=members.find(function(x){return x.user_id===id});return m?(m.name||"Friend"):"Friend"}
  function settle(){
    var net={};members.forEach(function(m){net[m.user_id]=0});
    bills.forEach(function(b){var sw=b.split_with||[];if(!sw.length)return;var share=Number(b.amount)/sw.length;
      net[b.paid_by]=(net[b.paid_by]||0)+Number(b.amount);sw.forEach(function(u){net[u]=(net[u]||0)-share})});
    var cr=[],db=[];Object.keys(net).forEach(function(u){var v=Math.round(net[u]);if(v>0)cr.push([u,v]);else if(v<0)db.push([u,-v])});
    var out=[];cr.sort(function(a,b){return b[1]-a[1]});db.sort(function(a,b){return b[1]-a[1]});
    var i=0,j=0;while(i<db.length&&j<cr.length){var x=Math.min(db[i][1],cr[j][1]);if(x>0)out.push([db[i][0],cr[j][0],x]);db[i][1]-=x;cr[j][1]-=x;if(db[i][1]<=0)i++;if(cr[j][1]<=0)j++}
    return out;
  }
  function renderBills(){
    var root=document.getElementById("bsRoot");if(!root)return;
    if(!user){root.innerHTML='<p class="about">Log in first to split bills with your group.</p>';return}
    if(!code){root.innerHTML='<p class="about">Start or join a group in <b>Friends location</b> first. Then everyone in the group can add and split bills here.</p><button class="cta" id="bsGo">Go to Friends location</button>';
      root.querySelector("#bsGo").onclick=function(){tab="find";show()};return}
    var total=bills.reduce(function(s,b){return s+Number(b.amount)},0),st=settle(),myN=(user.user_metadata||{}).name||"Me";
    var h='<div class="lcard hl"><span class="k">GROUP '+esc(code)+'</span><h4>Total spent: '+B(total)+' <span class="small">('+inr(total)+')</span></h4><p class="small">'+members.length+' people in this group</p></div>'+
      '<h3 style="font-size:16px;margin:14px 0 8px">Add an expense</h3>'+
      '<div class="fields"><label class="full">What for<input id="bsW" placeholder="e.g. Table at Jalwa"></label>'+
      '<label>Amount (฿)<input id="bsA" inputmode="decimal" placeholder="6000"></label>'+
      '<label>Paid by<select id="bsP">'+members.map(function(m){return '<option value="'+m.user_id+'"'+(m.user_id===user.id?' selected':'')+'>'+esc(nameOf(m.user_id))+'</option>'}).join("")+'</select></label></div>'+
      '<p class="small" style="margin:8px 0 0">Split between</p><div class="chkl">'+members.map(function(m){return '<label><input type="checkbox" class="bsS" value="'+m.user_id+'" checked> '+esc(nameOf(m.user_id))+'</label>'}).join("")+'</div>'+
      '<button class="cta" id="bsAdd">Add expense</button><p class="err" id="bsE"></p>'+
      '<h3 style="font-size:16px;margin:16px 0 8px">Who owes whom</h3>'+
      (st.length?st.map(function(s){return '<div class="lcard"><div class="lrow"><span>'+esc(nameOf(s[0]))+' pays '+esc(nameOf(s[1]))+'</span><span class="bsamt">'+B(s[2])+'</span></div></div>'}).join("")+
        '<a class="pill on" style="display:inline-block;text-decoration:none;margin-top:4px" target="_blank" rel="noopener" href="https://wa.me/?text='+encodeURIComponent("Bill split ("+code+"), total "+B(total)+":\n"+st.map(function(s){return nameOf(s[0]).replace("You",myN)+" pays "+nameOf(s[1]).replace("You",myN)+" "+B(s[2])}).join("\n"))+'">Share on WhatsApp</a>'
        :'<p class="small">All settled. Nobody owes anything.</p>')+
      '<h3 style="font-size:16px;margin:16px 0 8px">Expenses</h3>'+
      (bills.length?bills.map(function(b){return '<div class="lcard"><div class="lrow"><div style="min-width:0"><h4>'+esc(b.what)+'</h4><p class="small">Paid by '+esc(nameOf(b.paid_by))+' · split '+(b.split_with||[]).length+' ways</p></div><span class="bsamt">'+B(b.amount)+'</span></div>'+
        (b.added_by===user.id?'<button class="linkbtn" data-del="'+b.id+'">Delete</button>':'')+'</div>'}).join(""):'<p class="small">No expenses yet.</p>');
    root.innerHTML=h;
    root.querySelector("#bsAdd").onclick=async function(){
      var E=root.querySelector("#bsE"),w=root.querySelector("#bsW").value.trim(),a=parseFloat(root.querySelector("#bsA").value.replace(/,/g,"")),p=root.querySelector("#bsP").value;
      var sw=[].map.call(root.querySelectorAll(".bsS:checked"),function(x){return x.value});
      if(!w){E.textContent="Say what the expense is for.";return}
      if(!(a>0)){E.textContent="Enter the amount in baht.";return}
      if(!sw.length){E.textContent="Pick at least one person to split with.";return}
      this.disabled=true;
      var r=await sb.from("np_group_bills").insert({code:code,what:w,amount:a,paid_by:p,split_with:sw});
      this.disabled=false;
      if(r.error){E.textContent=r.error.message;return}
      loadBills();
    };
    root.querySelectorAll("[data-del]").forEach(function(b){b.onclick=async function(){if(!confirm("Delete this expense?"))return;await sb.from("np_group_bills").delete().eq("id",b.dataset.del);loadBills()}});
  }

  function show(){
    var fd=document.getElementById("fdRoot"),bs=document.getElementById("bsRoot");if(!fd||!bs)return;
    document.querySelectorAll(".fbtabs [data-t]").forEach(function(b){b.setAttribute("aria-selected",b.dataset.t===tab)});
    fd.hidden=tab!=="find";bs.hidden=tab!=="bill";
    if(tab==="bill")loadBills();else load();
  }
  function openBoth(which){
    tab=which||tab;
    panel.innerHTML='<div class="fbhead"><h2 id="sheetTitle">'+TITLE+'</h2><button class="theme" id="fbX" aria-label="Close">'+ico("close")+'</button></div>'+
      '<div class="fbtabs" role="tablist"><button role="tab" data-t="find">Friends location</button><button role="tab" data-t="bill">Bill splitter</button></div>'+
      '<div class="pbody" id="fdRoot"></div><div class="pbody" id="bsRoot"></div>';
    panel.querySelector("#fbX").onclick=closeSheet;
    panel.querySelectorAll(".fbtabs [data-t]").forEach(function(b){b.onclick=function(){tab=b.dataset.t;show()}});
    sheet.classList.add("open");document.body.style.overflow="hidden";panel.scrollTop=0;
    render();show();
  }
  window.openFinder=function(){openBoth()};

  if(location.hash.indexOf("#find/")===0)pending=location.hash.slice(6);
  async function onUser(u){
    user=u;
    if(!u){stopShare();return}
    if(pending){var c=pending;pending="";await join(c);openBoth("find")}
    else if(code)subscribe();
  }
  sb.auth.getSession().then(function(r){onUser(r.data.session?r.data.session.user:null);if(!r.data.session&&pending)openBoth("find")});
  sb.auth.onAuthStateChange(function(e,s){var u=s?s.user:null;if((u&&u.id)!==(user&&user.id))onUser(u)});
})();

/* ===== service names (on screen); Skydiving removed ===== */
(function(){
  try{
    if(typeof CATS!=="undefined")for(var i=CATS.length-1;i>=0;i--)if(CATS[i][0]==="skydiving")CATS.splice(i,1);
    if(typeof TYPES!=="undefined"){var ti=TYPES.indexOf("Skydiving");if(ti>-1)TYPES.splice(ti,1)}
    if(typeof COMMISSION_CATS!=="undefined"){var ci=COMMISSION_CATS.indexOf("skydiving");if(ci>-1)COMMISSION_CATS.splice(ci,1)}
    if(typeof CATNAME!=="undefined")delete CATNAME.skydiving;
  }catch(e){}
  var REN={"Golf":"Golf & Shooting Range","Shopping & Markets":"Namaste Shopping","Event & Party Planning":"Events, Groups & Gala Parties","Desi Chai & Spices":"Indian Groceries","Chai & Spices":"Indian Groceries","Desi Chai and Spices":"Indian Groceries"};
  function fixText(el){[].forEach.call(el.childNodes,function(n){if(n.nodeType===3){var t=n.textContent.trim();if(REN[t])n.textContent=REN[t]}})}
  function fix(){
    document.querySelectorAll("#cats .cat, #chips .chip, #mapCat option, #svcPage h2, #svcPage h3").forEach(fixText);
    /* Skydiving removed: take away any Skydiving tile, chip or option added earlier */
    document.querySelectorAll("#cats .cat, #chips .chip, #mapCat option").forEach(function(el){if(el.textContent.trim()==="Skydiving")el.remove()});
  }
  var busy=false;
  new MutationObserver(function(){if(busy)return;busy=true;requestAnimationFrame(function(){busy=false;fix()})})
    .observe(document.body,{childList:true,subtree:true});
  fix();
})();

/* ===== home: Namaste Gold (Boomer) + Friends Location & Bill Splitter for everyone ===== */
(function(){
  function vip(){try{return typeof isVIP==="function"&&!!isVIP()}catch(e){return false}}
  function css(){
    if(document.getElementById("npGoldCss"))return;
    var st=document.createElement("style");st.id="npGoldCss";
    st.textContent='.gperks{margin:12px 0 0;padding:0;list-style:none}.gperks li{display:flex;gap:8px;align-items:flex-start;padding:6px 0;font-size:14px;color:var(--ink)}.gperks li::before{content:"";flex:0 0 8px;height:8px;margin-top:7px;border-radius:50%;background:linear-gradient(135deg,#FFF1C6,#B9904A)}'+
      '.gshoot{width:100%;margin-top:8px;border:1px solid rgba(233,216,166,.5);border-radius:999px;padding:11px;background:transparent;color:#E9D8A6;font-weight:600}'+
      '.npflb{width:100%;margin:0 0 24px}.npflb .hubtile{width:100%}';
    document.head.appendChild(st);
  }
  function run(){
    css();
    var ga=document.querySelector(".goldarea");
    if(ga){
      var b=ga.querySelector('[data-g="buddy"]');
      if(b){b.querySelector("b").textContent="Boomer";b.querySelector("small").textContent="Unlimited likes and swipes, shown first"}
      var d=ga.querySelector('[data-g="dating"]');if(d)d.hidden=true;
      var f=ga.querySelector('[data-g="friend"]');if(f)f.hidden=true;
      var gt=ga.querySelector(".gtiles");if(gt)gt.style.gridTemplateColumns="1fr";
      var gp=ga.querySelector(".gtop p");if(gp)gp.textContent="Premium access for our most valued guests.";
      if(!ga.querySelector(".gperks")){
        var ul=document.createElement("ul");ul.className="gperks";
        ul.innerHTML='<li>Unlimited likes and swipes in Boomer, and your profile shown first</li>'+
          '<li>All Elite packages</li>'+
          '<li>Elite and luxury services (yacht, private jet, VIP concierge) with priority booking</li>'+
          '<li>One luxury photo and video shoot every month with our photographer</li>';
        (gt||ga).insertAdjacentElement("afterend",ul);
        var sh=document.createElement("button");sh.className="gshoot";sh.id="npShoot";
        ul.insertAdjacentElement("afterend",sh);
        sh.onclick=shoot;
      }
      paintShoot();
    }
    /* Friends Location & Bill Splitter: moved to the All services grid (29 Sep 2026) */
    var oldFLB=document.getElementById("npFLB");if(oldFLB)oldFLB.remove();
    var ht=document.querySelector('.hubtile[data-go="buddy"]');
    if(ht){var hb=ht.querySelector("b"),hs=ht.querySelector("small");if(hb)hb.textContent="Boomer";if(hs)hs.textContent="Social meetups, safely"}
    var stt=document.querySelector("#buddy .sectiontitle");if(stt)stt.textContent="Boomer";
    var ph=document.querySelector("#npPurpose h4");if(ph)ph.textContent="Boomer is a social feature";
    var fb=document.getElementById("npFindBtn");if(fb)fb.textContent="Friends Location & Bill Splitter";
  }
  /* monthly luxury shoot for Gold members */
  function month(){var d=new Date();return d.getFullYear()+"-"+(d.getMonth()+1)}
  function paintShoot(){
    var sh=document.getElementById("npShoot");if(!sh)return;
    var done=false;try{done=localStorage.getItem("np_shoot_month")===month()}catch(e){}
    sh.textContent=!vip()?"Monthly luxury shoot · Gold members":(done?"This month's luxury shoot is booked":"Book my luxury shoot this month");
    sh.disabled=vip()&&done;
  }
  function shoot(){
    if(!vip()){var p=document.getElementById("premBtn");if(p)p.click();return}
    try{if(localStorage.getItem("np_shoot_month")===month())return}catch(e){}
    if(typeof bookings!=="undefined"&&typeof store!=="undefined"){
      var who="";try{who=(JSON.parse(localStorage.getItem("np_buddy")||"null")||{}).name||""}catch(e){}
      bookings.unshift({code:"NP"+Math.random().toString(36).slice(2,7).toUpperCase(),club:"vip",pkg:"Monthly luxury photo and video shoot (Gold)",guests:1,date:new Date().toISOString(),time:"To be planned",name:who||"Gold member",phone:"",total:0,cat:"concierge"});
      store.set("np_bookings",bookings);
      if(typeof renderBookings==="function")try{renderBookings()}catch(e){}
    }
    try{localStorage.setItem("np_shoot_month",month())}catch(e){}
    alert("Your luxury shoot request is in. Our team will contact you to plan the date and place.");
    paintShoot();
  }
  run();window.addEventListener("load",run);setTimeout(run,1500);setTimeout(paintShoot,3000);
})();

/* ===== Boomer: 10 free likes/swipes per 24 hours, unlimited for Gold ===== */
(function(){
  var LIM=10,KEY="np_swipes",DAY=864e5;
  function vip(){try{return typeof isVIP==="function"&&!!isVIP()}catch(e){return false}}
  function used(){var a=[];try{a=JSON.parse(localStorage.getItem(KEY)||"[]")}catch(e){}var n=Date.now();return a.filter(function(t){return n-t<DAY})}
  function add(){var a=used();a.push(Date.now());try{localStorage.setItem(KEY,JSON.stringify(a))}catch(e){}}
  function left(){return vip()?Infinity:Math.max(0,LIM-used().length)}
  function hoursLeft(){var a=used();if(!a.length)return 0;return Math.max(1,Math.ceil((DAY-(Date.now()-a[0]))/36e5))}
  function counter(){
    var sw=document.querySelector(".swbtns");if(!sw)return;
    var c=document.getElementById("npLikes");
    if(!c){c=document.createElement("p");c.id="npLikes";c.className="small";c.style.cssText="text-align:center;margin:0 0 10px";sw.insertAdjacentElement("afterend",c)}
    c.textContent=vip()?"Gold member · unlimited likes and swipes · shown first":("Free likes and swipes left today: "+left()+" of "+LIM+" · Gold = unlimited");
  }
  function blockMsg(){
    if(typeof panel==="undefined")return;
    panel.innerHTML='<div class="pbody"><div style="display:flex;justify-content:space-between;align-items:center"><h2 id="sheetTitle" style="font-size:20px">Daily limit reached</h2><button class="theme" id="lmX" aria-label="Close">'+(typeof ico==="function"?ico("close"):"×")+'</button></div>'+
      '<p class="about">You have used your '+LIM+' free likes and swipes. More in about '+hoursLeft()+' hours.</p>'+
      '<p class="about">Namaste Gold members get unlimited likes and swipes, and are shown first.</p>'+
      '<button class="cta" id="lmGold">Become a Gold member</button></div>';
    panel.querySelector("#lmX").onclick=closeSheet;
    panel.querySelector("#lmGold").onclick=function(){closeSheet();setTimeout(function(){var p=document.getElementById("premBtn");if(p)p.click()},300)};
    sheet.classList.add("open");document.body.style.overflow="hidden";
  }
  if(typeof decide==="function"){
    var _d=decide;
    decide=function(p,yes,card){
      if(!vip()&&left()<=0){if(card){card.style.transform=""}blockMsg();counter();return}
      if(!vip())add();
      _d(p,yes,card);counter();
    };
  }
  var people=document.getElementById("people");
  if(people)people.addEventListener("click",function(e){
    var j=e.target.closest&&e.target.closest(".join");if(!j||/chat/i.test(j.textContent))return;
    if(!vip()&&left()<=0){e.stopImmediatePropagation();e.preventDefault();blockMsg();return}
    if(!vip())add();setTimeout(counter,50);
  },true);
  if(typeof renderSwipe==="function"){var _rs=renderSwipe;renderSwipe=function(){_rs();counter()}}
  counter();setTimeout(counter,1500);
})();

/* ===== Elite package: Gold members only ===== */
(function(){
  function vip(){try{return typeof isVIP==="function"&&!!isVIP()}catch(e){return false}}
  function gate(){
    if(typeof pSel==="undefined"||pSel!=="elite"||vip())return;
    var el=document.getElementById("pbuild");if(!el)return;
    var req=el.querySelector("#pReq");if(!req||req.dataset.np)return;
    req.dataset.np="1";req.textContent="Gold members only · Become Gold";
    req.onclick=function(){var p=document.getElementById("premBtn");if(p)p.click()};
    var n=document.createElement("p");n.className="small";n.style.color="var(--amber)";
    n.textContent="The Elite package is included for Namaste Gold members.";
    req.insertAdjacentElement("beforebegin",n);
  }
  if(typeof renderPackages==="function"){var _rp=renderPackages;renderPackages=function(){_rp();gate()}}
  gate();
})();

/* ===== Raju Guide: real AI (Gemini) through the Supabase "raju" function; old Raju stays as backup ===== */
(function(){
  if(typeof ask!=="function"||!window.supabase)return;
  var sb=window.supabase.createClient("https://mymtgbmcjbwsnetzwgoy.supabase.co","sb_publishable_ViFodxG8kAENr78Fyp-BwQ_iA_BfAD0");
  var CRISIS=/suicid|kill myself|end my life|want to die|self.?harm|hopeless|unsafe|follow(ing|ed)? me|harass|attack|spiked|drugged|rape|assault|kidnap|emergency|accident|injur|bleed|unconscious|chest pain|overdose|passport|stolen|robbed/i;
  /* Raju's own original character (1 Oct 2026). Not based on any real actor or film character. */
  var PERSONA="RAJU'S CHARACTER (always stay in this character): You are Raju, Namaste Pattaya's own friendly local guide, an original character. "+
    "You are a warm Indian 'bhai' who has lived in Pattaya for many years and knows every street, club, Indian restaurant, beach and shortcut. "+
    "Speak warm, simple Hinglish (mix easy Hindi and English) unless the guest writes in another language; then answer in their language. "+
    "Be a little filmy and cheerful, but always respectful. Greet with 'Namaste ji' at the start of a new chat. Call guests 'sir', 'madam' or 'bhai' naturally. "+
    "Keep answers short and useful (2 to 5 short lines on a phone). "+
    "FILMI STYLE: you love Bollywood and talk with filmi flair. In about half of your replies (never in emergencies or serious problems), add ONE short filmi one-liner of your own. "+
    "Use Raju's own signature lines, or write new original ones in the same style: 'Tension mat lo, Raju hai na!' / 'Pattaya aaye ho, toh yaadein le kar hi jaoge!' / "+
    "'Raju ke hote hue, aapka plan kabhi flop nahi hoga.' / 'Table book karo, baaki picture Raju sambhal lega.' / 'Yeh Pattaya hai bhai, yahan raatein bhi Bollywood jitni lambi hoti hain.' / "+
    "'Dost ka saath aur Raju ki planning, hit hi hit!' / 'Khana veg ho ya non-veg, swaad full-on filmi hoga!' / 'Sunset dekhna hai? 6 baje beach pe aaiye, scene ready hai.' / "+
    "'Safety pehle, masti baad mein. Yeh Raju ka usool hai.' / 'Aap mehmaan ho, aur Pattaya aapka stage!' / 'Kal ka episode bhi plan kar dein?'. "+
    "Only use these or new original lines: never copy or slightly change real dialogues from films, and never quote song lyrics. "+
    "When it really helps, end with one short tip starting with 'Raju ki salah:' (for example safety, timing, Grab taxi, dress code, carrying passport copy). "+
    "Values: safety first, honest advice, never pushy, never flirt, always respectful to women, never help with anything illegal. "+
    "Never say you are a real person, a film character or any actor, and never quote film dialogues or song lyrics. If asked who you are: 'Main Raju hoon, Namaste Pattaya ka apna guide.' "+
    "In any emergency, drop the jokes: be calm and clear, and give Tourist Police 1155 and ambulance 1669.";
  /* Raju language (7 Oct 2026): Raju follows the language chosen in the app menu, and uses ONLY the app's 7 languages */
  var NP_LANGS={en:"English",hi:"Hindi (Devanagari script)",pa:"Punjabi (Gurmukhi script)",gu:"Gujarati (Gujarati script)",ta:"Tamil (Tamil script)",mr:"Marathi (Devanagari script)",th:"Thai (Thai script)",bn:"Bengali (Bengali script)",te:"Telugu (Telugu script)",bho:"Bhojpuri (Devanagari script)"};
  function npLangRule(l){
    if(!NP_LANGS[l])l="en";
    return "LANGUAGE RULE (most important, this overrides any other language instruction, including the character's Hinglish line): "+
      "The guest chose "+NP_LANGS[l]+" in the app menu, so reply in "+NP_LANGS[l]+". "+
      (l==="en"?"Reply in clear, friendly English. BUT if the guest writes in Hinglish (Hindi words typed in English letters, e.g. 'bhai aaj raat kya scene hai'), reply in Hinglish the same way: a natural mix of Hindi and English, written only in English letters (Roman script), e.g. 'Arre waah ji! Aaj raat full masti ka plan hai?'. Never use Devanagari script in English mode. ":"Write the whole reply in that language and script, including filmi lines and 'Raju ki salah' (translate them). Venue names, phone numbers and prices stay as they are. ")+
      /* 17 Oct 2026 (Rahul): Raju must ALWAYS write (and so speak) in the language chosen in the app, whatever language the guest types in */
      /* 17 Oct 2026 (Rahul): English mode = English, or Hinglish only when the guest writes Hinglish. Other languages = always that language. */
      (l==="en"?"In English mode reply only in English or Hinglish (as above), never in any other language or script. ":"ALWAYS reply in "+NP_LANGS[l]+", even if the guest writes in English, Hinglish or any other language. Understand the guest in any language, but answer only in "+NP_LANGS[l]+". ")+
      "Earlier messages in this chat may be in another language because the guest just changed the app language: ignore that and follow this rule from now on. "+
      "PERSONALITY (always): Raju is confident, funny, friendly, full of energy and trustworthy. Short lively sentences, a light joke or filmi touch when it fits, warm like a good friend. "+
      "Trustworthy means: never invent prices, venues or promises, never pressure the guest, and say honestly when you are not sure.\n\n";
  }
  /* read Raju's answer in any format Supabase sends (JSON, text or file) */
  async function npReadReply(r){
    try{
      if(!r||r.error==="timeout")return null;
      var d=r.data;
      if(!d&&r.error&&r.error.context&&typeof r.error.context.text==="function"){try{d=await r.error.context.text()}catch(e){}}
      if(d&&typeof Blob!=="undefined"&&d instanceof Blob)d=await d.text();
      if(typeof d==="string"){var txt=d.trim();try{d=JSON.parse(txt)}catch(e){d=txt&&txt.charAt(0)!=="<"?{reply:txt,ids:[]}:null}}
      if(d&&typeof d==="object"){var rep=d.reply||d.text||d.answer||d.message;if(typeof rep==="string"&&rep.trim())return {reply:rep.trim(),ids:Array.isArray(d.ids)?d.ids:[]}}
    }catch(e){}
    return null;
  }
  var NP_TYPING={en:"Raju is typing…",hi:"राजू लिख रहा है…",pa:"ਰਾਜੂ ਲਿਖ ਰਿਹਾ ਹੈ…",gu:"રાજુ લખી રહ્યો છે…",ta:"ராஜு எழுதுகிறார்…",mr:"राजू लिहित आहे…",th:"ราจูกำลังพิมพ์…",bn:"রাজু লিখছে…",te:"రాజు టైప్ చేస్తున్నాడు…",bho:"राजू लिखत बा…"};
  var hist=[];
  function venues(){
    if(typeof CLUBS==="undefined")return "";
    return CLUBS.map(function(c){var paid=(c.pkgs||[]).map(function(p){return p.p}).filter(Boolean),from=paid.length?Math.min.apply(null,paid):0;
      return [c.id,c.name,c.cat,c.area,c.open,c.music||c.sub||"",from||"on request",c.type||""].join("|")}).join("\n");
  }
  var _ask=ask;
  ask=async function(q){
    var t=String(q||"").trim();
    if(!t||CRISIS.test(t)||typeof localAnswer!=="function")return _ask(q);
    var typing=document.createElement("div");typing.className="msg bot";typing.textContent=(function(){var l="en";try{l=localStorage.getItem("np_lang")||"en"}catch(e){}return NP_TYPING[l]||NP_TYPING.en})();
    if(typeof chatEl!=="undefined"){chatEl.appendChild(typing);typing.scrollIntoView({block:"end"})}
    var res=null;
    try{
      var lang="en";try{lang=localStorage.getItem("np_lang")||"en"}catch(e){}
      var extra=window.__npOrderInfo||"";window.__npOrderInfo=null;
      var npBody={messages:hist.concat([{role:"user",text:t+(extra?"\n\n[System order lookup, not written by the customer. Tell the customer this clearly and kindly in their language: "+extra+"]":"")}]),venues:npLangRule(lang)+"EXTRA RULES YOU MUST FOLLOW (Thai law): 1) Thai alcohol law (2025) bans alcohol advertising: never recommend, describe, price or promote alcoholic drinks, bottles, brands, cocktails, happy hours or drink deals. You may name a venue and its table/experience; if asked about drinks, say the venue shares its menu on site. 2) Never give prices for hospitals, clinics, treatments or medicines, and never recommend medicines. For health issues, suggest a licensed hospital or pharmacy by name/area only; for emergencies, call 1669.\n\n"+PERSONA+"\n\n"+venues(),lang:lang};
      var call=sb.functions.invoke("bright-responder",{body:npBody});
      var timeout=new Promise(function(ok){setTimeout(function(){ok({error:"timeout"})},35000)});
      var r=await Promise.race([call,timeout]);
      res=await npReadReply(r);
      /* one quick retry if the first answer failed (not after a timeout) */
      if(!res&&!(r&&r.error==="timeout")){
        var call2=sb.functions.invoke("bright-responder",{body:npBody});
        var r2=await Promise.race([call2,new Promise(function(ok){setTimeout(function(){ok({error:"timeout"})},25000)})]);
        res=await npReadReply(r2);
      }
    }catch(e){}
    typing.remove();
    if(!res&&extra)res={reply:extra,ids:[]};
    if(!res){try{return await _ask(q)}catch(e){if(typeof addMsg==="function")addMsg("bot","Sorry bhai, my network is slow right now. Please ask me again in a moment.");return}}
    var ids=(res.ids||[]).filter(function(id){return typeof CLUBS!=="undefined"&&CLUBS.some(function(c){return c.id===id})});
    hist.push({role:"user",text:t},{role:"model",text:res.reply});window.__npLastReply=res.reply;if(hist.length>12)hist=hist.slice(-12);
    var old=localAnswer;localAnswer=function(){return {text:res.reply,ids:ids}};
    try{await _ask(q)}finally{localAnswer=old}
  };
})();

/* ===== Aurora AI for everyone; only Namaste Gold (premium) members can choose other app colours ===== */
(function(){
  function premium(){try{return (typeof isVIP==="function"&&!!isVIP())||(typeof isPremium==="function"&&!!isPremium())}catch(e){return false}}
  function auroraKey(){
    if(typeof SKINS==="undefined")return null;
    for(var i=0;i<SKINS.length;i++){var s=SKINS[i];if(/holo/i.test(String(s[0])+" "+String(s[1])))return s[0]}
    return null;
  }
  var k=auroraKey();if(!k)return;
  function apply(){
    if(document.documentElement.dataset.skin===k)return;
    if(typeof applySkin==="function"){try{applySkin(k);return}catch(e){}}
    document.documentElement.dataset.skin=k;
  }
  function enforce(){
    if(premium()){
      var chosen=null;try{chosen=localStorage.getItem("np_skin_user")}catch(e){}
      if(!chosen)apply();
    }else apply();
  }
  enforce();window.addEventListener("load",enforce);setTimeout(enforce,1500);setTimeout(enforce,4000);
  /* normal users: the App colours screen becomes a Gold perk */
  if(typeof panel!=="undefined")new MutationObserver(function(){
    if(premium())return;
    if(!panel.querySelector(".pskin")||panel.querySelector("#npSkinGold"))return;
    panel.innerHTML='<div class="pbody" id="npSkinGold"><div style="display:flex;justify-content:space-between;align-items:center"><h2 id="sheetTitle" style="font-size:20px">App colours</h2><button class="theme" id="skX" aria-label="Close">'+(typeof ico==="function"?ico("close"):"×")+'</button></div>'+
      '<p class="about">Your app uses the Obsidian Holo look.</p><p class="about">Choosing your own app colours is a Namaste Gold perk.</p>'+
      '<button class="cta" id="skGold">Become a Gold member</button></div>';
    panel.querySelector("#skX").onclick=closeSheet;
    panel.querySelector("#skGold").onclick=function(){closeSheet();setTimeout(function(){var b=document.getElementById("premBtn");if(b)b.click()},300)};
    enforce();
  }).observe(panel,{childList:true,subtree:true});
  /* add the perk to the Gold list */
  function perk(){var ul=document.querySelector(".gperks");if(ul&&!ul.querySelector("[data-np-skin]")){var li=document.createElement("li");li.dataset.npSkin="1";li.textContent="Choose your own app colours";ul.appendChild(li)}}
  perk();setTimeout(perk,1600);
})();


/* ===== Raju voice mode: speak to Raju (mic) and hear his answers (speaker). Uses the phone's own voice, free. ===== */
(function(){
  /* Talking option switched OFF on Rahul's order (7 Oct 2026). Code kept, not deleted. To turn it back on, change false to true. */
  var NP_RAJU_TALK=false;
  if(!NP_RAJU_TALK){try{if(window.speechSynthesis)window.speechSynthesis.cancel()}catch(e){}return}
  if(typeof ask!=="function")return;
  var SR=window.SpeechRecognition||window.webkitSpeechRecognition,TTS=window.speechSynthesis;
  var LANGS={en:"en-IN",hi:"hi-IN",pa:"pa-IN",gu:"gu-IN",ta:"ta-IN",mr:"mr-IN",th:"th-TH",bn:"bn-IN",te:"te-IN",bho:"hi-IN"};
  var voiceOn=false,fromMic=false,rec=null;
  try{voiceOn=localStorage.getItem("np_raju_voice")==="1"}catch(e){}
  function appLang(){var l="en";try{l=localStorage.getItem("np_lang")||"en"}catch(e){}return LANGS[l]||"en-IN"}
  function detect(t){
    if(/[\u0E00-\u0E7F]/.test(t))return "th-TH";
    if(/[\u0A00-\u0A7F]/.test(t))return "pa-IN";
    if(/[\u0A80-\u0AFF]/.test(t))return "gu-IN";
    if(/[\u0B80-\u0BFF]/.test(t))return "ta-IN";
    if(/[\u0980-\u09FF]/.test(t))return "bn-IN";
    if(/[\u0C00-\u0C7F]/.test(t))return "te-IN";
    if(/[\u0900-\u097F]/.test(t))return appLang()==="mr-IN"?"mr-IN":"hi-IN";
    return "en-IN";
  }
  var MALE=/male|\bman\b|rishi|hemant|madhur|ravi|prabhat|kiran|arjun|aarav|niranjan|valluvar|mohan|hid-|hie-|end-|enm-|ene-/i;
  var FEMALE=/female|woman|lekha|veena|swara|kalpana|heera|priya|neerja|aditi|ananya|sapna|pooja|premwadee|kanya|hia-|hic-/i;
  function voicesFor(lang){var vs=(TTS&&TTS.getVoices())||[];var ex=vs.filter(function(x){return x.lang&&x.lang.replace("_","-").toLowerCase()===lang.toLowerCase()});return ex.length?ex:vs.filter(function(x){return x.lang&&x.lang.slice(0,2).toLowerCase()===lang.slice(0,2)})}
  function pickVoice(lang){
    var list=voicesFor(lang);if(!list.length)return null;
    var saved=null;try{saved=localStorage.getItem("np_raju_voice_"+lang.slice(0,2))}catch(e){}
    if(saved){var s0=list.find(function(x){return x.name===saved});if(s0)return s0}
    return list.find(function(x){return MALE.test(x.name)})||list.find(function(x){return !FEMALE.test(x.name)&&x.localService!==false})||list.find(function(x){return !FEMALE.test(x.name)})||list[0];
  }
  function speak(t,forceLang){
    if(!TTS||!t)return;
    try{
      TTS.cancel();
      var clean=String(t).replace(/[*_#>`]/g,"").replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu,"");
      var u=new SpeechSynthesisUtterance(clean);u.lang=forceLang||detect(clean);
      var v=pickVoice(u.lang);if(v)u.voice=v;
      var male=v&&MALE.test(v.name);
      u.pitch=male?0.95:0.8;   /* deeper voice when the phone has no male voice */
      u.rate=0.95;             /* a little slower = clearer */
      TTS.speak(u);
    }catch(e){}
  }
  /* let the user choose Raju's voice: each tap on the voice button tries the next voice */
  function nextVoice(btn){
    var lang=appLang(),list=voicesFor(lang);
    if(!list.length){alert("This phone has no voice for this language. Add one in the phone's Text-to-speech settings.");return}
    var cur=pickVoice(lang),i=list.indexOf(cur),nx=list[(i+1)%list.length];
    try{localStorage.setItem("np_raju_voice_"+lang.slice(0,2),nx.name)}catch(e){}
    btn.title="Voice "+((i+1)%list.length+1)+" of "+list.length;
    speak(lang==="hi-IN"?"Namaste bhai, main Raju hoon. Kya ye awaaz theek hai?":"Namaste, I am Raju. Does this voice sound good?",lang);
  }
  function lastBotText(){
    if(typeof chatEl==="undefined")return "";
    var kids=[].slice.call(chatEl.children).reverse();
    for(var i=0;i<kids.length;i++){var k=kids[i];if(/bot|raju|them/i.test(k.className)&&k.textContent.trim()&&!/typing/i.test(k.textContent))return k.textContent.trim()}
    return "";
  }
  var _ask=ask;
  ask=async function(q){
    window.__npLastReply=null;
    var r=await _ask(q);
    if(voiceOn||fromMic){setTimeout(function(){speak(window.__npLastReply||lastBotText())},200)}
    fromMic=false;
    return r;
  };
  var MIC='<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>';
  var SPK_ON='<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16 9a4 4 0 0 1 0 6M19 6a8 8 0 0 1 0 12"/></svg>';
  var SPK_OFF='<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M17 9l5 6M22 9l-5 6"/></svg>';
  if(!document.getElementById("npVoiceCss")){
    var st=document.createElement("style");st.id="npVoiceCss";
    st.textContent='.npvbtn{flex:0 0 auto;width:48px;height:48px;border-radius:50%;border:1px solid var(--line,rgba(255,255,255,.2));background:var(--surface,rgba(255,255,255,.06));color:var(--ink,#fff);display:inline-flex;align-items:center;justify-content:center;margin:0 4px;cursor:pointer}.npvbtn.on{border-color:#FF8A2A;color:#FF8A2A}.npvbtn.rec{background:#E5484D;color:#fff;border-color:#E5484D;animation:npvp 1s infinite}@keyframes npvp{50%{box-shadow:0 0 0 8px rgba(229,72,77,.25)}}';
    document.head.appendChild(st);
  }
  function attach(){
    var inp=document.querySelector('input[placeholder*="Hindi bhi"],input[placeholder^="Ask anything"],textarea[placeholder^="Ask anything"]');
    if(!inp||inp.dataset.npVoice)return;
    inp.dataset.npVoice="1";
    var mic=document.createElement("button");mic.type="button";mic.className="npvbtn";mic.setAttribute("aria-label","Talk to Raju");mic.innerHTML=MIC;
    var spk=document.createElement("button");spk.type="button";spk.className="npvbtn"+(voiceOn?" on":"");spk.setAttribute("aria-label","Raju reads answers aloud");spk.innerHTML=voiceOn?SPK_ON:SPK_OFF;
    var vb=document.createElement("button");vb.type="button";vb.className="npvbtn";vb.setAttribute("aria-label","Change Raju's voice");vb.innerHTML='<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="9" cy="8" r="4"/><path d="M3 21c0-4 3-6 6-6s6 2 6 6M17 7a4 4 0 0 1 0 6M20 5a7 7 0 0 1 0 10"/></svg>';
    vb.onclick=function(){nextVoice(vb)};
    inp.insertAdjacentElement("afterend",vb);inp.insertAdjacentElement("afterend",spk);inp.insertAdjacentElement("afterend",mic);
    spk.onclick=function(){
      voiceOn=!voiceOn;try{localStorage.setItem("np_raju_voice",voiceOn?"1":"0")}catch(e){}
      spk.className="npvbtn"+(voiceOn?" on":"");spk.innerHTML=voiceOn?SPK_ON:SPK_OFF;
      if(!voiceOn&&TTS)TTS.cancel();else speak(appLang()==="hi-IN"?"नमस्ते! अब मैं बोलकर जवाब दूँगा।":"Namaste! I will read my answers out loud now.");
    };
    mic.onclick=function(){
      if(!SR){alert("Voice typing doesn't work in this browser. Please use Chrome.");return}
      if(rec){rec.stop();return}
      if(TTS)TTS.cancel();
      var ph=inp.placeholder,finalText="";
      rec=new SR();rec.lang=appLang();rec.interimResults=true;rec.maxAlternatives=1;
      mic.classList.add("rec");inp.placeholder="Listening… speak now";
      rec.onresult=function(e){var t="";for(var i=0;i<e.results.length;i++)t+=e.results[i][0].transcript;inp.value=t;if(e.results[e.results.length-1].isFinal)finalText=t};
      rec.onerror=function(e){if(e.error==="not-allowed")alert("Please allow the microphone for this app to talk to Raju.")};
      rec.onend=function(){mic.classList.remove("rec");inp.placeholder=ph;rec=null;
        var t=(finalText||inp.value).trim();if(t){inp.value="";fromMic=true;ask(t)}};
      try{rec.start()}catch(e){mic.classList.remove("rec");inp.placeholder=ph;rec=null}
    };
  }
  var busy=false;
  new MutationObserver(function(){if(busy)return;busy=true;requestAnimationFrame(function(){busy=false;attach()})}).observe(document.body,{childList:true,subtree:true});
  attach();
  if(TTS&&TTS.onvoiceschanged!==undefined)TTS.onvoiceschanged=function(){};
})();

/* ===== Passwords: "Change password" when logged in, "Forgot password?" on the login screen, and the reset link from email ===== */
(function(){
  if(!window.supabase||typeof panel==="undefined")return;
  var sb=window.supabase.createClient("https://mymtgbmcjbwsnetzwgoy.supabase.co","sb_publishable_ViFodxG8kAENr78Fyp-BwQ_iA_BfAD0");
  function X(){return typeof ico==="function"?ico("close"):"×"}
  function openSheet(html){
    panel.innerHTML='<div class="pbody" id="npPw">'+html+'</div>';
    sheet.classList.add("open");document.body.style.overflow="hidden";panel.scrollTop=0;
    var x=panel.querySelector("#pwX");if(x)x.onclick=closeSheet;
  }
  function form(title,intro){
    openSheet('<div style="display:flex;justify-content:space-between;align-items:center"><h2 id="sheetTitle" style="font-size:20px">'+title+'</h2><button class="theme" id="pwX" aria-label="Close">'+X()+'</button></div>'+
      '<p class="about">'+intro+'</p><div class="fields">'+
      '<label class="full">New password<input id="pw1" type="password" autocomplete="new-password" placeholder="At least 8 characters"></label>'+
      '<label class="full">Type it again<input id="pw2" type="password" autocomplete="new-password"></label></div>'+
      '<button class="cta" id="pwSave">Save new password</button><p class="err" id="pwE"></p>');
    panel.querySelector("#pwSave").onclick=async function(){
      var a=panel.querySelector("#pw1").value,b=panel.querySelector("#pw2").value,E=panel.querySelector("#pwE");
      if(a.length<8){E.textContent="Use at least 8 characters, with letters and numbers.";return}
      if(!/[a-z]/i.test(a)||!/\d/.test(a)){E.textContent="Use both letters and numbers.";return}
      if(a!==b){E.textContent="The two passwords are different.";return}
      this.disabled=true;
      var r=await sb.auth.updateUser({password:a});
      this.disabled=false;
      if(r.error){E.textContent=r.error.message;return}
      openSheet('<div style="display:flex;justify-content:space-between;align-items:center"><h2 id="sheetTitle" style="font-size:20px">Password changed</h2><button class="theme" id="pwX" aria-label="Close">'+X()+'</button></div><p class="about">Your new password is saved. Use it next time you log in.</p>');
    };
  }
  window.npChangePassword=function(){form("Change password","Choose a new password for your account.")};
  /* reset link from email opens the app here */
  sb.auth.onAuthStateChange(function(ev){if(ev==="PASSWORD_RECOVERY")setTimeout(function(){form("Set a new password","Welcome back. Choose a new password for your account.")},400)});
  function forgot(emailInput){
    var em=(emailInput&&emailInput.value||"").trim();
    openSheet('<div style="display:flex;justify-content:space-between;align-items:center"><h2 id="sheetTitle" style="font-size:20px">Forgot password</h2><button class="theme" id="pwX" aria-label="Close">'+X()+'</button></div>'+
      '<p class="about">Enter your email. We will send you a link to choose a new password.</p><div class="fields"><label class="full">Email<input id="fpE" type="email" autocomplete="email" value="'+em.replace(/"/g,"")+'"></label></div>'+
      '<button class="cta" id="fpGo">Send reset link</button><p class="err" id="fpMsg"></p>');
    panel.querySelector("#fpGo").onclick=async function(){
      var e=panel.querySelector("#fpE").value.trim(),M=panel.querySelector("#fpMsg");
      if(!/^\S+@\S+\.\S+$/.test(e)){M.textContent="Please enter a valid email.";return}
      this.disabled=true;
      var r=await sb.auth.resetPasswordForEmail(e,{redirectTo:location.origin+location.pathname});
      this.disabled=false;
      M.style.color="var(--ok)";M.textContent=r.error?"":"If this email has an account, the reset link is on its way. Check your inbox and spam folder.";
      if(r.error){M.style.color="";M.textContent=r.error.message}
    };
  }
  /* add the buttons to the existing account and login screens */
  var busy=false;
  new MutationObserver(function(){
    if(busy)return;busy=true;requestAnimationFrame(function(){busy=false;
      if(panel.querySelector("#npPw"))return;
      var btns=[].slice.call(panel.querySelectorAll("button"));
      var out=btns.find(function(b){return /log ?out/i.test(b.textContent)});
      if(out&&!panel.querySelector("#npChangePw")){
        var c=document.createElement("button");c.id="npChangePw";c.className=out.className||"pill";c.textContent="Change password";
        c.style.marginRight="8px";out.insertAdjacentElement("beforebegin",c);c.onclick=function(){npChangePassword()};
      }
      var pw=panel.querySelector('input[type="password"]');
      if(pw&&!out&&!panel.querySelector("#npForgot")&&!/forgot/i.test(panel.textContent)){
        var em=panel.querySelector('input[type="email"]');
        var f=document.createElement("button");f.id="npForgot";f.type="button";f.className="linkbtn";f.textContent="Forgot password?";
        f.style.cssText="display:block;margin:8px 0 0";
        (pw.closest("label")||pw).insertAdjacentElement("afterend",f);
        f.onclick=function(){forgot(em)};
      }
    });
  }).observe(panel,{childList:true,subtree:true});
})();

/* ===== Anonymous analytics: 8 key steps, plus an "App analytics" report for admins ===== */
(function(){
  if(!window.supabase)return;
  var sb=window.supabase.createClient("https://mymtgbmcjbwsnetzwgoy.supabase.co","sb_publishable_ViFodxG8kAENr78Fyp-BwQ_iA_BfAD0");
  var sid="";try{sid=localStorage.getItem("np_sid")||"";if(!sid){sid=Math.random().toString(36).slice(2)+Date.now().toString(36);localStorage.setItem("np_sid",sid)}}catch(e){}
  var last={};
  function track(ev,detail){
    var k=ev+"|"+(detail||"");var now=Date.now();if(last[k]&&now-last[k]<3000)return;last[k]=now;
    try{sb.from("np_events").insert({event:ev,detail:detail?String(detail).slice(0,80):null,sid:sid}).then(function(){},function(){})}catch(e){}
  }
  window.npTrack=track;
  /* 1. app opened (once per visit) */
  try{if(!sessionStorage.getItem("np_open")){sessionStorage.setItem("np_open","1");track("app_open")}}catch(e){track("app_open")}
  /* 2. service opened */
  if(typeof window.openService==="function"){var _os=window.openService;window.openService=function(cat){track("service_open",cat);return _os.apply(this,arguments)};try{openService=window.openService}catch(e){}}
  /* 3. place viewed (tap on a venue card) */
  document.addEventListener("click",function(e){
    var card=e.target.closest&&e.target.closest(".art, .card, [data-id]");if(!card)return;
    var nm=card.querySelector&&card.querySelector(".name");var name=nm?nm.textContent.trim():"";
    if(!name||typeof CLUBS==="undefined")return;
    var c=CLUBS.find(function(x){return x.name===name});if(c)track("place_view",c.id);
  },true);
  /* 4. booking form opened */
  if(typeof panel!=="undefined")new MutationObserver(function(){
    if(panel.dataset.npBk)return;
    if(panel.querySelector('input[type="date"]')&&/guest|people|persons|pax/i.test(panel.textContent)){panel.dataset.npBk="1";track("booking_start")}
  }).observe(panel,{childList:true,subtree:true});
  if(typeof sheet!=="undefined")new MutationObserver(function(){if(!sheet.classList.contains("open")&&typeof panel!=="undefined")delete panel.dataset.npBk}).observe(sheet,{attributes:true,attributeFilter:["class"]});
  /* 5. booking sent */
  if(typeof store!=="undefined"&&typeof store.set==="function"){
    var _set=store.set,prev=(typeof bookings!=="undefined"&&bookings)?bookings.length:0;
    store.set=function(key,val){
      try{if(key==="np_bookings"&&Array.isArray(val)){if(val.length>prev&&val[0]&&!/Monthly luxury/.test(val[0].pkg||""))track("booking_sent",val[0].club||"");prev=val.length}}catch(e){}
      return _set.apply(this,arguments);
    };
  }
  /* 6. Raju used */
  if(typeof ask==="function"){var _a=ask;ask=function(q){track("raju_used");return _a.apply(this,arguments)}}
  /* 7. Gold tapped   8. shared */
  document.addEventListener("click",function(e){
    var b=e.target.closest&&e.target.closest("a,button");if(!b)return;
    if(b.id==="premBtn")track("gold_tap");
    var href=b.getAttribute&&b.getAttribute("href")||"";
    if(/wa\.me|whatsapp|share|invite|refer/i.test(href+" "+b.textContent)&&!/sharing my location|share my location|stop sharing/i.test(b.textContent)){
      var where=b.closest("section[id]");track("share",where?where.id:(document.getElementById("fdRoot")?"friends":"app"));
    }
  },true);

  /* ---- report for admins ---- */
  var isAdmin=null;
  function checkAdmin(){return sb.rpc("np_is_admin").then(function(r){isAdmin=!r.error&&r.data===true;return isAdmin},function(){isAdmin=false;return false})}
  sb.auth.onAuthStateChange(function(){isAdmin=null});
  var NAMES={app_open:"Opened the app",service_open:"Opened a service",place_view:"Viewed a place",booking_start:"Started a booking",booking_sent:"Sent a booking",raju_used:"Asked Raju",gold_tap:"Tapped Gold",share:"Shared a link"};
  function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
  async function report(days){
    panel.innerHTML='<div class="pbody" id="npRep"><div style="display:flex;justify-content:space-between;align-items:center"><h2 id="sheetTitle" style="font-size:20px">App analytics</h2><button class="theme" id="rpX" aria-label="Close">'+(typeof ico==="function"?ico("close"):"×")+'</button></div>'+
      '<div class="chips" style="margin:10px 0"><button class="pill'+(days===1?' on':'')+'" data-d="1">Today</button> <button class="pill'+(days===7?' on':'')+'" data-d="7">7 days</button> <button class="pill'+(days===30?' on':'')+'" data-d="30">30 days</button></div><div id="rpBody"><p class="small">Loading…</p></div></div>';
    sheet.classList.add("open");document.body.style.overflow="hidden";
    panel.querySelector("#rpX").onclick=closeSheet;
    panel.querySelectorAll("[data-d]").forEach(function(b){b.onclick=function(){report(+b.dataset.d)}});
    var r=await sb.rpc("np_event_report",{days:days}),body=panel.querySelector("#rpBody");if(!body)return;
    if(r.error){body.innerHTML='<p class="err">'+esc(r.error.message)+'</p>';return}
    var tot={},ppl={},svc={},plc={};
    (r.data||[]).forEach(function(x){tot[x.event]=(tot[x.event]||0)+Number(x.n);ppl[x.event]=(ppl[x.event]||0)+Number(x.people);
      if(x.event==="service_open"&&x.detail)svc[x.detail]=(svc[x.detail]||0)+Number(x.n);
      if(x.event==="place_view"&&x.detail)plc[x.detail]=(plc[x.detail]||0)+Number(x.n)});
    var base=ppl.app_open||0;
    function row(ev){var p=ppl[ev]||0;var pc=base?Math.round(p*100/base)+"%":"";return '<div class="lrow" style="padding:10px 0;border-top:1px solid var(--line)"><span>'+NAMES[ev]+'</span><span><b>'+p+'</b> people <span class="small">'+pc+'</span></span></div>'}
    function top(obj,label){var a=Object.keys(obj).sort(function(x,y){return obj[y]-obj[x]}).slice(0,5);if(!a.length)return "";
      return '<h3 style="font-size:16px;margin:16px 0 6px">'+label+'</h3>'+a.map(function(k){return '<div class="lrow" style="padding:6px 0"><span>'+esc(k)+'</span><b>'+obj[k]+'</b></div>'}).join("")}
    var svcN={};Object.keys(svc).forEach(function(k){svcN[(typeof CATNAME!=="undefined"&&CATNAME[k])||k]=svc[k]});
    var plcN={};Object.keys(plc).forEach(function(k){var c=typeof CLUBS!=="undefined"&&CLUBS.find(function(x){return x.id===k});plcN[c?c.name:k]=plc[k]});
    body.innerHTML='<h3 style="font-size:16px;margin:6px 0">Booking journey</h3>'+["app_open","service_open","place_view","booking_start","booking_sent"].map(row).join("")+
      '<h3 style="font-size:16px;margin:16px 0 6px">Other actions</h3>'+["raju_used","gold_tap","share"].map(row).join("")+
      top(svcN,"Top services")+top(plcN,"Top places")+
      '<p class="small" style="margin-top:14px">Anonymous counts only: no names, emails or locations. "People" means different phones or browsers.</p>';
  }
  window.npReport=function(){report(7)};
  if(typeof panel!=="undefined")new MutationObserver(function(){
    if(panel.querySelector("#npRepBtn")||panel.querySelector("#npRep"))return;
    var out=[].slice.call(panel.querySelectorAll("button")).find(function(b){return /log ?out/i.test(b.textContent)});if(!out)return;
    var go=function(){if(panel.querySelector("#npRepBtn"))return;var b=document.createElement("button");b.id="npRepBtn";b.className=out.className||"pill";b.textContent="App analytics";b.style.marginRight="8px";out.insertAdjacentElement("beforebegin",b);b.onclick=function(){report(7)}};
    if(isAdmin===true)go();else if(isAdmin===null)checkAdmin().then(function(a){if(a)go()});
  }).observe(panel,{childList:true,subtree:true});
})();

/* ===== Tagline: "Bharat ke liye, ek Bhartiye ka tohfa" everywhere in the app ===== */
(function(){
  var MAP=[
    [/Bhartiyon ke liye,? ek Bhartiya ka tohfa/gi,"Bharat ke liye, ek Bhartiye ka tohfa"],
    [/भारतीयों के लिए,? एक भारतीय का तोहफ़ा/g,"भारत के लिए, एक भारतीय का तोहफ़ा"],
    [/भारतीयों के लिए,? एक भारतीय का तोहफा/g,"भारत के लिए, एक भारतीय का तोहफ़ा"],
    /* add "Jai Hind" after the tagline (only once) */
    [/(Bharat ke liye, ek Bhartiye ka tohfa)(?![.!]?\s*[·|,-]?\s*Jai Hind)/gi,"$1. Jai Hind"],
    [/(भारत के लिए, एक भारतीय का तोहफ़ा)(?![।.!]?\s*[·|,-]?\s*जय हिन्द)/g,"$1। जय हिन्द"]
  ];
  function fix(root){
    var w=document.createTreeWalker(root||document.body,NodeFilter.SHOW_TEXT,null),n;
    while((n=w.nextNode())){
      var t=n.nodeValue;if(!t||t.indexOf("tohfa")<0&&t.indexOf("तोहफ")<0&&!/Bhartiy/i.test(t))continue;
      var u=t;MAP.forEach(function(m){u=u.replace(m[0],m[1])});
      if(u!==t)n.nodeValue=u;
    }
  }
  fix();
  var busy=false;
  new MutationObserver(function(){if(busy)return;busy=true;requestAnimationFrame(function(){busy=false;fix()})}).observe(document.body,{childList:true,subtree:true,characterData:true});
})();


/* ===== Service pages: popular options & estimated prices (from the catalog list) ===== */
(function(){
  var P={"grocery":[["Premium Assam CTC Tea (500g)",280,"per item","Strong, full-bodied black tea perfect for making traditional masala chai. Available at Little India shops near Walking Street."],["Everest Garam Masala (100g)",95,"per item","Authentic spice blend imported from India. Found in grocery stores along Pattaya Second Road."],["Fresh Masala Chai Service",40,"per person","Hot, ginger-infused milk tea served at street-side stalls in the Phratamnak area."],["Basmati Rice - Premium Long Grain (5kg)",550,"per item","Aged aromatic rice suitable for biryani. Available at Indian specialty marts in Central Pattaya."],["Whole Green Cardamom (100g)",220,"per item","High-quality pods for flavoring sweets and tea. Sourced from wholesalers in South Pattaya."],["Amul Pure Ghee (1L)",750,"per item","Clarified butter essential for Indian cooking. Stocked at major Indian grocers near Beach Road."],["Haldiram's Namkeen Snacks",85,"per item","Assorted savory snacks like Bhujia and Navratan Mix. Popular item in Jomtien Indian convenience stores."],["Maggi 2-Minute Noodles (Indian Masala Flavor)",35,"per item","The classic Indian spicy instant noodle. Available at most specialty Desi shops in the city center."],["MDH Turmeric Powder (200g)",110,"per item","Pure ground turmeric for daily cooking. Found in the spice aisle of Indian markets in Naklua."]],"indian":[["Ali Baba Tandoori & Curry",1200,"avg for 2","Iconic themed restaurant with extensive North Indian menu located on Central Pattaya Road."],["Karma Indian",900,"avg for 2","Modern Indian dining with a focus on authentic spices, situated in the Pratamnak Hill area."],["Madras Darbar",600,"avg for 2","Specializing in South Indian delicacies and Biryani, located near Second Road."],["Amritsari Kulcha Corner",400,"avg for 2","Casual spot famous for authentic stuffed kulchas and North Indian street food in South Pattaya."],["Tandoori Flames",1100,"avg for 2","Premium beachfront dining experience featuring tandoori specialties on Beach Road."],["Indus Restaurant",1500,"avg for 2","Fine dining establishment offering Mughlai cuisine and elegant atmosphere in North Pattaya."],["Govindam Indian Veg Restaurant",500,"avg for 2","Pure vegetarian Indian cuisine featuring Thalis and Jain options, located in Central Pattaya."],["Chutney Indian",1300,"avg for 2","Upscale Indian dining located within the Avani Resort area, known for fusion appetizers."],["Royal India Pattaya",800,"avg for 2","Traditional North Indian favorites served in a cozy setting near Walking Street."]],"restaurants":[["Horizon Rooftop Restaurant & Bar",3500,"avg for 2","Fine dining with panoramic ocean views on the 34th floor of Hilton Pattaya, Beach Road."],["The Glass House Silver",1800,"avg for 2","Upscale beachfront dining featuring fresh seafood and international cuisine in North Pattaya (Wongamat)."],["Mum Aroi Naklua",1200,"avg for 2","Famous local seafood institution located directly on the water in the Naklua area."],["Bruno's Restaurant & Wine Bar",2500,"avg for 2","Long-standing European fine dining located in Jomtien."],["Leng Kee Restaurant",600,"avg for 2","Popular 24-hour Chinese-Thai fusion spot on Central Pattaya Road, famous for duck and seafood."],["Sugar Hut Restaurant",1500,"avg for 2","Authentic Thai cuisine served in a traditional teak wood setting surrounded by forest in Phra Tamnak Hill."],["Fat Belly Pattaya",900,"avg for 2","Cozy bistro offering high-quality comfort food in the Naklua/North Pattaya area."],["Café des Amis",4000,"avg for 2","Exclusive French fine dining and steakhouse set in a romantic garden villa off Thappraya Road."]],"hotels":[["Hilton Pattaya",8500,"per night","Luxury high-rise hotel located directly above Central Festival Mall with infinity pool and panoramic sea views in Central Pattaya."],["Grande Centre Point Space Pattaya",6200,"per night","Space-themed luxury resort featuring a massive water park and futuristic design located in North Pattaya near Terminal 21."],["Siam Bayshore Resort",3800,"per night","Tropical garden resort located at the quiet end of Walking Street, offering easy access to the nightlife and Bali Hai Pier."],["Royal Wing Suites & Spa",12500,"per night","Ultra-exclusive 5-star luxury suites with private beach access and personalized butler service located on Pratumnak Hill."],["Hard Rock Hotel Pattaya",4500,"per night","Iconic rock-themed hotel featuring a large sand-bottom pool and regular foam parties on Beach Road."],["InterContinental Pattaya Resort",7500,"per night","Upscale oceanfront resort offering private villas and a secluded atmosphere in the Phra Tamnak area."],["Holiday Inn Pattaya",4200,"per night","Family-friendly modern hotel with all rooms offering sea views, located at the northern end of Beach Road."],["Rabbit Resort Pattaya",5500,"per night","Charming Thai-style boutique resort set in lush gardens directly on Dongtan Beach, Jomtien."],["Arbour Hotel and Residence",3200,"per night","Modern luxury residence with rooftop sunset views in Central Pattaya."],["Pullman Pattaya Hotel G",4800,"per night","Stylish lifestyle resort with a private beach club and chic design located on Wongamat Beach."]],"spa":[["Traditional Thai Massage",300,"per hour","Authentic full-body stretching and pressure point massage, located in Central Pattaya."],["Aromatherapy Oil Massage",600,"per hour","Relaxing essential oil treatment at a boutique spa on Pratumnak Hill."],["Foot Reflexology Session",250,"per hour","Targeted foot and lower leg massage, available at various Beach Road locations."],["Luxury Spa Package",2500,"per person","3-hour session including body scrub, milk bath, and oil massage in North Pattaya."],["Aloe Vera After-Sun Massage",500,"per hour","Soothing treatment for sun-exposed skin, popular at Jomtien Beach spas."],["Four-Hands Oil Massage",1200,"per hour","Synchronized massage by two therapists for ultimate relaxation, Central Pattaya."],["Hot Stone Therapy",1500,"per 90 mins","Deep tissue healing using heated volcanic stones, located in Naklua area."],["Herbal Compress Massage",800,"per 90 mins","Traditional Thai heat treatment using steamed herbal pouches, South Pattaya."],["Deep Tissue Sports Massage",900,"per hour","Intense muscle recovery treatment near the Darkside (East Pattaya) fitness hubs."]],"tours":[["Koh Larn Speedboat Day Trip",1500,"per person","Full day trip including lunch and snorkeling equipment. Departures from Bali Hai Pier."],["Private Luxury Catamaran Charter",28000,"per day","Private cruise to Monkey Island and Koh Khram for up to 15 people. Ocean Marina Yacht Club."],["Sanctuary of Truth Guided Tour",500,"per person","Cultural tour of the iconic all-wood architectural marvel in Naklua, North Pattaya."],["Pattaya Elephant Jungle Sanctuary",2500,"per person","Ethical interaction program including feeding and mud spa. Located in the Pattaya outskirts."],["Tiffany's Cabaret Show VIP Gold",1600,"per person","Premium seating for the world-famous ladyboy cabaret show on Pattaya Second Road."],["Nong Nooch Tropical Garden Entry",800,"per person","Access to botanical gardens and cultural shows. Located in Na Chom Thian."],["Ramayana Water Park Full Day Pass",1100,"per person","All-day access to Thailand's largest water park. Located near Khao Chi Chan."],["ATV Off-Road Adventure",2800,"per person","2-hour guided off-road tour through jungle tracks and plantations in East Pattaya."],["Floating Market Cultural Tour",400,"per person","Entrance and boat ride through the Pattaya Floating Market on Sukhumvit Road."],["Coral Island Parasailing & Sea Walk",2200,"per person","Adventure bundle including underwater walking and parasailing at Koh Larn."]],"water":[["Parasailing Adventure at Koh Larn",800,"per person","Includes speedboat transfer from Bali Hai Pier and a 5-minute flight over the Gulf."],["Jet Ski Rental Jomtien Beach",1500,"per 30 mins","Self-drive jet ski experience along the Jomtien coastline with safety briefing."],["Banana Boat Ride Pattaya Beach",600,"per person","Group fun activity for up to 6 people, located near Central Pattaya Beach."],["Flyboard Experience",2500,"per 20 mins","Hydro-flight activity with professional instructor at the south end of Jomtien."],["Scuba Diving Discovery Trip",3500,"per person","Full day trip to Near Islands for beginners, includes equipment and lunch."],["Kitesurfing Lesson",4000,"per day","Introductory course at Na Jomtien, best during the windy season (Nov-Feb)."],["Sea Walker Experience",1200,"per person","Underwater walking at Koh Larn coral reefs, suitable for non-swimmers."],["Wakeboarding at Thai Wake Park",1350,"per day","Cable wakeboarding facility located in the Nong Prue area of East Pattaya."],["Stand Up Paddleboard (SUP) Rental",400,"per hour","Relaxing paddle boarding available at the quiet Wong Amat Beach."],["Windsurfing Rental & Gear",700,"per hour","Available at the Pattaya Water Sports Club in Jomtien."]],"golf":[["Siam Country Club - Old Course",4500,"per person","World-class championship course and home of the LPGA Thailand. Located in Pong, East Pattaya."],["Siam Country Club - Plantation",4000,"per person","Challenging 27-hole layout with spectacular views of the Gulf of Thailand. Located in East Pattaya."],["Laem Chabang International Country Club",3500,"per person","Jack Nicklaus designed course with mountain, lake, and valley loops. Located in Sriracha area."],["Chee Chan Golf Resort",5000,"per person","Luxury links-style course with views of the famous Buddha Mountain. Located in Na Jomtien."],["Phoenix Gold Golf & Country Club",2800,"per person","Renovated 27-hole course with easy access from the city. Located in Huay Yai."],["Burapha Golf Club",2200,"per person","Large 36-hole complex popular for tournaments and group outings. Located in Sriracha."],["Pattana Sports Resort",2500,"per person","Extensive sports complex with 27 holes and excellent facilities. Located in Khao Mai Kaew."],["St. Andrews 2000 Golf Club",3200,"per person","Extremely challenging par-74 course with two par-6 holes. Located in Rayong/Ban Chang area."],["Plutaluang Navy Golf Course",1200,"per person","Budget-friendly historic course managed by the Royal Thai Navy. Located in Sattahip."]],"yacht":[["Luxury Sailing Catamaran 45ft",35000,"per day","Private charter for up to 15 people, includes snorkeling gear and soft drinks. Departs from Ocean Marina Yacht Club."],["Speedboat Island Hopper",12000,"per day","Twin-engine speedboat perfect for fast trips to Koh Larn and Koh Sak. Departs from Bali Hai Pier."],["Azimut 60 Luxury Motor Yacht",125000,"per day","Ultra-luxury experience with air-conditioned cabins and professional crew. Na Jomtien area."],["Sunset Dinner Cruise",2500,"per person","Shared evening cruise with buffet dinner and live music around Pattaya Bay."],["Fishing Charter Boat",15000,"per day","Equipped with sonar and fishing gear for deep-sea trips to Koh Khram. Departs from Jomtien Beach."],["Party Catamaran with DJ",55000,"per day","Large capacity boat for up to 40 guests, features premium sound system and dance floor. Ocean Marina."],["Traditional Wooden Junk Boat",28000,"per day","Authentic Thai style boat for a relaxed, scenic cruise to the outer islands. Departs Bali Hai Pier."],["VIP Jet Ski Safari",4500,"per person","Guided 3-hour tour visiting 3 different islands on high-performance jet skis. Jomtien area."],["Princess 42 Flybridge",75000,"per day","Elegant motor yacht with flybridge seating, ideal for small groups and families. Ocean Marina."]],"rental":[["Honda PCX 160cc",500,"per day","Modern automatic scooter, ideal for city commuting. Available for pickup in Central Pattaya."],["Toyota Fortuner 4x4",2200,"per day","Large 7-seater SUV suitable for family trips. Includes full insurance. Located near Jomtien Beach."],["Honda Click 125i",250,"per day","Budget-friendly and fuel-efficient scooter. Popular choice for solo travelers in South Pattaya."],["Kawasaki Ninja 400",1200,"per day","Entry-level sportbike for enthusiasts. Requires valid motorcycle license. Shop located on Sukhumvit Road."],["Toyota Vios Automatic",1000,"per day","Reliable sedan for local driving. Weekly discounts available. Office near Pattaya Klang."],["Honda Forza 350",800,"per day","Premium maxi-scooter with large storage and comfort for long rides. Available in Naklua area."],["Ford Ranger Wildtrak",1800,"per day","Powerful pickup truck for heavy-duty use or excursions. Delivery to hotels in Pratumnak Hill."],["Ducati Monster 821",3500,"per day","High-performance naked bike for experienced riders. Security deposit required. Located in East Pattaya."],["MG ZS Compact SUV",1300,"per day","Modern crossover with Apple CarPlay and sunroof. Great for shopping trips. Central Pattaya location."]],"airport":[["Sedan (Toyota Camry) - Suvarnabhumi to Pattaya",1500,"per trip","Private executive sedan for up to 3 passengers including tolls. Direct to any hotel in Pattaya City."],["VIP Van (Toyota Commuter) - Suvarnabhumi to Pattaya",2200,"per trip","Spacious van for up to 9 passengers with luggage. Ideal for groups or families heading to Jomtien or Central Pattaya."],["Luxury MPV (Toyota Alphard) - Suvarnabhumi to Pattaya",4500,"per trip","Premium chauffeur service with captain seats. Includes VIP meet and greet at Gate 3."],["Standard Sedan - Don Mueang (DMK) to Pattaya",2000,"per trip","Private transfer from DMK Airport to Pattaya. Includes expressway fees."],["Shared Minibus - Suvarnabhumi to Pattaya",400,"per person","Budget-friendly scheduled shuttle service dropping off at major Pattaya intersections."],["Private SUV (Fortuner) - U-Tapao to Pattaya",800,"per trip","Quick transfer from U-Tapao Rayong-Pattaya International Airport to South Pattaya or Sattahip."],["VIP Van - Don Mueang (DMK) to Pattaya",2800,"per trip","Large group transfer from DMK. Features modified interior and entertainment system."],["Mercedes S-Class - Suvarnabhumi to Pattaya",7500,"per trip","Ultimate luxury transfer for high-profile guests. Professional English-speaking driver."],["Late Night Surcharge - All Routes",200,"per trip","Additional fee for pickups scheduled between 00:00 and 05:00."]],"shopping":[["Central Festival Pattaya Beach",1500,"avg for 2","Premium beachfront mall on Beach Road featuring international brands and a luxury cinema."],["Terminal 21 Pattaya",800,"avg for 2","Airport-themed shopping destination in North Pattaya with global zones and affordable food court."],["Pattaya Floating Market",200,"per person","Cultural shopping experience on Sukhumvit Road featuring traditional crafts and river snacks."],["Thepprasit Night Market",500,"avg for 2","Pattaya's most famous weekend market located on Thepprasit Road, known for street food and clothing."],["Mike Shopping Mall",600,"avg for 2","Budget-friendly air-conditioned mall on 2nd Road specializing in souvenirs and local fashion."],["Jomtien Night Market",400,"avg for 2","Relaxed evening market near Jomtien Beach, popular for street food, seafood and beachwear."],["Royal Garden Plaza",1200,"avg for 2","Iconic mall with the airplane facade on Beach Road, home to Ripley's Believe It or Not."],["Tree Town Market",700,"avg for 2","Open-air lifestyle market in Soi Buakhao area with a focus on bars, food stalls, and trendy accessories."],["Outlet Mall Pattaya",2500,"avg for 2","Discounted brand name sportswear and fashion located at the intersection of Thepprasit and Sukhumvit."]],"events":[["Luxury Pool Villa Party Package",15000,"per day","Includes sound system, DJ, and basic decorations for a private villa in Jomtien."],["Professional Event Host/MC",5000,"per event","English and Thai speaking host for corporate events or private parties in Central Pattaya."],["Premium BBQ Catering Service",1200,"per person","Full-service seafood and meat BBQ setup with private chef, available city-wide."],["Private Yacht Party Coordination",45000,"per day","Full planning for a 20-person yacht party departing from Ocean Marina, including catering and staff."],["Custom Birthday Decoration Set",3500,"per item","Balloon arches, banners, and LED lighting setup for hotel rooms or villas in Pratumnak."],["Professional Event Photographer",6000,"per 4 hours","High-quality event coverage and edited digital photos for parties in the Pattaya area."],["Traditional Thai Dance Performance",7500,"per event","Cultural performance group for weddings or corporate dinners in North Pattaya."],["Sound and Lighting Equipment Rental",9000,"per day","Full PA system, stage lights, and technician support for medium-sized outdoor events."]],"medical":[["Bangkok Hospital Pattaya - General Consultation",2500,"per person","Standard doctor consultation fee at a premium international hospital in North Pattaya."],["Fascino Pharmacy - IV Drip Rehydration",1800,"per person","Rehydration or vitamin infusion service located on North Pattaya Road."],["Pattaya Memorial Hospital - ER Visit",3500,"per person","Average cost for minor emergency treatment and basic medication in Central Pattaya."],["Pattaya City Hospital - General Checkup",800,"per person","Affordable government-run hospital facility located on Soi Buakhao."],["Jomtien Medical Clinic - Flu Shot",950,"per person","Standard influenza vaccination service at a private clinic in Jomtien Beach area."],["Dental Smile Pattaya - Teeth Cleaning",1200,"per person","Professional scaling and polishing at a modern dental clinic on Second Road."],["Lab Check Pattaya - STD Screening",2200,"per person","Discreet and fast blood testing services located in South Pattaya."],["Home Call Doctor Service",4000,"per person","24/7 mobile medical service providing hotel or villa visits throughout Pattaya."]],"concierge":[["VIP Fast Track Airport Meet & Greet",1500,"per person","Expedited immigration and luggage assistance at Suvarnabhumi Airport with private transfer coordination to Pattaya."],["Luxury Mercedes S-Class Airport Transfer",3500,"per trip","Premium chauffeur service from Bangkok airports directly to your hotel or villa in Pattaya."],["Private Yacht Charter - 45ft Catamaran",45000,"per day","Full day private sailing to Koh Larn and Koh Phai, includes crew, snorkeling gear, and soft drinks. Departs Ocean Marina."],["Private Villa Chef Service",3500,"per meal","Professional Thai or International chef to prepare a custom dinner at your private villa in Pratumnak or Jomtien."],["24/7 Personal Security Detail",8000,"per day","Professional, discreet close-protection officer for high-profile guests visiting nightlife venues."],["Luxury Pool Party Coordination",15000,"per event","Full event planning including DJ, catering and decor for private villas in East Pattaya."],["Helicopter Transfer BKK to Pattaya",65000,"per flight","The ultimate arrival experience. 40-minute flight landing at a private helipad near North Pattaya."],["Multilingual Personal Assistant",4000,"per day","Local expert to assist with shopping, translations, and bookings throughout Pattaya City."]]};
  /* LEGAL: no medical prices (medical ads need DoHSS approval); estimated prices shown to admins only until partners confirm them */
  delete P.medical;
  if(P.restaurants)P.restaurants.forEach(function(it){it[0]=it[0].replace(/\s*&\s*Wine Bar$/i,"").replace(/\s*&\s*Bar$/i,"")});
  var adminOK=false;
  (function(){try{if(!window.supabase)return;var c=window.supabase.createClient("https://mymtgbmcjbwsnetzwgoy.supabase.co","sb_publishable_ViFodxG8kAENr78Fyp-BwQ_iA_BfAD0");
    function chk(){c.rpc("np_is_admin").then(function(r){var was=adminOK;adminOK=!r.error&&r.data===true;if(was!==adminOK){var o=document.querySelector("#svcPage .npprod");if(o)o.remove();sched()}})}
    chk();c.auth.onAuthStateChange(function(){setTimeout(chk,100)})}catch(e){}})();
  function esc(s){return String(s||"").replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
  function catNow(){var s=history.state;if(s&&s.np==="s"&&s.cat)return s.cat;var h=location.hash;return h.indexOf("#s/")===0?decodeURIComponent(h.slice(3)):null}
  if(!document.getElementById("npProdCss")){
    var st=document.createElement("style");st.id="npProdCss";
    st.textContent='.npprod{margin:22px 0 8px}.npprod h3{font-size:17px;margin:0 0 4px}.npprod .npnote{font-size:12px;opacity:.7;margin:0 0 12px}'+
      '.npitem{border:1px solid var(--line,rgba(255,255,255,.14));background:var(--surface,rgba(255,255,255,.05));border-radius:14px;padding:12px 14px;margin:0 0 10px}'+
      '.npitem .nprow{display:flex;justify-content:space-between;gap:10px;align-items:baseline}.npitem b{font-size:15px}'+
      '.npitem .npprice{flex:0 0 auto;font-weight:700;color:#E9B949;white-space:nowrap}.npitem .npunit{font-size:12px;opacity:.7;font-weight:400}'+
      '.npitem p{margin:6px 0 0;font-size:13px;opacity:.85;line-height:1.4}';
    document.head.appendChild(st);
  }
  function fmt(n){return n.toLocaleString("en-US")}
  function render(){
    var svc=document.getElementById("svcPage");if(!svc||svc.hidden)return;
    var cat=catNow(),list=cat&&P[cat];if(cat==="restaurants")list=(P.indian||[]).filter(function(it){return /pure veg|vegetarian/i.test(it[0]+" "+it[3])});
    var old=svc.querySelector(".npprod");
    if(old&&old.dataset.cat===cat)return;
    if(old)old.remove();
    if(!list||!list.length||!adminOK)return;
    var box=document.createElement("div");box.className="npprod";box.dataset.cat=cat;
    box.innerHTML='<h3>Popular options & prices</h3><p class="npnote">🔒 Admin preview only – customers cannot see this until each business confirms its prices and agrees to be listed.</p>'+
      list.map(function(it){return '<div class="npitem"><div class="nprow"><b>'+esc(it[0])+'</b><span class="npprice">≈ ฿'+fmt(it[1])+' <span class="npunit">'+esc(it[2])+'</span></span></div><p>'+esc(it[3])+'</p></div>'}).join("");
    var grid=svc.querySelector("#svcGrid");
    if(grid&&grid.parentNode===svc){var after=grid.nextSibling;while(after&&after.nodeType===1&&after.classList.contains("empty"))after=after.nextSibling;svc.insertBefore(box,after)}
    else svc.appendChild(box);
  }
  var busy=false;
  function sched(){if(busy)return;busy=true;requestAnimationFrame(function(){busy=false;render()})}
  var svc=document.getElementById("svcPage");
  if(svc)new MutationObserver(sched).observe(svc,{childList:true,subtree:true,attributes:true,attributeFilter:["hidden"]});
  window.addEventListener("hashchange",sched);window.addEventListener("popstate",sched);
  render();setTimeout(render,1500);
})();

/* ===== Restaurant orders: send new restaurant bookings to the restaurant dashboard (restaurant.html) ===== */
(function(){
  if(!window.supabase||typeof store==="undefined"||typeof store.set!=="function")return;
  var CATS_FOR_DASH=["restaurants","indian"];
  var sb=window.supabase.createClient("https://mymtgbmcjbwsnetzwgoy.supabase.co","sb_publishable_ViFodxG8kAENr78Fyp-BwQ_iA_BfAD0");
  var sent={};
  function s(v,n){return v==null?null:String(v).slice(0,n)}
  function send(b){
    try{
      if(!b||!b.code||sent[b.code])return;
      var c=(typeof CLUBS!=="undefined")?CLUBS.find(function(x){return x.id===b.club}):null;
      var cat=b.cat||(c&&c.cat)||"";
      if(CATS_FOR_DASH.indexOf(cat)<0)return;
      sent[b.code]=1;
      var g=parseInt(b.guests,10);
      var base={code:s(b.code,20),venue_id:s(b.club,60),venue_name:s(c?c.name:b.club,120),category:s(cat,40),
        customer_name:s(b.name,80),customer_phone:s(b.phone,30),package:s(b.pkg,200),guests:isNaN(g)?null:Math.max(0,Math.min(500,g)),
        booking_date:s(b.date,40),booking_time:s(b.time,40),total:Number(b.total)>=0?Number(b.total):null,note:s(b.note||b.notes||b.request,500)};
      var row=base;
      if(b.order_type&&b.order_type!=="dine_in"){row=Object.assign({},base,{order_type:b.order_type,delivery_address:s(b.address,300)})}
      sb.from("np_orders").insert(row).then(function(r){
        if(r&&r.error&&row!==base){
          /* database not updated yet for delivery: send without it, keep the info in the note */
          var nb=Object.assign({},base,{note:s(((b.order_type==="delivery"?"DELIVERY to: "+(b.address||""):"TAKEAWAY")+" | "+(base.note||"")),500)});
          return sb.from("np_orders").insert(nb);
        }
        return r;
      }).then(function(r){if(r&&r.error){delete sent[b.code];console.warn("order not sent",r.error.message)}});
    }catch(e){}
  }
  var _set=store.set,prev=(typeof bookings!=="undefined"&&bookings)?bookings.length:0;
  store.set=function(key,val){
    try{if(key==="np_bookings"&&Array.isArray(val)){if(val.length>prev)send(val[0]);prev=val.length}}catch(e){}
    return _set.apply(this,arguments);
  };
})();

/* ===== Account screen: "Restaurant dashboard" button for admins and restaurant owners/staff ===== */
(function(){
  if(!window.supabase||typeof panel==="undefined")return;
  var sb=window.supabase.createClient("https://mymtgbmcjbwsnetzwgoy.supabase.co","sb_publishable_ViFodxG8kAENr78Fyp-BwQ_iA_BfAD0");
  var allowed=null,checking=false,uid=null;
  function check(cb){
    if(checking)return;checking=true;
    sb.auth.getSession().then(function(r){
      var s=r.data&&r.data.session;
      if(!s){allowed=false;uid=null;checking=false;return}
      if(uid===s.user.id&&allowed!==null){checking=false;cb();return}
      uid=s.user.id;
      sb.rpc("np_my_venues").then(function(v){allowed=!v.error&&!!(v.data&&v.data.length);
        if(!allowed)return sb.rpc("np_is_admin").then(function(a){allowed=!a.error&&a.data===true});
      }).then(function(){checking=false;cb()},function(){checking=false});
    });
  }
  function add(){
    if(panel.querySelector("#npRestDash"))return;
    var out=[].slice.call(panel.querySelectorAll("button")).find(function(b){return /log ?out/i.test(b.textContent)});
    if(!out)return;
    check(function(){
      if(!allowed||panel.querySelector("#npRestDash"))return;
      var o=[].slice.call(panel.querySelectorAll("button")).find(function(b){return /log ?out/i.test(b.textContent)});if(!o)return;
      var b=document.createElement("button");b.id="npRestDash";b.type="button";b.className=o.className||"pill";b.textContent="Restaurant dashboard";
      b.style.cssText="display:block;margin:0 0 10px";
      var anchor=panel.querySelector("#npChangePw")||o;anchor.insertAdjacentElement("beforebegin",b);
      b.onclick=function(){location.href="restaurant.html"};
    });
  }
  var busy=false;
  new MutationObserver(function(){if(busy)return;busy=true;requestAnimationFrame(function(){busy=false;add()})}).observe(panel,{childList:true,subtree:true});
  sb.auth.onAuthStateChange(function(){allowed=null;uid=null});
})();

/* ===== Restaurants: Dine-in / Takeaway / Delivery choice in the booking form; no DJ song request or photo-on-screen for restaurants ===== */
(function(){
  if(typeof CLUBS==="undefined"||typeof store==="undefined")return;
  var FOOD=["restaurants","indian"],lastPlace=null,choice={type:"dine_in",addr:""};
  var BTN=/book|send|confirm|request|reserve|बुक/i;
  var CLUBONLY=/(song|dj|music)[^.]{0,20}request|request[^.]{0,20}(song|dj|music)|(photo|picture|pic|name|message|video)[^.]{0,20}on (the )?(big |led )?screen|screen (message|shout|display)|led screen/i;
  function vis(el){return !!(el&&el.offsetParent!==null)}
  function isFood(c){return !!(c&&FOOD.indexOf(c.cat)>-1)}
  document.addEventListener("click",function(e){
    var card=e.target.closest&&e.target.closest(".art, .card, [data-id]");if(!card)return;
    var id=card.dataset&&card.dataset.id,nm=card.querySelector&&card.querySelector(".name"),name=nm?nm.textContent.trim():"";
    var c=CLUBS.find(function(x){return (id&&x.id===id)||(name&&x.name===name)});if(c)lastPlace=c;
  },true);
  function venueIn(root){
    var hs=root.querySelectorAll("h1,h2,h3,h4,#sheetTitle,.name,.vname,.title");
    for(var i=0;i<hs.length;i++){var t=hs[i].textContent.trim();var c=CLUBS.find(function(x){return x.name&&(t===x.name||t.indexOf(x.name)===0)});if(c)return c}
    var txt=root.textContent||"";
    var m=CLUBS.filter(function(x){return x.name&&x.name.length>3&&txt.indexOf(x.name)>-1}).sort(function(a,b){return b.name.length-a.name.length})[0];
    return m||lastPlace;
  }
  function containerOf(el){return el.closest(".pbody")||el.closest("#panel")||el.closest(".sheet")||el.closest("section")||el.parentElement}
  if(!document.getElementById("npDelCss")){
    var st=document.createElement("style");st.id="npDelCss";
    st.textContent='.npdel{margin:12px 0}.npdel .npdl{font-weight:600;margin:0 0 6px}.npdel .npseg{display:flex;gap:6px}.npdel .npseg button{flex:1;padding:10px 6px;border-radius:12px;border:1px solid var(--line,rgba(255,255,255,.2));background:var(--surface,rgba(255,255,255,.05));color:var(--ink,#fff);font-weight:600}'+
      '.npdel .npseg button[aria-pressed="true"]{border-color:#E5861A;background:rgba(229,134,26,.18);color:#E5861A}.npdel textarea{width:100%;margin-top:8px;border-radius:12px;border:1px solid var(--line,rgba(255,255,255,.2));background:var(--surface,rgba(255,255,255,.05));color:var(--ink,#fff);padding:10px;min-height:64px;font:inherit}'+
      '.npdel .nploc{margin-top:6px;background:none;border:0;color:#E5861A;font-weight:600;padding:4px 0}.npdel small{display:block;opacity:.7;margin-top:4px}';
    document.head.appendChild(st);
  }
  function makeBox(){
    choice={type:"dine_in",addr:""};
    var box=document.createElement("div");box.className="npdel";
    box.innerHTML='<p class="npdl">How do you want your food?</p><div class="npseg" role="group" aria-label="Order type"><button type="button" data-t="dine_in" aria-pressed="true">Dine-in</button><button type="button" data-t="takeaway" aria-pressed="false">Takeaway</button><button type="button" data-t="delivery" aria-pressed="false">Delivery</button></div>'+
      '<div class="npaddr" hidden><textarea placeholder="Delivery address: hotel name, room number, street"></textarea><button type="button" class="nploc">📍 Add my current location</button><small>The restaurant will call you to confirm the order and delivery time.</small></div>';
    var addr=box.querySelector(".npaddr"),ta=box.querySelector("textarea");
    [].forEach.call(box.querySelectorAll("[data-t]"),function(b){b.onclick=function(e){e.preventDefault();
      choice.type=b.dataset.t;[].forEach.call(box.querySelectorAll("[data-t]"),function(x){x.setAttribute("aria-pressed",x===b?"true":"false")});
      addr.hidden=choice.type!=="delivery";if(!addr.hidden)ta.focus();
    }});
    ta.oninput=function(){choice.addr=ta.value.trim()};
    box.querySelector(".nploc").onclick=function(e){e.preventDefault();
      if(!navigator.geolocation){alert("Location is not available on this phone.");return}
      navigator.geolocation.getCurrentPosition(function(p){
        var link="https://maps.google.com/?q="+p.coords.latitude.toFixed(6)+","+p.coords.longitude.toFixed(6);
        ta.value=(ta.value.trim()?ta.value.trim()+"\n":"")+link;choice.addr=ta.value.trim();
      },function(){alert("Please allow location for this app, or type your address.")},{enableHighAccuracy:true,timeout:10000});
    };
    return box;
  }
  function hideClubExtras(root){
    [].forEach.call(root.querySelectorAll("label,button,li,.addon,.opt,.chk,.extra,.row,p,div,span"),function(el){
      if(el.dataset.npHid||el.closest(".npdel")||el.closest("[data-np-hid]"))return;
      var t=(el.textContent||"").trim();if(!t||t.length>160||!CLUBONLY.test(t))return;
      /* hide the smallest block that holds this option */
      var kids=[].slice.call(el.children).filter(function(k){return CLUBONLY.test(k.textContent||"")});
      if(kids.length)return;
      var row=el.closest("label,li,.addon,.opt,.chk,.extra")||el;
      row.dataset.npHid="1";row.style.display="none";
    });
  }
  function scan(){
    /* booking forms: any visible date field, or a visible booking button */
    var anchors=[].slice.call(document.querySelectorAll('input[type="date"],input[type="datetime-local"]')).filter(function(d){return vis(d)&&!d.closest("#dash")});
    if(!anchors.length)anchors=[].slice.call(document.querySelectorAll("button")).filter(function(b){return vis(b)&&BTN.test(b.textContent)&&!b.closest("#dash,.npdel,nav,header,#pkgs,.pkg")&&/guest|people|person|pax|table|date|time/i.test((containerOf(b)||{}).textContent||"")});
    anchors.forEach(function(el){
      var box=containerOf(el);if(!box)return;
      var c=venueIn(box);if(!isFood(c))return;
      hideClubExtras(box);
      if(box.querySelector(".npdel"))return;
      var at=el.tagName==="INPUT"?(el.closest("label")||el):el;
      at.insertAdjacentElement("beforebegin",makeBox());
    });
    /* restaurant page / package list outside the form */
    var cur=lastPlace;
    if(isFood(cur))[].forEach.call(document.querySelectorAll(".pbody,#panel,section"),function(sec){if(vis(sec)&&venueIn(sec)===cur)hideClubExtras(sec)});
  }
  /* don't send a delivery order without an address */
  document.addEventListener("click",function(e){
    var b=e.target.closest&&e.target.closest("button");if(!b||b.closest(".npdel"))return;
    var box=containerOf(b);if(!box||!box.querySelector(".npdel"))return;
    if(BTN.test(b.textContent)&&choice.type==="delivery"&&!choice.addr){
      e.preventDefault();e.stopImmediatePropagation();alert("Please add your delivery address.");var ta=box.querySelector(".npdel textarea");if(ta)ta.focus();
    }
  },true);
  var busy=false;
  new MutationObserver(function(){if(busy)return;busy=true;setTimeout(function(){busy=false;try{scan()}catch(e){}},120)}).observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:["hidden","class"]});
  /* add the choice to the booking before it is saved and sent to the restaurant */
  var _set=store.set,prev=(typeof bookings!=="undefined"&&bookings)?bookings.length:0;
  store.set=function(key,val){
    try{
      if(key==="np_bookings"&&Array.isArray(val)){
        if(val.length>prev&&val[0]){
          var b=val[0],c=CLUBS.find(function(x){return x.id===b.club});
          if(isFood(c)&&choice.type!=="dine_in"){
            b.order_type=choice.type;if(choice.type==="delivery")b.address=choice.addr;
            b.pkg=(choice.type==="delivery"?"Delivery · ":"Takeaway · ")+(b.pkg||"");
          }
          choice={type:"dine_in",addr:""};
        }
        prev=val.length;
      }
    }catch(e){}
    return _set.apply(this,arguments);
  };
})();

/* ===== Restaurant partners: open the restaurant dashboard instead of the club dashboard ===== */
(function(){
  if(!window.supabase||typeof go!=="function")return;
  var sb=window.supabase.createClient("https://mymtgbmcjbwsnetzwgoy.supabase.co","sb_publishable_ViFodxG8kAENr78Fyp-BwQ_iA_BfAD0");
  var rest=false;
  function isRest(u){var m=(u&&u.user_metadata)||{};return m.role==="partner"&&/restaurant|food|cafe/i.test(String(m.venue_type||""))}
  function check(){sb.auth.getSession().then(function(r){var s=r.data&&r.data.session;rest=!!(s&&isRest(s.user));
    var d=document.getElementById("dash");if(rest&&d&&!d.hidden)location.href="restaurant.html"})}
  var _go=go;
  go=function(t){if(t==="dash"&&rest){location.href="restaurant.html";return}return _go.apply(this,arguments)};
  sb.auth.onAuthStateChange(function(){setTimeout(check,50)});
  check();
})();

/* ===== Raju: order status. Customer asks "where is my order" or gives an order number (NP…) ===== */
(function(){
  if(typeof ask!=="function"||!window.supabase)return;
  var sb=window.supabase.createClient("https://mymtgbmcjbwsnetzwgoy.supabase.co","sb_publishable_ViFodxG8kAENr78Fyp-BwQ_iA_BfAD0");
  var FOOD=["restaurants","indian"];
  var CODE=/\bNP[A-Z0-9]{5}\b/gi;
  var ASKS=/(order|booking|delivery|deliver|khana|food|parcel|takeaway|table|ऑर्डर|बुकिंग|खाना)/i;
  var WHAT=/(status|where|when|kab|kahan|kaha|kidhar|ready|confirm|number|update|late|abhi tak|kitni der|kitna time|pahunch|aaya|aayega|track|कहाँ|कब|स्टेटस)/i;
  var SAY={new:"the restaurant has received it and will confirm it very soon",confirmed:"the restaurant has confirmed it",in_progress:"the restaurant is preparing it now",done:"it is completed",cancelled:"it was cancelled by the restaurant – please contact our team on WhatsApp"};
  function myCodes(){
    try{
      var list=(typeof bookings!=="undefined"&&Array.isArray(bookings))?bookings:[];
      return list.filter(function(b){var c=(typeof CLUBS!=="undefined")?CLUBS.find(function(x){return x.id===b.club}):null;return FOOD.indexOf(b.cat||(c&&c.cat))>-1&&b.code})
        .slice(0,3).map(function(b){return String(b.code).toUpperCase()});
    }catch(e){return []}
  }
  function mins(t){var m=Math.round((Date.now()-new Date(t))/60000);return m<1?"just now":m<60?m+" min ago":Math.round(m/60)+" h ago"}
  async function lookup(q){
    var typed=(String(q).match(CODE)||[]).map(function(c){return c.toUpperCase()});
    var codes=typed.length?typed:myCodes();
    if(!codes.length)return "No restaurant order was found on this phone. Ask the customer for their order number – it starts with NP and is shown in My bookings.";
    var r=await sb.rpc("np_order_status",{codes:codes});
    if(r.error)return null;
    if(!r.data||!r.data.length)return typed.length?"No order was found with number "+typed.join(", ")+". Ask the customer to check the number in My bookings (it starts with NP), or to message our team on WhatsApp.":"The order has not reached the restaurant yet. Ask the customer to wait a minute and ask again, or to message our team on WhatsApp.";
    return r.data.map(function(o){
      var kind=o.order_type==="delivery"?"delivery order":o.order_type==="takeaway"?"takeaway order":"table booking";
      var extra=o.order_type==="delivery"&&o.staff_assigned&&(o.status==="in_progress"||o.status==="confirmed")?" A delivery person has been assigned.":"";
      return "Order "+o.code+" ("+kind+" at "+(o.venue_name||"the restaurant")+"): "+(SAY[o.status]||o.status)+". Last update "+mins(o.updated_at)+"."+extra;
    }).join(" ")+" The restaurant will call the customer if anything changes.";
  }
  var _ask=ask;
  ask=async function(q){
    var t=String(q||"");
    CODE.lastIndex=0;
    var isOrder=CODE.test(t)||(ASKS.test(t)&&WHAT.test(t));CODE.lastIndex=0;
    if(isOrder){try{var info=await Promise.race([lookup(t),new Promise(function(ok){setTimeout(function(){ok(null)},6000)})]);if(info)window.__npOrderInfo=info}catch(e){}}
    try{return await _ask.apply(this,arguments)}finally{window.__npOrderInfo=null}
  };
})();

/* ===== Partner sign-up: restaurant photo (required for restaurants) ===== */
(function(){
  if(typeof panel==="undefined"||!window.supabase)return;
  var sb=window.supabase.createClient("https://mymtgbmcjbwsnetzwgoy.supabase.co","sb_publishable_ViFodxG8kAENr78Fyp-BwQ_iA_BfAD0");
  var KEY="np_pending_venue_photo",photo=null;
  function isRestType(v){return /restaurant|food|cafe/i.test(String(v||""))}
  function shrink(file,cb){
    var img=new Image(),url=URL.createObjectURL(file);
    img.onload=function(){var m=1280,w=img.width,h=img.height,k=Math.min(1,m/Math.max(w,h));
      var cv=document.createElement("canvas");cv.width=Math.round(w*k);cv.height=Math.round(h*k);cv.getContext("2d").drawImage(img,0,0,cv.width,cv.height);
      URL.revokeObjectURL(url);cb(cv.toDataURL("image/jpeg",0.82))};
    img.onerror=function(){URL.revokeObjectURL(url);cb(null)};img.src=url;
  }
  function build(){
    var t=panel.querySelector("#ppT"),go=panel.querySelector("#ppGo");
    if(!t||!go||panel.querySelector("#npVPhoto"))return;
    photo=null;
    var lab=document.createElement("label");lab.className="full";lab.id="npVPhotoWrap";
    lab.innerHTML='Photo of your restaurant<input id="npVPhoto" type="file" accept="image/*"><span id="npVPrev" style="display:block;margin-top:6px"></span>';
    (t.closest("label")||t).insertAdjacentElement("afterend",lab);
    function show(){lab.style.display=isRestType(t.value)?"":"none"}
    t.addEventListener("change",show);show();
    lab.querySelector("#npVPhoto").onchange=function(e){var f=e.target.files&&e.target.files[0];if(!f)return;
      shrink(f,function(d){photo=d;lab.querySelector("#npVPrev").innerHTML=d?'<img src="'+d+'" alt="Restaurant photo preview" style="width:100%;max-height:180px;object-fit:cover;border-radius:12px">':"Could not read this photo, please choose another."})};
    go.addEventListener("click",function(e){
      if(!isRestType(t.value))return;
      if(!photo){e.preventDefault();e.stopImmediatePropagation();var m=panel.querySelector("#ppM");if(m)m.textContent="Please add a photo of your restaurant.";return}
      var em=panel.querySelector("#ppE");try{localStorage.setItem(KEY,JSON.stringify({email:(em?em.value.trim().toLowerCase():""),data:photo}))}catch(err){}
    },true);
  }
  var busy=false;
  new MutationObserver(function(){if(busy)return;busy=true;requestAnimationFrame(function(){busy=false;build()})}).observe(panel,{childList:true,subtree:true});
  /* upload the saved photo as soon as the restaurant is signed in (here or on restaurant.html) */
  window.npUploadVenuePhoto=async function(client,user){
    try{
      var raw=localStorage.getItem(KEY);if(!raw)return null;var p=JSON.parse(raw);
      if(p.email&&user.email&&p.email!==user.email.toLowerCase())return null;
      var blob=await (await fetch(p.data)).blob(),path=user.id+"/venue.jpg";
      var up=await client.storage.from("partner-photos").upload(path,blob,{upsert:true,contentType:"image/jpeg"});
      if(up.error)return null;
      var url=client.storage.from("partner-photos").getPublicUrl(path).data.publicUrl+"?v="+Date.now();
      var md=user.user_metadata||{};
      var ins=await client.from("np_partner_requests").insert({email:user.email,venue_name:md.venue||null,venue_type:md.venue_type||null,contact_name:md.name||null,phone:md.phone||null,photo_url:url});
      if(ins.error)await client.from("np_partner_requests").update({photo_url:url}).eq("user_id",user.id);
      if(md.food_type){try{await client.from("np_partner_requests").update({food_type:md.food_type,cuisines:md.cuisines||null}).eq("user_id",user.id)}catch(e){}}
      localStorage.removeItem(KEY);return url;
    }catch(e){return null}
  };
  sb.auth.onAuthStateChange(function(ev,s){if(s&&s.user&&(s.user.user_metadata||{}).role==="partner")window.npUploadVenuePhoto(sb,s.user)});
})();

/* ===== LEGAL: no alcohol, tobacco or hookah wording anywhere in venue data or pages (Alcoholic Beverage Control Act No. 2, 2025) ===== */
(function(){
  var RULES=[
    [/\s*&\s*Wine Bar\b/gi,""],[/\bWine Bar\b/gi,"Restaurant"],
    [/\bbottle[\s-]*service\b/gi,"table service"],
    [/\s*[,+&·•|\/-]?\s*(\d+|one|two|three|four|five|free|premium|house)?\s*(bottles?|btl)(\s+of\s+[a-z]+)?(\s+included)?/gi,""],
    [/\s*[,+&]?\s*(free[\s-]*flow|open bar|happy hours?|welcome drinks?|free drinks?|drinks? included|mixers?)\b/gi,""],
    [/\s*[,+&]?\s*\b(cocktails?|craft beers?|beers?|whiske?y|vodka|rum|gin|tequila|champagne|prosecco|wine cellar|wines?|spirits|liquor|shots|buckets?)\b/gi,""],
    [/\s*[,+&]?\s*\b(hookahs?|shisha|vapes?|cigar(ette)?s?)\b/gi,""]
  ];
  var BAD=/bottle|btl\b|free[\s-]*flow|open bar|happy hour|welcome drink|free drink|drinks? included|mixer|cocktail|beer|whiske?y|vodka|\brum\b|\bgin\b|tequila|champagne|prosecco|\bwines?\b|spirits|liquor|\bshots\b|bucket|hookah|shisha|\bvapes?\b|cigar/i;
  function clean(t){
    if(typeof t!=="string"||!BAD.test(t))return t;
    var o=t;RULES.forEach(function(r){o=o.replace(r[0],r[1])});
    for(var i=0;i<3;i++)o=o.replace(/\b(with|and|&|plus)\s*(,|and\b|&)\s*/gi,"$1 ").replace(/,\s*(and|&)\s+/gi," and ").replace(/\s+(and|with|&|plus|,)\s*$/i,"").replace(/^\s*(and|with|&|,)\s+/i,"");
    return o.replace(/\s{2,}/g," ").replace(/\s+([,.;:!)])/g,"$1").replace(/([,(])\s*[,)]/g,"$1").replace(/^[\s,;·•|+&-]+|[\s,;·•|+&-]+$/g,"").replace(/,\s*,/g,",")||o.split(/[,.]/)[0];
  }
  function walk(v,depth){
    if(depth>4||v==null)return v;
    if(typeof v==="string")return clean(v);
    if(Array.isArray(v)){for(var i=v.length-1;i>=0;i--){var c=walk(v[i],depth+1);if(typeof c==="string"&&!c.trim()&&typeof v[i]==="string")v.splice(i,1);else v[i]=c}return v}
    if(typeof v==="object"){Object.keys(v).forEach(function(k){if(k==="id"||k==="photo"||k==="img"||k==="art")return;v[k]=walk(v[k],depth+1)})}
    return v;
  }
  function data(){
    try{if(typeof CLUBS!=="undefined")CLUBS.forEach(function(c){walk(c,0)})}catch(e){}
    try{if(typeof NIGHT!=="undefined")walk(NIGHT,0)}catch(e){}
    try{if(typeof PARTNERS!=="undefined")walk(PARTNERS,0)}catch(e){}
  }
  /* visible text on venue cards, service pages and booking sheets (not chats or what people type) */
  function page(root){
    var w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:function(n){
      var p=n.parentElement;if(!p||!BAD.test(n.nodeValue))return NodeFilter.FILTER_REJECT;
      if(p.closest("input,textarea,script,style,.msg,.bubble,.chat,#rajuChat,[contenteditable],.npdel"))return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT}});
    var list=[];while(w.nextNode())list.push(w.currentNode);
    list.forEach(function(n){var c=clean(n.nodeValue);if(c!==n.nodeValue)n.nodeValue=c});
  }
  data();
  ["renderGrid","renderRail","renderCats","renderMap"].forEach(function(f){try{if(typeof window[f]==="function")window[f]()}catch(e){}});
  var busy=false;
  function run(){["svcPage","panel","explore","cats","home","night","grid","rail"].forEach(function(id){var el=document.getElementById(id);if(el)page(el)});
    [].forEach.call(document.querySelectorAll(".pbody,.card,.art,.svchero,.sheet"),page)}
  new MutationObserver(function(){if(busy)return;busy=true;setTimeout(function(){busy=false;try{run()}catch(e){}},150)}).observe(document.body,{childList:true,subtree:true});
  run();
})();

/* ===== LEGAL (PDPA): privacy notice + consent on every booking; photo-rights tick for restaurant sign-up ===== */
(function(){
  if(typeof CLUBS==="undefined")return;
  var BTN=/book|send|confirm|request|reserve|बुक/i,FOOD=["restaurants","indian"];
  function vis(el){return !!(el&&el.offsetParent!==null)}
  function containerOf(el){return el.closest(".pbody")||el.closest("#panel")||el.closest(".sheet")||el.closest("section")||el.parentElement}
  if(!document.getElementById("npPdpaCss")){var st=document.createElement("style");st.id="npPdpaCss";
    st.textContent='.nppdpa{display:flex;gap:10px;align-items:flex-start;margin:12px 0;font-size:13px;line-height:1.4;opacity:.92}.nppdpa input{width:20px;height:20px;flex:0 0 20px;margin-top:1px}.nppdpa a{color:#E5861A;font-weight:600}.nppdpa.err{color:#ff6b5b}';
    document.head.appendChild(st)}
  function scan(){
    var btns=[].slice.call(document.querySelectorAll("button")).filter(function(b){
      if(!vis(b)||!BTN.test(b.textContent)||b.closest("#dash,.npdel,nav,header,.nppdpa,#pkgs,.pkg"))return false;
      var box=containerOf(b);if(!box)return false;
      /* only real booking forms: never the home page or a list of venue cards */
      var form=box.closest("#panel,.sheet,.pbody")||box.matches("#panel,.sheet,.pbody");
      var hasDate=box.querySelector('input[type="date"],input[type="datetime-local"]');
      if(!form&&(!hasDate||box.querySelectorAll("[data-id]").length>1))return false;
      return hasDate||/guest|people|person|pax/i.test(box.textContent||"");
    });
    btns.forEach(function(b){
      var box=containerOf(b);if(box.querySelector(".nppdpa"))return;
      var lab=document.createElement("label");lab.className="nppdpa";
      lab.innerHTML='<input type="checkbox"><span>I agree that Namaste Pattaya and this venue use my name, phone number'+(box.querySelector(".npdel")?", and my address or location for delivery,":"")+' only to handle this booking. <a href="privacy.html" target="_blank" rel="noopener">Privacy policy</a></span>';
      b.insertAdjacentElement("beforebegin",lab);
    });
  }
  document.addEventListener("click",function(e){
    var b=e.target.closest&&e.target.closest("button");if(!b||!BTN.test(b.textContent)||b.closest("#pkgs,.pkg"))return;
    var box=containerOf(b);var lab=box&&box.querySelector(".nppdpa");if(!lab)return;
    if(!lab.querySelector("input").checked){e.preventDefault();e.stopImmediatePropagation();lab.classList.add("err");lab.scrollIntoView({block:"center",behavior:"smooth"});
      setTimeout(function(){lab.classList.remove("err")},2500)}
  },true);
  /* restaurant sign-up: photo rights */
  function photoRights(){
    var wrap=document.getElementById("npVPhotoWrap");if(!wrap||document.getElementById("npPhotoOk"))return;
    var lab=document.createElement("label");lab.className="nppdpa full";lab.id="npPhotoOkWrap";
    lab.innerHTML='<input type="checkbox" id="npPhotoOk"><span>I own this photo or have permission to use it, and Namaste Pattaya may show it in the app.</span>';
    wrap.insertAdjacentElement("afterend",lab);
    var go=document.getElementById("ppGo"),t=document.getElementById("ppT");
    if(go)go.addEventListener("click",function(e){
      if(!t||!/restaurant|food|cafe/i.test(t.value))return;
      if(!document.getElementById("npPhotoOk").checked){e.preventDefault();e.stopImmediatePropagation();var m=document.getElementById("ppM");if(m)m.textContent="Please confirm you have the right to use this photo.";lab.classList.add("err")}
    },true);
    if(t){var sync=function(){lab.style.display=/restaurant|food|cafe/i.test(t.value)?"":"none"};t.addEventListener("change",sync);sync()}
  }
  var busy=false;
  new MutationObserver(function(){if(busy)return;busy=true;setTimeout(function(){busy=false;try{scan();photoRights()}catch(e){}},160)}).observe(document.body,{childList:true,subtree:true});
})();

/* ===== Home: tagline line under the top bar, above Raju; compact Raju box; tighter spacing ===== */
(function(){
  if(!document.getElementById("npTagCss")){
    var st=document.createElement("style");st.id="npTagCss";
    st.textContent='.nptag{text-align:center;font-weight:600;font-size:15px;margin:6px 0 12px;color:#E9B949;letter-spacing:.01em}';
    document.head.appendChild(st);
  }
  function esc(s){return String(s||"").replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
  function lang(){try{return localStorage.getItem("np_lang")||"en"}catch(e){return "en"}}
  /* tagline line just above the main Raju box on home */
  function rajuCard(){
    var hits=[].slice.call(document.querySelectorAll("#cats ~ *, section *")).filter(function(el){
      return el.children.length<12&&/Raju/.test(el.textContent||"")&&/(Hindi bhi|ask me anything|हिंदी)/i.test(el.textContent||"")&&!el.closest("#panel,.sheet,#rajuChat");
    });
    /* the smallest block that is still a "card" */
    hits.sort(function(a,b){return a.textContent.length-b.textContent.length});
    var el=hits[0];if(!el)return null;
    while(el.parentElement&&el.parentElement.textContent.length<el.textContent.length+40&&el.parentElement.tagName!=="SECTION")el=el.parentElement;
    return el;
  }
  /* move the app's own tagline line (under "Namaste. Pattaya made easy…") to just above the Raju box */
  function buildTag(){
    var old=document.querySelector(".nptag");if(old)old.remove();
    var rc=rajuCard();if(!rc)return;
    var cands=[].slice.call(document.querySelectorAll("body *")).filter(function(el){
      var t=el.textContent||"";return /tohfa|तोहफ़ा|तोहफा/.test(t)&&t.length<220&&!el.closest("#panel,.sheet,#rajuChat,script,style")&&!rc.contains(el);
    });
    if(!cands.length)return;
    /* the smallest block that holds the whole tagline (English + Hindi together if they are side by side) */
    cands.sort(function(a,b){return a.textContent.length-b.textContent.length});
    var tag=cands.find(function(el){return /tohfa/i.test(el.textContent)&&/तोहफ/.test(el.textContent)})||cands[0];
    if(tag.dataset.npMoved)return;
    var box=rc;while(box.parentElement&&!box.parentElement.contains(tag))box=box.parentElement;
    if(!box.parentElement)return;
    box.parentElement.insertBefore(tag,box);
    tag.dataset.npMoved="1";tag.style.display="block";tag.style.textAlign="center";tag.style.margin="4px 0 10px";
  }
  /* Raju box on Home: keep it compact */
  function compactRaju(){
    var rc=rajuCard();if(!rc||rc.dataset.npCompact)return;rc.dataset.npCompact="1";
    rc.style.minHeight="0";rc.style.height="auto";rc.style.maxHeight="none";
    [].forEach.call(rc.querySelectorAll("img,svg,video,canvas"),function(m){if(m.closest("button"))return;var h=m.getBoundingClientRect().height;if(h>90){m.style.maxHeight="72px";m.style.width="auto";m.style.objectFit="contain"}});
    [].forEach.call(rc.querySelectorAll("*"),function(el){var cs=getComputedStyle(el);if(parseFloat(cs.minHeight)>120){el.style.minHeight="0"}if(parseFloat(cs.height)>320&&!el.querySelector("input,textarea")){el.style.height="auto"}});
  }
  /* less empty space between the money converter and Pattaya's Empowered Girls */
  var gapDone=false;window.addEventListener("hashchange",function(){gapDone=false});window.addEventListener("popstate",function(){gapDone=false});
  function tightenGap(){
    if(gapDone)return;
    var all=[].slice.call(document.querySelectorAll("section *"));
    function smallest(re){var h=all.filter(function(el){return re.test(el.textContent||"")&&!el.closest("#panel,.sheet")});h.sort(function(a,b){return a.textContent.length-b.textContent.length});return h[0]}
    var emp=smallest(/Empowered Girls/i),conv=smallest(/(currency|converter|convert|exchange)/i);
    if(!emp||!conv)return;
    function block(el){while(el.parentElement&&el.parentElement.tagName!=="SECTION"&&el.parentElement.children.length===1)el=el.parentElement;return el}
    var a=block(conv),b=block(emp);
    var p=a.parentElement;while(p&&!p.contains(b))p=p.parentElement;if(!p)return;
    function top(el){while(el.parentElement!==p)el=el.parentElement;return el}
    var ta=top(a),tb=top(b);if(ta===tb)return;
    for(var n=ta.nextElementSibling;n&&n!==tb;n=n.nextElementSibling){
      if(!(n.textContent||"").trim()&&!n.querySelector("img,svg,canvas,input,button,video,iframe"))n.style.display="none";
      else{n.style.marginTop="8px";n.style.marginBottom="8px"}
    }
    ta.style.marginBottom="12px";tb.style.marginTop="12px";gapDone=true;
    [ta,tb].forEach(function(el){if(parseFloat(getComputedStyle(el).minHeight)>0)el.style.minHeight="0"});
  }
  function run(){try{buildTag();compactRaju();tightenGap()}catch(e){}}
  var busy=false;
  new MutationObserver(function(){if(busy)return;busy=true;setTimeout(function(){busy=false;run()},200)}).observe(document.body,{childList:true,subtree:true});
  run();
})();

/* ===== Home upgrade (29 Sep 2026): Tonight in Pattaya, Pattaya today + safety, quick actions,
   club rows you can swipe, "Tables from" price label, smaller Raju above the nav bar,
   5-tab nav with a "More" tab (nothing deleted), readable text over the neon sign,
   clearer consent box, and bottom space so nothing hides behind the nav bar ===== */
(function(){
  var SVC=["grocery","indian","restaurants","hotels","spa","tours","water","golf","yacht","rental","airport","shopping","events","medical","concierge"];
  function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
  function norm(t){return String(t||"").replace(/\s+/g," ").trim()}
  function inPop(el){return !!(el&&el.closest&&el.closest("#panel,.sheet,#rajuChat,#svcPage,#npMoreSheet"))}
  function list(){return (typeof CLUBS!=="undefined"&&CLUBS)||[]}
  function isNight(c){return c&&SVC.indexOf(c.cat)<0&&!/restaurant/i.test(c.type||"")}
  function smallest(re,root,max){
    var h=[].slice.call((root||document).querySelectorAll("body *")).filter(function(el){
      var t=el.textContent||"";return re.test(t)&&(!max||t.length<max)&&!inPop(el)&&!/^(SCRIPT|STYLE)$/.test(el.tagName)});
    h.sort(function(a,b){return a.textContent.length-b.textContent.length});return h[0]||null;
  }

  /* ---------- styles (match the app: dark glass, purple-pink glow, gold text) ---------- */
  if(!document.getElementById("npHomeCss")){
    var st=document.createElement("style");st.id="npHomeCss";
    st.textContent=
    '#npHomeFill{margin:14px 0 6px;position:relative;z-index:1}'+
    '#npHomeFill .nph{display:flex;justify-content:space-between;align-items:baseline;margin:0 2px 10px}'+
    '#npHomeFill .nph h3{margin:0;font-size:19px;font-weight:700;color:var(--ink,#fff)}'+
    '#npHomeFill .nph span{font-size:13px;color:#E9B949;font-weight:600}'+
    '.nptrow{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;padding:2px 2px 8px;-webkit-overflow-scrolling:touch;scrollbar-width:none}'+
    '.nptrow::-webkit-scrollbar{display:none}'+
    '.nptcard{flex:0 0 72%;max-width:280px;scroll-snap-align:start;border-radius:20px;overflow:hidden;cursor:pointer;text-align:left;padding:0;color:var(--ink,#fff);font:inherit;'+
      'background:rgba(16,13,28,.62);border:1px solid rgba(199,160,255,.38);box-shadow:0 0 18px rgba(170,110,255,.16);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}'+
    '.nptcard .ph{height:92px;background-size:cover;background-position:center;position:relative}'+
    '.nptcard .ph:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,0) 30%,rgba(10,8,20,.85))}'+
    '.nptcard .bd{padding:10px 12px 12px}'+
    '.nptcard .tm{font-size:12px;color:#E9B949;font-weight:600}'+
    '.nptcard .nm{font-size:16px;font-weight:700;margin:2px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}'+
    '.nptcard .sb{font-size:12.5px;opacity:.72;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}'+
    '.nptcard .go{display:inline-block;margin-top:9px;font-size:12.5px;font-weight:600;padding:5px 12px;border-radius:999px;border:1px solid rgba(237,147,177,.6);color:#F7C4D8}'+
    '.npstrip{display:flex;flex-wrap:wrap;gap:8px;justify-content:space-between;align-items:center;margin:8px 0 0;padding:10px 12px;border-radius:16px;'+
      'background:rgba(16,13,28,.62);border:1px solid rgba(255,255,255,.1);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);font-size:13px;color:var(--ink,#fff)}'+
    '.npstrip .wx{display:flex;align-items:center;gap:6px;opacity:.9}'+
    '.npstrip .sos{display:flex;gap:6px}'+
    '.npstrip .sos a{text-decoration:none;font-size:12px;font-weight:600;padding:4px 9px;border-radius:999px;border:1px solid rgba(255,120,120,.55);color:#FFB4B4;white-space:nowrap}'+
    '.npqa{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin-top:10px}'+
    '.npqa button{display:flex;flex-direction:column;align-items:center;gap:6px;padding:12px 4px;border-radius:16px;font:inherit;font-size:12px;font-weight:600;color:var(--ink,#fff);cursor:pointer;'+
      'background:rgba(16,13,28,.62);border:1px solid rgba(255,255,255,.1);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}'+
    '.npqa button svg{color:#ED93B1}'+
    /* club rows you can swipe */
    '.npswipe{display:flex!important;flex-wrap:nowrap!important;gap:12px!important;overflow-x:auto!important;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding-bottom:6px}'+
    '.npswipe::-webkit-scrollbar{display:none}'+
    '.npswipe>*{flex:0 0 82%!important;max-width:340px!important;width:auto!important;scroll-snap-align:start;margin:0!important}'+
    /* readable text over the neon background */
    '.npreadable{background:rgba(12,10,22,.78)!important;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);position:relative;z-index:1}'+
    /* consent box: solid panel, bright checkbox */
    '.nppdpa{background:rgba(18,14,30,.94)!important;border:1px solid rgba(237,147,177,.5);border-radius:14px;padding:12px 14px!important;opacity:1!important;color:#F3EFFF;position:relative;z-index:2}'+
    '.nppdpa input[type=checkbox]{-webkit-appearance:none;appearance:none;width:22px!important;height:22px!important;flex:0 0 22px!important;border:2px solid #ED93B1;border-radius:6px;background:transparent;margin:0!important;cursor:pointer}'+
    '.nppdpa input[type=checkbox]:checked{background:#ED93B1 url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%231a1026%27 stroke-width=%273.5%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpath d=%27M5 12l5 5 9-10%27/%3E%3C/svg%3E") center/16px no-repeat}'+
    '.nppdpa.err{border-color:#ff6b5b}'+
    /* More sheet */
    '#npMoreSheet{position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.55);display:flex;align-items:flex-end;justify-content:center}'+
    '#npMoreSheet .in{width:100%;max-width:520px;margin:0 10px calc(12px + env(safe-area-inset-bottom));padding:16px;border-radius:22px;background:rgba(18,14,30,.97);border:1px solid rgba(199,160,255,.38);box-shadow:0 0 24px rgba(170,110,255,.2);color:var(--ink,#fff)}'+
    '#npMoreSheet h4{margin:0 0 12px;font-size:17px}'+
    '#npMoreSheet .it{display:flex;align-items:center;gap:12px;width:100%;padding:14px;margin-top:8px;border-radius:14px;font:inherit;font-size:15px;font-weight:600;color:inherit;text-align:left;cursor:pointer;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1)}'+
    '#npMoreSheet .it svg{color:#ED93B1;flex:0 0 auto}'+
    '#npMoreSheet .x{width:100%;margin-top:12px;padding:12px;border-radius:14px;font:inherit;font-weight:600;color:inherit;background:transparent;border:1px solid rgba(255,255,255,.18);cursor:pointer}'+
    '@media (prefers-reduced-motion:reduce){.nptrow,.npswipe{scroll-behavior:auto}}'+
    /* compact version, as in the agreed preview */
    '#npHomeFill .nph{margin-bottom:8px}#npHomeFill .nph h3{font-size:17px}#npHomeFill .npall{cursor:pointer;font-size:13px}'+
    '.nptrow{gap:10px}'+
    '.nptcard{flex:0 0 42%;max-width:170px;min-height:118px;position:relative;display:flex;flex-direction:column;justify-content:flex-end;border-radius:16px}'+
    '.nptcard .ph{position:absolute;inset:0;height:auto}'+
    '.nptcard .ph:after{background:linear-gradient(180deg,rgba(10,8,20,.25) 0%,rgba(10,8,20,.92) 70%)}'+
    '.nptcard .bd{position:relative;z-index:1;padding:9px 10px 10px}'+
    '.nptcard .tm{font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}'+
    '.nptcard .nm{font-size:14px;margin:1px 0}.nptcard .sb{font-size:11px}'+
    '.nptcard .go{margin-top:4px;padding:0;border:0;border-radius:0;font-size:11px;color:#ED93B1}'+
    '.npstrip{flex-wrap:nowrap;gap:6px;padding:7px 10px;border-radius:12px;font-size:12px}'+
    '.npstrip .wx{gap:5px;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.npstrip .wx span{overflow:hidden;text-overflow:ellipsis}'+
    '.npstrip .sos{flex:0 0 auto;gap:5px}.npstrip .sos a{font-size:11px;padding:3px 8px}'+
    '.npqa{gap:6px;margin-top:8px}'+
    '.npqa button{gap:4px;padding:8px 2px;border-radius:12px;font-size:11px}.npqa button svg{width:18px;height:18px}';
    document.head.appendChild(st);
  }

  function ic(d){return '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+d+'</svg>'}
  var I={
    table:ic('<path d="M4 10h16M6 10v9M18 10v9M8 6h8l2 4H6z"/>'),
    plane:ic('<path d="M3 20h18M4 14l16-4-1-3-6 1-5-5H6l2 6-4 1z"/>'),
    food:ic('<path d="M6 3v8a2 2 0 0 0 4 0V3M8 11v10M16 3c-2 2-2 6 0 8v10"/>'),
    island:ic('<path d="M3 20c3-2 6-2 9 0s6 2 9 0M12 18V8M12 8c-3-3-6-2-7 0M12 8c3-3 6-2 7 0M12 8c-1-3-3-4-5-4"/>'),
    sun:ic('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
    dots:ic('<circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/>'),
    chat:ic('<path d="M4 5h16v11H9l-5 4z"/>'),
    wallet:ic('<path d="M3 7h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3zM3 7l12-3v3M16 13h2"/>'),
    plus:ic('<path d="M12 5v14M5 12h14"/>')
  };

  /* ---------- open a venue the same way a tap on its card does ---------- */
  function openVenue(c){
    if(!c)return;
    /* open the venue's booking page directly (same screen as tapping a club card) */
    if(typeof openClub==="function"){try{if(typeof window.npTrack==="function")window.npTrack("place_view",c.id)}catch(e){}openClub(c);return}
    var card=document.querySelector('[data-id="'+(window.CSS&&CSS.escape?CSS.escape(c.id):c.id)+'"]');
    if(card){card.click();return}
    if(typeof window.openService==="function"&&SVC.indexOf(c.cat)>-1){window.openService(c.cat);return}
    scrollToClubs();
  }
  function scrollToClubs(){
    var h=[].slice.call(document.querySelectorAll("h2,h3")).find(function(x){return /clubs/i.test(x.textContent)&&!inPop(x)});
    if(h)h.scrollIntoView({behavior:"smooth",block:"start"});
  }
  function svc(cat){if(typeof window.openService==="function")window.openService(cat)}

  /* ---------- Tonight in Pattaya + Pattaya today + quick actions ---------- */
  var dayLabel="Tonight";
  function tonightCards(){
    var cl=list().filter(function(c){return c&&c.id!=="np-test-restaurant"});
    var night=cl.filter(isNight),food=cl.filter(function(c){return c.cat==="indian"});
    return night.slice(0,6).concat(food.slice(0,3));
  }
  function cardHtml(c,i){
    var bg=c.photo?'url(\''+esc(c.photo)+'\')':'linear-gradient(135deg,'+esc((c.art||[])[0]||"#534AB7")+','+esc((c.art||[])[1]||"#26215C")+')';
    var open=norm(c.open||"").split(/\s[—–-]\s|[–]/)[0].trim();if(!/\d/.test(open))open=open.split(/[—,]/)[0].trim();
    return '<button type="button" class="nptcard" data-npi="'+i+'"><div class="ph" style="background-image:'+bg+'"></div><div class="bd">'+
      '<div class="tm">'+esc(/\d/.test(open)?("From "+open):(open||"Open late"))+(c.area?" · "+esc(c.area):"")+'</div>'+
      '<div class="nm">'+esc(c.name)+'</div><div class="sb">'+esc(c.music||c.sub||"")+'</div>'+
      '<span class="go">'+(isNight(c)?"Book a table":"Book now")+'</span></div></button>';
  }
  /* taps on "Tonight in Pattaya": work even if another layer of the page lies on top of the cards */
  var lastCards=[];
  if(!document.getElementById("npTapCss")){var tc=document.createElement("style");tc.id="npTapCss";
    tc.textContent='#npHomeFill{position:relative;z-index:6}#npHomeFill .nptcard,#npHomeFill [data-qa],#npHomeFill .npall{position:relative;z-index:7;touch-action:pan-x pan-y}';document.head.appendChild(tc)}
  function tapTarget(e){
    var els=document.elementsFromPoint?document.elementsFromPoint(e.clientX,e.clientY):[e.target];
    for(var i=0;i<els.length;i++){var el=els[i];if(!el||!el.closest)continue;
      if(el.closest("#panel,.sheet,#npMoreSheet,#rajuChat"))return null;
      var hit=el.closest("#npHomeFill .nptcard,#npHomeFill [data-qa],#npHomeFill .npall");if(hit)return hit;
      if(el.closest("button,a,input,select,textarea,label"))return null;}
    return null;
  }
  document.addEventListener("click",function(e){
    if(e.clientX==null)return;var t=tapTarget(e);if(!t)return;
    e.preventDefault();e.stopPropagation();
    if(t.classList.contains("nptcard")){openVenue(lastCards[+t.dataset.npi]);return}
    if(t.classList.contains("npall")){scrollToClubs();return}
    var q=t.dataset.qa;if(q==="table")scrollToClubs();else svc(q);
    try{if(window.npTrack)window.npTrack("service_open","quick_"+q)}catch(x){}
  },true);
  function renderTonight(box){
    var cards=tonightCards(),row=box.querySelector(".nptrow"),h=box.querySelector(".nph h3");lastCards=cards;
    if(h)h.textContent=(dayLabel==="Tonight"?"Tonight":dayLabel)+" in Pattaya";
    if(!row)return;
    row.innerHTML=cards.length?cards.map(cardHtml).join(""):'<div class="sb" style="opacity:.7;padding:8px">Venues appear here as partners join.</div>';
    [].forEach.call(row.querySelectorAll(".nptcard"),function(b){b.onclick=function(){openVenue(cards[+b.dataset.npi])}});
  }
  var WX={0:"Clear",1:"Mostly clear",2:"Partly cloudy",3:"Cloudy",45:"Fog",48:"Fog",51:"Drizzle",53:"Drizzle",55:"Drizzle",61:"Light rain",63:"Rain",65:"Heavy rain",80:"Showers",81:"Showers",82:"Heavy showers",95:"Thunderstorm",96:"Thunderstorm",99:"Thunderstorm"};
  var wxText=null;
  function loadWeather(box){
    var el=box.querySelector(".wx span");if(!el)return;
    if(wxText){el.textContent=wxText;return}
    try{
      fetch("https://api.open-meteo.com/v1/forecast?latitude=12.93&longitude=100.88&current=temperature_2m,weather_code&daily=sunset&timezone=Asia%2FBangkok&forecast_days=1")
      .then(function(r){return r.json()}).then(function(d){
        var t=Math.round(d.current.temperature_2m),w=WX[d.current.weather_code]||"",ss=(d.daily&&d.daily.sunset&&d.daily.sunset[0]||"").slice(11,16);
        wxText=t+"°C"+(w?" "+w.toLowerCase():"")+(ss?" · Sunset "+ss:"");
        var e=document.querySelector("#npHomeFill .wx span");if(e)e.textContent=wxText;
      }).catch(function(){});
    }catch(e){}
  }
  function build(){
    var box=document.createElement("div");box.id="npHomeFill";
    box.innerHTML='<div class="nph"><h3>Tonight in Pattaya</h3><span class="npall" role="button" tabindex="0">See all</span></div><div class="nptrow"></div>'+
      '<div class="npstrip"><div class="wx">'+I.sun.replace(/22/g,"16")+'<span>Pattaya today</span></div>'+
      '<div class="sos"><a href="tel:1155">Police 1155</a><a href="tel:1669">SOS 1669</a></div></div>'+
      '<div class="npqa">'+
        '<button type="button" data-qa="table">'+I.table+'Table</button>'+
        '<button type="button" data-qa="airport">'+I.plane+'Pickup</button>'+
        '<button type="button" data-qa="indian">'+I.food+'Indian food</button>'+
        '<button type="button" data-qa="tours">'+I.island+'Island tour</button></div>';
    box.querySelector(".npall").onclick=scrollToClubs;
    [].forEach.call(box.querySelectorAll("[data-qa]"),function(b){b.onclick=function(){
      var q=b.dataset.qa;if(q==="table")scrollToClubs();else svc(q);
      try{if(window.npTrack)window.npTrack("service_open","quick_"+q)}catch(e){}
    }});
    return box;
  }
  function placeFill(){
    if(document.getElementById("npHomeFill"))return;
    var conv=smallest(/approx\.?\s*rate/i,null,400)||smallest(/(currency|converter)/i,null,400);
    if(!conv)return;
    var emp=smallest(/Empowered Girls/i,null,400);
    var anchor=conv;
    if(emp){var p=conv.parentElement;while(p&&!p.contains(emp))p=p.parentElement;
      if(p){anchor=conv;while(anchor.parentElement!==p)anchor=anchor.parentElement}}
    else{while(anchor.parentElement&&anchor.parentElement.tagName!=="SECTION")anchor=anchor.parentElement}
    var box=build();anchor.insertAdjacentElement("afterend",box);
    renderTonight(box);loadWeather(box);
  }
  /* date chips (Tonight, Wed 30, ...) change the heading */
  document.addEventListener("click",function(e){
    var el=e.target;if(!el||!el.closest||inPop(el))return;
    for(var i=0;i<4&&el;i++,el=el.parentElement){
      var t=norm(el.textContent);var m=t.match(/^(tonight|today|mon|tue|wed|thu|fri|sat|sun)[a-z]*\s*(\d{1,2})$/i);
      if(m){dayLabel=/tonight|today/i.test(m[1])?"Tonight":(m[1].charAt(0).toUpperCase()+m[1].slice(1,3).toLowerCase()+" "+m[2]);
        var b=document.getElementById("npHomeFill");if(b)renderTonight(b);return}
    }
  },true);

  /* ---------- club rows you can swipe ---------- */
  function swipeRows(){
    [].forEach.call(document.querySelectorAll("h2,h3"),function(h){
      if(!/clubs/i.test(h.textContent)||inPop(h)||h.closest("#npHomeFill"))return;
      var sc=h.parentElement,first=null;
      for(var n=h.nextElementSibling,k=0;n&&k<4&&!first;n=n.nextElementSibling,k++){if(/^H[1-3]$/.test(n.tagName))break;first=n.matches("[data-id]")?n:n.querySelector("[data-id]")}
      if(!first&&sc){var nx=sc.nextElementSibling;if(nx&&!nx.querySelector("h2"))first=nx.querySelector("[data-id]")}
      if(!first)return;
      var row=first.parentElement;
      if(row&&!row.classList.contains("npswipe")&&row.querySelectorAll(":scope>[data-id]").length>1)row.classList.add("npswipe");
    });
  }

  /* ---------- "from ₹7,800" becomes "Tables from ₹7,800" on nightlife cards ---------- */
  function priceLabels(){
    [].forEach.call(document.querySelectorAll("[data-id]"),function(card){
      if(card.dataset.npTbl)return;
      var c=list().find(function(x){return x.id===card.dataset.id});if(!isNight(c))return;
      var w=document.createTreeWalker(card,NodeFilter.SHOW_TEXT,null),n;
      while((n=w.nextNode())){if(/^\s*from\s*(?=[₹฿$\d])/i.test(n.nodeValue)||/^\s*from\s*$/i.test(n.nodeValue)&&n.parentElement&&/^\s*from\s*[₹฿]/i.test(n.parentElement.textContent)){
        n.nodeValue=n.nodeValue.replace(/^(\s*)from/i,"$1Tables from");card.dataset.npTbl="1";break}}
    });
  }

  /* ---------- bottom nav: 5 tabs + "More" (Concierge, Earn, For clubs stay, just moved) ---------- */
  var MORE=["Concierge","Earn","For clubs"],moreBtn=null,navInfo=null;
  function findNav(){
    var navs=[].slice.call(document.querySelectorAll("nav, [role=navigation]")).filter(function(n){var t=norm(n.textContent);return /Explore/.test(t)&&/Bookings/.test(t)});
    var nav=navs[0];if(!nav)return null;
    function item(label){var h=[].slice.call(nav.querySelectorAll("*")).filter(function(el){return norm(el.textContent)===label});h.sort(function(a,b){return a.querySelectorAll("*").length-b.querySelectorAll("*").length});return h[0]}
    var a=item("Explore"),b=item("Map");if(!a||!b)return null;
    var p=a.parentElement;while(p&&!p.contains(b))p=p.parentElement;if(!p)return null;
    function top(el){while(el&&el.parentElement!==p)el=el.parentElement;return el}
    var items={};[].forEach.call(p.children,function(ch){var t=norm(ch.textContent);if(t)items[t]=ch});
    return {nav:nav,row:p,items:items,top:top};
  }
  function setupNav(){
    if(moreBtn&&document.body.contains(moreBtn))return;
    var n=findNav();if(!n)return;
    var hidden=MORE.map(function(l){return n.items[l]}).filter(Boolean);if(hidden.length<2)return;
    var tpl=n.items["Boomer"]||n.items["Buddy"]||n.items["Map"];if(!tpl)return;
    moreBtn=tpl.cloneNode(true);
    moreBtn.removeAttribute("onclick");moreBtn.removeAttribute("id");moreBtn.removeAttribute("href");
    [].forEach.call(moreBtn.querySelectorAll("[onclick],[id]"),function(x){x.removeAttribute("onclick");x.removeAttribute("id")});
    Object.keys(moreBtn.dataset).forEach(function(k){delete moreBtn.dataset[k]});
    var tw=document.createTreeWalker(moreBtn,NodeFilter.SHOW_TEXT,null),tn,done=false,tns=[];
    while((tn=tw.nextNode()))if(tn.nodeValue.trim())tns.push(tn);
    tns.forEach(function(x){if(!done){x.nodeValue=x.nodeValue.replace(/\S[\s\S]*\S|\S/,"More");done=true}else x.nodeValue=""});
    if(!done)moreBtn.appendChild(document.createTextNode("More"));
    var sv=moreBtn.querySelector("svg,img,i");if(sv){var t=document.createElement("span");t.innerHTML=I.dots;var ns=t.firstChild;ns.setAttribute("width",sv.getAttribute("width")||"24");ns.setAttribute("height",sv.getAttribute("height")||"24");sv.replaceWith(ns)}
    moreBtn.id="npMoreTab";moreBtn.setAttribute("aria-label","More");
    moreBtn.addEventListener("click",function(e){e.preventDefault();e.stopPropagation();openMore(hidden)});
    var base=tpl.className;
    hidden.forEach(function(h){h.dataset.npBase=h.className;h.style.display="none";h.dataset.npMoved="more"});
    var last=hidden[hidden.length-1];last.insertAdjacentElement("afterend",moreBtn);
    base=base.split(/\s+/).filter(function(c){return !/^(on|active|sel|selected|current|cur)$/i.test(c)}).join(" ");
    moreBtn.className=base;
    var cs=getComputedStyle(n.row);if(cs.display==="grid")n.row.style.gridTemplateColumns="repeat("+[].filter.call(n.row.children,function(c){return c.style.display!=="none"}).length+",minmax(0,1fr))";
    navInfo={row:n.row,hidden:hidden,tpl:tpl};
    /* light up "More" when one of its tabs is the open page */
    new MutationObserver(function(){
      var extra=[];hidden.forEach(function(h){h.className.split(/\s+/).forEach(function(c){if(c&&h.dataset.npBase.split(/\s+/).indexOf(c)<0&&extra.indexOf(c)<0)extra.push(c)})});
      var want=extra.length?base+" "+extra.join(" "):base;
      if(moreBtn.className!==want)moreBtn.className=want;
    }).observe(n.row,{attributes:true,subtree:true,attributeFilter:["class"]});
  }
  function openMore(hidden){
    var old=document.getElementById("npMoreSheet");if(old)old.remove();
    var ico={"Concierge":I.chat,"Earn":I.wallet,"For clubs":I.plus};
    var sh=document.createElement("div");sh.id="npMoreSheet";
    sh.innerHTML='<div class="in" role="dialog" aria-label="More"><h4>More</h4>'+hidden.map(function(h,i){var t=norm(h.textContent);return '<button type="button" class="it" data-i="'+i+'">'+(ico[t]||I.dots)+esc(t)+'</button>'}).join("")+'<button type="button" class="x">Close</button></div>';
    sh.addEventListener("click",function(e){
      var it=e.target.closest(".it");
      if(it){sh.remove();var h=hidden[+it.dataset.i];var clk=h.matches("button,a,[onclick]")?h:(h.querySelector("button,a,[onclick]")||h);clk.click();return}
      if(e.target===sh||e.target.closest(".x"))sh.remove();
    });
    document.body.appendChild(sh);
  }

  /* ---------- smaller floating Raju above the nav bar + bottom space ---------- */
  function navGap(){
    var n=document.querySelector("#npMoreTab");var nav=n&&n.closest("nav,[role=navigation]");
    if(!nav){var f=findNav();nav=f&&f.nav}
    if(!nav)return 0;var r=nav.getBoundingClientRect();if(!r.height)return 0;return Math.max(0,window.innerHeight-r.top);
  }
  var fab=null;
  function findFab(){
    if(fab&&document.body.contains(fab))return fab;
    var W=window.innerWidth,H=window.innerHeight,best=null;
    [].forEach.call(document.querySelectorAll("body *"),function(el){
      if(el.closest("nav,[role=navigation],#panel,.sheet,#rajuChat,#npMoreSheet,#npHomeFill"))return;
      if(getComputedStyle(el).position!=="fixed")return;
      var r=el.getBoundingClientRect();
      if(r.width<40||r.width>260||r.height<40||r.height>260||r.right<W*0.6||r.bottom<H*0.5)return;
      if(!el.querySelector("img,svg,canvas,video")&&!/raju|help chahiye/i.test(el.textContent||""))return;
      if(el.querySelector("nav")||best)return;
      best=el;
    });
    var p=best;while(p&&p.parentElement&&p.parentElement!==document.body){if(getComputedStyle(p.parentElement).position==="fixed"){var pr=p.parentElement.getBoundingClientRect();if(pr.width<=260&&pr.height<=260)best=p.parentElement}p=p.parentElement}
    return fab=best;
  }
  function placeRaju(){
    var g=navGap();if(!g)return;
    var f=findFab();
    if(f){f.style.setProperty("scale","0.66");f.style.setProperty("transform-origin","100% 100%");
      f.style.setProperty("top","auto","important");f.style.setProperty("bottom",(g+10)+"px","important");f.style.setProperty("right","12px","important");f.dataset.npFab="1"}
    var pad=(g+28)+"px";
    document.body.style.paddingBottom=pad;
    [].forEach.call(document.querySelectorAll("main,section,#home,#explore,#night,#cats,.page,.screen,.view"),function(el){
      if(el.closest("#panel,.sheet,#rajuChat"))return;
      var cs=getComputedStyle(el);if(/(auto|scroll)/.test(cs.overflowY)&&el.clientHeight>window.innerHeight*0.6)el.style.paddingBottom=pad;
    });
  }

  /* ---------- readable text over the neon sign ---------- */
  function readable(){
    [/Pattaya made easy for Indian travellers/i,/^\s*Tonight\b.{8,}/i].forEach(function(re){
      var el=smallest(re,null,260);if(!el||el.closest("#npHomeFill")||el.dataset.npRead)return;
      var box=el;
      for(var i=0;i<3&&box.parentElement;i++){var cs=getComputedStyle(box);if(parseFloat(cs.borderTopWidth)>0||parseFloat(cs.borderTopLeftRadius)>=10)break;box=box.parentElement}
      if(box.tagName==="SECTION"||box===document.body)box=el;
      box.classList.add("npreadable");el.dataset.npRead="1";
    });
  }

  function closeGap(){
    var box=document.getElementById("npHomeFill");if(!box||!box.offsetParent)return;
    var conv=smallest(/approx\.?\s*rate/i,null,400)||smallest(/(currency|converter)/i,null,400);if(!conv)return;
    var row=conv;for(var i=0;i<6&&row.parentElement;i++){if(/Language/i.test(row.textContent)&&!row.contains(box))break;row=row.parentElement}
    if(row.contains(box))row=conv;
    var cur=parseFloat(box.style.marginTop)||0;
    var stuff=box.getBoundingClientRect().top-row.getBoundingClientRect().bottom-cur;
    var want=stuff>16?(16-stuff):14;
    if(Math.abs(want-cur)>1)box.style.marginTop=Math.round(want)+"px";
  }
  function run(){
    [placeFill,swipeRows,priceLabels,setupNav,placeRaju,readable,closeGap].forEach(function(f){try{f()}catch(e){}});
  }
  var busy=false;
  new MutationObserver(function(m){
    if(busy)return;
    if(m.every(function(x){return x.target&&x.target.closest&&x.target.closest("#npHomeFill,#npMoreSheet")}))return;
    busy=true;setTimeout(function(){busy=false;run()},250);
  }).observe(document.body,{childList:true,subtree:true});
  window.addEventListener("resize",function(){setTimeout(function(){placeRaju();closeGap()},100)});
  window.addEventListener("load",function(){setTimeout(closeGap,300)});
  run();setTimeout(run,800);setTimeout(run,2500);
})();

/* ===== Indian food services (29 Sep 2026):
   "Restaurants" is now "Indian Restaurants – Only Veg" (Shudh Shakahari)
   "Indian Restaurants" is now "Indian Restaurants – Veg & Non-Veg"
   10 food categories inside both. Nothing deleted: places not confirmed pure veg move to Veg & Non-Veg. ===== */
(function(){
  var VEG="restaurants",MIX="indian";
  var VEG_NAME="Indian Restaurants – Only Veg",MIX_NAME="Indian Restaurants – Veg & Non-Veg";
  /* Restaurant ids whose OWNER confirmed 100% pure veg (no meat, no fish, no egg). Add an id only after confirmation. */
  var VEG_IDS=[];
  var COMMON=[
    ["punjabi","Punjabi",/punjab|amritsar|kulcha|tandoor|north indian/i],
    ["gujarati","Gujarati",/gujarat|dhokla|thepla|khakhra/i],
    ["rajasthani","Rajasthani",/rajasthan|marwar|dal baati|baati/i],
    ["south","South Indian",/south indian|dosa|idli|madras|chettinad|kerala|udupi/i],
    ["maharashtrian","Maharashtrian",/maharash|mumbai|vada pav|pav bhaji|misal/i],
    ["bengali","Bengali",/bengal|kolkata|calcutta/i]
  ];
  var TAIL=[
    ["street","Street Food & Chaat",/street food|chaat|pani ?puri|golgappa/i],
    ["indochinese","Indo-Chinese",/indo.?chinese|hakka|manchurian/i],
    ["thali","Thali & Mithai",/thali|mithai|sweets|halwai/i]
  ];
  var CUIS={};
  CUIS[VEG]=COMMON.concat([["jain","Jain food",/\bjain\b/i]],TAIL);
  CUIS[MIX]=COMMON.concat([["mughlai","Mughlai",/mughlai|biryani|kebab|awadhi|hyderabad/i]],TAIL);
  var sel={};sel[VEG]="all";sel[MIX]="all";

  function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
  function list(){return (typeof CLUBS!=="undefined"&&CLUBS)||[]}
  function isVeg(c){return !!(c&&(c.veg===true||c.pureVeg===true||VEG_IDS.indexOf(c.id)>-1))}
  function catNow(){var s=history.state;if(s&&s.np==="s"&&s.cat)return s.cat;var h=location.hash;return h.indexOf("#s/")===0?decodeURIComponent(h.slice(3)):null}
  function rerender(){["renderGrid","renderRail","renderCats","renderMap"].forEach(function(f){try{if(typeof window[f]==="function")window[f]()}catch(e){}})}

  /* 1. new names in the app's data */
  function names(){
    try{
      if(typeof CATS!=="undefined")CATS.forEach(function(c){if(!Array.isArray(c))return;
        for(var i=1;i<c.length;i++){if(c[0]===VEG&&c[i]==="Restaurants")c[i]=VEG_NAME;if(c[0]===MIX&&/^Indian restaurants$/i.test(String(c[i])))c[i]=MIX_NAME}});
      if(typeof CATNAME!=="undefined"){CATNAME[VEG]=VEG_NAME;CATNAME[MIX]=MIX_NAME}
    }catch(e){}
  }
  /* 2. only confirmed pure-veg places stay in Only Veg; the rest move to Veg & Non-Veg */
  function move(){
    var n=0;list().forEach(function(c){if(c&&c.cat===VEG&&!isVeg(c)){c.cat=MIX;c.npMovedFromRestaurants=true;n++}});
    if(n)rerender();return n;
  }
  /* 3. new names on screen */
  var TXT={"Restaurants":VEG_NAME,"Indian Restaurants":MIX_NAME,"Indian restaurants":MIX_NAME};
  function fixText(){
    var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null),n,todo=[];
    while((n=w.nextNode())){var t=(n.nodeValue||"").trim();if(TXT[t])todo.push(n)}
    todo.forEach(function(n){var t=n.nodeValue.trim();n.nodeValue=n.nodeValue.replace(t,TXT[t])});
  }

  /* 4. the 10 food categories inside both services */
  if(!document.getElementById("npCuisCss")){
    var st=document.createElement("style");st.id="npCuisCss";
    st.textContent='#npCuis{margin:10px 0 14px}'+
      '#npCuis .vegnote{display:flex;gap:10px;align-items:flex-start;padding:10px 12px;margin:0 0 10px;border-radius:14px;font-size:13px;line-height:1.4;color:var(--ink,#fff);background:rgba(20,120,60,.18);border:1px solid rgba(60,200,110,.55)}'+
      '#npCuis .vegdot{flex:0 0 18px;height:18px;margin-top:1px;border:2px solid #2FBF62;border-radius:3px;display:flex;align-items:center;justify-content:center}'+
      '#npCuis .vegdot:after{content:"";width:8px;height:8px;border-radius:50%;background:#2FBF62}'+
      '#npCuis .row{display:flex;gap:8px;overflow-x:auto;padding:2px 2px 6px;scrollbar-width:none;-webkit-overflow-scrolling:touch}'+
      '#npCuis .row::-webkit-scrollbar{display:none}'+
      '#npCuis button{flex:0 0 auto;padding:9px 14px;border-radius:999px;font:inherit;font-size:13px;font-weight:600;white-space:nowrap;cursor:pointer;color:var(--ink,#fff);background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.18)}'+
      '#npCuis button.on{background:#E9B949;border-color:#E9B949;color:#1a1026}'+
      '#npCuisEmpty{margin:10px 0;padding:14px;border-radius:14px;font-size:14px;line-height:1.45;text-align:center;color:var(--ink,#fff);background:rgba(255,255,255,.05);border:1px dashed rgba(255,255,255,.25)}';
    document.head.appendChild(st);
  }
  function venueOf(card){
    var id=card.getAttribute&&(card.getAttribute("data-id")||card.getAttribute("data-club"));
    var L=list(),c=id?L.find(function(x){return x.id===id}):null;if(c)return c;
    var nm=card.querySelector&&card.querySelector(".name");
    if(nm){var t=nm.textContent.trim();c=L.find(function(x){return x.name===t});if(c)return c}
    var txt=card.textContent||"",best=null;
    L.forEach(function(x){if(x.name&&txt.indexOf(x.name)>-1&&(!best||x.name.length>best.name.length))best=x});
    return best;
  }
  function matches(c,key,re){
    if(!c)return false;
    if(c.cuisine===key||(Array.isArray(c.cuisine)&&c.cuisine.indexOf(key)>-1))return true;
    return re.test([c.name,c.sub,c.music,c.about,c.type,(c.tags||[]).join(" ")].join(" "));
  }
  function render(){
    var svc=document.getElementById("svcPage");if(!svc)return;
    var cat=catNow(),bar=svc.querySelector("#npCuis"),emp=svc.querySelector("#npCuisEmpty");
    if(svc.hidden||!CUIS[cat]){if(bar)bar.remove();if(emp)emp.remove();return}
    var grid=svc.querySelector("#svcGrid");
    if(!bar||bar.dataset.cat!==cat){
      if(bar)bar.remove();sel[cat]="all";
      bar=document.createElement("div");bar.id="npCuis";bar.dataset.cat=cat;
      bar.innerHTML=(cat===VEG?'<div class="vegnote"><span class="vegdot" aria-hidden="true"></span><span><b>Shudh Shakahari · 100% pure veg.</b> No meat, no fish, no egg. We list a restaurant here only after the owner confirms it.</span></div>':'')+
        '<div class="row" role="tablist"><button type="button" class="on" data-k="all">All</button>'+
        CUIS[cat].map(function(x){return '<button type="button" data-k="'+x[0]+'">'+esc(x[1])+'</button>'}).join("")+'</div>';
      if(grid&&grid.parentNode)grid.parentNode.insertBefore(bar,grid);
      else{var h=svc.querySelector("h2");if(h)h.insertAdjacentElement("afterend",bar);else svc.insertBefore(bar,svc.firstChild)}
      bar.querySelectorAll("[data-k]").forEach(function(b){b.onclick=function(){
        sel[cat]=b.dataset.k;bar.querySelectorAll("[data-k]").forEach(function(x){x.classList.toggle("on",x===b)});filter();
        try{if(typeof window.npTrack==="function")window.npTrack("food_category",cat+":"+b.dataset.k)}catch(e){}
      }});
    }
    filter();
  }
  function filter(){
    var svc=document.getElementById("svcPage");if(!svc)return;
    var cat=catNow();if(!CUIS[cat])return;
    var grid=svc.querySelector("#svcGrid"),k=sel[cat]||"all";
    var item=CUIS[cat].find(function(x){return x[0]===k}),shown=0;
    if(grid)[].forEach.call(grid.children,function(card){
      if(card.id==="npCuisEmpty")return;
      var c=venueOf(card);if(!c){if(card.offsetParent!==null)shown++;return}
      var ok=(cat!==VEG||isVeg(c))&&(k==="all"||matches(c,k,item[2]));
      var want=ok?"":"none";if(card.style.display!==want)card.style.display=want;
      if(ok)shown++;
    });
    var emp=svc.querySelector("#npCuisEmpty");
    var msg=shown?"":(k!=="all"?"No "+item[1]+" restaurants here yet. Coming soon.":
      (cat===VEG?"Pure-veg restaurants are joining soon. Own a pure-veg Indian restaurant? Register as a partner from your account.":"Indian restaurants are joining soon."));
    if(!msg){if(emp)emp.remove();return}
    if(!emp){emp=document.createElement("div");emp.id="npCuisEmpty";
      if(grid&&grid.parentNode)grid.insertAdjacentElement("afterend",emp);else svc.appendChild(emp)}
    if(emp.textContent!==msg)emp.textContent=msg;
  }

  /* 5. food type and food categories chosen by restaurant owners (restaurant dashboard) */
  var FOODROWS=[];
  function applyFood(){
    var n=0;FOODROWS.forEach(function(r){
      var c=list().find(function(x){return x.id===r.venue_id});
      if(!c||(c.cat!==VEG&&c.cat!==MIX))return;
      if(Array.isArray(r.cuisines)&&r.cuisines.length)c.cuisine=r.cuisines;
      c.foodType=r.food_type;
      var want=r.food_type==="veg"?VEG:MIX;c.veg=r.food_type==="veg";
      if(c.cat!==want){c.cat=want;n++}
    });
    if(n)rerender();
  }
  function loadFood(){
    try{if(!window.supabase)return;
      var cl=window.supabase.createClient("https://mymtgbmcjbwsnetzwgoy.supabase.co","sb_publishable_ViFodxG8kAENr78Fyp-BwQ_iA_BfAD0");
      cl.rpc("np_venue_food").then(function(r){if(r&&!r.error&&Array.isArray(r.data)){FOODROWS=r.data;applyFood();render()}},function(){});
    }catch(e){}
  }
  loadFood();

  function all(){names();applyFood();move();fixText();render()}
  all();window.addEventListener("load",all);setTimeout(all,1500);setTimeout(all,4000);
  var busy=false;
  new MutationObserver(function(){if(busy)return;busy=true;requestAnimationFrame(function(){busy=false;fixText();render()})})
    .observe(document.body,{childList:true,subtree:true});
  window.addEventListener("hashchange",function(){setTimeout(render,50)});
  window.addEventListener("popstate",function(){setTimeout(render,50)});
})();

/* ===== Partner sign-up: restaurants choose Pure Veg / Non-Veg / Veg & Non-Veg and the food they serve ===== */
(function(){
  if(typeof panel==="undefined")return;
  var TYPES=[["veg","🟢 Pure Veg (Shudh Shakahari)"],["nonveg","🔴 Non-Veg"],["both","🟢🔴 Veg & Non-Veg"]];
  var FOODS=[["punjabi","Punjabi"],["gujarati","Gujarati"],["rajasthani","Rajasthani"],["south","South Indian"],["maharashtrian","Maharashtrian"],["bengali","Bengali"],["jain","Jain food"],["mughlai","Mughlai"],["street","Street Food & Chaat"],["indochinese","Indo-Chinese"],["thali","Thali & Mithai"]];
  function isRest(v){return /restaurant|food|cafe/i.test(String(v||""))}
  if(!document.getElementById("npFoodCss")){
    var st=document.createElement("style");st.id="npFoodCss";
    st.textContent='#npFoodWrap{grid-column:1/-1;margin-top:6px}#npFoodWrap .fl{display:block;font-size:13px;font-weight:600;margin:10px 0 6px}'+
      '#npFoodWrap .opts{display:flex;flex-wrap:wrap;gap:8px}'+
      '#npFoodWrap .opt{display:inline-flex;align-items:center;gap:6px;padding:8px 12px;border-radius:999px;font-size:13px;cursor:pointer;color:var(--ink,#fff);background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.2)}'+
      '#npFoodWrap .opt input{width:18px;height:18px;margin:0;flex:0 0 auto}'+
      '#npFoodWrap .opt:has(input:checked){border-color:#E9B949;background:rgba(233,185,73,.16)}'+
      '#npFoodWrap .vegok{display:none;gap:8px;align-items:flex-start;margin-top:10px;font-size:13px;padding:10px 12px;border-radius:12px;background:rgba(20,120,60,.18);border:1px solid rgba(60,200,110,.55)}'+
      '#npFoodWrap .vegok input{width:20px;height:20px;margin:0;flex:0 0 auto}#npFoodWrap.isveg .vegok{display:flex}';
    document.head.appendChild(st);
  }
  function build(){
    [["#ppT","#ppGo","#ppM"],["#pvT","#pvGo","#pvM"]].forEach(function(ids){
      var t=panel.querySelector(ids[0]),go=panel.querySelector(ids[1]);
      if(!t||!go||panel.querySelector("#npFoodWrap"))return;
      window.npFood=null;
      var w=document.createElement("div");w.id="npFoodWrap";w.className="full";
      w.innerHTML='<span class="fl">Food type (choose one)</span><div class="opts">'+
        TYPES.map(function(x){return '<label class="opt"><input type="radio" name="npFT" value="'+x[0]+'"> '+x[1]+'</label>'}).join("")+'</div>'+
        '<label class="vegok"><input type="checkbox" id="npVegOk"> I confirm we serve 100% pure veg food: no meat, no fish, no egg.</label>'+
        '<span class="fl">Food you serve (choose one or more)</span><div class="opts">'+
        FOODS.map(function(x){return '<label class="opt"><input type="checkbox" class="npCu" value="'+x[0]+'"> '+x[1]+'</label>'}).join("")+'</div>';
      var anchor=panel.querySelector("#npVPhotoWrap")||t.closest("label")||t;
      anchor.insertAdjacentElement("afterend",w);
      function show(){w.style.display=isRest(t.value)?"":"none"}
      t.addEventListener("change",show);show();
      w.querySelectorAll('input[name="npFT"]').forEach(function(r){r.onchange=function(){w.classList.toggle("isveg",r.value==="veg"&&r.checked)}});
    });
  }
  panel.addEventListener("click",function(e){
    var go=e.target.closest&&e.target.closest("#ppGo,#pvGo");if(!go)return;
    var w=panel.querySelector("#npFoodWrap"),t=panel.querySelector("#ppT")||panel.querySelector("#pvT");
    if(!w||!t||!isRest(t.value)){window.npFood=null;return}
    var M=panel.querySelector("#ppM")||panel.querySelector("#pvM");
    function stop(msg){e.preventDefault();e.stopImmediatePropagation();if(M){M.style.color="";M.textContent=msg}}
    var ft=(w.querySelector('input[name="npFT"]:checked')||{}).value;
    var cu=[].map.call(w.querySelectorAll(".npCu:checked"),function(x){return x.value});
    if(!ft)return stop("Choose your food type: Pure Veg, Non-Veg or Veg & Non-Veg.");
    if(ft==="veg"&&!w.querySelector("#npVegOk").checked)return stop("Please tick the box to confirm 100% pure veg.");
    if(!cu.length)return stop("Choose at least one type of food you serve (Punjabi, Gujarati…).");
    window.npFood={food_type:ft,cuisines:cu};
  },true);
  var busy=false;
  new MutationObserver(function(){if(busy)return;busy=true;requestAnimationFrame(function(){busy=false;build()})}).observe(panel,{childList:true,subtree:true});
  build();
})();

/* ===== Boomer (REAL, 29 Sep 2026): one meeting feature for the whole app.
   Real profiles on Supabase, selfie check for women (admin approves), search, messages,
   block & report. The Empowered Girls lounge shows the same people (verified women only).
   Old demo screens (sample profiles saved only on one phone) are hidden, not deleted. ===== */
(function(){
  if(!window.supabase||typeof panel==="undefined")return;
  var sb=window.supabase.createClient("https://mymtgbmcjbwsnetzwgoy.supabase.co","sb_publishable_ViFodxG8kAENr78Fyp-BwQ_iA_BfAD0");
  var BAD=/(money|cash|\bpay\b|\bpaid\b|payment|price|\brate\b|baht|฿|\btip\b|short ?time|long ?time|happy ending|escort|\bsex|sponsor|sugar ?daddy)/i;
  var INT=[["party","Club night"],["food","Food & dinner"],["beach","Beach & sea"],["sight","Sightseeing"],["sports","Sports"],["shop","Shopping"],["coffee","Coffee & chat"]];
  var WHEN=["Now","Tonight","Tomorrow","This weekend","Any day"];
  var user=null,mine=null,loaded=false,setupErr="",people=[],blocks=[],adminOK=false;
  var q={main:"",lounge:""},show="all",chatWith=null,chan=null,unread={},editing=false;
  function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
  function X(){return typeof ico==="function"?ico("close"):"×"}
  function intName(k){var x=INT.find(function(i){return i[0]===k});return x?x[1]:""}
  function isWoman(p){return p&&p.gender==="woman"}
  function womanOK(){return adminOK||(mine&&mine.gender==="woman"&&mine.verify_status==="verified")}
  function shrink(file,max,cb){var img=new Image(),url=URL.createObjectURL(file);
    img.onload=function(){var k=Math.min(1,max/Math.max(img.width,img.height)),cv=document.createElement("canvas");cv.width=Math.round(img.width*k);cv.height=Math.round(img.height*k);
      cv.getContext("2d").drawImage(img,0,0,cv.width,cv.height);URL.revokeObjectURL(url);cv.toBlob(function(b){cb(b)},"image/jpeg",0.82)};
    img.onerror=function(){URL.revokeObjectURL(url);cb(null)};img.src=url}
  function sheetOpen(html){panel.innerHTML=html;sheet.classList.add("open");document.body.style.overflow="hidden";panel.scrollTop=0}
  function head(t,id){return '<div style="display:flex;justify-content:space-between;align-items:center;gap:10px"><h2 id="sheetTitle" style="font-size:20px">'+t+'</h2><button class="theme" id="'+id+'" aria-label="Close">'+X()+'</button></div>'}

  if(!document.getElementById("npMeetCss")){
    var st=document.createElement("style");st.id="npMeetCss";
    st.textContent='#npMeet{margin:12px 0 24px}.npm-card{border-radius:18px;padding:14px;margin:0 0 12px;background:rgba(16,13,28,.62);border:1px solid rgba(255,255,255,.12);color:var(--ink,#fff)}'+
      '.npm-card.hl{border-color:rgba(199,160,255,.45);box-shadow:0 0 16px rgba(170,110,255,.14)}'+
      '.npm-row{display:flex;gap:12px;align-items:center}.npm-av{flex:0 0 56px;height:56px;border-radius:50%;background:linear-gradient(145deg,#8B5CFF,#ED93B1) center/cover;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:22px;color:#fff}'+
      '.npm-who{flex:1;min-width:0}.npm-who b{display:block;font-size:16px}.npm-who small{display:block;opacity:.75;font-size:13px}'+
      '.npm-bdg{display:inline-block;font-size:11px;font-weight:700;border-radius:999px;padding:2px 8px;margin:4px 4px 0 0}.npm-bdg.ver{background:rgba(47,191,98,.2);color:#7BE3A0;border:1px solid rgba(47,191,98,.5)}.npm-bdg.nov{background:rgba(255,255,255,.08);color:#ccc}.npm-bdg.pen{background:rgba(233,185,73,.18);color:#E9B949}'+
      '.npm-plan{margin:10px 0 0;font-size:14px;line-height:1.4}.npm-acts{display:flex;gap:8px;margin-top:12px;flex-wrap:wrap}'+
      '.npm-btn{border-radius:999px;padding:9px 16px;font:inherit;font-size:14px;font-weight:600;cursor:pointer;color:var(--ink,#fff);background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.2)}.npm-btn.pri{background:#E9B949;border-color:#E9B949;color:#1a1026}'+
      '.npm-search{display:flex;gap:8px;margin:0 0 12px}.npm-search input{flex:1;min-width:0;padding:12px 14px;border-radius:14px;font:inherit;font-size:15px;color:var(--ink,#fff);background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.2)}'+
      '.npm-search select{padding:10px;border-radius:14px;font:inherit;color:var(--ink,#fff);background:rgba(20,16,34,.95);border:1px solid rgba(255,255,255,.2)}'+
      '.npm-empty{text-align:center;padding:18px;opacity:.8;font-size:14px}.npm-msgs{display:flex;flex-direction:column;gap:8px;margin:14px 0;max-height:52vh;overflow-y:auto}'+
      '.npm-m{max-width:80%;padding:9px 12px;border-radius:14px;font-size:14px;line-height:1.35;background:rgba(255,255,255,.08);align-self:flex-start;word-wrap:break-word}.npm-m.me{align-self:flex-end;background:rgba(233,185,73,.22)}'+
      '.npm-unread{display:inline-block;min-width:20px;padding:0 6px;border-radius:10px;background:#ED93B1;color:#1a1026;font-size:12px;font-weight:700;text-align:center;margin-left:6px}'+
      '#npMeet .fields label,#npmSheet .fields label{display:block}.npm-chk{display:flex;gap:8px;align-items:flex-start;margin-top:10px;font-size:14px}.npm-chk input{width:20px;height:20px;flex:0 0 auto;margin-top:1px}'+
      '.npm-deck{margin:0 0 14px}.npm-photo{position:relative;height:430px;max-height:62vh;border-radius:24px;overflow:hidden;background:#1a1224 center/cover no-repeat;border:1px solid rgba(255,255,255,.14);transition:transform .3s ease,opacity .3s ease;touch-action:pan-y}'+
      '.npm-photo.go-right{transform:translateX(120%) rotate(18deg);opacity:0}.npm-photo.go-left{transform:translateX(-120%) rotate(-18deg);opacity:0}'+
      '.npm-big{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:110px;font-weight:800;color:rgba(255,255,255,.85)}'+
      '.npm-over{position:absolute;left:0;right:0;bottom:0;padding:70px 18px 42px;background:linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,.82));color:#fff}.npm-over b{display:block;font-size:26px}.npm-over small{display:block;font-size:14px;opacity:.9;margin-top:2px}'+
      '.npm-stamp{position:absolute;top:26px;padding:6px 14px;border-radius:10px;font-size:26px;font-weight:800;letter-spacing:2px;opacity:0;transition:opacity .15s;border:3px solid}.npm-stamp.like{left:20px;color:#5DCAA5;border-color:#5DCAA5;transform:rotate(-14deg)}.npm-stamp.nope{right:20px;color:#F09595;border-color:#F09595;transform:rotate(14deg)}'+
      '.npm-photo.show-like .like,.npm-photo.show-nope .nope{opacity:1}'+
      '.npm-dbtns{display:flex;justify-content:center;gap:22px;margin-top:-30px;position:relative;z-index:2}.npm-round{width:62px;height:62px;border-radius:50%;font-size:26px;display:flex;align-items:center;justify-content:center;cursor:pointer;background:#16122a;border:2px solid rgba(255,255,255,.2);color:#fff;box-shadow:0 6px 18px rgba(0,0,0,.45)}'+
      '.npm-round i{font-style:normal}.npm-round.no{color:#F09595;border-color:rgba(240,149,149,.7)}.npm-round.yes{color:#ED93B1;border-color:rgba(237,147,177,.8)}.npm-round.hi{width:52px;height:52px;font-size:20px;align-self:center}'+
      '.npm-count{text-align:center;font-size:13px;opacity:.8;margin:10px 0 0}.npm-teaser .npm-photo{height:220px}';
    document.head.appendChild(st);
  }

  /* ---------- data ---------- */
  async function loadMe(){
    if(!user){mine=null;loaded=true;return}
    var r=await sb.from("np_meet_profiles").select("*").eq("user_id",user.id).maybeSingle();
    setupErr=r.error?(/relation|does not exist|schema/i.test(r.error.message)?"setup":r.error.message):"";
    mine=r.data||null;loaded=true;
  }
  async function loadPeople(){
    if(!user||(!mine&&!adminOK)){people=[];return}
    var r=await sb.from("np_meet_profiles").select("user_id,name,age,gender,city,languages,intent,when_txt,plan,photo_url,verify_status,updated_at")
      .eq("active",true).neq("user_id",user.id).order("updated_at",{ascending:false}).limit(400);
    people=(r.data||[]).filter(function(p){return !isWoman(p)||p.verify_status==="verified"});
    var b=await sb.from("np_meet_blocks").select("blocked").eq("blocker",user.id);blocks=(b.data||[]).map(function(x){return x.blocked});
    await loadLikes();
  }
  async function checkAdmin(){try{var r=await sb.rpc("np_is_admin");adminOK=!r.error&&r.data===true}catch(e){adminOK=false}}
  async function refresh(){await loadMe();await loadPeople();paintAll()}

  /* ---------- cards ---------- */
  function badge(p){return p.verify_status==="verified"?'<span class="npm-bdg ver">✓ Verified</span>':(p.verify_status==="pending"?'<span class="npm-bdg pen">Check pending</span>':'<span class="npm-bdg nov">Not verified</span>')}
  function av(p){return p.photo_url?'<span class="npm-av" style="background-image:url(\''+esc(p.photo_url)+'\')"></span>':'<span class="npm-av">'+esc((p.name||"?").charAt(0).toUpperCase())+'</span>'}
  function personCard(p){
    var bits=[p.age,p.city].filter(Boolean).join(" · ");
    return '<div class="npm-card"><div class="npm-row">'+av(p)+'<div class="npm-who"><b>'+esc(p.name)+'</b><small>'+esc(bits)+(p.languages?' · '+esc(p.languages):'')+'</small>'+badge(p)+'</div></div>'+
      ((p.intent||p.when_txt)?'<p class="npm-plan"><b>'+esc(intName(p.intent))+'</b>'+(p.when_txt?' · '+esc(p.when_txt):'')+'</p>':'')+
      (p.plan?'<p class="npm-plan" style="margin-top:4px;opacity:.9">'+esc(p.plan)+'</p>':'')+
      '<div class="npm-acts"><button class="npm-btn pri" data-hi="'+p.user_id+'">Say hi'+(unread[p.user_id]?'<span class="npm-unread">'+unread[p.user_id]+'</span>':'')+'</button><button class="npm-btn" data-more="'+p.user_id+'">Report or block</button></div></div>';
  }
  function match(p,txt){if(!txt)return true;txt=txt.toLowerCase();
    return [p.name,p.city,p.languages,p.plan,intName(p.intent),p.when_txt].join(" ").toLowerCase().indexOf(txt)>-1}

  /* ---------- main screen (Buddy / Boomer) ---------- */
  function mount(){
    var s=document.getElementById("buddy");if(!s)return null;
    ["buddyGate","buddyMain","lob"].forEach(function(id){var e=document.getElementById(id);if(e)e.style.setProperty("display","none","important")});
    s.querySelectorAll(".howto").forEach(function(e){e.style.setProperty("display","none","important")});
    var t=s.querySelector(".sectiontitle");if(t&&t.textContent!=="Boomer")t.textContent="Boomer";
    var root=document.getElementById("npMeet");
    if(!root){root=document.createElement("div");root.id="npMeet";
      if(t)t.insertAdjacentElement("afterend",root);else s.appendChild(root)}
    var pp=document.getElementById("npPurpose");
    if(pp&&root.nextElementSibling!==pp)root.insertAdjacentElement("afterend",pp);   /* rules box goes below the people */
    var fb=document.getElementById("npFindBtn");if(fb)fb.remove();                     /* Friends Location & Bill Splitter lives in All services */
    return root;
  }
  function paintMain(){
    var root=mount();if(!root)return;
    if(!user){root.innerHTML='<div class="npm-deck npm-teaser"><div class="npm-photo" style="background:linear-gradient(160deg,#534AB7,#D4537E)"><div class="npm-over"><b>Travellers are going out tonight</b><small>Club nights, dinners, beach days, sightseeing</small></div></div></div>'+
      '<div class="npm-card hl"><b>Sign in to meet people</b><p class="npm-plan">See real travellers, like profiles and say hi. Free, 18+, public places only.</p><div class="npm-acts"><button class="npm-btn pri" id="npmIn">Sign in</button><button class="npm-btn" id="npmUp">Sign up free</button></div></div>';
      function openAcc(up){var b=document.querySelector(".np-hbtn.user")||document.getElementById("acctBtn");if(b)b.click();
        if(up)setTimeout(function(){var t=[].find.call(panel.querySelectorAll("button,a"),function(x){return /create account|sign up/i.test(x.textContent)&&!/free/i.test(x.textContent)});if(t)t.click()},250)}
      root.querySelector("#npmIn").onclick=function(){openAcc(false)};root.querySelector("#npmUp").onclick=function(){openAcc(true)};return}
    if(!loaded){root.innerHTML='<p class="npm-empty">Loading…</p>';return}
    if(setupErr==="setup"){root.innerHTML='<div class="npm-card"><b>Almost ready</b><p class="npm-plan">Boomer is being set up. Please check back soon.</p></div>';return}
    if(adminOK&&!mine&&!editing){
      root.innerHTML='<div class="npm-card hl"><b>Admin view</b><p class="npm-plan">You see Boomer exactly like the members do, including women-only areas. To say hi to someone, create your own profile first.</p><div class="npm-acts"><button class="npm-btn pri" id="npmAdmin">Verify women & reports</button><button class="npm-btn" id="npmMake">Create my profile</button></div></div>'+
        '<div class="npm-search"><input id="npmQ" type="search" placeholder="Search name, city, language, plan…" value="'+esc(q.main)+'" aria-label="Search people"><select id="npmShow" aria-label="Show"><option value="all">Everyone</option><option value="woman">Women</option><option value="man">Men</option></select></div><div id="npmList"></div>';
      root.querySelector("#npmShow").value=show;
      root.querySelector("#npmQ").oninput=function(){q.main=this.value;list(root.querySelector("#npmList"),q.main,show)};
      root.querySelector("#npmShow").onchange=function(){show=this.value;list(root.querySelector("#npmList"),q.main,show);deck(root.querySelector("#npmDeck"))};
      root.querySelector("#npmAdmin").onclick=openAdmin;root.querySelector("#npmMake").onclick=function(){editing=true;paintMain()};
      root.insertAdjacentHTML("afterbegin",'<div id="npmDeck"></div>');deck(root.querySelector("#npmDeck"));
      list(root.querySelector("#npmList"),q.main,show);return}
    if(!mine||editing){root.innerHTML=formHTML();wireForm(root);return}
    var h=myCard()+(adminOK?'<div class="npm-card"><b>Admin</b><div class="npm-acts"><button class="npm-btn pri" id="npmAdmin">Verify women & reports</button></div></div>':'')+
      '<div class="npm-search"><input id="npmQ" type="search" placeholder="Search name, city, language, plan…" value="'+esc(q.main)+'" aria-label="Search people">'+
      '<select id="npmShow" aria-label="Show"><option value="all">Everyone</option><option value="woman">Women</option><option value="man">Men</option></select></div><div id="npmList"></div>';
    root.innerHTML='<div id="npmDeck"></div>'+h;deck(root.querySelector("#npmDeck"));
    root.querySelector("#npmShow").value=show;
    root.querySelector("#npmQ").oninput=function(){q.main=this.value;list(root.querySelector("#npmList"),q.main,show)};
    root.querySelector("#npmShow").onchange=function(){show=this.value;list(root.querySelector("#npmList"),q.main,show);deck(root.querySelector("#npmDeck"))};
    wireMine(root);if(root.querySelector("#npmAdmin"))root.querySelector("#npmAdmin").onclick=openAdmin;
    list(root.querySelector("#npmList"),q.main,show);
  }
  function myCard(){
    var s=mine.verify_status,msg="";
    if(isWoman(mine)){
      msg=s==="verified"?'You are verified. Other people can see you.':
        s==="pending"?'Selfie sent. We are checking it and you will get the Verified badge soon. Until then, other people cannot see your profile.':
        s==="rejected"?'Your selfie was not approved. Please send a clear new selfie.':'Women need a quick selfie check before others can see them. It keeps everyone safe.';
    }else msg=s==="verified"?'You are verified.':s==="pending"?'Selfie sent. We are checking it.':'Optional: verify with a selfie to get the Verified badge.';
    var tot=Object.keys(unread).reduce(function(a,k){return a+unread[k]},0);
    return '<div class="npm-card hl"><div class="npm-row">'+av(mine)+'<div class="npm-who"><b>'+esc(mine.name)+' (you)</b><small>'+esc(intName(mine.intent))+(mine.when_txt?' · '+esc(mine.when_txt):'')+'</small>'+badge(mine)+'</div></div>'+
      '<p class="npm-plan">'+esc(msg)+'</p><div class="npm-acts">'+
      ((s==="none"||s==="rejected")?'<button class="npm-btn pri" id="npmSelfie">Verify with a selfie</button>':'')+
      '<button class="npm-btn" id="npmInbox">Messages'+(tot?'<span class="npm-unread">'+tot+'</span>':'')+'</button><button class="npm-btn" id="npmEdit">Edit profile</button></div></div>';
  }
  function wireMine(root){
    if(root.querySelector("#npmSelfie"))root.querySelector("#npmSelfie").onclick=openSelfie;
    if(root.querySelector("#npmInbox"))root.querySelector("#npmInbox").onclick=openInbox;
    if(root.querySelector("#npmEdit"))root.querySelector("#npmEdit").onclick=function(){editing=true;paintMain()};
  }
  function list(el,txt,sh,womenOnly){
    if(!el)return;
    var l=people.filter(function(p){return blocks.indexOf(p.user_id)<0&&(womenOnly?isWoman(p):(sh==="all"||p.gender===sh))&&match(p,txt)});
    el.innerHTML=l.length?l.map(personCard).join(""):'<p class="npm-empty">'+(txt?'Nobody found for "'+esc(txt)+'".':(womenOnly?'No verified women here yet. Invite your friends!':'No one here yet. Be the first, and invite your friends!'))+'</p>';
    el.querySelectorAll("[data-hi]").forEach(function(b){b.onclick=function(){var p=people.find(function(x){return x.user_id===b.dataset.hi});if(p)openChat(p)}});
    el.querySelectorAll("[data-more]").forEach(function(b){b.onclick=function(){var p=people.find(function(x){return x.user_id===b.dataset.more});if(p)openMore(p)}});
  }

  /* ---------- like / skip cards (top of the page) ---------- */
  var LIKED={},LIKEDME=0;
  function skipped(){try{return JSON.parse(localStorage.getItem("np_meet_skip")||"{}")}catch(e){return {}}}
  function skip(id){var k=skipped();k[id]=Date.now();try{localStorage.setItem("np_meet_skip",JSON.stringify(k))}catch(e){}}
  async function loadLikes(){LIKED={};LIKEDME=0;if(!user)return;
    try{var r=await sb.from("np_meet_likes").select("liker,liked").or("liker.eq."+user.id+",liked.eq."+user.id);
      (r.data||[]).forEach(function(x){if(x.liker===user.id)LIKED[x.liked]=1;else LIKEDME++})}catch(e){}}
  function queue(){var k=skipped(),week=Date.now()-7*864e5;
    return people.filter(function(p){return blocks.indexOf(p.user_id)<0&&!LIKED[p.user_id]&&!(k[p.user_id]>week)&&(show==="all"||p.gender===show)})}
  /* free members: 10 profiles a day, then the Namaste Gold offer */
  var FREE=10;
  function isPrem(){try{return (typeof isPremium==="function"&&!!isPremium())||(typeof isVIP==="function"&&!!isVIP())}catch(e){return false}}
  function today(){var d=new Date();return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()}
  function seenN(){try{var o=JSON.parse(localStorage.getItem("np_meet_seen")||"{}");return o.d===today()?o.n:0}catch(e){return 0}}
  function addSeen(){try{localStorage.setItem("np_meet_seen",JSON.stringify({d:today(),n:seenN()+1}))}catch(e){}}
  function goldOffer(box){
    box.innerHTML='<div class="npm-deck"><div class="npm-photo" style="background:linear-gradient(160deg,#412402,#BA7517 55%,#FAC775)"><span class="npm-big" style="font-size:80px">👑</span>'+
      '<div class="npm-over"><b>You have seen your '+FREE+' free profiles today</b><small>Come back tomorrow for '+FREE+' more, or go unlimited now.</small></div></div>'+
      '<div class="npm-card" style="margin-top:12px;border-color:rgba(239,159,39,.6)"><b>Namaste Gold</b><p class="npm-plan">✓ Unlimited profiles, likes and swipes<br>✓ Your profile shown first<br>✓ See who liked you<br>✓ All Gold perks in the app</p>'+
      '<div class="npm-acts"><button class="npm-btn pri" id="npmGold">Become a Gold member</button></div></div></div>';
    box.querySelector("#npmGold").onclick=function(){var b=document.getElementById("premBtn");if(b)b.click();else if(typeof openVipBuddy==="function")openVipBuddy()};
  }
  function deck(box){
    if(!box)return;
    if(!adminOK&&!isPrem()&&seenN()>=FREE){goldOffer(box);return}
    var qd=queue(),p=qd[0];
    if(!p&&!people.length){var link="https://namastepattayareservationsindthai.vercel.app/";
      box.innerHTML='<div class="npm-deck"><div class="npm-photo npm-empty-card" style="height:240px;background:linear-gradient(160deg,#534AB7,#D4537E)"><span class="npm-big" style="font-size:70px">🎉</span>'+
        '<div class="npm-over"><b>You are one of the first!</b><small>Boomer just started. Invite your friends so you can meet in Pattaya.</small></div></div>'+
        '<div class="npm-acts" style="justify-content:center;margin-top:12px"><button class="npm-btn pri" id="npmInv">Invite friends on WhatsApp</button></div></div>';
      box.querySelector("#npmInv").onclick=function(){window.open("https://wa.me/?text="+encodeURIComponent("Going to Pattaya? Join me on Namaste Pattaya to meet travellers, book clubs and Indian food: "+link),"_blank")};return}
    if(!p){box.innerHTML='<div class="npm-card"><b>You have seen everyone for now</b><p class="npm-plan">New travellers join every day. Check again later, or search the full list below.</p>'+(Object.keys(skipped()).length?'<div class="npm-acts"><button class="npm-btn" id="npmReset">Show skipped people again</button></div>':'')+'</div>';
      var rs=box.querySelector("#npmReset");if(rs)rs.onclick=function(){try{localStorage.removeItem("np_meet_skip")}catch(e){}deck(box)};return}
    var bits=[p.age,p.city].filter(Boolean).join(" · ");
    box.innerHTML='<div class="npm-deck"><div class="npm-photo" id="npmCard" style="'+(p.photo_url?"background-image:url('"+esc(p.photo_url)+"')":"background:linear-gradient(160deg,#534AB7,#D4537E)")+'">'+
      (p.photo_url?'':'<span class="npm-big">'+esc((p.name||"?").charAt(0).toUpperCase())+'</span>')+
      '<span class="npm-stamp like">LIKE</span><span class="npm-stamp nope">SKIP</span>'+
      '<div class="npm-over"><b>'+esc(p.name)+(p.age?', '+esc(p.age):'')+'</b><small>'+esc(p.city||"")+(p.languages?' · '+esc(p.languages):'')+'</small>'+badge(p)+
      ((p.intent||p.when_txt)?'<small style="margin-top:6px"><b style="font-size:14px;display:inline">'+esc(intName(p.intent))+'</b>'+(p.when_txt?' · '+esc(p.when_txt):'')+'</small>':'')+(p.plan?'<small>'+esc(p.plan)+'</small>':'')+'</div></div>'+
      '<div class="npm-dbtns"><button class="npm-round no" id="npmNo" aria-label="Skip"><i>✕</i></button><button class="npm-round hi" id="npmHi" aria-label="Say hi">💬</button><button class="npm-round yes" id="npmYes" aria-label="Like"><i>♥</i></button></div>'+
      '<p class="npm-count">'+qd.length+' '+(qd.length===1?"person":"people")+' to see'+(LIKEDME?' · 💗 '+LIKEDME+' liked you':'')+(!adminOK&&!isPrem()?' · '+Math.max(0,FREE-seenN())+' free left today':'')+'</p></div>';
    var card=box.querySelector("#npmCard");
    async function act(like){
      addSeen();
      card.classList.add(like?"go-right":"go-left");
      if(like){
        if(!mine){setTimeout(function(){alert("Create your Boomer profile first, then you can like people.");editing=true;paintMain()},250);return}
        LIKED[p.user_id]=1;
        var r=await sb.from("np_meet_likes").insert({liked:p.user_id});
        if(!r.error){var m=await sb.from("np_meet_likes").select("liker").eq("liker",p.user_id).eq("liked",user.id).maybeSingle();
          if(m.data){setTimeout(function(){matchBox(p)},320)}}
      }else skip(p.user_id);
      setTimeout(function(){deck(box)},300);
    }
    box.querySelector("#npmNo").onclick=function(){act(false)};box.querySelector("#npmYes").onclick=function(){act(true)};
    box.querySelector("#npmHi").onclick=function(){openChat(p)};
    var x0=null,dx=0;
    card.addEventListener("touchstart",function(e){x0=e.touches[0].clientX;dx=0;card.style.transition="none"},{passive:true});
    card.addEventListener("touchmove",function(e){if(x0===null)return;dx=e.touches[0].clientX-x0;card.style.transform="translateX("+dx+"px) rotate("+(dx/20)+"deg)";card.classList.toggle("show-like",dx>40);card.classList.toggle("show-nope",dx<-40)},{passive:true});
    card.addEventListener("touchend",function(){card.style.transition="";if(Math.abs(dx)>90){act(dx>0)}else{card.style.transform="";card.classList.remove("show-like","show-nope")}x0=null});
  }
  function matchBox(p){
    sheetOpen('<div class="pbody" style="text-align:center">'+head("It's a match! 🎉","mbX")+'<p class="about">You and '+esc(p.name)+' both liked each other. Say hi and make a plan, in a public place.</p><button class="cta" id="mbHi">Say hi to '+esc(p.name)+'</button></div>');
    panel.querySelector("#mbX").onclick=closeSheet;panel.querySelector("#mbHi").onclick=function(){openChat(p)};
  }

  /* ---------- profile form ---------- */
  function formHTML(){
    var m=mine||{};
    return '<div class="npm-card hl"><b>'+(mine?"Edit your profile":"Create your profile")+'</b><p class="npm-plan">Meet travellers for a club night, a meal, sports or sightseeing. Social meetings only, in public places.</p>'+
      '<div class="fields"><label>First name<input id="mfN" maxlength="40" value="'+esc(m.name||"")+'"></label>'+
      '<label>Age<input id="mfA" inputmode="numeric" maxlength="2" value="'+esc(m.age||"")+'"></label>'+
      '<label>I am<select id="mfG"><option value="man">Man</option><option value="woman">Woman</option><option value="other">Other</option></select></label>'+
      '<label>From (city)<input id="mfC" maxlength="60" placeholder="e.g. Mumbai" value="'+esc(m.city||"")+'"></label>'+
      '<label class="full">Languages<input id="mfL" maxlength="80" placeholder="Hindi, English" value="'+esc(m.languages||"")+'"></label>'+
      '<label>Up for<select id="mfI">'+INT.map(function(i){return '<option value="'+i[0]+'">'+i[1]+'</option>'}).join("")+'</select></label>'+
      '<label>When<select id="mfW">'+WHEN.map(function(w){return '<option>'+w+'</option>'}).join("")+'</select></label>'+
      '<label class="full">Your plan (optional)<input id="mfP" maxlength="140" placeholder="e.g. Walking Street tonight, want a group" value="'+esc(m.plan||"")+'"></label>'+
      '<label class="full">Profile photo (optional)<input id="mfF" type="file" accept="image/*"></label></div>'+
      '<label class="npm-chk"><input type="checkbox" id="mfPh"> This is my own photo.</label>'+
      '<label class="npm-chk"><input type="checkbox" id="mf18"'+(mine?" checked":"")+'> I am 18 or older.</label>'+
      '<label class="npm-chk"><input type="checkbox" id="mfR"'+(mine?" checked":"")+'> I agree to the rules: social meetings in public places only, no money, gifts or paid services of any kind.</label>'+
      '<div class="npm-acts"><button class="npm-btn pri" id="mfSave">Save profile</button>'+(mine?'<button class="npm-btn" id="mfCancel">Cancel</button><button class="npm-btn" id="mfHide">'+(mine.active?"Hide my profile":"Show my profile")+'</button>':'')+'</div><p class="err" id="mfE"></p></div>';
  }
  function wireForm(root){
    var $=function(s){return root.querySelector(s)},m=mine||{};
    $("#mfG").value=m.gender||"man";$("#mfI").value=m.intent||"party";$("#mfW").value=m.when_txt||"Tonight";
    if($("#mfCancel"))$("#mfCancel").onclick=function(){editing=false;paintMain()};
    if($("#mfHide"))$("#mfHide").onclick=async function(){await sb.from("np_meet_profiles").update({active:!mine.active}).eq("user_id",user.id);editing=false;refresh()};
    $("#mfSave").onclick=async function(){
      var E=$("#mfE"),n=$("#mfN").value.trim(),a=parseInt($("#mfA").value,10),p=$("#mfP").value.trim(),f=$("#mfF").files&&$("#mfF").files[0];
      if(!n){E.textContent="Add your first name.";return}
      if(!(a>=18&&a<=99)){E.textContent="You must be 18 or older.";return}
      if(!$("#mf18").checked){E.textContent="Please confirm you are 18 or older.";return}
      if(!$("#mfR").checked){E.textContent="Please agree to the rules.";return}
      if(BAD.test(n+" "+p)){E.textContent="Money, prices or paid services are not allowed. Please keep it social.";return}
      if(f&&!$("#mfPh").checked){E.textContent="Please confirm it is your own photo.";return}
      this.disabled=true;E.textContent="Saving…";
      var row={name:n,age:a,gender:$("#mfG").value,city:$("#mfC").value.trim()||null,languages:$("#mfL").value.trim()||null,intent:$("#mfI").value,when_txt:$("#mfW").value,plan:p||null,active:true};
      if(f){var blob=await new Promise(function(ok){shrink(f,900,ok)});
        if(blob){var path=user.id+"/photo.jpg",up=await sb.storage.from("meet-photos").upload(path,blob,{upsert:true,contentType:"image/jpeg"});
          if(!up.error)row.photo_url=sb.storage.from("meet-photos").getPublicUrl(path).data.publicUrl+"?v="+Date.now()}}
      var r=mine?await sb.from("np_meet_profiles").update(row).eq("user_id",user.id):await sb.from("np_meet_profiles").insert(row);
      this.disabled=false;
      if(r.error){E.textContent=r.error.message;return}
      var wasNew=!mine;editing=false;await refresh();
      if(isWoman(mine)&&(mine.verify_status==="none"||mine.verify_status==="rejected")&&wasNew)openSelfie();
    };
  }

  /* ---------- selfie check ---------- */
  function openSelfie(){
    sheetOpen('<div class="pbody" id="npmSheet">'+head("Selfie check","smX")+
      '<p class="about">Take a clear selfie of your face. Only the Namaste Pattaya team sees it, just to check you are real. It is never shown on your profile and is deleted after the check.</p>'+
      '<div class="fields"><label class="full">Selfie<input id="sfF" type="file" accept="image/*" capture="user"></label></div>'+
      '<label class="npm-chk"><input type="checkbox" id="sfOk"> I agree my selfie is used only to verify my profile.</label>'+
      '<button class="cta" id="sfGo">Send for checking</button><p class="err" id="sfE"></p></div>');
    panel.querySelector("#smX").onclick=closeSheet;
    panel.querySelector("#sfGo").onclick=async function(){
      var f=panel.querySelector("#sfF").files&&panel.querySelector("#sfF").files[0],E=panel.querySelector("#sfE");
      if(!f){E.textContent="Take or choose a selfie first.";return}
      if(!panel.querySelector("#sfOk").checked){E.textContent="Please tick the box to agree.";return}
      this.disabled=true;E.textContent="Sending…";
      var blob=await new Promise(function(ok){shrink(f,1000,ok)});
      if(!blob){this.disabled=false;E.textContent="Could not read this photo. Try again.";return}
      var up=await sb.storage.from("meet-selfies").upload(user.id+"/selfie.jpg",blob,{upsert:true,contentType:"image/jpeg"});
      if(up.error){this.disabled=false;E.textContent=up.error.message;return}
      var r=await sb.from("np_meet_profiles").update({verify_status:"pending"}).eq("user_id",user.id);
      if(r.error){this.disabled=false;E.textContent=r.error.message;return}
      sheetOpen('<div class="pbody">'+head("Selfie sent","smX")+'<p class="about">Thank you! We are checking it. You will get the Verified badge soon.</p></div>');
      panel.querySelector("#smX").onclick=closeSheet;refresh();
    };
  }

  /* ---------- report / block ---------- */
  function openMore(p){
    sheetOpen('<div class="pbody">'+head(esc(p.name),"moX")+
      '<div class="fields"><label class="full">What happened? (for a report)<input id="moR" maxlength="300" placeholder="e.g. asked for money"></label></div>'+
      '<button class="cta" id="moRep">Report to Namaste Pattaya</button><button class="cta ghost" id="moBlk">Block '+esc(p.name)+'</button><p class="err" id="moE"></p></div>');
    panel.querySelector("#moX").onclick=closeSheet;
    panel.querySelector("#moRep").onclick=async function(){var r=await sb.from("np_meet_reports").insert({reported:p.user_id,reason:panel.querySelector("#moR").value.trim()||null});
      panel.querySelector("#moE").style.color=r.error?"":"var(--ok)";panel.querySelector("#moE").textContent=r.error?r.error.message:"Thank you. We review every report."};
    panel.querySelector("#moBlk").onclick=async function(){if(!confirm("Block "+p.name+"? You will not see each other or be able to message."))return;
      await sb.from("np_meet_blocks").insert({blocked:p.user_id});closeSheet();refresh()};
  }

  /* ---------- messages ---------- */
  function subscribe(){
    if(chan){sb.removeChannel(chan);chan=null}if(!user)return;
    chan=sb.channel("meet-"+user.id).on("postgres_changes",{event:"INSERT",schema:"public",table:"np_meet_messages",filter:"recipient=eq."+user.id},function(ev){
      var m=ev.new;if(chatWith&&m.sender===chatWith.user_id&&panel.querySelector("#chBox")){addMsg(m);return}
      unread[m.sender]=(unread[m.sender]||0)+1;paintAll();
    }).subscribe();
  }
  function addMsg(m){var box=panel.querySelector("#chBox");if(!box)return;var d=document.createElement("div");d.className="npm-m"+(m.sender===user.id?" me":"");d.textContent=m.body;box.appendChild(d);box.scrollTop=box.scrollHeight}
  async function openChat(p){
    if(!mine){alert("Create your Boomer profile first, then you can say hi.");closeSheet();if(typeof go==="function")go("buddy");editing=true;paintMain();return}
    chatWith=p;delete unread[p.user_id];
    sheetOpen('<div class="pbody">'+head("Chat with "+esc(p.name),"chX")+'<p class="small">Meet only in public places. Never send money. Report anyone who asks for money or paid services.</p>'+
      '<div class="npm-msgs" id="chBox"><p class="npm-empty">Loading…</p></div><div class="post"><input id="chIn" maxlength="500" placeholder="Say hi…"><button id="chGo">Send</button></div><p class="err" id="chE"></p></div>');
    panel.querySelector("#chX").onclick=function(){chatWith=null;closeSheet();paintAll()};
    var me=user.id,them=p.user_id;
    var r=await sb.from("np_meet_messages").select("*").or("and(sender.eq."+me+",recipient.eq."+them+"),and(sender.eq."+them+",recipient.eq."+me+")").order("created_at").limit(200);
    var box=panel.querySelector("#chBox");if(!box)return;box.innerHTML=(r.data&&r.data.length)?"":'<p class="npm-empty">Say hi and tell '+esc(p.name)+' your plan.</p>';
    (r.data||[]).forEach(addMsg);
    async function send(){
      var inp=panel.querySelector("#chIn"),E=panel.querySelector("#chE"),t=inp.value.trim();if(!t)return;
      if(BAD.test(t)){E.textContent="Messages about money, payment or paid services are not allowed. Please keep it social.";return}
      E.textContent="";inp.value="";
      var s=await sb.from("np_meet_messages").insert({recipient:them,body:t}).select().single();
      if(s.error){E.textContent=/row-level|policy/i.test(s.error.message)?"Message not sent. It may break the rules, or one of you has blocked the other.":s.error.message;inp.value=t;return}
      var em=box.querySelector(".npm-empty");if(em)em.remove();addMsg(s.data);
    }
    panel.querySelector("#chGo").onclick=send;
    panel.querySelector("#chIn").onkeydown=function(e){if(e.key==="Enter"){e.preventDefault();send()}};
  }
  async function openInbox(){
    sheetOpen('<div class="pbody">'+head("Messages","ibX")+'<div id="ibL"><p class="npm-empty">Loading…</p></div></div>');
    panel.querySelector("#ibX").onclick=closeSheet;
    var r=await sb.from("np_meet_messages").select("*").or("sender.eq."+user.id+",recipient.eq."+user.id).order("created_at",{ascending:false}).limit(300);
    var seen={},convs=[];(r.data||[]).forEach(function(m){var o=m.sender===user.id?m.recipient:m.sender;if(!seen[o]){seen[o]=1;convs.push({o:o,m:m})}});
    var need=convs.map(function(c){return c.o}).filter(function(id){return !people.find(function(p){return p.user_id===id})});
    if(need.length){var pr=await sb.from("np_meet_profiles").select("user_id,name,age,gender,city,languages,intent,when_txt,plan,photo_url,verify_status").in("user_id",need);(pr.data||[]).forEach(function(p){people.push(p)})}
    var el=panel.querySelector("#ibL");if(!el)return;
    el.innerHTML=convs.length?convs.map(function(c){var p=people.find(function(x){return x.user_id===c.o})||{user_id:c.o,name:"Member"};
      return '<div class="npm-card" data-c="'+c.o+'" style="cursor:pointer"><div class="npm-row">'+av(p)+'<div class="npm-who"><b>'+esc(p.name)+(unread[c.o]?'<span class="npm-unread">'+unread[c.o]+'</span>':'')+'</b><small>'+esc((c.m.sender===user.id?"You: ":"")+c.m.body)+'</small></div></div></div>'}).join(""):'<p class="npm-empty">No messages yet. Tap "Say hi" on someone\'s profile.</p>';
    el.querySelectorAll("[data-c]").forEach(function(d){d.onclick=function(){var p=people.find(function(x){return x.user_id===d.dataset.c});if(p)openChat(p)}});
  }

  /* ---------- admin: verify women, see reports ---------- */
  async function openAdmin(){
    if(!adminOK){await checkAdmin();if(!adminOK)return}
    sheetOpen('<div class="pbody">'+head("Admin · Boomer","adX")+'<div id="adBody"><p class="npm-empty">Loading…</p></div></div>');
    panel.querySelector("#adX").onclick=closeSheet;
    var r=await sb.from("np_meet_profiles").select("*").eq("verify_status","pending").order("updated_at");
    var rep=await sb.from("np_meet_reports").select("*").eq("status","open").order("created_at",{ascending:false}).limit(50);
    var pend=r.data||[],reps=rep.data||[],names={};
    if(reps.length){var ids=reps.map(function(x){return x.reported});var nm=await sb.from("np_meet_profiles").select("user_id,name,age,city").in("user_id",ids);(nm.data||[]).forEach(function(p){names[p.user_id]=p.name+", "+p.age+(p.city?" · "+p.city:"")})}
    var h='<h3 style="font-size:16px;margin:10px 0">Waiting for selfie check ('+pend.length+')</h3>';
    for(var i=0;i<pend.length;i++){var p=pend[i],u=await sb.storage.from("meet-selfies").createSignedUrl(p.user_id+"/selfie.jpg",600);
      h+='<div class="npm-card" data-u="'+p.user_id+'"><div class="npm-row">'+av(p)+'<div class="npm-who"><b>'+esc(p.name)+', '+esc(p.age)+'</b><small>'+esc(p.gender)+' · '+esc(p.city||"")+'</small></div></div>'+
        (u.data&&u.data.signedUrl?'<img src="'+esc(u.data.signedUrl)+'" alt="Selfie of '+esc(p.name)+'" style="display:block;width:100%;max-height:320px;object-fit:contain;border-radius:12px;margin-top:10px;background:#000">':'<p class="npm-plan">No selfie found.</p>')+
        '<p class="small" style="margin-top:8px">Check: real face, looks 18+, matches the profile photo, gender matches.</p>'+
        '<div class="npm-acts"><button class="npm-btn pri" data-ok>Approve</button><button class="npm-btn" data-no>Reject</button></div></div>'}
    if(!pend.length)h+='<p class="npm-empty">Nobody waiting.</p>';
    h+='<h3 style="font-size:16px;margin:18px 0 10px">Open reports ('+reps.length+')</h3>'+(reps.length?reps.map(function(x){return '<div class="npm-card" data-r="'+x.id+'"><p class="npm-plan" style="margin:0"><b>Reported:</b> '+esc(names[x.reported]||"Member")+'</p><p class="npm-plan">'+esc(x.reason||"No reason given")+'</p><p class="small">'+new Date(x.created_at).toLocaleString("en-GB")+'</p><div class="npm-acts"><button class="npm-btn" data-hide="'+x.reported+'">Hide this profile</button><button class="npm-btn" data-done>Mark done</button></div></div>'}).join(""):'<p class="npm-empty">No open reports.</p>');
    var b=panel.querySelector("#adBody");if(!b)return;b.innerHTML=h;
    b.querySelectorAll("[data-u]").forEach(function(c){var id=c.dataset.u;
      async function set(v){var x=await sb.from("np_meet_profiles").update({verify_status:v}).eq("user_id",id);if(x.error){alert(x.error.message);return}
        await sb.storage.from("meet-selfies").remove([id+"/selfie.jpg"]);c.remove()}
      c.querySelector("[data-ok]").onclick=function(){set("verified")};
      c.querySelector("[data-no]").onclick=function(){if(confirm("Reject this selfie?"))set("rejected")};
    });
    b.querySelectorAll("[data-r]").forEach(function(c){
      c.querySelector("[data-done]").onclick=async function(){await sb.from("np_meet_reports").update({status:"done"}).eq("id",c.dataset.r);c.remove()};
      c.querySelector("[data-hide]").onclick=async function(){if(!confirm("Hide this profile from everyone?"))return;var x=await sb.from("np_meet_profiles").update({active:false}).eq("user_id",this.dataset.hide);alert(x.error?x.error.message:"Profile hidden.")};
    });
  }
  window.npMeetAdmin=openAdmin;
  /* the old "Admin page" button (n8n passcode, no longer working) now opens this admin screen */
  new MutationObserver(function(){
    panel.querySelectorAll('a[href="admin.html"]').forEach(function(a){
      if(a.dataset.npm)return;a.dataset.npm="1";a.textContent="Verify women & reports";a.setAttribute("href","#");
      a.addEventListener("click",function(e){e.preventDefault();openAdmin()});
    });
  }).observe(panel,{childList:true,subtree:true});

  /* ---------- Empowered Girls lounge: verified women only, same people (women), search ---------- */
  function paintLounge(){
    var gate=document.getElementById("ladyGate");
    if(gate){
      var box=document.getElementById("npLGate");
      if(!box){box=document.createElement("div");box.id="npLGate";gate.insertBefore(box,gate.firstChild);
        [].forEach.call(gate.children,function(ch){if(ch!==box)ch.style.setProperty("display","none","important")})}
      var s=mine&&mine.verify_status;
      box.innerHTML='<p class="about" style="margin:0 0 10px">This lounge is for verified women only, so the space stays safe and private.</p>'+
        '<p class="about">'+(!user?"Log in first, then create your Boomer profile as a woman and send a quick selfie.":
          !mine?"Create your Boomer profile (as a woman) and send a quick selfie.":
          mine.gender!=="woman"?"Only women can enter this lounge.":
          s==="pending"?"Your selfie is being checked. You will get access soon.":
          "Send a quick selfie from your Boomer profile to get access.")+'</p>'+
        (mine&&mine.gender!=="woman"?'':'<button class="cta" id="npLGo">Go to Boomer</button>');
      var g=box.querySelector("#npLGo");if(g)g.onclick=function(){if(typeof go==="function")go("buddy")};
    }
    try{
      if(womanOK()){if(!lady){lady={name:(mine&&mine.name)||"Admin",insta:"",bio:adminOK&&!mine?"Moderator":"",followers:0};store.set("np_lady",lady)}}
      else if(lady){lady=null}
    }catch(e){}
  }
  function paintLoungeFriend(){
    try{if(typeof lTab==="undefined"||lTab!=="friend"||!lady)return}catch(e){return}
    var v=document.getElementById("lview");if(!v||v.querySelector("#npLMeet"))return;
    v.innerHTML='<div id="npLMeet"><div class="npm-card hl"><b>Boomer · women</b><p class="npm-plan">The same Boomer as outside, showing verified women only. Say hi, make a plan, meet in public places.</p><div class="npm-acts"><button class="npm-btn" id="npLAll">Open Boomer</button></div></div>'+
      '<div class="npm-search"><input id="npLQ" type="search" placeholder="Search women by name, city, language, plan…" value="'+esc(q.lounge)+'" aria-label="Search women"></div><div id="npLList"></div></div>';
    v.querySelector("#npLAll").onclick=function(){go("buddy")};
    v.querySelector("#npLQ").oninput=function(){q.lounge=this.value;list(v.querySelector("#npLList"),q.lounge,"woman",true)};
    if(!mine&&!adminOK)v.querySelector("#npLList").innerHTML='<p class="npm-empty">Create your Boomer profile first.</p>';
    else list(v.querySelector("#npLList"),q.lounge,"woman",true);
  }
  if(typeof renderLadies==="function"){var _rl=renderLadies;renderLadies=function(){paintLounge();_rl();paintLoungeFriend()}}

  /* ---------- Friends Location & Bill Splitter: tile in the All services grid ---------- */
  function flbTile(){
    var cats=document.getElementById("cats");if(!cats||document.getElementById("npFLBcat"))return;
    var b=document.createElement("button");b.className="cat";b.id="npFLBcat";b.type="button";
    b.innerHTML='<span>'+(typeof ico==="function"?ico("map"):"")+'</span>';b.append("Friends Location & Bill Splitter");
    b.onclick=function(e){e.stopPropagation();if(typeof window.openFinder==="function")openFinder()};
    cats.appendChild(b);
  }

  function paintAll(){paintMain();try{if(typeof renderLadies==="function")renderLadies()}catch(e){}}
  var busy=false;
  new MutationObserver(function(){if(busy)return;busy=true;requestAnimationFrame(function(){busy=false;flbTile();mount()})}).observe(document.body,{childList:true,subtree:true});
  flbTile();
  async function onUser(u){
    var changed=(u&&u.id)!==(user&&user.id);user=u;if(!changed&&loaded)return;
    loaded=false;mine=null;people=[];unread={};paintMain();
    if(u){await checkAdmin();subscribe()}
    if(adminOK)try{renderLadies()}catch(e){}else{adminOK=false;if(chan){sb.removeChannel(chan);chan=null}}
    await refresh();
  }
  sb.auth.getSession().then(function(r){onUser(r.data.session?r.data.session.user:null)});
  sb.auth.onAuthStateChange(function(e,s){onUser(s?s.user:null)});
  if(typeof go==="function"){var _go=go;go=function(t){_go(t);if(t==="buddy"){paintMain();if(user&&mine)loadPeople().then(paintMain)}}}
})();

/* ===== Club dashboard: every tab LIVE (30 Sep 2026)
   Reservations: Confirmed → Arrived → Completed (final bill) or No-show.
   Overview, Orders (upcoming app bookings), Attendance, CRM, Reports, Post updates and Photos
   now read and save real data in Supabase instead of sample numbers. ===== */
(function(){
  if(!window.supabase||typeof renderDash!=="function")return;
  var sb=window.supabase.createClient("https://mymtgbmcjbwsnetzwgoy.supabase.co","sb_publishable_ViFodxG8kAENr78Fyp-BwQ_iA_BfAD0");
  var COMMISSION=0.20; /* Namaste Pattaya commission on app bookings (per partner agreement) */
  var LV={waiter:1,captain:2,asst_manager:3,manager:4,general_manager:5,owner:6};
  var ST={pending:"Pending",confirmed:"Confirmed",arrived:"Arrived",completed:"Completed",no_show:"No-show",cancelled:"Cancelled"};
  var SRC={app:"App",phone:"Phone",walkin:"Walk-in",whatsapp:"WhatsApp"};
  var LEGAL=/(drink|beer|whisk|vodka|champagne|cocktail|\bshots?\b|bottle|alcohol|\bwine|\brum\b|tequila|\bgin\b|liquor|hookah|shisha|vape|cigar|smok)/i;
  var user=null,isAdm=false,myStaff={},token=0,rep="7d";
  function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
  function ymd(d){var x=new Date(d);return x.getFullYear()+"-"+String(x.getMonth()+1).padStart(2,"0")+"-"+String(x.getDate()).padStart(2,"0")}
  function addDays(d,n){var x=new Date(d);x.setDate(x.getDate()+n);return x}
  function M(n){n=Math.round(Number(n)||0);return "฿"+n.toLocaleString("en-US")} /* dashboards always in baht (bills are in baht) */
  function spend(x){return Number(x.final_bill!=null?x.final_bill:x.total)||0}
  function lvl(v){return isAdm?99:(LV[myStaff[v]]||0)}
  function venueName(id){var c=(typeof CLUBS!=="undefined"?CLUBS:[]).find(function(x){return x.id===id});return c?c.name:id}
  function card(h){return '<div class="lcard">'+h+'</div>'}
  function note(t){return '<p class="small" style="margin:0 0 10px">'+t+'</p>'}

  async function loadMe(){
    isAdm=false;myStaff={};if(!user)return;
    try{var a=await sb.rpc("np_is_admin");isAdm=!a.error&&a.data===true}catch(e){}
    var s=await sb.from("np_venue_staff").select("venue_id,role").eq("user_id",user.id);
    (s.data||[]).forEach(function(x){myStaff[x.venue_id]=x.role});
  }

  /* ---------- Reservations: "Completed" step after "Arrived" ---------- */
  function patchRes(){
    var box=document.getElementById("rsList");if(!box)return;
    var f=document.getElementById("rsF");
    if(f&&!f.querySelector('option[value="completed"]')){var o=document.createElement("option");o.value="completed";o.textContent="Completed";f.insertBefore(o,f.querySelector('option[value="no_show"]'))}
    box.querySelectorAll("[data-id]").forEach(function(c){
      var s=c.querySelector(".status"),btns=c.querySelector(".rsbtns");if(!s||!btns||btns.querySelector("[data-done]"))return;
      if(s.textContent.trim()!=="Arrived")return;
      var b=document.createElement("button");b.className="pill on";b.dataset.done="1";b.textContent="Completed (guest left)";
      btns.insertBefore(b,btns.firstChild);
      b.onclick=async function(){
        var v=prompt("Final bill for this table in baht (numbers only). Leave empty if the same as the booking.","");
        if(v===null)return;
        var d={status:"completed"},n=parseFloat(String(v).replace(/[^0-9.]/g,""));if(n>=0&&String(v).trim()!=="")d.final_bill=n;
        b.disabled=true;
        var r=await sb.from("np_bookings").update(d).eq("id",c.dataset.id);
        if(r.error&&d.final_bill!=null){delete d.final_bill;r=await sb.from("np_bookings").update(d).eq("id",c.dataset.id)}
        if(r.error){alert(r.error.message);b.disabled=false;return}
        renderDash();
      };
    });
  }
  new MutationObserver(function(){patchRes()}).observe(document.body,{childList:true,subtree:true});

  /* ---------- live tabs ---------- */
  var LIVE=["over","orders","att","crm","rep","upd","photos"];
  var _prev=renderDash;
  renderDash=function(){try{restrict()}catch(e){}
    var dv=document.getElementById("dVenue");
    if(dv&&dv.value==="__none"){var view=document.getElementById("dview");if(view)view.innerHTML='<div class="lcard"><h4>No venue linked yet</h4><p>'+(user?'When Namaste Pattaya approves your venue, or your manager adds your email ('+esc(user.email)+') in the Staff tab, your venue appears here.':'Log in with your partner or staff account to see your venue.')+'</p></div>';return}
    _prev();try{live()}catch(e){console.error(e)}};
  function live(){
    var t=(typeof dTab!=="undefined")?dTab:"";if(LIVE.indexOf(t)<0){token++;return}  /* switching tab cancels any slower screen still loading */
    var view=document.getElementById("dview"),dv=document.getElementById("dVenue");if(!view||!dv)return;
    var v=dv.value,L=lvl(v),my=++token;
    if(!user){view.innerHTML=card('<h4>Staff login</h4><p>Log in with your staff account to see live data for your club.</p><button class="pill on" id="clLog" style="margin-top:10px">Log in</button>');
      view.querySelector("#clLog").onclick=function(){var b=document.querySelector(".np-hbtn.user");if(b)b.click()};return}
    if(v==="__none"){view.innerHTML=card('<h4>No venue linked yet</h4><p>When Namaste Pattaya approves your venue, or your manager adds your email ('+esc(user.email)+') in the Staff tab, your venue appears here.</p>');return}
    if(!L){view.innerHTML=card('<h4>Not linked to '+esc(venueName(v))+'</h4><p>Ask your manager, general manager or owner to add your email ('+esc(user.email)+') in the Staff tab.</p>');return}
    view.innerHTML='<p class="small">Loading…</p>';
    var ok=function(){return my===token};
    ({over:over,orders:orders,att:att,crm:crm,rep:report,upd:updates,photos:photos})[t](view,v,L,ok);
  }
  async function bookings(v,from,to){
    var q=sb.from("np_bookings").select("*").eq("venue_id",v);
    if(from)q=q.gte("night",from);if(to)q=q.lte("night",to);
    var r=await q.order("night",{ascending:false}).limit(5000);
    if(r.error)throw r.error;return r.data||[];
  }
  function fail(view,e){view.innerHTML=card('<h4>Could not load</h4><p class="small">'+esc(e&&e.message||e)+'</p>')}

  /* Overview */
  async function over(view,v,L,ok){
    try{
      var today=ymd(new Date()),rows=await bookings(v,ymd(addDays(new Date(),-6)),today),att=await sb.from("np_attendance").select("id").eq("venue_id",v).eq("night",today).is("check_out",null);
      if(!ok())return;
      var tn=rows.filter(function(x){return x.night===today&&x.status!=="cancelled"});
      var g=tn.reduce(function(s,x){return s+(x.guests||0)},0),rev=tn.reduce(function(s,x){return s+spend(x)},0);
      var arr=tn.filter(function(x){return x.status==="arrived"||x.status==="completed"}).length;
      var days=[],mx=1;for(var i=6;i>=0;i--){var d=ymd(addDays(new Date(),-i)),n=rows.filter(function(x){return x.night===d&&x.status!=="cancelled"}).length;days.push([d,n]);mx=Math.max(mx,n)}
      view.innerHTML='<div class="kpis"><div class="kpi"><small>Reservations tonight</small><b>'+tn.length+'</b></div><div class="kpi"><small>Guests expected</small><b>'+g+'</b></div>'+
        '<div class="kpi"><small>Arrived so far</small><b>'+arr+'</b></div>'+(L>=4?'<div class="kpi"><small>Revenue tonight</small><b>'+M(rev)+'</b></div>':'')+
        '<div class="kpi"><small>Staff on shift</small><b>'+((att.data||[]).length)+'</b></div></div>'+
        '<div class="bars">'+days.map(function(x){var wd=new Date(x[0]+"T12:00").toLocaleDateString("en-GB",{weekday:"short"});return '<div style="height:'+Math.max(4,Math.round(x[1]/mx*100))+'%" title="'+x[1]+' bookings"><span>'+wd+'</span></div>'}).join("")+'</div>'+
        '<p class="small" style="margin-top:26px">Bookings, last 7 nights (live)</p>';
    }catch(e){fail(view,e)}
  }

  /* Orders = upcoming bookings from the app, next 30 nights */
  async function orders(view,v,L,ok){
    try{
      var today=ymd(new Date()),rows=(await bookings(v,today,ymd(addDays(new Date(),30)))).filter(function(x){return x.source==="app"&&x.status!=="cancelled"});
      if(!ok())return;
      rows.sort(function(a,b){return (a.night+(a.time||"")).localeCompare(b.night+(b.time||""))});
      var tot=rows.reduce(function(s,x){return s+spend(x)},0);
      view.innerHTML=note('Upcoming bookings from the Namaste Pattaya app (next 30 nights). Mark Arrived and Completed in <b>Reservations</b> on the night.')+
        '<p class="small" style="margin:0 0 10px"><b>'+rows.length+'</b> bookings · <b>'+rows.reduce(function(s,x){return s+(x.guests||0)},0)+'</b> guests'+(L>=4?' · '+M(tot):'')+'</p>'+
        (rows.length?rows.map(function(x){return card('<div class="lrow"><div style="min-width:0"><h4>'+esc(x.name)+' · '+x.guests+' pax</h4><p>'+new Date(x.night+"T12:00").toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short"})+(x.time?' · '+esc(x.time):'')+(x.package?' · '+esc(x.package):'')+'</p><p class="small">'+esc(x.code)+(x.phone?' · <a href="tel:'+esc(x.phone)+'">'+esc(x.phone)+'</a>':'')+(L>=4&&spend(x)?' · '+M(spend(x)):'')+'</p></div><span class="status">'+(ST[x.status]||esc(x.status))+'</span></div>')}).join(""):'<p class="small">No upcoming app bookings yet.</p>');
    }catch(e){fail(view,e)}
  }

  /* Attendance: each staff member checks in and out; managers see everyone */
  async function att(view,v,L,ok){
    var today=ymd(new Date());
    var r=await sb.from("np_attendance").select("*").eq("venue_id",v).eq("night",today).order("check_in");
    if(!ok())return;
    if(r.error){view.innerHTML=card('<h4>Almost ready</h4><p class="small">Please run np-club-dashboard.sql in Supabase.</p>');return}
    var rows=r.data||[],mine=rows.find(function(x){return x.user_id===user.id&&!x.check_out});
    function tm(t){return t?new Date(t).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"}):""}
    view.innerHTML=card('<div class="lrow"><div><h4>You</h4><p>'+(mine?'Checked in at '+tm(mine.check_in):'Not checked in')+'</p></div><button class="pill '+(mine?'':'on')+'" id="atMe">'+(mine?'Check out':'Check in')+'</button></div>')+
      '<h3 style="font-size:15px;margin:14px 0 8px">Tonight</h3>'+
      (rows.length?rows.map(function(x){return card('<div class="lrow"><div style="min-width:0"><h4>'+esc(x.name||"Staff")+'</h4><p class="small">In '+tm(x.check_in)+(x.check_out?' · Out '+tm(x.check_out):' · on shift')+'</p></div>'+
        (L>=4&&!x.check_out&&x.user_id!==user.id?'<button class="pill" data-out="'+x.id+'">Check out</button>':'<span class="status">'+(x.check_out?'Off':'Working')+'</span>')+'</div>')}).join(""):'<p class="small">Nobody checked in yet tonight.</p>');
    view.querySelector("#atMe").onclick=async function(){this.disabled=true;var x;
      if(mine)x=await sb.from("np_attendance").update({check_out:new Date().toISOString()}).eq("id",mine.id);
      else x=await sb.from("np_attendance").insert({venue_id:v,night:today,name:(user.user_metadata&&user.user_metadata.name)||user.email});
      if(x.error)alert(x.error.message);renderDash()};
    view.querySelectorAll("[data-out]").forEach(function(b){b.onclick=async function(){var x=await sb.from("np_attendance").update({check_out:new Date().toISOString()}).eq("id",b.dataset.out);if(x.error)alert(x.error.message);renderDash()}});
  }

  /* CRM: real customers of this club (manager and up) */
  async function crm(view,v,L,ok){
    if(L<4){view.innerHTML=card('<h4>Managers only</h4><p class="small">Customer details are for managers, general managers and owners.</p>');return}
    try{
      var rows=await bookings(v,ymd(addDays(new Date(),-365)),null);if(!ok())return;
      var map={};rows.forEach(function(x){if(x.status==="cancelled")return;var k=x.customer_id||(x.phone||"").replace(/\D/g,"")||(x.name||"").toLowerCase();if(!k)return;
        var c=map[k]||(map[k]={name:x.name,phone:x.phone,visits:0,books:0,noshow:0,spend:0,last:""});
        c.books++;if(x.status==="arrived"||x.status==="completed"){c.visits++;c.spend+=spend(x);if(x.night>c.last)c.last=x.night}
        if(x.status==="no_show")c.noshow++;if(!c.phone&&x.phone)c.phone=x.phone});
      var list=Object.keys(map).map(function(k){return map[k]}).sort(function(a,b){return b.spend-a.spend||b.visits-a.visits});
      function tag(c){return c.spend>=50000||c.visits>=5?"VIP":c.visits>=2?"Regular":c.visits===1?"New":"Booked"}
      view.innerHTML=note('Customers from the last 12 months, built from real bookings. Use it only to serve your guests (PDPA).')+
        '<div class="fields" style="margin-bottom:10px"><label class="full">Search<input id="crQ" type="search" placeholder="Name or phone"></label></div><div id="crL"></div>';
      function draw(){var q=view.querySelector("#crQ").value.trim().toLowerCase(),l=list.filter(function(c){return !q||String(c.name).toLowerCase().indexOf(q)>-1||String(c.phone||"").indexOf(q)>-1});
        view.querySelector("#crL").innerHTML=l.length?'<div class="tblw"><table class="tbl"><tr><th>Customer</th><th>Visits</th><th>Spend</th><th>Last visit</th><th>Tag</th></tr>'+
          l.map(function(c){var wa=String(c.phone||"").replace(/\D/g,"");return '<tr><td>'+esc(c.name)+(c.phone?'<br><a class="small" href="tel:'+esc(c.phone)+'">'+esc(c.phone)+'</a>'+(wa?' · <a class="small" href="https://wa.me/'+wa+'" target="_blank" rel="noopener">WhatsApp</a>':''):'')+(c.noshow?'<br><span class="small">No-shows: '+c.noshow+'</span>':'')+'</td><td>'+c.visits+'</td><td>'+M(c.spend)+'</td><td>'+(c.last?new Date(c.last+"T12:00").toLocaleDateString("en-GB",{day:"numeric",month:"short"}):"–")+'</td><td><span class="status">'+tag(c)+'</span></td></tr>'}).join("")+'</table></div>':'<p class="small">No customers yet. They appear after their first booking.</p>'}
      view.querySelector("#crQ").oninput=draw;draw();
    }catch(e){fail(view,e)}
  }

  /* Reports (manager and up) */
  async function report(view,v,L,ok){
    if(L<4){view.innerHTML=card('<h4>Managers only</h4><p class="small">Reports are for managers, general managers and owners.</p>');return}
    var now=new Date(),P={tonight:[ymd(now),ymd(now),"Tonight"],"7d":[ymd(addDays(now,-6)),ymd(now),"Last 7 nights"],month:[ymd(new Date(now.getFullYear(),now.getMonth(),1)),ymd(now),"This month"],last:[ymd(new Date(now.getFullYear(),now.getMonth()-1,1)),ymd(new Date(now.getFullYear(),now.getMonth(),0)),"Last month"]};
    try{
      var p=P[rep]||P["7d"],rows=await bookings(v,p[0],p[1]);if(!ok())return;
      function c(f){return rows.filter(f)}
      var live=c(function(x){return x.status!=="cancelled"}),came=c(function(x){return x.status==="arrived"||x.status==="completed"});
      var rev=came.reduce(function(s,x){return s+spend(x)},0),appRev=came.filter(function(x){return x.source==="app"}).reduce(function(s,x){return s+spend(x)},0);
      var bySrc={};live.forEach(function(x){var k=SRC[x.source]||x.source||"Other";bySrc[k]=(bySrc[k]||0)+1});
      function tr(a,b){return '<tr><td>'+a+'</td><td>'+b+'</td></tr>'}
      view.innerHTML='<div class="fields" style="margin-bottom:10px"><label class="full">Period<select id="rpP">'+Object.keys(P).map(function(k){return '<option value="'+k+'"'+(k===rep?" selected":"")+'>'+P[k][2]+'</option>'}).join("")+'</select></label></div>'+
        '<div class="tblw"><table class="tbl"><tr><th>'+p[2]+'</th><th>Live</th></tr>'+
        tr("Reservations",live.length)+tr("Guests booked",live.reduce(function(s,x){return s+(x.guests||0)},0))+
        tr("Arrived / completed",came.length)+tr("No-shows",c(function(x){return x.status==="no_show"}).length)+tr("Cancelled",c(function(x){return x.status==="cancelled"}).length)+
        tr("Revenue (guests who came)",M(rev))+tr("From app bookings",M(appRev))+
        tr("Commission to Namaste Pattaya ("+Math.round(COMMISSION*100)+"% of app bookings)",M(appRev*COMMISSION))+
        '</table></div><p class="small" style="margin-top:10px">Bookings by source: '+(Object.keys(bySrc).map(function(k){return esc(k)+' '+bySrc[k]}).join(" · ")||"none")+'</p>'+
        '<p class="small">Revenue uses the final bill when staff tap "Completed", otherwise the booking amount.</p>';
      view.querySelector("#rpP").onchange=function(){rep=this.value;renderDash()};
    }catch(e){fail(view,e)}
  }

  /* Post updates (captain and up) – saved online, shown in the app */
  async function updates(view,v,L,ok){
    var r=await sb.from("np_venue_updates").select("*").eq("venue_id",v).order("created_at",{ascending:false}).limit(20);if(!ok())return;
    var rows=r.data||[];
    view.innerHTML=(L>=2?'<div class="partner"><div class="fields"><label>Type<select id="uT"><option>Ladies night</option><option>Event</option><option>Live music / DJ</option><option>Table offer</option><option>Free tables tonight</option></select></label>'+
      '<label>Show to<select id="uA"><option value="ladies">Empowered Girls lounge</option><option value="all">All users</option></select></label>'+
      '<label class="full">Update<input id="uX" maxlength="300" placeholder="e.g. Bollywood night with DJ from 22:00, free entry for ladies"></label></div>'+
      '<p class="small">Thai law: no alcohol, drink deals, tobacco or shisha in updates.</p><button class="cta" id="uGo">Post update</button><p class="err" id="uM" role="status"></p></div>':note('Captains and above can post updates.'))+
      '<h3 style="font-size:15px;margin:14px 0 8px">Posted</h3>'+(rows.length?rows.map(function(x){return card('<div class="lrow"><div style="min-width:0"><h4>'+esc(x.kind||"Update")+'</h4><p>'+esc(x.body)+'</p><p class="small">'+(x.audience==="ladies"?"Empowered Girls lounge":"All users")+' · '+new Date(x.created_at).toLocaleString("en-GB",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})+'</p></div>'+(L>=4?'<button class="pill" data-del="'+x.id+'">Delete</button>':'')+'</div>')}).join(""):'<p class="small">No updates yet.</p>');
    if(L>=2)view.querySelector("#uGo").onclick=async function(){
      var t=view.querySelector("#uX").value.trim(),m=view.querySelector("#uM");m.style.color="";
      if(!t){m.textContent="Write your update.";return}
      if(LEGAL.test(t)){m.textContent="Please remove alcohol, drink, tobacco or shisha words (Thai law).";return}
      this.disabled=true;var x=await sb.from("np_venue_updates").insert({venue_id:v,venue_name:venueName(v),kind:view.querySelector("#uT").value,body:t,audience:view.querySelector("#uA").value});this.disabled=false;
      if(x.error){m.textContent=/check|legal/i.test(x.error.message)?"Please remove alcohol, drink, tobacco or shisha words (Thai law).":x.error.message;return}
      pullUpdates();renderDash()};
    view.querySelectorAll("[data-del]").forEach(function(b){b.onclick=async function(){if(!confirm("Delete this update?"))return;await sb.from("np_venue_updates").delete().eq("id",b.dataset.del);pullUpdates();renderDash()}});
  }

  /* Photos (captain and up) – uploaded online so every user sees them */
  function shrinkBlob(file){return new Promise(function(ok){var img=new Image(),u=URL.createObjectURL(file);img.onload=function(){var k=Math.min(1,1400/Math.max(img.width,img.height)),cv=document.createElement("canvas");cv.width=Math.round(img.width*k);cv.height=Math.round(img.height*k);cv.getContext("2d").drawImage(img,0,0,cv.width,cv.height);URL.revokeObjectURL(u);cv.toBlob(ok,"image/jpeg",.82)};img.onerror=function(){URL.revokeObjectURL(u);ok(null)};img.src=u})}
  async function photos(view,v,L,ok){
    var r=await sb.from("np_venue_photos").select("*").eq("venue_id",v).order("created_at");if(!ok())return;
    var rows=r.data||[];
    view.innerHTML='<div class="partner"><h3 style="font-size:16px;margin:0 0 6px">Club photos</h3><p class="small">Your own photos only. The first one is your cover in the app. Up to 6. No bottles, drink brands or smoking in photos (Thai law).</p>'+
      '<div class="gal" style="margin:12px 0">'+rows.map(function(x,i){return '<div class="gi"><img src="'+esc(x.url)+'" alt="Photo '+(i+1)+'">'+(L>=2?'<button data-del="'+x.id+'" aria-label="Remove photo">'+(typeof ico==="function"?ico("close"):"×")+'</button>':'')+'</div>'}).join("")+'</div>'+
      (L>=2&&rows.length<6?'<label class="cta" style="display:block;text-align:center;cursor:pointer">Upload photos<input type="file" id="phIn2" accept="image/*" multiple hidden></label><label class="npm-chk" style="display:flex;gap:8px;margin-top:10px;font-size:14px"><input type="checkbox" id="phOk"> These are our own photos and we have the right to use them.</label>':'')+'<p class="err" id="phM" role="status"></p></div>';
    var inp=view.querySelector("#phIn2");
    if(inp)inp.onchange=async function(e){var m=view.querySelector("#phM");
      if(!view.querySelector("#phOk").checked){m.textContent="Please tick the box first.";inp.value="";return}
      var files=[].slice.call(e.target.files,0,6-rows.length);m.style.color="";m.textContent="Uploading…";
      for(var i=0;i<files.length;i++){var b=await shrinkBlob(files[i]);if(!b)continue;var path=v+"/"+Date.now()+"-"+i+".jpg";
        var up=await sb.storage.from("venue-photos").upload(path,b,{contentType:"image/jpeg"});if(up.error){m.textContent=up.error.message;return}
        var url=sb.storage.from("venue-photos").getPublicUrl(path).data.publicUrl;
        var x=await sb.from("np_venue_photos").insert({venue_id:v,url:url,path:path});if(x.error){m.textContent=x.error.message;return}}
      await pullPhotos();renderDash()};
    view.querySelectorAll("[data-del]").forEach(function(b){b.onclick=async function(){if(!confirm("Remove this photo?"))return;
      var x=rows.find(function(r){return String(r.id)===b.dataset.del});await sb.from("np_venue_photos").delete().eq("id",b.dataset.del);if(x)await sb.storage.from("venue-photos").remove([x.path]);
      await pullPhotos();renderDash()}});
  }

  /* ---------- show updates and photos to every app user ---------- */
  async function pullUpdates(){
    try{var r=await sb.from("np_venue_updates").select("venue_name,kind,body,created_at").gte("created_at",addDays(new Date(),-14).toISOString()).order("created_at",{ascending:false}).limit(50);
      if(!r.error&&r.data&&r.data.length&&typeof store!=="undefined"){store.set("np_lady_updates",r.data.map(function(x){return [x.venue_name||"",x.kind||"Update",x.body]}))}}catch(e){}
  }
  async function pullPhotos(){
    try{var r=await sb.from("np_venue_photos").select("venue_id,url,created_at").order("created_at");
      if(r.error||!r.data||typeof store==="undefined")return;var by={};r.data.forEach(function(x){(by[x.venue_id]=by[x.venue_id]||[]).push(x.url)});
      Object.keys(by).forEach(function(k){store.set("np_photos_"+k,by[k].slice(0,6))});
      ["renderGrid","renderRail"].forEach(function(f){try{if(typeof window[f]==="function")window[f]()}catch(e){}});
    }catch(e){}
  }
  pullUpdates();pullPhotos();

  /* venue list: admins see every venue, partners only the venues they work at */
  var ALLV=null;
  function restrict(){
    var dv=document.getElementById("dVenue");if(!dv)return;
    if(!ALLV||dv.options.length>ALLV.length)ALLV=[].map.call(dv.options,function(o){return [o.value,o.textContent]}).filter(function(x){return x[0]!=="__none"});
    var allow=isAdm?ALLV:ALLV.filter(function(x){return myStaff[x[0]]});
    var key=allow.map(function(x){return x[0]}).join(",");if(dv.dataset.allow===key&&dv.options.length)return;
    var cur=dv.value;dv.innerHTML="";
    if(!allow.length){var o=document.createElement("option");o.value="__none";o.textContent=user?"No venue linked to your account yet":"Log in to see your venue";dv.appendChild(o)}
    allow.forEach(function(x){var o=document.createElement("option");o.value=x[0];o.textContent=x[1];dv.appendChild(o)});
    dv.dataset.allow=key;
    if(allow.some(function(x){return x[0]===cur}))dv.value=cur;
  }
  async function onUser(u){var same=(u&&u.id)===(user&&user.id);user=u;if(same&&u)return;await loadMe();restrict();
    var d=document.getElementById("dash");if(d&&!d.hidden)renderDash()}
  sb.auth.getSession().then(function(r){onUser(r.data.session?r.data.session.user:null)});
  sb.auth.onAuthStateChange(function(e,s){onUser(s?s.user:null)});
})();

/* ===== Agent dashboard (30 Sep 2026): live referred bookings, commission, payouts, share link.
   Admin: approve or reject agents, see what each agent is owed, record payouts. ===== */
(function(){
  if(!window.supabase||typeof panel==="undefined")return;
  var sb=window.supabase.createClient("https://mymtgbmcjbwsnetzwgoy.supabase.co","sb_publishable_ViFodxG8kAENr78Fyp-BwQ_iA_BfAD0");
  var APP="https://namastepattayareservationsindthai.vercel.app/";
  var RATE={agent:0.05,traveller:0.03};
  var ST={pending:"Pending",confirmed:"Confirmed",arrived:"Arrived",completed:"Completed",no_show:"No-show",cancelled:"Cancelled"};
  var user=null,isAdm=false,per="month";
  function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
  function M(n){n=Math.round(Number(n)||0);return "฿"+n.toLocaleString("en-US")} /* dashboards always in baht (bills are in baht) */
  function X(){return typeof ico==="function"?ico("close"):"×"}
  function head(t,id){return '<div style="display:flex;justify-content:space-between;align-items:center;gap:10px"><h2 id="sheetTitle" style="font-size:20px">'+t+'</h2><button class="theme" id="'+id+'" aria-label="Close">'+X()+'</button></div>'}
  function open(h){panel.innerHTML=h;sheet.classList.add("open");document.body.style.overflow="hidden";panel.scrollTop=0}
  function meta(){return (user&&user.user_metadata)||{}}
  function viewAs(){try{return localStorage.getItem("np_view_as")||""}catch(e){return ""}}
  function isAgent(){return /^agent/.test(meta().role||"")||(isAdm&&/^agent/.test(viewAs()))}
  function myCode(){var m=meta(),g="";try{g=(0,eval)("typeof myCode!=='undefined'?myCode:''")}catch(e){}return String(m.ref_code||g||"").toUpperCase()}
  function venueName(id){var c=(typeof CLUBS!=="undefined"?CLUBS:[]).find(function(x){return x.id===id});return c?c.name:id}
  function ymd(d){var x=new Date(d);return x.getFullYear()+"-"+String(x.getMonth()+1).padStart(2,"0")+"-"+String(x.getDate()).padStart(2,"0")}

  /* referral links: ?ref=CODE fills the booking form automatically */
  try{var rq=new URLSearchParams(location.search).get("ref");if(rq&&/^[A-Z0-9]{4,12}$/i.test(rq))localStorage.setItem("np_ref_in",rq.toUpperCase())}catch(e){}
  function fillRef(){var f=document.getElementById("fRef");if(!f||f.value)return;var r="";try{r=localStorage.getItem("np_ref_in")||""}catch(e){}if(r&&r!==myCode()){f.value=r;try{f.dispatchEvent(new Event("input",{bubbles:true}))}catch(e){}}}

  /* ---------- agent dashboard ---------- */
  async function openAgent(){
    if(!user)return;
    var m=meta(),st=m.agent_status||"pending",code=myCode(),rate=isAgent()?RATE.agent:RATE.traveller;
    open('<div class="pbody">'+head(isAgent()?"Agent dashboard":"My referrals","agX")+
      '<div class="lcard hl" style="margin-top:12px"><h4>'+esc(m.agency||m.name||user.email)+'</h4><p class="small">'+(isAgent()?(st==="approved"?"✅ Agent approved · 5% commission":st==="rejected"?"Agent account not approved. Please contact us.":"⏳ Under review. You can already share your code; commission is paid after approval."):"Traveller · 3% referral reward")+'</p></div>'+
      '<div class="refcode"><strong class="notranslate" translate="no">'+esc(code||"—")+'</strong><span class="small">Your code. Clients type it when booking, or use your link.</span></div>'+
      '<div class="rsbtns" style="margin:8px 0 14px"><button class="pill on" id="agShare">Share on WhatsApp</button><button class="pill" id="agCopy">Copy my link</button></div>'+
      '<div class="fields"><label class="full">Period<select id="agP"><option value="month">This month</option><option value="last">Last month</option><option value="all">All time</option></select></label></div>'+
      '<div id="agBody"><p class="small">Loading…</p></div></div>');
    panel.querySelector("#agX").onclick=closeSheet;
    var link=APP+"?ref="+encodeURIComponent(code);
    panel.querySelector("#agShare").onclick=function(){window.open("https://wa.me/?text="+encodeURIComponent("Book clubs, Indian restaurants, tours and more in Pattaya with Namaste Pattaya Reservations: "+link),"_blank")};
    panel.querySelector("#agCopy").onclick=function(){var b=this;(navigator.clipboard?navigator.clipboard.writeText(link):Promise.reject()).then(function(){b.textContent="Copied ✓"},function(){prompt("Copy your link:",link)})};
    var sel=panel.querySelector("#agP");sel.value=per;sel.onchange=function(){per=this.value;draw()};
    var r=await sb.rpc("np_my_referrals"),pay=await sb.from("np_agent_payouts").select("amount,paid_on,note").eq("agent",user.id).order("paid_on",{ascending:false});
    var body=panel.querySelector("#agBody");if(!body)return;
    if(r.error){body.innerHTML='<div class="lcard"><h4>Almost ready</h4><p class="small">'+(/function|does not exist/i.test(r.error.message)?"The agent dashboard is being set up. Please check back soon.":esc(r.error.message))+'</p></div>';return}
    var rows=r.data||[],pays=pay.data||[];
    function draw(){
      var now=new Date(),from=null,to=null;
      if(per==="month"){from=ymd(new Date(now.getFullYear(),now.getMonth(),1))}
      if(per==="last"){from=ymd(new Date(now.getFullYear(),now.getMonth()-1,1));to=ymd(new Date(now.getFullYear(),now.getMonth(),0))}
      var l=rows.filter(function(x){return (!from||x.night>=from)&&(!to||x.night<=to)});
      var live=l.filter(function(x){return x.status!=="cancelled"}),came=l.filter(function(x){return x.status==="arrived"||x.status==="completed"});
      var upcoming=l.filter(function(x){return (x.status==="confirmed"||x.status==="pending")&&x.night>=ymd(now)});
      var sales=came.reduce(function(s,x){return s+Number(x.amount||0)},0);
      var allEarn=rows.filter(function(x){return x.status==="arrived"||x.status==="completed"}).reduce(function(s,x){return s+Number(x.amount||0)*rate},0);
      var paid=pays.reduce(function(s,p){return s+Number(p.amount||0)},0);
      body.innerHTML='<div class="kpis"><div class="kpi"><small>Bookings</small><b>'+live.length+'</b></div><div class="kpi"><small>Guests</small><b>'+live.reduce(function(s,x){return s+(x.guests||0)},0)+'</b></div>'+
        '<div class="kpi"><small>Came (arrived)</small><b>'+came.length+'</b></div><div class="kpi"><small>Sales</small><b>'+M(sales)+'</b></div>'+
        '<div class="kpi"><small>Earned ('+Math.round(rate*100)+'%)</small><b>'+M(sales*rate)+'</b></div><div class="kpi"><small>Coming up</small><b>'+upcoming.length+'</b></div></div>'+
        '<div class="lcard" style="margin-top:12px"><div class="lrow"><div><h4>To be paid to you</h4><p class="small">All time earned '+M(allEarn)+' · paid '+M(paid)+'</p></div><div style="text-align:right"><b style="font-size:20px">'+M(Math.max(0,allEarn-paid))+'</b><br><span class="small">≈ ₹'+Math.round(Math.max(0,allEarn-paid)*((0,eval)("typeof INR_PER_THB!=='undefined'?INR_PER_THB:2.89"))).toLocaleString("en-IN")+'</span></div></div></div>'+
        '<h3 style="font-size:15px;margin:14px 0 8px">Bookings with your code</h3>'+
        (l.length?l.map(function(x){var c=x.status==="arrived"||x.status==="completed";
          return '<div class="lcard"><div class="lrow"><div style="min-width:0"><h4>'+esc(x.guest_name)+' · '+x.guests+' pax</h4><p class="small">'+esc(venueName(x.venue_id))+' · '+new Date(x.night+"T12:00").toLocaleDateString("en-GB",{day:"numeric",month:"short"})+(Number(x.amount)?' · '+M(x.amount):'')+(c?' · you earn '+M(Number(x.amount||0)*rate):'')+'</p></div><span class="status">'+(ST[x.status]||esc(x.status))+'</span></div></div>'}).join(""):'<p class="small">No bookings with your code in this period yet. Share your link to start earning.</p>')+
        (pays.length?'<h3 style="font-size:15px;margin:14px 0 8px">Payments received</h3>'+pays.map(function(p){return '<div class="lcard"><div class="lrow"><div><h4>'+M(p.amount)+'</h4><p class="small">'+new Date(p.paid_on+"T12:00").toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"})+(p.note?' · '+esc(p.note):'')+'</p></div><span class="status">Paid</span></div></div>'}).join(""):'')+
        '<p class="small" style="margin-top:10px">Commission counts when your client arrives. The venue\'s final bill is used when available.</p>';
    }
    draw();
  }
  window.npOpenAgent=openAgent;

  /* ---------- admin: agents ---------- */
  async function openAgentsAdmin(){
    open('<div class="pbody">'+head("Admin · Agents","aaX")+'<div class="fields"><label class="full">Show<select id="aaF"><option value="pending">Waiting for approval</option><option value="approved">Approved</option><option value="rejected">Rejected</option><option value="all">All</option></select></label></div><div id="aaL"><p class="small">Loading…</p></div></div>');
    panel.querySelector("#aaX").onclick=closeSheet;
    var r=await sb.rpc("np_list_agents"),box=panel.querySelector("#aaL");if(!box)return;
    if(r.error){box.innerHTML='<p class="err">'+esc(/function|does not exist/i.test(r.error.message)?"Please run np-agents.sql in Supabase first.":r.error.message)+'</p>';return}
    var rows=r.data||[],f=panel.querySelector("#aaF");f.value=rows.some(function(x){return x.status==="pending"})?"pending":"all";
    function draw(){var l=rows.filter(function(x){return f.value==="all"||x.status===f.value});
      box.innerHTML=l.length?l.map(function(a){var owed=Math.max(0,Number(a.sales||0)*RATE.agent-Number(a.paid||0)),wa=String(a.phone||"").replace(/\D/g,"");
        return '<div class="lcard" data-u="'+a.user_id+'"><div class="lrow"><div style="min-width:0"><h4>'+esc(a.agency||a.name||a.email)+'</h4><p class="small">'+esc([a.name,a.role==="agent_th"?"Thai agent":"Indian agent",a.city].filter(Boolean).join(" · "))+'</p>'+
          '<p class="small">'+esc(a.email)+(a.phone?' · <a href="tel:'+esc(a.phone)+'">'+esc(a.phone)+'</a>'+(wa?' · <a href="https://wa.me/'+wa+'" target="_blank" rel="noopener">WhatsApp</a>':''):'')+'</p>'+
          (a.reg_no?'<p class="small">Reg. no. '+esc(a.reg_no)+'</p>':'')+'<p class="small">Code <b>'+esc(a.ref_code||"—")+'</b> · '+a.bookings+' bookings · '+a.came+' came · sales '+M(a.sales)+'</p>'+
          '<p class="small">Owed <b>'+M(owed)+'</b> · paid '+M(a.paid)+'</p></div><span class="status">'+esc(a.status)+'</span></div>'+
          '<div class="rsbtns">'+(a.status!=="approved"?'<button class="pill on" data-s="approved">Approve</button>':'')+(a.status!=="rejected"?'<button class="pill" data-s="rejected">Reject</button>':'')+(owed>0?'<button class="pill" data-pay="'+Math.round(owed)+'">Record payout</button>':'')+'</div></div>'}).join(""):'<p class="small">No agents here.</p>';
      box.querySelectorAll("[data-s]").forEach(function(b){b.onclick=async function(){var id=b.closest("[data-u]").dataset.u;
        if(b.dataset.s==="rejected"&&!confirm("Reject this agent?"))return;b.disabled=true;
        var x=await sb.rpc("np_set_agent_status",{p_user:id,p_status:b.dataset.s});if(x.error){alert(x.error.message);b.disabled=false;return}
        rows.forEach(function(a){if(a.user_id===id)a.status=b.dataset.s});draw()}});
      box.querySelectorAll("[data-pay]").forEach(function(b){b.onclick=async function(){var id=b.closest("[data-u]").dataset.u;
        var v=prompt("Amount paid to this agent (baht):",b.dataset.pay);if(v===null)return;var n=parseFloat(String(v).replace(/[^0-9.]/g,""));if(!(n>0))return;
        var note=prompt("Note (optional, e.g. bank transfer ref):","")||null;
        var x=await sb.from("np_agent_payouts").insert({agent:id,amount:n,note:note});if(x.error){alert(x.error.message);return}
        rows.forEach(function(a){if(a.user_id===id)a.paid=Number(a.paid||0)+n});draw()}});
    }
    f.onchange=draw;draw();
  }
  window.npAgentsAdmin=openAgentsAdmin;

  /* ---------- buttons ---------- */
  function addButtons(){
    var acc=panel.querySelector("#umAcc");
    if(acc&&user&&!panel.querySelector("#npAgBtn")){var b=document.createElement("button");b.className="cta";b.id="npAgBtn";b.textContent=isAgent()?"Agent dashboard":"My referrals & earnings";b.onclick=openAgent;acc.insertAdjacentElement("beforebegin",b)}
    var adm=panel.querySelector(".lcard.adm");
    if(adm&&isAdm&&!adm.querySelector("#npAgAdm")){var a=document.createElement("button");a.className="pill";a.id="npAgAdm";a.textContent="Agents";a.onclick=openAgentsAdmin;var v=adm.querySelector("#adVip");if(v)v.insertAdjacentElement("afterend",a);else adm.appendChild(a)}
    var earn=document.getElementById("earn");
    if(earn&&user&&!document.getElementById("npAgEarn")){var c=document.createElement("div");c.id="npAgEarn";c.className="lcard hl";c.style.margin="10px 0 14px";
      c.innerHTML='<div class="lrow"><div><h4>'+(isAgent()?"Agent dashboard":"My referrals & earnings")+'</h4><p class="small">Live bookings with your code, what you earned, and payments.</p></div><button class="pill on">Open</button></div>';
      c.querySelector("button").onclick=openAgent;var t=earn.querySelector(".sectiontitle,h2");if(t)t.insertAdjacentElement("afterend",c);else earn.insertBefore(c,earn.firstChild)}
    fillRef();
  }
  var busy=false;
  new MutationObserver(function(){if(busy)return;busy=true;requestAnimationFrame(function(){busy=false;addButtons()})}).observe(document.body,{childList:true,subtree:true});
  async function onUser(u){user=u;isAdm=false;var e=document.getElementById("npAgEarn");if(e)e.remove();
    if(u){try{var a=await sb.rpc("np_is_admin");isAdm=!a.error&&a.data===true}catch(x){}}addButtons()}
  sb.auth.getSession().then(function(r){onUser(r.data.session?r.data.session.user:null)});
  sb.auth.onAuthStateChange(function(e,s){onUser(s?s.user:null)});
})();

/* ===== Admin Control Center (30 Sep 2026): one place for every dashboard + booking inbox
   with live notifications (bell, sound, phone notification) and Telegram alerts.
   Also saves bookings from guests who are not logged in, so no booking is lost. ===== */
(function(){
  if(!window.supabase||typeof panel==="undefined")return;
  var sb=window.supabase.createClient("https://mymtgbmcjbwsnetzwgoy.supabase.co","sb_publishable_ViFodxG8kAENr78Fyp-BwQ_iA_BfAD0");
  var user=null,isAdm=false,items=[],filter="new",q="",chan=null,unseen=0,loaded=false,open=false;
  var ST={pending:"Pending",confirmed:"Confirmed",arrived:"Arrived",completed:"Completed",no_show:"No-show",cancelled:"Cancelled",new:"New",in_progress:"Preparing",done:"Done"};
  function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
  function M(n){n=Math.round(Number(n)||0);return "฿"+n.toLocaleString("en-US")} /* dashboards always in baht (bills are in baht) */
  function X(){return typeof ico==="function"?ico("close"):"×"}
  function ymd(d){var x=new Date(d);return x.getFullYear()+"-"+String(x.getMonth()+1).padStart(2,"0")+"-"+String(x.getDate()).padStart(2,"0")}
  function club(id){return (typeof CLUBS!=="undefined"?CLUBS:[]).find(function(x){return x.id===id})}
  function vname(id,fb){var c=club(id);return c?c.name:(fb||(id==="vip"?"Package / VIP request":String(id||"").replace(/-/g," ")))}
  function catName(id,fb){var c=club(id),k=(c&&c.cat)||fb||"";return (typeof CATNAME!=="undefined"&&CATNAME[k])||k}

  /* ---------- guests without an account: save their booking online too ---------- */
  if(typeof store!=="undefined"&&typeof store.set==="function"){
    var _set=store.set,prev=(typeof bookings!=="undefined"&&bookings)?bookings.length:0;
    store.set=function(key,val){
      try{if(key==="np_bookings"&&Array.isArray(val)){if(val.length>prev&&val[0])guestSave(val[0]);prev=val.length}}catch(e){}
      return _set.apply(this,arguments);
    };
  }
  function guestSave(bk){
    if(!bk||!/^NP/.test(bk.code||"")||!bk.club)return;
    sb.auth.getSession().then(function(r){
      if(r.data&&r.data.session)return; /* logged-in bookings are saved by the club dashboard sync */
      sb.from("np_bookings").insert({code:bk.code,venue_id:bk.club,customer_id:null,name:bk.name||"Guest",phone:bk.phone||null,night:ymd(bk.date||new Date()),
        time:bk.time||null,guests:parseInt(bk.guests,10)||1,package:bk.pkg||null,total:Number(bk.total)||0,ref:bk.ref||null,source:"app",status:"confirmed"}).then(function(){},function(){});
    });
  }

  /* ---------- sound + phone notification ---------- */
  function beep(){try{var C=window.AudioContext||window.webkitAudioContext;if(!C)return;var c=new C(),t=c.currentTime;
    [0,0.18].forEach(function(d,i){var o=c.createOscillator(),g=c.createGain();o.type="sine";o.frequency.value=i?1175:880;g.gain.setValueAtTime(0.0001,t+d);g.gain.exponentialRampToValueAtTime(0.3,t+d+0.02);g.gain.exponentialRampToValueAtTime(0.0001,t+d+0.25);o.connect(g);g.connect(c.destination);o.start(t+d);o.stop(t+d+0.3)})}catch(e){}}
  function notify(title,body){
    try{if(!("Notification" in window)||Notification.permission!=="granted")return;
      var opt={body:body,tag:"np-"+Date.now(),icon:"photos/icon-192.png"};
      if(navigator.serviceWorker&&navigator.serviceWorker.getRegistration)navigator.serviceWorker.getRegistration().then(function(reg){if(reg&&reg.showNotification)reg.showNotification(title,opt);else new Notification(title,opt)},function(){new Notification(title,opt)});
      else new Notification(title,opt);
    }catch(e){}
  }

  /* ---------- data ---------- */
  async function load(){
    var since=new Date();since.setDate(since.getDate()-60);
    var b=await sb.from("np_bookings").select("*").gte("night",ymd(since)).order("night",{ascending:false}).limit(600);
    var o=await sb.from("np_orders").select("*").order("created_at",{ascending:false}).limit(300);
    var map={};
    (b.data||[]).forEach(function(x){map[x.code||("b"+x.id)]={t:"b",id:x.id,code:x.code,venue:x.venue_id,vname:vname(x.venue_id),cat:catName(x.venue_id),name:x.name,phone:x.phone,night:x.night,time:x.time,guests:x.guests,pkg:x.package,total:Number(x.final_bill!=null?x.final_bill:x.total)||0,status:x.status,source:x.source,ref:x.ref,seen:!!x.admin_seen,created:x.created_at,guest:!x.customer_id,advPct:x.advance_pct||0,advAmt:x.advance_amount,advPaid:!!x.advance_paid}});
    (o.data||[]).forEach(function(x){var k=x.code||("o"+x.id),e=map[k];
      var row={t:"o",id:x.id,code:x.code,venue:x.venue_id,vname:x.venue_name||vname(x.venue_id),cat:catName(x.venue_id,x.category),name:x.customer_name,phone:x.customer_phone,night:String(x.booking_date||"").slice(0,10),time:x.booking_time,guests:x.guests,pkg:x.package,total:Number(x.total)||0,status:x.status,source:"app",order_type:x.order_type,address:x.delivery_address||((x.category==="rides"||x.category==="mall")?x.note:null),ocat:x.category,seen:!!x.admin_seen,created:x.created_at};
      if(e){e.order=row;e.order_type=x.order_type;e.address=x.delivery_address;e.seen=e.seen&&row.seen;e.ostatus=x.status}else map[k]=row});
    items=Object.keys(map).map(function(k){return map[k]}).sort(function(a,b){return String(b.created||b.night).localeCompare(String(a.created||a.night))});
    unseen=items.filter(function(x){return !x.seen&&x.status!=="cancelled"}).length;loaded=true;bell();
  }
  function subscribe(){
    if(chan){sb.removeChannel(chan);chan=null}
    chan=sb.channel("np-admin-inbox")
      .on("postgres_changes",{event:"INSERT",schema:"public",table:"np_bookings"},function(ev){fresh("New booking",ev.new.name,ev.new.venue_id,ev.new.night,ev.new.guests)})
      .on("postgres_changes",{event:"INSERT",schema:"public",table:"np_orders"},function(ev){fresh(ev.new.category==="rides"?"New ride request":ev.new.category==="mall"?"New Namaste Mall order":"New restaurant order",ev.new.customer_name,ev.new.venue_id,ev.new.booking_date,ev.new.guests,ev.new.venue_name)})
      .on("postgres_changes",{event:"UPDATE",schema:"public",table:"np_bookings"},function(){soft()})
      .on("postgres_changes",{event:"UPDATE",schema:"public",table:"np_orders"},function(){soft()})
      .subscribe();
  }
  var st=null;function soft(){clearTimeout(st);st=setTimeout(function(){load().then(function(){if(open)draw()})},600)}
  function fresh(kind,name,venue,night,guests,vn){
    beep();notify("🔔 "+kind,(name||"Guest")+" · "+vname(venue,vn)+(night?" · "+String(night).slice(0,10):"")+(guests?" · "+guests+" pax":""));
    toast("🔔 "+kind+": "+(name||"Guest")+" · "+vname(venue,vn));soft();
  }
  function toast(t){var d=document.createElement("div");d.className="npcc-toast";d.textContent=t;d.onclick=function(){d.remove();openCC()};document.body.appendChild(d);setTimeout(function(){d.remove()},7000)}

  /* ---------- styles ---------- */
  if(!document.getElementById("npccCss")){
    var s=document.createElement("style");s.id="npccCss";
    s.textContent='#npBell{position:fixed;left:14px;bottom:calc(96px + env(safe-area-inset-bottom));z-index:60;width:52px;height:52px;border-radius:50%;border:1px solid rgba(233,185,73,.7);background:rgba(18,14,30,.95);color:#E9B949;display:none;align-items:center;justify-content:center;box-shadow:0 0 16px rgba(233,185,73,.25);cursor:pointer}'+
      '#npBell.show{display:flex}#npBell b{position:absolute;top:-4px;right:-4px;min-width:22px;height:22px;padding:0 6px;border-radius:11px;background:#E5484D;color:#fff;font-size:12px;line-height:22px;text-align:center}'+
      '.npcc-toast{position:fixed;left:12px;right:12px;top:calc(12px + env(safe-area-inset-top));z-index:10000;padding:14px 16px;border-radius:16px;background:rgba(18,14,30,.97);border:1px solid #E9B949;color:#fff;font-weight:600;box-shadow:0 8px 24px rgba(0,0,0,.4);cursor:pointer}'+
      '.npcc-tabs{display:flex;gap:6px;margin:12px 0}.npcc-tabs button{flex:1;padding:10px 6px;border-radius:12px;font:inherit;font-weight:600;font-size:14px;color:var(--ink,#fff);background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.14)}.npcc-tabs button[aria-selected="true"]{background:#E9B949;border-color:#E9B949;color:#1a1026}'+
      '.npcc-chips{display:flex;gap:6px;overflow-x:auto;padding-bottom:6px;scrollbar-width:none}.npcc-chips::-webkit-scrollbar{display:none}.npcc-chips button{flex:0 0 auto;padding:7px 12px;border-radius:999px;font:inherit;font-size:13px;font-weight:600;color:var(--ink,#fff);background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.18)}.npcc-chips button.on{border-color:#ED93B1;background:rgba(237,147,177,.18)}'+
      '.npcc-it{border-radius:16px;padding:12px 14px;margin:0 0 10px;background:rgba(16,13,28,.62);border:1px solid rgba(255,255,255,.12)}.npcc-it.new{border-color:#E9B949;box-shadow:0 0 12px rgba(233,185,73,.18)}'+
      '.npcc-it .top{display:flex;justify-content:space-between;gap:8px;align-items:flex-start}.npcc-it h4{margin:0;font-size:15px}.npcc-it p{margin:3px 0 0;font-size:13px;opacity:.85}.npcc-it .dot{display:inline-block;width:8px;height:8px;border-radius:50%;background:#E9B949;margin-right:6px}'+
      '.npcc-it .acts{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}.npcc-it .acts a,.npcc-it .acts button{padding:7px 12px;border-radius:999px;font:inherit;font-size:13px;font-weight:600;text-decoration:none;color:var(--ink,#fff);background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.2)}.npcc-it .acts .pri{background:#E9B949;border-color:#E9B949;color:#1a1026}'+
      '.npcc-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}.npcc-grid button{text-align:left;padding:14px;border-radius:16px;font:inherit;color:var(--ink,#fff);background:rgba(16,13,28,.62);border:1px solid rgba(255,255,255,.12);cursor:pointer}.npcc-grid b{display:block;font-size:15px}.npcc-grid small{display:block;opacity:.75;margin-top:4px;font-size:12px}.npcc-grid .n{color:#E9B949;font-weight:700}'+
      '.npcc-kpi{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:0 0 12px}.npcc-kpi div{padding:10px;border-radius:14px;background:rgba(255,255,255,.05);text-align:center}.npcc-kpi b{display:block;font-size:20px;color:#E9B949}.npcc-kpi small{font-size:11px;opacity:.8}';
    document.head.appendChild(s);
  }
  var BELL='<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"/></svg>';
  function bell(){
    var b=document.getElementById("npBell");
    if(!b){b=document.createElement("button");b.id="npBell";b.type="button";b.innerHTML=BELL+'<b hidden></b>';b.onclick=openCC;document.body.appendChild(b)}
    b.classList.toggle("show",isAdm);b.setAttribute("aria-label","Control Center, "+unseen+" new bookings");
    var n=b.querySelector("b");n.hidden=!unseen;n.textContent=unseen>99?"99+":unseen;
  }

  /* ---------- Control Center ---------- */
  var tab="inbox";
  function openCC(){if(!isAdm)return;open=true;
    panel.innerHTML='<div class="pbody" id="npCC"><div style="display:flex;justify-content:space-between;align-items:center;gap:10px"><h2 id="sheetTitle" style="font-size:20px">Control Center</h2><button class="theme" id="ccX" aria-label="Close">'+X()+'</button></div>'+
      '<div class="npcc-tabs" role="tablist"><button role="tab" data-t="inbox">Inbox'+(unseen?' ('+unseen+')':'')+'</button><button role="tab" data-t="dash">All dashboards</button><button role="tab" data-t="alerts">Alerts</button></div><div id="ccBody"></div></div>';
    sheet.classList.add("open");document.body.style.overflow="hidden";panel.scrollTop=0;
    panel.querySelector("#ccX").onclick=function(){open=false;closeSheet()};
    panel.querySelectorAll("[data-t]").forEach(function(b){b.onclick=function(){tab=b.dataset.t;draw()}});
    if(!loaded)load().then(draw);draw();
  }
  window.npControlCenter=openCC;
  function draw(){
    var box=panel.querySelector("#ccBody");if(!box)return;
    panel.querySelectorAll("[data-t]").forEach(function(b){b.setAttribute("aria-selected",b.dataset.t===tab)});
    var ib=panel.querySelector('[data-t="inbox"]');if(ib)ib.textContent="Inbox"+(unseen?" ("+unseen+")":"");
    if(tab==="inbox")drawInbox(box);else if(tab==="dash")drawDash(box);else drawAlerts(box);
  }
  function drawInbox(box){
    if(!loaded){box.innerHTML='<p class="small">Loading…</p>';return}
    var today=ymd(new Date());
    var F={new:["New",function(x){return !x.seen&&x.status!=="cancelled"}],today:["Tonight / today",function(x){return x.night===today}],up:["Upcoming",function(x){return x.night>=today&&x.status!=="cancelled"}],
      adv:["Awaiting advance",function(x){return x.advPct&&!x.advPaid&&x.status!=="cancelled"}],food:["Restaurant orders",function(x){return (x.t==="o"||!!x.order)&&x.ocat!=="rides"&&x.ocat!=="mall"}],rides:["Rides",function(x){return x.ocat==="rides"}],mall:["Namaste Mall",function(x){return x.ocat==="mall"}],deliv:["Deliveries",function(x){return x.order_type==="delivery"}],guest:["Guests (no account)",function(x){return !!x.guest}],all:["All (60 days)",function(){return true}]};
    var tn=items.filter(function(x){return x.night===today&&x.status!=="cancelled"});
    var l=items.filter(F[filter][1]).filter(function(x){if(!q)return true;var t=[x.code,x.name,x.phone,x.vname,x.cat,x.pkg].join(" ").toLowerCase();return t.indexOf(q.toLowerCase())>-1});
    box.innerHTML='<div class="npcc-kpi"><div><b>'+unseen+'</b><small>New</small></div><div><b>'+tn.length+'</b><small>Today</small></div><div><b>'+M(tn.reduce(function(s,x){return s+x.total},0))+'</b><small>Today value</small></div></div>'+
      '<div class="npcc-chips">'+Object.keys(F).map(function(k){return '<button data-f="'+k+'" class="'+(k===filter?'on':'')+'">'+F[k][0]+'</button>'}).join("")+'</div>'+
      '<div class="fields" style="margin:6px 0 10px"><label class="full">Search<input id="ccQ" type="search" value="'+esc(q)+'" placeholder="Name, phone, code, venue"></label></div>'+
      (unseen&&filter==="new"?'<button class="cta ghost" id="ccAll" style="margin:0 0 10px">Mark all as handled</button>':'')+
      (l.length?l.map(card).join(""):'<p class="small">'+(filter==="new"?"All caught up. No new bookings. 🎉":"Nothing here.")+'</p>');
    box.querySelectorAll("[data-f]").forEach(function(b){b.onclick=function(){filter=b.dataset.f;draw()}});
    box.querySelector("#ccQ").oninput=function(){q=this.value;var p=this.selectionStart;drawInbox(box);var i=box.querySelector("#ccQ");i.focus();try{i.setSelectionRange(p,p)}catch(e){}};
    if(box.querySelector("#ccAll"))box.querySelector("#ccAll").onclick=async function(){this.disabled=true;
      var bs=items.filter(function(x){return !x.seen}),bi=bs.filter(function(x){return x.t==="b"}).map(function(x){return x.id}),oi=bs.map(function(x){return x.t==="o"?x.id:(x.order&&x.order.id)}).filter(Boolean);
      if(bi.length)await sb.from("np_bookings").update({admin_seen:true}).in("id",bi);if(oi.length)await sb.from("np_orders").update({admin_seen:true}).in("id",oi);
      await load();draw()};
    box.querySelectorAll("[data-k]").forEach(function(c){var x=items.find(function(i){return (i.code||i.id)+""===c.dataset.k});if(!x)return;
      c.querySelectorAll("[data-a]").forEach(function(b){b.onclick=function(){act(x,b.dataset.a,b)}})});
  }
  function card(x){
    var st=x.ostatus||x.status,wa=String(x.phone||"").replace(/\D/g,""),food=x.t==="o"||!!x.order;
    var type=x.ocat==="rides"?"🚕 Ride":x.ocat==="mall"?(x.order_type==="delivery"?"🛍️ Mall · GrabExpress delivery":"🛍️ Mall · pick up"):x.order_type==="delivery"?"🛵 Delivery":x.order_type==="takeaway"?"🥡 Takeaway":food?"🍽 Dine-in":x.venue==="vip"?"🎁 Package":"🎟 Booking";
    return '<div class="npcc-it'+(x.seen?'':' new')+'" data-k="'+esc(x.code||x.id)+'"><div class="top"><div style="min-width:0"><h4>'+(x.seen?'':'<span class="dot"></span>')+esc(x.name||"Guest")+(x.guests?' · '+x.guests+' pax':'')+'</h4>'+
      '<p>'+type+' · <b>'+esc(x.vname)+'</b>'+(x.cat?' · '+esc(x.cat):'')+'</p>'+
      '<p>📅 '+(x.night?new Date(x.night+"T12:00").toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short"}):"")+(x.time?' · '+esc(x.time):'')+(x.total?' · '+M(x.total):'')+'</p>'+
      (x.pkg?'<p>📦 '+esc(x.pkg)+'</p>':'')+(x.address?'<p>🏠 '+esc(x.address)+'</p>':'')+
      (x.advPct?'<p><span class="npadv-chip'+(x.advPaid?' paid':'')+'">'+(x.advPaid?'Advance paid ฿'+Math.round(x.advAmt||0).toLocaleString("en-US"):'Advance '+x.advPct+'% NOT paid · ฿'+Math.round(x.advAmt||0).toLocaleString("en-US"))+'</span></p>':'')+
      '<p class="small">'+esc(x.code||"")+(x.ref?' · agent '+esc(x.ref):'')+(x.guest?' · no account':'')+'</p></div><span class="status">'+esc(ST[st]||st||"")+'</span></div>'+
      '<div class="acts">'+(x.phone?'<a href="tel:'+esc(x.phone)+'">Call</a>'+(wa?'<a href="https://wa.me/'+wa+'" target="_blank" rel="noopener">WhatsApp</a>':''):'')+
      (!x.seen?'<button class="pri" data-a="seen">Handled ✓</button>':'<button data-a="unseen">Mark new</button>')+
      (x.t==="b"&&st==="pending"?'<button data-a="confirm">Confirm</button>':'')+
      (st!=="cancelled"&&st!=="completed"&&st!=="done"?'<button data-a="cancel">Cancel</button>':'')+
      (food?'<button data-a="rest">Restaurant dashboard</button>':(x.venue!=="vip"?'<button data-a="club">Open dashboard</button>':''))+'</div></div>';
  }
  async function act(x,a,b){
    b.disabled=true;var r=null;
    function both(patch,opatch){var p=[];if(x.t==="b")p.push(sb.from("np_bookings").update(patch).eq("id",x.id));var oid=x.t==="o"?x.id:(x.order&&x.order.id);if(oid)p.push(sb.from("np_orders").update(opatch||patch).eq("id",oid));return Promise.all(p)}
    if(a==="seen")r=await both({admin_seen:true});
    else if(a==="unseen")r=await both({admin_seen:false});
    else if(a==="confirm")r=await both({status:"confirmed",admin_seen:true},{status:"confirmed",admin_seen:true});
    else if(a==="cancel"){if(!confirm("Cancel "+(x.code||"this booking")+" for "+(x.name||"guest")+"? Please also call or WhatsApp the guest.")){b.disabled=false;return}
      r=await both({status:"cancelled",admin_seen:true},{status:"cancelled",admin_seen:true})}
    else if(a==="rest"){location.href="restaurant.html";return}
    else if(a==="club"){open=false;closeSheet();if(typeof go==="function")go("dash");setTimeout(function(){var dv=document.getElementById("dVenue");if(dv&&[].some.call(dv.options,function(o){return o.value===x.venue})){dv.value=x.venue;try{dTab="res"}catch(e){}if(typeof renderDash==="function")renderDash()}},300);return}
    var err=(r||[]).find&&(r||[]).find(function(y){return y&&y.error});if(err){alert(err.error.message);b.disabled=false;return}
    await load();draw();
  }
  async function cnt(q){try{var r=await q;return r.error?null:(r.count||0)}catch(e){return null}}
  async function drawDash(box){
    box.innerHTML='<p class="small">Loading…</p>';
    var w=await cnt(sb.from("np_meet_profiles").select("user_id",{count:"exact",head:true}).eq("verify_status","pending"));
    var rp=await cnt(sb.from("np_meet_reports").select("id",{count:"exact",head:true}).eq("status","open"));
    var pr=await cnt(sb.from("np_partner_requests").select("id",{count:"exact",head:true}).eq("status","pending"));
    var ag=null;try{var a=await sb.rpc("np_list_agents");if(!a.error)ag=(a.data||[]).filter(function(x){return x.status==="pending"}).length}catch(e){}
    function n(v,t){return v==null?'<small>'+t+'</small>':'<small><span class="n">'+v+'</span> '+t+'</small>'}
    var L=[["inbox","📥 Booking inbox",n(unseen,"new bookings")],["club","🎉 Club dashboard","<small>Reservations, CRM, reports</small>"],["rest","🍛 Restaurant dashboard","<small>Orders, deliveries, staff</small>"],
      ["partners","🏪 Partner sign-ups",n(pr,"waiting")],["women","✅ Verify women",n(w,"selfies waiting")],["reports","🚩 Meet reports",n(rp,"open reports")],
      ["agents","🤝 Agents",n(ag,"waiting for approval")],["analytics","📊 App analytics","<small>Visitors and bookings funnel</small>"],["users","👥 All users","<small>Supabase (opens browser)</small>"],["alerts","🔔 Alerts","<small>Telegram and phone alerts</small>"]];
    box.innerHTML='<div class="npcc-grid">'+L.map(function(x){return '<button data-d="'+x[0]+'"><b>'+x[1]+'</b>'+x[2]+'</button>'}).join("")+'</div>';
    box.querySelectorAll("[data-d]").forEach(function(b){b.onclick=function(){var d=b.dataset.d;
      if(d==="inbox"||d==="alerts"){tab=d;draw();return}
      if(d==="club"){open=false;closeSheet();if(typeof go==="function")go("dash");return}
      if(d==="rest"||d==="partners"){location.href="restaurant.html";return}
      if(d==="women"||d==="reports"){if(window.npMeetAdmin)window.npMeetAdmin();return}
      if(d==="agents"){if(window.npAgentsAdmin)window.npAgentsAdmin();return}
      if(d==="analytics"){if(window.npReport)window.npReport();return}
      if(d==="users")window.open("https://supabase.com/dashboard/project/mymtgbmcjbwsnetzwgoy/auth/users","_blank");
    }});
  }
  async function drawAlerts(box){
    var ready=false;try{var r=await sb.rpc("np_alert_ready");ready=!r.error&&r.data===true}catch(e){}
    var perm=("Notification" in window)?Notification.permission:"unsupported";
    box.innerHTML='<div class="lcard"><h4>📱 Phone notifications</h4><p class="small">Sound + a phone notification for every new booking while the app is open (also in the background).</p>'+
      '<p class="small">Status: <b>'+(perm==="granted"?"On ✅":perm==="denied"?"Blocked. Allow notifications for this site in Chrome settings.":perm==="unsupported"?"Not supported on this browser":"Off")+'</b></p>'+
      (perm==="default"?'<button class="cta" id="alPh">Turn on phone notifications</button>':'')+'<button class="cta ghost" id="alBeep">Test sound</button></div>'+
      '<div class="lcard" style="margin-top:12px"><h4>✈️ Telegram alerts '+(ready?'<span class="status">On ✅</span>':'')+'</h4><p class="small">Get a Telegram message for every booking, even when the app is closed. Free.</p>'+
      '<p class="small"><b>Setup (5 min):</b><br>1. In Telegram, open <b>@BotFather</b> → send <b>/newbot</b> → give it a name → copy the <b>token</b>.<br>2. Open your new bot and send it <b>hi</b>.<br>3. Open this link in Chrome (put your token in place of TOKEN):<br><span class="notranslate" translate="no">api.telegram.org/botTOKEN/getUpdates</span><br>Copy the number after <b>"chat":{"id":</b></p>'+
      '<div class="fields"><label class="full">Bot token<input id="alT" placeholder="123456:ABC-..." autocomplete="off"></label><label class="full">Chat id<input id="alC" inputmode="numeric" placeholder="e.g. 987654321"></label></div>'+
      '<button class="cta" id="alSave">Save</button>'+(ready?'<button class="cta ghost" id="alTest">Send test message</button>':'')+'<p class="err" id="alM" role="status"></p></div>';
    var ph=box.querySelector("#alPh");if(ph)ph.onclick=function(){Notification.requestPermission().then(function(){drawAlerts(box);notify("🔔 Notifications are on","You will see new bookings here.")})};
    box.querySelector("#alBeep").onclick=beep;
    box.querySelector("#alSave").onclick=async function(){var m=box.querySelector("#alM"),t=box.querySelector("#alT").value.trim(),c=box.querySelector("#alC").value.trim();m.style.color="";
      if(!/^\d+:[\w-]{20,}$/.test(t)){m.textContent="That doesn't look like a bot token. It looks like 123456:ABC…";return}
      if(!/^-?\d{4,}$/.test(c)){m.textContent="The chat id is a number, like 987654321.";return}
      this.disabled=true;var r=await sb.rpc("np_set_alert_settings",{p_token:t,p_chat:c});this.disabled=false;
      if(r.error){m.textContent=/function|does not exist/i.test(r.error.message)?"Please run np-inbox.sql in Supabase first.":r.error.message;return}
      await sb.rpc("np_test_alert");m.style.color="var(--ok)";m.textContent="Saved. A test message was sent to your Telegram.";setTimeout(function(){drawAlerts(box)},1500)};
    var te=box.querySelector("#alTest");if(te)te.onclick=async function(){var r=await sb.rpc("np_test_alert");var m=box.querySelector("#alM");m.style.color=r.error?"":"var(--ok)";m.textContent=r.error?r.error.message:"Test message sent. Check Telegram."};
  }

  /* ---------- Control Center button in the account menu ---------- */
  new MutationObserver(function(){
    if(!isAdm)return;var adm=panel.querySelector(".lcard.adm");
    if(adm&&!adm.querySelector("#npCCBtn")){var b=document.createElement("button");b.id="npCCBtn";b.className="cta";b.style.margin="8px 0";b.textContent="Control Center"+(unseen?" · "+unseen+" new":"");b.onclick=openCC;
      var h=adm.querySelector("h4");if(h)h.insertAdjacentElement("beforebegin",b);else adm.insertBefore(b,adm.firstChild)}
  }).observe(panel,{childList:true,subtree:true});
  new MutationObserver(function(){if(open&&!sheet.classList.contains("open"))open=false}).observe(sheet,{attributes:true,attributeFilter:["class"]});

  async function onUser(u){
    var same=(u&&u.id)===(user&&user.id);user=u;if(same)return;
    isAdm=false;if(chan){sb.removeChannel(chan);chan=null}
    if(u){try{var a=await sb.rpc("np_is_admin");isAdm=!a.error&&a.data===true}catch(e){}}
    bell();if(isAdm){await load();subscribe();bell()}
  }
  sb.auth.getSession().then(function(r){onUser(r.data.session?r.data.session.user:null)});
  sb.auth.onAuthStateChange(function(e,s){onUser(s?s.user:null)});
  document.addEventListener("visibilitychange",function(){if(!document.hidden&&isAdm)load().then(function(){if(open)draw()})});
})();

/* ===== "Tonight" ticker at the top of Home: real venues from the app, and every name opens that venue ===== */
(function(){
  if(typeof CLUBS==="undefined")return;
  var SVC=["grocery","indian","restaurants","hotels","spa","tours","water","golf","yacht","rental","airport","shopping","events","medical","concierge"];
  function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
  if(!document.getElementById("npTickCss")){var st=document.createElement("style");st.id="npTickCss";
    st.textContent='.ticker .track .nptk{background:none;border:0;padding:4px 2px;margin:0;font:inherit;color:inherit;cursor:pointer;white-space:nowrap}.ticker .track .nptk b{color:var(--ink,#fff);font-weight:600;text-decoration:underline;text-decoration-color:rgba(237,147,177,.6);text-underline-offset:3px}'+
      '.ticker:active .track,.ticker:focus-within .track{animation-play-state:paused}';document.head.appendChild(st)}
  function pick(){
    var L=CLUBS.filter(function(c){return c&&c.id!=="np-test-restaurant"&&c.name});
    var night=L.filter(function(c){return SVC.indexOf(c.cat)<0}).slice(0,6);
    var food=L.filter(function(c){return c.cat==="indian"||c.cat==="restaurants"}).slice(0,2);
    var fun=L.filter(function(c){return c.cat==="yacht"||c.cat==="tours"}).slice(0,1);
    return night.concat(food,fun);
  }
  function line(c){var open=String(c.open||"").split(/\s[—–-]\s|–/)[0].trim();
    return (/\d/.test(open)?"from "+open:(c.music||c.sub||c.area||"tap to book"))+(c.area&&/\d/.test(open)?" · "+c.area:"")}
  function fill(){
    var tt=document.getElementById("tickTrack");if(!tt||tt.dataset.np==="1")return;
    var v=pick();if(!v.length)return;
    var h=v.map(function(c){return '<button type="button" class="nptk" data-tk="'+esc(c.id)+'"><b>'+esc(c.name)+'</b> · '+esc(line(c))+'</button>'}).join("");
    tt.innerHTML=h+h;tt.dataset.np="1";
  }
  document.addEventListener("click",function(e){
    var b=e.target.closest&&e.target.closest("#tickTrack [data-tk]");if(!b)return;
    e.preventDefault();e.stopPropagation();
    var c=CLUBS.find(function(x){return x.id===b.dataset.tk});if(!c)return;
    try{if(window.npTrack)window.npTrack("place_view",c.id)}catch(x){}
    if(typeof openClub==="function")openClub(c);
  },true);
  fill();
  var tt=document.getElementById("tickTrack");
  if(tt)new MutationObserver(function(){if(tt.dataset.np!=="1"||!tt.querySelector("[data-tk]")){tt.dataset.np="";fill()}}).observe(tt,{childList:true});
  window.addEventListener("load",function(){var t=document.getElementById("tickTrack");if(t&&!t.querySelector("[data-tk]")){t.dataset.np="";fill()}});
})();

/* ===== Currency by country: phone in Thailand = baht (฿), phone in India = rupees (₹).
   Uses the phone's time zone (no location permission needed). If the person taps the ₹/฿ button
   themselves, their choice is kept until they travel to the other country. ===== */
(function(){
  var btn=document.getElementById("curBtn");if(!btn)return;
  function country(){
    var tz="";try{tz=Intl.DateTimeFormat().resolvedOptions().timeZone||""}catch(e){}
    if(/^Asia\/(Bangkok)$/.test(tz))return "TH";
    if(/^Asia\/(Kolkata|Calcutta)$/.test(tz))return "IN";
    return "";
  }
  function curNow(){try{return (0,eval)("typeof cur!=='undefined'?cur:''")}catch(e){return ""}}
  var auto=false;
  btn.addEventListener("click",function(){
    if(auto)return;
    try{localStorage.setItem("np_cur_manual",country()||"?")}catch(e){}
  },true);
  function apply(){
    var c=country();if(!c)return;
    var manual="";try{manual=localStorage.getItem("np_cur_manual")||""}catch(e){}
    if(manual&&manual===c)return;            /* they chose themselves in this country */
    if(manual&&manual!==c){try{localStorage.removeItem("np_cur_manual")}catch(e){}}
    var want=c==="TH"?"THB":"INR";
    if(curNow()&&curNow()!==want){auto=true;try{btn.click()}finally{auto=false}}
  }
  apply();
  window.addEventListener("load",function(){setTimeout(apply,300)});
  document.addEventListener("visibilitychange",function(){if(!document.hidden)apply()});
})();

/* ===== VIP Beach Clubs right after the night clubs: own row on Home (after the club rows),
   and in the full list they now come straight after the night clubs instead of at the bottom ===== */
(function(){
  if(typeof CLUBS==="undefined")return;
  function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
  function beach(){return CLUBS.filter(function(c){return c&&c.cat==="beach"})}
  /* 1. order: beach clubs directly after the last night club */
  function reorder(){
    var b=beach();if(!b.length)return false;
    var rest=CLUBS.filter(function(c){return !(c&&c.cat==="beach")}),last=-1;
    rest.forEach(function(c,i){if(c&&c.cat==="nightlife")last=i});
    if(last<0)return false;
    var want=rest.slice(0,last+1).concat(b,rest.slice(last+1));
    if(want.every(function(c,i){return CLUBS[i]===c}))return false;
    Array.prototype.splice.apply(CLUBS,[0,CLUBS.length].concat(want));
    try{if(typeof renderGrid==="function")renderGrid()}catch(e){}
    return true;
  }
  /* 2. Home row "VIP Beach Clubs" after the club rows */
  function row(){
    var after=document.getElementById("afterRail")||document.getElementById("indRail");if(!after)return;
    var list=beach();var r=document.getElementById("npBeachRail");
    if(!list.length){if(r){r.remove();var h=document.getElementById("npBeachHead");if(h)h.remove()}return}
    if(!r){
      var head=document.createElement("div");head.className="lrow";head.id="npBeachHead";head.style.margin="0 0 10px";
      head.innerHTML='<h2 class="sectiontitle" style="font-size:20px;margin:0">VIP Beach Clubs · sunset to late</h2><span class="off30">Daybeds &amp; cabanas</span>';
      r=document.createElement("div");r.className="rail";r.id="npBeachRail";
      after.insertAdjacentElement("afterend",head);head.insertAdjacentElement("afterend",r);
    }
    var key=list.map(function(c){return c.id}).join(",")+"|"+(typeof cur!=="undefined"?cur:"");
    if(r.dataset.k===key)return;r.dataset.k=key;r.innerHTML="";
    list.forEach(function(c){
      var paid=(c.pkgs||[]).map(function(p){return p.p}).filter(Boolean),from=paid.length?Math.min.apply(null,paid):0;
      var b=document.createElement("button");b.className="rcard";b.type="button";
      b.innerHTML='<div class="art" style="'+(typeof artStyle==="function"?artStyle(c):"")+'"><span class="live">Beach club</span><span class="name"></span></div>'+
        '<div class="meta"><div class="row"><span class="mu"></span></div><div class="row"><span class="hr"></span><span class="from">'+(from&&typeof money==="function"?"from "+money(from):"Book")+'</span></div></div>';
      b.querySelector(".name").textContent=c.name;b.querySelector(".mu").textContent=c.music||c.sub||"Beach club";
      b.querySelector(".hr").textContent=/\d/.test(c.open||"")?c.open:(c.area||"Pattaya");
      b.onclick=function(){try{if(window.npTrack)window.npTrack("place_view",c.id)}catch(e){}if(typeof openClub==="function")openClub(c)};
      r.appendChild(b);
    });
  }
  function run(){try{reorder()}catch(e){}try{row()}catch(e){}}
  run();window.addEventListener("load",run);setTimeout(run,1500);setTimeout(run,4000);
  var btn=document.getElementById("curBtn");if(btn)btn.addEventListener("click",function(){setTimeout(row,50)});
})();

/* ===== Booking form: clear help when no spot is chosen yet (the "Choose your spot" list is above, off screen) ===== */
(function(){
  if(typeof panel==="undefined")return;
  /* 7 Oct 2026: words that match each service. Clubs, beach clubs and events keep the original "spot" words.
     [heading, item, example, button, date "today" word, time label, people label] (null = keep the original) */
  var WORDS={
    airport:["Choose your ride","ride","car or van","Show rides","Today","Pickup time","Passengers"],
    rental:["Choose your vehicle","vehicle","car or scooter","Show vehicles","Today","Pickup time","People"],
    restaurants:["Choose your table","table","","Show tables",null,null,null],
    indian:["Choose your table","table","","Show tables",null,null,null],
    hotels:["Choose your room","room","","Show rooms",null,"Check-in time",null],
    spa:["Choose your treatment","treatment","massage or spa","Show treatments","Today","Time","People"],
    tours:["Choose your tour","tour","","Show tours","Today","Pickup time","People"],
    water:["Choose your activity","activity","","Show activities","Today","Time","People"],
    golf:["Choose your game","game","golf or shooting","Show games","Today","Tee time","Players"],
    yacht:["Choose your charter","charter","","Show charters","Today","Boarding time",null],
    shopping:["Choose your service","service","","Show services","Today","Time","People"],
    grocery:["Choose your items","item","","Show items","Today","Delivery time",null],
    medical:["Choose your option","option","","Show options","Today","Time","People"],
    concierge:["Choose your service","service","","Show services",null,"Time",null],
    visa:["Choose your service","service","","Show services","Today","Time","People"],
    jet:["Choose your flight","flight","","Show flights","Today","Departure time","Passengers"],
    property:["Choose your option","option","","Show options","Today","Viewing time","People"]
  };
  function npVenue(){var t=panel.querySelector("#sheetTitle");if(!t||typeof CLUBS==="undefined")return null;var n=t.textContent.trim();return CLUBS.find(function(c){return c.name===n})||null}
  function npWords(){var v=npVenue();if(!v)return null;var w=WORDS[v.cat];if(!w)return null;return {head:w[0],item:w[1],eg:w[2],btn:w[3],today:w[4],time:w[5],people:w[6]}}
  function setLead(label,txt){if(!label||!txt)return;var n=label.firstChild;if(n&&n.nodeType===3&&n.nodeValue.trim()!==txt)n.nodeValue=txt}
  function relabel(){
    var w=npWords();if(!w)return;
    var pk=panel.querySelector("#pkgs");if(pk){var hd=pk.previousElementSibling;if(hd&&hd.tagName==="H3"&&hd.textContent.trim()!==w.head)hd.textContent=w.head}
    var ft=panel.querySelector("#fTime");if(ft)setLead(ft.closest("label"),w.time);
    var go=panel.querySelector("#gOut");if(go)setLead(go.closest("label"),w.people);
    var fd=panel.querySelector("#fDay");if(fd&&w.today&&fd.options[0]&&fd.options[0].text==="Tonight")fd.options[0].text=w.today;
    var bk=panel.querySelector("#book");if(bk&&bk.textContent.trim()==="Choose a spot to continue")bk.textContent="Choose your "+w.item+" to continue";
  }
  if(!document.getElementById("npSpotCss")){var s=document.createElement("style");s.id="npSpotCss";
    s.textContent='#npSpotHint{display:flex;gap:10px;align-items:center;justify-content:space-between;margin:0 0 10px;padding:12px 14px;border-radius:14px;background:rgba(233,185,73,.14);border:1px solid rgba(233,185,73,.6);font-size:14px;line-height:1.35}'+
      '#npSpotHint button{flex:0 0 auto;padding:9px 14px;border-radius:999px;border:0;font:inherit;font-weight:700;background:#E9B949;color:#1a1026;cursor:pointer}'+
      '#pkgs.npflash{outline:2px solid #E9B949;outline-offset:6px;border-radius:14px;transition:outline-color .3s}';document.head.appendChild(s)}
  function sync(){
    try{relabel()}catch(e){}
    var book=panel.querySelector("#book"),pk=panel.querySelector("#pkgs");if(!book||!pk)return;
    var chosen=!!pk.querySelector('.pkg[aria-pressed="true"]'),h=panel.querySelector("#npSpotHint");
    if(chosen||!book.disabled){if(h)h.remove();return}
    if(!h){h=document.createElement("div");h.id="npSpotHint";h.setAttribute("role","note");
      var w=npWords();
      h.innerHTML=w?'<span>👆 First tap your <b>'+w.item+'</b>'+(w.eg?' ('+w.eg+')':'')+' above.</span><button type="button">'+w.btn+'</button>':'<span>👆 First tap a <b>spot</b> (table, entry or package) in <b>"Choose your spot"</b> above.</span><button type="button">Show spots</button>';
      book.insertAdjacentElement("beforebegin",h);
      h.querySelector("button").onclick=function(){var t=panel.querySelector("#pkgs");if(!t)return;var hd=t.previousElementSibling||t;
        hd.scrollIntoView({behavior:"smooth",block:"start"});t.classList.add("npflash");setTimeout(function(){t.classList.remove("npflash")},2200)}}
  }
  var busy=false;
  new MutationObserver(function(){if(busy)return;busy=true;requestAnimationFrame(function(){busy=false;sync()})})
    .observe(panel,{childList:true,subtree:true,attributes:true,attributeFilter:["disabled","aria-pressed"]});
})();

/* ===== Advance to reserve (each venue sets %) + no cancellation after the advance is paid (1 Oct 2026)
   Online payment is not live yet: bookings that need an advance are saved as "Awaiting advance" (not reserved). ===== */
(function(){
  if(!window.supabase||typeof panel==="undefined")return;
  var sb=window.supabase.createClient("https://mymtgbmcjbwsnetzwgoy.supabase.co","sb_publishable_ViFodxG8kAENr78Fyp-BwQ_iA_BfAD0");
  var ADV={},MINE={},user=null,PAYSOON="Online payment is launching soon. Until the advance is paid, this booking is a request and your table is not reserved. We will let you know as soon as you can pay in the app.";
  function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
  function B(n){return "฿"+Math.round(Number(n)||0).toLocaleString("en-US")}
  function pctOf(id){return ADV[id]||0}
  function venueInPanel(){var t=panel.querySelector("#sheetTitle");if(!t||typeof CLUBS==="undefined")return null;var n=t.textContent.trim();return CLUBS.find(function(c){return c.name===n})||null}
  if(!document.getElementById("npAdvCss")){var s=document.createElement("style");s.id="npAdvCss";
    s.textContent='#npAdv{margin:0 0 10px;padding:12px 14px;border-radius:14px;background:rgba(237,147,177,.12);border:1px solid rgba(237,147,177,.55);font-size:14px;line-height:1.4}#npAdv b{color:#fff}#npAdv label{display:flex;gap:8px;align-items:flex-start;margin-top:8px}#npAdv input{width:20px;height:20px;flex:0 0 auto;margin-top:1px}'+
      '.npadv-t{display:block;grid-column:1/-1;margin-top:6px;font-size:13px;padding:8px 10px;border-radius:10px;background:rgba(237,147,177,.12);border:1px solid rgba(237,147,177,.4)}.npadv-t.paid{background:rgba(47,191,98,.14);border-color:rgba(47,191,98,.5)}.npadv-t button{margin-top:6px;padding:7px 12px;border-radius:999px;border:0;font:inherit;font-weight:700;background:#E9B949;color:#1a1026}'+
      '.npadv-chip{display:inline-block;margin:4px 6px 0 0;padding:2px 8px;border-radius:999px;font-size:12px;font-weight:700;background:rgba(237,147,177,.18);color:#ED93B1}.npadv-chip.paid{background:rgba(47,191,98,.18);color:#7BE3A0}';document.head.appendChild(s)}

  async function loadSettings(){try{var r=await sb.from("np_venue_settings").select("venue_id,advance_pct");if(!r.error)(r.data||[]).forEach(function(x){ADV[x.venue_id]=x.advance_pct||0})}catch(e){}}

  /* ---------- booking form ---------- */
  function formBox(){
    var book=panel.querySelector("#book"),c=venueInPanel(),box=panel.querySelector("#npAdv");
    if(!book||!c){if(box&&!book)box.remove();return}
    var p=pctOf(c.id);if(!p){if(box)box.remove();return}
    var tot=(panel.querySelector("#tot")||{}).textContent||"",sym=(tot.match(/[฿₹]/)||["฿"])[0],num=parseFloat(tot.replace(/[^0-9.]/g,""))||0;
    var amt=num?sym+Math.round(num*p/100).toLocaleString(sym==="₹"?"en-IN":"en-US"):"";
    var html='💳 <b>Advance needed to reserve: '+p+'%'+(amt?' = '+amt:' of the total')+'</b><br><span class="small">Pay online in the app (launching soon). Until it is paid your booking is a request, not a reservation.</span>'+
      '<label><input type="checkbox" id="npAdvOk"'+(box&&box.querySelector("#npAdvOk")&&box.querySelector("#npAdvOk").checked?" checked":"")+'> <span>I understand: <b>no cancellation or refund after the advance is paid.</b></span></label><p class="err" id="npAdvE" role="status" style="margin:6px 0 0"></p>';
    if(!box){box=document.createElement("div");box.id="npAdv";var h=panel.querySelector("#npSpotHint");(h||book).insertAdjacentElement("beforebegin",box)}
    if(box.dataset.k!==p+"|"+amt){box.dataset.k=p+"|"+amt;box.innerHTML=html}
  }
  panel.addEventListener("click",function(e){
    var b=e.target.closest&&e.target.closest("#book");if(!b)return;
    var box=panel.querySelector("#npAdv");if(!box)return;
    if(!box.querySelector("#npAdvOk").checked){e.preventDefault();e.stopImmediatePropagation();box.querySelector("#npAdvE").textContent="Please tick the box to accept the advance and no-cancellation rule.";box.scrollIntoView({behavior:"smooth",block:"center"})}
    else{var c=venueInPanel();window.__npLastAdv=c?{club:c.id,pct:pctOf(c.id)}:null}
  },true);
  function doneNote(){
    var d=panel.querySelector(".done .code");if(!d||panel.querySelector("#npAdvDone")||!window.__npLastAdv||!window.__npLastAdv.pct)return;
    var n=document.createElement("div");n.id="npAdvDone";n.className="npadv-t";n.style.margin="12px 0";
    n.innerHTML='⏳ <b>Awaiting advance ('+window.__npLastAdv.pct+'%).</b> '+esc(PAYSOON);
    d.closest(".done").appendChild(n);
  }

  /* ---------- My bookings ---------- */
  async function loadMine(){
    MINE={};if(!user)return;
    try{var r=await sb.from("np_bookings").select("code,advance_pct,advance_amount,advance_paid,status").eq("customer_id",user.id);(r.data||[]).forEach(function(x){MINE[x.code]=x})}catch(e){}
  }
  function tickets(){
    if(typeof bookings==="undefined")return;
    document.querySelectorAll("#bookingList .ticket").forEach(function(t){
      var code=((t.querySelector(".code")||{}).textContent||"").trim(),bk=bookings.find(function(x){return x.code===code});if(!bk)return;
      var srv=MINE[code],p=srv?srv.advance_pct:pctOf(bk.club),paid=!!(srv&&srv.advance_paid),amt=srv&&srv.advance_amount!=null?srv.advance_amount:Math.round((bk.total||0)*(p||0)/100);
      var el=t.querySelector(".npadv-t"),cancel=t.querySelector(".cancel");
      if(!p&&!paid){if(el)el.remove();return}
      var key=(paid?"p":"u")+amt;if(el&&el.dataset.k===key)return;if(el)el.remove();
      el=document.createElement("div");el.className="npadv-t"+(paid?" paid":"");el.dataset.k=key;
      el.innerHTML=paid?'✅ <b>Advance paid ('+B(amt)+').</b> Your table is reserved. This booking cannot be cancelled.':
        '⏳ <b>Awaiting advance: '+p+'% = '+B(amt)+'.</b> Not reserved yet.<br><button type="button">Pay advance</button>';
      var body=t.querySelector(".tbody")||t;body.appendChild(el);
      var pb=el.querySelector("button");if(pb)pb.onclick=function(){alert(PAYSOON)};
      if(cancel)cancel.style.display=paid?"none":"";
    });
  }
  document.addEventListener("click",function(e){
    var b=e.target.closest&&e.target.closest("#bookingList .cancel");if(!b)return;
    var t=b.closest(".ticket"),code=((t&&t.querySelector(".code"))||{}).textContent;code=(code||"").trim();
    if(MINE[code]&&MINE[code].advance_paid){e.preventDefault();e.stopImmediatePropagation();alert("This booking cannot be cancelled because the advance is paid.")}
  },true);
  if(typeof renderBookings==="function"){var _rb=renderBookings;renderBookings=function(){_rb();try{tickets()}catch(e){}}}

  /* ---------- club dashboard: advance setting + status on each reservation ---------- */
  var RS={},CAN={};
  async function dash(){
    var view=document.getElementById("dview"),dv=document.getElementById("dVenue");
    if(!view||!dv||typeof dTab==="undefined"||dTab!=="res"||!user)return;
    var v=dv.value,can=CAN[v];if(can===undefined){can=false;try{var r=await sb.rpc("np_can_manage",{p_venue:v});can=!r.error&&r.data===true}catch(e){}CAN[v]=can}
    if(can&&!view.querySelector("#npAdvSet")){
      var c=document.createElement("div");c.className="lcard";c.id="npAdvSet";c.style.marginBottom="12px";
      c.innerHTML='<div class="lrow"><div><h4>Advance to reserve</h4><p class="small">Guests must pay this % online before the table is reserved. No cancellation after it is paid.</p></div>'+
        '<select id="npAdvPct" aria-label="Advance percent">'+[0,10,20,25,30,40,50,60,70,80,90,100].map(function(x){return '<option value="'+x+'">'+(x?x+"%":"No advance")+'</option>'}).join("")+'</select></div><p class="small" id="npAdvMsg"></p>';
      view.insertBefore(c,view.firstChild);c.querySelector("#npAdvPct").value=String(pctOf(v));
      c.querySelector("#npAdvPct").onchange=async function(){var n=parseInt(this.value,10),m=c.querySelector("#npAdvMsg");
        var x=await sb.rpc("np_set_advance",{p_venue:v,p_pct:n});if(x.error){m.textContent=/function|does not exist/i.test(x.error.message)?"Please run np-advance.sql in Supabase first.":x.error.message;return}
        ADV[v]=n;m.textContent=n?"Saved. New bookings need a "+n+"% advance.":"Saved. No advance needed."}
    }
    var ids=[].map.call(view.querySelectorAll("#rsList [data-id]"),function(x){return x.dataset.id}).filter(function(id){return !(id in RS)});
    if(ids.length){var q=await sb.from("np_bookings").select("id,advance_pct,advance_amount,advance_paid").in("id",ids);(q.data||[]).forEach(function(x){RS[x.id]=x})}
    view.querySelectorAll("#rsList [data-id]").forEach(function(card){
      var x=RS[card.dataset.id];if(!x||!x.advance_pct||card.querySelector(".npadv-chip"))return;
      var chip=document.createElement("span");chip.className="npadv-chip"+(x.advance_paid?" paid":"");
      chip.textContent=x.advance_paid?"Advance paid "+B(x.advance_amount):"Advance "+x.advance_pct+"% not paid · "+B(x.advance_amount);
      var h=card.querySelector("h4")||card.firstChild;h.insertAdjacentElement("afterend",chip);
      if(!x.advance_paid&&can){var btns=card.querySelector(".rsbtns");if(btns&&!btns.querySelector("[data-advpaid]")){var b=document.createElement("button");b.className="pill";b.dataset.advpaid="1";b.textContent="Advance paid (at venue)";
        b.onclick=async function(){if(!confirm("Mark the advance as paid? After this the guest cannot cancel."))return;var u=await sb.from("np_bookings").update({advance_paid:true}).eq("id",card.dataset.id);if(u.error){alert(u.error.message);return}delete RS[card.dataset.id];renderDash()};btns.appendChild(b)}}
    });
  }
  if(typeof renderDash==="function"){var _rd=renderDash;renderDash=function(){_rd();RS={};setTimeout(dash,350)}}

  var busy=false;
  new MutationObserver(function(){if(busy)return;busy=true;requestAnimationFrame(function(){busy=false;try{formBox();doneNote()}catch(e){}})})
    .observe(panel,{childList:true,subtree:true,characterData:true});
  var bl=document.getElementById("bookingList");
  if(bl)new MutationObserver(function(){try{tickets()}catch(e){}}).observe(bl,{childList:true});
  var rsBusy=false,rsT=null;
  new MutationObserver(function(){var l=document.getElementById("rsList");if(!l||rsBusy||!l.querySelector("[data-id]"))return;
    clearTimeout(rsT);rsT=setTimeout(function(){rsBusy=true;dash().finally(function(){setTimeout(function(){rsBusy=false},50)})},150)})
    .observe(document.body,{childList:true,subtree:true});

  /* hide the admin bell while a sheet is open (it was covering buttons) */
  var sh=document.querySelector(".sheet");
  if(sh)new MutationObserver(function(){var b=document.getElementById("npBell");if(b)b.style.visibility=sh.classList.contains("open")?"hidden":""}).observe(sh,{attributes:true,attributeFilter:["class"]});

  async function onUser(u){user=u;CAN={};await loadMine();tickets()}
  loadSettings().then(function(){formBox();tickets()});
  sb.auth.getSession().then(function(r){onUser(r.data.session?r.data.session.user:null)});
  sb.auth.onAuthStateChange(function(e,s){onUser(s?s.user:null)});
  window.npAdvanceSettings=ADV;
})();

/* ===== no-flash: Home is arranged, show the page (index.html hides it for a moment while loading) ===== */
(function(){
  function show(){document.documentElement.classList.remove("np-loading")}
  /* 16 Oct 2026: wait until the later parts of this file (language button, chat bar, mic) have arranged Home, so the old layout never flashes */
  setTimeout(show,550);
})();

/* ===== Card backgrounds (1 Oct 2026): soft artwork on the right side of 10 Home cards.
   Drawn with code (no photos), sits behind the text, nothing else changes. ===== */
(function(){
  if(document.getElementById("npArtCss"))return;
  function svg(vb,body){return 'url("data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="'+vb+'" preserveAspectRatio="xMaxYMid slice">'+body+'</svg>')+'")'}
  function glow(id,c,o){return '<radialGradient id="'+id+'"><stop offset="0" stop-color="'+c+'" stop-opacity="'+o+'"/><stop offset="1" stop-color="'+c+'" stop-opacity="0"/></radialGradient>'}
  var ART={
    raju:svg("0 0 380 330",'<defs>'+glow("a","#7F77DD",".45")+glow("b","#1D9E75",".22")+'</defs><circle cx="70" cy="70" r="90" fill="url(#a)"/><circle cx="340" cy="300" r="90" fill="url(#b)"/>'+
      '<g fill="#AFA9EC" fill-opacity=".1"><rect x="0" y="306" width="380" height="24"/><rect x="18" y="282" width="16" height="48"/><rect x="38" y="272" width="22" height="58"/><rect x="250" y="278" width="18" height="52"/><rect x="272" y="266" width="24" height="64"/><rect x="352" y="282" width="20" height="48"/></g>'+
      '<g fill="none" stroke="#AFA9EC" stroke-opacity=".18" stroke-width="1.2"><circle cx="200" cy="296" r="30"/><path d="M200 266 V326 M170 296 H230 M179 275 L221 317 M221 275 L179 317"/></g>'+
      '<g fill="none" stroke="#5DCAA5" stroke-opacity=".2" stroke-width="1.6"><path d="M335 330 C338 312 336 300 330 288 M330 288 C318 282 308 284 300 292 M330 288 C340 278 352 278 360 284 M330 288 C326 276 318 270 308 270"/></g>'+
      '<g fill="#fff" opacity=".3"><circle cx="150" cy="16" r="1.2"/><circle cx="30" cy="190" r="1"/><circle cx="365" cy="200" r="1.2"/></g>'),
    lang:svg("0 0 140 170",'<defs>'+glow("a","#7F77DD",".35")+'</defs><circle cx="125" cy="150" r="60" fill="url(#a)"/><g fill="#CECBF6" font-family="sans-serif"><text x="74" y="22" font-size="13" opacity=".12">नमस्ते</text><text x="92" y="42" font-size="11" opacity=".1">สวัสดี</text><text x="76" y="162" font-size="11" opacity=".1">வணக்கம்</text></g>'),
    conv:svg("0 0 230 170",'<defs>'+glow("a","#1D9E75",".35")+'</defs><circle cx="200" cy="150" r="80" fill="url(#a)"/><text x="150" y="150" font-size="90" font-family="sans-serif" fill="#9FE1CB" opacity=".08">฿</text><text x="185" y="95" font-size="70" font-family="sans-serif" fill="#FAC775" opacity=".08">₹</text><path d="M120 160 C160 120 190 150 235 105" fill="none" stroke="#5DCAA5" stroke-opacity=".3" stroke-width="1.5"/>'),
    girls:svg("0 0 380 160",'<defs>'+glow("a","#ED93B1",".55")+glow("b","#AFA9EC",".45")+'</defs><circle cx="300" cy="40" r="90" fill="url(#a)"/><circle cx="350" cy="130" r="70" fill="url(#b)"/><circle cx="220" cy="140" r="50" fill="url(#a)"/>'+
      '<circle cx="270" cy="70" r="12" fill="#F4C0D1" opacity=".35"/><circle cx="330" cy="95" r="7" fill="#F4C0D1" opacity=".5"/><circle cx="245" cy="30" r="5" fill="#fff" opacity=".4"/><circle cx="360" cy="45" r="9" fill="#CECBF6" opacity=".35"/>'+
      '<path d="M150 150 C230 90 280 150 380 70" fill="none" stroke="#ED93B1" stroke-opacity=".55" stroke-width="2.5"/><path d="M170 160 C250 110 300 165 390 95" fill="none" stroke="#ED93B1" stroke-opacity=".35" stroke-width="1.2"/>'+
      '<g transform="translate(318 58)" fill="none" stroke="#F4C0D1" stroke-opacity=".55" stroke-width="1.6"><path d="M0 26 C-12 14 -12 0 0 -10 C12 0 12 14 0 26Z"/><path d="M0 26 C-20 22 -30 10 -28 -2 C-16 0 -6 10 0 26Z"/><path d="M0 26 C20 22 30 10 28 -2 C16 0 6 10 0 26Z"/></g>'),
    gold:svg("0 0 380 170",'<defs><linearGradient id="w" x1="0" x2="1"><stop offset="0" stop-color="#FAC775" stop-opacity="0"/><stop offset=".45" stop-color="#FAC775" stop-opacity=".9"/><stop offset=".8" stop-color="#EF9F27" stop-opacity=".6"/><stop offset="1" stop-color="#BA7517" stop-opacity=".2"/></linearGradient>'+glow("g","#EF9F27",".35")+'</defs>'+
      '<circle cx="320" cy="60" r="110" fill="url(#g)"/><path d="M120 170 C200 110 250 150 390 60" fill="none" stroke="url(#w)" stroke-width="3"/><path d="M140 175 C220 125 270 165 400 80" fill="none" stroke="url(#w)" stroke-width="1.5"/><path d="M100 165 C190 100 240 130 390 35" fill="none" stroke="url(#w)" stroke-width="1"/>'+
      '<circle cx="300" cy="45" r="2.5" fill="#FAEEDA"/><circle cx="345" cy="110" r="2" fill="#FAEEDA" opacity=".8"/>'),
    packages:svg("0 0 180 150",'<defs>'+glow("a","#F0997B",".4")+'</defs><circle cx="150" cy="40" r="70" fill="url(#a)"/><g fill="none" stroke="#FAC775" stroke-opacity=".35" stroke-width="1.4"><rect x="118" y="30" width="44" height="34" rx="4"/><path d="M140 30 V64 M118 44 H162"/><path d="M140 30 C132 18 122 22 130 30 M140 30 C148 18 158 22 150 30"/></g><g fill="#FAC775" opacity=".5"><circle cx="112" cy="70" r="2"/><circle cx="170" cy="22" r="2.5"/><circle cx="155" cy="100" r="1.8"/></g>'),
    buddy:svg("0 0 180 150",'<defs>'+glow("a","#ED93B1",".38")+'</defs><circle cx="145" cy="45" r="70" fill="url(#a)"/><g stroke="#ED93B1" stroke-opacity=".35" stroke-width="1.2"><path d="M110 30 L150 50 L130 85 L165 95 M150 50 L172 28 M130 85 L105 70"/></g><g fill="#ED93B1" fill-opacity=".55"><circle cx="110" cy="30" r="5"/><circle cx="150" cy="50" r="7"/><circle cx="130" cy="85" r="6"/><circle cx="165" cy="95" r="4.5"/><circle cx="172" cy="28" r="4"/></g>'),
    mall:svg("0 0 180 150",'<defs>'+glow("a","#F0997B",".4")+'</defs><circle cx="150" cy="50" r="70" fill="url(#a)"/><g fill="none" stroke="#F5C4B3" stroke-opacity=".4" stroke-width="1.4"><path d="M118 40 H150 L154 80 H114 Z"/><path d="M126 40 C126 28 142 28 142 40"/><path d="M148 58 H172 L175 92 H145 Z"/><path d="M154 58 C154 48 166 48 166 58"/></g>'),
    paybill:svg("0 0 180 150",'<defs>'+glow("a","#1D9E75",".4")+'</defs><circle cx="150" cy="50" r="70" fill="url(#a)"/><g fill="none" stroke="#9FE1CB" stroke-opacity=".38" stroke-width="1.3"><path d="M120 20 H160 V78 L154 73 L148 78 L142 73 L136 78 L130 73 L124 78 L120 74 Z"/><path d="M128 34 H152 M128 44 H152 M128 54 H144"/><path d="M140 20 V78" stroke-dasharray="3 3"/></g><g fill="none" stroke="#5DCAA5" stroke-opacity=".5" stroke-width="1.8"><circle cx="158" cy="104" r="11"/><path d="M152 104 L156 108 L164 99"/></g>'),
    dash:svg("0 0 180 150",'<defs>'+glow("a","#378ADD",".38")+'</defs><circle cx="150" cy="60" r="70" fill="url(#a)"/><g fill="#85B7EB" fill-opacity=".25"><rect x="112" y="80" width="12" height="30" rx="2"/><rect x="130" y="64" width="12" height="46" rx="2"/><rect x="148" y="48" width="12" height="62" rx="2"/><rect x="166" y="30" width="12" height="80" rx="2"/></g><path d="M108 76 L128 60 L146 64 L170 26" fill="none" stroke="#B5D4F4" stroke-opacity=".6" stroke-width="1.8"/><circle cx="170" cy="26" r="3.5" fill="#B5D4F4" fill-opacity=".8"/>')
  };
  ART.welcome=svg("0 0 360 170",'<defs>'+glow("a","#ED93B1",".5")+glow("b","#7F77DD",".55")+'</defs><circle cx="300" cy="40" r="90" fill="url(#a)"/><circle cx="60" cy="150" r="90" fill="url(#b)"/>'+
    '<g fill="#F4C0D1" fill-opacity=".4"><circle cx="270" cy="70" r="14"/><circle cx="305" cy="62" r="17"/><circle cx="340" cy="72" r="13"/></g><g fill="#F4C0D1" fill-opacity=".28"><path d="M250 112 C252 90 288 90 290 112Z"/><path d="M283 112 C285 86 325 86 327 112Z"/><path d="M322 112 C324 92 356 92 358 112Z"/></g>'+
    '<g opacity=".7"><rect x="230" y="20" width="5" height="10" fill="#FAC775" transform="rotate(30 232 25)"/><rect x="350" y="120" width="5" height="10" fill="#5DCAA5" transform="rotate(-25 352 125)"/><circle cx="330" cy="20" r="3" fill="#FAC775"/><circle cx="245" cy="55" r="2.5" fill="#5DCAA5"/></g>');
  ART.me=svg("0 0 360 190",'<defs>'+glow("a","#7F77DD",".45")+'</defs><circle cx="320" cy="50" r="90" fill="url(#a)"/><g fill="none" stroke="#CECBF6" stroke-opacity=".22" stroke-width="1.3"><circle cx="320" cy="50" r="28"/><circle cx="320" cy="50" r="46"/><circle cx="320" cy="50" r="64" stroke-dasharray="3 6"/></g><g fill="#CECBF6" opacity=".5"><circle cx="276" cy="20" r="2"/><circle cx="352" cy="100" r="2.2"/></g>');
  ART.admin=svg("0 0 360 110",'<defs>'+glow("a","#EF9F27",".35")+'</defs><circle cx="320" cy="55" r="80" fill="url(#a)"/><g fill="none" stroke="#FAC775" stroke-opacity=".4" stroke-width="1.6"><path d="M318 18 L346 28 V52 C346 72 334 84 318 92 C302 84 290 72 290 52 V28 Z"/><path d="M305 54 L315 64 L333 44"/></g>');
  ART.person=svg("0 0 360 150",'<defs>'+glow("a","#ED93B1",".35")+'</defs><circle cx="330" cy="30" r="80" fill="url(#a)"/><path d="M320 30 C320 22 332 22 332 30 C332 22 344 22 344 30 C344 40 332 46 332 50 C332 46 320 40 320 30Z" fill="#ED93B1" fill-opacity=".35"/><g fill="#F4C0D1" opacity=".5"><circle cx="300" cy="18" r="2"/><circle cx="352" cy="62" r="1.8"/></g>');
  ART.rules=svg("0 0 360 170",'<defs>'+glow("a","#7F77DD",".4")+'</defs><circle cx="320" cy="40" r="90" fill="url(#a)"/><g fill="none" stroke="#CECBF6" stroke-opacity=".22" stroke-width="1.5"><path d="M320 14 L350 25 V50 C350 72 337 86 320 94 C303 86 290 72 290 50 V25 Z"/><path d="M320 46 C320 40 329 40 329 46 C329 52 320 57 320 60 C320 57 311 52 311 46 C311 40 320 40 320 46Z"/></g>');
  ART.ticket=svg("0 0 360 130",'<defs>'+glow("a","#F0997B",".38")+'</defs><circle cx="330" cy="100" r="90" fill="url(#a)"/>');
  ART.earn=svg("0 0 360 120",'<defs>'+glow("a","#1D9E75",".4")+'</defs><circle cx="320" cy="50" r="80" fill="url(#a)"/><g fill="none" stroke="#9FE1CB" stroke-opacity=".4" stroke-width="1.4"><ellipse cx="320" cy="88" rx="22" ry="6"/><path d="M298 88 V80 M342 88 V80"/><ellipse cx="320" cy="80" rx="22" ry="6"/><path d="M298 80 V72 M342 80 V72"/><ellipse cx="320" cy="72" rx="22" ry="6"/></g><path d="M276 60 L296 44 L312 50 L346 18 M338 18 H346 V26" fill="none" stroke="#5DCAA5" stroke-opacity=".55" stroke-width="1.8"/>');
  ART.chat=svg("0 0 360 80",'<defs>'+glow("a","#ED93B1",".35")+'</defs><circle cx="330" cy="40" r="60" fill="url(#a)"/><g fill="none" stroke="#F4C0D1" stroke-opacity=".3" stroke-width="1.3"><rect x="300" y="14" width="40" height="22" rx="11"/><rect x="318" y="42" width="34" height="18" rx="9"/></g>');
  ART.lounge=svg("0 0 360 120",'<defs>'+glow("a","#ED93B1",".45")+'</defs><circle cx="310" cy="40" r="80" fill="url(#a)"/><circle cx="290" cy="70" r="8" fill="#F4C0D1" opacity=".3"/><g transform="translate(322 50)" fill="none" stroke="#F4C0D1" stroke-opacity=".45" stroke-width="1.5"><path d="M0 22 C-10 12 -10 0 0 -8 C10 0 10 12 0 22Z"/><path d="M0 22 C-17 18 -25 8 -23 -2 C-13 0 -5 8 0 22Z"/><path d="M0 22 C17 18 25 8 23 -2 C13 0 5 8 0 22Z"/></g>');
  ART.kpi=svg("0 0 100 70",'<circle cx="85" cy="15" r="32" fill="#EF9F27" opacity=".14"/>');
  ART.inbox=svg("0 0 360 110",'<defs>'+glow("a","#EF9F27",".28")+'</defs><circle cx="330" cy="30" r="70" fill="url(#a)"/><g fill="none" stroke="#FAC775" stroke-opacity=".3" stroke-width="1.5" transform="translate(0 56)"><path d="M316 22 a14 14 0 0 1 28 0 c0 16 6 20 6 20 h-40 s6 -4 6 -20"/><path d="M326 48 a4 4 0 0 0 8 0"/></g>');
  ART.dkpi=svg("0 0 100 70",'<circle cx="85" cy="15" r="32" fill="#378ADD" opacity=".18"/>');
  ART.dcard=svg("0 0 360 100",'<defs>'+glow("a","#378ADD",".32")+'</defs><circle cx="320" cy="50" r="70" fill="url(#a)"/><g fill="#85B7EB" fill-opacity=".22"><rect x="290" y="60" width="9" height="26" rx="2"/><rect x="304" y="48" width="9" height="38" rx="2"/><rect x="318" y="36" width="9" height="50" rx="2"/><rect x="332" y="24" width="9" height="62" rx="2"/></g>');
  ART.sky=svg("0 0 360 70",'<defs>'+glow("a","#378ADD",".35")+'</defs><circle cx="300" cy="35" r="70" fill="url(#a)"/><circle cx="292" cy="30" r="10" fill="#FAC775" fill-opacity=".35"/><path d="M296 44 h34 a9 9 0 0 0 -3 -17 a12 12 0 0 0 -22 2 a8 8 0 0 0 -9 15z" fill="#B5D4F4" fill-opacity=".22"/>');
  ART.qa=svg("0 0 100 80",'<circle cx="90" cy="10" r="40" fill="#F0997B" opacity=".16"/>');
  ART.cat=svg("0 0 100 100",'<circle cx="92" cy="8" r="46" fill="#F0997B" opacity=".14"/><circle cx="10" cy="98" r="30" fill="#7F77DD" opacity=".1"/>');
  ART.catpink=svg("0 0 100 100",'<circle cx="92" cy="8" r="46" fill="#ED93B1" opacity=".2"/>');
  ART.rmeta=svg("0 0 360 100",'<defs>'+glow("a","#F0997B",".3")+'</defs><circle cx="330" cy="80" r="80" fill="url(#a)"/>');
  ART.dform=svg("0 0 360 120",'<defs>'+glow("a","#378ADD",".32")+'</defs><circle cx="330" cy="30" r="80" fill="url(#a)"/>');
  ART.refer=svg("0 0 380 160",'<defs>'+glow("a","#1D9E75",".5")+glow("b","#EF9F27",".3")+'</defs><circle cx="300" cy="40" r="90" fill="url(#a)"/><circle cx="350" cy="130" r="60" fill="url(#b)"/>'+
    '<g fill="none" stroke="#9FE1CB" stroke-opacity=".45" stroke-width="1.5"><ellipse cx="320" cy="112" rx="26" ry="7"/><path d="M294 112 V102 M346 112 V102"/><ellipse cx="320" cy="102" rx="26" ry="7"/><path d="M294 102 V92 M346 102 V92"/><ellipse cx="320" cy="92" rx="26" ry="7"/></g>'+
    '<path d="M240 120 C270 100 285 80 300 70 S340 40 360 30" fill="none" stroke="#5DCAA5" stroke-opacity=".55" stroke-width="2"/><path d="M350 28 H362 V40" fill="none" stroke="#5DCAA5" stroke-opacity=".55" stroke-width="2"/>'+
    '<g fill="#FAC775" opacity=".6"><circle cx="262" cy="42" r="2.5"/><circle cx="370" cy="80" r="2"/></g>');
  ART.ref=svg("0 0 360 90",'<defs>'+glow("a","#1D9E75",".35")+'</defs><circle cx="330" cy="45" r="70" fill="url(#a)"/>');
  ART.sheetbg=svg("0 0 360 1600",'<defs>'+glow("a","#F0997B",".22")+glow("b","#7F77DD",".25")+glow("c","#ED93B1",".2")+glow("d","#EF9F27",".18")+'</defs>'+
    '<circle cx="330" cy="160" r="170" fill="url(#a)"/><circle cx="20" cy="620" r="190" fill="url(#b)"/><circle cx="350" cy="1020" r="180" fill="url(#c)"/><circle cx="40" cy="1420" r="180" fill="url(#d)"/>');
  ART.pkg=svg("0 0 360 200",'<defs>'+glow("a","#F0997B",".28")+'</defs><circle cx="345" cy="10" r="90" fill="url(#a)"/>');
  ART.deal=svg("0 0 360 200",'<defs>'+glow("a","#EF9F27",".3")+'</defs><circle cx="340" cy="35" r="70" fill="url(#a)"/><g fill="#FAC775" opacity=".6"><circle cx="300" cy="18" r="2"/><circle cx="330" cy="52" r="1.6"/></g>');
  ART.addon=svg("0 0 360 200",'<defs>'+glow("a","#ED93B1",".28")+'</defs><circle cx="345" cy="10" r="75" fill="url(#a)"/><path d="M326 20 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z" fill="#F4C0D1" opacity=".55"/>');
  ART.totalbg=svg("0 0 360 200",'<defs>'+glow("a","#1D9E75",".26")+'</defs><circle cx="20" cy="80" r="80" fill="url(#a)"/>');
  var MAP=[["#rajuCard","raju"],["#panel:has(#pkgs) .pbody","sheetbg"],["#panel .pkg","pkg",'rgba(240,153,123,.35)'],["#panel .deal","deal"],["#panel .addon","addon",'rgba(237,147,177,.35)'],["#panel .total","totalbg"],[".npstrip","sky",'rgba(133,183,235,.4)'],["#npHomeFill [data-qa]","qa",'rgba(240,153,123,.4)'],["#cats .cat:not(#npFLBcat)","cat",'rgba(240,153,123,.35)'],["#npFLBcat","catpink",'rgba(237,147,177,.45)'],
    [".rcard","rmeta"],["#grid .club","rmeta",'rgba(240,153,123,.35)'],[".npreftile","refer"],["#dview .partner","dform",'rgba(133,183,235,.45)'],["#dview .tblw","dform",'rgba(133,183,235,.4)'],
    ["#panel:has(#umAcc) .lcard","me",'rgba(175,169,236,.5)'],["#panel .refcode","ref",'rgba(93,202,165,.6)'],["#panel:has(#ppDash) .lcard","dform",'rgba(133,183,235,.5)'],["#npmDeck .npm-empty-card","welcome"],["#npMeet > .npm-card.hl","me"],["#npMeet > .npm-card:not(.hl)","admin",'rgba(239,159,39,.55)'],
    ["#npmList .npm-card","person",'rgba(237,147,177,.45)'],["#npLList .npm-card","person",'rgba(237,147,177,.45)'],["#npPurpose","rules",'rgba(175,169,236,.5)'],
    ["#bookingList .ticket","ticket",'rgba(240,153,123,.5)'],["#npAgEarn","earn",'rgba(93,202,165,.55)'],["#ibL .npm-card","chat",'rgba(237,147,177,.45)'],
    ["#lview .lcard","lounge",'rgba(237,147,177,.5)'],[".npcc-kpi > div","kpi"],[".npcc-it","inbox"],["#dview .kpi","dkpi",'rgba(133,183,235,.45)'],["#dview .lcard","dcard",'rgba(133,183,235,.45)'],["#npxLang","lang"],[".npx-tools","conv"],[".hubtile.ladies","girls"],[".goldarea","gold"],
    ['.hubtile[data-go="packages"]',"packages",'rgba(240,153,123,.45)'],['.hubtile[data-go="buddy"]',"buddy",'rgba(237,147,177,.45)'],
    ['.hubtile[data-go="mall"]',"mall",'rgba(240,153,123,.45)'],['.hubtile[data-go="paybill"]',"paybill",'rgba(93,202,165,.45)'],['.hubtile[data-go="dash"]',"dash",'rgba(133,183,235,.5)']];
  var css='#bookingList .ticket.npart::before,.rcard.npart::before,#grid .club.npart::before{top:auto;height:55%}.npart{isolation:isolate}.npart::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:-1;background-repeat:no-repeat;background-size:100% 100%}';
  css+='.goldarea.npart::before{bottom:auto;height:170px;border-bottom-left-radius:0;border-bottom-right-radius:0;-webkit-mask-image:linear-gradient(#000 60%,transparent);mask-image:linear-gradient(#000 60%,transparent)}';
  css+='#panel .pbody.npart::before{background-size:100% auto;background-position:center top}#panel .pkg[aria-pressed="true"].npart{box-shadow:0 0 28px -8px #F0997B}';
  var FIXED=["pkg","deal","addon","totalbg","refer","welcome","me","admin","person","rules","ticket","earn","chat","lounge","inbox","dcard","dform","sky","ref"];
  MAP.forEach(function(m){css+=m[0]+'.npart::before{background-image:'+ART[m[1]]+(FIXED.indexOf(m[1])>-1?';background-size:360px auto;background-position:right top':'')+'}';if(m[2])css+=m[0]+'.npart{border-color:'+m[2]+'}'});
  var st=document.createElement("style");st.id="npArtCss";st.textContent=css;document.head.appendChild(st);
  function tag(){MAP.forEach(function(m){var list;try{list=document.querySelectorAll(m[0])}catch(e){return}list.forEach(function(el){
    if(el.classList.contains("npart"))return;
    if(getComputedStyle(el).position==="static")el.style.position="relative";
    el.classList.add("npart")})})}
  tag();window.addEventListener("load",tag);setTimeout(tag,1500);
  var busy=false;new MutationObserver(function(){if(busy)return;busy=true;requestAnimationFrame(function(){busy=false;tag()})}).observe(document.body,{childList:true,subtree:true});
})();

/* ===== Clearer photos: lighter dark layer on photos (index.html), names keep a soft shadow so they stay readable ===== */
(function(){if(document.getElementById("npPhotoCss"))return;var s=document.createElement("style");s.id="npPhotoCss";
  s.textContent='.art .name,.art h2.name{text-shadow:0 2px 14px rgba(0,0,0,.7),0 1px 3px rgba(0,0,0,.6)!important}.art{image-rendering:auto}';document.head.appendChild(s)})();

/* ===== Home: place for the Taxi / Refer row above Empowered Girls, and a compact Namaste Gold card ===== */
(function(){
  if(!document.getElementById("npRefCss")){var st=document.createElement("style");st.id="npRefCss";
    st.textContent=      '.goldarea.npcompact{padding-top:14px;padding-bottom:14px}.goldarea.npcompact>*:not(.gtop):not(.gcta):not(.npgtog){display:none!important}.goldarea.npcompact .gtop{margin-bottom:10px}'+
      '.npgtog{display:block;width:100%;margin:0 0 10px;padding:8px;border:0;background:none;font:inherit;font-size:13px;font-weight:600;color:#E9D8A6;cursor:pointer;text-decoration:underline;text-underline-offset:3px}';
    document.head.appendChild(st)}
  function build(){
    var lt=document.querySelector(".hubtile.ladies");
    if(lt&&!document.getElementById("npRefWrap")){
      var holder=lt.closest(".homeblk")||lt.parentNode;
      var w=document.createElement("div");w.className="homeblk";w.id="npRefWrap";w.style.marginBottom="12px";
      holder.parentNode.insertBefore(w,holder);
    }
    var g=document.querySelector(".goldarea");
    if(g&&!g.dataset.npc){g.dataset.npc="1";g.classList.add("npcompact");
      var t=document.createElement("button");t.type="button";t.className="npgtog";t.textContent="See all Gold benefits ▾";
      var cta=g.querySelector(".gcta");if(cta)cta.insertAdjacentElement("beforebegin",t);else g.appendChild(t);
      t.onclick=function(){var c=g.classList.toggle("npcompact");t.textContent=c?"See all Gold benefits ▾":"Show less ▴"}}
  }
  build();window.addEventListener("load",build);setTimeout(build,1500);
})();

/* ===== Map (1 Oct 2026): dark live map with photo pins, search, filters and "my location".
   Works offline: the map library and every map area you have looked at are saved on the phone;
   with no saved map it falls back to the simple Pattaya map. Pins show the venue's area. ===== */
(function(){
  var sec=document.getElementById("map");if(!sec||typeof CLUBS==="undefined")return;
  var LIBJS="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js",LIBCSS="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css";
  var TILES="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=t8DtIGHHNEGy2nAvXGlY", /* 20 Oct 2026: MapTiler (key locked to our domains). If MapTiler fails, OpenStreetMap is used per tile. */
      ATTR='<a href="https://www.maptiler.com/copyright/" target="_blank" rel="noopener">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">&copy; OpenStreetMap contributors</a>';
  var TCACHE="np-map-tiles-v1",LCACHE="np-map-lib-v1",MAXT=900;
  var AREA={"Naklua":[12.9645,100.8915],"North Pattaya":[12.9505,100.8875],"Pattaya Central":[12.9360,100.8830],"Central Pattaya":[12.9360,100.8830],"Soi Buakhao":[12.9330,100.8935],
    "Walking Street":[12.9268,100.8738],"Bali Hai Pier":[12.9215,100.8690],"Pratumnak":[12.9150,100.8660],"Jomtien":[12.8865,100.8705],"Koh Larn":[12.9200,100.7820],
    "East Pattaya":[12.9330,100.9150],"Thepprasit":[12.9105,100.8880],"U-Tapao Airport":[12.6800,101.0050],"Suvarnabhumi / U-Tapao":[12.9450,100.9300],"Pattaya":[12.9310,100.8820]};
  var CHIPS=[["all","All"],["book","⚡ Book now"],["night","Night clubs",["nightlife"]],["beach","Beach clubs",["beach"]],["food","Indian food",["indian","restaurants","grocery"]],
    ["hotel","Hotels",["hotels"]],["spa","Spa",["spa"]],["sea","Tours & sea",["tours","water","yacht","golf"]]];
  var chip="all",q="",map=null,layer=null,me=null,LF=null,built=false;
  function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
  function hash(s){var h=0;for(var i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))|0;return Math.abs(h)}
  var COAST={"Naklua":1,"North Pattaya":1,"Pattaya Central":1,"Central Pattaya":1,"Walking Street":1,"Bali Hai Pier":1,"Pratumnak":1,"Jomtien":1,"Pattaya":1}; /* 20 Oct 2026: beach-side areas spread pins only inland (east) so no pin lands in the sea */
  function ll(c){if(c.lat&&c.lng)return [c.lat,c.lng];var a=AREA[c.area]||AREA.Pattaya,h=hash(c.id||c.name),dx=(((h>>6)%41)-20)*0.00012;if(COAST[c.area]||!AREA[c.area])dx=Math.abs(dx)*0.6;return [a[0]+((h%41)-20)*0.00010,a[1]+dx]}
  function photo(c){var p=null;try{p=(store.get("np_photos_"+c.id,[])||[])[0]}catch(e){}return p||c.photo||null}
  function bookable(c){return (c.pkgs||[]).some(function(p){return p.p>0})}
  function colour(c){var k=c.cat;return /nightlife|beach|events/.test(k)?"#ED93B1":/indian|restaurants|grocery/.test(k)?"#F0997B":/hotels/.test(k)?"#378ADD":/spa/.test(k)?"#AFA9EC":"#5DCAA5"}
  function list(){var ch=CHIPS.find(function(x){return x[0]===chip}),t=q.trim().toLowerCase();
    return CLUBS.filter(function(c){if(!c||c.id==="np-test-restaurant")return false;
      if(chip==="book"&&!bookable(c))return false;if(ch&&ch[2]&&ch[2].indexOf(c.cat)<0)return false;
      return !t||[c.name,c.area,c.music,c.sub,c.type,(c.tags||[]).join(" "),(typeof CATNAME!=="undefined"?CATNAME[c.cat]:"")].join(" ").toLowerCase().indexOf(t)>-1})}

  /* ---------- styles + layout ---------- */
  if(!document.getElementById("npMapCss")){var st=document.createElement("style");st.id="npMapCss";
    st.textContent='#npMapWrap{position:relative;height:calc(100dvh - 210px);min-height:440px;border-radius:24px;overflow:hidden;border:1px solid rgba(255,255,255,.12);background:#0e0e12;margin:0 0 12px}'+
      '#npMapEl{position:absolute;inset:0;background:#0e0e12}#npMapEl .leaflet-control-attribution{background:rgba(0,0,0,.55);color:#aaa;font-size:9px}#npMapEl .leaflet-control-attribution a{color:#ccc}'+
      '.npmtop{position:absolute;left:10px;right:10px;top:10px;z-index:500;display:flex;flex-direction:column;gap:8px;pointer-events:none}.npmtop>*{pointer-events:auto}'+
      '.npmsearch{display:flex;align-items:center;gap:8px;padding:0 14px;height:48px;border-radius:999px;background:rgba(10,10,14,.92);border:1px solid rgba(255,255,255,.14);box-shadow:0 6px 20px rgba(0,0,0,.4)}'+
      '.npmsearch input{flex:1;min-width:0;border:0;background:none;color:#fff;font:inherit;font-size:15px;outline:none}.npmsearch button{border:0;background:none;color:#B4B2A9;font:inherit;font-size:14px}'+
      '.npmchips{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none}.npmchips::-webkit-scrollbar{display:none}.npmchips button{flex:0 0 auto;padding:9px 14px;border-radius:999px;font:inherit;font-size:13.5px;font-weight:600;color:#fff;background:rgba(10,10,14,.92);border:1px solid rgba(255,255,255,.16)}'+
      '.npmchips button.on{background:#fff;color:#111;border-color:#fff}'+
      '.npmloc{position:absolute;right:12px;bottom:16px;z-index:500;width:50px;height:50px;border-radius:50%;border:1px solid rgba(255,255,255,.2);background:rgba(10,10,14,.92);color:#fff;font-size:22px;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 18px rgba(0,0,0,.45)}'+
      '.npmbadge{position:absolute;left:12px;bottom:18px;z-index:500;padding:7px 12px;border-radius:999px;background:rgba(10,10,14,.92);border:1px solid rgba(255,255,255,.16);color:#D3D1C7;font-size:12px}'+
      '.npmpin{display:flex;align-items:center;gap:6px;white-space:nowrap}.npmpin .ph{position:relative;width:46px;height:46px;border-radius:12px;border:2px solid rgba(255,255,255,.85);background:#222 center/cover;box-shadow:0 4px 14px rgba(0,0,0,.6)}'+
      '.npmpin .ph i{position:absolute;top:-8px;right:-8px;width:20px;height:20px;border-radius:50%;background:#EF9F27;color:#1a1026;font-style:normal;font-size:11px;display:flex;align-items:center;justify-content:center;border:2px solid #111}'+
      '.npmpin b{font-size:12.5px;font-weight:600;color:#fff;text-shadow:0 1px 4px #000,0 0 2px #000}.npmzoomout .npmpin b{display:none}.npmpin.sel .ph{border-color:#EF9F27;transform:scale(1.15)}'+
      '.npmdot{width:14px;height:14px;border-radius:50%;border:2.5px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.6)}.npmdot.sel{transform:scale(1.5)}'+
      '.npmme{width:18px;height:18px;border-radius:50%;background:#3d8bfd;border:3px solid #fff;box-shadow:0 0 0 8px rgba(61,139,253,.25)}'+
      '#npMapCard{position:absolute;left:10px;right:70px;bottom:12px;z-index:600}#npMapCard .club{margin:0}#npMapCard .x{position:absolute;top:-10px;right:-10px;z-index:2;width:30px;height:30px;border-radius:50%;border:1px solid rgba(255,255,255,.3);background:#111;color:#fff}'+
      '#npMapFallback{position:absolute;inset:0;overflow:auto;padding:110px 10px 10px;background:#0e0e12}#npMapFallback svg{width:100%;height:auto}';
    document.head.appendChild(st)}
  function build(){
    if(built)return;built=true;
    [].forEach.call(sec.children,function(ch){if(!/sectiontitle/.test(ch.className))ch.style.display="none"});
    var w=document.createElement("div");w.id="npMapWrap";
    w.innerHTML='<div id="npMapEl" role="application" aria-label="Map of Pattaya venues"></div>'+
      '<div class="npmtop"><div class="npmsearch"><span aria-hidden="true">🔍</span><input id="npmQ" type="search" placeholder="Search venue, area, music, vibe..." aria-label="Search the map"><button id="npmClr" type="button">Clear</button></div>'+
      '<div class="npmchips" role="tablist">'+CHIPS.map(function(c){return '<button type="button" data-c="'+c[0]+'"'+(c[0]===chip?' class="on"':'')+'>'+esc(c[1])+'</button>'}).join("")+'</div></div>'+
      '<button class="npmloc" id="npmLoc" type="button" aria-label="Show my location">◎</button><div class="npmbadge" id="npmBadge" hidden></div><div id="npMapCard"></div>';
    var t=sec.querySelector(".sectiontitle");if(t)t.insertAdjacentElement("afterend",w);else sec.insertBefore(w,sec.firstChild);
    w.querySelector("#npmQ").oninput=function(){q=this.value;draw()};
    w.querySelector("#npmClr").onclick=function(){q="";w.querySelector("#npmQ").value="";chip="all";chips();draw()};
    w.querySelectorAll("[data-c]").forEach(function(b){b.onclick=function(){chip=b.dataset.c;chips();draw();fit()}});
    w.querySelector("#npmLoc").onclick=locate;
    start();
  }
  function chips(){document.querySelectorAll("#npMapWrap [data-c]").forEach(function(b){b.classList.toggle("on",b.dataset.c===chip)})}
  function badge(t){var b=document.getElementById("npmBadge");if(!b)return;b.hidden=!t;b.textContent=t||""}

  /* ---------- load the map library (saved on the phone for offline use) ---------- */
  async function getText(url){
    try{var r=await fetch(url,{mode:"cors"});if(r.ok){var c=r.clone();try{(await caches.open(LCACHE)).put(url,c)}catch(e){}return await r.text()}}catch(e){}
    try{var m=await (await caches.open(LCACHE)).match(url);if(m)return await m.text()}catch(e){}
    return null;
  }
  async function loadLib(){
    if(window.L&&window.L.map)return true;
    var css=await getText(LIBCSS),js=await getText(LIBJS);if(!js)return false;
    if(css){var s=document.createElement("style");s.textContent=css;document.head.appendChild(s)}
    try{var sc=document.createElement("script");sc.text=js;document.head.appendChild(sc)}catch(e){return false}
    return !!(window.L&&window.L.map);
  }

  /* ---------- tiles: from the internet, saved for offline; offline uses the saved ones ---------- */
  function tileLayer(){
    var TL=L.TileLayer.extend({createTile:function(coords,done){
      var img=document.createElement("img");img.alt="";img.setAttribute("role","presentation");
      var url=this.getTileUrl(coords);
      (async function(){
        var cache=null;try{cache=await caches.open(TCACHE)}catch(e){}
        async function fromCache(){if(!cache)return null;var m=await cache.match(url);return m?URL.createObjectURL(await m.blob()):null}
        var src=null;
        if(navigator.onLine!==false){try{var r=await fetch(url,{mode:"cors"});if(r.ok){var b=await r.clone().blob();src=URL.createObjectURL(b);if(cache){cache.put(url,r);trim(cache)}}}catch(e){}}
        if(!src)src=await fromCache();
        if(!src&&navigator.onLine!==false&&url.indexOf("api.maptiler.com")>=0){try{var osm=url.replace(/^https:\/\/api\.maptiler\.com\/maps\/[^\/]+\/256\/(\d+)\/(\d+)\/(\d+)\.png.*$/,"https://tile.openstreetmap.org/$1/$2/$3.png");var r2=await fetch(osm,{mode:"cors"});if(r2.ok){src=URL.createObjectURL(await r2.blob())}}catch(e){}}  /* MapTiler limit reached or down -> OpenStreetMap */
        if(!src&&navigator.onLine!==false)src=url;   /* online but the tile server blocks saving: show it normally */
        if(src){img.onload=function(){done(null,img)};img.onerror=function(){done(null,img)};img.src=src}
        else{img.src="data:image/gif;base64,R0lGODlhAQABAAAAACw=";done(null,img)}
      })();
      return img;
    }});
    return new TL(TILES,{maxZoom:19,minZoom:10,attribution:ATTR});
  }
  var trimT=null;function trim(cache){clearTimeout(trimT);trimT=setTimeout(async function(){try{var k=await cache.keys();for(var i=0;i<k.length-MAXT;i++)await cache.delete(k[i])}catch(e){}},4000)}

  async function start(){
    var ok=await loadLib();
    if(!ok){fallback();return}
    LF=window.L;
    map=LF.map("npMapEl",{zoomControl:false,attributionControl:true,preferCanvas:false}).setView([12.9272,100.8740],14);
    tileLayer().addTo(map);
    layer=LF.layerGroup().addTo(map);
    map.on("zoomend",function(){document.getElementById("npMapWrap").classList.toggle("npmzoomout",map.getZoom()<14)});
    map.on("click",function(){card(null)});
    draw();
    if(navigator.onLine===false)badge("Offline · showing saved map");
    setTimeout(function(){map.invalidateSize()},300);
  }
  function fit(){if(!map)return;var l=list();if(!l.length)return;var b=LF.latLngBounds(l.map(ll));map.fitBounds(b.pad(0.15),{maxZoom:16})}
  var sel=null;
  function draw(){
    if(!map){if(document.getElementById("npMapFallback"))fallbackDraw();return}
    layer.clearLayers();var l=list();
    l.forEach(function(c){
      var p=photo(c),html,size,anchor;
      if(p){html='<div class="npmpin'+(sel===c.id?' sel':'')+'"><div class="ph" style="background-image:url(\''+esc(p)+'\')">'+(bookable(c)?'<i>⚡</i>':'')+'</div><b>'+esc(c.name)+'</b></div>';size=[180,50];anchor=[23,25]}
      else{html='<div class="npmdot'+(sel===c.id?' sel':'')+'" style="background:'+colour(c)+'"></div>';size=[14,14];anchor=[7,7]}
      var m=LF.marker(ll(c),{icon:LF.divIcon({html:html,className:"",iconSize:size,iconAnchor:anchor}),title:c.name,keyboard:true,riseOnHover:true,zIndexOffset:p?500:0});
      m.on("click",function(){sel=c.id;card(c);draw()});layer.addLayer(m);
    });
    badge(l.length?(navigator.onLine===false?"Offline · ":"")+l.length+" places":"Nothing found here");
  }
  function card(c){
    var box=document.getElementById("npMapCard");if(!box)return;box.innerHTML="";if(!c){sel=null;return}
    try{mapSel=c.id;var mc=document.getElementById("mapcard");if(typeof renderMapCard==="function"){renderMapCard();if(mc&&mc.firstChild){box.appendChild(mc.firstChild)}}}catch(e){}
    if(!box.firstChild){var b=document.createElement("button");b.className="cta";b.textContent="Open "+c.name;b.onclick=function(){openClub(c)};box.appendChild(b)}
    var x=document.createElement("button");x.className="x";x.setAttribute("aria-label","Close");x.textContent="×";x.onclick=function(e){e.stopPropagation();card(null);draw()};box.appendChild(x);
  }
  function locate(){
    if(!navigator.geolocation){alert("Location is not available on this phone.");return}
    navigator.geolocation.getCurrentPosition(function(p){
      var at=[p.coords.latitude,p.coords.longitude];
      if(map){if(me)me.remove();me=LF.marker(at,{icon:LF.divIcon({html:'<div class="npmme"></div>',className:"",iconSize:[18,18],iconAnchor:[9,9]}),zIndexOffset:1000}).addTo(map);map.setView(at,16)}
      else alert("Your location: "+at[0].toFixed(4)+", "+at[1].toFixed(4));
    },function(){alert("Please allow location for this site to see where you are.")},{enableHighAccuracy:true,timeout:12000,maximumAge:60000});
  }

  /* ---------- no map library and no saved copy: simple Pattaya map (always works offline) ---------- */
  function fallback(){
    var w=document.getElementById("npMapWrap");if(!w)return;
    var f=document.createElement("div");f.id="npMapFallback";var mb=document.getElementById("mapbox");
    if(mb){mb.style.display="";f.appendChild(mb)}var mc=document.getElementById("mapcard");if(mc){mc.style.display="";f.appendChild(mc)}w.insertBefore(f,w.firstChild);
    badge("Offline · simple map");fallbackDraw();
  }
  function fallbackDraw(){try{if(typeof renderMap==="function")renderMap()}catch(e){}}

  if(typeof go==="function"){var _go=go;go=function(t){_go(t);if(t==="map"){build();if(map)setTimeout(function(){map.invalidateSize()},200)}}}
  if(!sec.hidden)build();
  window.addEventListener("online",function(){badge("");if(!map&&built){var f=document.getElementById("npMapFallback");if(f)f.remove();start()}else if(map)draw()});
  window.addEventListener("offline",function(){badge("Offline · showing saved map")});
})();

/* ===== Recent screens (1 Oct 2026): a multitasking / task switcher like the phone's Overview screen.
   Every important screen you open is kept as a card: swipe between them, tap to jump back,
   swipe a card up (or ✕) to close it, "Close all". Open it from More → Recent screens,
   or press and hold any button in the bottom menu. ===== */
(function(){
  var KEY="np_recents",MAX=14,busyOpen=false;
  var SEC={explore:["Home","me","#7F77DD","🏠"],map:["Map","services","#378ADD","🗺️"],bookings:["My bookings","me","#F0997B","🎟️"],earn:["Earn & referrals","agent","#1D9E75","💰"],
    concierge:["Raju chat","me","#7F77DD","💬"],buddy:["Boomer","me","#ED93B1","❤️"],ladies:["Empowered Girls","me","#ED93B1","🌸"],mall:["Namaste Mall","services","#F0997B","🛍️"],
    packages:["Packages","services","#F0997B","🎁"],paybill:["Pay my bill","me","#1D9E75","🧾"],dash:["Partner dashboard","partner","#378ADD","📊"],clubs:["Clubs","services","#F0997B","🪩"]};
  var GROUPS=[["all","All"],["services","Services"],["me","My app"],["partner","Partners"],["agent","Agents"],["admin","Admin"]];
  var grp="all";
  function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
  function load(){try{return JSON.parse(localStorage.getItem(KEY)||"[]")}catch(e){return []}}
  function save(a){try{localStorage.setItem(KEY,JSON.stringify(a.slice(0,MAX)))}catch(e){}}
  function add(it){if(busyOpen)return;it.t=Date.now();var a=load().filter(function(x){return x.k!==it.k});a.unshift(it);save(a)}
  function ago(t){var m=Math.round((Date.now()-t)/60000);return m<1?"just now":m<60?m+" min ago":m<1440?Math.round(m/60)+" h ago":Math.round(m/1440)+" d ago"}
  function isAdmin(){var b=document.getElementById("npBell");return !!(b&&b.classList.contains("show"))}
  function isStaff(){var d=document.getElementById("dVenue");return isAdmin()||!!(d&&[].some.call(d.options,function(o){return o.value&&o.value!=="__none"})&&d.dataset.allow)}

  /* ---------- remember screens ---------- */
  function wrap(name,fn){if(typeof window[name]!=="function")return;var orig=window[name];window[name]=function(){try{fn.apply(null,arguments)}catch(e){}return orig.apply(this,arguments)}}
  if(typeof go==="function"){var _go=go;go=function(t){try{if(SEC[t])add({k:"go:"+t,ty:"sec",id:t})}catch(e){}return _go.apply(this,arguments)}}
  if(typeof openClub==="function"){var _oc=openClub;openClub=function(c){try{if(c&&c.id)add({k:"v:"+c.id,ty:"venue",id:c.id})}catch(e){}return _oc.apply(this,arguments)}}
  wrap("openService",function(cat){add({k:"s:"+cat,ty:"svc",id:cat})});
  wrap("npControlCenter",function(){add({k:"f:cc",ty:"fn",id:"npControlCenter",ti:"Control Center",g:"admin",c:"#EF9F27",e:"🔔"})});
  wrap("npMeetAdmin",function(){add({k:"f:meetadm",ty:"fn",id:"npMeetAdmin",ti:"Verify women & reports",g:"admin",c:"#EF9F27",e:"✅"})});
  wrap("npAgentsAdmin",function(){add({k:"f:agadm",ty:"fn",id:"npAgentsAdmin",ti:"Agents (admin)",g:"admin",c:"#EF9F27",e:"🤝"})});
  wrap("npOpenAgent",function(){add({k:"f:agent",ty:"fn",id:"npOpenAgent",ti:"Agent dashboard",g:"agent",c:"#1D9E75",e:"🤝"})});

  /* ---------- what a card shows ---------- */
  function info(x){
    var C=typeof CLUBS!=="undefined"?CLUBS:[];
    if(x.ty==="sec"){var s=SEC[x.id]||[x.id,"me","#7F77DD","•"];return {ti:s[0],sub:"Screen",g:s[1],c:s[2],e:s[3]}}
    if(x.ty==="venue"){var v=C.find(function(c){return c.id===x.id});if(!v)return null;var ph=null;try{ph=(store.get("np_photos_"+v.id,[])||[])[0]}catch(e){}
      return {ti:v.name,sub:[v.area,v.music||v.sub].filter(Boolean).join(" · "),g:"services",c:"#F0997B",e:"🪩",ph:ph||v.photo||null}}
    if(x.ty==="svc"){var n=(typeof CATNAME!=="undefined"&&CATNAME[x.id])||x.id;return {ti:n,sub:"Service",g:"services",c:"#F0997B",e:"✨",ph:"photos/"+x.id+".jpg"}}
    if(x.ty==="fn")return {ti:x.ti,sub:x.g==="admin"?"Admin":"Earnings",g:x.g,c:x.c,e:x.e};
    return null;
  }
  function reopen(x){
    busyOpen=true;try{
      if(x.ty==="sec"&&typeof go==="function")go(x.id);
      else if(x.ty==="venue"){var v=CLUBS.find(function(c){return c.id===x.id});if(v)openClub(v)}
      else if(x.ty==="svc"&&window.openService)window.openService(x.id);
      else if(x.ty==="fn"&&typeof window[x.id]==="function")window[x.id]();
    }finally{busyOpen=false}
    add(x);
  }
  function shortcuts(){
    var s=[["Home",function(){go("explore")},"🏠"],["Map",function(){go("map")},"🗺️"],["Bookings",function(){go("bookings")},"🎟️"],["Meet",function(){go("buddy")},"❤️"],["Raju",function(){var r=document.querySelector("#rajuFab,.rajufab,[data-raju-open]");if(r)r.click();else go("concierge")},"💬"],
      ["Earnings",function(){if(window.npOpenAgent)npOpenAgent();else go("earn")},"💰"]];
    if(isStaff())s.push(["Club dashboard",function(){go("dash")},"📊"],["Restaurant",function(){location.href="restaurant.html"},"🍛"]);
    if(isAdmin())s.push(["Control Center",function(){npControlCenter()},"🔔"]);
    return s;
  }

  /* ---------- the switcher ---------- */
  if(!document.getElementById("npRecCss")){var st=document.createElement("style");st.id="npRecCss";
    st.textContent='#npRec{position:fixed;inset:0;z-index:10050;background:rgba(8,6,16,.86);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);display:flex;flex-direction:column;color:#fff;padding:calc(14px + env(safe-area-inset-top)) 0 calc(14px + env(safe-area-inset-bottom))}'+
      '#npRec .hd{display:flex;align-items:center;justify-content:space-between;padding:0 18px}#npRec .hd b{font-size:20px}#npRec .hd button{border:0;background:rgba(255,255,255,.1);color:#fff;width:40px;height:40px;border-radius:50%;font-size:20px}'+
      '#npRec .gr{display:flex;gap:8px;overflow-x:auto;padding:12px 18px 6px;scrollbar-width:none}#npRec .gr::-webkit-scrollbar{display:none}#npRec .gr button{flex:0 0 auto;padding:8px 14px;border-radius:999px;font:inherit;font-size:13px;font-weight:600;color:#fff;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.16)}#npRec .gr button.on{background:#fff;color:#111}'+
      '#npRec .row{flex:1;display:flex;gap:16px;overflow-x:auto;scroll-snap-type:x mandatory;padding:18px 12%;align-items:center;scrollbar-width:none}#npRec .row::-webkit-scrollbar{display:none}'+
      '#npRec .cd{position:relative;flex:0 0 76%;max-width:340px;height:min(62vh,520px);scroll-snap-align:center;display:flex;flex-direction:column;transition:transform .25s,opacity .25s}'+
      '#npRec .cd .tp{display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:10px;font-size:14px;font-weight:600}#npRec .cd .tp i{font-style:normal;width:34px;height:34px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px}'+
      '#npRec .cd .bd{flex:1;border-radius:24px;overflow:hidden;position:relative;border:1px solid rgba(255,255,255,.16);background:#141225;box-shadow:0 18px 40px rgba(0,0,0,.5);cursor:pointer}'+
      '#npRec .cd .ph{position:absolute;inset:0;background:center/cover no-repeat}#npRec .cd .gl{position:absolute;inset:0}#npRec .cd .tx{position:absolute;left:0;right:0;bottom:0;padding:60px 18px 18px;background:linear-gradient(180deg,transparent,rgba(0,0,0,.85))}'+
      '#npRec .cd .tx b{display:block;font-size:22px}#npRec .cd .tx small{display:block;opacity:.85;font-size:13px;margin-top:4px}#npRec .cd .big{position:absolute;top:28%;left:0;right:0;text-align:center;font-size:72px;opacity:.9}'+
      '#npRec .cd .x{position:absolute;top:34px;right:-8px;z-index:3;width:34px;height:34px;border-radius:50%;border:1px solid rgba(255,255,255,.3);background:#111;color:#fff;font-size:16px}'+
      '#npRec .cd.gone{transform:translateY(-120%);opacity:0}#npRec .emp{flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:0 30px;opacity:.85}'+
      '#npRec .sc{display:flex;gap:8px;overflow-x:auto;padding:4px 18px 10px;scrollbar-width:none}#npRec .sc::-webkit-scrollbar{display:none}#npRec .sc button{flex:0 0 auto;display:flex;flex-direction:column;align-items:center;gap:4px;width:74px;padding:10px 4px;border-radius:16px;font:inherit;font-size:11.5px;color:#fff;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12)}#npRec .sc button span{font-size:22px}'+
      '#npRec .ca{align-self:center;margin-top:6px;padding:12px 34px;border-radius:999px;border:0;font:inherit;font-size:16px;font-weight:700;background:rgba(255,255,255,.14);color:#fff}';
    document.head.appendChild(st)}
  function open(){
    var old=document.getElementById("npRec");if(old)old.remove();
    var o=document.createElement("div");o.id="npRec";o.setAttribute("role","dialog");o.setAttribute("aria-label","Recent screens");
    document.body.appendChild(o);document.body.style.overflow="hidden";draw();
    try{if(window.npTrack)npTrack("service_open","recent_screens")}catch(e){}
  }
  function closeSw(){var o=document.getElementById("npRec");if(o)o.remove();document.body.style.overflow=""}
  window.npRecents=open;
  function draw(){
    var o=document.getElementById("npRec");if(!o)return;
    var items=load().map(function(x){var i=info(x);return i?{x:x,i:i}:null}).filter(Boolean).filter(function(r){return r.i.g!=="admin"||isAdmin()});
    var show=items.filter(function(r){return grp==="all"||r.i.g===grp});
    var gs=GROUPS.filter(function(g){return g[0]==="all"||items.some(function(r){return r.i.g===g[0]})});
    o.innerHTML='<div class="hd"><b>Recent screens</b><button type="button" id="rcX" aria-label="Close">×</button></div>'+
      '<div class="gr">'+gs.map(function(g){return '<button type="button" data-g="'+g[0]+'" class="'+(g[0]===grp?"on":"")+'">'+g[1]+'</button>'}).join("")+'</div>'+
      (show.length?'<div class="row">'+show.map(function(r,n){var i=r.i;
        return '<div class="cd" data-n="'+n+'"><div class="tp"><i style="background:'+i.c+'">'+i.e+'</i>'+esc(i.ti)+'</div><div class="bd" data-open="'+n+'">'+
          (i.ph?'<div class="ph" style="background-image:url(\''+esc(i.ph)+'\')"></div>':'<div class="gl" style="background:radial-gradient(circle at 75% 20%,'+i.c+'88,transparent 55%),radial-gradient(circle at 15% 85%,'+i.c+'44,transparent 50%),#141225"></div><div class="big">'+i.e+'</div>')+
          '<div class="tx"><b>'+esc(i.ti)+'</b><small>'+esc(i.sub||"")+' · '+ago(r.x.t)+'</small></div></div><button type="button" class="x" data-x="'+n+'" aria-label="Close '+esc(i.ti)+'">✕</button></div>'}).join("")+'</div>'
        :'<div class="emp">No recent screens yet. Open clubs, services or dashboards and they will appear here.</div>')+
      '<div class="sc" aria-label="Quick open">'+shortcuts().map(function(s,n){return '<button type="button" data-s="'+n+'"><span>'+s[2]+'</span>'+esc(s[0])+'</button>'}).join("")+'</div>'+
      (show.length?'<button type="button" class="ca" id="rcAll">Close all</button>':'');
    o.querySelector("#rcX").onclick=closeSw;
    o.querySelectorAll("[data-g]").forEach(function(b){b.onclick=function(){grp=b.dataset.g;draw()}});
    var sc=shortcuts();o.querySelectorAll("[data-s]").forEach(function(b){b.onclick=function(){closeSw();try{sc[+b.dataset.s][1]()}catch(e){}}});
    var ca=o.querySelector("#rcAll");if(ca)ca.onclick=function(){var keep=load().filter(function(x){var i=info(x);return i&&!(grp==="all"||i.g===grp)});save(keep);draw()};
    function remove(n){var r=show[n];if(!r)return;var cd=o.querySelector('.cd[data-n="'+n+'"]');if(cd)cd.classList.add("gone");
      setTimeout(function(){save(load().filter(function(x){return x.k!==r.x.k}));draw()},230)}
    o.querySelectorAll("[data-x]").forEach(function(b){b.onclick=function(e){e.stopPropagation();remove(+b.dataset.x)}});
    o.querySelectorAll("[data-open]").forEach(function(b){
      var n=+b.dataset.open,y0=null,dy=0,cd=b.parentNode;
      b.addEventListener("touchstart",function(e){y0=e.touches[0].clientY;dy=0;cd.style.transition="none"},{passive:true});
      b.addEventListener("touchmove",function(e){if(y0===null)return;dy=Math.min(0,e.touches[0].clientY-y0);cd.style.transform="translateY("+dy+"px)";cd.style.opacity=String(1+dy/400)},{passive:true});
      b.addEventListener("touchend",function(){cd.style.transition="";if(dy<-110){remove(n)}else{cd.style.transform="";cd.style.opacity=""}y0=null});
      b.onclick=function(){if(dy<-20)return;var r=show[n];closeSw();try{if(typeof closeSheet==="function")closeSheet()}catch(e){}reopen(r.x)};
    });
    var row=o.querySelector(".row");if(row)row.scrollLeft=0;
  }

  /* ---------- ways to open it ---------- */
  new MutationObserver(function(){
    var m=document.querySelector("#npMoreSheet .in");if(!m||m.querySelector("#npRecBtn"))return;
    var b=document.createElement("button");b.type="button";b.className="it";b.id="npRecBtn";
    b.innerHTML='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="6" width="12" height="15" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v12"/></svg>Recent screens';
    b.onclick=function(){var s=document.getElementById("npMoreSheet");if(s)s.remove();open()};
    var h=m.querySelector("h4");if(h)h.insertAdjacentElement("afterend",b);else m.insertBefore(b,m.firstChild);
  }).observe(document.body,{childList:true});
  /* press and hold any bottom-menu button */
  var hold=null,held=false;
  document.addEventListener("touchstart",function(e){var t=e.target.closest&&e.target.closest("nav button,nav a,.tabs button,#npMoreTab");if(!t)return;held=false;clearTimeout(hold);
    hold=setTimeout(function(){held=true;try{navigator.vibrate&&navigator.vibrate(20)}catch(x){}open()},550)},{passive:true});
  ["touchend","touchmove","touchcancel"].forEach(function(n){document.addEventListener(n,function(){clearTimeout(hold)},{passive:true})});
  document.addEventListener("click",function(e){if(held&&e.target.closest&&e.target.closest("nav,.tabs")){e.preventDefault();e.stopPropagation();held=false}},true);
  document.addEventListener("keydown",function(e){if(e.key==="Escape")closeSw()});
})();

/* ===== Booking rules table above the privacy tick on every service booking page (1 Oct 2026).
   Rows depend on the type of venue; the tick now also accepts these rules. ===== */
(function(){
  if(typeof panel==="undefined")return;
  var NIGHT=["nightlife","beach","events"],FOOD=["restaurants","indian","grocery"];
  function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
  if(!document.getElementById("npRulesCss")){var st=document.createElement("style");st.id="npRulesCss";
    st.textContent='#npRulesPop{position:fixed;inset:0;z-index:10060;background:rgba(5,4,12,.72);display:flex;align-items:center;justify-content:center;padding:12px}'+
      '#npRulesPop .bx{width:100%;max-width:520px;max-height:86vh;overflow:auto;background:#141225;border:1px solid rgba(237,147,177,.5);border-radius:22px;padding:16px 16px calc(16px + env(safe-area-inset-bottom));color:#F3EFFF}'+
      '#npRulesPop .hd{display:flex;justify-content:space-between;align-items:center}#npRulesPop .hd b{font-size:18px}#npRulesPop .x{width:36px;height:36px;border-radius:50%;border:1px solid rgba(255,255,255,.2);background:none;color:#fff;font-size:20px}'+
      '#npRulesPop .vn{margin:2px 0 8px;font-size:13px;color:#F4C0D1}#npRulesPop table{width:100%;border-collapse:collapse;font-size:13px;line-height:1.4}'+
      '#npRulesPop th{width:36%;text-align:left;vertical-align:top;font-weight:600;padding:8px 8px 8px 0;color:#F4C0D1}#npRulesPop td{vertical-align:top;padding:8px 0;color:#E6E1F5}'+
      '#npRulesPop tr+tr th,#npRulesPop tr+tr td{border-top:1px solid rgba(255,255,255,.08)}#npRulesPop h5{margin:14px 0 4px;font-size:15px}#npRulesPop .pp{margin:0;font-size:13px;line-height:1.45;color:#E6E1F5}'+
      '#npRulesPop .full{display:inline-block;margin:10px 0 14px;color:#EF9F27;font-weight:600;font-size:13px}#npRulesPop .ok{display:block;width:100%;padding:13px;border:0;border-radius:14px;background:#E9B949;color:#1a1026;font:inherit;font-weight:700;font-size:15px}'+
      '.nppdpa .nprulesv{display:inline-block;margin-top:4px;color:#E5861A;font-weight:600}';
    document.head.appendChild(st)}
  function venue(){var t=panel.querySelector("#sheetTitle");if(!t||typeof CLUBS==="undefined")return null;var n=t.textContent.trim();return CLUBS.find(function(c){return c.name===n})||null}
  function rows(c){
    var cat=c?c.cat:"",pct=0;try{pct=(window.npAdvanceSettings||{})[c&&c.id]||0}catch(e){}
    var r=[];
    if(NIGHT.indexOf(cat)>-1)r.push(["👤 Age and ID","20+ only (Thai law). Bring your passport or a copy."]);
    r.push(["💳 Payment",pct?pct+"% advance to reserve. The rest can be paid online or at the venue.":"No advance needed. You can pay online or at the venue."]);
    r.push(["❌ Cancellation",pct?"No cancellation or refund after the advance is paid.":"You can cancel in My bookings before your visit."]);
    if(FOOD.indexOf(cat)>-1)r.push(["⏰ Time","Arrive on time. For delivery, someone must be at the address."]);
    else if(NIGHT.indexOf(cat)>-1)r.push(["⏰ Arrival","Arrive on time. Late tables may be given to other guests."]);
    else r.push(["⏰ Time","Be ready at the booked time. The provider confirms the details with you."]);
    r.push(["🧾 Bill","Prices come from the venue. Service charge and VAT may be added on the bill."]);
    if(NIGHT.indexOf(cat)>-1)r.push(["🚭 House rules","Dress code and venue rules apply. Illegal drugs are strictly not allowed (Thai law)."]);
    else r.push(["📋 Venue rules","The venue's or provider's own rules apply."]);
    r.push(["🤝 Our role","Namaste Pattaya is a booking platform. The venue or provider gives the service and is responsible for it."]);
    r.push(["🙋 Behaviour","Be respectful to staff and other guests. No illegal activity. The venue may refuse entry or service."]);
    r.push(["🔒 Your data","Your name and phone go only to this venue for this booking (PDPA). You can ask us to delete them."]);
    return r;
  }
  function sync(){
    if(!panel.querySelector("#pkgs"))return;
    var book=panel.querySelector("#book"),lab=panel.querySelector(".nppdpa");
    /* every service booking page gets the privacy tick (some pages were missing it) */
    if(!lab&&book){lab=document.createElement("label");lab.className="nppdpa";
      lab.innerHTML='<input type="checkbox"><span>I agree that Namaste Pattaya and this venue use my name, phone number only to handle this booking. <a href="privacy.html" target="_blank" rel="noopener">Privacy policy</a></span>';
      book.insertAdjacentElement("beforebegin",lab)}
    if(!lab)return;
    var c=venue(),key=(c?c.id:"")+"|"+((window.npAdvanceSettings||{})[c&&c.id]||0);
    if(lab.dataset.rk===key&&lab.querySelector(".nprulesv"))return;
    lab.dataset.rk=key;
    var sp=lab.querySelector("span");if(!sp)return;
    var del=/address|location/i.test(sp.textContent)||!!panel.querySelector(".npdel");
    sp.innerHTML='<b>I agree to the Terms &amp; Conditions</b>'+(del?' (incl. my delivery address)':'')+'. <a href="#" class="nprulesv">Read Terms &amp; Conditions</a>';
    sp.querySelector(".nprulesv").onclick=function(e){e.preventDefault();e.stopPropagation();pop(c)};
  }
  function pop(c){
    var old=document.getElementById("npRulesPop");if(old)old.remove();
    var o=document.createElement("div");o.id="npRulesPop";o.setAttribute("role","dialog");o.setAttribute("aria-modal","true");o.setAttribute("aria-label","Terms and Conditions");
    o.innerHTML='<div class="bx"><div class="hd"><b>Terms &amp; Conditions</b><button type="button" class="x" aria-label="Close">×</button></div>'+
      (c?'<p class="vn">'+esc(c.name)+'</p>':'')+
      '<table>'+rows(c).map(function(x){return '<tr><th scope="row">'+esc(x[0])+'</th><td>'+esc(x[1])+'</td></tr>'}).join("")+'</table>'+
      '<h5>Privacy policy (short)</h5><p class="pp">We use your name and phone number only to handle this booking, and share them only with this venue. We do not sell your data. You can ask us to see or delete your data at any time (Thailand PDPA).</p>'+
      '<a class="full" href="privacy.html" target="_blank" rel="noopener">Read the full privacy policy</a>'+
      '<button type="button" class="ok">I understand</button></div>';
    document.body.appendChild(o);
    function close(){o.remove()}
    o.querySelector(".x").onclick=close;o.querySelector(".ok").onclick=close;o.onclick=function(e){if(e.target===o)close()};
    o.querySelector(".ok").focus();
  }
  var busy=false;
  new MutationObserver(function(){if(busy)return;busy=true;requestAnimationFrame(function(){busy=false;try{sync()}catch(e){}})}).observe(panel,{childList:true,subtree:true});
})();

/* ===== Raju language button (7 Oct 2026): a "🌐 English ▾" button in the Home Raju box and in the bottom-right Raju chat.
   It uses the SAME language setting as the app menu, so Raju and the full app change together. Nothing removed. ===== */
(function(){
  var L=[["en","English","English"],["hi","हिंदी","Hindi"],["pa","ਪੰਜਾਬੀ","Punjabi"],["gu","ગુજરાતી","Gujarati"],["ta","தமிழ்","Tamil"],["mr","मराठी","Marathi"],["th","ไทย","Thai"],["bn","বাংলা","Bengali"],["te","తెలుగు","Telugu"],["bho","भोजपुरी","Bhojpuri"]];
  var NAME=/Raju|राजू|ਰਾਜੂ|રાજુ|ராஜு|ராஜூ|ราจู/;
  var POP="#panel,.sheet,#npMoreSheet,#npLangSheet";
  function cur(){var l="en";try{l=localStorage.getItem("np_lang")||"en"}catch(e){}for(var i=0;i<L.length;i++)if(L[i][0]===l)return L[i];return L[0]}
  function vis(el){return !!(el&&el.getClientRects().length)}
  if(!document.getElementById("npLangBtnCss")){
    var st=document.createElement("style");st.id="npLangBtnCss";
    st.textContent='.nplrow{display:flex;justify-content:flex-end;margin:6px 0}'+
      '.nplbtn{display:inline-flex;align-items:center;gap:6px;border:1px solid #7F77DD;background:#26215C;color:#CECBF6;border-radius:999px;padding:6px 12px;font-size:13px;font-weight:600;cursor:pointer;min-height:34px}'+
      '#npLangSheet{position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.55);display:flex;align-items:flex-end;justify-content:center}'+
      '#npLangSheet .in{width:100%;max-width:480px;background:#17132a;color:#f2eefc;border-radius:20px 20px 0 0;padding:18px 16px calc(18px + env(safe-area-inset-bottom,0px))}'+
      '#npLangSheet .hd{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;font-weight:700;font-size:17px}'+
      '#npLangSheet .x{background:none;border:0;color:#f2eefc;font-size:22px;width:40px;height:40px;cursor:pointer}'+
      '#npLangSheet .g{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}'+
      '#npLangSheet .o{border:1px solid #3a2f5c;background:#1f1a36;color:#f2eefc;border-radius:14px;padding:12px;text-align:left;font-size:16px;cursor:pointer}'+
      '#npLangSheet .o small{display:block;color:#b3a9d6;font-size:12px;margin-top:2px}#npLangSheet .o.on{border-color:#7F77DD;background:#26215C;color:#CECBF6}#npLangSheet .in{border-top:1px solid #534AB7}';
    document.head.appendChild(st);
  }
  /* change the language with the app's fast switch (see "Fast language change" below) */
  function setLang(code){if(typeof window.npFastLang==="function")window.npFastLang(code);else{try{localStorage.setItem("np_lang",code)}catch(e){}location.reload()}}
  function openSheet(){
    var old=document.getElementById("npLangSheet");if(old)old.remove();
    var c=cur()[0],o=document.createElement("div");o.id="npLangSheet";
    o.className="notranslate";o.setAttribute("translate","no");o.innerHTML='<div class="in" role="dialog" aria-label="Choose language"><div class="hd"><span>🌐 Choose language</span><button class="x" aria-label="Close">×</button></div><div class="g">'+
      L.map(function(x){return '<button class="o'+(x[0]===c?" on":"")+'" data-l="'+x[0]+'">'+x[1]+'<small>'+x[2]+'</small></button>'}).join("")+'</div></div>';
    document.body.appendChild(o);
    function close(){o.remove()}
    o.querySelector(".x").onclick=close;o.onclick=function(e){if(e.target===o)close()};
    [].forEach.call(o.querySelectorAll(".o"),function(b){b.onclick=function(){var l=b.getAttribute("data-l");close();setLang(l)}});
  }
  function refresh(){var c=cur();[].forEach.call(document.querySelectorAll(".nplbtn span"),function(s){if(s.textContent!==c[1])s.textContent=c[1]})}
  /* find Raju's text boxes: the Home Raju box and the bottom-right Raju chat */
  function targets(){
    return [].slice.call(document.querySelectorAll('input[type="text"],input:not([type]),input[type="search"],textarea')).filter(function(inp){
      if(inp.closest(POP))return false;
      if(inp.closest("#rajuChat"))return true;
      var a=inp;for(var i=0;i<4&&a.parentElement;i++){a=a.parentElement;var t=a.textContent||"";if(t.length>1500)return false;if(NAME.test(t))return true}
      return false;
    });
  }
  function attach(){
    targets().forEach(function(inp){
      var row=(inp.parentElement&&inp.parentElement.querySelector("button")&&inp.parentElement.tagName!=="FORM")?inp.parentElement:inp;
      var prev=row.previousElementSibling;if(prev&&prev.classList.contains("nplrow"))return;
      if(row.parentElement&&row.parentElement.querySelector(":scope > .nplrow"))return;
      var r=document.createElement("div");r.className="nplrow notranslate";r.setAttribute("translate","no");
      r.innerHTML='<button type="button" class="nplbtn" aria-label="Change language">🌐 <span>'+cur()[1]+'</span> ▾</button>';
      r.querySelector("button").onclick=function(e){e.preventDefault();e.stopPropagation();openSheet()};
      row.insertAdjacentElement("beforebegin",r);
    });
    refresh();
  }
  var busy=false;
  new MutationObserver(function(){if(busy)return;busy=true;setTimeout(function(){busy=false;try{attach()}catch(e){}},250)}).observe(document.body,{childList:true,subtree:true});
  window.addEventListener("storage",refresh);
  try{attach()}catch(e){}
})();

/* ===== 7 Oct 2026: fast language change (no full reload), suggestion buttons in the chosen language,
   and Raju's fixed English lines translated. Only added; the old reload way stays as backup. ===== */
(function(){
  var NAMES={en:"English",hi:"Hindi",pa:"Punjabi",gu:"Gujarati",ta:"Tamil",mr:"Marathi",th:"Thai",bn:"Bengali",te:"Telugu",bho:"Bhojpuri"};
  var SHORT={en:"EN",hi:"हि",pa:"ਪੰ",gu:"ગુ",ta:"த",mr:"म",th:"ไท",bn:"বা",te:"తె",bho:"भो"};
  var NATIVE={en:"English",hi:"हिंदी",pa:"ਪੰਜਾਬੀ",gu:"ગુજરાતી",ta:"தமிழ்",mr:"मराठी",th:"ไทย",bn:"বাংলা",te:"తెలుగు",bho:"भोजपुरी"};
  var WAITTXT={en:"Changing language…",hi:"भाषा बदल रही है…",pa:"ਭਾਸ਼ਾ ਬਦਲ ਰਹੀ ਹੈ…",gu:"ભાષા બદલાઈ રહી છે…",ta:"மொழி மாறுகிறது…",mr:"भाषा बदलत आहे…",th:"กำลังเปลี่ยนภาษา…",bn:"ভাষা বদলাচ্ছে…",te:"భాష మారుతోంది…",bho:"भाषा बदलत बा…"};
  var SCRIPT={hi:/[\u0900-\u097F]/g,mr:/[\u0900-\u097F]/g,pa:/[\u0A00-\u0A7F]/g,gu:/[\u0A80-\u0AFF]/g,ta:/[\u0B80-\u0BFF]/g,th:/[\u0E00-\u0E7F]/g,bn:/[\u0980-\u09FF]/g,te:/[\u0C00-\u0C7F]/g,bho:/[\u0900-\u097F]/g};
  function getLang(){try{return localStorage.getItem("np_lang")||"en"}catch(e){return "en"}}
  function setCookie(l){
    var exp=(l==="en")?"; expires=Thu, 01 Jan 1970 00:00:00 GMT":"",v=(l==="en")?"":"/en/"+l;
    document.cookie="googtrans="+v+"; path=/"+exp;
    document.cookie="googtrans="+v+"; path=/; domain="+location.hostname+exp;
  }
  function overlay(l,on){
    var o=document.getElementById("npLangWait");
    if(!on){if(o)o.remove();return}
    if(!o){o=document.createElement("div");o.id="npLangWait";o.className="notranslate";o.setAttribute("translate","no");
      o.style.cssText="position:fixed;left:50%;top:40%;transform:translate(-50%,-50%);z-index:100000;background:#26215C;color:#CECBF6;border:1px solid #7F77DD;border-radius:999px;padding:12px 20px;font-weight:600;font-size:15px;box-shadow:0 8px 30px rgba(0,0,0,.5)";
      document.body.appendChild(o)}
    o.textContent="🌐 "+(WAITTXT[l]||WAITTXT.en);
  }
  function labels(l){
    var b=document.querySelector("#npxLang b");if(b)b.textContent=NAMES[l]||"English";
    [].forEach.call(document.querySelectorAll(".langbtn"),function(btn){var n=btn.lastChild;if(n&&n.nodeType===3)n.nodeValue=SHORT[l]||"EN"});
    [].forEach.call(document.querySelectorAll(".nplbtn span"),function(s){s.textContent=NATIVE[l]||"English"});
  }
  function reload(){setTimeout(function(){location.reload()},60)}
  window.npLiveLang=function(l){
    if(!NAMES[l])return;
    var cur=getLang();
    try{localStorage.setItem("np_lang",l)}catch(e){}
    if(l===cur)return;
    setCookie(l);document.documentElement.lang=l;overlay(l,true);
    var sel=document.querySelector("select.goog-te-combo");
    var has=sel&&[].some.call(sel.options,function(o){return o.value===l});
    if(!has)return reload();
    sel.value=l;sel.dispatchEvent(new Event("change",{bubbles:true}));
    labels(l);
    setTimeout(function(){overlay(l,false)},900);
    /* safety: if the page did not change, do it the old way (reload) */
    setTimeout(function(){
      var tr=/translated-(ltr|rtl)/.test(document.documentElement.className);
      if((l==="en"&&tr)||(l!=="en"&&!tr)){overlay(l,true);reload()}
    },l==="en"?1800:4500);
  };
  /* the app's own language menu uses the fast way too */
  document.addEventListener("click",function(e){
    var b=e.target.closest&&e.target.closest(".langlist [data-l]");if(!b)return;
    e.preventDefault();e.stopImmediatePropagation();
    try{if(typeof closeSheet==="function")closeSheet()}catch(err){}
    window.npLiveLang(b.getAttribute("data-l"));
  },true);
  /* suggestion buttons: send the question in the language the guest sees */
  document.addEventListener("click",function(e){
    var b=e.target.closest&&e.target.closest("#quick button,#rajuQ button");if(!b||getLang()==="en")return;
    var t=(b.innerText||b.textContent||"").trim();
    if(!t||!/[^\x00-\x7F]/.test(t))return;
    e.preventDefault();e.stopImmediatePropagation();
    if(b.closest("#rajuQ")){var rin=document.getElementById("rajuIn"),go=document.getElementById("rajuGo");if(rin&&go){rin.value=t;go.click();return}}
    if(typeof ask==="function")ask(t);
  },true);
  /* Raju's fixed English lines (sales tips, backup answers): translate them into the chosen language */
  if(typeof ask!=="function"||typeof chatEl==="undefined")return;
  var sb=null;try{if(window.supabase)sb=window.supabase.createClient("https://mymtgbmcjbwsnetzwgoy.supabase.co","sb_publishable_ViFodxG8kAENr78Fyp-BwQ_iA_BfAD0")}catch(e){}
  function cache(l){try{return JSON.parse(localStorage.getItem("np_tr_"+l)||"{}")}catch(e){return {}}}
  function saveCache(l,c){try{var k=Object.keys(c);if(k.length>300)k.slice(0,k.length-300).forEach(function(x){delete c[x]});localStorage.setItem("np_tr_"+l,JSON.stringify(c))}catch(e){}}
  function needs(t,l){
    var re=SCRIPT[l];if(!re)return false;
    var own=(t.match(re)||[]).length,lat=(t.match(/[A-Za-z]/g)||[]).length;
    return lat>=15&&own<lat*0.3&&!/typing|लिख रहा|soch raha/i.test(t);
  }
  function put(el,t){el.textContent=t;el.classList.add("notranslate");el.setAttribute("translate","no")}
  async function fix(){
    var l=getLang();if(l==="en"||!SCRIPT[l])return;
    var kids=[].slice.call(chatEl.children),last=-1;
    kids.forEach(function(el,i){if(el.classList&&el.classList.contains("me"))last=i});
    var todo=kids.slice(last+1).filter(function(el){return el.classList&&el.classList.contains("bot")&&needs((el.textContent||"").trim(),l)});
    if(!todo.length)return;
    var c=cache(l),miss=[];
    todo.forEach(function(el){var t=el.textContent.trim();if(c[t])put(el,c[t]);else miss.push(el)});
    if(!miss.length||!sb)return;
    var lines=miss.map(function(el,i){return (i+1)+") "+el.textContent.trim().replace(/\s+/g," ")}).join("\n");
    var msg="TRANSLATION TASK (not a guest question). Translate each numbered line into "+NAMES[l]+" using "+NAMES[l]+" script. "+
      "Keep the same meaning and friendly tone. Keep numbers, prices, ฿ amounts, venue names and phone numbers unchanged. "+
      "Reply with ONLY the translated lines, same numbering, one per line, like '1) ...'. No greeting, no extra words, no tips, no IDS line.\n\n"+lines;
    try{
      var call=sb.functions.invoke("bright-responder",{body:{messages:[{role:"user",text:msg}],venues:"For this message you are only a translator. Do not act as Raju, do not add anything else.",lang:l}});
      var r=await Promise.race([call,new Promise(function(ok){setTimeout(function(){ok(null)},25000)})]);
      var rep=r&&!r.error&&r.data&&r.data.reply;if(!rep)return;
      var got={};String(rep).split(/\n+/).forEach(function(line){var m=line.match(/^\s*(\d+)\s*[).:\-]\s*(.+)$/);if(m)got[+m[1]]=m[2].replace(/\*\*/g,"").trim()});
      miss.forEach(function(el,i){var tr=got[i+1];if(tr&&!needs(tr,l)){c[el.textContent.trim()]=tr;put(el,tr)}});
      saveCache(l,c);
    }catch(e){}
  }
  var _a=ask;
  ask=async function(q){var r=await _a.apply(this,arguments);try{await fix()}catch(e){}return r};
})();

/* ===== Fast language change (7 Oct 2026): switch the language instantly with Google Translate, without reloading the app.
   Used by the app menu and the Raju 🌐 button. If anything fails, it falls back to the old reload. Nothing removed. ===== */
(function(){
  var NATIVE={en:"English",hi:"हिन्दी",pa:"ਪੰਜਾਬੀ",gu:"ગુજરાતી",ta:"தமிழ்",mr:"मराठी",th:"ไทย",bn:"বাংলা",te:"తెలుగు",bho:"भोजपुरी"};
  var SHORT={en:"EN",hi:"हि",pa:"ਪੰ",gu:"ગુ",ta:"த",mr:"म",th:"ไท",bn:"বা",te:"తె",bho:"भो"};
  var WAIT={en:"Changing language…",hi:"भाषा बदल रही है…",pa:"ਭਾਸ਼ਾ ਬਦਲ ਰਹੀ ਹੈ…",gu:"ભાષા બદલાઈ રહી છે…",ta:"மொழி மாறுகிறது…",mr:"भाषा बदलत आहे…",th:"กำลังเปลี่ยนภาษา…",bn:"ভাষা বদলাচ্ছে…",te:"భాష మారుతోంది…",bho:"भाषा बदलत बा…"};
  function getL(){try{return localStorage.getItem("np_lang")||""}catch(e){return ""}}
  function cookie(l){
    var exp=(l==="en")?"; expires=Thu, 01 Jan 1970 00:00:00 GMT":"",v=(l==="en")?"":"/en/"+l;
    document.cookie="googtrans="+v+"; path=/"+exp;
    document.cookie="googtrans="+v+"; path=/; domain="+location.hostname+exp;
  }
  function labels(l){
    try{var b=document.querySelector("#npxLang b");if(b)b.textContent=NATIVE[l]||"English"}catch(e){}
    try{var t=document.querySelector(".langbtn");if(t){var n=t.lastChild;if(n&&n.nodeType===3)n.nodeValue=SHORT[l]||"EN"}}catch(e){}
    try{[].forEach.call(document.querySelectorAll(".nplbtn span"),function(s){s.textContent=NATIVE[l]==="हिन्दी"?"हिंदी":NATIVE[l]})}catch(e){}
  }
  function wait(l,show){
    var w=document.getElementById("npLangWait");
    if(!show){if(w)w.remove();return}
    if(!w){w=document.createElement("div");w.id="npLangWait";w.className="notranslate";w.setAttribute("translate","no");
      w.style.cssText="position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:100000;background:#26215C;color:#CECBF6;border:1px solid #7F77DD;border-radius:16px;padding:14px 20px;font-size:15px;font-weight:600;box-shadow:0 10px 40px rgba(0,0,0,.5)";
      document.body.appendChild(w)}
    w.textContent="🌐 "+(WAIT[l]||WAIT.en);
  }
  function reload(l){wait(l,true);try{localStorage.setItem("np_lang",l)}catch(e){}cookie(l);location.reload()}
  window.npFastLang=function(l){
    if(!NATIVE[l])l="en";
    var cur=getL();
    if(!cur&&l==="en"){try{localStorage.setItem("np_lang","en")}catch(e){}return}
    if((cur||"en")===l)return;
    if(l==="en")return reload(l);              /* going back to English needs a fresh page */
    var sel=document.querySelector("select.goog-te-combo");
    if(!sel)return reload(l);
    var has=[].some.call(sel.options,function(o){return o.value===l});
    if(!has)return reload(l);
    wait(l,true);
    try{localStorage.setItem("np_lang",l)}catch(e){}
    cookie(l);document.documentElement.lang=l;labels(l);
    try{sel.value=l;sel.dispatchEvent(new Event("change"))}catch(e){return reload(l)}
    var n=0;(function check(){n++;
      var ok=/translated-(ltr|rtl)/.test(document.documentElement.className);
      if(ok){setTimeout(function(){wait(l,false)},300);return}
      if(n<40)setTimeout(check,100);else reload(l);   /* not switched after 4 s: use the old way */
    })();
  };
  /* the app's own language menu uses the fast switch too */
  document.addEventListener("click",function(e){
    var b=e.target&&e.target.closest?e.target.closest(".langlist [data-l]"):null;if(!b)return;
    e.preventDefault();e.stopImmediatePropagation();
    try{if(typeof closeSheet==="function")closeSheet()}catch(err){}
    window.npFastLang(b.getAttribute("data-l"));
  },true);
})();

/* ===== Raju suggestion buttons (7 Oct 2026): send the question in the language the guest sees. Nothing removed. ===== */
(function(){
  if(typeof ask!=="function")return;
  document.addEventListener("click",function(e){
    var b=e.target&&e.target.closest?e.target.closest("#quick button,#rajuQ button"):null;if(!b)return;
    var l="en";try{l=localStorage.getItem("np_lang")||"en"}catch(err){}
    if(l==="en")return;
    var seen=(b.innerText||"").trim();
    if(seen&&seen!==(b.getAttribute("data-en")||"")){window.__npChipQ=seen;setTimeout(function(){window.__npChipQ=null},3000)}
  },true);
  var _a=ask;
  ask=function(q){
    if(window.__npChipQ){q=window.__npChipQ;window.__npChipQ=null}
    return _a.call(this,q);
  };
})();

/* ===== Removed on Rahul's order (7 Oct 2026): Lumen and Pulse Arena. This also hides them if they come back from clubs.json or old saved data. ===== */
(function(){
  var GONE=/^(lumen|pulse arena)$/i,GONEID={lumen:1,pulse:1};
  function clean(){
    try{if(typeof CLUBS!=="undefined"&&Array.isArray(CLUBS))for(var i=CLUBS.length-1;i>=0;i--){var c=CLUBS[i];if(c&&(GONEID[c.id]||GONE.test(String(c.name||"").trim())))CLUBS.splice(i,1)}}catch(e){}
  }
  clean();window.addEventListener("load",clean);setTimeout(clean,1500);setTimeout(clean,4000);
})();


/* ===== Refer & earn (8 Oct 2026, on Rahul's OK): Namaste credit for travellers, bank withdrawal for agents and promoters,
   "Promoters" open to everyone, credit every Monday, and the Referral rules. Changes only these texts; nothing removed. ===== */
(function(){
  var TIER={
    "Travellers":"Share your code. Earn 3% Namaste credit on your friends' bookings. Use it on your next booking in the app.",
    "Indian & Thai agents":"Earn 5% on your clients' bookings. Withdraw to your verified bank account.",
    "Promoters":"Earn 5% on bookings made with your code (bill ฿5,000 or more). Withdraw to your verified bank account."
  };
  if(!document.getElementById("npRefCss")){var st=document.createElement("style");st.id="npRefCss";
    st.textContent='#npRefHow{margin:14px 0 6px}#npRefHow b{display:block;margin-bottom:6px}'+
      '#npRefHow .fl{display:flex;flex-wrap:wrap;align-items:center;gap:6px;font-size:12.5px}#npRefHow .fl span{border:1px solid rgba(255,255,255,.18);border-radius:999px;padding:4px 10px}'+
      '#npRefHow .fl span.last{border-color:#5DCAA5;color:#9FE1CB}#npRefHow small{display:block;margin-top:6px;opacity:.75;font-size:12px}'+
      '#npRefRulesBtn{background:none;border:0;padding:0;margin:4px 0 8px;color:#E5861A;font-weight:600;text-decoration:underline;font:inherit;font-size:14px;cursor:pointer}'+
      '#npRefPop{position:fixed;inset:0;z-index:10060;background:rgba(5,4,12,.75);display:flex;align-items:center;justify-content:center;padding:12px}'+
      '#npRefPop .bx{width:100%;max-width:520px;max-height:86vh;overflow:auto;background:#141225;border:1px solid rgba(93,202,165,.5);border-radius:22px;padding:16px;color:#E6E1F5;font-size:13.5px;line-height:1.5}'+
      '#npRefPop h4{margin:12px 0 4px;font-size:14.5px;color:#9FE1CB}#npRefPop ul{margin:0;padding-left:18px}'+
      '#npRefPop .hd{display:flex;justify-content:space-between;align-items:center}#npRefPop .hd b{font-size:18px;color:#fff}'+
      '#npRefPop .x{width:36px;height:36px;border-radius:50%;border:1px solid rgba(255,255,255,.2);background:none;color:#fff;font-size:20px}'+
      '#npRefPop .ok{display:block;width:100%;margin-top:14px;padding:13px;border:0;border-radius:14px;background:#5DCAA5;color:#04342C;font-weight:700;font-size:15px}';
    document.head.appendChild(st)}
  function rules(){
    var old=document.getElementById("npRefPop");if(old)old.remove();
    var o=document.createElement("div");o.id="npRefPop";o.setAttribute("role","dialog");o.setAttribute("aria-modal","true");o.setAttribute("aria-label","Referral rules");
    o.innerHTML='<div class="bx"><div class="hd"><b>Referral rules</b><button type="button" class="x" aria-label="Close">×</button></div>'+
      '<h4>When you earn</h4><ul><li>Only bookings made with your code, after your friend has paid for the service.</li>'+
      '<li>Credit is added every Monday for bookings paid by Saturday, if the guest has not raised a complaint about the service. If there is a complaint, the credit waits until it is solved.</li>'+
      '<li>Travellers: credit is used on bookings in the app.</li>'+
      '<li>Agents and promoters: withdraw to a verified bank account in your own name. Minimum ฿500. Tax is deducted as Thai law requires.</li></ul>'+
      '<h4>Namaste Pattaya may hold, reduce or cancel credit, commission or payouts if</h4><ul>'+
      '<li>the booking is cancelled, refunded or charged back</li><li>the code is used on your own booking, or the booking is fake</li>'+
      '<li>we find fraud, spam or misuse of the code</li><li>you break these rules, the app\'s Terms or Thai law (for example, promoting alcohol)</li>'+
      '<li>a court, bank or Thai authority requires it</li></ul>'+
      '<h4>Changes</h4><ul><li>We can change or end the program with 30 days\' notice. Credit already earned stays valid for 30 days after that.</li>'+
      '<li>Promoters must never promote alcohol and must mark paid posts as #ad.</li></ul>'+
      '<button type="button" class="ok">I understand</button></div>';
    document.body.appendChild(o);
    function close(){o.remove()}
    o.querySelector(".x").onclick=close;o.querySelector(".ok").onclick=close;o.onclick=function(e){if(e.target===o)close()};
  }
  window.npReferralRules=rules;
  function run(){
    var earn=document.getElementById("earn");if(!earn)return;
    [].forEach.call(earn.querySelectorAll(".tier"),function(t){
      var s=t.querySelector("strong");if(!s)return;
      if(/^\s*Women promoters\s*$/i.test(s.textContent))s.textContent="Promoters";
      var name=s.textContent.trim(),p=t.querySelector("p");
      if(TIER[name]&&p&&p.textContent!==TIER[name])p.textContent=TIER[name];
    });
    var op=document.querySelector('#aRole option[value="promoter"]');if(op&&/Woman/i.test(op.textContent))op.textContent="Promoter · 5%";
    var tiers=earn.querySelector(".tiers");
    if(tiers&&!document.getElementById("npRefHow")){
      var h=document.createElement("div");h.id="npRefHow";
      h.innerHTML='<b>How it works</b><div class="fl"><span>Friend books</span>→<span>Friend pays</span>→<span class="last">Credit every Monday</span></div>'+
        '<small>Bookings paid by Saturday are added on Monday.</small><button type="button" id="npRefRulesBtn">Referral rules</button>';
      tiers.insertAdjacentElement("afterend",h);
      h.querySelector("#npRefRulesBtn").onclick=rules;
    }
  }
  var busy=false;
  new MutationObserver(function(){if(busy)return;busy=true;setTimeout(function(){busy=false;try{run()}catch(e){}},200)}).observe(document.body,{childList:true,subtree:true});
  run();
})();

/* ===== One language switch for the whole app (8 Oct 2026): the Raju 🌐 button uses the same fast switch as the menu. ===== */
(function(){if(typeof window.npLiveLang==="function")window.npFastLang=window.npLiveLang})();

/* ===== Raju's human voice (8 Oct 2026, on Rahul's OK): a "🔊 Listen" button under each Raju answer in the Raju chat.
   Uses the ElevenLabs voice function "quick-api" in Supabase (key stays secret there). One Raju voice per language.
   Raju only speaks when the guest taps. The old phone voice stays switched off. Nothing removed. ===== */
(function(){
  if(typeof chatEl==="undefined"||!chatEl)return;
  var FN="https://mymtgbmcjbwsnetzwgoy.supabase.co/functions/v1/quick-api";
  var KEY="sb_publishable_ViFodxG8kAENr78Fyp-BwQ_iA_BfAD0";
  var VOICES={en:"nwj0s2LU9bDWRKND5yzA",hi:"3tEYR9ZLqHBQ9RrfcL1W",pa:"3BviNsioLYpM7Wt1hbN0",gu:"UHwU6ReRgTsCs68KHc6C",mr:"Xy2k22lbbOX8fqfkkHWb",ta:"oJtqFwbHKS0pFD03MNRd",th:"MeUerI8vM5Ce2GSTXsRT",bn:"3vl8X3o2mxL44uBIHGkS",te:"cJNS4o1cTYqUBmoytzUH",bho:"NhwTI3t2DXME1ogDNGJX"};
  var LABEL={en:"🔊 Listen",hi:"🔊 सुनें",pa:"🔊 ਸੁਣੋ",gu:"🔊 સાંભળો",mr:"🔊 ऐका",ta:"🔊 கேளுங்கள்",th:"🔊 ฟัง",bn:"🔊 শুনুন",te:"🔊 వినండి",bho:"🔊 सुनीं"};
  var DAILY=40,cache={},player=null,playingBtn=null,ready=false;
  /* Voice ON/OFF (8 Oct 2026): once the guest turns Raju's voice on, every new answer is read out automatically until they turn it off */
  /* 8 Oct 2026, Rahul: guests should not have to tap the speaker, so voice is ON by default (guest can still turn it OFF) */
  function voiceOn(){try{return localStorage.getItem("np_voice_on")!=="0"}catch(e){return true}}
  function setVoice(on){try{localStorage.setItem("np_voice_on",on?"1":"0")}catch(e){}pill();if(!on)stop()}
  var ONTXT={en:"🔊 Voice ON",hi:"🔊 आवाज़ चालू",pa:"🔊 ਆਵਾਜ਼ ਚਾਲੂ",gu:"🔊 અવાજ ચાલુ",mr:"🔊 आवाज चालू",ta:"🔊 குரல் ஆன்",th:"🔊 เปิดเสียง",bn:"🔊 ভয়েস চালু",te:"🔊 వాయిస్ ఆన్",bho:"🔊 आवाज चालू"};
  var OFFTXT={en:"🔇 Voice OFF",hi:"🔇 आवाज़ बंद",pa:"🔇 ਆਵਾਜ਼ ਬੰਦ",gu:"🔇 અવાજ બંધ",mr:"🔇 आवाज बंद",ta:"🔇 குரல் ஆஃப்",th:"🔇 ปิดเสียง",bn:"🔇 ভয়েস বন্ধ",te:"🔇 వాయిస్ ఆఫ్",bho:"🔇 आवाज बंद"};
  function pill(){
    var ci=document.getElementById("chatIn"),row=null;
    if(ci){var ir=(ci.parentElement&&ci.parentElement.querySelector("button")&&ci.parentElement.tagName!=="FORM")?ci.parentElement:ci;
      var pv=ir.previousElementSibling;if(pv&&pv.classList&&pv.classList.contains("nplrow"))row=pv}
    var p=document.getElementById("npVoicePill");
    if(p&&row&&p.parentElement!==row)row.insertBefore(p,row.firstChild);
    if(!p){if(!row)return;p=document.createElement("button");p.type="button";p.id="npVoicePill";p.className="nplbtn npvpill notranslate";p.setAttribute("translate","no");
      p.style.marginRight="8px";p.onclick=function(e){e.preventDefault();e.stopPropagation();setVoice(!voiceOn())};row.insertBefore(p,row.firstChild)}
    var l=appLang();p.textContent=voiceOn()?(ONTXT[l]||ONTXT.en):(OFFTXT[l]||OFFTXT.en);
    p.setAttribute("aria-pressed",voiceOn()?"true":"false");p.style.opacity=voiceOn()?"1":".75";
  }
  function appLang(){try{return localStorage.getItem("np_lang")||"en"}catch(e){return "en"}}
  function langOf(t){
    if(/[\u0A00-\u0A7F]/.test(t))return "pa";
    if(/[\u0A80-\u0AFF]/.test(t))return "gu";
    if(/[\u0B80-\u0BFF]/.test(t))return "ta";
    if(/[\u0E00-\u0E7F]/.test(t))return "th";
    if(/[\u0900-\u097F]/.test(t))return appLang()==="mr"?"mr":"hi";
    return appLang()==="en"?"hi":"en";
  }
  function clean(t){
    return String(t||"").replace(/\[[^\]]*\]/g," ").replace(/[*_#>`]/g," ")
      .replace(/https?:\/\/\S+/g," ").replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/gu," ")
      .replace(/\s+/g," ").trim().slice(0,900);
  }
  function usedToday(add){
    var k="np_voice_"+new Date().toISOString().slice(0,10),n=0;
    try{n=+localStorage.getItem(k)||0;if(add){n++;localStorage.setItem(k,String(n))}}catch(e){}
    return n;
  }
  if(!document.getElementById("npVoiceCss")){
    var st=document.createElement("style");st.id="npVoiceCss";
    st.textContent='.npvoice{display:inline-flex;align-items:center;gap:6px;margin:4px 0 2px;border:1px solid #7F77DD;background:#26215C;color:#CECBF6;border-radius:999px;padding:6px 12px;font-size:13px;font-weight:600;cursor:pointer;min-height:32px}'+
      '.npvoice[disabled]{opacity:.6}.npvoice .b{display:none;gap:2px;align-items:flex-end;height:12px}.npvoice .b i{width:3px;height:4px;background:#CECBF6;border-radius:2px}'+
      '.npvoice.on .b{display:inline-flex}.npvoice.on .b i{animation:npvb .6s infinite alternate}.npvoice.on .b i:nth-child(2){animation-delay:.2s}.npvoice.on .b i:nth-child(3){animation-delay:.4s}'+
      '@keyframes npvb{to{height:12px}}.npvwrap{margin:-2px 0 6px}';
    document.head.appendChild(st);
  }
  function stop(){try{if(player){player.pause();player=null}}catch(e){}if(playingBtn){playingBtn.classList.remove("on");setLabel(playingBtn);playingBtn=null}}
  function setLabel(btn,txt){var s=btn.querySelector(".t");if(s)s.textContent=txt||LABEL[appLang()]||LABEL.en}
  async function getAudio(text,l){
    if(window.npMaskClubs)text=window.npMaskClubs(text);
    var ck=l+"|"+text;if(cache[ck])return cache[ck];
    var payload=JSON.stringify({text:text,voice:VOICES[l],voice_id:VOICES[l],voiceId:VOICES[l],lang:l});
    var hdr={"Content-Type":"application/json","apikey":KEY,"Authorization":"Bearer "+KEY};
    /* 8 Oct 2026: try the new "raju-voice" function first (7 voices, faster); if it isn't there, use quick-api as before */
    var r=null;
    try{r=await fetch(FN.replace("/quick-api","/raju-voice"),{method:"POST",headers:hdr,body:payload});if(!r.ok)r=null}catch(e){r=null}
    if(!r){r=await fetch(FN,{method:"POST",headers:hdr,body:payload});if(!r.ok)throw new Error("voice "+r.status)}
    var ct=(r.headers.get("content-type")||"").toLowerCase(),url;
    if(ct.indexOf("json")>-1){
      var j=await r.json(),b64=j&&(j.audio||j.audioContent||j.audio_base64||j.data);
      if(!b64)throw new Error("no audio");
      url=String(b64).indexOf("data:")===0?b64:"data:audio/mpeg;base64,"+b64;
    }else{
      var blob=await r.blob();if(!blob.size)throw new Error("empty");
      url=URL.createObjectURL(blob.type?blob:new Blob([blob],{type:"audio/mpeg"}));
    }
    cache[ck]=url;return url;
  }
  var reqId=0;
  async function play(btn,msg){
    if(playingBtn===btn){stop();return}
    stop();var my=++reqId;
    var text=clean(msg.textContent),l=btn.dataset.l;if(!text)return;
    var ck=l+"|"+text;
    if(!cache[ck]&&usedToday()>=DAILY){setLabel(btn,"🔇 Voice limit for today");return}
    btn.disabled=true;setLabel(btn,"⏳ …");
    try{
      var url=await getAudio(text,l);if(my!==reqId){btn.disabled=false;setLabel(btn);return}if(!cache.__counted||cache.__counted.indexOf(ck)<0){(cache.__counted=cache.__counted||[]).push(ck);usedToday(true)}
      player=new Audio(url);playingBtn=btn;btn.classList.add("on");setLabel(btn);
      player.onended=player.onerror=function(){stop()};
      await player.play();
    }catch(e){if(my!==reqId){btn.disabled=false;setLabel(btn);return}stop();setLabel(btn,"🔇 Voice not available right now");setTimeout(function(){setLabel(btn)},4000)}
    btn.disabled=false;
  }
  function isLastAnswer(el){var k=[].filter.call(chatEl.children,function(x){return x.classList&&x.classList.contains("bot")});return k[k.length-1]===el}
  /* wait until the answer text stops changing (translation finished), then speak it in the language it ends up in */
  function playWhenSettled(btn,el){
    var last=el.textContent,same=0,tries=0;
    (function tick(){
      if(!el.isConnected)return;
      tries++;var now=el.textContent;
      if(now===last)same++;else{same=0;last=now}
      if(same>=3||tries>=15){btn.dataset.l=langOf(now||"");if(playingBtn!==btn)play(btn,el);return}
      setTimeout(tick,400);
    })();
  }
  function isAnswer(el){
    if(!el.classList||!el.classList.contains("bot"))return false;
    var t=(el.textContent||"").trim();
    if(t.length<8||/typing…|लिख रहा|soch raha|ลังพิมพ์|ਲਿਖ ਰਿਹਾ|லிகிறார|એ છે…/i.test(t))return false;
    return true;
  }
  function scan(){
    [].slice.call(chatEl.querySelectorAll(":scope > .npvwrap")).forEach(function(w){
      var pv=w.previousElementSibling;if(!pv||!isAnswer(pv))w.remove();
    });
    [].forEach.call(chatEl.children,function(el){
      if(!isAnswer(el))return;
      var nx=el.nextElementSibling;if(nx&&nx.classList&&nx.classList.contains("npvwrap"))return;
      var w=document.createElement("div");w.className="npvwrap notranslate";w.setAttribute("translate","no");
      var l=langOf(el.textContent||"");
      w.innerHTML='<button type="button" class="npvoice" data-l="'+l+'" aria-label="Listen to Raju"><span class="b"><i></i><i></i><i></i></span><span class="t"></span></button>';
      var btn=w.querySelector("button");setLabel(btn);
      btn.onclick=function(e){e.preventDefault();e.stopPropagation();btn.dataset.l=langOf(el.textContent||"");if(!voiceOn())setVoice(true);play(btn,el)};
      el.insertAdjacentElement("afterend",w);
      if(ready&&voiceOn()&&window.__npExpectAnswer&&isLastAnswer(el)){window.__npExpectAnswer=false;playWhenSettled(btn,el)}
    });
  }
  var busy=false;
  new MutationObserver(function(){if(busy)return;busy=true;setTimeout(function(){busy=false;try{scan();pill()}catch(e){}},300)}).observe(chatEl,{childList:true,subtree:true,characterData:true});
  try{scan();pill()}catch(e){}
  ready=true;
  setInterval(function(){try{pill()}catch(e){}},2000);
  if(typeof ask==="function"){var _askV=ask;ask=function(q){if(q&&String(q).trim())window.__npExpectAnswer=true;return _askV.apply(this,arguments)}}
  var lastLang=appLang();
  setInterval(function(){var l=appLang();if(l!==lastLang){lastLang=l;reqId++;stop();window.__npExpectAnswer=false}},500);
})();

/* ===== Guest can speak to Raju (8 Oct 2026, on Rahul's OK): a 🎤 button in the Home Raju box and in the Raju chat.
   Uses the phone's own free voice typing in the app's chosen language. The words appear in the box; the guest taps Send.
   Never sends by itself. Hidden on phones that don't support it. Nothing removed. ===== */
(function(){
  var SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR)return;
  var LOC={en:"en-IN",hi:"hi-IN",pa:"pa-IN",gu:"gu-IN",mr:"mr-IN",ta:"ta-IN",th:"th-TH",bn:"bn-IN",te:"te-IN",bho:"hi-IN"};
  var TXT={en:"Listening…",hi:"सुन रहा हूँ…",pa:"ਸੁਣ ਰਿਹਾ ਹਾਂ…",gu:"સાંભળું છું…",mr:"ऐकतोय…",ta:"கேட்கிறேன்…",th:"กำลังฟัง…",bn:"শুনছি…",te:"వింటున్నాను…",bho:"सुनत बानी…"};
  function lang(){try{return localStorage.getItem("np_lang")||"en"}catch(e){return "en"}}
  if(!document.getElementById("npMicCss")){var st=document.createElement("style");st.id="npMicCss";
    st.textContent='button.npmic{flex:0 0 46px!important;width:46px!important;height:46px!important;min-width:46px!important;border-radius:50%!important;border:0!important;background:rgba(255,255,255,.14)!important;color:#F2EEFC!important;font-size:19px!important;display:inline-flex!important;align-items:center;justify-content:center;cursor:pointer;padding:0!important;margin:0 8px!important;box-shadow:none!important;align-self:center}'+
      'button.npmic.on{background:#D85A30!important;border-color:#D85A30!important;color:#fff!important;animation:npmicp 1s infinite}@keyframes npmicp{50%{box-shadow:0 0 0 8px rgba(216,90,48,.25)}}';
    document.head.appendChild(st)}
  var rec=null,activeBtn=null;
  function stop(){try{if(rec)rec.stop()}catch(e){}}
  function start(btn,input){
    if(activeBtn===btn){stop();return}
    stop();
    var l=lang(),r=new SR();rec=r;activeBtn=btn;
    r.lang=LOC[l]||"en-IN";r.interimResults=true;r.continuous=false;r.maxAlternatives=1;
    var before=input.value,ph=input.placeholder,finalTxt="";
    btn.classList.add("on");input.placeholder=TXT[l]||TXT.en;
    r.onresult=function(e){var interim="";for(var i=e.resultIndex;i<e.results.length;i++){var t=e.results[i][0].transcript;if(e.results[i].isFinal)finalTxt+=t;else interim+=t}
      input.value=((before?before+" ":"")+finalTxt+interim).trim()};
    r.onerror=function(e){if(e&&(e.error==="not-allowed"||e.error==="service-not-allowed"))alert("Please allow the microphone for this app to speak to Raju.")};
    r.onend=function(){btn.classList.remove("on");input.placeholder=ph;if(activeBtn===btn){activeBtn=null;rec=null}};
    try{r.start()}catch(e){r.onend()}
  }
  function add(inputId){
    var input=document.getElementById(inputId);if(!input||input.dataset.npMic)return;
    input.dataset.npMic="1";
    var b=document.createElement("button");b.type="button";b.className="npmic notranslate";b.setAttribute("translate","no");
    b.setAttribute("aria-label","Speak to Raju");
    b.innerHTML='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/></svg>';
    /* 9 Oct 2026: the mic must not open the keyboard; only tapping the typing bar does */
    b.addEventListener("mousedown",function(e){e.preventDefault()});b.addEventListener("touchstart",function(){try{if(document.activeElement===input)input.blur()}catch(err){}},{passive:true});
    b.onclick=function(e){e.preventDefault();e.stopPropagation();try{input.blur()}catch(err){}start(b,input)};
    input.insertAdjacentElement("afterend",b);
  }
  function run(){add("rajuIn");add("chatIn")}
  run();
  var busy=false;
  new MutationObserver(function(){if(busy)return;busy=true;setTimeout(function(){busy=false;try{run()}catch(e){}},400)}).observe(document.body,{childList:true,subtree:true});
})();

/* ===== Chat bar like the Claude app (8 Oct 2026, Rahul): one rounded typing bar with a small mic and a small send arrow inside it.
   Home Raju box and Raju chat. Same buttons and actions as before; only the look changes. ===== */
(function(){
  if(!document.getElementById("npBarCss")){var st=document.createElement("style");st.id="npBarCss";
    st.textContent='.npbar{display:flex!important;align-items:center!important;gap:6px!important;border:1px solid rgba(255,255,255,.2)!important;background:rgba(255,255,255,.06)!important;border-radius:26px!important;padding:5px 6px 5px 16px!important;box-shadow:none!important}'+
      '.npbar:focus-within{border-color:rgba(206,203,246,.7)!important}'+
      '.npbar>input,.npbar>textarea{flex:1 1 auto!important;min-width:0!important;border:0!important;background:transparent!important;box-shadow:none!important;outline:none!important;padding:9px 0!important;margin:0!important;height:auto!important;border-radius:0!important}'+
      '.npbar button.npmic{flex:0 0 36px!important;width:36px!important;height:36px!important;min-width:36px!important;margin:0!important;background:rgba(255,255,255,.12)!important}'+
      '.npbar button.npmic svg{width:18px;height:18px}'+
      '.npbar button.npsend{flex:0 0 36px!important;width:36px!important;height:36px!important;min-width:36px!important;padding:0!important;margin:0!important;border-radius:50%!important;border:0!important;background:#F2EEFC!important;color:#1a1530!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;box-shadow:none!important;font-size:0!important;line-height:0!important}'+
      '.npbar button.npsend svg{width:18px;height:18px}';
    document.head.appendChild(st)}
  var ARROW='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></svg>';
  function make(inputId,sendId,label){
    var input=document.getElementById(inputId),send=document.getElementById(sendId);if(!input||!send)return;
    var row=input.parentElement;if(!row||row!==send.parentElement)return;
    if(!row.classList.contains("npbar"))row.classList.add("npbar");
    if(!send.classList.contains("npsend")){send.classList.add("npsend","notranslate");send.setAttribute("translate","no");send.setAttribute("aria-label",label);send.innerHTML=ARROW}
    var mic=row.querySelector("button.npmic");if(mic&&mic.nextElementSibling!==send)row.insertBefore(mic,send);
  }
  function run(){make("rajuIn","rajuGo","Ask Raju");make("chatIn","chatSend","Send")}
  run();
  var busy=false;
  new MutationObserver(function(){if(busy)return;busy=true;setTimeout(function(){busy=false;try{run()}catch(e){}},400)}).observe(document.body,{childList:true,subtree:true});
})();

/* ===== Install the app (9 Oct 2026): a "Get the app" card on Home under Raju (guest can close it with ×) and "Install app" in More.
   Android: one tap install. iPhone and other phones: short steps. Hidden once the app is installed. Nothing removed. ===== */
(function(){
  var dp=null;
  window.addEventListener("beforeinstallprompt",function(e){e.preventDefault();dp=e;run()});
  window.addEventListener("appinstalled",function(){try{localStorage.setItem("np_installed","1")}catch(e){}hideAll()});
  function installed(){try{if(window.matchMedia&&matchMedia("(display-mode: standalone)").matches)return true;if(navigator.standalone)return true;return localStorage.getItem("np_installed")==="1"&&!dp}catch(e){return false}}
  function isIOS(){return /iphone|ipad|ipod/i.test(navigator.userAgent)}
  function dismissed(){try{var t=+localStorage.getItem("np_install_x")||0;return Date.now()-t<7*864e5}catch(e){return false}}
  if(!document.getElementById("npInstCss")){var st=document.createElement("style");st.id="npInstCss";
    st.textContent='#npInstCard{position:relative;display:flex;align-items:center;gap:12px;margin:12px 0;padding:12px 40px 12px 12px;border-radius:18px;border:1px solid rgba(233,185,73,.55);background:linear-gradient(135deg,rgba(233,185,73,.16),rgba(23,19,42,.92));color:#f2eefc}'+
      '#npInstCard img{width:46px;height:46px;border-radius:12px;flex:0 0 46px}#npInstCard b{display:block;font-size:15px}#npInstCard small{display:block;opacity:.8;font-size:12.5px;margin-top:2px}'+
      '#npInstCard .go{margin-left:auto;flex:0 0 auto;border:0;border-radius:999px;padding:9px 14px;background:#E9B949;color:#1a1026;font-weight:700;font-size:13.5px;cursor:pointer}'+
      '#npInstCard .cl{position:absolute;top:6px;right:6px;width:30px;height:30px;border:0;border-radius:50%;background:transparent;color:#d9d2f2;font-size:18px;cursor:pointer}'+
      '#npInstHelp{position:fixed;inset:0;z-index:100002;background:rgba(0,0,0,.6);display:flex;align-items:flex-end;justify-content:center}'+
      '#npInstHelp .in{width:100%;max-width:520px;background:#17132a;color:#f2eefc;border-top:1px solid #534AB7;border-radius:20px 20px 0 0;padding:18px 18px calc(18px + env(safe-area-inset-bottom,0px));font-size:15px;line-height:1.55}'+
      '#npInstHelp ol{margin:8px 0 0;padding-left:20px}#npInstHelp .ok{display:block;width:100%;margin-top:14px;border:0;border-radius:14px;padding:13px;background:#E9B949;color:#1a1026;font-weight:700;font-size:15px}';
    document.head.appendChild(st)}
  function help(){
    var o=document.getElementById("npInstHelp");if(o)o.remove();
    o=document.createElement("div");o.id="npInstHelp";
    var steps=isIOS()?'<li>Tap the <b>Share</b> button (square with an arrow) at the bottom of Safari</li><li>Tap <b>Add to Home Screen</b></li><li>Tap <b>Add</b></li>'
      :'<li>Tap Chrome\u2019s <b>\u22ee</b> menu (top right)</li><li>Tap <b>Install app</b> or <b>Add to Home screen</b></li><li>Tap <b>Install</b></li>';
    o.innerHTML='<div class="in"><b style="font-size:17px">\ud83d\udcf2 Install Namaste Pattaya</b><ol>'+steps+'</ol><button class="ok" type="button">OK</button></div>';
    document.body.appendChild(o);o.onclick=function(e){if(e.target===o||e.target.classList.contains("ok"))o.remove()};
  }
  function install(){
    if(dp){dp.prompt();dp.userChoice.then(function(c){if(c&&c.outcome==="accepted"){try{localStorage.setItem("np_installed","1")}catch(e){}hideAll()}dp=null}).catch(function(){});}
    else help();
  }
  window.npInstall=install;
  function hideAll(){var c=document.getElementById("npInstCard");if(c)c.remove();var m=document.getElementById("npInstMore");if(m)m.remove()}
  function card(){
    if(installed()||dismissed()||document.getElementById("npInstCard"))return;
    var rc=document.getElementById("rajuCard");if(!rc||!rc.parentElement)return;
    var c=document.createElement("div");c.id="npInstCard";c.className="notranslate";c.setAttribute("translate","no");
    c.innerHTML='<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAuCElEQVR42p29eZAk133f+fm9l1nV3XPPYIDBRWBwDECA4AlQFLEARBJh0iK5CpFsyDSXx2otWbFhh9aSNrSrkHc4CtEOSSHKa2sda0sh85AlEaOLJEiTomkIBE2IBBcgMLg4uO+5r76qKvO93/7xXma+zMrqGaojMiqrKqu6+3d8f/cvhR/hR3WvYf/1Infc4cLzO+c5eOT1oLfg9CZUdzMqr0ZkK84rIGj14XjU5woq8TE+B/DJ8/pRwSev+eQxPVfteS9+tnpen9N5j+RzJIeCR0EEr6cQ8yRengXuh/xeNm59WH75l9cAdHHRct11Kvv2+XOlqZwb4RH232lqwj/56etR82Em7kMU/irmBhYPOA+FB++br68JnxA8ZYj2ENzHC3wPA+rHHsLXr3VfTxmg04TuMsLPYIQKiAFM+I5R4RD7FNb+OWL/VH7zNx+tGbF/v5dG5P7+DFDda0QCR/Xx370BkV9iUn6Ehbmc1QImJSg+/HECzUmP1FeMWI8BXUlfhwGptqQS3n1+TsRnWkPqc2k0wak2v0cMJoMsh0lRYOx/RvTT8lu/dQBA9+41Z9MGWZ/4d1qRO5w+sneA2fh/Uer/zjAfsDQCpWzEQdpfmRKdHia0mNEhfCr1LQmfxQCdLfG9GkA/I/zZGNF57urnHsWDyRgMoXQTML/DlrnfkH37Jrp4p5X9ATl+JAbo3Xszece+Uh/+1LXk2R+QZf8Dp9ZAcYgx4bOSfE1H4VTWYYKu/9glus6QbNVp7HfrEL7XHnDu5y7+/a6rRYCKBkaIZbgApf82Ovk5+f1PP6G37c3knn3lOTNA77zTyh13OP3Bb7wPm/0R1u5keVyCWESkJnhL4mWa+H3Szzq432d4/Y/AgFmQ47QH538Uideu1Lc1QVOBE8WrI5/L8HoU+Fn5f3/nLl1ctLJ/vzsrA2rJf+A3PsbAfpaxg9I7xNgpiW89Zx0t0Pierm98Z3kzM72bc8T9XiJ34Midg/RPMSOxEdX/q/WjQ6zF5lAUH5f/9Huf69ME6cX8B/b+JIP8K6wVDucFY00gZmNfpxnQpwmdR981wutgfh+2a1e6dQahdRpmVIMm9Hk950p8N4spqccnzeHVY4xiB5aifK98/ve+2tUE0/Z27nD6g717sHyGtYlSOkHEtIjShYn0PMWargOmHY7Un9Hp5/V3+/bv9T6+Fo8pZsTXup9Lr+1+znVfS86dj0T3yes+eT1+3nkoPZTJc+fBYyicMJ4oKp/Rj/7SHtm/3+nevabFANWAFXrw/x5Slp9HZCdF6REC8WvnWvuJ3XVxlH7Cpl5P9bn0+6aYQIeQ2taQlNC+h9itw3c0xvdfM+t91/OdLjLGdQifPg9M8HjZycR9Xv/5Px+G/z7QPHBi/x3B1z9z+NdZGLyVpbUSwYaAah1iTGlFR9J1pqVJot+EcOi05PY+ztCKSlKnCO07RO1oRC9xk893z522CV0zQ3ve9+DVMlorkcFbecX+uuzb51m8wwCI3rloWdzvefD/fC1OH6RUi8MgIgHv08PQek167AA9HlEr+u0JoHQ9AzvLrfRnMbg9526GIXZdz0b7jW9qCxwdYzzDDtT2TxSMR6zDZ2/iS7/7OIuLJnBBUIryV8nNgMKFb5hSbXokdBYc9eB+qimpHWjFBjOOFsYnEl1DTir5vl/Sfef7Zh3OdyS/AytF2cZ/39GGUoM9aGkB4FUoHKgZ4Itfbbks+v1fupbSPMTE50GyjUxLeZUHkRla0OMlTQVffZ6Ozsjn6Gws97PeJzGsNATSRKpdj8/f957rSn38P7bugNNLsDIKEp5qQyX1XZcUCa6qooFOtsDzBvmb338i2AAnH2VoB6hzQfp9P952X6djYGcZ5b7Xtev5MNvbaR06jflTXlBidFXbEqvrSPwU5qfw5SEfwic+BldeCeNJAkcdm1Fq+/Wyfl9w3kE+QOWjAJl+/+cXWCsXcR5UTTCGVXrHN9jfCh10RkwduS46I8jWfubpLDd0PcjwbaY51kk9J/6/o98muG6OJ3ltXIRr3/0eeN114b0nnoZjp8AO2tlSlRlyWL2PwU3A66K+7+c/JXrfL/4YE38vXnM0MbJSET45lwSKutdJB5JShug6GHw2TO5zFx1nCb76CD0LXvoCrQ5DLr4UbrsNbr0FrAVj4MDj8OWvwwOPwuqkgpgOE2QdWLIFKrdkOHcruclZ8w68rSVeAfGJ9Pu2p1PnxuN16fOWJ9SBoV4DG3G9F/a6XhD9GqhdpvjpzKfTfk9nKrrtMGD3FfC2H4M8b2odN7wWDh2Fh5+EcgRq+lG3knwk/u2Ax2FNjtdbM9TfFNQ3hZsZxK6RJcktqEkuTeArvbY3iEr8et/DnK7BjQZcRRCx0cHyAe6MIKqoLxF104a8qzF9MORmGWWBb3wTDjwGP/e/wGv3wJkl+PefgXvvD/heMVylCzf9zNBK2LjJUPrLcQ68lyk3Lw3rve8599OGuTKO2uMunu0z6aFtjFcEtXmA0MLhVHBzm8KhgitLFIPaAYo5C4y1gqR20OQ6LmQZCfv08/AHnwnE3/9l+Ma908a29bmOe9q+Rig9FP7yjElxNWLAI0F6Kyn2reIWIlHafXJewVRlfKU50npAX9p4XVvQSH5IpFoUgy8duuVCzCXXY3ZdiWw9P2jFycPoy0/jnn4YOfIyxmbh82WBtCLbGfbAzTqvtEcgy+CZF+E/fA4efgLEtv1818V/bdvAtoEWtASVq0W/9rMaEMe0ff2ugRUzOyaQHiPciobTLGQHVlrJL215KqqKSh6yBWYO+7p3Yfa8DRnM9ReRJiP8Q9/G/d3fYEdriPPIeIz0SWEXalLMdzrNlIoRRRmEr7quZDoO6DXCfUbakOFUEZFWhJoSTzpF9Yq2qlHS47nppJ5FpwMx3wnK0m6EVqI0PFEzCMg4t4Xs5g9jLtgdr/H9nvBgDnvT7ciu3ZR3fRZz+iQmG4Ibh86C+vdIpytDeurS0vl7I0PEJjak63L2ET81mYkxDu+pQVV6i+JT5cNueXCdiFbPUjTp+v1JBKwxp6KShbhluIXsHf9zIH5lG5DgCqaHSG1LzKVXkn3wF3Abt+GxqMkBg9KVRDrGsvNan9T6vnyPJBDU8x5dSK5RQky/taYtmaqz0wpdK+/PUiTRjtS3ziMTMHjJKMnJfvwOzLYLwbsW3BVLpxgdeYXRkVcozpxqQ6F3mPMvInvvRyhNjrc5KnYGRJxFcv1ZriemIxYWQozgO0yl57uTdp2shpZu/riGEGmnkKsgSxOYqSAJE96QTv0X+itfvp3ODqeCmpyycMi1t2AvvCq6m4G442OHOPbdb7L6wjPoZBJ+XZazcMkVnHfz7Qx37opq7rC7r8HdeAvlt79BnuWhZ0kdUhOvghHtELgPlqRHIA2UDnbthH2/AN99DP7jXzd2sF0r7mV0FgxwN3WQ4L1WBJVODJCYi8oDSjOfSH8h3vd0PiTdBYrBeUU37GB4/W2hdKEhP7h08CEOf/Ov8avLWJshMR2hRcHKYw+y9sxBLnjPB9l03RtQ9Ygq+c23s/boQ7gTx7DGIrX7W2FyQmyfElubFHMa0HWZ4YOXRpYHT6kr8ayvZdmU8Z0Ktrra0bHT1bmnE4DNaEXxfV0PoNHlVGMpJx573Y3I3AY09gOsPPs4R77+BSwwHGRIWSKp5uQZZTHmyBf/BJPnbLj6OtQ5ZGEj9o0/Rvk3d2FMjuISLejCaI82eO3Yg6pRK3pBJoMXj8A/+x0YFQ0d/NmJjwqm18i28LmvAYoZTVG+E8WmNVVdv3lKFVWD94IONpJd/obgMIuhXDrFsbv/ikyUoSgDXzJvYCEzLFhhXpShKxniyVQ59pW/oDx9MrQvqZK97s3owiY8EoK0lBhe2jjvpccwS0N0L9OekjFwZhUmLkDlORI/MqCLx/SkDNZpjtUZ5T53rsk2baQfgys9bL0Iu2lHDW0nv/dNWDrJ0AhDLZmzwtAIAy0Z+JKhtQwNDLxjaAROneDUPd+og0i7YydceAmu9KixIQ5azwvyXc+HfgOdMk1sAj/nRvzAAN8j8dptdJ2V0eTsXo/3nVxMX1th+CcUg3Mee95r6oh6cvxVRk89zHAwIPcluREyEbK5BeZ+8mMM3nAzFiU3lgGQlwXDfMDaIw8xOfxK/T3m0suDbam9IWbka6SRbN/RCN/HnB5tYZ2saOfIaugRaRtfEgPcNbjrt/N2qmHSDpy67efxn1JiHUgNZvuu+ttWn3wYM14jzy0ZihUbjOs7P4S98nXYPW9Etu+i+K9/RWYMWobSlRutsnrgIQYXXBS0YNfFlJKF6FolZFA0IXK3Tb3rBfmO4fVdV13OLSDreEOm7Rayfr5mVu5GdZ2WDz+jtSMhvmqTwzM5ZmFL+D+cY/LS0+RGsN5jxSDOYS68Anvl60JsoIq9/kbYtB28YgHrSnJjKJ55KhT5ANm8Bc1yvEoDQX49CJoFO+sU+5BzlvzGCPsZmK+drrI+xlQunTs7zq+H/zUjvKKSwWAYKqVLJ9FTx7DGYNRjMHgP5uo3tDw0Gc7BrtegpcNgsF6xIvhjR3EnT4Rr5uZCNjUhunYDT8803KRQ1HdoyJfpenmgdZ6bmUSfchfpx3x3lrLhus9pZz19CMQkFnbcmZPIZIQFjArqPTq/keyya5IMbRA/ueDiWCsRxCsZgoxGuJMnw/vGoLGmoS0PqA/nGwJXwaHvHE4F55tHryacq+DU1NdU12t9NMRXTBWI0W4XmdW62xMS9NqEdBCD9YoTibqHlgEQX8OGX1lCyhJjbXheOuSiizCbt8WIu/kDzY7z8SbDaogrxYMpSvzSmfAnlQ5KH6FHOhKvjSNQBYRRuevXUshMasDq+6GnirZl6jWJCQSDx5C1e3VmEFpmEFt7mNdtTa8bs/oYoS0GIMCkQMej8PlygvEx06oG7xz5BZcmWdNgOCTLMJu3hZzPpAgMUA21gMkkXD5ag6KYzkHV9aGE+E4jozRhgKIp46K2rpdmqBggrag4PHoMiiXDJ1SUdaQ67XyoUw4yoxmrbxZAesaTJOkmCITWosAvnWp+ZUwjB14Z7M6Lavhxy0uMjhxi45V7YDiEbICOikYDfBOW+5On0EkRcvkJ0VMia0gVoWoSgks8N03UnriqyrSxlS4T0tIuBi8m0YA0F6S9WNJhTJJr0J72k96+XenJqHZjjyAX4hzu+KEAK9kgUWFQk2E2bK5/1WTpNMvPPM3GK/cg+SCkBXx0M2Pq2eR5sCevvBqScSLBefISq2XSqpI2ECM1gxrtiHbBJ3miswRdgtTwo0iL+DoTgmrxk/5W89Y8mE4zpTWe1MmvMAOCIgVEoTz0YmDAxi2IsQ0GSwb5oGHA8eOMDgdmibXBG/FB7UMCz2K2bAWgeP5FUME7RVysrLogxd61GUH6WBvOhjFpTKB92N+ZmZBocH2sSVTEVzEVBM0Y2dB1sqCzYjA6rRiq01owBUERasRhJMMdfhldXcZu24lkQ5iMA3Eyg2RZ/euKkydwpyJciWl9v6jHDOex55+PP7NE+cJLGMkCxDkNgZgPhZQGjqIrnBje7mOb8D21AaYNcSrxKm1GBAZIJ6uZQr1oO606i+h0AxJdf0KyIlT0NkTjn2QFt3SayZMHGL7hxzEbNuNXD6MmC/900ntUnjoFo7XgNXkPhYt/fyjgy3lbMJs3s3bvd/AnlzA2j9LeSD+JAQ5HaiOmia+deEG7Va8koKtgR7GB6BKIXjMjRDa0O8O0G7XOSNb1Dj10u4b7+nKmv1fqR4+UDgNMDnw/pBAuvAwtylCm9Gk3NvjlFaQoQ2GmmMCkCNepwU8c5jWXAzD6u/uDyzhxaKmoA+8kduJU3TjxPB1wUYkzGOE9V1/T+PsOCYdK3f5Z+f0lhhJLIYZSDAUmvtYcDQS1DG0iwVOez6ycjyYqqNOPmhQ3WqsJwmuCIqrhz7ID3AtP4156lsE1r2dy/7ebz8QYAVVYW8WUJVqWMBqhowneBy/El8rwja+nePpZJj98BmMydDxBS8W7tk+vXsAFRtBpXar+vjRQTIst2meAY3dIKu2N1Ed7ILUG9LT+daW51c7RmQSZOVnS12G8To+nU4zziPOY0mG8Z/Tf7sJe9Brs5h3opERLhx+PY2BVoqMRJjQV406fwY+LELWOCmT7Duxll7H8F3eFJqnCo4WiLjDAdyS7njZyNJJev9c510bqqwjYa0Xw8F6BnZL2EkMhUSPiczPdrn2uwwx0BtlmTKPMYlQLgppz4zymKEPr5MHHKB95gPza16Nra1C4EFAB6soQJZeRAUePBiap4JbXGLzpjYy+9wCThx5DbI6OHVTEj/DjHHVTYEpo7zvQk6QdUuI77b5GDTslDeQUBAgqJUBWPwTNKjdyNsPbE5hpAlt9xe1Ws1aAKInxgMFHdS/A5ky+9kXYtBWTDaAo8csr4fPOIWVs8nKO8sWXodRAaJsz/sGjuBP3IXaAjkqk9Gip0euRBmq0HQm33E/fvrb6v7TP+6n8/BbsSOL1pEe4DqkCsV4XUzoujMwYPe3YjJke0KzG1eiGekFj1GvUE1rOLLq6iltaxgwXkLLAnTrZfGfpQ6PuaEzxzHOIGnRSAobyuVdC8cUTiF9o6AaMMYC6acKnDKnjgiof1OP3axLhakL0JtiKhO7agHYkrO3Bil5XU2YzKSV8r/TrdDDW14FG0AL1iomBmaB4NaE3tHQYB/7EiTpIFK9o6Vj+4l34V4+GNpHCo6UPEWjp8WXAfXEx4HLBQ/Fp6iHNBfVpg28Tv5sD8klwVdWdu8/rQ9rPM5z2tySum+k8CxwpMyJh1ulCiH5zrBGYqNIVg40xGAV/5Gigf5aFQGdcMH7wADYSnyLYJA3ND3Vfp3OgThDfJb7M1Ibg9ye1g2gya6lPYKciupeEASK9HlAKRYkN6JPyc3mtm65I+i27zOjLhrb6MGP/ZjTKAhgN64iM9xiTUR49jl9ZwczPI5gAQzYPSbiiwvmGAd5pcC9dlNZoXDVxQX1PVjSVfk1dThoNqPC9kfo2M1RTuJEW4Sso6hjhLjHTHA89O4G0sx1FO3GE9BvfqebXxBbEeq0mSTqD4mJbvD99hvLVQwyuuhKT5bhoWKVUtFSk8nTKKqVQFVYaSfe+X+J97fO35xSptbFhhtfKwDaGNyWyT7C+5f+37IB0GHDOqYZO4igtvHSZ0AtDPTYhDdC81I1TNSPwiCg6Lpg882xgwHCOsghzDJWH48tQKibOG1aEbRM/PG8xQjsMqfuGpwMuLwFqWtIvpgNHMiXtXRjyLQacFe9npKunDHI39dzxeLpa4bW/IO5jqc5HJqAx1yNMHn8S/sHtmA0b0dKDZOGaiqgtaa/Sz8EGeG1LfPV61RjQ0ozYON7gPa1kmktdTW1yPZoSP7leu0xpG+GzeTZd91R64KmvIbWv2bXn3Pf1aCZeCop6j7E5k6eexy8tk+3YEbyeLGY1E6PqXXtSqkV8J1PS7520PKGqeyK0ylcr8AxOUuKnUp96Q9KR9g78RNc0QlDPco2peCDNCVU7PmJffjUt08qD6+za71Rb+gxtqFLDFZRUjDGCP7XM2gMHMNu34x0YWxEvMb6RmN5XxI1f3yV+pQna5P415nIqLyacG7yxtafjNTIiNeyxatf2jmTKDoTvrYvy2h88pRIvyaSkyUJ7nybdDJ3PSjVtaWJlqvLzS9fuuOudRaCuavlIVF9BhFEoFMkHrNzzXTb8xNshH9aBD15ruKmlvya4tDUiGmif2gAEtQaMBVu1MCZD7rWUS4QbQY2B3AYGOXBF7HGK8YFqNwDraoDT2ZhfI4yAzUNOvnRBJTdth607YWETzC2EcqAqjEfo2iosL8PSGVhZRopxiEjFIhIymuI7sJOmJuphSQ1QkLiCISgrGV5zFQtvfwujA0+y8rffx2QDdDzGq48wpK3Bz9ZODy9T0u81DOIpEjwodcjCELt1A3PnbcZu24jdPI9ZmEONwZeeYnnM+OSI1VfPsHZkBecVs5DjSyjHvtGEqneoYwNo5YJ02rvRauokmwvEGMwh178Jc/1bkUuvQDZuabWGtH6KCbqyjJ44hr70Ajx9EH3qIJw5E8qMrow+/3Q7eNsbieciqLH40mMv3MWm970LvGfrR3+K0cGXKF86imR5qHhVGuSiJCZG13ehx1fEt7jCk523ia1vuYJNN+5m43WXMLxoG9nWBexcPjMvNjq+zMkDr/LKNw/y6r3PUZ4pkA0D3MgHr6wajKzHpJpxKdFfeY+29/yYaHhM8C4G8zjn4Yrrse/+GcylVya/3Hem48/ys3QG/6W/gHvuRrI8BFGtUSBqg1ilfX1V+LAZbjDHxMO2X/knzN1wLcf//Ovs+NC7GT3+LK/+xh/A2KFrJToq8aVG/I82QfugKMAc1lKOS87/8Nu57H/7h+Q7Np77OmevYblM/Dlx4FUe/n++w5H7X0FsRrHqokY1cER/HNDkgzQOwWk+xJUO3nwb+U//bJgCqUb1Tcjm4UqKo0dwx47gThzHnz6Jrq7CeBSqWxoqXcYrxmTI4UMYsRCDpnYsID3LseIfm89RrhVs+MC7mbvhWsYvvsrxr3+HuT272fD6PZz3Cx/i8L+5E8kDBPiybAit1NpQG2ilTjsjig4yzjz6Mgc/9UXK0qGZwVuLWkEzi90wR7Z5nrnzN7OwaysbL9nGpku2Y3Ib0+OBLttvuJBb/u1Pcf+//lue/vIPAyStOFxZLWZKvKsaghKPRyvoyQYhyLn+rQw++HOB4M6FQTRg7eBjrD7yIMVLL+COHUPHI0zpQjaz0iUNvTm2OsoSq8GXFudCkixtO6kJ1rTyOWPxw3mK0YTBbW9j0wffEyTtG/cxWV7j6JfvYeG1V7DptjfjxiWH/+1fhm0wzuDLoj2K7Ko2w0YTqhUV5IYzT7yC++Eh/DDDZRZnBW/i3wB4Ez2jgSVbmGPh4m1s27OLS2/ew0U3Xh4LRR47yPixf/ku1pYLXrz7OZjP8Ks+BIi1EQ6MsJ+86YpPdoeHsRnO5PjN5zH42C8i8xvCf2EtbnmJo1/4LKe+/mUmzz+LnjmNlB6rYBEMglGwGhmg4TVRwWAwKkjpgvT7kIamhoYY4le9liZDh3MU45L87W9h6z/9MJJZ1p58nlf/+CswHLD2whHs/Bwbrr2cuSsvJrtgO0vfP4g6BWPxhcZ8UJMFrY1z5alEQ+mzDB3keGvxNrqdxtT2B2NRa1GxuNKzcnyZoz88xLPfOsjJ54+z64ZLyBcGqPOINex8w4U8c/ezTNZcFIDgSaWRsv3kjVd+si40+OjvZnM4p5h3vI/s+rcEyTcGPx5x6I/+PWuPHSDPMjKFzHmysiQrCmxZkpUltnT1YYr4WPr60biqEN/0TgZXMPjQHoNmA1w+oCg8g3e8nS3/9B8heYZOCl76d3/C5PCJUDIQy/Jjz7Hxut0Mdm5l7ooLmb/mUs48/BzFqTVkMIh2QGvMb6LcqoAe/PcSoYxrHJwDVyplTG+4UnFFyDG5UkN2VW1ok8ksx546zJGDh7j85j1kA4t3ynDzkMlawUvfexnJc8oyCkLCADPdqx87e+c2Ya+/KS7KCI2wp7/9t4yf/CHDwZBsbcRgPGI4mTAsCoaFY1g6BtVROPLSk5eOLB4mMkDiMgtJupPriFQsfjAXSnaSMf/h97PlF/4R2GDsj/zpf2H1sWcxWFidIOMSvzbh2d/9M8avHANg45uv5spP/zwb3/5aisLDcABzw+A+YnAS8znRp3dVZ3MsUwaCC74UtBB8YeIhuInBjw1uBOVIKVY8xbIjm5vn5Yde5tG7Hmo8Q4XLf+Jysm1zOCN4E353KYKLRz0foC7mQjDBam/bidm5KxQ+TIY6x+ojD5FbSz4eMyxLhqWrj4FLCF9EohclWemwpY9HKIy0iF+nGiw+G+LzYbA9l7+GTb/682z4qdvRMuwLP/HVezl+171YmwfiTzyslYiH8eFTHPxXf8zkeOiGHlywjSv+1ce56H/9h+imBUpVWJhD5nLUZjGZJpEhhqJuKzc4F+vFpeBKwlEIPh6uEFxh8RODmxjKiVCshjTJc3/3DN55TBaWmWy+dCsbLt5EoYrPQhQdShShPpzh2ukdje17umELkuf1+JKOx7CyQq5CHgluncd6XzfDElvDZ60BkCQhJ1WWUSw+G+DFUhYet2kD+e23MP/+dyHzQ7QskSzj5N98h0Of+XLwoNYKzNiHgouGDgkzl7P69CGe+ORnuebX/yeGF2wD9Vz4kdvY8uPX8tIf/S0nvvU4ZaHIQo4UHj/xcSlipQlNtOt8k2p2SeQbRgmCcVYTYBMJmiKZYbRcUKwVDDcOUVWygWW4fQ6HgjE4E2yBRNsz3R3tpe6XbYVmc0PyhQ0Yf5gcIfOKdaFQIlN7MyPBk31NUvcNxTDcWrBhH0RZKm7TPHLLG9nw/tuxF18Qe4ZC6/nxr3yLQ5+7C6MCowIZeaTQuo1QBLQsMPMDlg++woFf+09c86t3sGnPJfjCsXDFBez5zZ/h9IPP8dKffIcT9z1F6QpYGAYhKZJWFaUZsoj1XVcZ6boOIIlfL4i1mLhEarBxnnw+bwW2zTBNZC6EJfSaakBFN6eoNZSnTqOTCTIYBEIYy4Yb38bawR9ihnNIGf0HJRjUviUXYeVJmHgRQU0GEpNVLrhl/rzt8KYbGN5+C/ayi+ueH8ky1CuHPvtXnPjKf8eKDXAzckihoQDj4jAGPgRDboKZH7L2wjEe+rXPcvU/ez8X/MTr6wGNLW+6nC1vupyT33+Wl774AMfuf47i6CouExjGEmedVdVmMqZV8YraIDEZmRlkkGGGOePJiD3vvAZjTYAhayjGJcsn1oJXVYTCnE9Wezbt6VUTbhlcKHfkCOWhV8gvvayuZG24+VY49Cruv30T6xQ1eTDQpmfYrQo2tMnpa6khdbx5M1y5G3PjG8neeD2ybUvdaoKEBtzJq0d55Q//kpUHHsdmQ2R1gow9ZqJoEatgLkkAGo84E5gwN6BcGvHov97PyUdf4KpP3E62YS7UDgxsu3E3227czerLJzn8nad49d6nOPHEUSYn1yh9wOoq0BSVsM0ntrybmA01Et1TK4GoheMNi2/kde+9PnR3SEggnnjhFCcPLYGNDVyAS/Yxif7jd2o1ZObF4rIBk+EGVp0yfN8H2PLTi0E3TZNyKB76Af6+++D555ClZWRtDKWLmiDNIgtj0cEANm2C7TuQSy9GXrsHc8VlyPnnNTpatRtaC6qc+MZ3OLr/G5THzpCZLBB/4pEJdd1X0w42JDQ9GUOZWcpMcMMMP8wZFwUbrr6Iqz/+Li64+bXNqJMIYpv/aenFE5x4/DBHHnyJU88cZ+nwCqunRhRjR5XETaVfcku2MGBu2zw7rzmPa999FVfcfHkDO04xVrjnD7/LfZ99GMOQyTLBkLsGikV/JjIg5ieczZnkc4zzOUYLm9j5f/xL8l0XNkzQZjZLV1bQU6fh5El0NILRqBm4yHNkwwbYvAnZsR3ZvGnq1kzq4t1QInNXn3iGo/u/zsoPDmLEYkqQtQKZBMiRida9nU2iLebkRXDG4KyhtJEJucXP5xTq8Znl/FuvZ88/vpXNuy+o0wfqNXos7aTi6OQqy4eXGJ0aMTozppy4asUP+cKAfMOAjedtYGHHAnObh60SekX84y+e5I9/8UuMTynFqlCOBFeYYLdijUD0Q+9UKqMiIfossyHjwTxrGPSqPez6F7+MmV+oA7KaCSL8SD/eoz4U1yWmNABGz7zIia/ew9J9D+FXiyD14xIZO0wBFKEOQJm0FnYnFiEYTGMaRmRCmRncMMcPLePCYbctcPE7X8+V77+JLZc1Wuhji6OYtmac222+tF6rEKp2hvHKhC/82l28/MgJtMwpVsBNBO9MaIGvNeCD7/Qx7xxVLKO0OZNswGRugVWnmNdex/n/5OfId+yIGUB/Lve/anc7irRgTIuClR88zulv3c/KD36IX17D2gGm8MioxBSKlARvpwi72byjXvBbt4IT0xZAGT2UmgnGUGaGIjeUucUPc8pMmJQl2faN7LrxSna/6wYufNPuoAVJhlP9OtOi1dRXZx7RxKzomaNLfOm3v8nzDx6uoaecmAg/JqR7Auqo6Adv18qFDHl3izOWwg6Y2JzJ3AJrzqM7z2fre9/L5re/DTM3ty7BZ2mGn0wYP/0CKw8+ysoPnmDy3MtQeIzJQ3pi7JCJD9BTBqmv2glryInD2nWFqtswW1WtjKE0EY5sYESZGdzAhGSbESauhGHGtqt2ceFbruCSG69g59W7sINsZu4/DtMGger8TFYnPHL3Qf77Fx7g9KurGBkyWVHKsQ3EL8M2mFr6yRD9wO0nUdmKoqoiAYospYmaYDMmgznGGCZesZdeysa3vJn5a/YwvGgX2eZNIWDrEns8wS0tUx47weiFVxgdfJbx8y9TvnwEWRsHjBcbsb1xLaUEKUO03BTX23CT+uQu5nEaKIqPURNKExmQ2oZMcJlFBxafCYV3lOqx80M2v2YH23efz/nXXsSO3TvZfP4m5jbNk/cUZMrCsXJyleMvneCFR17hie88w9FnTyLkqM8o1sBNLG4iqDM4V9XOjQqZgJwS/eA/+B4qN1GG6krVB+PFBntgMiYmo8hyimxA4X24I0c+wGzahN2yFbtxA3ZhIdRkR2O0KPHLa7jTS+jKCMYTxIM1hkwsxoEUCdGdIqXUayCrtsFa6tXUAVKf5PsKkiqmYGIPfuUdBSY4ExjhrMHZyAgraG7Q3OCNUHpP6T3eCHaYk28cMrd1gcHGOWxuyeYHYXXayoTVpRHLJ1ZZOT2inChiMozkFOOA966wIYdUCt4HIZFQlPGZDA2Y+zPUPAdyU8jfNhOGhphIN2FZnnGKKTzWZgxsFu5bc2oJPX462Eif4GNcN5CJQRAsNtj8SRy+cJHoTmJXWwwAvSZdC+3h57oxNplKr87TlsGQOgj/rBfbjBkpeJMs53XBHfRG8AV4q3gLPrOIzbBGcAUUJycsnRiHkmxrdVCME4xByREjlEUoyvvS4EsbCF8LEXX6IdT/LQrPZXi9HzGLVQRb5XI09urjJU4vKtaAKz1OHE5M7BCLOxiSNITExqqQptBQDYu8NF4xcUBOndbJOJ+0kjQj/kk3covgTWNs9zGkD5quNS+msRE1lFXMiAUXF2yGN+AseKN4U9WhQ+eDGomdN02nXFVXcJXGehMZa5L/J44+VQFdNTiOQdXfn2Httyh8ASZvJr3jnFUVIUjweqyEW6G40C5b5zbqiDcdTvZgfLW3QcJ5ZEQ6GloVSCTOdkkkvu/eYqB1kyVJ1lE0LeKukv4kbeBVmrbBaDNcjB+8CVWuEEOEw5fx9Zhwq3M4QkzKVaFO8v11IclEDW4KS+qn1zkLxhZaFAb5VsbYHED0OcRcjfM++kdxlUozmWjjrRJNGJvAU11qOr2TJIsqQiZKfLNAQzodCu2lFlHCfZupSnsVQNouGKSp3SDr0udJ3t8nTVFOQ/HFK8Fg+zg2LAlTqgyoaTKhvv59UnfPee20PMbiVtPbHGgUlruIz8zAeM9z4w3mQCZ33bWq73vffjL7a5SFDxXwnj0HLm6djlBl4pp7ba2olKlFFXgfHyMzov8uvklJtyU+RtmtYYh+GKJD+BpyOq813cppQ218vcp+QizUSJOejpLf1I2abGbDgCRN0RreoHWXqQT/vTVzxlPu/4//3/tWK4f380zcr4RN2aJRTEghqbIPWuO8JoML7bEjqdaCpZ1viX2R7p1We/cudDfPSmdGi0TCm3bBpnG227PZtBO2UsxJp0LtaUm0GULDiJrwqRZMN/WlawpCwkA6Q75ix248yezw8wBGFxet3HXXE3j5M2wu8f640ytYPIl9SPEaTMR440MhXirYiRAjFfF9ZxledXchpLVIqS3tqR1oGKQV0VPJTlvEpW2MtWopl0Yb6iJLoilN53Ij0bXhVknKmNSaUA1rNwPc1U2XpM0sVZ/bjeKRP/v9R97zxOLinSHpEUox8ls4nUSJ09YGQKQzZJ3iff++NUmHMHx76XUNK75rwHsmD/s8oM64v9cGVvzUpEozSKGk10kLilLCp0xxif3wSfzRMEKasenW5jOJ/0p9rSI5pS8nItlvgQr7wcj+/Y7FRSNf+9JjwG+TDy3B0Wk61rycwwK66d34zBjnbFfO+u48Z2YszI7/UEty23NZfVMqKQG1Je0VI2nbkdZghdSS3JJoaSS7C01tzaJq8nW53WhV5Lf/w2M/+dji4n6znzuc1Bqwd6/w3e/mlPPfwti3MinCzuDuznt+tMWk05vDaXaq+aYrwXeGnn06CF3neeLAM529C/XkeXVNGIZun0sckhZcjJJ99ZwG84MrS+u11PC2HoU6Ao+jhBHzo9dTtfGruoHdZJ0vv7exGN66/SPfLfbt+6SCqGndE/trXxuj+lGcHkWsCb5m3yLqvz/xpxdbS+uuhtC/e19Tg1tJbwwC2zsYOhqQSHN1fRW7+BTvpW+oYtZB0uMvzV1JhPbzYNi9mIHx6FGr+tF/99RPjtlX3eEiuUOb7NvndXHRyjf/+iBeP4HJwg57r/7c1jGehfitvcwydcsPWWc/Z+MytvFYtWNAZXoQLrUNddTcS/zOIdVkTNrL2fR0kkzQiLRv3aI1g/FGrFoZivfuE3/4xAcOLi7eafexz0/d0BlA9u93etttmdz9l1/F+49jBjZogrqzLadbn/jJfWViDDClTUjvnSda2C6mZWS9tAeiU+xunzdEbRte05H8dvPsFNE771GvRjNVU2bd+aGqzkpurJmzpZt8/DOP//RXb7vt7mz//jta95WfKv3IPfeUurho5e4//xxe3w/2KHZo8ZSNd/Qjwg4zjLFKzxqzZCdDx1hO71yYhhqfENZ3plE0aYshIWwf8dPruxpALfkxIRe6X6vXVZUytxst5EdLyvd/7okPfm6RO+0997yj7NK7t/ZWa8I9X7iLQm5F5dtk83F8BNdyU88m+TNvG0KyR3P6sXE3ZWrnjm/NWUkPE/onEnuxXaU1NkSLUdNEb81PpMzAqCgOjMxlWzKQb4sxt37+0Q/cddtte7P9tCV/XQa0NOG+P32C45N3UfpPQTbBDmwUrxLFz5Z86XYlnTOztAMv2lr1KMk4aDr41qcdswifaEQHu5vcVnIvzWSypRpKlIbwHpUSjAyyzTZjbuJxn1rR8bs++8j/+MTi4p32nnv2lay3CXTd0u7evUb2BaOhb/vEDeB/Cec/ghnkcbtR2CVQE9NUPYczCR2iStPvdmLCsqN0xZf0uZzV7h3bFF7qXTyxIla7prEhNnFHXZVuoHE9W1FtzP1ULmn06bXZdiNhIbIMsGaOsRsXxgz+sxr36c8c+OkDAHtRsy/0DfL3ZkAdJywuhqAN0Js+dj2SfZjSfQjPVUhmm8DNn8VGhESb62NAvdzIzvDzQ6WrImzNCGmeV0yoCFx2iN72+1OCN4R3NOnn1PevxraqO/tN/NgJ+VNiB3+O83/6h4//1KMAi9xp93OHP5dl/z9SX4my17D4mNSMeNu/mKdYeT1ObwF/E1524/zVIFvjbfB6NUFbQVfISNYL7noIXibrv5wYiirgioFWfZ4EWY62BjTENo3kJ6/5OvhKs551Ak5VrHg4Zcif9GKfRez9Yv29w4XzH/69v3v7WkX463hUUzfzbD//P0gOtyY2+ivUAAAAAElFTkSuQmCC" alt=""><div><b>Get the app</b><small>Faster, full screen, one tap from home</small></div><button type="button" class="go">Install now</button><button type="button" class="cl" aria-label="Close">\u00d7</button>';
    c.querySelector(".go").onclick=install;
    c.querySelector(".cl").onclick=function(){try{localStorage.setItem("np_install_x",String(Date.now()))}catch(e){}c.remove()};
    rc.insertAdjacentElement("afterend",c);
  }
  function more(){
    if(installed())return;
    var sh=document.querySelector("#npMoreSheet .in");if(!sh||document.getElementById("npInstMore"))return;
    var b=document.createElement("button");b.type="button";b.className="it";b.id="npInstMore";b.innerHTML='<span style="font-size:20px">\ud83d\udcf2</span><span>Install app</span>';
    b.onclick=function(){var s=document.getElementById("npMoreSheet");if(s)s.remove();install()};
    var x=sh.querySelector(".x");if(x)sh.insertBefore(b,x);else sh.appendChild(b);
  }
  function run(){if(installed()){hideAll();return}try{card();more()}catch(e){}}
  var busy=false;
  new MutationObserver(function(){if(busy)return;busy=true;setTimeout(function(){busy=false;run()},300)}).observe(document.body,{childList:true,subtree:true});
  run();
})();

/* ===== Fast opening (9 Oct 2026): switch on np-sw.js, which saves the app on the phone and keeps it updated by itself. ===== */
(function(){
  if(!("serviceWorker" in navigator))return;
  window.addEventListener("load",function(){try{navigator.serviceWorker.register("/np-sw.js").catch(function(){})}catch(e){}});
})();

/* ===== Boomer (16 Oct 2026, Rahul): one name, swipe screen first, Discover / Plan night out / Plan day out,
   10 free profiles a day, messages for Boomer Premium and Namaste Gold only. Added on top; nothing removed. ===== */
(function(){
  var DEMO=true;   /* SAMPLE PROFILES for testing and investor demos. Set to false on launch day. */
  var FREE=10;
  function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
  function lsGet(k,f){try{var v=localStorage.getItem(k);return v==null?f:JSON.parse(v)}catch(e){return f}}
  function lsSet(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
  function flag(k,v){try{if(typeof store!=="undefined"&&store&&store.set)store.set(k,v);else lsSet(k,v)}catch(e){lsSet(k,v)}}
  function isPrem(){try{return (typeof isPremium==="function"&&!!isPremium())||(typeof isVIP==="function"&&!!isVIP())}catch(e){return false}}
  function today(){var d=new Date();return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()}
  function seenN(){var o=lsGet("np_meet_seen",{});return o&&o.d===today()?o.n:0}
  function addSeen(){lsSet("np_meet_seen",{d:today(),n:seenN()+1})}
  function hash(s){var h=0;for(var i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))|0;return Math.abs(h)}
  var BAD=/(money|cash|\bpay\b|\bpaid\b|payment|price|\brate\b|baht|฿|\btip\b)/i;

  /* sample people: no real photos, no real names; clearly marked "Sample" */
  var SAMPLE=[
   {id:"s1",name:"Aman",age:27,city:"Delhi",lang:"Hindi, English",kind:"night",plan:"Bollywood club night on Walking Street, group of 3",when:"Tonight",c:"#E8417A"},
   {id:"s2",name:"Priya",age:25,city:"Mumbai",lang:"Hindi, Marathi, English",kind:"night",plan:"Dinner and live music with a friend",when:"Tonight",c:"#7F77DD"},
   {id:"s3",name:"Rohit",age:30,city:"Bengaluru",lang:"Kannada, English",kind:"day",plan:"Golf in the morning, solo, looking for a group",when:"Tomorrow",c:"#BA7517"},
   {id:"s4",name:"Simran",age:26,city:"Chandigarh",lang:"Punjabi, Hindi",kind:"day",plan:"Coral Island trip with friends",when:"Saturday",c:"#1D9E75"},
   {id:"s5",name:"Karan",age:34,city:"Ahmedabad",lang:"Gujarati, Hindi",kind:"night",plan:"Indian dinner, then a club night",when:"Friday",c:"#D85A30"},
   {id:"s6",name:"Neha",age:29,city:"Pune",lang:"Hindi, English",kind:"day",plan:"Beach day and the night market",when:"Tomorrow",c:"#185FA5"},
   {id:"s7",name:"Vikram",age:31,city:"Jaipur",lang:"Hindi, English",kind:"night",plan:"Birthday night out, need more people",when:"Saturday",c:"#993556"},
   {id:"s8",name:"Ananya",age:24,city:"Hyderabad",lang:"Telugu, Hindi, English",kind:"day",plan:"Sightseeing and a spa afternoon",when:"Sunday",c:"#0F6E56"},
   {id:"s9",name:"Gurpreet",age:28,city:"Ludhiana",lang:"Punjabi, Hindi",kind:"night",plan:"Club night with friends, open to join",when:"Tonight",c:"#534AB7"},
   {id:"s10",name:"Meera",age:27,city:"Chennai",lang:"Tamil, English",kind:"day",plan:"Island trip and a seafood lunch",when:"Saturday",c:"#A32D2D"},
   {id:"s11",name:"Harsh",age:32,city:"Surat",lang:"Gujarati, Hindi",kind:"day",plan:"Water sports in the morning",when:"Tomorrow",c:"#3B6D11"},
   {id:"s12",name:"Tanya",age:26,city:"Kolkata",lang:"Bengali, Hindi",kind:"night",plan:"Dinner and dancing with 2 friends",when:"Friday",c:"#72243E"}
  ];
  var PLANS={
   night:[["Bollywood club night","Walking Street · 10 PM",3],["Indian dinner, then live music","Pattaya Central · 8 PM",2],["Night market food walk","Central Pattaya · 7 PM",4],["Rooftop dinner with city lights","Pattaya Beach · 8:30 PM",2]],
   day:[["Coral Island trip","Pier pick-up · 9 AM",4],["Golf morning","Pattaya golf course · 7 AM",2],["Beach day and water sports","Jomtien · 10 AM",5],["Shopping and Indian lunch","Central Pattaya · 12 PM",3]]
  };
  var tab="discover";

  /* ---------- styles ---------- */
  (function(){if(document.getElementById("npbCss"))return;var st=document.createElement("style");st.id="npbCss";
   st.textContent='#npBoomer .npb-tabs{display:flex;gap:6px;margin:10px 0 14px}#npBoomer .npb-tabs button{flex:1;padding:11px 4px;border-radius:12px;border:1px solid rgba(255,255,255,.22);background:transparent;color:inherit;font:inherit;font-weight:700;font-size:13px;cursor:pointer}'+
   '#npBoomer .npb-tabs button[aria-selected=true]{background:#F2EEFC;color:#1a1530;border-color:#F2EEFC}'+
   '#npBoomer .npb-sample{position:absolute;top:14px;left:14px;font-size:11px;font-weight:700;letter-spacing:.06em;background:rgba(0,0,0,.55);color:#F2EEFC;border:1px solid rgba(255,255,255,.35);border-radius:999px;padding:3px 10px;z-index:2}'+
   '#npBoomer .npb-kind{position:absolute;top:14px;right:14px;font-size:11px;font-weight:700;background:#E9B949;color:#1a1026;border-radius:999px;padding:3px 10px;z-index:2}'+
   '#npBoomer .npb-plan{border:1px solid rgba(255,255,255,.18);border-radius:16px;padding:14px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center;gap:10px;background:rgba(255,255,255,.04)}'+
   '#npBoomer .npb-plan b{display:block;font-size:15px}#npBoomer .npb-plan small{opacity:.8;display:block;margin-top:2px}'+
   '#npBoomer .npb-btn{border:0;border-radius:999px;padding:9px 16px;font:inherit;font-weight:700;font-size:13px;background:#E9B949;color:#1a1026;cursor:pointer;white-space:nowrap}#npBoomer .npb-btn.alt{background:transparent;color:inherit;border:1px solid rgba(255,255,255,.3)}'+
   '#npBoomer .npb-note{font-size:12px;opacity:.75;text-align:center;margin:8px 0}'+
   '.npb-pcard{border:1px solid rgba(255,255,255,.2);border-radius:18px;padding:14px;margin-top:12px}.npb-pcard.gold{border:2px solid #E9B949;background:rgba(233,185,73,.08)}.npb-pcard h3{margin:0;font-size:16px}.npb-pcard .pr{font-size:24px;font-weight:700;margin:4px 0}.npb-pcard ul{margin:6px 0 0;padding-left:18px;font-size:13.5px;line-height:1.7}'+
   '.npb-chat{display:flex;flex-direction:column;gap:6px;min-height:28vh;max-height:44vh;overflow:auto;margin:10px 0}.npb-chat div{max-width:80%;padding:8px 12px;border-radius:14px;font-size:14px}.npb-chat .me{align-self:flex-end;background:#F2EEFC;color:#1a1530}.npb-chat .them{align-self:flex-start;background:rgba(255,255,255,.12)}';
   document.head.appendChild(st)})();

  function sheetOpen(html){panel.innerHTML=html;try{lastFocus=document.activeElement}catch(e){}sheet.classList.add("open");document.body.style.overflow="hidden";panel.scrollTop=0}
  function closeX(){try{closeSheet()}catch(e){}}
  function toast(m){var d=document.createElement("div");d.textContent=m;d.setAttribute("role","status");d.style.cssText="position:fixed;left:50%;bottom:110px;transform:translateX(-50%);background:#F2EEFC;color:#1a1530;padding:10px 18px;border-radius:999px;font-weight:700;font-size:14px;z-index:2147483000;box-shadow:0 6px 20px rgba(0,0,0,.4)";document.body.appendChild(d);setTimeout(function(){d.remove()},2400)}
  function refreshPrem(){try{renderPremiumUI()}catch(e){}try{renderVipBar()}catch(e){}sync(true)}

  /* ---------- the two plans ---------- */
  function openPlans(reason){
    var cur=lsGet("np_boomer_plan",null);
    sheetOpen('<div class="pbody"><div style="display:flex;justify-content:space-between;align-items:center"><h2 id="sheetTitle" style="font-size:20px">Boomer plans</h2><button class="theme" id="npbX" aria-label="Close">'+(typeof ico==="function"?ico("close"):"x")+'</button></div>'+
     (reason?'<p class="about">'+esc(reason)+'</p>':'<p class="about">Free: '+FREE+' profiles a day, like and skip only. Upgrade to message people and see everyone.</p>')+
     '<div class="npb-pcard"><h3>Boomer Premium</h3><div class="pr">฿1,499 <small style="font-size:13px;font-weight:400">per month</small></div><ul><li>Unlimited profiles</li><li>Message people you match with</li><li>Unlimited night out and day out plans</li><li>See who liked you</li></ul><button class="cta" id="npbA" style="margin-top:10px">'+(cur==="boomer"?"Your test plan":"Try free (test)")+'</button></div>'+
     '<div class="npb-pcard gold"><h3>Namaste Gold · All access</h3><div class="pr" style="color:#E9B949">฿2,999 <small style="font-size:13px;font-weight:400">per month</small></div><ul><li>Everything in Boomer Premium</li><li>All Namaste Gold perks and offers</li><li>Priority bookings and VIP support</li><li>Your choice of app colours</li></ul><button class="cta" id="npbB" style="margin-top:10px">'+(cur==="gold"?"Your test plan":"Try free (test)")+'</button></div>'+
     '<p class="npb-note">Payments are not live yet. During testing both plans are free to try.</p>'+(cur?'<button class="npb-btn alt" id="npbC" style="width:100%">Cancel my test plan</button>':'')+'</div>');
    panel.querySelector("#npbX").onclick=closeX;
    panel.querySelector("#npbA").onclick=function(){flag("np_vip_buddy",true);lsSet("np_boomer_plan","boomer");closeX();toast("Boomer Premium is on (test)");refreshPrem()};
    panel.querySelector("#npbB").onclick=function(){flag("np_vip_buddy",true);flag("np_premium",true);lsSet("np_boomer_plan","gold");closeX();toast("Namaste Gold is on (test)");refreshPrem()};
    var c=panel.querySelector("#npbC");if(c)c.onclick=function(){flag("np_vip_buddy",false);flag("np_premium",false);lsSet("np_boomer_plan",null);closeX();toast("Test plan cancelled");refreshPrem()};
  }

  /* ---------- sample chat (Premium only) ---------- */
  function openChat(p){
    if(!isPrem()){openPlans("Messages are for Boomer Premium and Namaste Gold members.");return}
    sheetOpen('<div class="pbody"><div style="display:flex;justify-content:space-between;align-items:center"><h2 id="sheetTitle" style="font-size:18px">'+esc(p.name)+' <small style="font-weight:400;opacity:.7">(sample chat)</small></h2><button class="theme" id="npbX" aria-label="Close">'+(typeof ico==="function"?ico("close"):"x")+'</button></div>'+
     '<div class="npb-chat" id="npbMsgs"><div class="them">Hi! '+esc(p.plan)+'. Want to join? (sample message)</div></div>'+
     '<div style="display:flex;gap:8px"><input id="npbIn" placeholder="Say hi, in a public place plan" style="flex:1;min-width:0" aria-label="Message"><button class="npb-btn" id="npbSend">Send</button></div><p class="npb-note" id="npbErr"></p>'+
     '<p class="npb-note">Sample chat for testing. Real chats start when real members join. Meet only in public places.</p></div>');
    panel.querySelector("#npbX").onclick=closeX;
    var box=panel.querySelector("#npbMsgs"),inp=panel.querySelector("#npbIn"),err=panel.querySelector("#npbErr");
    function send(){var v=inp.value.trim();if(!v)return;if(BAD.test(v)){err.textContent="No money or payment talk, please.";return}err.textContent="";
      var m=document.createElement("div");m.className="me";m.textContent=v;box.appendChild(m);inp.value="";box.scrollTop=box.scrollHeight;
      setTimeout(function(){var r=document.createElement("div");r.className="them";r.textContent="Sounds great! See you there (sample reply)";box.appendChild(r);box.scrollTop=box.scrollHeight},900)}
    panel.querySelector("#npbSend").onclick=send;inp.onkeydown=function(e){if(e.key==="Enter")send()};
  }
  function matchSheet(p){
    sheetOpen('<div class="pbody" style="text-align:center"><div style="display:flex;justify-content:flex-end"><button class="theme" id="npbX" aria-label="Close">'+(typeof ico==="function"?ico("close"):"x")+'</button></div><h2 id="sheetTitle">It is a match!</h2><p class="about">You and '+esc(p.name)+' both liked each other (sample). Make a plan in a public place.</p><button class="cta" id="npbHi">Say hi to '+esc(p.name)+'</button></div>');
    panel.querySelector("#npbX").onclick=closeX;panel.querySelector("#npbHi").onclick=function(){openChat(p)};
  }

  /* ---------- sample deck ---------- */
  function st(){var o=lsGet("np_boomer_demo",null);return o&&o.liked?o:{liked:{},skip:{}}}
  function queue(){var s=st();return SAMPLE.filter(function(p){return !s.liked[p.id]&&!s.skip[p.id]})}
  function paintDeck(box){
    if(!box)return;
    if(!isPrem()&&seenN()>=FREE){
      box.innerHTML='<div class="npm-deck"><div class="npm-photo" style="background:linear-gradient(160deg,#412402,#BA7517 55%,#FAC775)"><div class="npm-over"><b>You have seen your '+FREE+' free profiles today</b><small>Come back tomorrow for '+FREE+' more, or go unlimited now.</small></div></div><div class="npm-acts" style="justify-content:center;margin-top:12px"><button class="npb-btn" id="npbUp">See Boomer plans</button></div></div>';
      box.querySelector("#npbUp").onclick=function(){openPlans("")};return}
    var q=queue(),p=q[0];
    if(!p){box.innerHTML='<div class="npm-card"><b>You have seen all sample profiles</b><p class="npm-plan">Real members will appear here after launch.</p><div class="npm-acts"><button class="npb-btn alt" id="npbReset">Show sample profiles again</button></div></div>';
      box.querySelector("#npbReset").onclick=function(){lsSet("np_boomer_demo",{liked:{},skip:{}});paintDeck(box)};return}
    box.innerHTML='<div class="npm-deck"><div class="npm-photo" id="npbCard" style="background:linear-gradient(160deg,'+p.c+',#141026);position:relative"><span class="npb-sample">SAMPLE</span><span class="npb-kind">'+(p.kind==="night"?"Night out":"Day out")+'</span><span class="npm-big">'+esc(p.name.charAt(0))+'</span><span class="npm-stamp like">LIKE</span><span class="npm-stamp nope">SKIP</span>'+
      '<div class="npm-over"><b>'+esc(p.name)+', '+p.age+'</b><small>'+esc(p.city)+' · '+esc(p.lang)+'</small><small style="margin-top:6px"><b style="font-size:14px;display:inline">'+esc(p.when)+'</b> · '+esc(p.plan)+'</small></div></div>'+
      '<div class="npm-dbtns"><button class="npm-round no" id="npbNo" aria-label="Skip"><i>✖</i></button><button class="npm-round hi" id="npbHiBtn" aria-label="Message">💬</button><button class="npm-round yes" id="npbYes" aria-label="Like"><i>❤</i></button></div>'+
      '<p class="npm-count">'+q.length+' sample '+(q.length===1?"profile":"profiles")+(isPrem()?"":" · "+Math.max(0,FREE-seenN())+" free left today")+'</p></div>';
    var card=box.querySelector("#npbCard");
    function act(like){
      addSeen();card.classList.add(like?"go-right":"go-left");
      var s=st();if(like)s.liked[p.id]=1;else s.skip[p.id]=1;lsSet("np_boomer_demo",s);
      setTimeout(function(){paintDeck(box);if(like&&hash(p.id+"np")%3!==0)setTimeout(function(){matchSheet(p)},120)},300);
    }
    box.querySelector("#npbNo").onclick=function(){act(false)};box.querySelector("#npbYes").onclick=function(){act(true)};
    box.querySelector("#npbHiBtn").onclick=function(){openChat(p)};
    var x0=null,dx=0;
    card.addEventListener("touchstart",function(e){x0=e.touches[0].clientX;dx=0;card.style.transition="none"},{passive:true});
    card.addEventListener("touchmove",function(e){if(x0===null)return;dx=e.touches[0].clientX-x0;card.style.transform="translateX("+dx+"px) rotate("+(dx/20)+"deg)";card.classList.toggle("show-like",dx>40);card.classList.toggle("show-nope",dx<-40)},{passive:true});
    card.addEventListener("touchend",function(){card.style.transition="";if(Math.abs(dx)>90){act(dx>0)}else{card.style.transform="";card.classList.remove("show-like","show-nope")}x0=null});
  }

  /* ---------- plan lists ---------- */
  function myPlans(k){return (lsGet("np_boomer_myplans",[])||[]).filter(function(x){return x.k===k})}
  function paintPlans(box,k){
    var joined=lsGet("np_boomer_joined",{}),mine=myPlans(k);
    var rows=mine.map(function(m){return '<div class="npb-plan"><div><b>'+esc(m.t)+'</b><small>'+esc(m.w)+' · '+esc(m.p)+' · my plan (test)</small></div><span class="npb-note" style="margin:0">Yours</span></div>'}).join("");
    rows+=PLANS[k].map(function(r,i){var id=k+i,j=!!joined[id];return '<div class="npb-plan"><div><b>'+esc(r[0])+'</b><small>'+esc(r[1])+' · '+(r[2]+(j?1:0))+' going (sample)</small></div><button class="npb-btn'+(j?" alt":"")+'" data-join="'+id+'">'+(j?"Joined ✓":"Join")+'</button></div>'}).join("");
    box.innerHTML='<p class="npb-note" style="text-align:left;margin-top:0">Group plans in public places. 18+. No money or paid services. Sample plans for testing.</p>'+rows+'<button class="npb-btn" id="npbMake" style="width:100%;margin-top:6px">+ Create my '+(k==="night"?"night out":"day out")+' plan</button>';
    [].forEach.call(box.querySelectorAll("[data-join]"),function(b){b.onclick=function(){var o=lsGet("np_boomer_joined",{});o[b.dataset.join]=!o[b.dataset.join];lsSet("np_boomer_joined",o);paintPlans(box,k)}});
    box.querySelector("#npbMake").onclick=function(){makePlan(box,k)};
  }
  function makePlan(box,k){
    var d=lsGet("np_boomer_planday",{});var made=d.d===today()?d.n:0;
    if(!isPrem()&&made>=1){openPlans("Free members can create 1 plan a day. Boomer Premium has unlimited plans.");return}
    sheetOpen('<div class="pbody"><div style="display:flex;justify-content:space-between;align-items:center"><h2 id="sheetTitle" style="font-size:20px">Create my '+(k==="night"?"night out":"day out")+' plan</h2><button class="theme" id="npbX" aria-label="Close">'+(typeof ico==="function"?ico("close"):"x")+'</button></div>'+
     '<div class="fields"><label class="full">Plan<input id="npbT" maxlength="60" placeholder="'+(k==="night"?"e.g. Bollywood club night, group of 4":"e.g. Coral Island trip")+'"></label><label>When<select id="npbW"><option>Tonight</option><option>Tomorrow</option><option>This weekend</option></select></label><label>Public place<input id="npbP" maxlength="40" placeholder="e.g. Walking Street"></label></div>'+
     '<label style="display:flex;gap:8px;align-items:flex-start;margin-top:10px;font-size:14px"><input type="checkbox" id="npbOk"> I am 18+, and I will meet only in public places. No money or paid services.</label><button class="cta" id="npbSave" style="margin-top:12px">Save plan</button><p class="npb-note" id="npbErr" role="alert"></p></div>');
    panel.querySelector("#npbX").onclick=closeX;
    panel.querySelector("#npbSave").onclick=function(){
      var t=panel.querySelector("#npbT").value.trim(),w=panel.querySelector("#npbW").value,p=panel.querySelector("#npbP").value.trim(),e=panel.querySelector("#npbErr");
      if(!t||!p){e.textContent="Please add a plan and a public place.";return}
      if(BAD.test(t+" "+p)){e.textContent="No money or payment talk, please.";return}
      if(!panel.querySelector("#npbOk").checked){e.textContent="Please tick the box to continue.";return}
      var all=lsGet("np_boomer_myplans",[])||[];all.unshift({k:k,t:t,w:w,p:p});lsSet("np_boomer_myplans",all.slice(0,30));lsSet("np_boomer_planday",{d:today(),n:made+1});
      closeX();toast("Plan saved (test mode)");paintPlans(box,k)};
  }

  /* ---------- the screen ---------- */
  function root(){return document.getElementById("npBoomer")}
  function build(){
    var s=document.getElementById("buddy");if(!s)return false;
    if(!root()){
      var d=document.createElement("div");d.id="npBoomer";
      d.innerHTML='<div class="npb-tabs" role="tablist" aria-label="Boomer"><button role="tab" data-t="discover" aria-selected="true">Discover</button><button role="tab" data-t="night" aria-selected="false">Plan night out</button><button role="tab" data-t="day" aria-selected="false">Plan day out</button></div><div id="npbDeck"></div><div id="npbPlans" hidden></div>';
      var t=s.querySelector(".sectiontitle");if(t)t.insertAdjacentElement("afterend",d);else s.insertBefore(d,s.firstChild);
      [].forEach.call(d.querySelectorAll(".npb-tabs button"),function(b){b.onclick=function(){tab=b.dataset.t;sync(true)}});
    }
    return true;
  }
  var lastKey="";
  function sync(force){
    if(!build())return;
    var r=root(),meet=document.getElementById("npMeet"),title=document.querySelector("#buddy .sectiontitle");
    if(title&&title.textContent!=="Boomer")title.textContent="Boomer";
    if(meet&&r.nextElementSibling!==meet&&meet.parentNode===r.parentNode)meet.insertAdjacentElement("beforebegin",r);
    [].forEach.call(r.querySelectorAll(".npb-tabs button"),function(b){var on=b.dataset.t===tab;if(b.getAttribute("aria-selected")!==String(on))b.setAttribute("aria-selected",on)});
    /* show sample cards whenever there is no real person to swipe (signed out, signed in without a profile, setup, or no members yet) */
    var hasReal=!!(meet&&meet.querySelector("#npmCard,#npmGold"));
    var showDemo=DEMO&&tab==="discover"&&!hasReal;
    if(meet){var ec=meet.querySelector(".npm-empty-card");if(ec){var w=ec.closest(".npm-deck")||ec;w.style.display=showDemo?"none":""}}
    var deck=r.querySelector("#npbDeck"),plans=r.querySelector("#npbPlans");
    deck.hidden=!showDemo;plans.hidden=tab==="discover";
    if(meet){meet.style.display=tab==="discover"?"":"none";
      var te=meet.querySelector(".npm-teaser");if(te&&showDemo)te.style.display="none";
      var hb=meet.querySelector(".npm-card.hl b");if(hb&&hb.textContent==="Sign in to meet people")hb.textContent="Sign in to like and meet real members";
      var hp=meet.querySelector(".npm-card.hl .npm-plan");if(hp&&/See real travellers/.test(hp.textContent))hp.textContent="Create your profile to like people and join plans. Free, 18+, public places only."}
    var key=tab+"|"+showDemo+"|"+isPrem()+"|"+seenN();
    if(force||key!==lastKey){lastKey=key;
      if(showDemo)paintDeck(deck);
      if(tab!=="discover")paintPlans(plans,tab)}
  }
  /* real module's "Say hi" and Gold buttons: messages need Boomer Premium or Gold */
  document.addEventListener("click",function(e){
    var t=e.target&&e.target.closest?e.target.closest("#npmGold,[data-hi],#npmHi,#mbHi"):null;if(!t)return;
    if(t.id==="npmGold"){e.preventDefault();e.stopImmediatePropagation();openPlans("");return}
    if(!isPrem()){e.preventDefault();e.stopImmediatePropagation();openPlans("Messages are for Boomer Premium and Namaste Gold members.")}
  },true);
  var sec=document.getElementById("buddy");
  if(sec){var mo=new MutationObserver(function(){clearTimeout(sync._t);sync._t=setTimeout(function(){sync(false)},60)});mo.observe(sec,{childList:true,subtree:true});}
  sync(true);setTimeout(function(){sync(true)},800);setTimeout(function(){sync(true)},2500);
  window.addEventListener("hashchange",function(){setTimeout(function(){sync(true)},200)});
})();

/* ===== Free entry at every club (16 Oct 2026, Rahul) ===== */
(function(){
  try{
    if(typeof CLUBS!=="undefined")CLUBS.forEach(function(c){
      if(!c||!c.pkgs)return;var has=false;
      c.pkgs.forEach(function(p){if(/entry|day ?pass|cover|guest ?list/i.test(p.n||"")){p.p=0;has=true}});
      if(!has&&(c.cat==="nightlife"||c.cat==="beach")){var base=c.pkgs[0]||{};c.pkgs.unshift(Object.assign({},base,{n:"Entry (guest list)",d:"Free entry",p:0}))}
    });
  }catch(e){}
  function rerender(){["renderGrid","renderTonight","renderTicker","renderTick","renderHome"].forEach(function(f){try{if(typeof window[f]==="function")window[f]()}catch(e){}})}
  rerender();setTimeout(rerender,600);
})();

/* ===== Club names locked (blurred, with a lock) until each club gives permission (16 Oct 2026, Rahul).
   To show a club's name: add its exact name to ALLOWED, e.g. ["Jalwa Club"]. To unlock all: NP_LOCK_CLUB_NAMES=false ===== */
(function(){
  var NP_LOCK_CLUB_NAMES=true;
  var ALLOWED=[];
  if(!NP_LOCK_CLUB_NAMES||typeof CLUBS==="undefined")return;
  var names=[],tok={},all=[],re=null,lastSig="";
  function rx(s){return s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}
  /* rebuilt whenever CLUBS changes, so clubs added later (loaded after start) are blurred too */
  function build(){
    var sig=CLUBS.length+"|"+CLUBS.map(function(c){return c&&c.name}).join(",").length;
    if(sig===lastSig&&re)return;lastSig=sig;
    names=[];tok={};
    CLUBS.forEach(function(c){if(c&&(c.cat==="nightlife"||c.cat==="beach"||c.afterparty)&&c.name&&ALLOWED.indexOf(c.name)<0)names.push(c.name)});
    names.forEach(function(n){var w=n.replace(/^The\s+/i,"").split(/\s+/)[0].replace(/['\u2019]s$/,"");if(w&&w.length>=4&&!/^(club|beach|lounge|bar)$/i.test(w))tok[w]=1});
    all=names.concat(Object.keys(tok)).sort(function(a,b){return b.length-a.length});
    re=all.length?new RegExp("(?<![\\w])("+all.map(rx).join("|")+")(?![\\w])","g"):null;
  }
  build();
  if(!re)return;
  window.npMaskClubs=function(s){re.lastIndex=0;return String(s).replace(/🔒/g,"").replace(re,"a partner club")};
  var st=document.createElement("style");st.textContent='.np-lockw{white-space:nowrap}.np-lockw::before{content:"\\1F512";font-size:.8em;margin-right:.25em}.np-lock{filter:blur(6px);-webkit-user-select:none;user-select:none}';document.head.appendChild(st);
  var SKIP={SCRIPT:1,STYLE:1,TEXTAREA:1,OPTION:1,INPUT:1,NOSCRIPT:1,TITLE:1,SELECT:1};
  var ATTRS=["alt","title","aria-label","placeholder"];
  function maskAttrs(){
    if(!re)return;
    document.querySelectorAll("[alt],[title],[aria-label],[placeholder]").forEach(function(el){
      if(el.closest("#npGate,.np-lockw"))return;
      ATTRS.forEach(function(a){var v=el.getAttribute(a);if(v){re.lastIndex=0;if(re.test(v)){re.lastIndex=0;el.setAttribute(a,String(v).replace(re,"a partner club"))}}})
    });
  }
  function run(){
    build();if(!re)return;
    maskAttrs();
    var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:function(n){var p=n.parentElement;if(!p||SKIP[p.tagName]||p.closest(".np-lockw,svg,[contenteditable=true],#npGate"))return 2;re.lastIndex=0;return re.test(n.nodeValue)?1:2}});
    var list=[],n;while((n=w.nextNode()))list.push(n);
    list.forEach(function(n){var s=n.nodeValue,last=0,m,f=document.createDocumentFragment();re.lastIndex=0;
      while((m=re.exec(s))){if(m.index>last)f.appendChild(document.createTextNode(s.slice(last,m.index)));
        var o=document.createElement("span");o.className="np-lockw notranslate";o.setAttribute("translate","no");o.setAttribute("aria-label","Partner club, name coming soon");
        var b=document.createElement("span");b.className="np-lock";b.setAttribute("aria-hidden","true");b.textContent=m[0];o.appendChild(b);f.appendChild(o);last=m.index+m[0].length}
      if(last<s.length)f.appendChild(document.createTextNode(s.slice(last)));if(n.parentNode)n.parentNode.replaceChild(f,n)});
  }
  var tm=null;new MutationObserver(function(){clearTimeout(tm);tm=setTimeout(run,120)}).observe(document.body,{childList:true,subtree:true,characterData:true});
  run();setTimeout(run,1500);
})();

/* ===== Namaste Rides: cars and motorbike requests (16 Oct 2026, Rahul).
   Guests send their ride details; the team receives them in the dashboard (np_orders, venue "Namaste Rides") and books in GrabForBusiness Concierge. ===== */
(function(){
  if(typeof panel==="undefined")return;
  var sb=window.supabase?window.supabase.createClient("https://mymtgbmcjbwsnetzwgoy.supabase.co","sb_publishable_ViFodxG8kAENr78Fyp-BwQ_iA_BfAD0"):null;
  function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
  function lsGet(k,f){try{var v=localStorage.getItem(k);return v==null?f:JSON.parse(v)}catch(e){return f}}
  function lsSet(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
  var V=[["bike","Motorbike","1 passenger",1],["car","Car","Up to 3 passengers",3],["suv","SUV","Up to 5 passengers",5],["van","Van","Up to 10 passengers",10]];
  var X=function(){return typeof ico==="function"?ico("close"):"x"};
  if(!document.getElementById("npRideCss")){var st=document.createElement("style");st.id="npRideCss";
    st.textContent='.nprv{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:10px 0}.nprv button{border:1px solid rgba(255,255,255,.22);background:transparent;color:inherit;border-radius:14px;padding:12px 10px;text-align:left;font:inherit;cursor:pointer}.nprv button b{display:block;font-size:15px}.nprv button small{opacity:.75;font-size:12px}.nprv button[aria-pressed=true]{background:#F2EEFC;color:#1a1530;border-color:#F2EEFC}'+
      '.nprnote{font-size:12.5px;opacity:.8;line-height:1.5;margin:8px 0}.nprloc{border:0;background:transparent;color:#E9B949;font:inherit;font-weight:700;font-size:13px;padding:4px 0;cursor:pointer}.nprmine{border:1px solid rgba(255,255,255,.15);border-radius:12px;padding:10px 12px;margin-top:8px;font-size:13px}.npride .nppdpa:not(.npmine-ok){display:none}.nprest{margin:10px 0 0;padding:10px 12px;border-radius:12px;background:rgba(93,202,165,.12);font-size:14px}.nprest:empty{display:none}.nprest small{display:block;opacity:.75;font-size:12px;margin-top:3px}.fields .nprloc{grid-column:1/-1;justify-self:start}';
    document.head.appendChild(st)}
  function open(){
    try{lastFocus=document.activeElement}catch(e){}
    var mine=lsGet("np_rides",[])||[],veh="car";
    var d=new Date(),today=d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
    panel.innerHTML='<div class="pbody npride"><div style="display:flex;justify-content:space-between;align-items:center"><h2 id="sheetTitle" style="font-size:20px">Namaste Taxi</h2><button class="theme" id="nprX" aria-label="Close">'+X()+'</button></div>'+
      '<p class="nprnote">Car or motorbike, anywhere in Pattaya and airport transfers.</p>'+
      '<div class="nprv" role="group" aria-label="Vehicle">'+V.map(function(v){return '<button type="button" data-v="'+v[0]+'" aria-pressed="'+(v[0]===veh)+'"><b>'+v[1]+'</b><small>'+v[2]+'</small></button>'}).join("")+'</div>'+
      '<div class="fields">'+
       '<label class="full">Pickup<input id="nprFrom" list="nprPl" maxlength="160" placeholder="Type: hilton, walking, airport"></label><button type="button" class="nprloc" id="nprLoc">📍 Use my location</button>'+
       '<label class="full">Drop-off<input id="nprTo" list="nprPl" maxlength="160" placeholder="Type: airport, jomtien, bangkok"></label>'+
       '<label>Date<input id="nprDate" type="date" min="'+today+'" value="'+today+'"></label><label>Time<input id="nprTime" type="time"></label>'+
       '<label>Passengers<input id="nprPax" type="number" min="1" max="10" value="1" inputmode="numeric"></label><label>Luggage<select id="nprBag"><option>No bags</option><option>1–2 bags</option><option>3–4 bags</option><option>5+ bags</option></select></label>'+
       '<label class="full">Flight number (airport pickups)<input id="nprFlight" maxlength="12" placeholder="Optional, e.g. 6E 1053"></label>'+
       '<label>Your name<input id="nprName" maxlength="80" autocomplete="name"></label><label>Phone / WhatsApp<input id="nprPhone" maxlength="30" inputmode="tel" autocomplete="tel" placeholder="+91 or +66"></label>'+
       '<label class="full">Note for the driver<input id="nprNote" maxlength="200" placeholder="Optional, e.g. child seat, meet at lobby"></label></div>'+
      '<datalist id="nprPl">'+(window.npRidePlaces||[]).map(function(n){return '<option value="'+esc(n)+'">'}).join("")+'</datalist>'+
      '<div id="nprEst" class="nprest" aria-live="polite"></div>'+
      '<label class="nppdpa npmine-ok" style="display:flex;gap:8px;align-items:flex-start;margin-top:10px;font-size:14px"><input type="checkbox" id="nprOk"> <span>I agree to the <a href="terms.html" target="_blank" rel="noopener">Terms</a> and to Namaste Pattaya using my details to book this ride (<a href="privacy.html" target="_blank" rel="noopener">Privacy</a>).</span></label>'+
      '<button class="cta" id="nprSend" style="margin-top:12px">Get my ride</button><p class="err" id="nprErr" role="alert" style="min-height:18px"></p>'+
      '<p class="nprnote">The price is confirmed by our team before your ride. The driver waits up to 15 minutes. Free cancellation up to 1 hour before.</p>'+
      (mine.length?'<h3 style="font-size:15px;margin:14px 0 4px">My ride requests</h3>'+mine.slice(0,5).map(function(r){return '<div class="nprmine"><b>'+esc(r.code)+'</b> · '+esc(r.veh)+' · '+esc(r.date)+' '+esc(r.time)+'<br>'+esc(r.from)+' → '+esc(r.to)+'</div>'}).join(""):'')+'</div>';
    sheet.classList.add("open");document.body.style.overflow="hidden";panel.scrollTop=0;
    var $=function(id){return panel.querySelector("#"+id)};
    $("nprX").onclick=function(){try{closeSheet()}catch(e){}};
    var quote=null;
    function est(){var b=$("nprEst");quote=window.npRideQuote?window.npRideQuote($("nprFrom").value,$("nprTo").value,veh):null;
      if(!quote){b.innerHTML=($("nprFrom").value.trim()&&$("nprTo").value.trim())?'<span>Our team will send you the price for this route.</span>':'';return}
      if(quote.noBike){b.innerHTML='<span>A motorbike can\'t do this trip. Please choose a car, SUV or van.</span>';return}
      b.innerHTML='<b>Estimated price ฿'+quote.low.toLocaleString("en-US")+'–'+quote.high.toLocaleString("en-US")+'</b>'+(quote.tolls?' + tolls':'')+'<small>About '+quote.km+' km. Our team confirms the final price before booking.</small>'}
    $("nprFrom").addEventListener("input",est);$("nprTo").addEventListener("input",est);
    [].forEach.call(panel.querySelectorAll(".nprv button"),function(b){b.onclick=function(){veh=b.dataset.v;[].forEach.call(panel.querySelectorAll(".nprv button"),function(x){x.setAttribute("aria-pressed",x===b)});var v=V.find(function(x){return x[0]===veh});var px=$("nprPax");if(+px.value>v[3])px.value=v[3];px.max=v[3];est()}});
    $("nprLoc").onclick=function(){var e=$("nprErr");if(!navigator.geolocation){e.textContent="Location isn't available on this phone.";return}
      e.textContent="Finding your location…";navigator.geolocation.getCurrentPosition(function(p){$("nprFrom").value="My location ("+p.coords.latitude.toFixed(5)+", "+p.coords.longitude.toFixed(5)+")";e.textContent="";est()},function(){e.textContent="Location is off. Please type your pickup."},{timeout:8000})};
    $("nprSend").onclick=function(){
      var e=$("nprErr"),v=V.find(function(x){return x[0]===veh}),r={from:$("nprFrom").value.trim(),to:$("nprTo").value.trim(),date:$("nprDate").value,time:$("nprTime").value,pax:+$("nprPax").value||1,bag:$("nprBag").value,flight:$("nprFlight").value.trim(),name:$("nprName").value.trim(),phone:$("nprPhone").value.trim(),note:$("nprNote").value.trim(),veh:v[1]};
      if(!r.from||!r.to){e.textContent="Please add your pickup and drop-off.";return}
      if(!r.date||!r.time){e.textContent="Please choose a date and time.";return}
      if(r.pax<1||r.pax>v[3]){e.textContent=v[1]+" takes up to "+v[3]+" passenger"+(v[3]>1?"s":"")+".";return}
      if(!r.name){e.textContent="Please add your name.";return}
      if((r.phone.match(/\d/g)||[]).length<8){e.textContent="Please add a phone or WhatsApp number we can reach.";return}
      if(!$("nprOk").checked){e.textContent="Please tick the box to agree.";return}
      if(quote&&quote.noBike){e.textContent="A motorbike can't do this trip. Please choose a car, SUV or van.";return}
      r.est=quote&&!quote.noBike?("฿"+quote.low+"–"+quote.high+(quote.tolls?" + tolls":"")):"";
      r.code="R"+Date.now().toString(36).toUpperCase().slice(-6);
      var note=("PICKUP: "+r.from+" | DROP-OFF: "+r.to+" | Luggage: "+r.bag+(r.flight?" | Flight: "+r.flight:"")+(r.note?" | Note: "+r.note:"")+(r.est?" | Price shown: "+r.est:"")).slice(0,500);
      var row={code:r.code,venue_id:"np-rides",venue_name:"Namaste Rides",category:"rides",customer_name:r.name.slice(0,80),customer_phone:r.phone.slice(0,30),package:(r.veh+" ride").slice(0,200),guests:r.pax,booking_date:r.date,booking_time:r.time,total:(quote&&!quote.noBike)?Math.round((quote.low+quote.high)/2):null,note:note};
      var all=lsGet("np_rides",[])||[];all.unshift(r);lsSet("np_rides",all.slice(0,20));
      try{if("Notification" in window&&Notification.permission==="default")Notification.requestPermission()}catch(x){}
      $("nprSend").disabled=true;e.textContent="Sending…";
      function done(ok){
        panel.innerHTML='<div class="pbody" style="text-align:center"><div style="display:flex;justify-content:flex-end"><button class="theme" id="nprX2" aria-label="Close">'+X()+'</button></div><h2 id="sheetTitle">'+(ok?"Ride requested ✓":"Saved on your phone")+'</h2>'+
          '<p class="about">Your request code: <b>'+esc(r.code)+'</b></p><p class="about">'+esc(r.veh)+' · '+esc(r.date)+' '+esc(r.time)+'<br>'+esc(r.from)+' → '+esc(r.to)+'</p>'+
          (ok?'<p class="about">Our team will confirm the price and driver details on '+esc(r.phone)+' soon.</p>':'<p class="about">We could not send it automatically right now. Please send your code and details to us on LINE: rahulsoodnpr247.</p>')+
          '<button class="cta" id="nprOk2">OK</button></div>';
        var c=function(){try{closeSheet()}catch(x){}};panel.querySelector("#nprX2").onclick=c;panel.querySelector("#nprOk2").onclick=c;
      }
      try{try{if(window.npTrack)window.npTrack("ride_request",r.veh)}catch(x){}
        if(!sb){done(false);return}
        sb.from("np_orders").insert(row).then(function(res){done(!(res&&res.error))},function(){done(false)});
      }catch(x){done(false)}
    };
  }
  window.npOpenRides=open;
  /* Home tile opens the ride form (the existing "Pickup" button is unchanged) */
  function tile(){
    var hub=document.querySelector(".hub");if(!hub||document.getElementById("npRideTile"))return;
    var b=document.createElement("button");b.className="hubtile";b.id="npRideTile";b.type="button";
    b.innerHTML='<span aria-hidden="true" style="font-size:22px;line-height:1">🚕</span><b>Namaste Taxi</b><small>Cars & motorbike</small>';
    b.onclick=function(e){e.preventDefault();e.stopPropagation();open()};
    var ref=hub.querySelector('.hubtile[data-go="mall"]');if(ref)hub.insertBefore(b,ref);else hub.appendChild(b);
  }
  tile();setTimeout(tile,1500);
})();

/* ===== My spending limit at clubs (16 Oct 2026, Rahul): per booking, set in My account.
   Lowering is instant. Raising or removing it needs the account password. Saved on the account (Supabase), shown on each booking for the club. ===== */
(function(){
  if(!window.supabase||typeof panel==="undefined")return;
  var sb=window.supabase.createClient("https://mymtgbmcjbwsnetzwgoy.supabase.co","sb_publishable_ViFodxG8kAENr78Fyp-BwQ_iA_BfAD0");
  var KEY="np_spend_limit",user=null;
  function get(){try{var v=JSON.parse(localStorage.getItem(KEY)||"null");return v&&v.uid&&user&&v.uid===user.id&&v.v>0?v.v:null}catch(e){return null}}
  function setLocal(v){try{if(v>0&&user)localStorage.setItem(KEY,JSON.stringify({uid:user.id,v:v}));else localStorage.removeItem(KEY)}catch(e){}}
  window.npSpendLimit=get;
  function B(n){return "฿"+Math.round(n).toLocaleString("en-US")}
  function X(){return typeof ico==="function"?ico("close"):"x"}
  function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
  function load(){sb.auth.getUser().then(function(r){user=r&&r.data&&r.data.user||null;
    if(user){var m=(user.user_metadata||{}).spend_limit;setLocal(+m>0?+m:0)}else{try{localStorage.removeItem(KEY)}catch(e){}}
  },function(){})}
  try{sb.auth.onAuthStateChange(function(){load()})}catch(e){}
  load();
  function save(v){return sb.auth.updateUser({data:{spend_limit:v>0?v:null}}).then(function(r){if(r&&r.error)throw r.error;setLocal(v);return true})}
  function open(){
    if(!user){alert("Please log in first. Only the account owner can set a spending limit.");return}
    var cur=get();try{lastFocus=document.activeElement}catch(e){}
    panel.innerHTML='<div class="pbody"><div style="display:flex;justify-content:space-between;align-items:center"><h2 id="sheetTitle" style="font-size:20px">My spending limit</h2><button class="theme" id="slX" aria-label="Close">'+X()+'</button></div>'+
      '<p class="about">Set the most you want to spend on one club booking. We share it with the club on your booking. Lowering it works right away. Raising or removing it needs your password.</p>'+
      '<p class="about" style="font-size:16px"><b>Now: '+(cur?B(cur)+" per booking":"No limit set")+'</b></p>'+
      '<div class="fields"><label class="full">New limit in Thai baht<input id="slV" type="number" inputmode="numeric" min="1000" step="500" placeholder="e.g. 10000" value="'+(cur||"")+'"></label>'+
      '<label class="full" id="slPwL" hidden>Your password (needed to raise the limit)<input id="slPw" type="password" autocomplete="current-password"></label></div>'+
      '<p class="about" id="slInr" style="font-size:13px"></p>'+
      '<button class="cta" id="slSave">Save limit</button>'+(cur?'<button class="pill" id="slOff" style="display:block;margin:10px auto 0">Remove my limit</button>':'')+
      '<p class="err" id="slE" role="alert" style="min-height:18px"></p></div>';
    sheet.classList.add("open");document.body.style.overflow="hidden";
    var $=function(id){return panel.querySelector("#"+id)},E=$("slE");
    $("slX").onclick=function(){try{closeSheet()}catch(e){}};
    function needPw(v){return !cur?false:(v===0||v>cur)}
    function refresh(){var v=+$("slV").value||0;$("slPwL").hidden=!needPw(v);$("slInr").textContent=v?"≈ ₹"+Math.round(v*(typeof INR_PER_THB!=="undefined"?INR_PER_THB:2.89)).toLocaleString("en-IN")+" per booking":""}
    $("slV").oninput=refresh;refresh();
    function go(v){
      E.textContent="";
      if(v!==0&&(!v||v<1000)){E.textContent="Please enter at least ฿1,000.";return}
      var p=Promise.resolve(true);
      if(needPw(v)){var pw=$("slPw").value;if(!pw){$("slPwL").hidden=false;E.textContent="Please enter your password to raise or remove your limit.";return}
        p=sb.auth.signInWithPassword({email:user.email,password:pw}).then(function(r){if(r&&r.error)throw new Error("That password is not right.");return true})}
      $("slSave").disabled=true;
      p.then(function(){return save(v)}).then(function(){
        try{closeSheet()}catch(e){}
        alert(v?"Your spending limit is now "+B(v)+" per booking.":"Your spending limit is removed.");
      }).catch(function(e){$("slSave").disabled=false;E.textContent=(e&&e.message)||"Could not save. Please try again."});
    }
    $("slSave").onclick=function(){go(+$("slV").value||0)};
    var off=$("slOff");if(off)off.onclick=function(){$("slV").value="";refresh();$("slPwL").hidden=false;if(!$("slPw").value){E.textContent="Please enter your password to remove your limit.";return}go(0)};
  }
  window.npOpenSpendLimit=open;
  /* button on the account screen (only when logged in) */
  function add(){
    if(panel.querySelector("#npSpendBtn"))return;
    var out=[].slice.call(panel.querySelectorAll("button")).find(function(b){return /log ?out/i.test(b.textContent)});if(!out)return;
    var b=document.createElement("button");b.id="npSpendBtn";b.type="button";b.className=out.className||"pill";
    var cur=get();b.textContent="My spending limit: "+(cur?B(cur)+" per booking":"not set");b.style.cssText="display:block;margin:0 0 10px";
    var anchor=panel.querySelector("#npChangePw")||out;anchor.insertAdjacentElement("beforebegin",b);b.onclick=open;
  }
  var busy=false;new MutationObserver(function(){if(busy)return;busy=true;requestAnimationFrame(function(){busy=false;add()})}).observe(panel,{childList:true,subtree:true});
})();

/* ===== Namaste Mall checkout + GrabExpress delivery (16 Oct 2026, Rahul).
   "Buy" and "Gift" now open a checkout (name, phone, delivery address or pick up). The order goes to Supabase np_orders
   (venue "Namaste Mall", category "mall") so the Admin Control Center rings. The team books the delivery through GrabExpress. ===== */
(function(){
  if(!window.supabase||typeof panel==="undefined"||typeof window.order!=="function")return;
  var sb=window.supabase.createClient("https://mymtgbmcjbwsnetzwgoy.supabase.co","sb_publishable_ViFodxG8kAENr78Fyp-BwQ_iA_BfAD0");
  var _order=window.order;
  function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
  function B(n){return typeof money==="function"?money(n):"฿"+n}
  function X(){return typeof ico==="function"?ico("close"):"x"}
  function lsGet(k,f){try{var v=localStorage.getItem(k);return v==null?f:JSON.parse(v)}catch(e){return f}}
  function lsSet(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
  window.order=function(m,to){
    if(!m)return;try{lastFocus=document.activeElement}catch(e){}
    var mode="delivery";
    panel.innerHTML='<div class="pbody npride"><div style="display:flex;justify-content:space-between;align-items:center"><h2 id="sheetTitle" style="font-size:20px">Checkout</h2><button class="theme" id="moX" aria-label="Close">'+X()+'</button></div>'+
      '<p class="about"><b>'+esc(m.n)+'</b>'+(to?' · gift for '+esc(to):'')+'<br>'+B(m.p)+' each</p>'+
      '<div class="nprv" role="group" aria-label="How to receive"><button type="button" data-m="delivery" aria-pressed="true"><b>Delivery</b><small>By GrabExpress to your hotel or address</small></button><button type="button" data-m="pickup" aria-pressed="false"><b>Pick up</b><small>Collect from our team</small></button></div>'+
      '<div class="fields"><label>Quantity<select id="moQ"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></label><label>When<select id="moW"><option>As soon as possible</option><option>Today evening</option><option>Tomorrow</option></select></label>'+
      '<label class="full" id="moAL">Delivery address<input id="moA" maxlength="200" placeholder="Hotel name and room, or full address"></label><button type="button" class="nprloc" id="moLoc">📍 Use my location</button>'+
      '<label>Your name<input id="moN" maxlength="80" autocomplete="name"></label><label>Phone / WhatsApp<input id="moP" maxlength="30" inputmode="tel" autocomplete="tel" placeholder="+91 or +66"></label>'+
      '<label class="full">Note<input id="moNote" maxlength="200" placeholder="Optional, e.g. call me at the lobby"></label></div>'+
      '<p class="about" id="moT" style="font-size:16px"></p>'+
      '<label style="display:flex;gap:8px;align-items:flex-start;margin-top:6px;font-size:14px"><input type="checkbox" id="moOk"> I agree to the <a href="terms.html" target="_blank" rel="noopener">Terms</a> and to Namaste Pattaya using my details for this order (<a href="privacy.html" target="_blank" rel="noopener">Privacy</a>).</label>'+
      '<button class="cta" id="moGo" style="margin-top:12px">Place my order</button><p class="err" id="moE" role="alert" style="min-height:18px"></p>'+
      '<p class="nprnote">Delivery fee and time are confirmed by our team before we send it. You pay when we confirm.</p></div>';
    sheet.classList.add("open");document.body.style.overflow="hidden";panel.scrollTop=0;
    var $=function(i){return panel.querySelector("#"+i)},E=$("moE");
    function tot(){var q=+$("moQ").value||1;$("moT").innerHTML='Total: <b>'+B(m.p*q)+'</b>'+(mode==="delivery"?' + delivery fee':'');return q}
    tot();$("moQ").onchange=tot;
    $("moX").onclick=function(){try{closeSheet()}catch(e){}};
    [].forEach.call(panel.querySelectorAll(".nprv button"),function(b){b.onclick=function(){mode=b.dataset.m;[].forEach.call(panel.querySelectorAll(".nprv button"),function(x){x.setAttribute("aria-pressed",x===b)});$("moAL").hidden=$("moLoc").hidden=mode!=="delivery";tot()}});
    $("moLoc").onclick=function(){if(!navigator.geolocation){E.textContent="Location isn't available on this phone.";return}E.textContent="Finding your location…";
      navigator.geolocation.getCurrentPosition(function(p){$("moA").value="My location ("+p.coords.latitude.toFixed(5)+", "+p.coords.longitude.toFixed(5)+")";E.textContent=""},function(){E.textContent="Location is off. Please type your address."},{timeout:8000})};
    $("moGo").onclick=function(){
      var q=tot(),a=$("moA").value.trim(),n=$("moN").value.trim(),p=$("moP").value.trim();
      if(mode==="delivery"&&a.length<5){E.textContent="Please add your delivery address.";return}
      if(!n){E.textContent="Please add your name.";return}
      if((p.match(/\d/g)||[]).length<8){E.textContent="Please add a phone or WhatsApp number we can reach.";return}
      if(!$("moOk").checked){E.textContent="Please tick the box to agree.";return}
      try{if("Notification" in window&&Notification.permission==="default")Notification.requestPermission()}catch(e){}
      var d=new Date(),code="M"+Date.now().toString(36).toUpperCase().slice(-6);
      var note=((mode==="delivery"?"GRABEXPRESS DELIVERY to: "+a:"PICK UP")+" | When: "+$("moW").value+(to?" | Gift for: "+to:"")+($("moNote").value.trim()?" | Note: "+$("moNote").value.trim():"")).slice(0,500);
      var row={code:code,venue_id:"np-mall",venue_name:"Namaste Mall",category:"mall",customer_name:n.slice(0,80),customer_phone:p.slice(0,30),package:(q+" × "+m.n).slice(0,200),guests:q,
        booking_date:d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"),booking_time:String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0"),total:m.p*q,note:note};
      var full=Object.assign({},row,{order_type:mode==="delivery"?"delivery":"takeaway",delivery_address:mode==="delivery"?a.slice(0,200):null});
      $("moGo").disabled=true;E.textContent="Sending…";
      var mine=lsGet("np_mall_codes",[]);mine.unshift(code);lsSet("np_mall_codes",mine.slice(0,20));
      try{_order(m,to)}catch(e){}
      function done(ok){
        panel.innerHTML='<div class="pbody" style="text-align:center"><div style="display:flex;justify-content:flex-end"><button class="theme" id="moX2" aria-label="Close">'+X()+'</button></div><h2 id="sheetTitle">'+(ok?"Order placed ✓":"Saved on your phone")+'</h2>'+
          '<p class="about">Your order code: <b>'+esc(code)+'</b></p><p class="about">'+esc(q+" × "+m.n)+' · '+B(m.p*q)+'<br>'+(mode==="delivery"?"Delivery by GrabExpress":"Pick up")+'</p>'+
          (ok?'<p class="about">Our team will confirm the delivery fee and time on '+esc(p)+'. You will get a notification here when it is confirmed.</p>':'<p class="about">We could not send it automatically. Please send your code to us on LINE: rahulsoodnpr247.</p>')+'<button class="cta" id="moOk2">OK</button></div>';
        var c=function(){try{closeSheet()}catch(x){}};panel.querySelector("#moX2").onclick=c;panel.querySelector("#moOk2").onclick=c;
      }
      try{try{if(window.npTrack)window.npTrack("mall_order",m.n)}catch(x){}
        sb.from("np_orders").insert(full).then(function(r){
          if(r&&r.error&&/order_type|delivery_address|column/i.test(r.error.message||""))return sb.from("np_orders").insert(row);return r;
        }).then(function(r){done(!(r&&r.error))},function(){done(false)});
      }catch(x){done(false)}
    };
  };
})();

/* ===== Guest notifications: when the team confirms or updates a ride, Mall order or restaurant order (16 Oct 2026).
   Checks every 45 s while the app is open, then shows a phone notification and a message in the app. ===== */
(function(){
  if(!window.supabase)return;
  var sb=window.supabase.createClient("https://mymtgbmcjbwsnetzwgoy.supabase.co","sb_publishable_ViFodxG8kAENr78Fyp-BwQ_iA_BfAD0");
  function lsGet(k,f){try{var v=localStorage.getItem(k);return v==null?f:JSON.parse(v)}catch(e){return f}}
  function lsSet(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
  function codes(){
    var c=[];(lsGet("np_rides",[])||[]).forEach(function(r){if(r&&r.code)c.push(r.code)});
    (lsGet("np_mall_codes",[])||[]).forEach(function(x){c.push(x)});
    (lsGet("np_bookings",[])||[]).forEach(function(b){if(b&&b.code&&/restaurant|indian/.test(b.cat||""))c.push(b.code)});
    return c.filter(function(v,i,a){return a.indexOf(v)===i}).slice(0,30);
  }
  var MSG={rides:{confirmed:"Your ride is confirmed ✓",in_progress:"Your driver is booked and on the way 🚕",done:"Ride completed. Thank you!",cancelled:"Your ride request was cancelled. Please contact us."},
    mall:{confirmed:"Your Namaste Mall order is confirmed ✓",in_progress:"Your order is on the way with GrabExpress 🛵",done:"Your order is delivered. Enjoy!",cancelled:"Your Mall order was cancelled. Please contact us."},
    other:{confirmed:"Your order is confirmed ✓",in_progress:"Your order is being prepared",done:"Your order is ready / done ✓",cancelled:"Your order was cancelled. Please contact us."}};
  function kind(code){return /^R/.test(code)&&(lsGet("np_rides",[])||[]).some(function(r){return r.code===code})?"rides":(lsGet("np_mall_codes",[])||[]).indexOf(code)>=0?"mall":"other"}
  function show(title,body){
    try{var d=document.createElement("div");d.className="npcc-toast";d.style.cssText="position:fixed;left:12px;right:12px;top:calc(12px + env(safe-area-inset-top,0px));z-index:9999;background:#1b1530;color:#F2EEFC;border:1px solid #5DCAA5;border-radius:14px;padding:12px 14px;font-size:14px";
      d.textContent=title+" · "+body;d.onclick=function(){d.remove()};document.body.appendChild(d);setTimeout(function(){d.remove()},9000)}catch(e){}
    try{if(navigator.vibrate)navigator.vibrate([120,60,120])}catch(e){}
    try{if("Notification" in window&&Notification.permission==="granted"){var o={body:body,icon:"icon-192.png",tag:"np-"+body};
      if(navigator.serviceWorker&&navigator.serviceWorker.ready)navigator.serviceWorker.ready.then(function(r){r.showNotification(title,o)}).catch(function(){new Notification(title,o)});else new Notification(title,o)}}catch(e){}
  }
  function check(){
    var c=codes();if(!c.length||document.hidden)return;
    sb.rpc("np_order_status",{codes:c}).then(function(r){
      if(!r||r.error||!r.data)return;var seen=lsGet("np_status_seen",{})||{};
      r.data.forEach(function(x){var code=String(x.code||"").toUpperCase(),st=String(x.status||"");if(!code||!st)return;
        if(seen[code]&&seen[code]!==st){var k=kind(code),m=(MSG[k]||MSG.other)[st];if(m)show(m,"Order "+code)}
        seen[code]=st});
      lsSet("np_status_seen",seen);
    },function(){});
  }
  setTimeout(check,4000);setInterval(check,45000);
  document.addEventListener("visibilitychange",function(){if(!document.hidden)setTimeout(check,800)});
  window.npCheckOrderStatus=check;
})();

/* ===== Namaste Rides price estimate (16 Oct 2026, Rahul).
   Grab-like estimate by distance, then OUR price: airport rides = estimate + ฿300; other rides = estimate + 30%.
   Places list also gives pickup / drop-off suggestions. Estimates only: the team confirms the final price. ===== */
(function(){
  var C=[12.9276,100.8771]; /* Pattaya centre */
  /* [name, lat, lng, road km from Pattaya (far places only), airport?] */
  var P=[["Suvarnabhumi Airport (BKK)",13.6900,100.7501,120,1],["Don Mueang Airport (DMK)",13.9126,100.6068,160,1],["U-Tapao Airport (UTP)",12.6799,101.0050,45,1],
    ["Walking Street",12.9275,100.8740],["Central Festival Pattaya",12.9346,100.8836],["Hilton Pattaya",12.9343,100.8832],["Terminal 21 Pattaya",12.9505,100.8885],
    ["Beach Road (Central)",12.9370,100.8810],["Second Road",12.9330,100.8850],["Soi Buakhao",12.9300,100.8920],["Jomtien Beach",12.8870,100.8710],["Pratumnak Hill",12.9170,100.8680],
    ["Naklua",12.9640,100.8890],["Wong Amat Beach",12.9600,100.8850],["Bali Hai Pier",12.9220,100.8700],["Thepprasit Night Market",12.9050,100.8930],
    ["Pattaya Bus Terminal",12.9500,100.8980],["Pattaya Railway Station",12.9230,100.9050],["Sanctuary of Truth",12.9727,100.8890],["Nong Nooch Garden",12.7650,100.9340],
    ["Sriracha",13.1740,100.9300,35],["Rayong city",12.6814,101.2816,70],["Ban Phe pier (Koh Samet)",12.6280,101.4370,85],["Koh Chang ferry pier (Trat)",12.1800,102.3300,300],
    ["Bangkok Sukhumvit",13.7400,100.5550,150],["Bangkok Khao San Road",13.7590,100.4970,160],["Bangkok Siam / Pratunam",13.7500,100.5390,155],["Hua Hin",12.5684,99.9577,340]];
  window.npRidePlaces=P.map(function(p){return p[0]});
  function hav(a,b){var R=6371,r=Math.PI/180,dLa=(b[0]-a[0])*r,dLo=(b[1]-a[1])*r,x=Math.sin(dLa/2)*Math.sin(dLa/2)+Math.cos(a[0]*r)*Math.cos(b[0]*r)*Math.sin(dLo/2)*Math.sin(dLo/2);return 2*R*Math.asin(Math.sqrt(x))}
  function find(s){s=String(s||"").trim();if(!s)return null;
    var m=s.match(/(-?\d{1,2}\.\d+)\s*,\s*(-?\d{1,3}\.\d+)/);if(m)return {ll:[+m[1],+m[2]]};
    var l=s.toLowerCase();for(var i=0;i<P.length;i++){var n=P[i][0].toLowerCase();if(l===n||l.indexOf(n)>=0||(n.indexOf(l)>=0&&l.length>=5))return {ll:[P[i][1],P[i][2]],km:P[i][3],air:!!P[i][4],name:P[i][0]}}
    if(/suvarna|\bbkk\b/.test(l))return find("Suvarnabhumi Airport (BKK)");if(/don ?mu|\bdmk\b/.test(l))return find("Don Mueang Airport (DMK)");if(/u-?tapao|\butp\b/.test(l))return find("U-Tapao Airport (UTP)");
    return null}
  function road(a,b){
    var nearA=hav(a.ll,C)<25,nearB=hav(b.ll,C)<25;
    if(b.km&&nearA)return b.km+hav(a.ll,C)*1.2;if(a.km&&nearB)return a.km+hav(b.ll,C)*1.2;
    return Math.max(1.5,hav(a.ll,b.ll)*1.35)}
  function grab(km){var f=50+22*Math.min(km,10);if(km>10)f+=14*(Math.min(km,50)-10);if(km>50)f+=8*(km-50);return f}
  var MUL={bike:0.45,car:1,suv:1.35,van:1.8};
  function r10(n){return Math.round(n/10)*10}
  /* returns null when we can't estimate (unknown place) */
  window.npRideQuote=function(from,to,veh){
    var a=find(from),b=find(to);if(!a||!b)return null;
    var km=road(a,b),air=!!(a.air||b.air);
    if(veh==="bike"&&(air||km>40))return {km:Math.round(km),air:air,noBike:true};
    var g=grab(km)*(MUL[veh]||1),ours=air?g+300:g*1.3;
    return {km:Math.round(km),air:air,tolls:air||km>60,low:r10(ours*0.92),high:r10(ours*1.08)};
  };
})();

/* ===== 17 Oct 2026 (Rahul) PROTOTYPE – added only, nothing removed:
   1) Namaste Ride Pass (fixed plans + Build your own pass + book with pass, for me or a friend)
   2) Airport pickup booked from India (pay in advance, ฿ or ₹) – payment is "Try free (test)" until the gateway is live
   3) Club names unlock with access code CLUBS10 (or admin login). Link for investors: ?clubs=CLUBS10
   4) "Support in 7 languages, 24/7" line on the ride screens
   Prices: car pass prices = 30% over cost (city / area / bike) and Grab rate + about ฿350 for BKK (tolls included).
   U-Tapao and DMK: price coming soon (waiting for Grab screenshots). ===== */
(function(){
  if(typeof panel==="undefined"||typeof sheet==="undefined")return;
  var sb=window.supabase?window.supabase.createClient("https://mymtgbmcjbwsnetzwgoy.supabase.co","sb_publishable_ViFodxG8kAENr78Fyp-BwQ_iA_BfAD0"):null;
  function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
  function lsGet(k,f){try{var v=localStorage.getItem(k);return v==null?f:JSON.parse(v)}catch(e){return f}}
  function lsSet(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
  function X(){return typeof ico==="function"?ico("close"):"✕"}
  function thb(n){return "฿"+Math.round(n).toLocaleString("en-US")}
  var RATE=(typeof INR_PER_THB!=="undefined"?INR_PER_THB:2.89);
  function inr(n){return "≈ ₹"+Math.round(n*RATE).toLocaleString("en-IN")}
  function show(){try{lastFocus=document.activeElement}catch(e){}sheet.classList.add("open");document.body.style.overflow="hidden";panel.scrollTop=0}
  function close(){try{closeSheet()}catch(e){}}
  function today(){var d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")}
  function fmtDate(t){try{return new Date(t).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"})}catch(e){return ""}}
  function code(p){return p+Date.now().toString(36).toUpperCase().slice(-6)}
  function head(t){return '<div style="display:flex;justify-content:space-between;align-items:center;gap:8px"><h2 id="sheetTitle" style="font-size:20px">'+t+'</h2><button class="theme" id="npxX" aria-label="Close">'+X()+'</button></div>'}
  var SUPPORT='<div class="npxsup">💬 <b>Support in 10 languages, 24/7</b><br>Hindi · English · Thai · Punjabi · Gujarati · Marathi · Tamil · Bengali · Telugu · Bhojpuri<br><small>Talk to us in any of these languages, any time. LINE: rahulsoodnpr247</small></div>';
  var CONSENT=function(id){return '<label style="display:flex;gap:8px;align-items:flex-start;margin-top:10px;font-size:14px"><input type="checkbox" id="'+id+'"> <span>I agree to the <a href="terms.html" target="_blank" rel="noopener">Terms</a> and to Namaste Pattaya using my details to book this ride (<a href="privacy.html" target="_blank" rel="noopener">Privacy</a>).</span></label>'};

  if(!document.getElementById("npxCss")){var st=document.createElement("style");st.id="npxCss";
    st.textContent='.npx .npxg{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:8px;margin:10px 0}'+
    '.npx .npxc{border:1px solid rgba(255,255,255,.18);background:transparent;color:inherit;border-radius:14px;padding:12px 10px;text-align:left;font:inherit;cursor:pointer;min-height:44px}'+
    '.npx .npxc b{display:block;font-size:15px}.npx .npxc small{display:block;opacity:.75;font-size:12px;line-height:1.4}.npx .npxc .pr{display:block;font-size:17px;font-weight:700;margin-top:6px}'+
    '.npx .npxc[aria-pressed=true]{background:#F2EEFC;color:#1a1530;border-color:#F2EEFC}.npx .npxc[disabled]{opacity:.45;cursor:default}'+
    '.npx .npxtag{display:inline-block;font-size:11px;padding:2px 7px;border-radius:8px;background:rgba(233,185,73,.2);color:#E9B949;margin-bottom:4px}'+
    '.npx h3{font-size:16px;margin:16px 0 4px}.npx .npxn{font-size:12.5px;opacity:.8;line-height:1.5;margin:6px 0}'+
    '.npx .npxr{display:flex;align-items:center;gap:8px;border:1px solid rgba(255,255,255,.15);border-radius:12px;padding:8px 10px;margin-bottom:6px}'+
    '.npx .npxr .t{flex:1;min-width:0}.npx .npxr .t b{display:block;font-size:14px}.npx .npxr .t small{opacity:.75;font-size:12px}'+
    '.npx .npxs{width:44px;height:44px;border-radius:12px;border:1px solid rgba(255,255,255,.25);background:transparent;color:inherit;font-size:20px;cursor:pointer}'+
    '.npx .npxq{min-width:24px;text-align:center;font-weight:700;font-size:16px}'+
    '.npx .npxtot{margin-top:10px;padding:12px;border-radius:12px;background:rgba(93,202,165,.12);display:flex;justify-content:space-between;align-items:baseline;gap:8px}'+
    '.npx .npxtot b{font-size:22px}.npx .npxrow{display:flex;gap:8px;flex-wrap:wrap}.npx .npxrow .npxc{flex:1;text-align:center}'+
    '.npx .npxpass{border:1px solid rgba(233,185,73,.45);border-radius:14px;padding:12px;margin:10px 0}'+
    '.npx .nppdpa:not(.npmine-ok){display:none}.npxsup{margin:14px 0 4px;padding:10px 12px;border-radius:12px;background:rgba(133,183,235,.12);font-size:13px;line-height:1.55}.npxsup small{opacity:.8;font-size:12px}'+
    '.npxbar{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:8px;margin:10px 0}'+
    '.npxbar button{border:1px solid rgba(233,185,73,.5);background:rgba(233,185,73,.1);color:inherit;border-radius:14px;padding:12px 10px;font:inherit;font-weight:700;text-align:left;cursor:pointer;min-height:44px}'+
    '.npxbar button small{display:block;font-weight:400;opacity:.8;font-size:12px}'+
    '.npxlock{margin:8px 0 4px;font-size:13px;opacity:.9}.npxlock button{border:0;background:transparent;color:#E9B949;font:inherit;font-weight:700;padding:8px 0;cursor:pointer;min-height:36px}';
    document.head.appendChild(st)}

  /* ---------- prices (car) ---------- */
  var T={city:["City ride","up to 7 km",265],area:["Area ride","7–40 km",900],bkk:["Airport BKK","Suvarnabhumi ↔ Pattaya, tolls included",1850],air:["Airport ride","BKK or U-Tapao ↔ Pattaya",1850],bike:["Bike ride","city only",120]};
  var SOON=[["U-Tapao airport","price coming soon"],["Don Mueang (DMK)","price coming soon"]];
  var PLANS=[
    ["city","City pass","10 city rides · 1 month",2190,{city:10},1],
    ["explorer","Explorer","8 city + 2 area · 1 month",3290,{city:8,area:2},1,"Most popular"],
    ["airport","Airport pass","2 airport + 6 city · 2 months",4990,{air:2,city:6},2],
    ["bike","Bike pass","20 bike rides · 1 month",1490,{bike:20},1],
    ["citysaver","City saver","5 city rides · 1 month",1350,{city:5},1],
    ["cityplus","City plus","15 city rides · 1 month",3990,{city:15},1],
    ["area","Area pack","4 area + 4 city · 1 month",4690,{area:4,city:4},1],
    ["bike10","Bike 10","10 bike rides · 1 month",1200,{bike:10},1],
    ["bkk","BKK return","2 BKK + 4 city · 2 months",4790,{bkk:2,city:4},2]];
  function passes(){return (lsGet("np_ride_passes",[])||[]).filter(function(p){return p&&p.exp>Date.now()&&left(p)>0})}
  function left(p){var n=0;for(var k in p.cr)n+=p.cr[k];return n}
  function crText(p){return Object.keys(p.cr).filter(function(k){return T[k]}).map(function(k){return T[k][0].replace(" ride","")+" <b>"+p.cr[k]+"</b>/"+p.max[k]}).join(" · ")}
  function saveOrder(row,cb){try{if(!sb){cb(false);return}sb.from("np_orders").insert(row).then(function(r){cb(!(r&&r.error))},function(){cb(false)})}catch(e){cb(false)}}
  function result(ok,title,lines){
    panel.innerHTML='<div class="pbody npx" style="text-align:center">'+head(ok?title+" ✓":"Saved on your phone")+lines+
      (ok?'':'<p class="about">We could not send it automatically right now. Please send your code to us on LINE: rahulsoodnpr247.</p>')+SUPPORT+'<button class="cta" id="npxOk">OK</button></div>';
    panel.querySelector("#npxX").onclick=close;panel.querySelector("#npxOk").onclick=close}

  /* ---------- Ride Pass home ---------- */
  function openPass(){
    var mine=passes();
    panel.innerHTML='<div class="pbody npx">'+head("Namaste Ride Pass")+
      '<p class="npxn">Buy rides in advance. Book anytime, for you or a friend. Nothing to pay the driver. Car rides (SUV / van coming soon).</p>'+
      (mine.length?'<h3>My passes</h3>'+mine.map(function(p,i){return '<div class="npxpass"><div style="display:flex;justify-content:space-between;gap:8px"><b>'+esc(p.name)+'</b><small style="color:#E9B949">Expires '+fmtDate(p.exp)+'</small></div><div class="npxn">'+crText(p)+'</div><div class="npxrow"><button class="npxc" data-book="'+p.id+'"><b>Book a ride</b></button><button class="npxc" data-ext="'+p.id+'"><b>Extend 1 month</b><small>Try free (test)</small></button></div></div>'}).join(""):"")+
      '<h3>Choose a plan</h3><p class="npxn">City up to 7 km · Area 7–40 km · Airport = BKK, tolls included</p>'+
      '<div class="npxg">'+PLANS.map(function(p){return '<button class="npxc" data-plan="'+p[0]+'">'+(p[6]?'<span class="npxtag">'+p[6]+'</span>':'')+'<b>'+p[1]+'</b><small>'+p[2]+'</small><span class="pr">'+thb(p[3])+'</span><small>'+inr(p[3])+'</small></button>'}).join("")+
        '<button class="npxc" disabled><b>U-Tapao return</b><small>Price coming soon</small></button></div>'+
      '<button class="cta" id="npxOwn" style="margin-top:6px">Build your own pass</button>'+
      '<p class="npxn">No resale. The pass shows its expiry date clearly. Refund rules: coming soon.</p>'+SUPPORT+'</div>';
    show();
    panel.querySelector("#npxX").onclick=close;
    panel.querySelector("#npxOwn").onclick=openBuilder;
    [].forEach.call(panel.querySelectorAll("[data-plan]"),function(b){b.onclick=function(){var p=PLANS.find(function(x){return x[0]===b.dataset.plan});buy(p[1],p[4],p[5],p[3])}});
    [].forEach.call(panel.querySelectorAll("[data-book]"),function(b){b.onclick=function(){bookWithPass(b.dataset.book)}});
    [].forEach.call(panel.querySelectorAll("[data-ext]"),function(b){b.onclick=function(){var all=lsGet("np_ride_passes",[])||[];all.forEach(function(p){if(p.id===b.dataset.ext)p.exp+=30*864e5});lsSet("np_ride_passes",all);openPass()}});
  }

  /* ---------- Build your own pass ---------- */
  function openBuilder(){
    var q={city:4,area:0,bkk:0,bike:0},m=1,keys=["city","area","bkk","bike"];
    panel.innerHTML='<div class="pbody npx">'+head("Build your own pass")+
      '<p class="npxn">Choose how many rides you need. Car rides. Minimum 3 rides.</p>'+
      keys.map(function(k){return '<div class="npxr"><div class="t"><b>'+T[k][0]+'</b><small>'+T[k][1]+' · '+thb(T[k][2])+' each</small></div><button class="npxs" data-k="'+k+'" data-d="-1" aria-label="Less">−</button><span class="npxq" id="npxq_'+k+'">0</span><button class="npxs" data-k="'+k+'" data-d="1" aria-label="More">+</button></div>'}).join("")+
      SOON.map(function(s){return '<div class="npxr" style="opacity:.5"><div class="t"><b>'+s[0]+'</b><small>'+s[1]+'</small></div></div>'}).join("")+
      '<p class="npxn" style="margin-top:10px">Valid for</p><div class="npxrow" id="npxM">'+[1,2,3].map(function(n){return '<button class="npxc" data-m="'+n+'" aria-pressed="'+(n===1)+'"><b>'+n+' month'+(n>1?"s":"")+'</b></button>'}).join("")+'</div>'+
      '<div class="npxtot"><span id="npxSum"></span><span style="text-align:right"><b id="npxTot"></b><br><small id="npxInr"></small></span></div>'+
      '<button class="cta" id="npxBuy">Try free (test)</button><p class="err" id="npxErr" role="alert" style="min-height:18px"></p>'+
      '<button class="npxc" id="npxBack" style="width:100%;text-align:center"><b>Back to plans</b></button>'+SUPPORT+'</div>';
    show();
    var $=function(id){return panel.querySelector("#"+id)};
    function calc(){var t=0,n=0;keys.forEach(function(k){t+=q[k]*T[k][2];n+=q[k];$("npxq_"+k).textContent=q[k]});
      $("npxSum").textContent=n+" rides · "+m+" month"+(m>1?"s":"");$("npxTot").textContent=thb(t);$("npxInr").textContent=inr(t);$("npxErr").textContent="";return {t:t,n:n}}
    [].forEach.call(panel.querySelectorAll(".npxs"),function(b){b.onclick=function(){var k=b.dataset.k;q[k]=Math.max(0,Math.min(30,q[k]+(+b.dataset.d)));calc()}});
    [].forEach.call(panel.querySelectorAll("#npxM .npxc"),function(b){b.onclick=function(){m=+b.dataset.m;[].forEach.call(panel.querySelectorAll("#npxM .npxc"),function(x){x.setAttribute("aria-pressed",x===b)});calc()}});
    $("npxX").onclick=close;$("npxBack").onclick=openPass;
    $("npxBuy").onclick=function(){var c=calc();if(c.n<3){$("npxErr").textContent="Choose at least 3 rides.";return}var cr={};keys.forEach(function(k){if(q[k])cr[k]=q[k]});buy("My own pass",cr,m,c.t)};
    calc();
  }

  /* ---------- buy (test) ---------- */
  function buy(name,cr,months,price){
    var p={id:code("P"),name:name,cr:JSON.parse(JSON.stringify(cr)),max:JSON.parse(JSON.stringify(cr)),exp:Date.now()+months*30*864e5,price:price,at:Date.now()};
    var all=lsGet("np_ride_passes",[])||[];all.unshift(p);lsSet("np_ride_passes",all.slice(0,10));
    try{if(window.npTrack)window.npTrack("ride_pass_test",name)}catch(e){}
    saveOrder({code:p.id,venue_id:"np-ride-pass",venue_name:"Namaste Ride Pass",category:"rides",customer_name:"Pass buyer (test)",customer_phone:"-",package:(name+" · "+Object.keys(cr).map(function(k){return cr[k]+" "+k}).join(" + ")).slice(0,200),guests:1,booking_date:today(),booking_time:"00:00",total:price,note:"RIDE PASS – TEST, NOT PAID. Expires "+fmtDate(p.exp)},function(){});
    result(true,"Pass ready",'<p class="about"><b>'+esc(name)+'</b> · '+thb(price)+' (test, not charged)</p><p class="about">Pass code: <b>'+esc(p.id)+'</b><br>Expires '+fmtDate(p.exp)+'</p>');
    var ok=panel.querySelector("#npxOk");ok.textContent="Book a ride now";ok.onclick=function(){bookWithPass(p.id)};
  }

  /* ---------- book with pass (me or a friend) ---------- */
  function bookWithPass(id){
    var all=lsGet("np_ride_passes",[])||[],p=all.find(function(x){return x.id===id});if(!p){openPass();return}
    var types=Object.keys(p.cr).filter(function(k){return p.cr[k]>0&&T[k]}),ty=types[0],who="me";
    panel.innerHTML='<div class="pbody npx">'+head("Book with my pass")+
      '<p class="npxn">'+esc(p.name)+' · '+crText(p)+'</p>'+
      '<p class="npxn">Ride type</p><div class="npxg">'+types.map(function(k){return '<button class="npxc" data-t="'+k+'" aria-pressed="'+(k===ty)+'"><b>'+T[k][0]+'</b><small>'+T[k][1]+' · '+p.cr[k]+' left</small></button>'}).join("")+'</div>'+
      '<p class="npxn">Who is riding?</p><div class="npxrow" id="npxW"><button class="npxc" data-w="me" aria-pressed="true"><b>Me</b></button><button class="npxc" data-w="friend" aria-pressed="false"><b>A friend</b></button></div>'+
      '<div class="fields" style="margin-top:10px">'+
       '<label class="full">Pickup<input id="npxFrom" list="nprPl" maxlength="160" placeholder="Type: hilton, walking, airport"></label>'+
       '<label class="full">Drop-off<input id="npxTo" list="nprPl" maxlength="160" placeholder="Type: terminal 21, jomtien"></label>'+
       '<label>Date<input id="npxDate" type="date" min="'+today()+'" value="'+today()+'"></label><label>Time<input id="npxTime" type="time"></label>'+
       '<label>Passengers<input id="npxPax" type="number" min="1" max="'+(ty==="bike"?1:3)+'" value="1" inputmode="numeric"></label><label>Flight no. (airport)<input id="npxFl" maxlength="12" placeholder="Optional"></label>'+
       '<label id="npxNmL">Your name<input id="npxName" maxlength="80" autocomplete="name"></label><label id="npxPhL">Phone / WhatsApp<input id="npxPhone" maxlength="30" inputmode="tel" placeholder="+91 or +66"></label></div>'+
      '<datalist id="nprPl">'+(window.npRidePlaces||[]).map(function(n){return '<option value="'+esc(n)+'">'}).join("")+'</datalist>'+
      CONSENT("npxOk1")+'<button class="cta" id="npxSend">Book this ride</button><p class="err" id="npxErr" role="alert" style="min-height:18px"></p>'+
      '<p class="npxn">Nothing to pay the driver. Our team confirms the driver on WhatsApp.</p>'+SUPPORT+'</div>';
    show();
    var $=function(i){return panel.querySelector("#"+i)};$("npxX").onclick=close;
    [].forEach.call(panel.querySelectorAll("[data-t]"),function(b){b.onclick=function(){ty=b.dataset.t;[].forEach.call(panel.querySelectorAll("[data-t]"),function(x){x.setAttribute("aria-pressed",x===b)});$("npxPax").max=ty==="bike"?1:3}});
    [].forEach.call(panel.querySelectorAll("[data-w]"),function(b){b.onclick=function(){who=b.dataset.w;[].forEach.call(panel.querySelectorAll("[data-w]"),function(x){x.setAttribute("aria-pressed",x===b)});
      $("npxNmL").firstChild.nodeValue=who==="me"?"Your name":"Friend's name";$("npxPhL").firstChild.nodeValue=who==="me"?"Phone / WhatsApp":"Friend's phone / WhatsApp"}});
    $("npxSend").onclick=function(){
      var e=$("npxErr"),r={from:$("npxFrom").value.trim(),to:$("npxTo").value.trim(),date:$("npxDate").value,time:$("npxTime").value,pax:+$("npxPax").value||1,fl:$("npxFl").value.trim(),name:$("npxName").value.trim(),phone:$("npxPhone").value.trim()};
      if(!r.from||!r.to){e.textContent="Please add pickup and drop-off.";return}
      if(!r.date||!r.time){e.textContent="Please choose a date and time.";return}
      if(r.pax<1||r.pax>(ty==="bike"?1:3)){e.textContent=ty==="bike"?"A bike takes 1 passenger.":"A car takes up to 3 passengers.";return}
      if(!r.name){e.textContent="Please add the rider's name.";return}
      if((r.phone.match(/\d/g)||[]).length<8){e.textContent="Please add a phone or WhatsApp number.";return}
      if(!$("npxOk1").checked){e.textContent="Please tick the box to agree.";return}
      var c=code("R"),veh=ty==="bike"?"Motorbike":"Car";
      var all2=lsGet("np_ride_passes",[])||[];all2.forEach(function(x){if(x.id===id&&x.cr[ty]>0)x.cr[ty]--});lsSet("np_ride_passes",all2);
      var rides=lsGet("np_rides",[])||[];rides.unshift({code:c,veh:veh,date:r.date,time:r.time,from:r.from,to:r.to});lsSet("np_rides",rides.slice(0,20));
      try{if("Notification" in window&&Notification.permission==="default")Notification.requestPermission()}catch(x){}
      $("npxSend").disabled=true;e.textContent="Sending…";
      saveOrder({code:c,venue_id:"np-rides",venue_name:"Namaste Rides",category:"rides",customer_name:r.name.slice(0,80),customer_phone:r.phone.slice(0,30),package:(veh+" ride · Ride Pass ("+T[ty][0]+")").slice(0,200),guests:r.pax,booking_date:r.date,booking_time:r.time,total:0,
        note:("PAID BY RIDE PASS "+id+" (test) | "+(who==="friend"?"FOR A FRIEND | ":"")+"PICKUP: "+r.from+" | DROP-OFF: "+r.to+(r.fl?" | Flight: "+r.fl:"")).slice(0,500)},
        function(ok){result(ok,"Ride booked",'<p class="about">Code: <b>'+esc(c)+'</b></p><p class="about">'+esc(T[ty][0])+' · '+esc(r.date)+' '+esc(r.time)+'<br>'+esc(r.from)+' → '+esc(r.to)+'</p><p class="about">Paid with your Ride Pass. Nothing to pay the driver.</p>')});
    };
  }

  /* ---------- Airport pickup, booked from India, pay in advance ---------- */
  var AP=[["bkk","Suvarnabhumi (BKK)",{car:1850,suv:2090,van:3150}],["dmk","Don Mueang (DMK)",null],["utp","U-Tapao (UTP)",null]];
  var CARS=[["car","Car","Up to 3 people · Toyota Altis or similar",3],["suv","SUV / 6 seats","Up to 6 people · Toyota Fortuner or similar",6],["van","Van","Up to 10 people · Toyota Commuter or similar",10]];
  function openAirport(){
    var ap="bkk",car="car",cur="THB";
    panel.innerHTML='<div class="pbody npx">'+head("Airport pickup")+
      '<p class="npxn">Coming from India? Book before you fly. Your driver waits at arrivals with your name board. Pay now, nothing to pay the driver. Tolls included.</p>'+
      '<p class="npxn">Airport</p><div class="npxg" id="npxAp">'+AP.map(function(a){return '<button class="npxc" data-a="'+a[0]+'" aria-pressed="'+(a[0]===ap)+'"><b>'+a[1]+'</b><small>'+(a[2]?"Fixed price":"Price coming soon")+'</small></button>'}).join("")+'</div>'+
      '<p class="npxn">Car</p><div id="npxCars"></div>'+
      '<div class="npxrow" style="margin:6px 0" id="npxCur"><button class="npxc" data-c="THB" aria-pressed="true"><b>฿ THB</b></button><button class="npxc" data-c="INR" aria-pressed="false"><b>₹ INR</b></button></div>'+
      '<div class="fields" style="margin-top:6px">'+
       '<label class="full">Drop-off (hotel in Pattaya)<input id="npxHotel" list="nprPl" maxlength="160" placeholder="Hotel name"></label>'+
       '<label>Flight number<input id="npxFl" maxlength="12" placeholder="AI 332"></label><label>Landing date<input id="npxDate" type="date" min="'+today()+'" value="'+today()+'"></label>'+
       '<label>Landing time<input id="npxTime" type="time"></label><label>Passengers<input id="npxPax" type="number" min="1" max="10" value="2" inputmode="numeric"></label>'+
       '<label>Big bags<select id="npxBag"><option>0–1</option><option>2–3</option><option>4–5</option><option>6+</option></select></label><label>Your name<input id="npxName" maxlength="80" autocomplete="name"></label>'+
       '<label>Country code<select id="npxCc"><option>+91</option><option>+66</option><option>Other</option></select></label><label>WhatsApp number<input id="npxPhone" maxlength="30" inputmode="tel" placeholder="98xxx xxxxx"></label></div>'+
      '<datalist id="nprPl">'+(window.npRidePlaces||[]).map(function(n){return '<option value="'+esc(n)+'">'}).join("")+'</datalist>'+
      '<div class="npxtot"><span>Total · tolls included</span><b id="npxTot"></b></div>'+
      '<p class="npxn">Driver waits 60 minutes after landing. We watch your flight time.</p>'+
      CONSENT("npxOk1")+'<button class="cta" id="npxSend">Pay now · Try free (test)</button><p class="err" id="npxErr" role="alert" style="min-height:18px"></p>'+
      '<p class="npxn">Test mode: no money is taken yet. Online payment starts soon.</p>'+SUPPORT+'</div>';
    show();
    var $=function(i){return panel.querySelector("#"+i)};$("npxX").onclick=close;
    function price(){var a=AP.find(function(x){return x[0]===ap});return a[2]?a[2][car]:null}
    function fm(n){return cur==="INR"?inr(n):thb(n)}
    function draw(){var a=AP.find(function(x){return x[0]===ap});
      $("npxCars").innerHTML='<div class="npxg">'+CARS.map(function(c){return '<button class="npxc" data-v="'+c[0]+'" aria-pressed="'+(c[0]===car)+'"><b>'+c[1]+'</b><small>'+c[2]+'</small><span class="pr">'+(a[2]?fm(a[2][c[0]]):"Coming soon")+'</span></button>'}).join("")+'</div>';
      [].forEach.call($("npxCars").querySelectorAll("[data-v]"),function(b){b.onclick=function(){car=b.dataset.v;draw()}});
      var p=price();$("npxTot").textContent=p?fm(p):"We send the price on WhatsApp";$("npxSend").textContent=p?"Pay now · Try free (test)":"Send request";$("npxErr").textContent=""}
    [].forEach.call(panel.querySelectorAll("[data-a]"),function(b){b.onclick=function(){ap=b.dataset.a;[].forEach.call(panel.querySelectorAll("[data-a]"),function(x){x.setAttribute("aria-pressed",x===b)});draw()}});
    [].forEach.call(panel.querySelectorAll("[data-c]"),function(b){b.onclick=function(){cur=b.dataset.c;[].forEach.call(panel.querySelectorAll("[data-c]"),function(x){x.setAttribute("aria-pressed",x===b)});draw()}});
    draw();
    $("npxSend").onclick=function(){
      var e=$("npxErr"),cc=$("npxCc").value,v=CARS.find(function(x){return x[0]===car}),a=AP.find(function(x){return x[0]===ap}),p=price(),
        r={hotel:$("npxHotel").value.trim(),fl:$("npxFl").value.trim(),date:$("npxDate").value,time:$("npxTime").value,pax:+$("npxPax").value||1,bag:$("npxBag").value,name:$("npxName").value.trim(),phone:$("npxPhone").value.trim()};
      if(!r.hotel){e.textContent="Please add your hotel in Pattaya.";return}
      if(!r.fl){e.textContent="Please add your flight number.";return}
      if(!r.date||!r.time){e.textContent="Please add landing date and time.";return}
      if(r.pax<1||r.pax>v[3]){e.textContent=v[1]+" takes up to "+v[3]+" people.";return}
      if(!r.name){e.textContent="Please add your name.";return}
      if((r.phone.match(/\d/g)||[]).length<8){e.textContent="Please add your WhatsApp number.";return}
      if(!$("npxOk1").checked){e.textContent="Please tick the box to agree.";return}
      var phone=(cc==="Other"?"":cc+" ")+r.phone,c=code("R");
      var rides=lsGet("np_rides",[])||[];rides.unshift({code:c,veh:v[1],date:r.date,time:r.time,from:a[1],to:r.hotel});lsSet("np_rides",rides.slice(0,20));
      try{if(window.npTrack)window.npTrack("airport_pickup",ap+"_"+car)}catch(x){}
      $("npxSend").disabled=true;e.textContent="Sending…";
      saveOrder({code:c,venue_id:"np-rides",venue_name:"Namaste Rides",category:"rides",customer_name:r.name.slice(0,80),customer_phone:phone.slice(0,30),package:("Airport pickup · "+v[1]+" · "+a[1]).slice(0,200),guests:r.pax,booking_date:r.date,booking_time:r.time,total:p,
        note:("AIRPORT PICKUP"+(cc==="+91"?" (booked from India)":"")+" | Flight: "+r.fl+" | Landing: "+r.date+" "+r.time+" | DROP-OFF: "+r.hotel+" | Big bags: "+r.bag+" | "+(p?"ADVANCE PAYMENT: TEST, NOT PAID ("+thb(p)+")":"PRICE TO SEND ON WHATSAPP")+" | Driver waits 60 min").slice(0,500)},
        function(ok){result(ok,p?"Pickup booked":"Request sent",'<p class="about">Code: <b>'+esc(c)+'</b></p><p class="about">'+esc(a[1])+' → '+esc(r.hotel)+'<br>'+esc(v[1])+' · Flight '+esc(r.fl)+' · '+esc(r.date)+' '+esc(r.time)+'</p>'+(p?'<p class="about">'+thb(p)+' ('+inr(p)+') · test, not charged</p>':'')+'<p class="about">We confirm your driver on WhatsApp '+esc(phone)+'.</p>')});
    };
  }
  window.npOpenRidePass=openPass;window.npOpenAirportPickup=openAirport;

  /* ---------- buttons + support line inside the existing Namaste Rides screen ---------- */
  function addBar(){
    var box=panel.querySelector(".npride");if(!box||box.querySelector(".npxbar"))return;
    var bar=document.createElement("div");bar.className="npxbar";
    bar.innerHTML='<button type="button" id="npxGoAp">✈️ Airport pickup<small>Book from India · pay now</small></button><button type="button" id="npxGoPass">🎫 Ride Pass<small>Plans or build your own</small></button>';
    var note=box.querySelector(".nprnote");if(note&&note.nextSibling)box.insertBefore(bar,note.nextSibling);else box.appendChild(bar);
    bar.querySelector("#npxGoAp").onclick=openAirport;bar.querySelector("#npxGoPass").onclick=openPass;
    var s=document.createElement("div");s.innerHTML=SUPPORT;box.appendChild(s.firstChild);
  }
  new MutationObserver(function(){addBar()}).observe(panel,{childList:true});

  /* ---------- Club names: unlock with code CLUBS10 or admin login ---------- */
  var CODE="CLUBS10",KEY="np_clubs_unlocked";
  function unlock(){
    if(!document.getElementById("npxUnl")){var s=document.createElement("style");s.id="npxUnl";s.textContent='.np-lock{filter:none!important;-webkit-user-select:auto!important;user-select:auto!important}.np-lockw::before{content:none!important}.npxlock{display:none!important}';document.head.appendChild(s)}
    window.npMaskClubs=function(t){return String(t).replace(/🔒/g,"")};
    window.npClubsUnlocked=true;[].forEach.call(document.querySelectorAll("option[data-npm]"),function(o){o.text=o.dataset.npm;o.removeAttribute("data-npm")});
  }
  /* 17 Oct 2026 (Rahul): phone dropdown lists (Pay my bill, Partner dashboard, Boomer, gifts) can't be blurred, so club names there show as "🔒 Partner club 1, 2…" while locked. The value stays the same, so the right club is still chosen. */
  var VSEL={bClub:1,billVenue:1,dVenue:1,gClub:1};
  function looksClub(t,sel){t=String(t||"");if(sel&&VSEL[sel.id]&&/\b(club|lounge|bar|barone|space)\b/i.test(t))return true;try{return typeof window.npMaskClubs==="function"&&!window.npClubsUnlocked&&window.npMaskClubs(t)!==t.replace(/🔒/g,"")}catch(e){return false}}
  function maskSelects(){if(window.npClubsUnlocked)return;
    [].forEach.call(document.querySelectorAll("select"),function(sel){var k=sel.querySelectorAll("option[data-npm]").length;
      [].forEach.call(sel.options,function(o){if(o.dataset.npm||!o.text.trim()||!looksClub(o.text,sel))return;if(!o.hasAttribute("value"))o.value=o.text;o.dataset.npm=o.text;k++;o.text="🔒 Partner club "+k})})}
  var mt=null;new MutationObserver(function(){if(window.npClubsUnlocked)return;clearTimeout(mt);mt=setTimeout(maskSelects,80)}).observe(document.body,{childList:true,subtree:true});
  setTimeout(maskSelects,300);setTimeout(maskSelects,2000);
  try{var qs=new URLSearchParams(location.search).get("clubs");if(qs&&qs.trim().toUpperCase()===CODE)lsSet(KEY,1)}catch(e){}
  if(lsGet(KEY,0))unlock();
  /* 17 Oct 2026 (Rahul): ONLY rahulsood30071990@gmail.com sees club names without the code; everyone else (other admins too) must enter the code */
  var OWNER="rahulsood30071990@gmail.com";
  function ownerCheck(){if(sb)try{sb.auth.getSession().then(function(s){var u=s&&s.data&&s.data.session&&s.data.session.user;if(u&&String(u.email||"").toLowerCase()===OWNER)unlock()}).catch(function(){})}catch(e){}}
  ownerCheck();if(sb)try{sb.auth.onAuthStateChange(function(){ownerCheck()})}catch(e){}
  function openCode(){
    panel.innerHTML='<div class="pbody npx">'+head("Club names")+'<p class="npxn">Club names are hidden until each club confirms. Partner or investor? Enter your access code.</p>'+
      '<div class="fields"><label class="full">Access code<input id="npxCode" maxlength="20" autocomplete="off" autocapitalize="characters"></label></div>'+
      '<button class="cta" id="npxGo">Unlock</button><p class="err" id="npxErr" role="alert" style="min-height:18px"></p></div>';
    show();var $=function(i){return panel.querySelector("#"+i)};$("npxX").onclick=close;
    $("npxCode").oninput=function(){$("npxErr").textContent=""};
    $("npxGo").onclick=function(){var v=$("npxCode").value.trim().toUpperCase();if(!v){$("npxErr").textContent="Enter a code first.";return}
      if(v!==CODE){$("npxErr").textContent="Wrong code. Try again.";return}lsSet(KEY,1);unlock();result(true,"Unlocked",'<p class="about">Club names now show on this phone.</p>')};
  }
  window.npOpenClubCode=openCode;
  function addLockLink(){
    if(lsGet(KEY,0))return;var row=document.querySelector("#npHomeFill .nptrow");if(!row||document.querySelector(".npxlock"))return;
    var d=document.createElement("div");d.className="npxlock";d.innerHTML='🔒 Club names hidden · <button type="button">Partner or investor? Enter code</button>';
    row.parentNode.insertBefore(d,row.nextSibling);d.querySelector("button").onclick=openCode;
  }
  addLockLink();setTimeout(addLockLink,1500);setTimeout(addLockLink,4000);
})();


/* ===== 17 Oct 2026 (Rahul): pickup / drop-off location search, added only.
   Type word by word and places show in a dropdown (our 28 places first, then map search for any hotel, shop or street in Thailand).
   "Use my location" on pickup AND drop-off. Picked places keep their map point, so the price estimate works for any place.
   Map search: Photon (OpenStreetMap), free test server – for launch use a paid / own server. ===== */
(function(){
  if(typeof panel==="undefined")return;
  var picked={},cache={},C=[12.9276,100.8771];
  function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
  if(!document.getElementById("npaCss")){var st=document.createElement("style");st.id="npaCss";
    st.textContent='.npa-wrap{position:relative}.npa-list{position:absolute;left:0;right:0;top:100%;margin-top:4px;z-index:60;background:#17122a;color:#F2EEFC;border:1px solid rgba(255,255,255,.2);border-radius:12px;max-height:280px;overflow-y:auto;box-shadow:0 10px 30px rgba(0,0,0,.5)}'+
    '.npa-it{display:block;width:100%;text-align:left;border:0;border-bottom:1px solid rgba(255,255,255,.08);background:transparent;color:inherit;font:inherit;padding:10px 12px;min-height:44px;cursor:pointer}'+
    '.npa-it b{display:block;font-size:14px;font-weight:600}.npa-it small{display:block;font-size:12px;opacity:.7;line-height:1.35}.npa-it:active,.npa-it:focus{background:rgba(233,185,73,.15);outline:none}'+
    '.npa-msg{padding:10px 12px;font-size:13px;opacity:.75}.npa-loc{border:0;background:transparent;color:#E9B949;font:inherit;font-weight:700;font-size:14px;padding:6px 0;min-height:40px;cursor:pointer;text-align:left}';
    document.head.appendChild(st)}

  /* price estimate: use the picked map point when the place is not in our list */
  var orig=window.npRideQuote;
  if(orig&&!orig._npa){var w=function(from,to,veh){var q=orig(from,to,veh);if(q)return q;
      function sub(t){t=String(t||"");if(/\(-?\d{1,2}\.\d+\s*,/.test(t))return t;var ll=picked[t.trim()];return ll?t+" ("+ll[0].toFixed(5)+", "+ll[1].toFixed(5)+")":t}
      return orig(sub(from),sub(to),veh)};w._npa=1;window.npRideQuote=w}

  function local(q){var ws=q.toLowerCase().split(/\s+/).filter(Boolean);return (window.npRidePlaces||[]).filter(function(n){var l=n.toLowerCase();return ws.every(function(x){return l.indexOf(x)>=0})}).slice(0,5).map(function(n){return {name:n,sub:"Popular place"}})}
  function label(f){var p=f.properties||{},n=p.name||[p.street,p.housenumber].filter(Boolean).join(" ")||"",
      sub=[p.name&&p.street?p.street:"",p.district||p.locality||"",p.city||p.county||"",p.state||""].filter(function(x,i,a){return x&&a.indexOf(x)===i&&x!==n}).join(", ");
    return {name:n,sub:sub,ll:[f.geometry.coordinates[1],f.geometry.coordinates[0]]}}
  function search(q,cb){q=q.trim();if(cache[q]){cb(cache[q]);return}
    fetch("https://photon.komoot.io/api/?q="+encodeURIComponent(q)+"&lat="+C[0]+"&lon="+C[1]+"&limit=7&lang=en&bbox=97.3,5.6,105.7,20.5")
      .then(function(r){return r.json()}).then(function(j){var o=(j.features||[]).map(label).filter(function(x){return x.name});cache[q]=o;cb(o)}).catch(function(){cb(null)})}
  function reverse(lat,lon,cb){fetch("https://photon.komoot.io/reverse?lat="+lat+"&lon="+lon+"&lang=en&limit=1").then(function(r){return r.json()}).then(function(j){var f=(j.features||[])[0];if(!f){cb("");return}var l=label(f);cb([l.name,l.sub].filter(Boolean).join(", "))}).catch(function(){cb("")})}
  function fire(inp){try{inp.dispatchEvent(new Event("input",{bubbles:true}))}catch(e){}}

  function attach(inp){
    if(!inp||inp.dataset.npa)return;inp.dataset.npa="1";inp.removeAttribute("list");inp.setAttribute("autocomplete","off");
    var host=inp.parentNode;host.classList.add("npa-wrap");
    var box=document.createElement("div");box.className="npa-list";box.hidden=true;host.appendChild(box);box.addEventListener("pointerdown",function(e){e.preventDefault()});box.addEventListener("mousedown",function(e){e.preventDefault()});
    var t=null,n=0;
    function render(items,msg){if(!items.length&&!msg){box.hidden=true;return}
      box.innerHTML=items.map(function(it,i){return '<button type="button" class="npa-it" data-i="'+i+'"><b>'+esc(it.name)+'</b>'+(it.sub?'<small>'+esc(it.sub)+'</small>':'')+'</button>'}).join("")+(msg?'<div class="npa-msg">'+esc(msg)+'</div>':'');
      box.hidden=false;
      [].forEach.call(box.querySelectorAll(".npa-it"),function(b){b.addEventListener("click",function(e){e.preventDefault();var it=items[+b.dataset.i];
        var v=it.sub&&it.sub!=="Popular place"?it.name+", "+it.sub.split(", ")[0]:it.name;inp.value=v.slice(0,160);if(it.ll)picked[inp.value.trim()]=it.ll;box.hidden=true;fire(inp)})})}
    inp.addEventListener("input",function(e){if(!e.isTrusted)return;var q=inp.value.trim(),my=++n;clearTimeout(t);
      if(q.length<2){box.hidden=true;return}
      var loc=local(q);if(window.npaAirportFilter)loc=window.npaAirportFilter(loc);render(loc,"Searching…");
      t=setTimeout(function(){search(q,function(res){if(my!==n)return;
        if(res===null){render(loc,loc.length?"":"Map search not available. Type the full address.");return}
        var names={};loc.forEach(function(x){names[x.name.toLowerCase()]=1});
        var all=loc.concat(res.filter(function(x){return !names[x.name.toLowerCase()]}));if(window.npaAirportFilter)all=window.npaAirportFilter(all);all=all.slice(0,8);
        render(all,all.length?"":"No place found. Try another word or type the full address.")})},300)});
    inp.addEventListener("blur",function(){setTimeout(function(){box.hidden=true},150)});
    inp.addEventListener("focus",function(){if(inp.value.trim().length>=2&&box.innerHTML)box.hidden=false});
  }
  function locBtn(inp,errId){
    if(!inp||inp.dataset.npaLoc)return;inp.dataset.npaLoc="1";
    var lab=inp.closest("label");if(!lab)return;var nx=lab.nextElementSibling;if(nx&&(nx.classList.contains("nprloc")||nx.classList.contains("npa-loc")))return;
    var b=document.createElement("button");b.type="button";b.className="npa-loc";b.textContent="📍 Use my location";lab.parentNode.insertBefore(b,lab.nextSibling);
    b.onclick=function(){var e=panel.querySelector("#"+errId);if(!navigator.geolocation){if(e)e.textContent="Location is not available on this phone.";return}
      if(e)e.textContent="Finding your location…";
      navigator.geolocation.getCurrentPosition(function(p){var la=p.coords.latitude,lo=p.coords.longitude,ll="("+la.toFixed(5)+", "+lo.toFixed(5)+")";
        inp.value="My location "+ll;fire(inp);if(e)e.textContent="";
        reverse(la,lo,function(a){if(a&&inp.value==="My location "+ll){inp.value=("My location: "+a).slice(0,140)+" "+ll;fire(inp)}})},
        function(){if(e)e.textContent="Location blocked. Allow location in Chrome, or type the place."},{enableHighAccuracy:true,timeout:15000,maximumAge:60000})}}
  function scan(){
    ["nprFrom","nprTo","npxFrom","npxTo","npxHotel"].forEach(function(id){attach(panel.querySelector("#"+id))});
    var f=panel.querySelector("#nprFrom");if(f)f.dataset.npaLoc="1"; /* pickup already has its own button */
    locBtn(panel.querySelector("#nprTo"),"nprErr");locBtn(panel.querySelector("#npxFrom"),"npxErr");locBtn(panel.querySelector("#npxTo"),"npxErr");
  }
  new MutationObserver(scan).observe(panel,{childList:true,subtree:true});
})();

/* ===== 17 Oct 2026 (Rahul): rides price card + motorbike clean-up + professional colours + ONE "Namaste Shopping Mall". Added only.
   - Price shows on every vehicle button and in a clear "Your fare" card right under drop-off. Grab-based prices include tolls.
   - Motorbike: flight number, luggage and airports are hidden.
   - New ride screens use the app theme colour (no gold / white blocks).
   - "Namaste Shopping" tile in All services is now "Namaste Shopping Mall" and opens the Namaste Mall (all items, checkout, gifts).
     The separate "Namaste Mall" tile is hidden (Rahul: one place, not two). Markets guide is still inside, at the bottom of the Mall. ===== */
(function(){
  if(typeof panel==="undefined")return;
  function thb(n){return "฿"+Math.round(n).toLocaleString("en-US")}
  if(!document.getElementById("npqCss")){var st=document.createElement("style");st.id="npqCss";
    st.textContent=
    /* one calm style for all ride screens */
    '.npride .nprv button,.npx .npxc{border:1px solid rgba(255,255,255,.14)!important;background:rgba(255,255,255,.03)!important;color:inherit!important;border-radius:14px}'+
    '.npride .nprv button[aria-pressed=true],.npx .npxc[aria-pressed=true]{border:1.5px solid var(--glow,#8FD8FF)!important;background:color-mix(in srgb,var(--glow,#8FD8FF) 12%,transparent)!important;color:inherit!important}'+
    '.npride .nprv button .npqp{display:block;margin-top:6px;font-size:14px;font-weight:700;opacity:1}.npride .nprv button .npqp.no{font-weight:400;opacity:.6;font-size:12px}'+
    '.npxbar button{border:1px solid rgba(255,255,255,.14)!important;background:rgba(255,255,255,.03)!important;color:inherit!important}'+
    '.npx .npxtag{background:color-mix(in srgb,var(--glow,#8FD8FF) 18%,transparent)!important;color:inherit!important}.npx .npxpass{border-color:rgba(255,255,255,.18)!important}.npx .npxpass small{color:inherit!important;opacity:.75}'+
    '.npx .npxtot,.npride .nprest{background:rgba(255,255,255,.05)!important;border:1px solid rgba(255,255,255,.12)}.npxsup{background:rgba(255,255,255,.04)!important;border:1px solid rgba(255,255,255,.1)}'+
    '.nprloc,.npa-loc,.npxlock button{color:var(--glow,#8FD8FF)!important;background:transparent!important;box-shadow:none!important}.npxlock{background:transparent!important}'+
    '.npqfare{display:flex;justify-content:space-between;align-items:baseline;gap:10px}.npqfare b{font-size:22px}.npqfare span{font-size:13px;opacity:.8}.npqsm{display:block;font-size:12.5px;opacity:.75;line-height:1.5;margin-top:4px}';
    document.head.appendChild(st)}

  /* ---------- rides: fares on vehicle buttons + fare card ---------- */
  function fare(){
    var box=panel.querySelector(".npride");if(!box)return;var f=box.querySelector("#nprFrom"),t=box.querySelector("#nprTo"),est=box.querySelector("#nprEst");if(!f||!t||!est)return;
    var on=box.querySelector(".nprv button[aria-pressed=true]"),veh=on?on.dataset.v:"car",Q=window.npRideQuote;
    [].forEach.call(box.querySelectorAll(".nprv button"),function(b){var p=b.querySelector(".npqp");if(!p){p=document.createElement("span");p.className="npqp";b.appendChild(p)}
      var q=Q&&f.value.trim()&&t.value.trim()?Q(f.value,t.value,b.dataset.v):null;
      if(!q){p.textContent="";p.className="npqp"}else if(q.noBike){p.textContent="Not for this trip";p.className="npqp no"}else{p.textContent=thb(q.low)+"–"+thb(q.high).slice(1);p.className="npqp"}});
    var q=Q&&f.value.trim()&&t.value.trim()?Q(f.value,t.value,veh):null;
    if(!f.value.trim()||!t.value.trim()){est.innerHTML="";return}
    if(!q){est.innerHTML='<div class="npqfare"><b>Price on request</b></div><span class="npqsm">Pick the place from the list so we can show the price. Or send the request and our team sends the price on WhatsApp.</span>';return}
    if(q.noBike){est.innerHTML='<div class="npqfare"><b>Motorbike not available</b></div><span class="npqsm">This trip is too long or goes to an airport. Please choose a car, SUV or van.</span>';return}
    est.innerHTML='<div class="npqfare"><span>Your fare</span><b>'+thb(q.low)+'–'+thb(q.high).slice(1)+'</b></div>'+
      '<span class="npqsm">About '+q.km+' km · '+(on?on.querySelector("b").textContent:"Car")+' · tolls included · nothing extra to the driver.<br>Final price confirmed by our team before the ride.</span>';
  }
  /* ---------- motorbike: hide flight, luggage ---------- */
  function bike(){
    var box=panel.querySelector(".npride");if(!box)return;var on=box.querySelector(".nprv button[aria-pressed=true]"),isB=on&&on.dataset.v==="bike";
    ["nprFlight","nprBag"].forEach(function(id){var i=box.querySelector("#"+id);if(i&&i.closest("label"))i.closest("label").style.display=isB?"none":""});
    window.npaNoAirports=!!isB;
    var ap=box.querySelector("#npxGoAp");if(ap){ap.style.display=isB?"none":"";ap.parentNode.style.gridTemplateColumns=isB?"1fr":""}
  }
  function wire(){
    var box=panel.querySelector(".npride");if(!box||box.dataset.npq)return;box.dataset.npq="1";
    var est=box.querySelector("#nprEst"),to=box.querySelector("#nprTo");
    if(est&&to&&to.closest("label")){var lab=to.closest("label"),nx=lab.nextElementSibling;var anchor=(nx&&nx.classList.contains("npa-loc"))?nx:lab;anchor.parentNode.insertBefore(est,anchor.nextSibling);est.style.gridColumn="1 / -1"}
    var run=function(){setTimeout(function(){bike();fare()},0)};
    if(est)new MutationObserver(function(){if(/Estimated price|Our team will send|can\x27t do this trip/.test(est.textContent))run()}).observe(est,{childList:true});
    box.addEventListener("input",run);box.addEventListener("click",function(e){if(e.target.closest(".nprv button"))run()});
    run();
  }
  new MutationObserver(function(){wire();var b=panel.querySelector(".npride");if(b&&b.querySelector("#nprTo")&&!b.querySelector("#nprTo").dataset.npaLoc)setTimeout(wire,50)}).observe(panel,{childList:true});
  /* airports out of the suggestion list for motorbike */
  var oldPl=null;Object.defineProperty(window,"npaAirportFilter",{value:function(list){return window.npaNoAirports?list.filter(function(x){return !/airport|\(bkk\)|\(dmk\)|\(utp\)/i.test(x.name+" "+(x.sub||""))}):list}});

  /* ---------- ONE Namaste Shopping Mall ---------- */
  var NAME="Namaste Shopping Mall";
  function openMall(){try{go("mall")}catch(e){}try{if(typeof renderMall==="function")renderMall()}catch(e){}window.scrollTo(0,0)}
  function mall(){
    var cats=document.getElementById("cats");
    if(cats)[].forEach.call(cats.children,function(b){if(b.dataset.npq)return;var tx=b.lastChild&&b.lastChild.nodeType===3?b.lastChild:null;
      if(tx&&/^\s*Namaste Shopping\s*$/.test(tx.nodeValue)){b.dataset.npq="1";tx.nodeValue=NAME;
        b.addEventListener("click",function(e){if(window.__npqShop){window.__npqShop=false;return}e.preventDefault();e.stopImmediatePropagation();openMall()},true)}});
    var hub=document.querySelector('.hubtile[data-go="mall"]');if(hub)hub.style.display="none";
    var sec=document.getElementById("mall");if(sec){var h=sec.querySelector("h2.sectiontitle");if(h&&h.textContent!==NAME)h.textContent=NAME;
      if(!sec.querySelector(".npqmk")){var d=document.createElement("button");d.type="button";d.className="npqmk";
        d.style.cssText="display:block;width:100%;margin:22px 0 6px;padding:14px;border-radius:14px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.03);color:inherit;font:inherit;text-align:left;min-height:44px;cursor:pointer";
        d.innerHTML='<b>Night markets &amp; malls guide</b><br><small style="opacity:.75">Shopping places in Pattaya, guided trips</small>';
        d.onclick=function(){var t=cats&&[].find.call(cats.children,function(b){return b.dataset.npq});if(t){try{go("explore")}catch(e){}window.__npqShop=true;t.click()}};sec.appendChild(d)}}
  }
  mall();setTimeout(mall,1500);setTimeout(mall,4000);
  var c=document.getElementById("cats");if(c)new MutationObserver(function(){setTimeout(mall,0)}).observe(c,{childList:true});
})();

/* ===== 17 Oct 2026 (Rahul, approved preview): new Raju (bald, beard, navy suit) in the chat box, the bottom-right button and every Raju avatar.
   Uses raju/raju-face.webp. The old drawn Raju stays in the code and comes back automatically if the photo cannot load. Nothing deleted. ===== */
(function(){
  /* 17 Oct 2026 (Rahul): "abhi sirf welcome mein" – new Raju only on the opening screen for now; set true to show him in chat box and corner button */
  var NP_RAJU_NEW_FACE=false;if(!NP_RAJU_NEW_FACE)return;
  var SRC="raju/raju-face.webp";
  if(!document.getElementById("npRajuNewCss")){var st=document.createElement("style");st.id="npRajuNewCss";
    st.textContent='.npRajuNew>svg.raju{display:none!important}.npRajuImg{display:block;width:100%;height:100%;object-fit:cover;object-position:50% 12%;border-radius:50%;background:radial-gradient(circle at 50% 40%,#3a2f6e,#191433)}'+
    '#rajuStage .npRajuImg{animation:npRjBr 3s ease-in-out infinite}.rajufab .npRajuImg{animation:npRjFl 2.4s ease-in-out infinite}'+
    '@keyframes npRjBr{0%,100%{transform:scale(1)}50%{transform:scale(1.03)}}@keyframes npRjFl{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}'+
    '@media (prefers-reduced-motion:reduce){.npRajuImg{animation:none!important}}';
    document.head.appendChild(st)}
  var ok=null;/* null = not known yet */
  var probe=new Image();probe.onload=function(){ok=true;scan()};probe.onerror=function(){ok=false};probe.src=SRC;
  function scan(){
    if(!ok)return;
    [].forEach.call(document.querySelectorAll("svg.raju"),function(sv){
      var p=sv.parentNode;if(!p||p.classList.contains("npRajuNew"))return;
      var im=document.createElement("img");im.className="npRajuImg";im.alt="Raju";im.src=SRC;im.decoding="async";
      im.onerror=function(){p.classList.remove("npRajuNew");im.remove()};
      p.insertBefore(im,sv);p.classList.add("npRajuNew");
    });
  }
  var t=null;new MutationObserver(function(){clearTimeout(t);t=setTimeout(scan,60)}).observe(document.body,{childList:true,subtree:true});
})();


/* ===== 18 Oct 2026 (Rahul, option G): one row of 3 colour tiles on Home – Boomer · Namaste Taxi · Refer & earn – in the app's logo colours.
   Replaces the wide "Refer & earn" card in the same place (Rahul marked it). Old card kept hidden in the code. "Namaste Rides" shown as "Namaste Taxi". ===== */
(function(){
  if(!document.getElementById("npRow3Css")){var st=document.createElement("style");st.id="npRow3Css";
    st.textContent=
    /* 18 Oct 2026 (Rahul: "remove"): quick buttons Table · Pickup · Indian food · Island tour hidden on Home */
    '#npHomeFill .npqa{display:none!important}'+
    '.npRow3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px}'+
    '.npRow3 button{position:relative;overflow:hidden;border-radius:18px;min-height:150px;padding:12px;display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-start;text-align:left;color:#fff;font:inherit;cursor:pointer;background:#120f22}'+
    '.npRow3 .bo{background:linear-gradient(160deg,rgba(176,75,224,.38),rgba(18,15,34,.95) 70%),#120f22;border:1.5px solid rgba(176,75,224,.65);box-shadow:0 0 30px -12px #B04BE0}'+
    '.npRow3 .tx{background:linear-gradient(160deg,rgba(253,180,90,.34),rgba(18,15,34,.95) 70%),#120f22;border:1.5px solid rgba(253,180,90,.65);box-shadow:0 0 30px -12px #FDB45A}'+
    '.npRow3 .rf{background:linear-gradient(160deg,rgba(242,48,110,.36),rgba(18,15,34,.95) 70%),#120f22;border:1.5px solid rgba(242,48,110,.65);box-shadow:0 0 30px -12px #F2306E}'+
    '.npRow3 .wm{position:absolute;right:-16px;top:-12px;width:92px;height:92px;pointer-events:none}'+
    '.npRow3 .wm svg{width:100%;height:100%;fill:none!important;stroke-width:1.3}'+
    '.npRow3 .bo .wm svg{stroke:rgba(203,150,255,.38)!important}.npRow3 .tx .wm svg{stroke:rgba(253,190,110,.38)!important}.npRow3 .rf .wm svg{stroke:rgba(255,120,170,.38)!important}'+
    '.npRow3 b{display:block;font-size:14px;font-weight:700;line-height:1.2}'+
    '.npRow3 small{display:block;font-size:11px;opacity:.75;margin-top:2px;line-height:1.3}'+
    '.npRow3 i{font-style:normal;display:inline-block;margin-top:9px;font-size:10.5px;font-weight:700;padding:6px 10px;border-radius:999px;white-space:nowrap;max-width:100%;overflow:hidden;text-overflow:ellipsis;box-sizing:border-box}'+
    '.npRow3 .bo i{background:rgba(176,75,224,.18);border:1px solid rgba(176,75,224,.6);color:#E3C6FF}'+
    '.npRow3 .tx i{background:rgba(253,180,90,.16);border:1px solid rgba(253,180,90,.6);color:#FFD9A3}'+
    '.npRow3 .rf i{background:rgba(242,48,110,.16);border:1px solid rgba(242,48,110,.6);color:#FFB3CF}'+
'.npRow3 button:active{transform:scale(.97)}';
    document.head.appendChild(st)}
  function icon(n){try{return typeof ico==="function"?ico(n):""}catch(e){return ""}}
  function build(){
    var w=document.getElementById("npRefWrap");if(!w||w.querySelector(".npRow3"))return;
    var r=document.createElement("div");r.className="npRow3";
    r.innerHTML='<button type="button" class="bo" data-a="boomer"><span class="wm">'+icon("buddy")+'</span><b>Boomer</b><small>Meet travellers</small><i>Meet now</i></button>'+
      '<button type="button" class="tx" data-a="taxi"><span class="wm">'+icon("rental")+'</span><b>Namaste Taxi</b><small>Car · bike · airport</small><i>Book now</i></button>'+
      '<button type="button" class="rf" data-a="refer"><span class="wm">'+icon("earn")+'</span><b>Refer &amp; earn</b><small>Up to 5% per booking</small><i>Earn now</i></button>';
    w.insertBefore(r,w.firstChild);
    r.onclick=function(e){var b=e.target.closest("button");if(!b)return;var a=b.dataset.a;
      try{if(window.npTrack)window.npTrack("service_open","row3_"+a)}catch(x){}
      if(a==="taxi"){if(window.npOpenRides)window.npOpenRides();return}
      if(a==="refer"){if(typeof go==="function")go("earn");return}
      if(a==="boomer"){var t=document.querySelector('[data-go="buddy"]');if(t)t.click();else if(typeof go==="function")go("buddy")}};
  }
  build();window.addEventListener("load",build);setTimeout(build,1600);setTimeout(build,4000);
})();


/* ===== 18 Oct 2026 (Rahul, approved preview): Singles / Family switch above the Raju card + new Raju (headset, badge "Raju – Pattaya Guide") in the Raju card.
   Singles: colourful neon ring around Raju. Family: "Aapki family ka sanskari guide" + family question chips + soft orange ring.
   Uses raju/raju-guide-face.webp. Old drawn Raju stays in the code (only hidden inside the card) and comes back if the photo cannot load.
   Chat box and corner button NOT changed. Nothing deleted. ===== */
(function(){
  var SRC="raju/raju-guide-face.webp";
  var FAM_TAG="Aapki family ka sanskari guide";
  var FAM_TXT="Temples, pure veg food, water parks, tours, transfers — poochiye. Hindi bhi chalegi.";
  var FAM_Q=["Kids ke liye water park?","Pure veg thali near me?","Temple visit timings?","Airport pickup price"];
  function mode(){try{return localStorage.getItem("np_mode")==="family"?"family":"singles"}catch(e){return "singles"}}
  function setMode(m){try{localStorage.setItem("np_mode",m)}catch(e){}apply();try{if(window.npTrack)window.npTrack("mode_switch",m)}catch(x){}}
  if(!document.getElementById("npModeCss")){var st=document.createElement("style");st.id="npModeCss";
    st.textContent='#npModeSw{display:flex;gap:4px;padding:4px;margin:0 0 14px;border-radius:999px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12)}'+
    '#npModeSw button{flex:1;min-height:44px;border:0;border-radius:999px;background:transparent;color:#b9b3d6;font:inherit;font-weight:700;font-size:15px;cursor:pointer;transition:background .2s,color .2s}'+
    'body:not(.np-family) #npModeSw button[data-m="singles"]{background:linear-gradient(90deg,#ff8a3d,#ff3d7f);color:#fff}'+
    'body.np-family #npModeSw button[data-m="family"]{background:#ff7a2f;color:#fff}'+
    '#rajuStage.npRajuGOn>svg.raju,#rajuStage.npRajuGOn>.npRajuImg{display:none!important}'+
    '#rajuStage .npRajuG{display:block;width:100%;aspect-ratio:1/1;height:auto;margin:auto;object-fit:cover;border-radius:50%;box-sizing:border-box;padding:4px;animation:npRjGB 3s ease-in-out infinite}'+
    'body:not(.np-family) #rajuStage .npRajuG{background:conic-gradient(#ff3d7f,#ffb13d,#5ee7ff,#a46bff,#ff3d7f);box-shadow:0 0 18px rgba(255,61,127,.75),0 0 34px rgba(91,63,209,.7)}'+
    'body.np-family #rajuStage .npRajuG{background:#ffd2b0;box-shadow:0 0 22px rgba(255,122,47,.55)}'+
    '#rajuStage.npRajuGOn{display:flex;align-items:center;justify-content:center}'+
    'body.np-family #rajuQ{display:none!important}body:not(.np-family) #npFamQ{display:none!important}'+
    '@keyframes npRjGB{0%,100%{transform:scale(1)}50%{transform:scale(1.03)}}'+
    '@media (prefers-reduced-motion:reduce){#rajuStage .npRajuG{animation:none!important}}';
    document.head.appendChild(st)}
  function apply(){
    var fam=mode()==="family";
    document.body.classList.toggle("np-family",fam);document.body.classList.toggle("np-singles",!fam);
    var sw=document.getElementById("npModeSw");
    if(sw)[].forEach.call(sw.querySelectorAll("button"),function(b){b.setAttribute("aria-pressed",String(b.dataset.m===(fam?"family":"singles")))});
    var rc=document.getElementById("rajuCard");if(!rc)return;
    var tag=rc.querySelector(".tag"),p=tag&&tag.nextElementSibling&&tag.nextElementSibling.tagName==="P"?tag.nextElementSibling:null;
    [[tag,FAM_TAG],[p,FAM_TXT]].forEach(function(x){var el=x[0];if(!el)return;
      if(fam){if(el.dataset.npOrig==null)el.dataset.npOrig=el.textContent;el.textContent=x[1]}
      else if(el.dataset.npOrig!=null){el.textContent=el.dataset.npOrig;delete el.dataset.npOrig}});
  }
  function build(){
    var rc=document.getElementById("rajuCard");if(!rc||!rc.parentNode)return;
    if(!document.getElementById("npModeSw")){
      var sw=document.createElement("div");sw.id="npModeSw";sw.setAttribute("role","group");sw.setAttribute("aria-label","Who is travelling");
      sw.innerHTML='<button type="button" data-m="singles">Singles</button><button type="button" data-m="family">Family</button>';
      sw.onclick=function(e){var b=e.target.closest("button");if(b)setMode(b.dataset.m)};
      rc.parentNode.insertBefore(sw,rc)}
    var stg=document.getElementById("rajuStage");
    if(stg&&!stg.querySelector(".npRajuG")){
      var im=document.createElement("img");im.className="npRajuG";im.alt="Raju, Pattaya guide";im.src=SRC;im.decoding="async";
      im.onerror=function(){stg.classList.remove("npRajuGOn");im.remove()};
      stg.insertBefore(im,stg.firstChild);stg.classList.add("npRajuGOn")}
    var q=document.getElementById("rajuQ");
    if(q&&!document.getElementById("npFamQ")){
      var f=document.createElement("div");f.id="npFamQ";f.className="rajuq";
      FAM_Q.forEach(function(t){var b=document.createElement("button");b.type="button";b.textContent=t;f.appendChild(b)});
      f.onclick=function(e){var b=e.target.closest("button");if(!b)return;var rin=document.getElementById("rajuIn"),go=document.getElementById("rajuGo");
        if(rin&&go){rin.value=b.textContent;go.click()}};
      q.parentNode.insertBefore(f,q.nextSibling)}
    apply();
  }
  build();window.addEventListener("load",build);setTimeout(build,1500);setTimeout(build,4000);
})();


/* ===== 18 Oct 2026 (Rahul): (1) new Raju (raju-guide-face.webp) also in the corner button, the chat header and every small Raju avatar.
   Old drawn Raju stays in the code and comes back by itself if the photo cannot load. Opening screen (Rahul poses) not touched.
   (2) Raju chat: the suggestion buttons under the chat now follow the topic (club question = club suggestions, not food).
   The old 5 fixed suggestions are only hidden while a topic is active, never deleted.
   (3) If Raju talks about clubs but sends no club buttons, the app shows up to 3 partner clubs to book (names stay locked/blurred). ===== */
(function(){
  var SRC="raju/raju-guide-face.webp";
  if(!document.getElementById("npRajuAllCss")){var st=document.createElement("style");st.id="npRajuAllCss";
    st.textContent='.npRajuAll>svg.raju,.npRajuAll>.npRajuImg{display:none!important}'+
    '.npRajuAllImg{display:block;width:100%;height:100%;object-fit:cover;object-position:50% 30%;border-radius:50%;background:#f2f2f4}'+
    '.rajufab .npRajuAllImg{animation:npRjAF 2.4s ease-in-out infinite}'+
    '@keyframes npRjAF{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}'+
    '@media (prefers-reduced-motion:reduce){.npRajuAllImg{animation:none!important}}'+
    '#quick.npCtxOn>button:not(.npCtxB){display:none!important}';
    document.head.appendChild(st)}
  /* ---- (1) every Raju avatar except the big card (the card has its own new photo) ---- */
  var ok=null;var probe=new Image();probe.onload=function(){ok=true;scan()};probe.onerror=function(){ok=false};probe.src=SRC;
  function scan(){
    if(!ok)return;
    [].forEach.call(document.querySelectorAll("svg.raju"),function(sv){
      var p=sv.parentNode;if(!p||p.id==="rajuStage"||p.classList.contains("npRajuAll"))return;
      var im=document.createElement("img");im.className="npRajuAllImg";im.alt="Raju";im.src=SRC;im.decoding="async";
      im.onerror=function(){p.classList.remove("npRajuAll");im.remove()};
      p.insertBefore(im,sv);p.classList.add("npRajuAll");
    });
  }
  var t1=null;new MutationObserver(function(){clearTimeout(t1);t1=setTimeout(scan,80)}).observe(document.body,{childList:true,subtree:true});
  /* ---- (2) topic suggestions ---- */
  var TOPICS=[
    {k:"boomer",re:/boomer|dost|friend|meet new|meet people|ladki|girl|single|company|मिलना|मिलवा|दोस्त|लड़की|ਦੋਸਤ|મિત્ર|நண்பர்|స్నేహ|বন্ধু|เพื่อน/i,
     q:["Open Boomer","How does Boomer work?","Is Boomer safe?","Meet travellers tonight","Girls group plans"]},
    {k:"club",re:/club|party|nightlife|dj|bollywood|punjabi|dance|ladies night|table|vip|क्लब|पार्टी|ਕਲੱਬ|ક્લબ|கிளப்|క్లబ్|ক্লাব|คลับ/i,
     q:["Book a club table tonight","Which club has Bollywood music?","Club dress code and entry age?","Ladies night tonight?","Taxi to the club"]},
    {k:"food",re:/food|veg|jain|thali|restaurant|dosa|khana|dinner|lunch|breakfast|खाना|भोजन|शाकाहारी|ਖਾਣਾ|ખાવાનું|சாப்பாடு|భోజనం|খাবার|อาหาร/i,
     q:["Pure veg restaurants near me","Jain food options?","Indian breakfast near me","Book a table for dinner","Food delivery to my hotel?"]},
    {k:"ride",re:/taxi|ride|airport|pickup|transfer|car|bike|bangkok|suvarnabhumi|bkk|टैक्सी|एयरपोर्ट|गाड़ी|ਟੈਕਸੀ|ટેક્સી|டாக்ஸி|టాక్సీ|ট্যাক্সি|แท็กซี่/i,
     q:["Airport pickup price from Bangkok","Book a taxi now","Ride Pass plans","Bike rental price","Pattaya to Bangkok taxi"]},
    {k:"tour",re:/tour|island|coral|trip|yacht|excursion|temple|water park|sightseeing|टूर|घूम|ਟੂਰ|ટૂર|சுற்றுலா|టూర్|ট্যুর|ทัวร์/i,
     q:["Coral Island tour price","Family day trip ideas","Sunset yacht price","Temples to visit","Water park for kids"]},
    {k:"hotel",re:/hotel|stay|room|resort|होटल|ਹੋਟਲ|હોટેલ|ஹோட்டல்|హోటల్|হোটেল|โรงแรม/i,
     q:["Hotels near Walking Street","Family hotel with pool","Budget hotel price","Hotel with Indian breakfast","Airport pickup to my hotel"]}
  ];
  function topicOf(s){s=String(s||"");for(var i=0;i<TOPICS.length;i++)if(TOPICS[i].re.test(s))return TOPICS[i];return null}
  function setChips(tp){
    var qk=document.getElementById("quick");if(!qk)return;
    [].forEach.call(qk.querySelectorAll(".npCtxB"),function(b){b.remove()});
    if(!tp){qk.classList.remove("npCtxOn");return}
    var fam=document.body.classList.contains("np-family"),list=tp.q.slice();
    if(fam&&tp.k==="club")list=["Family dinner with live music","Kids-friendly evening ideas","Temples to visit","Taxi for the family"];
    if(fam&&tp.k==="boomer")list=["Family day trip ideas","Kids activities today","Temples to visit","Water park for kids"];
    list.slice().reverse().forEach(function(t){var b=document.createElement("button");b.type="button";b.className="npCtxB";b.textContent=t;
      b.onclick=function(){
        if(t==="Open Boomer"){try{if(window.closeRaju)closeRaju()}catch(e){}var g=document.querySelector('[data-go="buddy"]');if(g)g.click();else if(typeof go==="function")go("buddy");return}
        if(typeof ask==="function")ask(t)};qk.insertBefore(b,qk.firstChild)});
    qk.classList.add("npCtxOn");qk.scrollLeft=0;
  }
  /* ---- (3) club buttons when Raju forgets them ---- */
  function clubFallback(q,reply){
    try{
      if(typeof CLUBS==="undefined"||typeof addRecs!=="function"||typeof chatEl==="undefined")return;
      if(document.body.classList.contains("np-family"))return;
      var kids=[].slice.call(chatEl.children),i=kids.length-1;while(i>=0&&!kids[i].classList.contains("me")){if(kids[i].classList.contains("recs"))return;i--}
      var s=(q+" "+reply).toLowerCase();
      var pool=CLUBS.filter(function(c){return c&&c.cat==="nightlife"&&(typeof RAJU_OK!=="function"||RAJU_OK(c))});
      if(!pool.length)return;
      var scored=pool.map(function(c){var txt=[c.music,c.sub,(c.tags||[]).join(" "),c.area].join(" ").toLowerCase(),n=0;
        ["bollywood","punjabi","hindi","gujarati","walking","soi","ladies","live"].forEach(function(w){if(s.indexOf(w)>=0&&txt.indexOf(w)>=0)n++});return {c:c,n:n}});
      scored.sort(function(a,b){return b.n-a.n});
      addRecs(scored.slice(0,3).map(function(x){return x.c.id}));
    }catch(e){}
  }
  if(typeof ask==="function"&&!window.__npCtxWrapped){
    window.__npCtxWrapped=true;
    var prev=ask;
    ask=async function(q){
      var n0=(typeof chatEl!=="undefined")?chatEl.children.length:0;
      await prev(q);
      try{
        var reply=window.__npLastReply||"";
        if(typeof chatEl!=="undefined"&&chatEl.children.length>n0){
          var tq=topicOf(q),tr=topicOf(reply),tp=tq||tr;
          setChips(tp);
          if(tp&&tp.k==="club"&&chatEl.children.length>n0)clubFallback(String(q||""),reply);
        }
      }catch(e){}
    };
  }
})();


/* ===== 18 Oct 2026 (Rahul): (1) Family mode card text in all 10 app languages.
   (2) Raju: stronger language rule (no Roman-script Hinglish line in Hindi or other languages) and "sanskari" Family mode behaviour.
   Added on top of the existing Raju rules sent to bright-responder; nothing removed. ===== */
(function(){
  var NAMES={en:"English",hi:"Hindi (Devanagari script)",pa:"Punjabi (Gurmukhi script)",gu:"Gujarati (Gujarati script)",ta:"Tamil (Tamil script)",mr:"Marathi (Devanagari script)",th:"Thai (Thai script)",bn:"Bengali (Bengali script)",te:"Telugu (Telugu script)",bho:"Bhojpuri (Devanagari script)"};
  var TAG={en:"Aapki family ka sanskari guide",hi:"आपकी फ़ैमिली का संस्कारी गाइड",pa:"ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਦਾ ਸੰਸਕਾਰੀ ਗਾਈਡ",gu:"તમારા પરિવારનો સંસ્કારી ગાઇડ",mr:"तुमच्या कुटुंबाचा संस्कारी गाईड",ta:"உங்கள் குடும்பத்தின் பண்பான வழிகாட்டி",th:"ไกด์ใจดีสำหรับครอบครัวของคุณ",bn:"আপনার পরিবারের সংস্কারী গাইড",te:"మీ కుటుంబానికి సంస్కారవంతమైన గైడ్",bho:"रउरा परिवार के संस्कारी गाइड"};
  var TXT={en:"Temples, pure veg food, water parks, tours, transfers — poochiye. Hindi bhi chalegi.",hi:"मंदिर, शुद्ध शाकाहारी खाना, वॉटर पार्क, टूर और ट्रांसफ़र — बेझिझक पूछिए।",pa:"ਮੰਦਰ, ਸ਼ੁੱਧ ਸ਼ਾਕਾਹਾਰੀ ਖਾਣਾ, ਵਾਟਰ ਪਾਰਕ, ਟੂਰ ਅਤੇ ਟ੍ਰਾਂਸਫਰ — ਬੇਝਿਜਕ ਪੁੱਛੋ।",gu:"મંદિરો, શુદ્ધ શાકાહારી ભોજન, વોટર પાર્ક, ટૂર અને ટ્રાન્સફર — નિઃસંકોચ પૂછો.",mr:"मंदिरे, शुद्ध शाकाहारी जेवण, वॉटर पार्क, टूर आणि ट्रान्सफर — निःसंकोच विचारा.",ta:"கோவில்கள், தூய சைவ உணவு, வாட்டர் பார்க், சுற்றுலா, பயணம் — தயங்காமல் கேளுங்கள்.",th:"วัด อาหารมังสวิรัติ สวนน้ำ ทัวร์ และรถรับส่ง — ถามได้เลย",bn:"মন্দির, খাঁটি নিরামিষ খাবার, ওয়াটার পার্ক, ট্যুর, ট্রান্সফার — নির্দ্বিধায় জিজ্ঞাসা করুন।",te:"ఆలయాలు, శుద్ధ శాకాహార భోజనం, వాటర్ పార్క్‌లు, టూర్లు, ట్రాన్స్‌ఫర్లు — సంకోచించకుండా అడగండి.",bho:"मंदिर, शुद्ध शाकाहारी खाना, वाटर पार्क, टूर आ ट्रांसफर — बेझिझक पूछीं।"};
  function lang(){var l="en";try{l=localStorage.getItem("np_lang")||"en"}catch(e){}return NAMES[l]?l:"en"}
  function fam(){return document.body.classList.contains("np-family")}
  /* (1) family card text in the app language */
  function cardText(){
    if(!fam())return;
    var rc=document.getElementById("rajuCard");if(!rc)return;
    var tag=rc.querySelector(".tag"),p=tag&&tag.nextElementSibling&&tag.nextElementSibling.tagName==="P"?tag.nextElementSibling:null,l=lang();
    if(tag&&tag.dataset.npOrig!=null&&tag.textContent!==TAG[l]){tag.textContent=TAG[l];tag.classList.add("notranslate");tag.setAttribute("translate","no")}
    if(p&&p.dataset.npOrig!=null&&p.textContent!==TXT[l]){p.textContent=TXT[l];p.classList.add("notranslate");p.setAttribute("translate","no")}
  }
  function unmark(){if(fam())return;var rc=document.getElementById("rajuCard");if(!rc)return;
    [].forEach.call(rc.querySelectorAll(".tag.notranslate,.tag+p.notranslate"),function(el){if(el.dataset.npOrig==null){el.classList.remove("notranslate");el.removeAttribute("translate")}})}
  setInterval(function(){cardText();unmark()},800);
  document.addEventListener("click",function(e){if(e.target.closest&&e.target.closest("#npModeSw"))setTimeout(function(){cardText();unmark()},50)},true);
  /* (2) extra rules for Raju, added to every bright-responder chat call (not to translation calls) */
  function extra(){
    var l=lang(),s="\n\nFINAL RULES (added 18 Oct 2026, these win over anything above): ";
    s+="BOOMER: the app feature for meeting other travellers is called 'Boomer'. Always call it Boomer (never 'Meet new people'). Boomer is social only: meeting travellers in groups and public places with both people's consent. It is not dating, not escort and not introductions to women. If a guest asks to be set up with a girl, kindly explain this and suggest Boomer to meet fellow travellers respectfully. Safety first. ";
    if(l!=="en")s+="LANGUAGE CHECK: every sentence of the reply, including jokes, filmi lines, one-liners like 'Yeh Pattaya hai bhai' and 'Raju ki salah', must be written in "+NAMES[l]+" only. Never write Hinglish or any sentence in English/Roman letters. Only venue names, phone numbers and prices may stay as they are. ";
    if(fam())s+="FAMILY MODE: the guest is travelling with family (kids, parents, elders or a just-married couple). Be sanskari: very respectful and warm, use 'aap' and 'ji' (or the polite form of the reply language), no party slang, no flirting, no night-life jokes. Suggest family-friendly places first: pure veg and Indian restaurants, temples, water parks, aquarium, tours, sunset cruise, hotels and transfers. Night clubs are available in Family mode too: suggest them only when the guest asks about nightlife, and keep the tone respectful. ";
    else s+="When you recommend clubs, always name the options from the list and include their ids in IDS so the guest gets Book buttons. ";
    return s;
  }
  try{
    if(window.supabase&&window.supabase.createClient&&!window.__npInvokeWrapped){
      var c=window.supabase.createClient("https://mymtgbmcjbwsnetzwgoy.supabase.co","sb_publishable_ViFodxG8kAENr78Fyp-BwQ_iA_BfAD0",{auth:{persistSession:false,autoRefreshToken:false,storageKey:"np-invoke-probe"}});
      var proto=c&&c.functions&&Object.getPrototypeOf(c.functions);
      if(proto&&typeof proto.invoke==="function"){
        window.__npInvokeWrapped=true;
        var orig=proto.invoke;
        proto.invoke=function(name,opts){
          try{
            if(name==="bright-responder"&&opts&&opts.body&&typeof opts.body.venues==="string"&&opts.body.venues.indexOf("only a translator")<0&&opts.body.venues.indexOf("FINAL RULES (added 18 Oct 2026")<0){
              var b={};for(var k in opts.body)b[k]=opts.body[k];b.venues=opts.body.venues+extra();
              var o={};for(var k2 in opts)o[k2]=opts[k2];o.body=b;opts=o;
            }
          }catch(e){}
          return orig.call(this,name,opts);
        };
      }
    }
  }catch(e){}
})();


/* ===== 18 Oct 2026 (Rahul, approved preview): Family mode home section with Rahul's 3D icons.
   Shows only in Family mode, right below the Raju card. Icons from /family-icons/*.webp.
   Each tile opens an existing part of the app. Nothing removed or hidden in Singles mode. ===== */
(function(){
  var P="family-icons/icon-";
  function svc(c){return function(){if(typeof openService==="function")openService(c)}}
  function tab(t){return function(){if(typeof go==="function")go(t);window.scrollTo(0,0)}}
  function raju(q){return function(){if(typeof openRaju==="function")openRaju(q)}}
  function rides(){if(window.npOpenRides)npOpenRides();else svc("airport")()}
  var TOP=[["taxi-car","Namaste Taxi","Book now",rides,"#ffe1cf"],
    ["name-board","Airport pickup","Book now",function(){if(window.npOpenAirportPickup)npOpenAirportPickup();else svc("airport")()},"#d9ecff"],
    ["gift-coins","Refer & earn","Earn now",tab("earn"),"#dff6e9"]];
  var SEC=[["Getting around",[["taxi-car","Taxi",rides],["suv","SUV",rides],["minivan","Family van",rides],["scooter","Bike",rides],
      ["car-key","Self drive",svc("rental")],["car-highway","Ride Pass",function(){if(window.npOpenRidePass)npOpenRidePass();else rides()}],
      ["private-jet","Private jet",svc("jet")],["passport","Visa & Legal Information",svc("visa")]]],
    ["Family fun",[["yacht","Sunset yacht",svc("yacht")],["jetski","Water sports",svc("water")],["beachclub","Beach day",svc("beach")],["golf-flag","Golf",svc("golf")],
      ["balloons","Celebrations",svc("events")],["ticket-star","Shows",svc("tours")],["two-people","Just married",raju("Just married couple – best plans in Pattaya?")],["lotus-female","Girls group",tab("ladies")]]],
    ["Food & shopping",[["veg","Pure veg",svc("indian")],["thali-round","Indian thali",svc("indian")],["grocery-basket","Groceries",svc("grocery")],["shopping-bags","Namaste Mall",tab("mall")],
      ["concierge-bell","Hotels",svc("hotels")],["gold-crown","Namaste Gold",function(){var g=document.getElementById("goldGo");if(g)g.click();else raju("Namaste Gold")()}],
      ["friends-waving","Friends",function(){if(window.openFinder)openFinder()}]]]];
  var PAL=["#ffe1cf","#d9ecff","#e0f5d8","#fde7ff","#fff0c2","#e8e3ff","#d6f5ee","#ffe4ec"];
  if(!document.getElementById("npFamHomeCss")){var st=document.createElement("style");st.id="npFamHomeCss";
    st.textContent='#npFamHome{display:none;margin:0 0 18px;padding:14px;border-radius:26px;background:#fff4e8;color:#2b2140}'+
    'body.np-family #npFamHome{display:block}'+
    '#npFamHome h3{margin:14px 0 8px;font-size:17px;font-weight:800;color:#2b2140}'+
    '#npFamHome .fg{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}'+
    '#npFamHome .ft{border:0;border-radius:20px;padding:6px 4px 8px;display:flex;flex-direction:column;align-items:center;gap:2px;font:inherit;font-size:12px;font-weight:700;color:#2b2140;cursor:pointer;box-shadow:inset 0 -5px 0 rgba(0,0,0,.06);min-height:96px;transition:transform .15s}'+
    '#npFamHome .ft:active{transform:scale(.95)}'+
    '#npFamHome .ft img{width:56px;height:56px;object-fit:contain}'+
    '#npFamHome .top{grid-template-columns:repeat(3,minmax(0,1fr))}'+
    '#npFamHome .top .ft{padding:10px 6px;font-size:13px}#npFamHome .top .ft img{width:64px;height:64px}'+
    '#npFamHome .top .b{background:#fff;border-radius:14px;padding:4px 12px;font-size:12px;margin-top:2px}';
    document.head.appendChild(st)}
  function tile(i,l,fn,bg,btn){var b=document.createElement("button");b.type="button";b.className="ft";b.style.background=bg;
    var im=document.createElement("img");im.src=P+i+".webp";im.alt="";im.loading="lazy";im.decoding="async";im.onerror=function(){im.style.visibility="hidden"};
    var t=document.createElement("div");t.textContent=l;b.appendChild(im);b.appendChild(t);
    if(btn){var x=document.createElement("div");x.className="b";x.textContent=btn;b.appendChild(x)}
    b.onclick=function(){try{fn()}catch(e){}};return b}
  function build(){
    if(document.getElementById("npFamHome"))return;
    var rc=document.getElementById("rajuCard");if(!rc||!rc.parentNode)return;
    var w=document.createElement("section");w.id="npFamHome";w.setAttribute("aria-label","Family");
    var top=document.createElement("div");top.className="fg top";
    TOP.forEach(function(r){top.appendChild(tile(r[0],r[1],r[3],r[4],r[2]))});w.appendChild(top);
    SEC.forEach(function(s){var h=document.createElement("h3");h.textContent=s[0];w.appendChild(h);
      var g=document.createElement("div");g.className="fg";s[1].forEach(function(r,k){g.appendChild(tile(r[0],r[1],r[2],PAL[k%8]))});w.appendChild(g)});
    rc.parentNode.insertBefore(w,rc.nextSibling);
  }
  build();window.addEventListener("load",build);setTimeout(build,1500);
})();


/* ===== 18 Oct 2026 (Rahul): Family mode = whole app in the light theme (uses the app's own light theme), warm cream colours.
   Singles mode goes back to the guest's saved theme (dark by default). Nothing removed. ===== */
(function(){
  var R=document.documentElement;
  if(!document.getElementById("npFamThemeCss")){var st=document.createElement("style");st.id="npFamThemeCss";
    st.textContent=':root.np-fam[data-theme="light"]{--bg:#FFF4E8;--surface:#FFFFFF;--line:#F1E2D0}'+
    'html.np-fam,html.np-fam body{background:#FFF4E8!important}'+
    'html.np-fam #npFamHome{background:transparent;padding:0}'+
    'html.np-fam #npModeSw{background:#fff;border-color:#F1E2D0}html.np-fam #npModeSw button{color:#6b5f86}html.np-fam #npModeSw button[data-m="family"]{color:#fff}';
    document.head.appendChild(st)}
  function saved(){try{return localStorage.getItem("np_theme")}catch(e){return null}}
  function apply(){
    var fam=document.body.classList.contains("np-family"),on=R.classList.contains("np-fam");
    if(fam&&!on){R.classList.add("np-fam");R.dataset.theme="light"}
    else if(!fam&&on){R.classList.remove("np-fam");R.dataset.theme=saved()||"dark"}
  }
  apply();
  new MutationObserver(apply).observe(document.body,{attributes:true,attributeFilter:["class"]});
  new MutationObserver(function(){if(R.classList.contains("np-fam")&&R.dataset.theme!=="light")R.dataset.theme="light"}).observe(R,{attributes:true,attributeFilter:["data-theme"]});
})();


/* ===== 18 Oct 2026 (Rahul): Family mode – the rest of Home in the same cream "clay" style as the family icons.
   Club-only parts (club ticker, "Every club. One booking.", Tonight club cards, club cards, Boomer tiles) are only HIDDEN in Family mode
   (approved Family design: night clubs hidden). They are not deleted and show normally in Singles mode. ===== */
(function(){
  var CL=["#ffe1cf","#d9ecff","#e0f5d8","#fde7ff","#fff0c2","#e8e3ff","#d6f5ee","#ffe4ec"];
  if(!document.getElementById("npFamClayCss")){var st=document.createElement("style");st.id="npFamClayCss";
    var S='html.np-fam ';
    st.textContent=
    S+'.npFamHide{display:none!important}'+
    S+'.namaste,'+S+'.npstrip,'+S+'.npx-lang,'+S+'.npx-tools,'+S+'.hubtile,'+S+'.homeblk button,'+S+'.tx,'+S+'.rf,'+S+'.goldarea,'+S+'.rcard,'+S+'.nplbtn'+
      '{background:var(--npc,#fff)!important;background-image:none!important;border:0!important;border-radius:22px!important;color:#2b2140!important;box-shadow:inset 0 -5px 0 rgba(0,0,0,.06),0 6px 14px rgba(140,90,40,.10)!important;backdrop-filter:none!important}'+
    S+'.namaste *,'+S+'.npstrip *,'+S+'.npx-lang *,'+S+'.npx-tools *,'+S+'.hubtile *,'+S+'.tx *,'+S+'.rf *,'+S+'.goldarea *,'+S+'.rcard *:not(img){color:#2b2140!important;-webkit-text-fill-color:#2b2140!important;text-shadow:none!important}'+
    S+'.rcard .art{border-radius:18px!important;filter:saturate(.9) brightness(1.1)}'+
    S+'.goldarea button,'+S+'.tx button,'+S+'.rf button,'+S+'.hubtile button{background:#fff!important;color:#2b2140!important;border:0!important}'+
    S+'.npx-tools input{background:#fff!important;color:#2b2140!important;border:1px solid #F1E2D0!important}'+
    S+'.tabs{background:rgba(255,255,255,.95)!important;border:1px solid #F1E2D0!important}'+S+'.tabs button{color:#6b5f86!important}'+
    S+'.tabs button[aria-selected="true"],'+S+'.tabs button.on{background:#ff7a2f!important;color:#fff!important}'+
    S+'#rajuCard{background:#fff!important;border:0!important;box-shadow:inset 0 -5px 0 rgba(0,0,0,.05),0 8px 18px rgba(140,90,40,.12)!important}'+
    S+'#rajuCard h2,'+S+'#rajuCard p,'+S+'#rajuCard .tag{color:#2b2140!important}'+S+'#rajuCard .tag{border-color:#ffd2b0!important;background:#fff4e8!important}';
    document.head.appendChild(st)}
  function hide(el){if(el&&!el.classList.contains("npFamHide"))el.classList.add("npFamHide")}
  function tag(){
    var ex=document.getElementById("explore");if(!ex)return;
    hide(ex.querySelector(".ticker"));
    var h1=ex.querySelector("h1");if(h1&&/club/i.test(h1.textContent)){var hb=h1.closest("section,.hero")||h1.parentNode;if(hb&&hb!==ex&&!hb.contains(document.getElementById("rajuCard")))hide(hb);else{hide(h1);var n=h1.nextElementSibling;if(n&&n.tagName==="P")hide(n)}}
    var tc=ex.querySelector(".nptcard");if(tc){var sec=tc.closest("section")||tc.parentNode.parentNode;if(sec&&sec!==ex)hide(sec)}
    [].forEach.call(ex.querySelectorAll(".bo"),function(b){hide(b)});
    [].forEach.call(ex.querySelectorAll(".hubtile"),function(b){if(/boomer|partner dashboard/i.test(b.textContent))hide(b)});
    [].forEach.call(ex.querySelectorAll(".rcard"),function(c){if(/club|lounge|after 2 am/i.test(c.textContent))hide(c)});
    [].forEach.call(ex.querySelectorAll("*"),function(e){if(e.children.length===0&&/^\s*🔒?\s*Club names hidden/i.test(e.textContent)){hide(e.closest("div,p")||e)}});
    var i=0;[].forEach.call(ex.querySelectorAll(".hubtile,.tx,.rf,.rcard,.npx-lang,.npx-tools"),function(e){e.style.setProperty("--npc",CL[(i++)%CL.length])});
    var g=ex.querySelector(".goldarea");if(g)g.style.setProperty("--npc","#fff0c2");
  }
  tag();window.addEventListener("load",tag);setTimeout(tag,1500);setTimeout(tag,4000);
  var t=null;new MutationObserver(function(){clearTimeout(t);t=setTimeout(tag,300)}).observe(document.getElementById("explore")||document.body,{childList:true,subtree:true});
})();


/* ===== 18 Oct 2026 (Rahul): Family mode – soft pictures + Rahul's 3D icons only.
   "All services" tiles get the 3D icons (soft pastel circle), venue photos are softened, club rows and club cards are only HIDDEN in Family mode.
   Singles mode is unchanged. Nothing deleted. ===== */
(function(){
  var P="family-icons/icon-";
  var MAP=[[/vip beach/i,"beachclub"],[/only veg/i,"veg"],[/veg & non|non-veg/i,"thali-round"],[/groceries/i,"grocery-basket"],[/hotels/i,"concierge-bell"],
    [/cars? & bikes|rental/i,"car-key"],[/water sports/i,"jetski"],[/golf/i,"golf-flag"],[/yacht/i,"yacht"],[/airport/i,"name-board"],[/shopping|mall/i,"shopping-bags"],
    [/events|party planning|gala/i,"balloons"],[/concierge/i,"concierge-bell"],[/visa|tickets/i,"passport"],[/private jet/i,"private-jet"],[/tours/i,"ticket-star"],[/spa/i,"lotus-female"]];
  var PAL=["#ffe1cf","#d9ecff","#e0f5d8","#fde7ff","#fff0c2","#e8e3ff","#d6f5ee","#ffe4ec"];
  if(!document.getElementById("npFam3dCss")){var st=document.createElement("style");st.id="npFam3dCss";var S="html.np-fam ";
    st.textContent=S+'#cats .cat{background:var(--npc,#fff)!important;border:0!important;border-radius:22px!important;color:#2b2140!important;box-shadow:inset 0 -5px 0 rgba(0,0,0,.06)!important}'+
    S+'#cats .cat>span{background:rgba(255,255,255,.75)!important;border:0!important;box-shadow:none!important}'+
    S+'#cats .cat>span svg{stroke:#2b2140!important;color:#2b2140!important}'+
    S+'#cats .cat.npHas3d>span svg{display:none!important}'+
    '.npCat3d{display:none}'+S+'.npCat3d{display:block;width:100%;height:100%;object-fit:contain;padding:2px}'+
    S+'.art,'+S+'.club .art,'+S+'.rcard .art{filter:saturate(.75) brightness(1.15) contrast(.9)!important;opacity:.92;border-radius:18px!important}'+
    S+'.club{background:#fff!important;border:0!important;border-radius:22px!important;color:#2b2140!important;box-shadow:inset 0 -5px 0 rgba(0,0,0,.05),0 6px 14px rgba(140,90,40,.10)!important}'+
    S+'.club .meta,'+S+'.club .meta *{color:#2b2140!important}'+
    S+'.homeblk .install,'+S+'[class*="install"]{background:#fff0c2!important;background-image:none!important;color:#2b2140!important;border:0!important}';
    document.head.appendChild(st)}
  function hide(e){if(e)e.classList.add("npFamHide")}
  function run(){
    var i=0;
    [].forEach.call(document.querySelectorAll("#cats .cat"),function(c){
      var t=c.textContent;
      if(/night ?clubs?|after ?party/i.test(t)){hide(c);return}
      c.style.setProperty("--npc",PAL[(i++)%PAL.length]);
      if(c.classList.contains("npHas3d"))return;
      for(var k=0;k<MAP.length;k++)if(MAP[k][0].test(t)){var sp=c.querySelector("span");if(!sp)break;
        var im=document.createElement("img");im.className="npCat3d";im.alt="";im.src=P+MAP[k][1]+".webp";im.loading="lazy";
        im.onerror=function(){c.classList.remove("npHas3d");this.remove()};sp.appendChild(im);c.classList.add("npHas3d");break}
    });
    [].forEach.call(document.querySelectorAll("#explore .lrow"),function(r){if(/club/i.test(r.textContent)&&!/beach/i.test(r.textContent)){hide(r);hide(r.nextElementSibling)}});
    [].forEach.call(document.querySelectorAll("#explore .club,#explore .rcard"),function(c){if(/night ?club|indian club|after.?party|after 2 am|\bclub\b(?! beach)/i.test(c.textContent)&&!/beach club/i.test(c.textContent))hide(c)});
    [].forEach.call(document.querySelectorAll("#explore button"),function(b){if(b.children.length<2&&/^\s*night clubs/i.test(b.textContent)&&!b.closest("#cats"))hide(b)});
  }
  run();window.addEventListener("load",run);setTimeout(run,1500);setTimeout(run,4000);
  var t=null;new MutationObserver(function(){clearTimeout(t);t=setTimeout(run,300)}).observe(document.getElementById("explore")||document.body,{childList:true,subtree:true});
})();


/* ===== 18 Oct 2026 (Rahul): Family mode – venue card pictures become soft pastel with a 3D icon (Singles unchanged, nothing deleted). ===== */
(function(){
  var P="family-icons/icon-";
  var MAP=[[/only veg|pure veg/i,"veg"],[/veg & non|indian restaurant|north indian|south indian/i,"thali-round"],[/chai|spices|grocer/i,"grocery-basket"],[/hotel|resort/i,"concierge-bell"],
    [/beach/i,"beachclub"],[/rental|cars? &|bike/i,"car-key"],[/water/i,"jetski"],[/golf/i,"golf-flag"],[/yacht|boat/i,"yacht"],[/airport/i,"name-board"],[/shopping|market|mall/i,"shopping-bags"],
    [/event|party planning|gala/i,"balloons"],[/concierge/i,"concierge-bell"],[/visa|ticket/i,"passport"],[/jet/i,"private-jet"],[/tour|excursion|island/i,"ticket-star"],[/spa|massage/i,"lotus-female"],[/restaurant|kitchen|thai|seafood/i,"thali-round"]];
  var PAL=["#ffe1cf","#d9ecff","#e0f5d8","#fde7ff","#fff0c2","#e8e3ff","#d6f5ee","#ffe4ec"];
  if(!document.getElementById("npFamArtCss")){var st=document.createElement("style");st.id="npFamArtCss";var S="html.np-fam ";
    st.textContent=S+'.art.npArtOn{background:var(--npa,#ffe1cf)!important;background-image:none!important;filter:none!important;opacity:1!important;position:relative;overflow:hidden}'+
    S+'.art.npArtOn svg,'+S+'.art.npArtOn canvas{display:none!important}'+
    S+'.art.npArtOn *{color:#2b2140!important;-webkit-text-fill-color:#2b2140!important;text-shadow:none!important}'+
    S+'.art.npArtOn span{background:rgba(255,255,255,.7)!important;border-color:transparent!important;box-shadow:none!important}'+
    S+'.art.npArtOn::before,'+S+'.art.npArtOn::after{display:none!important}'+
    '.npArt3d{display:none}'+S+'.art.npArtOn .npArt3d{display:block;position:absolute;right:12px;top:12px;width:84px;height:84px;object-fit:contain;pointer-events:none;z-index:0}';
    document.head.appendChild(st)}
  function run(){
    var i=0;
    [].forEach.call(document.querySelectorAll(".club .art,.rcard .art"),function(a){
      if(a.classList.contains("npArtOn"))return;
      var card=a.closest(".club,.rcard");var t=(card?card.textContent:a.textContent)||"";
      var ic=null;for(var k=0;k<MAP.length;k++)if(MAP[k][0].test(t)){ic=MAP[k][1];break}
      if(!ic)return;
      a.style.setProperty("--npa",PAL[(i++)%PAL.length]);
      var im=document.createElement("img");im.className="npArt3d";im.alt="";im.loading="lazy";im.src=P+ic+".webp";
      im.onerror=function(){a.classList.remove("npArtOn");im.remove()};a.appendChild(im);a.classList.add("npArtOn");
    });
  }
  run();window.addEventListener("load",run);setTimeout(run,1500);setTimeout(run,4000);
  var t=null;new MutationObserver(function(){clearTimeout(t);t=setTimeout(run,300)}).observe(document.body,{childList:true,subtree:true});
})();


/* ===== 18 Oct 2026 (Rahul): Family mode – service page top banner in soft pastel too (Singles unchanged). ===== */
(function(){
  if(document.getElementById("npFamHeroCss"))return;var st=document.createElement("style");st.id="npFamHeroCss";var S="html.np-fam ";
  st.textContent=S+'.svchero{background:#ffe1cf!important;background-image:none!important;border:0!important;border-radius:24px!important;box-shadow:inset 0 -6px 0 rgba(0,0,0,.06),0 8px 18px rgba(140,90,40,.12)!important}'+
  S+'.svchero *{color:#2b2140!important;-webkit-text-fill-color:#2b2140!important;text-shadow:none!important}'+
  S+'.svchero svg,'+S+'.svchero canvas{opacity:.25}';
  document.head.appendChild(st);
})();


/* ===== 19 Oct 2026 (Rahul): No Boomer in Family mode. Boomer tab, tiles and Raju's Boomer suggestions are only HIDDEN in Family mode;
   Singles mode unchanged, nothing deleted. ===== */
(function(){
  if(!document.getElementById("npFamNoBoomerCss")){var st=document.createElement("style");st.id="npFamNoBoomerCss";var S="html.np-fam ";
    st.textContent=S+'.tabs button[data-tab="buddy"],'+S+'[data-go="buddy"],'+S+'.bo,'+S+'#buddy{display:none!important}'+
    S+'#quick .npCtxB.npBoomer{display:none!important}';
    document.head.appendChild(st)}
  function mark(){[].forEach.call(document.querySelectorAll("#quick .npCtxB"),function(b){if(/boomer/i.test(b.textContent))b.classList.add("npBoomer")});
    if(document.documentElement.classList.contains("np-fam")){var bd=document.getElementById("buddy");if(bd&&!bd.hidden&&typeof go==="function")go("explore")}}
  setInterval(mark,800);
  /* Raju: in Family mode never suggest Boomer */
  try{
    if(window.supabase&&window.supabase.createClient&&!window.__npNoBoomerWrapped){
      var c=window.supabase.createClient("https://mymtgbmcjbwsnetzwgoy.supabase.co","sb_publishable_ViFodxG8kAENr78Fyp-BwQ_iA_BfAD0",{auth:{persistSession:false,autoRefreshToken:false,storageKey:"np-invoke-probe2"}});
      var proto=c&&c.functions&&Object.getPrototypeOf(c.functions);
      if(proto&&typeof proto.invoke==="function"){window.__npNoBoomerWrapped=true;var orig=proto.invoke;
        proto.invoke=function(name,opts){try{if(name==="bright-responder"&&document.documentElement.classList.contains("np-fam")&&opts&&opts.body&&typeof opts.body.venues==="string"&&opts.body.venues.indexOf("only a translator")<0&&opts.body.venues.indexOf("NO BOOMER")<0){
          var b={};for(var k in opts.body)b[k]=opts.body[k];b.venues=opts.body.venues+"\nNO BOOMER (Family mode): never mention or suggest Boomer or meeting new people. Suggest family activities instead.";
          var o={};for(var k2 in opts)o[k2]=opts[k2];o.body=b;opts=o}}catch(e){}return orig.call(this,name,opts)}}
    }
  }catch(e){}
})();


/* ===== 19 Oct 2026 (Rahul): Raju glow toned down (thin colour ring, no neon glow, no pulsing). ===== */
(function(){
  if(document.getElementById("npRajuCalmCss"))return;var st=document.createElement("style");st.id="npRajuCalmCss";
  st.textContent='#rajuStage .npRajuG{box-shadow:0 2px 8px rgba(0,0,0,.18)!important;padding:3px!important;animation:none!important}'+
  '#rajuStage::before,#rajuStage::after{opacity:.3!important}'+
  '#rajuStage .glow,#rajuStage [class*="glow"],#rajuStage [class*="halo"]{opacity:.3!important}'+
  '.rajufab{box-shadow:0 3px 8px rgba(0,0,0,.2)!important}.rajufab .npRajuAllImg{filter:none!important}.rajufab::before,.rajufab::after{opacity:.25!important}';
  document.head.appendChild(st);
})();


/* ===== 19 Oct 2026 (Rahul): Raju language guard. After every Raju reply the app checks the script.
   If the reply mixes languages (e.g. Bengali/Urdu inside a Punjabi reply), it is rewritten fully into the app language
   BEFORE the guest sees or hears it, and the clean version is kept in chat memory. Nothing removed. ===== */
(function(){
  var NAMES={en:"English",hi:"Hindi (Devanagari script)",pa:"Punjabi (Gurmukhi script)",gu:"Gujarati (Gujarati script)",ta:"Tamil (Tamil script)",mr:"Marathi (Devanagari script)",th:"Thai (Thai script)",bn:"Bengali (Bengali script)",te:"Telugu (Telugu script)",bho:"Bhojpuri (Devanagari script)"};
  var SCRIPT={deva:/[\u0900-\u097F]/g,guru:/[\u0A00-\u0A7F]/g,guj:/[\u0A80-\u0AFF]/g,beng:/[\u0980-\u09FF]/g,taml:/[\u0B80-\u0BFF]/g,telu:/[\u0C00-\u0C7F]/g,thai:/[\u0E00-\u0E7F]/g,arab:/[\u0600-\u06FF]/g};
  var OWN={hi:"deva",mr:"deva",bho:"deva",pa:"guru",gu:"guj",bn:"beng",ta:"taml",te:"telu",th:"thai"};
  function count(s,re){var m=s.match(re);return m?m.length:0}
  function mixed(text,l){
    var s=String(text||"").replace(/IDS:.*$/m,"");
    var own=OWN[l]||null;
    for(var k in SCRIPT){if(k===own)continue;if(count(s,SCRIPT[k])>=3)return true}
    if(l==="en")return false;
    /* a run of 5+ English/Hinglish words in a non-English reply = mixed (venue names are short) */
    return /(?:\b[A-Za-z']{2,}\b[\s,!?.:-]+){5,}/.test(s.replace(/\b\d[\d,.]*\b/g," "));
  }
  window.npRajuMixed=mixed;
  function wrap(){
    try{
      if(!window.supabase||!window.supabase.createClient||window.__npLangGuard)return;
      var c=window.supabase.createClient("https://mymtgbmcjbwsnetzwgoy.supabase.co","sb_publishable_ViFodxG8kAENr78Fyp-BwQ_iA_BfAD0",{auth:{persistSession:false,autoRefreshToken:false,storageKey:"np-invoke-probe3"}});
      var proto=c&&c.functions&&Object.getPrototypeOf(c.functions);if(!proto||typeof proto.invoke!=="function")return;
      window.__npLangGuard=true;var orig=proto.invoke;
      proto.invoke=async function(name,opts){
        var r=await orig.call(this,name,opts);
        try{
          if(name!=="bright-responder"||!opts||!opts.body||typeof opts.body.venues!=="string"||opts.body.venues.indexOf("only a translator")>=0)return r;
          var l=opts.body.lang;try{l=l||localStorage.getItem("np_lang")}catch(e){}
          if(!NAMES[l])l="en";
          var rep=r&&!r.error&&r.data&&r.data.reply;if(!rep||!mixed(rep,l))return r;
          var idsLine=(String(rep).match(/IDS:.*$/m)||[""])[0];
          var msg="REWRITE TASK (not a guest question). Rewrite this reply completely in "+NAMES[l]+
            (l==="en"?" (English letters only)":" using only "+NAMES[l]+" script")+". Keep the same meaning and friendly tone. "+
            "Keep venue names, prices, ฿ amounts and phone numbers exactly as they are. No other language, no Hinglish, no extra words. Reply with ONLY the rewritten text.\n\n"+
            String(rep).replace(/IDS:.*$/m,"").trim();
          var t=orig.call(this,"bright-responder",{body:{messages:[{role:"user",text:msg}],venues:"For this message you are only a translator. Do not act as Raju, do not add anything else.",lang:l}});
          var f=await Promise.race([t,new Promise(function(ok){setTimeout(function(){ok(null)},20000)})]);
          var fixed=f&&!f.error&&f.data&&f.data.reply;
          if(fixed&&!mixed(fixed,l)){var d={};for(var k in r.data)d[k]=r.data[k];d.reply=String(fixed).replace(/IDS:.*$/m,"").trim()+(idsLine?"\n"+idsLine:"");return {data:d,error:null}}
        }catch(e){}
        return r;
      };
    }catch(e){}
  }
  wrap();window.addEventListener("load",wrap);setTimeout(wrap,2000);
})();


/* ===== 19 Oct 2026 (Rahul): Family mode – full posters (with Rahul character) at the top of service pages, with fun animation.
   The old top card of those pages is only HIDDEN in Family mode (not deleted). Singles mode unchanged.
   Images in /family-posters/poster-<name>.webp ===== */
(function(){
  var P="family-posters/poster-";
  var MAP=[[/only veg/i,"veg"],[/grocer/i,"grocery"],[/golf/i,"golf"],[/event|gala|parties/i,"events"],[/beach club/i,"beach"],[/yacht|boat/i,"yacht-v2"],[/shopping|mall|market/i,"shopping"],[/indian restaurant|indian food|veg/i,"indian"],[/airport/i,"airport"],
    [/spa|massage/i,"spa"],[/water sport/i,"water"],[/hotel|resort/i,"hotels"],[/rental|cars? &|bike/i,"rental"],[/concierge/i,"concierge"],[/private jet/i,"jet"],[/visa/i,"visa"]];
  if(!document.getElementById("npFamPosterCss")){var st=document.createElement("style");st.id="npFamPosterCss";
    st.textContent='.npFamPoster{display:none}'+
    'html.np-fam .npFamPoster{display:block;position:relative;margin:0 0 16px;border-radius:26px;overflow:hidden;cursor:pointer;'+
      'box-shadow:inset 0 -6px 0 rgba(0,0,0,.06),0 12px 26px rgba(140,90,40,.25);animation:npPIn .7s cubic-bezier(.2,1.4,.4,1) both}'+
    'html.np-fam .npFamPoster img{display:block;width:100%;height:auto;animation:npPZoom 9s ease-in-out infinite alternate;transform-origin:50% 30%}'+
    'html.np-fam .npFamPoster::after{content:"";position:absolute;top:0;left:-60%;width:40%;height:100%;pointer-events:none;'+
      'background:linear-gradient(105deg,transparent,rgba(255,255,255,.45),transparent);animation:npPShine 4.5s ease-in-out infinite}'+
    'html.np-fam .npFamPoster .spk{position:absolute;width:8px;height:8px;border-radius:50%;background:#fff;box-shadow:0 0 10px 3px rgba(255,214,120,.9);opacity:0;animation:npPSpark 3s ease-in-out infinite;pointer-events:none}'+
    'html.np-fam .npFamPoster:active{transform:scale(.97);transition:transform .15s}'+
    'html.np-fam .npFamPoster.bounce{animation:npPBounce .5s ease}'+
    'html.np-fam .svchero.npPosterOn{display:none!important}'+
    '@keyframes npPIn{from{opacity:0;transform:translateY(30px) scale(.95)}to{opacity:1;transform:none}}'+
    '@keyframes npPZoom{from{transform:scale(1)}to{transform:scale(1.06)}}'+
    '@keyframes npPShine{0%,60%{left:-60%}100%{left:130%}}'+
    '@keyframes npPSpark{0%,100%{opacity:0;transform:scale(.4)}50%{opacity:1;transform:scale(1.2)}}'+
    '@keyframes npPBounce{0%,100%{transform:scale(1)}40%{transform:scale(.95)}70%{transform:scale(1.03)}}'+
    '@media (prefers-reduced-motion:reduce){html.np-fam .npFamPoster,html.np-fam .npFamPoster img,html.np-fam .npFamPoster::after,html.np-fam .npFamPoster .spk{animation:none!important}}';
    document.head.appendChild(st)}
  var SPK=[[12,18,0],[82,12,.8],[70,40,1.6],[18,55,2.2],[88,70,.4],[30,85,1.2]];
  function run(){
    var R=document.documentElement;
    var heroes=document.querySelectorAll(".svchero");
    [].forEach.call(heroes,function(h){
      var prev=h.previousElementSibling,has=prev&&prev.classList&&prev.classList.contains("npFamPoster");
      var t=(h.querySelector("h1,h2,h3")||h).textContent||"";
      var key=null;for(var i=0;i<MAP.length;i++)if(MAP[i][0].test(t)){key=MAP[i][1];break}
      if(has&&prev.dataset.k!==key){prev.remove();has=false}
      if(!key){h.classList.remove("npPosterOn");return}
      h.classList.add("npPosterOn");if(has)return;
      var d=document.createElement("div");d.className="npFamPoster";d.dataset.k=key;d.setAttribute("role","img");d.setAttribute("aria-label",t.trim());
      var im=document.createElement("img");im.alt="";im.decoding="async";im.src=P+key+".webp";
      im.onerror=function(){d.remove();h.classList.remove("npPosterOn")};
      d.appendChild(im);
      SPK.forEach(function(s){var e=document.createElement("span");e.className="spk";e.style.left=s[0]+"%";e.style.top=s[1]+"%";e.style.animationDelay=s[2]+"s";d.appendChild(e)});
      d.onclick=function(){d.classList.remove("bounce");void d.offsetWidth;d.classList.add("bounce");
        var n=h.nextElementSibling;var tgt=n||h;setTimeout(function(){var y=tgt.getBoundingClientRect().top+scrollY-80;window.scrollTo({top:y,behavior:"smooth"})},250)};
      h.parentNode.insertBefore(d,h);
    });
  }
  var t=null;new MutationObserver(function(){clearTimeout(t);t=setTimeout(run,120)}).observe(document.body,{childList:true,subtree:true});
  run();
})();



/* ===== 20 Oct 2026 (Rahul): Map look. Singles = dark map (CSS filter on the free OpenStreetMap tiles), Family = normal light map.
   Venue photos and pins are not filtered. Nothing removed. ===== */
(function(){
  if(document.getElementById("npMapThemeCss"))return;var st=document.createElement("style");st.id="npMapThemeCss";
  st.textContent='#npMapEl .leaflet-tile-pane{filter:invert(1) hue-rotate(180deg) brightness(.85) contrast(.9) saturate(.7)}'+
  'html.np-fam #npMapEl .leaflet-tile-pane{filter:saturate(.9) brightness(1.02)}'+
  '#npMapEl{background:#1b1b22}html.np-fam #npMapEl{background:#f2efe9}';
  document.head.appendChild(st);
})();



/* ===== 20 Oct 2026 (Rahul): MapTiler logo on the map (required by the MapTiler free plan). ===== */
(function(){
  function add(){var m=document.getElementById("npMapEl");if(!m||m.querySelector(".npMtLogo"))return;
    var a=document.createElement("a");a.className="npMtLogo";a.href="https://www.maptiler.com";a.target="_blank";a.rel="noopener";
    a.style.cssText="position:absolute;left:12px;bottom:66px;z-index:800;display:block;width:67px;height:20px";
    a.innerHTML='<img src="https://api.maptiler.com/resources/logo.svg" alt="MapTiler logo" style="width:100%;height:100%;display:block">';
    m.appendChild(a)}
  setInterval(add,1500);
})();


/* ===== 20 Oct 2026 (Rahul): FIRST-OPEN WELCOME. When the app opens for the first time (after the lock and the opening animation):
   Step 1 choose language, Step 2 "Alone / with friends" or "With family". Shown only once per phone.
   The big Singles/Family switch on the home page is made into a small switch (same buttons, nothing removed). ===== */
(function(){
  var DONE="np_welcome_done";
  var LANGS=[["en","English","English"],["hi","हिंदी","Hindi"],["pa","ਪੰਜਾਬੀ","Punjabi"],["gu","ગુજરાતી","Gujarati"],["mr","मराठी","Marathi"],
    ["ta","தமிழ்","Tamil"],["th","ไทย","Thai"],["bn","বাংলা","Bengali"],["te","తెలుగు","Telugu"],["bho","भोजपुरी","Bhojpuri"]];
  if(!document.getElementById("npWelcomeCss")){var st=document.createElement("style");st.id="npWelcomeCss";
    st.textContent=
    /* small switch on home */
    '#npModeSw{display:inline-flex!important;width:auto!important;margin:0 0 12px auto!important;padding:3px!important;gap:2px!important;border-radius:999px!important;float:none}'+
    '#npModeSw button{flex:0 0 auto!important;min-height:30px!important;height:30px;padding:0 14px!important;font-size:12.5px!important;border-radius:999px!important}'+
    '.npSwRow{display:flex;justify-content:flex-end}'+
    /* welcome */
    '#npWel{position:fixed;inset:0;z-index:2147483600;display:flex;align-items:flex-end;justify-content:center;background:rgba(7,7,15,.72);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);font-family:inherit}'+
    '#npWel .sh{width:100%;max-width:480px;max-height:92vh;overflow:auto;background:linear-gradient(180deg,#1f1640,#120c26);color:#fff;border-radius:28px 28px 0 0;padding:22px 18px calc(22px + env(safe-area-inset-bottom,0px));box-sizing:border-box;animation:npWelUp .45s cubic-bezier(.2,1.2,.4,1)}'+
    '#npWel h2{margin:4px 0 4px;font-size:22px;text-align:center}#npWel .sub{margin:0 0 16px;text-align:center;color:#cfc8ea;font-size:14px}'+
    '#npWel .dots{display:flex;justify-content:center;gap:6px;margin-bottom:10px}#npWel .dots i{width:8px;height:8px;border-radius:50%;background:#3d3366}#npWel .dots i.on{background:#ff7a3d;width:22px;border-radius:6px}'+
    '#npWel .lg{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}'+
    '#npWel .lg button{min-height:58px;border:1px solid #3d3366;background:#241b48;color:#fff;border-radius:16px;font:inherit;font-size:17px;text-align:left;padding:8px 14px;cursor:pointer}'+
    '#npWel .lg button small{display:block;font-size:12px;color:#b9b0dc}'+
    '#npWel .lg button.on{border-color:#ff7a3d;background:#3a2350}'+
    '#npWel .tv{display:flex;flex-direction:column;gap:12px}'+
    '#npWel .tv button{display:flex;align-items:center;gap:14px;border:0;border-radius:22px;padding:16px;text-align:left;font:inherit;cursor:pointer;min-height:92px}'+
    '#npWel .tv .s{background:linear-gradient(135deg,#ff8a3d,#ff3d7f);color:#fff}'+
    '#npWel .tv .f{background:#fff4e8;color:#2b2140;box-shadow:inset 0 -6px 0 rgba(0,0,0,.06)}'+
    '#npWel .tv img{width:64px;height:64px;object-fit:contain;flex-shrink:0}'+'#npWel .tv img.fam{width:72px;height:72px;object-fit:cover;object-position:62% 42%;border-radius:18px;box-shadow:inset 0 -4px 0 rgba(0,0,0,.08)}'+'#npWel .tv .ng{width:64px;height:64px;flex-shrink:0;border-radius:18px;display:flex;align-items:center;justify-content:center;background:rgba(20,11,38,.55);border:1px solid rgba(255,255,255,.35);box-shadow:0 0 14px rgba(255,255,255,.25) inset}'+
    '#npWel .tv b{display:block;font-size:19px}#npWel .tv span{font-size:13px;opacity:.85}'+
    '#npWel .nt{margin:14px 0 0;text-align:center;font-size:12.5px;color:#b9b0dc}'+
    '@keyframes npWelUp{from{transform:translateY(60px);opacity:0}to{transform:none;opacity:1}}';
    document.head.appendChild(st)}
  function done(){try{return localStorage.getItem(DONE)==="1"}catch(e){return true}}
  function curLang(){try{return localStorage.getItem("np_lang")||"en"}catch(e){return "en"}}
  function step2(o){
    o.querySelector(".sh").innerHTML='<div class="dots"><i></i><i class="on"></i></div><h2>Who is travelling?</h2><p class="sub">We will show the right places for your trip</p>'+
      '<div class="tv"><button class="s" data-m="singles"><span class="ng" aria-hidden="true"><svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5"/><circle cx="17" cy="9" r="2.4"/><path d="M15.5 14.2c2.6.2 4.5 2 4.5 4.8"/><path d="M19 3.5l.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6z"/></svg></span><div><b>Alone or with friends</b><span>Clubs, beach clubs, nightlife, food, tours</span></div></button>'+
      '<button class="f" data-m="family"><img class="fam" src="family-posters/poster-yacht-v2.webp" alt="" onerror="this.onerror=null;this.src=\'family-icons/icon-two-people.webp\';this.className=\'\'"><div><b>With family</b><span>Kids, elders, just married · water parks, temples, pure veg</span></div></button></div>'+
      '<p class="nt">You can change this anytime with the small switch on the home page</p>';
    o.querySelectorAll(".tv button").forEach(function(b){b.onclick=function(){
      var m=b.dataset.m;try{localStorage.setItem("np_mode",m);localStorage.setItem(DONE,"1");sessionStorage.removeItem("np_wel_step")}catch(e){}
      var sw=document.querySelector('#npModeSw button[data-m="'+m+'"]');if(sw)sw.click();
      o.remove();document.documentElement.style.overflow="";window.scrollTo(0,0)}});
  }
  function show(){
    if(done()||document.getElementById("npWel"))return;
    var o=document.createElement("div");o.id="npWel";o.className="notranslate";o.setAttribute("translate","no");o.setAttribute("role","dialog");o.setAttribute("aria-label","Welcome");
    var stp=null;try{stp=sessionStorage.getItem("np_wel_step")}catch(e){}
    if(stp==="2"){o.innerHTML='<div class="sh"></div>';document.body.appendChild(o);document.documentElement.style.overflow="hidden";step2(o);return}
    var c=curLang();
    o.innerHTML='<div class="sh"><div class="dots"><i class="on"></i><i></i></div><h2>Namaste! Choose your language</h2><p class="sub">भाषा चुनें · ภาษา</p><div class="lg">'+
      LANGS.map(function(l){return '<button data-l="'+l[0]+'"'+(l[0]===c?' class="on"':'')+'>'+l[1]+'<small>'+l[2]+'</small></button>'}).join("")+'</div></div>';
    document.body.appendChild(o);document.documentElement.style.overflow="hidden";
    o.querySelectorAll(".lg button").forEach(function(b){b.onclick=function(){
      var l=b.dataset.l;try{sessionStorage.setItem("np_wel_step","2")}catch(e){}
      step2(o);
      if(l!==curLang()){if(typeof window.npFastLang==="function")window.npFastLang(l);else{try{localStorage.setItem("np_lang",l)}catch(e){}}}
      }});
  }
  function ready(){
    if(done())return;
    if(document.getElementById("npLock2")||document.documentElement.classList.contains("npLocked"))return setTimeout(ready,800);
    var sp=document.querySelector("#npSplash,#npOpen,#npOpening,.npOpening");if(sp&&sp.offsetParent!==null)return setTimeout(ready,600);
    show();
  }
  if(document.readyState==="complete")setTimeout(ready,1800);else window.addEventListener("load",function(){setTimeout(ready,1800)});
  setInterval(function(){if(!done()&&!document.getElementById("npWel")&&!document.documentElement.classList.contains("npLocked")){var s2=null;try{s2=sessionStorage.getItem("np_wel_step")}catch(e){}if(s2==="2")show()}},1200);
})();


/* ===== 20 Oct 2026 (Rahul): Partner sign-up asks for the BUSINESS LOCATION.
   Options: "Use my current location" (GPS, best when the partner is at the venue) or paste a Google Maps link.
   Required for venues (club, restaurant, hotel, spa); optional for Transport / Other.
   Saved after the partner signs in into np_partner_requests (lat, lng, maps_link). Nothing removed. ===== */
(function(){
  if(typeof panel==="undefined")return;
  var KEY="np_pending_venue_loc",loc=null;
  function needs(v){return !/transport|other/i.test(String(v||""))}
  function parse(link){var s=String(link||""),m;
    if((m=s.match(/@(-?\d{1,2}\.\d+),\s*(-?\d{1,3}\.\d+)/)))return [+m[1],+m[2]];
    if((m=s.match(/!3d(-?\d{1,2}\.\d+)!4d(-?\d{1,3}\.\d+)/)))return [+m[1],+m[2]];
    if((m=s.match(/[?&](?:q|query|ll|destination)=(-?\d{1,2}\.\d+),\s*(-?\d{1,3}\.\d+)/)))return [+m[1],+m[2]];
    if((m=s.match(/^\s*(-?\d{1,2}\.\d{3,})\s*,\s*(-?\d{1,3}\.\d{3,})\s*$/)))return [+m[1],+m[2]];
    return null}
  function okPattaya(p){return p&&p[0]>12.4&&p[0]<14.2&&p[1]>100.4&&p[1]<101.4}
  if(!document.getElementById("npLocCss")){var st=document.createElement("style");st.id="npLocCss";
    st.textContent='#npLocWrap .r{display:flex;gap:8px;flex-wrap:wrap;margin-top:6px}#npLocWrap button{min-height:44px;border-radius:12px;padding:0 14px;font:inherit;font-weight:600;cursor:pointer;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.08);color:inherit}'+
    '#npLocWrap .ok{margin-top:8px;padding:10px 12px;border-radius:12px;background:rgba(93,202,165,.15);border:1px solid rgba(93,202,165,.5);font-size:14px}#npLocWrap .ok a{color:#5dcaa5}'+
    '#npLocWrap .hint{display:block;font-size:12.5px;opacity:.75;margin-top:4px}#npLocWrap input{margin-top:6px}';
    document.head.appendChild(st)}
  function show(lab){var o=lab.querySelector(".ok");
    if(loc&&loc.lat){o.style.display="";o.innerHTML='Location saved: '+loc.lat.toFixed(5)+', '+loc.lng.toFixed(5)+' · <a href="https://www.openstreetmap.org/?mlat='+loc.lat+'&mlon='+loc.lng+'#map=18/'+loc.lat+'/'+loc.lng+'" target="_blank" rel="noopener">Check on map</a>'}
    else if(loc&&loc.link){o.style.display="";o.textContent="Google Maps link saved. Our team will check the exact pin."}
    else o.style.display="none"}
  function build(){
    var t=panel.querySelector("#ppT"),go=panel.querySelector("#ppGo");
    if(!t||!go||panel.querySelector("#npLocWrap"))return;
    loc=null;
    var lab=document.createElement("div");lab.className="full";lab.id="npLocWrap";
    lab.innerHTML='<label class="full" style="display:block">Business location<span class="hint">Guests will see your place on the map. Best: tap the button while you are at your business.</span></label>'+
      '<div class="r"><button type="button" id="npLocGps">Use my current location</button></div>'+
      '<input id="npLocLink" type="url" inputmode="url" placeholder="Or paste your Google Maps link" aria-label="Google Maps link">'+
      '<div class="ok" style="display:none" role="status"></div>';
    var after=panel.querySelector("#npVPhotoWrap")||(t.closest("label")||t);after.insertAdjacentElement("afterend",lab);
    function vis(){lab.style.display=needs(t.value)?"":"none"}t.addEventListener("change",vis);vis();
    lab.querySelector("#npLocGps").onclick=function(){var b=this;
      if(!navigator.geolocation){b.textContent="Location not available, paste a link";return}
      b.textContent="Finding your location…";
      navigator.geolocation.getCurrentPosition(function(p){loc={lat:p.coords.latitude,lng:p.coords.longitude,acc:Math.round(p.coords.accuracy||0)};b.textContent="Use my current location";show(lab)},
        function(){b.textContent="Allow location, or paste a Google Maps link"},{enableHighAccuracy:true,timeout:15000,maximumAge:0})};
    lab.querySelector("#npLocLink").oninput=function(){var v=this.value.trim();if(!v){if(loc&&loc.link&&!loc.lat)loc=null;show(lab);return}
      var p=parse(v);loc=p?{lat:p[0],lng:p[1],link:v}:{link:v};show(lab)};
    go.addEventListener("click",function(e){
      if(!needs(t.value))return;
      var m=panel.querySelector("#ppM");
      if(!loc){e.preventDefault();e.stopImmediatePropagation();if(m)m.textContent="Please add your business location (button or Google Maps link).";return}
      if(loc.lat&&!okPattaya([loc.lat,loc.lng])&&!loc.link){e.preventDefault();e.stopImmediatePropagation();if(m)m.textContent="This location is not in Pattaya. Please go to your business and try again, or paste a Google Maps link.";return}
      var em=panel.querySelector("#ppE");try{localStorage.setItem(KEY,JSON.stringify({email:(em?em.value.trim().toLowerCase():""),lat:loc.lat||null,lng:loc.lng||null,link:loc.link||null}))}catch(err){}
    },true);
  }
  var busy=false;
  new MutationObserver(function(){if(busy)return;busy=true;requestAnimationFrame(function(){busy=false;build()})}).observe(panel,{childList:true,subtree:true});
  async function save(client,user){
    try{var raw=localStorage.getItem(KEY);if(!raw)return;var p=JSON.parse(raw);
      if(p.email&&user.email&&p.email!==user.email.toLowerCase())return;
      var d={lat:p.lat,lng:p.lng,maps_link:p.link};
      var u=await client.from("np_partner_requests").update(d).eq("user_id",user.id).select("id");
      if(u.error||!u.data||!u.data.length){var md=user.user_metadata||{};
        var i=await client.from("np_partner_requests").insert(Object.assign({email:user.email,venue_name:md.venue||null,venue_type:md.venue_type||null,contact_name:md.name||null,phone:md.phone||null},d));
        if(i.error)return}
      localStorage.removeItem(KEY)}catch(e){}
  }
  try{if(window.supabase){var c=window.supabase.createClient("https://mymtgbmcjbwsnetzwgoy.supabase.co","sb_publishable_ViFodxG8kAENr78Fyp-BwQ_iA_BfAD0",{auth:{storageKey:undefined}});
    c.auth.onAuthStateChange(function(ev,s){if(s&&s.user&&(s.user.user_metadata||{}).role==="partner")setTimeout(function(){save(c,s.user)},2500)})}}catch(e){}
})();


/* ===== 20 Oct 2026 (Rahul): Family mode clean-up.
   1) Empowered Girls (ladies lounge) not shown in Family.  2) Night clubs ARE shown in Family (tile + club cards).
   3) Every service only ONCE on the page: duplicates are hidden (old Taxi/Refer tiles, Gold area, duplicate tiles in "All services", extra "Taxi" tile).
   4) 3D icons pop out of their cards.  Only hidden in Family mode, nothing deleted. Singles unchanged. ===== */
(function(){
  if(!document.getElementById("npFamDedupCss")){var st=document.createElement("style");st.id="npFamDedupCss";var S="html.np-fam ";
    st.textContent=S+'.npFamDup{display:none!important}'+
    S+'.npFamHide.npClubOk{display:revert!important}'+
    /* 3D pop-out: family home tiles */
    S+'#npFamHome .fg{row-gap:26px;padding-top:18px}'+
    S+'#npFamHome .ft{overflow:visible!important;padding-top:44px!important;position:relative;border:2px solid rgba(255,255,255,.9)!important;box-shadow:inset 0 -6px 0 rgba(0,0,0,.07),0 10px 18px rgba(140,90,40,.16)!important}'+
    S+'#npFamHome .ft img{position:absolute;top:-26px;left:50%;transform:translateX(-50%);width:72px!important;height:72px!important;filter:drop-shadow(0 10px 8px rgba(80,50,20,.28));transition:transform .2s}'+
    S+'#npFamHome .ft:active img{transform:translateX(-50%) translateY(-4px) scale(1.06)}'+
    S+'#npFamHome .top .ft{padding-top:60px!important}'+S+'#npFamHome .top .ft img{width:88px!important;height:88px!important;top:-30px}'+
    S+'#npFamHome .top{padding-top:24px}'+
    /* 3D pop-out: all services tiles */
    S+'#cats{row-gap:30px!important;padding-top:20px}'+
    S+'#cats .cat.npHas3d{overflow:visible!important;position:relative;padding-top:58px!important;border:2px solid rgba(255,255,255,.9)!important}'+
    S+'#cats .cat.npHas3d>span{position:absolute!important;top:-24px;left:50%;transform:translateX(-50%);background:transparent!important;width:80px!important;height:80px!important;box-shadow:none!important}'+
    S+'#cats .cat.npHas3d .npCat3d{filter:drop-shadow(0 10px 8px rgba(80,50,20,.28))}';
    document.head.appendChild(st)}
  var FAM_DUP=/^(night ?clubs|vip beach|indian restaurants|indian groceries|hotels|cars|tours|water sports|golf|yacht|airport|namaste shopping|events|visa|private jet)/i;
  function fam(){return document.documentElement.classList.contains("np-fam")}
  function mark(el){if(el&&!el.classList.contains("npFamDup"))el.classList.add("npFamDup")}
  function addClubTile(){
    var home=document.getElementById("npFamHome");if(!home||home.querySelector(".npClubTile"))return;
    var heads=[].slice.call(home.querySelectorAll("h3")),h=heads.find(function(x){return /family fun/i.test(x.textContent)});
    var g=h&&h.nextElementSibling;if(!g)return;
    var b=document.createElement("button");b.type="button";b.className="ft npClubTile";b.style.background="#e8e3ff";
    b.innerHTML='<img src="family-icons/icon-nightclub.webp" alt="" loading="lazy"><div>Night clubs</div>';
    b.onclick=function(){if(typeof openService==="function")openService("nightlife")};
    g.appendChild(b);
  }
  function run(){
    addClubTile();
    var ex=document.getElementById("explore");if(!ex)return;
    /* Empowered Girls / ladies in Family */
    [].forEach.call(ex.querySelectorAll(".hubtile,.homeblk button,.homeblk>div,.homeblk a"),function(e){if(/empowered girls|ladies-only/i.test(e.textContent)&&e.textContent.length<200)mark(e)});
    var home=document.getElementById("npFamHome");
    if(home)[].forEach.call(home.querySelectorAll(".fg:not(.top) .ft"),function(b){var t=b.textContent.trim();if(/^girls group$/i.test(t)||/^taxi$/i.test(t))mark(b)});
    /* old home row + gold area duplicate the family tiles */
    [].forEach.call(ex.querySelectorAll(".tx,.rf,.goldarea"),mark);
    /* all services: hide tiles that already exist above */
    [].forEach.call(document.querySelectorAll("#cats .cat"),function(c){if(FAM_DUP.test(c.textContent.trim()))mark(c)});
    /* night clubs allowed in Family: show club cards / rows again */
    [].forEach.call(ex.querySelectorAll(".club.npFamHide,.rcard.npFamHide"),function(c){if(/club|lounge/i.test(c.textContent)&&!/boomer/i.test(c.textContent))c.classList.add("npClubOk")});
    [].forEach.call(ex.querySelectorAll(".lrow.npFamHide"),function(r){if(/club/i.test(r.textContent)){r.classList.add("npClubOk");var n=r.nextElementSibling;if(n&&n.classList.contains("npFamHide"))n.classList.add("npClubOk")}});
  }
  run();window.addEventListener("load",run);setTimeout(run,1500);setTimeout(run,4000);
  var t=null;new MutationObserver(function(){clearTimeout(t);t=setTimeout(run,350)}).observe(document.body,{childList:true,subtree:true});
})();


/* ===== 20 Oct 2026 (Rahul): FAMILY MODE CLEAN-UP
   - No service shown twice on the same page: in Family mode the old Taxi / Refer tiles, Empowered Girls card and big Gold card
     are only HIDDEN (they are already in the family icons), "All services" shows only services not already in the family icons.
   - Girls group tile hidden in Family, Night clubs + Spa tiles added. Pure veg opens Only-Veg restaurants, Indian thali opens Veg & Non-Veg.
   - 3D icons "pop out" of their tiles. Singles mode unchanged, nothing deleted. ===== */
(function(){
  var P="family-icons/icon-";
  var COVER=["beach","restaurants","indian","grocery","hotels","rental","spa","tours","water","golf","yacht","airport","shopping","events","visa","jet","nightlife"];
  if(!document.getElementById("npFamClean")){var st=document.createElement("style");st.id="npFamClean";var S="html.np-fam ";
    st.textContent=
      S+'.tx,'+S+'.rf,'+S+'.goldarea,'+S+'.npFamDup,'+S+'#explore .lrow.npFamHide,'+S+'#explore .lrow.npFamHide.npClubOk,'+S+'#explore .npFamHide.npClubOk{display:none!important}'+
      /* pop-out 3D tiles in family icons */
      /* pop-out in More services grid */
    document.head.appendChild(st)}
  function svc(c){return function(){if(typeof openService==="function")openService(c)}}
  function tile(icon,label,fn,bg){var b=document.createElement("button");b.type="button";b.className="ft npFamAdd";b.style.background=bg;
    b.innerHTML='<img src="'+P+icon+'.webp" alt="" loading="lazy"><div>'+label+'</div>';b.onclick=function(){try{fn()}catch(e){}};return b}
  function fixFamGrid(){
    var home=document.getElementById("npFamHome");if(!home||home.dataset.clean==="1")return;
    var tiles=[].slice.call(home.querySelectorAll(".ft"));
    function byText(re){return tiles.filter(function(b){return re.test(b.textContent.trim())})}
    byText(/^Girls group$/).forEach(function(b){b.classList.add("npFamDup")});
    var gTaxi=byText(/^Taxi$/);gTaxi.forEach(function(b){if(!b.closest(".top"))b.classList.add("npFamDup")});
    byText(/^Pure veg$/).forEach(function(b){b.onclick=svc("restaurants")});
    byText(/^Indian thali$/).forEach(function(b){b.onclick=svc("indian")});
    var h3=[].slice.call(home.querySelectorAll("h3"));
    var fun=h3.find(function(h){return /family fun/i.test(h.textContent)});
    if(fun){var g=fun.nextElementSibling;if(g&&!g.querySelector('.npFamAdd')){if(!home.querySelector('.npClubTile'))g.appendChild(tile("nightclub","Night clubs",svc("nightlife"),"#e8e3ff"));g.appendChild(tile("lotus-female","Spa",svc("spa"),"#ffe4ec"))}}
    home.dataset.clean="1";
  }
  function fixCats(){
    var fam=document.documentElement.classList.contains("np-fam");
    [].forEach.call(document.querySelectorAll("#cats .cat"),function(c,i){
      var id=(typeof CATS!=="undefined"&&CATS[i])?(CATS[i].id||CATS[i][0]):null;
      if(id&&COVER.indexOf(id)>=0)c.classList.toggle("npFamDup",fam);
    });
    var h=[].slice.call(document.querySelectorAll("#explore h2")).find(function(x){return /^(All|More) services$/i.test(x.textContent.trim())});
    if(h){if(fam){if(!h.dataset.orig)h.dataset.orig=h.textContent;h.textContent="More services"}else if(h.dataset.orig){h.textContent=h.dataset.orig}}
    [].forEach.call(document.querySelectorAll("#explore .hubtile"),function(t){if(/empowered girls|ladies|namaste taxi|refer/i.test(t.textContent))t.classList.add("npFamDupL")});
    var ladies=document.querySelector('#explore [data-go="ladies"]');if(ladies)ladies.classList.add("npFamDupL");
  }
  if(!document.getElementById("npFamCleanL")){var s2=document.createElement("style");s2.id="npFamCleanL";s2.textContent='html.np-fam .npFamDupL{display:none!important}';document.head.appendChild(s2)}
  function run(){fixFamGrid();fixCats()}
  run();setInterval(run,1200);
})();



/* ===== 20 Oct 2026 (Rahul): FAMILY MODE – everything clearly visible on the light cream background
   (header buttons, app name, tagline, Raju typing bar). Singles mode unchanged. ===== */
(function(){
  if(document.getElementById("npFamVis"))return;var st=document.createElement("style");st.id="npFamVis";var S="html.np-fam ";
  st.textContent=
  /* top header buttons: solid, readable */
  S+'header button,'+S+'.top button,'+S+'.hdr button,'+S+'.topbar button{opacity:1!important;filter:none!important}'+
  S+'.npHdrBtn{background:#fff!important;border-width:2px!important;box-shadow:0 4px 10px rgba(140,90,40,.15)!important;opacity:1!important}'+
  S+'.npHdrBtn *{opacity:1!important}'+
  S+'.npHdrBtn.p{border-color:#c98a1e!important;color:#9a5d00!important}'+S+'.npHdrBtn.p svg{stroke:#9a5d00!important}'+
  S+'.npHdrBtn.a{border-color:#d63f86!important;color:#b0216a!important}'+S+'.npHdrBtn.a svg{stroke:#b0216a!important}'+
  S+'.npHdrBtn.c{border-color:#2b2140!important;color:#2b2140!important}'+
  S+'.npHdrBtn.l{border-color:#1f8fa8!important;color:#11708a!important}'+S+'.npHdrBtn.l svg{stroke:#11708a!important}'+
  /* app name + tagline */
  S+'.npBrandTop{color:#2b2140!important;-webkit-text-fill-color:#2b2140!important;opacity:1!important}'+
  S+'.npTagOrange,'+S+'.tagline>span{background:linear-gradient(90deg,#d9661f,#a8740a 50%,#1f8a3a)!important;-webkit-background-clip:text!important;background-clip:text!important;color:transparent!important;-webkit-text-fill-color:transparent!important;opacity:1!important}'+  S+'.tagline small{color:#5a4f6e!important;opacity:1!important}'+  S+'svg.wordmark path:not([fill^="url"]){fill:#2b2140!important}'+S+'svg.wordmark{opacity:1!important}'+
  S+'.npTagMid{color:#5a4a1e!important;-webkit-text-fill-color:#5a4a1e!important;opacity:1!important}'+
  S+'.npTagGreen{color:#1f8a3a!important;-webkit-text-fill-color:#1f8a3a!important;opacity:1!important}'+
  /* Raju typing bar */
  S+'#rajuCard input,'+S+'#rajuIn{background:#fff!important;color:#2b2140!important;opacity:1!important}'+
  S+'.npAskBar{background:#fff!important;border:2px solid #f0c9a8!important;box-shadow:0 4px 12px rgba(140,90,40,.12)!important;opacity:1!important}'+
  S+'#rajuCard input::placeholder{color:#8a7b9e!important;opacity:1!important}'+
  S+'.npAskBar button{opacity:1!important}'+S+'.npAskBar svg{stroke:#2b2140!important;opacity:1!important}';
  document.head.appendChild(st);
  function tag(){
    /* header buttons by their label */
    [].forEach.call(document.querySelectorAll("button,a"),function(b){if(b.classList.contains("npHdrBtn"))return;var r=b.getBoundingClientRect();if(r.top+scrollY>260||r.height>80)return;
      var t=b.textContent.trim();var k=/^partner$/i.test(t)?"p":/^agent$/i.test(t)?"a":/^(฿|₹|\$)?\s*[A-Z]{3}$/.test(t)?"c":/^login$/i.test(t)?"l":null;if(k)b.classList.add("npHdrBtn",k)});
    /* brand + tagline */
    [].forEach.call(document.querySelectorAll("body *"),function(e){if(e.children.length||e.classList.contains("npBrandTop"))return;var r=e.getBoundingClientRect();if(r.top+scrollY>600)return;var t=e.textContent.trim();
      if(/^NAMASTE$/.test(t))e.classList.add("npBrandTop");
      else if(/^BHARAT KE LIYE/i.test(t))e.classList.add("npTagOrange");
      else if(/^BHARTIYE KA TOHFA/i.test(t))e.classList.add("npTagMid");
      else if(/^JAI HIND/i.test(t))e.classList.add("npTagGreen")});
    /* typing bar */
    var i=document.getElementById("rajuIn");if(i&&i.parentNode&&!i.parentNode.classList.contains("npAskBar"))i.parentNode.classList.add("npAskBar");
  }
  tag();setTimeout(tag,1500);setTimeout(tag,4000);
})();


/* ===== 20 Oct 2026 (Rahul): FAMILY HOME – Rahul's posters slide automatically (every 3 seconds) below the Raju card.
   Full pictures, swipe by hand too; tap a poster to open that service. Family mode only. Nothing removed. ===== */
(function(){
  var P="family-posters/poster-",LIST=[["taxi","#tile:Namaste Taxi"],["yacht-v2","yacht"],["beach","beach"],["veg","restaurants"],["indian","indian"],["gold","#gold"],["water","water"],["golf","golf"],["spa","spa"],["events","events"],["married","#tile:Just married"],["jet","jet"],["shopping","shopping"],["grocery","grocery"],["refer","#refer"],["airport","airport"],["hotels","hotels"],["visa","visa"],["concierge","concierge"],["rental","rental"]];
  if(!document.getElementById("npFamCarCss")){var st=document.createElement("style");st.id="npFamCarCss";
    st.textContent='#npFamCar{display:none}html.np-fam #npFamCar{display:block;margin:0 0 22px}'+
    '#npFamCar .trk{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;padding:4px 2px 10px;scrollbar-width:none}#npFamCar .trk::-webkit-scrollbar{display:none}'+
    '#npFamCar .it{flex:0 0 62%;scroll-snap-align:center;border:0;padding:0;border-radius:22px;overflow:hidden;cursor:pointer;background:#f6e6d6;'+
      'box-shadow:0 10px 22px rgba(140,90,40,.22);transform:scale(.94);transition:transform .35s}'+
    '#npFamCar .it.on{transform:scale(1)}#npFamCar .it img{display:block;width:100%;height:auto}'+
    '#npFamCar .dots{display:flex;justify-content:center;gap:6px}#npFamCar .dots i{width:7px;height:7px;border-radius:50%;background:#e6cdb6;transition:all .3s}#npFamCar .dots i.on{width:20px;border-radius:5px;background:#ff7a2f}'+
    '@media (prefers-reduced-motion:reduce){#npFamCar .trk{scroll-behavior:auto}}';
    document.head.appendChild(st)}
  var timer=null,idx=0,paused=0;
  function build(){
    if(document.getElementById("npFamCar"))return;
    var after=document.getElementById("rajuCard");if(!after||!after.parentNode)return;
    var w=document.createElement("section");w.id="npFamCar";w.setAttribute("aria-label","Family offers");
    w.innerHTML='<div class="trk">'+LIST.map(function(x,i){return '<button type="button" class="it'+(i===0?' on':'')+'" data-c="'+x[1]+'"><img src="'+P+x[0]+'.webp" alt="" loading="'+(i<2?'eager':'lazy')+'"></button>'}).join("")+'</div><div class="dots">'+LIST.map(function(x,i){return '<i'+(i===0?' class="on"':'')+'></i>'}).join("")+'</div>';
    var fh=document.getElementById("npModeSw");
    after.parentNode.insertBefore(w,after.nextSibling);
    var trk=w.querySelector(".trk"),its=w.querySelectorAll(".it"),dots=w.querySelectorAll(".dots i");
    its.forEach(function(b){b.onclick=function(){var c=b.dataset.c;if(c==="#gold"){var g=document.getElementById("goldGo");if(g)g.click();return}if(c==="#refer"){if(typeof go==="function")go("earn");return}if(c.indexOf("#tile:")===0){var lb=c.slice(6);var tl=[].slice.call(document.querySelectorAll("#npFamHome .ft")).find(function(x){return x.textContent.trim().indexOf(lb)===0});if(tl)tl.click();return}if(c==="#ridepass"){if(window.npOpenRidePass)npOpenRidePass();return}if(typeof openService==="function")openService(c)};
      b.querySelector("img").onerror=function(){b.remove()}});
    function mark(i){its.forEach(function(b,k){b.classList.toggle("on",k===i)});dots.forEach(function(d,k){d.classList.toggle("on",k===i)})}
    function go(i){var list=w.querySelectorAll(".it");if(!list.length)return;idx=(i+list.length)%list.length;var el=list[idx];
      trk.scrollTo({left:el.offsetLeft-(trk.clientWidth-el.clientWidth)/2,behavior:"smooth"});mark(idx)}
    trk.addEventListener("scroll",function(){var c=trk.scrollLeft+trk.clientWidth/2,best=0,bd=1e9;w.querySelectorAll(".it").forEach(function(b,k){var m=b.offsetLeft+b.clientWidth/2,d=Math.abs(m-c);if(d<bd){bd=d;best=k}});idx=best;mark(best)},{passive:true});
    trk.addEventListener("touchstart",function(){paused=Date.now()},{passive:true});
    clearInterval(timer);timer=setInterval(function(){
      if(!document.documentElement.classList.contains("np-fam")||document.hidden)return;
      if(Date.now()-paused<6000)return;
      var r=w.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;
      go(idx+1)},3000);
  }
  build();setTimeout(build,1500);setTimeout(build,4000);
})();



/* ===== 20 Oct 2026 (Rahul): FAMILY MODE "ALIVE" 3D LOOK – every icon, tile, chip and the Raju card look 3D and gently float.
   Only style + animation (Family mode only). Respects "reduce motion" phone setting. Nothing removed. ===== */
(function(){
  if(document.getElementById("npFamAlive"))return;var st=document.createElement("style");st.id="npFamAlive";var S="html.np-fam ";
  var BUB='background:radial-gradient(circle at 32% 26%,#ffffff 0,#fff3e8 38%,#ffd9bd 78%,#f3bf96 100%)!important;box-shadow:inset -4px -6px 10px rgba(160,90,40,.18),inset 3px 4px 8px rgba(255,255,255,.9),0 10px 16px rgba(140,90,40,.25)!important;border:0!important;';
  st.textContent=
  '@keyframes npFloat{0%,100%{translate:0 0}50%{translate:0 -6px}}'+
  '@keyframes npFloatS{0%,100%{translate:0 0;rotate:0deg}50%{translate:0 -4px;rotate:-2deg}}'+
  '@keyframes npPulse{0%,100%{box-shadow:0 0 0 0 rgba(31,143,168,.5)}70%{box-shadow:0 0 0 8px rgba(31,143,168,0)}}'+
  /* Raju card: thick white rim, deep soft shadow, floating avatar */
  S+'#rajuCard{border:3px solid #fff!important;border-radius:30px!important;box-shadow:inset 0 -8px 0 rgba(160,100,50,.08),0 18px 34px rgba(140,90,40,.22)!important}'+
  S+'#rajuCard .npRajuG,'+S+'#rajuStage{animation:npFloat 3.6s ease-in-out infinite;filter:drop-shadow(0 12px 10px rgba(80,50,20,.25))}'+
  S+'#rajuCard .on,'+S+'#rajuCard .dot,'+S+'#rajuCard [class*="online"] i{animation:npPulse 2s infinite;border-radius:50%}'+
  S+'.npAskBar{box-shadow:inset 0 -4px 0 rgba(160,100,50,.08),0 8px 16px rgba(140,90,40,.15)!important}'+
  /* family icon tiles + more-services tiles: icons float, staggered */
  S+'#npFamHome .ft img,'+S+'#cats .cat .npCat3d{animation:npFloat 3.2s ease-in-out infinite}'+
  S+'#npFamHome .ft:nth-child(2n) img,'+S+'#cats .cat:nth-child(2n) .npCat3d{animation-delay:-1.1s}'+
  S+'#npFamHome .ft:nth-child(3n) img,'+S+'#cats .cat:nth-child(3n) .npCat3d{animation-delay:-2.2s}'+
  S+'#npFamHome .ft,'+S+'#cats .cat,'+S+'.hubtile{transition:transform .18s cubic-bezier(.3,1.6,.5,1)}'+
  S+'#npFamHome .ft:active,'+S+'#cats .cat:active,'+S+'.hubtile:active,'+S+'.chip:active{transform:scale(.94)}'+
  /* outline icons (Medical, Property, Friends...) become 3D bubbles that pop out */
  S+'#cats .cat:not(.npHas3d){overflow:visible!important;border:2px solid #fff!important;box-shadow:inset 0 -6px 0 rgba(0,0,0,.06),0 10px 18px rgba(140,90,40,.16)!important}'+
  S+'#cats .cat:not(.npHas3d)>span{'+BUB+'margin-top:-14px;animation:npFloat 3.4s ease-in-out infinite}'+
  S+'#cats .cat:not(.npHas3d)>span svg{stroke:#d9661f!important;stroke-width:2.2!important}'+
  S+'.hubtile{border:2px solid #fff!important;box-shadow:inset 0 -6px 0 rgba(0,0,0,.06),0 12px 20px rgba(140,90,40,.16)!important;overflow:visible!important}'+
  S+'.hubtile>span[data-i]{'+BUB+'width:54px!important;height:54px!important;border-radius:18px!important;display:flex!important;align-items:center;justify-content:center;margin-top:-22px;animation:npFloatS 3.8s ease-in-out infinite}'+
  S+'.hubtile>span[data-i] svg{stroke:#d9661f!important;stroke-width:2.2!important;width:26px;height:26px}'+
  /* filter chips: raised 3D pills */
  S+'.chips .chip{background:#fff!important;color:#2b2140!important;border:2px solid #fff!important;border-radius:999px!important;box-shadow:inset 0 -4px 0 rgba(160,100,50,.10),0 6px 12px rgba(140,90,40,.14)!important;font-weight:600}'+
  S+'.chips .chip[aria-pressed="true"]{background:linear-gradient(180deg,#ff9a52,#ff7a2f)!important;color:#fff!important;box-shadow:inset 0 -4px 0 rgba(0,0,0,.15),0 8px 14px rgba(255,122,47,.35)!important}'+
  /* search box raised */
  S+'#explore input[type="search"],'+S+'#q{background:#fff!important;border:2px solid #fff!important;box-shadow:inset 0 -4px 0 rgba(160,100,50,.08),0 8px 16px rgba(140,90,40,.12)!important;color:#2b2140!important}'+
  /* venue cards lift */
  S+'.rcard{border:2px solid #fff!important;box-shadow:inset 0 -6px 0 rgba(0,0,0,.05),0 14px 24px rgba(140,90,40,.16)!important}'+
  S+'.rcard .art img,'+S+'.rcard .npArt3d{animation:npFloat 3.6s ease-in-out infinite}'+
  '@media (prefers-reduced-motion:reduce){'+S+'*{animation:none!important}}';
  document.head.appendChild(st);
})();


/* ===== 20 Oct 2026 (Rahul): FAMILY MODE – daytime cartoon Pattaya background (like the night Pattaya scene in Singles):
   blue sky, sun, moving clouds, PATTAYA CITY sign on the hill, pastel city, ferris wheel, sea with boats and parasail, beach with palms.
   Family mode only; Singles keeps its night scene. No Buddha, no flags, no alcohol. ===== */
(function(){
  if(document.getElementById("npFamScene"))return;
  var svg='<svg viewBox="0 0 390 844" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'+
  '<defs><linearGradient id="fsSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8fd3ff"/><stop offset=".45" stop-color="#c9ecff"/><stop offset=".72" stop-color="#ffeedd"/><stop offset="1" stop-color="#ffe2c4"/></linearGradient>'+
  '<linearGradient id="fsSea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5cc8e8"/><stop offset="1" stop-color="#9fe3f2"/></linearGradient></defs>'+
  '<rect width="390" height="844" fill="url(#fsSky)"/>'+
  '<g class="cl1" fill="#fff" opacity=".95"><ellipse cx="70" cy="90" rx="46" ry="18"/><ellipse cx="95" cy="78" rx="28" ry="20"/><ellipse cx="55" cy="80" rx="22" ry="15"/></g>'+
  '<g class="cl2" fill="#fff" opacity=".85"><ellipse cx="230" cy="190" rx="40" ry="14"/><ellipse cx="250" cy="180" rx="24" ry="16"/></g>'+
  '<g class="cl1" fill="#fff" opacity=".8"><ellipse cx="150" cy="300" rx="34" ry="12"/><ellipse cx="166" cy="292" rx="20" ry="13"/></g>'+
  /* hill with sign */
  '<path d="M-20 600 Q60 520 150 560 Q200 535 250 565 L250 640 L-20 640Z" fill="#9bdc9a"/>'+
  '<path d="M-20 615 Q70 560 160 590 L160 650 L-20 650Z" fill="#7fcf84"/>'+
  '<text x="6" y="566" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="13" fill="#fff" stroke="#5aa95f" stroke-width=".6" letter-spacing="1" transform="rotate(-8 6 566)">PATTAYA CITY</text>'+
  /* city */
  '<g><rect x="170" y="560" width="26" height="90" rx="4" fill="#ffc7d9"/><rect x="200" y="530" width="30" height="120" rx="4" fill="#ffd9b3"/><rect x="234" y="575" width="24" height="75" rx="4" fill="#c9e7ff"/>'+
  '<rect x="262" y="545" width="28" height="105" rx="4" fill="#d6f2df"/><rect x="294" y="585" width="22" height="65" rx="4" fill="#e7dcff"/><rect x="320" y="560" width="30" height="90" rx="4" fill="#ffe7a8"/><rect x="354" y="590" width="40" height="60" rx="4" fill="#ffc7d9"/>'+
  '<g fill="#fff" opacity=".85"><rect x="205" y="540" width="6" height="6" rx="1"/><rect x="218" y="540" width="6" height="6" rx="1"/><rect x="205" y="556" width="6" height="6" rx="1"/><rect x="218" y="556" width="6" height="6" rx="1"/><rect x="267" y="556" width="6" height="6" rx="1"/><rect x="279" y="556" width="6" height="6" rx="1"/><rect x="267" y="572" width="6" height="6" rx="1"/><rect x="279" y="572" width="6" height="6" rx="1"/><rect x="326" y="570" width="6" height="6" rx="1"/><rect x="338" y="570" width="6" height="6" rx="1"/><rect x="175" y="572" width="6" height="6" rx="1"/><rect x="186" y="572" width="6" height="6" rx="1"/></g></g>'+
  /* ferris wheel */
  '<g transform="translate(152 578)"><path d="M-14 70 L0 0 L14 70" stroke="#c9a2ff" stroke-width="4" fill="none"/>'+
  '<g class="fw"><circle r="42" fill="none" stroke="#ff9ec4" stroke-width="4"/><circle r="5" fill="#ff9ec4"/>'+
  '<g stroke="#ffc2db" stroke-width="2"><line x1="-42" y1="0" x2="42" y2="0"/><line x1="0" y1="-42" x2="0" y2="42"/><line x1="-30" y1="-30" x2="30" y2="30"/><line x1="-30" y1="30" x2="30" y2="-30"/></g>'+
  '<g fill="#ffe27a"><circle cx="42" cy="0" r="6"/><circle cx="-42" cy="0" r="6"/><circle cx="0" cy="42" r="6"/><circle cx="0" cy="-42" r="6"/></g><g fill="#9fdcff"><circle cx="30" cy="30" r="6"/><circle cx="-30" cy="-30" r="6"/><circle cx="30" cy="-30" r="6"/><circle cx="-30" cy="30" r="6"/></g></g></g>'+
  /* sea */
  '<rect x="0" y="645" width="390" height="95" fill="url(#fsSea)"/>'+
  '<g class="wv" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".8"><path d="M20 670 q10 -6 20 0 t20 0"/><path d="M140 690 q10 -6 20 0 t20 0"/><path d="M260 668 q10 -6 20 0 t20 0"/><path d="M320 710 q10 -6 20 0 t20 0"/><path d="M60 715 q10 -6 20 0 t20 0"/></g>'+
  '<g class="bt" transform="translate(250 690)"><path d="M0 12 L40 12 L32 22 L8 22Z" fill="#ff8a5c"/><path d="M20 12 L20 -14 L36 10Z" fill="#fff"/><path d="M18 12 L18 -8 L6 10Z" fill="#ffd2e3"/></g>'+
  '<g class="ps" transform="translate(60 380)"><path d="M0 0 Q30 -26 60 0 Z" fill="#ffd166"/><path d="M0 0 Q30 -26 60 0" fill="none" stroke="#ff7a8a" stroke-width="5"/><g stroke="#8a7b9e" stroke-width="1"><line x1="2" y1="0" x2="30" y2="34"/><line x1="58" y1="0" x2="30" y2="34"/></g><circle cx="30" cy="38" r="5" fill="#ff8a5c"/></g>'+
  /* beach */
  '<path d="M0 735 Q195 715 390 735 L390 844 L0 844Z" fill="#ffe2b3"/>'+
  '<g transform="translate(30 640)"><path d="M14 120 Q8 60 22 10" stroke="#b9805a" stroke-width="8" fill="none" stroke-linecap="round"/>'+
  '<g fill="#5ccf8a"><path d="M22 10 Q-10 -6 -26 18 Q0 2 22 10Z"/><path d="M22 10 Q50 -10 70 14 Q44 0 22 10Z"/><path d="M22 10 Q10 -24 30 -36 Q22 -12 22 10Z"/><path d="M22 10 Q40 -20 62 -18 Q38 -6 22 10Z"/></g></g>'+
  '<g transform="translate(330 650)"><path d="M10 110 Q4 50 18 6" stroke="#b9805a" stroke-width="7" fill="none" stroke-linecap="round"/>'+
  '<g fill="#4bbf7c"><path d="M18 6 Q-12 -8 -24 14 Q2 -2 18 6Z"/><path d="M18 6 Q44 -12 62 10 Q38 -4 18 6Z"/><path d="M18 6 Q8 -24 26 -34 Q18 -12 18 6Z"/></g></g>'+
  '<g transform="translate(150 760)"><path d="M0 0 Q30 -26 60 0Z" fill="#ff9ec4"/><path d="M20 0 Q30 -26 40 0" fill="#fff" opacity=".7"/><line x1="30" y1="0" x2="30" y2="44" stroke="#8a7b9e" stroke-width="3"/></g>'+
  '<g transform="translate(240 775)"><path d="M0 0 Q26 -22 52 0Z" fill="#7fd6ff"/><line x1="26" y1="0" x2="26" y2="38" stroke="#8a7b9e" stroke-width="3"/></g>'+
  '</svg>';
  var d=document.createElement("div");d.id="npFamScene";d.innerHTML=svg;document.body.insertBefore(d,document.body.firstChild);
  var st=document.createElement("style");st.id="npFamSceneCss";
  st.textContent='#npFamScene{display:none}html.np-fam #npFamScene{display:block;position:fixed;inset:0;z-index:-2;pointer-events:none}'+
    '#npFamScene svg{width:100%;height:100%;display:block}'+
    'html.np-fam #scene{display:none!important}'+
    'html.np-fam{background:#c9ecff!important}html.np-fam body{background:transparent!important}html.np-fam .wrap,html.np-fam main,html.np-fam #explore{background:transparent!important}'+
    '@keyframes fsCl{from{transform:translateX(-40px)}to{transform:translateX(40px)}}@keyframes fsSpin{to{transform:rotate(360deg)}}'+
    '@keyframes fsBob{0%,100%{transform:translate(250px,690px)}50%{transform:translate(250px,694px)}}@keyframes fsPs{0%,100%{transform:translate(60px,380px)}50%{transform:translate(90px,370px)}}'+
    '@keyframes fsWv{0%,100%{transform:translateX(0)}50%{transform:translateX(8px)}}'+
    '#npFamScene .cl1{animation:fsCl 18s ease-in-out infinite alternate}#npFamScene .cl2{animation:fsCl 24s ease-in-out infinite alternate-reverse}'+
    '#npFamScene .fw{animation:fsSpin 40s linear infinite;transform-box:fill-box;transform-origin:center}'+
    '#npFamScene .bt{animation:fsBob 3s ease-in-out infinite}#npFamScene .ps{animation:fsPs 12s ease-in-out infinite}#npFamScene .wv{animation:fsWv 4s ease-in-out infinite}'+
    '@media (prefers-reduced-motion:reduce){#npFamScene *{animation:none!important}}';
  document.head.appendChild(st);
})();


/* ===== 20 Oct 2026 (Rahul): twinkling stars at night (behind the content). ===== */
(function(){
  if(document.getElementById("npStars"))return;
  var d=document.createElement("div");d.id="npStars";d.setAttribute("aria-hidden","true");
  d.innerHTML=
    '<b style="left:12%;top:12%"></b><b style="left:40%;top:6%;animation-delay:1s"></b><b style="left:70%;top:20%;animation-delay:2s"></b><b style="left:88%;top:8%;animation-delay:.5s"></b><b style="left:25%;top:28%;animation-delay:1.6s"></b><b style="left:58%;top:32%;animation-delay:2.4s"></b>';
  document.body.insertBefore(d,document.body.firstChild);
  var st=document.createElement("style");st.id="npStarsCss";
  st.textContent='#npStars{position:fixed;inset:0;z-index:-1;pointer-events:none;overflow:hidden}html.np-fam #npStars{display:none}'+
    '#npStars b{position:absolute;width:3px;height:3px;border-radius:50%;background:#fff;box-shadow:0 0 6px 2px rgba(255,255,255,.7);animation:npTwinkle 3s ease-in-out infinite}'+
    '@keyframes npTwinkle{0%,100%{opacity:.25;transform:scale(.7)}50%{opacity:1;transform:scale(1.2)}}'+
    '@media (prefers-reduced-motion:reduce){#npStars b{animation:none}}';
  document.head.appendChild(st);
})();


/* ===== 20 Oct 2026 (Rahul): LIVE PATTAYA WEATHER on the background (Singles + Family).
   Real weather from Open-Meteo (free test service; check licence for commercial use before launch), refreshed every 20 min.
   Rain -> rain falls, storm -> rain + lightning flash, cloudy -> moving clouds, hot (33°C+) -> warm sun glow + heat shimmer.
   Small chip shows "Pattaya 31°" with a weather icon. Test: add ?wx=rain / storm / cloudy / hot / clear to the link. ===== */
(function(){
  if(document.getElementById("npWx"))return;
  var KEY="np_wx_cache2",LAT=12.9276,LNG=100.8771;
  var w=document.createElement("div");w.id="npWx";w.setAttribute("aria-hidden","true");document.body.insertBefore(w,document.body.firstChild);
  var st=document.createElement("style");st.id="npWxCss";
  st.textContent='#npWx{position:fixed;inset:0;z-index:-1;pointer-events:none;overflow:hidden}'+
   '#npWx .rn{position:absolute;top:-20%;width:1px;height:46px;border-radius:1px;background:linear-gradient(180deg,rgba(255,255,255,0),rgba(225,238,255,.45));animation:npRain linear infinite}'+
   'html.np-fam #npWx .rn{background:linear-gradient(180deg,rgba(80,130,190,0),rgba(60,110,180,.35))}'+
   '@keyframes npRain{to{transform:translate(-60px,130vh)}}'+
   '#npWx .fl{position:absolute;inset:0;background:#fff;opacity:0;animation:npFlash 7s infinite}'+
   '@keyframes npFlash{0%,92%,100%{opacity:0}93%{opacity:.55}94%{opacity:.05}95.5%{opacity:.4}97%{opacity:0}}'+
   '#npWx .cd{position:absolute;border-radius:50%;background:rgba(255,255,255,.55);filter:blur(10px);animation:npCloud linear infinite}'+
   'html:not(.np-fam) #npWx .cd{background:rgba(160,150,200,.18)}'+
   'html.np-fam #npWx.wx-rain .cd,html.np-fam #npWx.wx-storm .cd{background:rgba(120,130,150,.45)}'+
   '@keyframes npCloud{from{transform:translateX(-50vw)}to{transform:translateX(120vw)}}'+
   '#npWx .ht{position:absolute;inset:0;background:radial-gradient(120% 60% at 85% 0%,rgba(255,170,60,.35),rgba(255,120,40,.08) 55%,transparent 75%);animation:npHeat 4s ease-in-out infinite}'+
   '@keyframes npHeat{0%,100%{opacity:.75}50%{opacity:1}}'+
   'html.np-fam #npWx.wx-rain~#npFamScene,html.np-fam #npWx.wx-storm~#npFamScene{filter:saturate(.55) brightness(.85)}'+
   'html.np-fam #npWx.wx-cloudy~#npFamScene{filter:saturate(.8) brightness(.95)}'+
   '#npWxChip{display:inline-flex;align-items:center;gap:6px;height:30px;padding:0 12px;border-radius:999px;font-size:13px;font-weight:700;margin:0 0 12px 8px;vertical-align:top;'+
     'background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.18);color:#fff}'+
   'html.np-fam #npWxChip{background:#fff;border:2px solid #fff;color:#2b2140;box-shadow:inset 0 -3px 0 rgba(160,100,50,.1),0 6px 12px rgba(140,90,40,.14)}'+
   '#npWxChip svg{width:18px;height:18px}'+
   '@media (prefers-reduced-motion:reduce){#npWx *{animation:none!important}#npWx .rn{display:none}}';
  document.head.appendChild(st);
  var IC={clear:'<svg viewBox="0 0 24 24" fill="none" stroke="#ffb020" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5" fill="#ffd34d"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/></svg>',
    hot:'<svg viewBox="0 0 24 24" fill="none" stroke="#ff6a2b" stroke-width="2" stroke-linecap="round"><path d="M10 14.5V5a2 2 0 1 1 4 0v9.5a4 4 0 1 1-4 0z" fill="#ffe0cc"/><circle cx="12" cy="17.5" r="2" fill="#ff6a2b"/></svg>',
    cloudy:'<svg viewBox="0 0 24 24" fill="#cfd8e6" stroke="#8a97ad" stroke-width="1.6"><path d="M7 18h10a4 4 0 0 0 .5-8 6 6 0 0 0-11.3 1.5A3.3 3.3 0 0 0 7 18z"/></svg>',
    rain:'<svg viewBox="0 0 24 24" fill="none" stroke="#4a8fd8" stroke-width="2" stroke-linecap="round"><path d="M7 14h10a4 4 0 0 0 .5-8 6 6 0 0 0-11.3 1.5A3.3 3.3 0 0 0 7 14z" fill="#cfd8e6" stroke="#8a97ad" stroke-width="1.6"/><path d="M8 17l-1 3M12 17l-1 3M16 17l-1 3"/></svg>',
    storm:'<svg viewBox="0 0 24 24" fill="none" stroke="#8a97ad" stroke-width="1.6"><path d="M7 14h10a4 4 0 0 0 .5-8 6 6 0 0 0-11.3 1.5A3.3 3.3 0 0 0 7 14z" fill="#b8c2d3"/><path d="M12.5 13l-2.5 4.5h3l-2 4.5" stroke="#ffb020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'};
  function kind(code,t,pr){if(code>=95&&pr>=0.3)return "storm";if(((code>=61&&code<=67)||(code>=80&&code<=82)||code>=95)&&pr>=0.3)return "rain";if(code>=51)return "cloudy";if(t>=33)return "hot";if(code>=2)return "cloudy";return "clear"}
  function paint(k,t){
    w.className="wx-"+k;var H0=document.documentElement;["clear","hot","cloudy","rain","storm"].forEach(function(x){H0.classList.toggle("np-wx-"+x,x===k)});var h="";
    if(k==="rain"||k==="storm"){for(var i=0;i<(k==="storm"?45:30);i++){var l=Math.random()*120,dl=-Math.random()*2,du=.55+Math.random()*.5;h+='<span class="rn" style="left:'+l+'%;animation-delay:'+dl.toFixed(2)+'s;animation-duration:'+du.toFixed(2)+'s;opacity:'+(.3+Math.random()*.4).toFixed(2)+'"></span>'}}
    if(k==="storm")h+='<span class="fl"></span>';
    if(k==="cloudy"||k==="rain"||k==="storm"){for(var c=0;c<5;c++){h+='<span class="cd" style="top:'+(4+c*9)+'%;width:'+(160+c*30)+'px;height:'+(50+c*8)+'px;animation-duration:'+(40+c*12)+'s;animation-delay:-'+(c*9)+'s"></span>'}}
    if(k==="hot")h+='<span class="ht"></span>';
    w.innerHTML=h;
    var chip=document.getElementById("npWxChip"),sw=document.getElementById("npModeSw");
    if(!chip&&sw){chip=document.createElement("span");chip.id="npWxChip";chip.setAttribute("role","status");sw.insertAdjacentElement("afterend",chip)}
    if(chip){chip.innerHTML=IC[k]+'<span>Pattaya '+(t!=null?Math.round(t)+'°':'')+'</span>';chip.title="Live weather in Pattaya"}
    var fs=document.getElementById("npFamScene");if(fs&&fs.previousElementSibling!==w)w.insertAdjacentElement("afterend",fs);
  }
  function load(){
    var force=null;try{force=new URLSearchParams(location.search).get("wx")}catch(e){}
    if(force){paint(force,force==="hot"?35:force==="clear"?30:27);return}
    try{var c=JSON.parse(localStorage.getItem(KEY)||"null");if(c&&Date.now()-c.at<20*60*1000){paint(kind(c.code,c.t,c.pr||0),c.t);return}}catch(e){}
    fetch("https://api.open-meteo.com/v1/forecast?latitude="+LAT+"&longitude="+LNG+"&current=temperature_2m,weather_code,precipitation&timezone=Asia%2FBangkok")
      .then(function(r){return r.json()}).then(function(j){var t=j.current.temperature_2m,code=j.current.weather_code,pr=j.current.precipitation||0;
        try{localStorage.setItem(KEY,JSON.stringify({t:t,code:code,pr:pr,at:Date.now()}))}catch(e){}paint(kind(code,t,pr),t)})
      .catch(function(){});
  }
  load();setInterval(load,20*60*1000);setTimeout(function(){if(!document.getElementById("npWxChip"))load()},3000);
})();





/* ===== 21 Oct 2026 (Rahul): REAL SUN & MOON + DAY/NIGHT by Pattaya time (both modes).
   Sun moves across the sky from real sunrise to sunset (Open-Meteo, cached daily; fallback 06:15/18:15).
   Dawn and dusk get warm colours, night gets the moon with today's real moon phase and twinkling stars.
   Singles: day/dawn/dusk show the daytime Pattaya scene (slightly darker so white text stays readable), night keeps the night city.
   Test: add ?sky=07:30 (any time) to the link. ===== */
(function(){
  if(document.getElementById("npSky"))return;
  var SUNK="np_sun_v1";
  var sky=document.createElement("div");sky.id="npSky";sky.setAttribute("aria-hidden","true");
  sky.innerHTML='<div class="tint"></div><div class="sun"></div><div class="moon"><svg viewBox="-50 -50 100 100"><circle r="46" fill="#1d2440" opacity=".55"/><path class="lit" fill="#f7f1d6"/></svg></div>';
  document.body.insertBefore(sky,document.body.firstChild);
  var st=document.createElement("style");st.id="npSkyCss";
  st.textContent='#npSky{position:fixed;inset:0;z-index:-1;pointer-events:none}'+
   '#npSky .tint{position:absolute;inset:0;transition:background 2s}'+
   '#npSky .sun,#npSky .moon{position:absolute;transform:translate(-50%,-50%);transition:left 2s,top 2s,opacity 2s}'+
   '#npSky .sun{width:74px;height:74px;border-radius:50%;background:radial-gradient(circle,#fff6c4 0,#ffd85a 45%,#ffbf3a 62%,rgba(255,191,58,0) 70%);box-shadow:0 0 70px 30px rgba(255,214,90,.45)}'+
   'html.np-sky-dawn #npSky .sun,html.np-sky-dusk #npSky .sun{width:92px;height:92px;background:radial-gradient(circle,#fff0c8 0,#ffad5c 45%,#ff7a45 62%,rgba(255,122,69,0) 70%);box-shadow:0 0 90px 40px rgba(255,130,80,.45)}'+
   '#npSky .moon{width:58px;height:58px;filter:drop-shadow(0 0 18px rgba(255,248,220,.75))}#npSky .moon svg{width:100%;height:100%}'+
   'html.np-sky-day #npSky .moon,html.np-sky-dawn #npSky .moon,html.np-sky-dusk #npSky .moon{opacity:0}html.np-sky-night #npSky .sun{opacity:0}'+
   /* tints */
   'html.np-sky-dawn #npSky .tint{background:linear-gradient(180deg,rgba(120,110,210,.35),rgba(255,160,170,.25) 45%,rgba(255,200,150,.15))}'+
   'html.np-sky-dusk #npSky .tint{background:linear-gradient(180deg,rgba(60,50,140,.45),rgba(230,90,130,.3) 40%,rgba(255,150,90,.22))}'+
   'html.np-fam.np-sky-night #npSky .tint{background:linear-gradient(180deg,rgba(8,14,48,.8),rgba(20,28,80,.62) 50%,rgba(30,25,70,.55))}'+
   /* family scene filter by time */
   'html.np-fam.np-sky-night #npFamScene svg{filter:brightness(.55) saturate(.8)}'+
   'html.np-fam.np-sky-dusk #npFamScene svg{filter:saturate(1.15) brightness(.92)}'+
   /* hide the drawn sun inside the scene (real sun is used) */
   /* singles: day scene in the day, darker so white text is readable */
   'html:not(.np-fam).np-sky-day #npFamScene,html:not(.np-fam).np-sky-dawn #npFamScene,html:not(.np-fam).np-sky-dusk #npFamScene{display:block!important;position:fixed;inset:0;z-index:-2;pointer-events:none}'+
   'html:not(.np-fam).np-sky-day #scene,html:not(.np-fam).np-sky-dawn #scene,html:not(.np-fam).np-sky-dusk #scene{display:none!important}'+
   'html:not(.np-fam).np-sky-day #npFamScene svg{filter:brightness(.6) saturate(1.15)}'+
   'html:not(.np-fam).np-sky-dawn #npFamScene svg,html:not(.np-fam).np-sky-dusk #npFamScene svg{filter:brightness(.55) saturate(1.2)}'+
   'html:not(.np-fam).np-sky-day #npSky .tint{background:linear-gradient(180deg,rgba(8,12,40,.35),rgba(8,12,40,.1) 45%,rgba(8,12,40,.25))}'+
   /* stars only at night (both modes) */
   'html:not(.np-sky-night) #npStars{display:none!important}html.np-fam.np-sky-night #npStars{display:block!important}'+
   '@media (prefers-reduced-motion:reduce){#npSky *{transition:none!important}}';
  document.head.appendChild(st);
  function bkkMin(){try{var p=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Bangkok",hour:"2-digit",minute:"2-digit",hour12:false}).format(new Date()).split(":");return (+p[0]%24)*60+(+p[1])}catch(e){var d=new Date();return ((d.getUTCHours()+7)%24)*60+d.getUTCMinutes()}}
  function hm(s){var m=String(s||"").match(/T?(\d{1,2}):(\d{2})/);return m?(+m[1])*60+(+m[2]):null}
  function sunTimes(){try{var c=JSON.parse(localStorage.getItem(SUNK)||"null");if(c&&c.day===new Date().toDateString())return c}catch(e){}return {rise:375,set:1095}}
  function fetchSun(){try{var c=JSON.parse(localStorage.getItem(SUNK)||"null");if(c&&c.day===new Date().toDateString())return}catch(e){}
    fetch("https://api.open-meteo.com/v1/forecast?latitude=12.9276&longitude=100.8771&daily=sunrise,sunset&timezone=Asia%2FBangkok&forecast_days=1")
     .then(function(r){return r.json()}).then(function(j){var r=hm(j.daily.sunrise[0]),s=hm(j.daily.sunset[0]);if(r&&s){localStorage.setItem(SUNK,JSON.stringify({day:new Date().toDateString(),rise:r,set:s}));update()}}).catch(function(){})}
  function moonPhase(){var syn=29.530588853,ref=Date.UTC(2000,0,6,18,14)/864e5,now=Date.now()/864e5;var p=((now-ref)/syn)%1;return p<0?p+1:p}
  function drawMoon(){var p=moonPhase(),k=Math.cos(2*Math.PI*p),r=46,rx=Math.abs(k)*r,d;
    if(p<.5)d="M0,-"+r+" A"+r+","+r+" 0 0 1 0,"+r+" A"+rx.toFixed(1)+","+r+" 0 0 "+(k>0?1:0)+" 0,-"+r;
    else d="M0,-"+r+" A"+r+","+r+" 0 0 0 0,"+r+" A"+rx.toFixed(1)+","+r+" 0 0 "+(k>0?0:1)+" 0,-"+r;
    sky.querySelector(".lit").setAttribute("d",d)}
  var forced=null;try{var q=new URLSearchParams(location.search).get("sky");if(q)forced=hm(q)}catch(e){}
  window.__npSkyAt=function(min){forced=min;update()};
  function place(el,f){f=Math.max(0,Math.min(1,f));el.style.left=(8+f*84)+"%";el.style.top=(46-Math.sin(Math.PI*f)*36)+"%"}
  function update(){
    var t=forced!=null?forced:bkkMin(),s=sunTimes(),R=s.rise,S=s.set,ph;
    if(t>=R+35&&t<S-35)ph="day";else if(t>=R-45&&t<R+35)ph="dawn";else if(t>=S-35&&t<S+40)ph="dusk";else ph="night";
    var H=document.documentElement;["day","dawn","dusk","night"].forEach(function(x){H.classList.toggle("np-sky-"+x,x===ph)});
    place(sky.querySelector(".sun"),(t-R)/(S-R));
    var nl=(24*60-S)+R,nt=t>=S?t-S:t+(24*60-S);place(sky.querySelector(".moon"),nt/nl);
    drawMoon();
  }
  update();fetchSun();setInterval(update,60*1000);
})();


/* ===== 21 Oct 2026: Family at night – app name and tagline light so they stay readable on the dark sky. ===== */
(function(){var st=document.createElement("style");var N="html.np-fam.np-sky-night ";
  st.textContent=N+'svg.wordmark path:not([fill^="url"]){fill:#fff!important}'+
    N+'.tagline>span,'+N+'.npTagOrange{background:linear-gradient(90deg,#ffb36b,#ffe08a 50%,#8fe39a)!important;-webkit-background-clip:text!important;background-clip:text!important}'+
    N+'.tagline small{color:#e6e0ff!important}';
  document.head.appendChild(st)})();


/* ===== 21 Oct 2026 (Rahul): STORM – real lightning bolts (bijli kadakna) together with the flash. Shows only in storm weather. ===== */
(function(){
  var st=document.createElement("style");st.id="npBoltCss";
  st.textContent='#npBoltLayer{position:fixed;inset:0;z-index:9;pointer-events:none;overflow:hidden}'+
    'html.np-wx-rain #npSky .sun,html.np-wx-storm #npSky .sun{opacity:0!important}html.np-wx-cloudy #npSky .sun{opacity:.45}html.np-wx-rain #npSky .moon,html.np-wx-storm #npSky .moon{opacity:.25}'+
    '#npBoltLayer .bolt{position:absolute;top:0;width:90px;height:46vh;opacity:0;animation:npBolt 7s infinite;filter:drop-shadow(0 0 8px #fff) drop-shadow(0 0 18px #6fa4ff)}'+
    '#npBoltLayer .bolt svg{width:100%;height:100%}'+
    '@keyframes npBolt{0%,92.6%,100%{opacity:0}93%{opacity:1}93.8%{opacity:.15}95.6%{opacity:.9}96.6%{opacity:0}}'+
    '@media (prefers-reduced-motion:reduce){#npBoltLayer .bolt{display:none}}';
  document.head.appendChild(st);
  var B='<svg viewBox="0 0 90 400" preserveAspectRatio="none"><path d="M52 0 L30 120 L52 120 L20 250 L44 250 L8 400 L70 210 L46 210 L78 95 L54 95 L72 0Z" fill="#fffdf0" stroke="#8fbaff" stroke-width="3" stroke-linejoin="round"/><path d="M30 120 L5 170 M20 250 L0 300" stroke="#fffdf0" stroke-width="3" fill="none"/></svg>';
  var L=document.createElement("div");L.id="npBoltLayer";L.setAttribute("aria-hidden","true");document.body.appendChild(L);
  function add(){var w=document.getElementById("npWx");if(!w||!w.classList.contains("wx-storm")){L.innerHTML="";return}
    if(L.querySelector(".bolt"))return;
    var b=document.createElement("span");b.className="bolt";b.innerHTML=B;b.style.left=(10+Math.random()*70)+"%";L.appendChild(b);var fl=w.querySelector(".fl");if(fl){var n=fl.cloneNode();fl.replaceWith(n)}
    b.addEventListener("animationiteration",function(){b.style.left=(5+Math.random()*75)+"%";b.style.transform="scaleX("+(Math.random()<.5?-1:1)+")"})}
  add();setInterval(add,1500);
})();


/* ===== 21 Oct 2026 (Rahul, approved preview A): SINGLES PHOTO BACKGROUND – Pattaya beach + galaxy photo (np-singles-bg-a1.webp, alcohol words on signs blurred).
   Alive: water reflections ripple, nebula clouds drift in the sky, stars twinkle, planets float (Saturn, Mars, Earth, Jupiter), slow zoom.
   Singles only, day and night. In Singles the cartoon night city (#scene), the daytime cartoon scene, old stars and the sun are only HIDDEN (not deleted);
   Family mode is unchanged. Moon, weather (rain/storm) still show on top. Max ~30 fps, stops drawing in Family mode. ===== */
(function(){
  var PAGES={explore:["np-singles-bg-a1.webp",.77,.72,.76]}; /* one photo on every page */
  var DEF="explore",cur=null,IMG=null,WATER,WX,WY;
  if(document.getElementById("npPhotoBg"))return;
  var bg=document.createElement("div");bg.id="npPhotoBg";bg.setAttribute("aria-hidden","true");
  bg.innerHTML='<div class="zoom"><canvas></canvas></div><div class="shade"></div>';
  document.body.insertBefore(bg,document.body.firstChild);
  var st=document.createElement("style");
  st.textContent='#npPhotoBg{position:fixed;inset:0;z-index:-1;pointer-events:none;overflow:hidden;background:#0a0818}'+
   '#npPhotoBg .zoom{position:absolute;inset:0;animation:npKen 36s ease-in-out infinite alternate;transform-origin:50% 70%}'+
   '@keyframes npKen{0%{transform:scale(1.02)}100%{transform:scale(1.08)}}'+
   '#npPhotoBg canvas{position:absolute;inset:0;width:100%;height:100%;transition:opacity .45s ease}#npPhotoBg canvas.fade{opacity:0}'+
   '#npPhotoBg .shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(8,6,20,.55) 0%,rgba(8,6,20,.25) 30%,rgba(8,6,20,.15) 60%,rgba(8,6,20,.3) 100%)}'+
   'html.np-fam #npPhotoBg{display:none}'+
   'html:not(.np-fam) #scene,html:not(.np-fam) #npFamScene,html:not(.np-fam) #npStars,html:not(.np-fam) #npSky .sun{display:none!important}'+
   '@media (prefers-reduced-motion:reduce){#npPhotoBg .zoom{animation:none}}';
  document.head.appendChild(st);
  var cv=bg.querySelector("canvas"),ctx=cv.getContext("2d"),W,H,DPR=Math.min(2,devicePixelRatio||1),stars=[],glints=[],neb=[],t0=performance.now();
  var img=new Image(),ok=false;
  function setPage(p){var c=PAGES[p]||PAGES[DEF];if(c[0]===IMG&&cur)return;cur=p;
    var load=function(){var n=new Image();n.onload=function(){img=n;IMG=c[0];WATER=c[1];WX=c[2];WY=c[3];ok=true;build();cv.classList.remove("fade")};n.onerror=function(){cv.classList.remove("fade")};n.src=c[0]};
    if(ok){cv.classList.add("fade");setTimeout(load,450)}else load()}
  function visible(){var ids=["explore","map","concierge","buddy","bookings","earn","clubs","packages","ladies","mall","paybill","dash"];for(var i=0;i<ids.length;i++){var e=document.getElementById(ids[i]);if(e&&!e.hidden)return ids[i]}return DEF}
  setPage(visible());
  try{new MutationObserver(function(){setPage(visible())}).observe(document.body,{subtree:true,attributes:true,attributeFilter:["hidden"]})}catch(e){}
  var fit={};function rnd(a,b){return a+Math.random()*(b-a)}
  var PL=[];
  function sphere(R,base,dark,light,bands,ring,tilt){
    var pad=ring?R*1.3:R*0.25,S=Math.ceil((R+pad)*2*DPR),c=document.createElement("canvas");c.width=c.height=S;var g=c.getContext("2d");g.scale(DPR,DPR);var C=R+pad;
    function drawRing(front){if(!ring)return;g.save();g.translate(C,C);g.rotate(tilt);g.scale(1,.32);g.lineWidth=R*.22;
      for(var k=0;k<3;k++){g.strokeStyle=["rgba(232,214,170,.75)","rgba(200,175,130,.55)","rgba(245,230,200,.45)"][k];g.beginPath();g.arc(0,0,R*(1.45+k*.18),front?0:Math.PI,front?Math.PI:Math.PI*2);g.stroke()}g.restore()}
    drawRing(false);
    g.save();g.beginPath();g.arc(C,C,R,0,7);g.clip();
    g.fillStyle=base;g.fillRect(C-R,C-R,2*R,2*R);
    if(bands)bands.forEach(function(b){g.fillStyle=b[0];g.beginPath();g.ellipse(C,C-R+b[1]*2*R,R*1.2,b[2]*R,tilt||0,0,7);g.fill()});
    var sh=g.createRadialGradient(C-R*.4,C-R*.45,R*.1,C,C,R*1.05);sh.addColorStop(0,light);sh.addColorStop(.55,"rgba(0,0,0,0)");sh.addColorStop(1,dark);g.fillStyle=sh;g.fillRect(C-R,C-R,2*R,2*R);
    g.restore();
    var at=g.createRadialGradient(C,C,R*.9,C,C,R*1.18);at.addColorStop(0,"rgba(160,200,255,.0)");at.addColorStop(.5,"rgba(160,200,255,.18)");at.addColorStop(1,"rgba(160,200,255,0)");g.fillStyle=at;g.beginPath();g.arc(C,C,R*1.18,0,7);g.fill();
    drawRing(true);return {c:c,size:S/DPR};
  }
  function buildPlanets(){var u=Math.min(W,H);PL=[
    {i:sphere(u*.075,"#d9b77a","rgba(30,15,5,.85)","rgba(255,245,220,.55)",[["rgba(180,130,70,.6)",.3,.08],["rgba(240,215,160,.6)",.48,.07],["rgba(160,110,60,.5)",.66,.06]],true,-.35),x:.9,y:.205,f:.9,p:0},
    {i:sphere(u*.035,"#c1502e","rgba(20,5,0,.9)","rgba(255,200,170,.5)",[["rgba(140,50,25,.6)",.4,.1]],false,0),x:.05,y:.205,f:1.3,p:2},
    {i:sphere(u*.17,"#c99b6b","rgba(15,8,5,.9)","rgba(255,235,210,.45)",[["rgba(150,95,60,.7)",.22,.07],["rgba(235,205,170,.6)",.36,.06],["rgba(170,90,60,.7)",.5,.08],["rgba(230,195,160,.55)",.64,.06],["rgba(140,85,55,.6)",.78,.07]],false,.1),x:1.0,y:.74,f:.6,p:4},
    {i:sphere(u*.075,"#2f6fd6","rgba(2,8,30,.9)","rgba(200,235,255,.6)",[["rgba(60,170,110,.75)",.35,.12],["rgba(255,255,255,.45)",.12,.05],["rgba(70,160,100,.65)",.65,.1]],false,.3),x:.0,y:.47,f:1,p:1}
  ]}
  function drawPlanets(t){for(var i=0;i<PL.length;i++){var o=PL[i],dx=Math.sin(t*.25*o.f+o.p)*6,dy=Math.cos(t*.2*o.f+o.p)*5;ctx.globalAlpha=.92;ctx.drawImage(o.i.c,o.x*W-o.i.size/2+dx,o.y*H-o.i.size/2+dy,o.i.size,o.i.size)}ctx.globalAlpha=1}

  function cloud(r,c){var s=document.createElement("canvas"),S=Math.ceil(r*2*DPR);s.width=s.height=S;var g=s.getContext("2d");g.scale(DPR,DPR);
    for(var i=0;i<14;i++){var x=r+rnd(-.5,.5)*r,y=r+rnd(-.3,.3)*r,rr=rnd(.25,.55)*r,gr=g.createRadialGradient(x,y,0,x,y,rr);gr.addColorStop(0,"rgba("+c+",.22)");gr.addColorStop(1,"rgba("+c+",0)");g.fillStyle=gr;g.beginPath();g.arc(x,y,rr,0,7);g.fill()}return s}
  function build(){if(!cv.clientWidth||!cv.clientHeight){W=0;return}W=cv.clientWidth;H=cv.clientHeight;cv.width=W*DPR;cv.height=H*DPR;
    if(ok){var sc=Math.max(W/img.width,H/img.height),dw=img.width*sc,dh=img.height*sc;fit={sc:sc,dx:(W-dw)/2,dy:(H-dh)*.78,dw:dw,dh:dh}}
    stars=[];for(var i=0;i<80;i++)stars.push({x:Math.random()*W,y:Math.random()*H*.55,r:rnd(.5,1.7),p:Math.random()*6.3,s:rnd(.5,1.8)});
    glints=[];var wy=fit.dy+fit.dh*WATER;for(var i=0;i<60;i++)glints.push({x:Math.random()*W,y:rnd(wy,H),w:rnd(6,24),p:Math.random()*6.3,s:rnd(.8,2.4)});
    neb=[["164,90,255",.0,.12,1.1],["80,200,255",.5,.30,.9],["255,80,200",.8,.20,1.0],["120,255,220",.3,.42,.8]].map(function(n,i){return {c:cloud(Math.min(W,H)*.55,n[0]),x:n[1],y:n[2],sp:n[3]}});
    buildPlanets()}

  var last=0;function frame(now){if(document.documentElement.classList.contains("np-fam")||now-last<32){requestAnimationFrame(frame);return}last=now;if(ok&&(W!==cv.clientWidth||H!==cv.clientHeight))build();if(!W){requestAnimationFrame(frame);return}var t=(now-t0)/1000;ctx.setTransform(DPR,0,0,DPR,0,0);ctx.clearRect(0,0,W,H);
    if(ok){var f=fit;ctx.drawImage(img,f.dx,f.dy,f.dw,f.dh);
      /* water: redraw thin strips with a gentle wave – reflections ripple */
      var y0=Math.max(0,f.dy+f.dh*WATER),sy0=(y0-f.dy)/f.sc,step=2;
      for(var y=y0;y<H;y+=step){var k=(y-y0)/(H-y0+1),amp=1.2+k*5,off=Math.sin(y*.09-t*2.2)*amp+Math.sin(y*.031+t*1.3)*amp*.6;
        var sy=(y-f.dy)/f.sc;ctx.drawImage(img,0,sy,img.width,step/f.sc,f.dx+off,y,f.dw,step)}
      /* soft fade between still land and moving water */
    }
    /* sky: nebula clouds drift slowly */
    ctx.save();ctx.globalCompositeOperation="screen";
    for(var i=0;i<neb.length;i++){var n=neb[i],s=n.c.width/DPR,x=((n.x*W+t*7*n.sp)%(W+s))-s*.5,y=n.y*H+Math.sin(t*.15+i)*12;ctx.globalAlpha=.55+.25*Math.sin(t*.3+i);ctx.drawImage(n.c,x,y-s/2,s,s);ctx.drawImage(n.c,x-W-s*.5,y-s/2,s,s)}
    ctx.restore();ctx.globalAlpha=1;
    for(var i=0;i<stars.length;i++){var o=stars[i],a=Math.max(0,Math.sin(t*o.s+o.p));a*=a;ctx.globalAlpha=a;ctx.fillStyle="#fff";ctx.beginPath();ctx.arc(o.x,o.y,o.r,0,7);ctx.fill();
      if(o.r>1.25){ctx.globalAlpha=a*.4;ctx.fillRect(o.x-o.r*4,o.y-.3,o.r*8,.6);ctx.fillRect(o.x-.3,o.y-o.r*4,.6,o.r*8)}}
    for(var i=0;i<glints.length;i++){var g=glints[i],a=Math.max(0,Math.sin(t*g.s+g.p))*.6;ctx.globalAlpha=a;ctx.fillStyle=i%3?"#ffd9f2":"#bfe8ff";ctx.fillRect(g.x-g.w/2+Math.sin(t+g.p)*4,g.y,g.w,1.3)}
    ctx.globalAlpha=1;drawPlanets(t);
    if(!RM)requestAnimationFrame(frame)}
  var RM=false;try{RM=matchMedia("(prefers-reduced-motion: reduce)").matches}catch(e){}
  addEventListener("resize",function(){if(ok)build()});requestAnimationFrame(frame);
})();


/* ===== 21 Oct 2026 (Rahul approved PREVIEW-2): VIDEO BACKGROUND + BAWANDAR LOADING SCREEN.
   1) Singles: moving video background (galaxy + rainbow + fireworks + Pattaya sea & boats) = np-bg-loop-v1.webm/.mp4.
      The old photo background canvas (blur photo + planets) is only HIDDEN, not deleted. Weather (rain/storm/lightning) and moon still show on top.
      "PATTAYA CITY" glowing sign on the hill. Glass (see-through) cards + see-through bottom bar, text kept readable.
      Weak phones / data saver / reduced motion: still photo np-bg-still-v1.jpg instead of video. Video pauses in Family mode and when app is in background.
   2) Loading screen (both modes): galaxy bawandar + lightning over Pattaya sea, then logo + tagline. Full ~5.8 s on first open of the day,
      short ~2.4 s after that. Tap anywhere = skip. No sound. ===== */
(function(){
  if(document.getElementById("npVidBg"))return;
  var html=document.documentElement;
  var weak=false;try{weak=(navigator.connection&&navigator.connection.saveData)||matchMedia("(prefers-reduced-motion: reduce)").matches||((navigator.deviceMemory||4)<2)}catch(e){}
  var st=document.createElement("style");st.id="npVidBgCss";
  st.textContent=
   '#npVidBg{position:fixed;inset:0;z-index:-1;pointer-events:none;overflow:hidden;background:#0a0818 url(np-bg-still-v1.jpg) center/cover no-repeat}'+
   '#npVidBg video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}'+
   '#npVidBg .shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(8,6,20,.5) 0%,rgba(8,6,20,.35) 25%,rgba(8,6,20,.3) 60%,rgba(8,6,20,.35) 100%)}'+
   '#npVidBg .sign{position:absolute;top:72%;left:54%;font:700 15px/1 Poppins,system-ui,sans-serif;letter-spacing:.5px;color:#fffaf0;white-space:nowrap;'+
     'text-shadow:0 0 6px rgba(170,140,255,.95),0 0 14px rgba(150,120,255,.8),0 0 28px rgba(150,120,255,.5)}'+
   'html.np-fam #npVidBg{display:none}'+
   'html:not(.np-fam) #npPhotoBg .zoom{display:none}'+ /* old photo bg hidden, not deleted */
   'html:not(.np-fam) #npPhotoBg{background:transparent!important}'+
   /* glass cards */
   'html:not(.np-fam) #rajuCard,html:not(.np-fam) .hubtile,html:not(.np-fam) .rcard,html:not(.np-fam) .npx-tools,html:not(.np-fam) .ticker,html:not(.np-fam) .namaste,html:not(.np-fam) .npstrip,html:not(.np-fam) .goldarea,html:not(.np-fam) #npInstCard{'+
     'background:linear-gradient(160deg,rgba(40,30,80,.42),rgba(10,7,26,.66))!important;border:1px solid rgba(255,255,255,.22)!important;box-shadow:0 8px 30px rgba(0,0,0,.25),inset 0 1px 0 rgba(255,255,255,.18)!important}'+
   'html:not(.np-fam) #rajuCard *,html:not(.np-fam) .hubtile *,html:not(.np-fam) .rcard *,html:not(.np-fam) .ticker *{text-shadow:0 1px 3px rgba(0,0,0,.75)}'+
   'html:not(.np-fam) .tabs{background:linear-gradient(180deg,rgba(14,10,32,.55),rgba(8,6,20,.78))!important;border:1px solid rgba(255,255,255,.18)!important;box-shadow:0 -6px 24px rgba(0,0,0,.25)!important}'+
   'html:not(.np-fam) .tabs *{text-shadow:0 1px 3px rgba(0,0,0,.8)}'+
   'html:not(.np-fam) h1,html:not(.np-fam) h2{filter:drop-shadow(0 2px 5px rgba(0,0,0,.85))}'+
   'html:not(.np-fam) #npVidBg.sub .shade{background:rgba(8,6,20,.62)}html:not(.np-fam) #npVidBg.sub .sign{display:none}';
  document.head.appendChild(st);
  var bg=document.createElement("div");bg.id="npVidBg";bg.setAttribute("aria-hidden","true");
  bg.innerHTML=(weak?'':'<video muted loop playsinline autoplay preload="auto" poster="np-bg-still-v1.jpg"><source src="np-bg-loop-v1.webm" type="video/webm"><source src="np-bg-loop-v1.mp4" type="video/mp4"></video>')+
    '<div class="shade"></div><div class="sign">PATTAYA CITY</div>';
  var pb=document.getElementById("npPhotoBg");
  if(pb&&pb.parentNode)pb.parentNode.insertBefore(bg,pb.nextSibling);else document.body.insertBefore(bg,document.body.firstChild);
  var v=bg.querySelector("video");
  function page(){var e=document.getElementById("explore");bg.classList.toggle("sub",!!(e&&e.hidden))}
  try{new MutationObserver(page).observe(document.body,{subtree:true,attributes:true,attributeFilter:["hidden"]})}catch(e){}page();
  function sync(){if(!v)return;var on=!html.classList.contains("np-fam")&&!document.hidden;try{if(on){if(v.paused){var p=v.play();if(p&&p.catch)p.catch(function(){})}}else if(!v.paused)v.pause()}catch(e){}}
  if(v){v.muted=true;try{new MutationObserver(sync).observe(html,{attributes:true,attributeFilter:["class"]})}catch(e){}
    document.addEventListener("visibilitychange",sync);v.addEventListener("canplay",sync);sync()}
})();

(function(){
  if(document.getElementById("npIntro2"))return;
  var day=new Date().toDateString(),full=true;
  try{full=localStorage.getItem("np_intro2_day")!==day;localStorage.setItem("np_intro2_day",day)}catch(e){}
  var lg=document.querySelector("img.brandmark"),src=lg?lg.src:"";
  var st=document.createElement("style");st.id="npIntro2Css";
  st.textContent='#npIntro2{position:fixed;inset:0;z-index:2147483000;background:#05040e url(np-intro-still-v1.jpg) center/cover;overflow:hidden;transition:opacity .6s ease;cursor:pointer}'+
   '#npIntro2.out{opacity:0;pointer-events:none}'+
   '#npIntro2 video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:brightness(.85)}'+
   '#npIntro2 .flash{position:absolute;inset:0;background:#fff;opacity:0;pointer-events:none}'+
   '#npIntro2 .t{position:absolute;left:0;right:0;top:44%;text-align:center;opacity:0;transform:scale(.9);transition:opacity .8s ease,transform .8s ease;padding:0 16px}'+
   '#npIntro2.show .t{opacity:1;transform:none}'+
   '#npIntro2 .t img{width:110px;height:110px;border-radius:26px;box-shadow:0 10px 40px rgba(0,0,0,.5)}'+
   '#npIntro2 .t b{display:block;margin-top:14px;font:800 30px/1.1 Poppins,system-ui,sans-serif;color:#fff;letter-spacing:.5px;text-shadow:0 2px 10px rgba(0,0,0,.8)}'+
   '#npIntro2 .t i{display:block;margin-top:8px;font:700 12.5px/1.4 Poppins,system-ui,sans-serif;font-style:normal;color:#ffd68c;text-shadow:0 2px 6px rgba(0,0,0,.9)}'+
   '#npIntro2 .t em{display:block;font:700 12.5px/1.4 Poppins,system-ui,sans-serif;font-style:normal;color:#8cf0aa;text-shadow:0 2px 6px rgba(0,0,0,.9)}'+
   '@keyframes npIfl{0%{opacity:0}30%{opacity:.5}100%{opacity:0}}'+
   'html.np-loading body>#npIntro2#npIntro2#npIntro2{opacity:1!important;visibility:visible!important}html.np-loading body>#npIntro2#npIntro2#npIntro2.out{opacity:0!important}';
  document.head.appendChild(st);
  var d=document.createElement("div");d.id="npIntro2";d.setAttribute("aria-label","Namaste Pattaya");
  d.innerHTML='<video muted playsinline autoplay preload="auto" poster="np-intro-still-v1.jpg"><source src="np-intro-bawandar-v1.webm" type="video/webm"><source src="np-intro-bawandar-v1.mp4" type="video/mp4"></video>'+
    '<div class="flash"></div><div class="t">'+(src?'<img src="'+src+'" alt="">':'')+'<b>NAMASTE PATTAYA</b><i>BHARAT KE LIYE, EK BHARTIYE KA TOHFA</i><em>JAI HIND</em></div>';
  (document.body||html).appendChild(d);
  var v=d.querySelector("video"),fl=d.querySelector(".flash"),done=false,LOGO=3.4,END=5.7;
  function close(){if(done)return;done=true;d.classList.add("show");d.classList.add("out");setTimeout(function(){if(d.parentNode)d.parentNode.removeChild(d)},700)}
  function showT(){fl.style.animation="npIfl .5s ease";d.classList.add("show")}
  d.addEventListener("click",close);
  v.muted=true;try{v.load()}catch(e){}
  if(!full){try{v.currentTime=3.2}catch(e){};v.addEventListener("loadedmetadata",function(){try{v.currentTime=3.2}catch(e){}},{once:true})}
  var shown=false;
  v.addEventListener("timeupdate",function(){if(!shown&&v.currentTime>=LOGO){shown=true;showT()}if(v.currentTime>=END)close()});
  v.addEventListener("ended",close);
  v.addEventListener("error",function(){showT();setTimeout(close,1500)},true);
  try{var p=v.play();if(p&&p.catch)p.catch(function(){showT();setTimeout(close,1500)})}catch(e){}
  setTimeout(function(){if(!shown){shown=true;showT()}},full?4200:1800);
  setTimeout(close,full?7500:3200); /* safety: never blocks the app */
})();


/* ===== 21 Oct 2026 (Rahul's phone screenshots) – readability fixes on the video background (Singles):
   1) Tagline: Chrome auto-translate was cutting the first letter ("ारत") – the tagline line is now marked "do not translate"
      (the app's own Hindi line under it stays), and the small Hindi line is brighter.
   2) "No bookings yet" (and other empty messages) now readable: light text on a dark glass box.
   3) "PATTAYA CITY" typed text on the background is HIDDEN (not deleted) – it looked like plain typing.
   4) Club card rows now run to the right edge of the screen (no empty gap at the right). Singles only. ===== */
(function(){
  if(document.getElementById("npFix21Css"))return;
  var st=document.createElement("style");st.id="npFix21Css";
  st.textContent=
   '#npVidBg .sign{display:none!important}'+
   'html:not(.np-fam) p.tagline small{color:rgba(255,255,255,.88)!important;text-shadow:0 1px 4px rgba(0,0,0,.9)}'+
   'html:not(.np-fam) .empty,html:not(.np-fam) #noBookings{color:rgba(255,255,255,.92)!important;background:linear-gradient(160deg,rgba(40,30,80,.5),rgba(10,7,26,.72));'+
     'border:1px solid rgba(255,255,255,.2);border-radius:16px;padding:14px 16px;text-shadow:0 1px 3px rgba(0,0,0,.8)}'+
   'html:not(.np-fam) .rail,html:not(.np-fam) .nptrow{margin-right:-18px!important;padding-right:18px!important}';
  document.head.appendChild(st);
  function noTr(){document.querySelectorAll("p.tagline .npTagOrange,#npVidBg .sign").forEach(function(e){e.setAttribute("translate","no");e.classList.add("notranslate")})}
  noTr();setTimeout(noTr,1500);
})();


/* ===== 21 Oct 2026 (Rahul's phone, Family mode at night) – text was dark on the dark night scene.
   Only colours change (Family + night). Nothing removed or hidden.
   1) Section titles (Getting around, Family fun, Food & shopping, VIP Beach Clubs, My bookings ...) = white with soft shadow.
   2) "No bookings yet" and other empty messages = light text on a dark glass box.
   3) "More" menu: all text white (Family mode, day and night – the menu is always dark). ===== */
(function(){
  if(document.getElementById("npFamNightTxt"))return;
  var N="html.np-fam.np-sky-night ";
  var st=document.createElement("style");st.id="npFamNightTxt";
  st.textContent=
   N+':is(h1,h2,h3):not(:is(.rcard,#rajuCard,.hubtile,.ft,#npMoreSheet,.sheet,dialog,[role=dialog],#panel,.card,.npCard) *){color:#fff!important;text-shadow:0 2px 6px rgba(0,0,0,.7)}'+
   
   N+'.empty,'+N+'#noBookings{color:rgba(255,255,255,.92)!important;background:linear-gradient(160deg,rgba(40,30,80,.5),rgba(10,7,26,.72));border:1px solid rgba(255,255,255,.2);border-radius:16px;padding:14px 16px;text-shadow:0 1px 3px rgba(0,0,0,.8)}'+
   'html.np-fam #npMoreSheet h4,html.np-fam #npMoreSheet .it,html.np-fam #npMoreSheet .x{color:#fff!important}';
  document.head.appendChild(st);
})();



/* ===== 21 Oct 2026 (Rahul): SINGLES – Boomer / Namaste Taxi / Refer & earn row becomes an auto SLIDER (above Empowered Girls).
   All other Singles cards: lighter see-through glass, 3D look, dark shadow behind and dark borders.
   Family mode unchanged. Nothing removed – the 3 cards are the same buttons, only placed in a sliding row. ===== */
(function(){
  if(document.getElementById("npS3dCss"))return;
  var S="html:not(.np-fam) ";
  var CARDS=[S+"#rajuCard",S+".hubtile",S+".rcard",S+".npx-tools",S+".npx-lang",S+".ticker",S+".namaste",S+".npstrip",S+".goldarea",S+"#npInstCard",S+".npRow3>button",S+"#days>*",S+".tonight>*"].join(",");
  var st=document.createElement("style");st.id="npS3dCss";
  st.textContent=
   CARDS+'{background:linear-gradient(160deg,rgba(255,255,255,.16) 0%,rgba(255,255,255,.06) 45%,rgba(20,12,45,.38) 100%)!important;'+
     'border:1.5px solid rgba(8,4,20,.85)!important;'+
     'box-shadow:0 12px 26px rgba(0,0,0,.6),0 3px 6px rgba(0,0,0,.45),inset 0 1.5px 0 rgba(255,255,255,.35),inset 0 -6px 12px rgba(0,0,0,.28)!important}'+
   S+'.hubtile *,'+S+'.npx-tools *,'+S+'.npx-lang *,'+S+'.npRow3 *,'+S+'.goldarea *,'+S+'#rajuCard *,'+S+'.rcard *{text-shadow:0 1px 3px rgba(0,0,0,.85),0 0 1px rgba(0,0,0,.9)}'+
   /* slider */
   S+'.npRow3{display:flex!important;gap:12px!important;overflow-x:auto!important;scroll-snap-type:x mandatory;scrollbar-width:none;margin-right:-18px!important;padding:4px 18px 14px 2px!important;grid-template-columns:none!important}'+
   S+'.npRow3::-webkit-scrollbar{display:none}'+
   S+'.npRow3>button{flex:0 0 72%!important;max-width:72%!important;min-width:0;scroll-snap-align:start}'+
   S+'#npS3dDots{display:flex;justify-content:center;gap:6px;margin:-4px 0 14px}html.np-fam #npS3dDots{display:none}'+
   '#npS3dDots i{width:7px;height:7px;border-radius:50%;background:rgba(255,255,255,.35);transition:all .3s}#npS3dDots i.on{width:20px;border-radius:5px;background:#ff8a3d}';
  document.head.appendChild(st);
  function setup(){
    var row=document.querySelector("#npRefWrap .npRow3");if(!row||row.dataset.slider)return;row.dataset.slider="1";
    var its=[].filter.call(row.children,function(x){return x.tagName==="BUTTON"});if(its.length<2)return;
    var dots=document.createElement("div");dots.id="npS3dDots";dots.innerHTML=its.map(function(){return "<i></i>"}).join("");row.insertAdjacentElement("afterend",dots);
    var D=dots.querySelectorAll("i"),idx=0,paused=0;
    function mark(i){D.forEach(function(d,k){d.classList.toggle("on",k===i)})}mark(0);
    row.addEventListener("scroll",function(){var best=0,bd=1e9;its.forEach(function(b,k){var d=Math.abs(b.offsetLeft-its[0].offsetLeft-row.scrollLeft);if(d<bd){bd=d;best=k}});idx=best;mark(best)},{passive:true});
    row.addEventListener("touchstart",function(){paused=Date.now()},{passive:true});
    setInterval(function(){
      if(document.documentElement.classList.contains("np-fam")||document.hidden||Date.now()-paused<6000)return;
      var r=row.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;
      idx=(idx+1)%its.length;row.scrollTo({left:its[idx].offsetLeft-its[0].offsetLeft,behavior:"smooth"});mark(idx)},3000);
  }
  setup();setTimeout(setup,1500);setTimeout(setup,4000);
})();
(function(){if(document.getElementById("npS3dFix"))return;var s=document.createElement("style");s.id="npS3dFix";
 s.textContent='#npVidBg{z-index:-3!important}'+ /* video sits BEHIND live rain / storm / moon layers */
  'html:not(.np-fam) #npWx .rn{width:1.6px!important;height:62px!important;background:linear-gradient(180deg,rgba(255,255,255,0),rgba(225,238,255,.85))!important}'+
  'html.np-wx-rain:not(.np-fam) #npVidBg .shade,html.np-wx-storm:not(.np-fam) #npVidBg .shade{background:rgba(6,8,22,.5)!important}'+
  'html:not(.np-fam) .goldarea h2,html:not(.np-fam) .goldarea h2 *{text-shadow:none!important;filter:drop-shadow(0 2px 4px rgba(0,0,0,.7))}';
 document.head.appendChild(s)})();
/* ===== 21 Oct 2026 (Rahul): new name "Pattaya's Ladies Lounge" instead of "Pattaya's Empowered Girls" (all modes, all places). ===== */
(function(){
  if(window.__npLLname)return;window.__npLLname=1;
  var R=[[/Pattaya(['’]s) Empowered Girls/g,"Pattaya$1 Ladies Lounge"],[/PATTAYA(['’]S) EMPOWERED GIRLS/g,"PATTAYA$1 LADIES LOUNGE"],[/Empowered Girls lounge/gi,"Ladies Lounge"],[/Empowered Girls/g,"Ladies Lounge"]];
  function fix(root){var w=document.createTreeWalker(root||document.body,NodeFilter.SHOW_TEXT,null),n,list=[];
    while(n=w.nextNode()){if(/empowered girls/i.test(n.nodeValue))list.push(n)}
    list.forEach(function(t){var v=t.nodeValue;R.forEach(function(r){v=v.replace(r[0],r[1])});if(v!==t.nodeValue)t.nodeValue=v})}
  fix();var busy=false;
  try{new MutationObserver(function(){if(busy)return;busy=true;requestAnimationFrame(function(){busy=false;fix()})}).observe(document.body,{childList:true,subtree:true,characterData:true})}catch(e){}
})();

/* ===== 21 Oct 2026 (Rahul): "Pattaya's Empowered Girls" is now called "Pattaya's Ladies Lounge" – "Members-only zone".
   Only the words people see change (everywhere in the app); the page, its rules and its data are the same. ===== */
(function(){
  if(window.__npLadiesName)return;window.__npLadiesName=1;
  function fixText(n){var v=n.nodeValue;if(!v||!/empowered girls/i.test(v))return;
    n.nodeValue=v.replace(/Empowered Girls lounge/g,"Ladies Lounge").replace(/EMPOWERED GIRLS/g,"LADIES LOUNGE").replace(/Empowered Girls/g,"Ladies Lounge").replace(/empowered girls/g,"ladies lounge")}
  function scan(root){if(!root)return;if(root.nodeType===3){fixText(root);return}if(root.nodeType!==1)return;
    var w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),n;while((n=w.nextNode()))fixText(n);
    if(root.querySelectorAll)root.querySelectorAll("option").forEach(function(o){fixText(o.firstChild||document.createTextNode(""))})}
  function tile(){var t=document.querySelector("#explore .hubtile.ladies");if(!t)return;
    var w=document.createTreeWalker(t,NodeFilter.SHOW_TEXT),n;while((n=w.nextNode())){if(/^\s*Ladies-only lounge\s*$/i.test(n.nodeValue))n.nodeValue="Members-only zone"}}
  scan(document.body);tile();
  try{new MutationObserver(function(ms){ms.forEach(function(m){if(m.type==="characterData")fixText(m.target);else m.addedNodes.forEach(scan)});tile()})
    .observe(document.body,{subtree:true,childList:true,characterData:true})}catch(e){}
})();


/* ===== 21 Oct 2026 (Rahul): Ladies Lounge page – the filter buttons (Club updates, Ladies table, Boomer, Gossip board ...) made DARK
   so they are easy to read on the moving background. Singles only. Selected button keeps its pink colour. ===== */
(function(){
  if(document.getElementById("npLnavDark"))return;
  var st=document.createElement("style");st.id="npLnavDark";
  st.textContent='html:not(.np-fam) .lnav button:not([aria-selected="true"]){background:linear-gradient(180deg,rgba(26,16,48,.92),rgba(10,6,22,.92))!important;color:#fff!important;'+
    'border:1.5px solid rgba(0,0,0,.85)!important;box-shadow:0 6px 14px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.18)!important}'+
    'html:not(.np-fam) .lnav button[aria-selected="true"]{border:1.5px solid rgba(0,0,0,.85)!important;box-shadow:0 6px 14px rgba(0,0,0,.5)!important}';
  document.head.appendChild(st);
})();


/* ===== 22 Oct 2026 (Rahul: "sab dibbe Packages/Boomer jaise, sabka dark barabar ho, transparent bhi dark bhi") – SINGLES:
   every card has the SAME even dark see-through glass (background still shows), 3D top shine, dark border + dark shadow.
   Small grey texts (Raju info, Gold line, card subtitles, "Ask Raju...") made bright. Family mode unchanged. ===== */
(function(){
  if(document.getElementById("npEvenGlass"))return;
  var st=document.createElement("style");st.id="npEvenGlass";
  st.textContent="html:not(.np-fam) :is(#rajuCard,.hubtile,.rcard,.npx-tools,.npx-lang,.ticker,.namaste,.npstrip,.goldarea,#npInstCard,.npRow3>button,#days>*,.tonight>*,.cat,.lcard,.empty,#noBookings){background:linear-gradient(160deg,rgba(255,255,255,.15) 0%,rgba(46,32,88,.45) 40%,rgba(12,6,28,.72) 100%)!important}\nhtml:not(.np-fam){--muted:#E6DFF5}\nhtml:not(.np-fam) ::placeholder{color:rgba(255,255,255,.8)!important}\nhtml:not(.np-fam) #explore :is(#rajuCard,.hubtile,.npx-tools,.npx-lang,.goldarea,#npInstCard,.npRow3>button) :is(p,small,em,span.sub,.about){color:rgba(255,255,255,.9)!important}\nhtml:not(.np-fam) :is(#rajuCard,.hubtile,.rcard,.npx-tools,.npx-lang,.ticker,.namaste,.npstrip,.goldarea,#npInstCard,.npRow3>button,#days>*,.tonight>*,.cat,.lcard,.empty,#noBookings){background:rgba(16,10,34,.62)!important;border:1.5px solid rgba(8,4,20,.85)!important;box-shadow:0 12px 26px rgba(0,0,0,.6),0 3px 6px rgba(0,0,0,.45),inset 0 1.5px 0 rgba(255,255,255,.32),inset 0 34px 36px -30px rgba(255,255,255,.16),inset 0 -8px 14px rgba(0,0,0,.3)!important}";
  document.head.appendChild(st);
})();


/* ===== 22 Oct 2026 (Rahul: "Singles mein din mana kiya tha – hamesha raat wala look"): SINGLES always keeps the night look,
   also in daytime, dawn and dusk. Only the day/dawn/dusk colour tint over the video is switched off (not deleted).
   The real time-of-day still works in Family mode. Family boxes unchanged (Rahul: "Dabbe rehne do"). ===== */
(function(){
  if(document.getElementById("npSinglesNight"))return;
  var st=document.createElement("style");st.id="npSinglesNight";
  var S="html:not(.np-fam):is(.np-sky-day,.np-sky-dawn,.np-sky-dusk) ";
  st.textContent=S+'#npSky .tint{background:none!important}'+
    S+'#npSky .sun{opacity:0!important}'+
    'html:not(.np-fam) body #npFamScene,html:not(.np-fam) body #scene,html:not(.np-fam) body>#npFamScene{display:none!important;visibility:hidden!important}'; /* day cartoon scene hidden in Singles (not deleted) */
  document.head.appendChild(st);
})();


/* ===== 22 Oct 2026 (Rahul: "third time this logo is coming"): the "Coming soon" lock screen now shows the SAME Namaste logo as the app header,
   not logo-192.png (the old lotus-pin icon). The file logo-192.png itself is NOT changed or deleted. ===== */
(function(){
  function fix(){var lk=document.getElementById("npLock2");if(!lk)return false;var im=lk.querySelector("img.lg"),bm=document.querySelector("img.brandmark");
    if(im&&bm&&bm.src){if(im.getAttribute("data-np")!=="1"){im.src=bm.src;im.setAttribute("data-np","1");im.style.display="";im.style.borderRadius="22px"}}return !!im}
  if(!fix()){var n=0,t=setInterval(function(){if(fix()||++n>60)clearInterval(t)},120)}
})();



/* ===== 22 Oct 2026 (Rahul, decided): FLIGHTS & TICKETS + rename "Visa & tickets" -> "Visa & Legal Information"
   - New tile "Flights & Tickets": Singles "All services" (#npFlCat, hidden in Family = no duplicate) + Family "Getting around" (#npFlFam).
   - Opens full-screen page #npFlights (dark in Singles, cream in Family) with the Travelpayouts White Label widget (wl_id 23722).
     The Travelpayouts script loads ONLY when the page is opened the first time (home page stays fast).
   - Disclosure line on the page: "Flight search powered by Travelpayouts." (full commission text later in Terms, after lawyer review).
   - Visa service: only the NAME changes. Nothing inside the Visa page is removed or changed.
   - Existing Hotels tile/page NOT touched. Nothing deleted. ===== */
(function(){
  if(window.__npFlights)return;window.__npFlights=true;
  var WL_SRC="https://tpemd.com/wl_web/main.js?wl_id=23722",VISA_NAME="Visa & Legal Information",FL_NAME="Flights & Tickets";
  var PLANE='<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" transform="translate(.5 0)"/></svg>';
  /* 22 Oct: plane icons changed to option C (jet + ticket) and classic plane line icon, as Rahul chose. Soft "3D" plane picture for the Family tile (drawn, no emoji, no brand logo) */
  var FAM_IMG="data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><defs><linearGradient id="k" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe08a"/><stop offset="1" stop-color="#f6b93b"/></linearGradient><linearGradient id="f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#cddff7"/></linearGradient></defs><ellipse cx="60" cy="108" rx="34" ry="5" fill="#000" opacity=".12"/><g transform="rotate(-8 60 80)"><path d="M18 64 H102 V74 a6 6 0 0 0 0 12 V96 H18 V86 a6 6 0 0 0 0-12 Z" fill="url(#k)" stroke="#d99a1e" stroke-width="2"/><path d="M80 66 V94" stroke="#d99a1e" stroke-width="2" stroke-dasharray="4 3"/><rect x="28" y="74" width="40" height="5" rx="2.5" fill="#fff" opacity=".8"/><rect x="28" y="84" width="26" height="5" rx="2.5" fill="#fff" opacity=".8"/></g><g transform="translate(4 -8) rotate(-22 60 45)"><path d="M28 40 L22 26 L30 26 L40 40 Z" fill="#2f6fd6"/><path d="M24 48 C24 41 30 38 38 38 L86 38 C96 38 102 42 102 46 C102 50 96 54 86 54 L38 54 C30 54 24 52 24 48 Z" fill="url(#f)" stroke="#9fbde6" stroke-width="2"/><g fill="#2f6fd6"><circle cx="46" cy="45" r="2.2"/><circle cx="54" cy="45" r="2.2"/><circle cx="62" cy="45" r="2.2"/><circle cx="70" cy="45" r="2.2"/><circle cx="78" cy="45" r="2.2"/></g><path d="M96 41 C99 42 100 44 100 46 L92 46 C92 43 93 42 96 41 Z" fill="#2f6fd6"/><path d="M56 51 L44 70 L52 70 L70 51 Z" fill="#2f6fd6"/></g></svg>');
  function fam(){return document.documentElement.classList.contains("np-fam")}

  /* ---------- 1. rename Visa service (name only) ---------- */
  function renameVisa(){
    var changed=false;
    try{
      if(typeof CATS!=="undefined")CATS.forEach(function(c){
        if(!Array.isArray(c)||c[0]!=="visa"||c[2]===VISA_NAME)return;
        var old=c[2];c[2]=VISA_NAME;changed=true;
        if(typeof TYPES!=="undefined"){var i=TYPES.indexOf(old);if(i>-1)TYPES[i]=VISA_NAME}
        if(typeof state!=="undefined"&&state&&state.type===old)state.type=VISA_NAME;
      });
      if(typeof CATNAME!=="undefined"&&CATNAME.visa!==VISA_NAME){CATNAME.visa=VISA_NAME;changed=true}
      var mc=document.getElementById("mapCat");
      if(mc)[].forEach.call(mc.options,function(o){if(o.value==="visa"&&o.textContent!==VISA_NAME)o.textContent=VISA_NAME});
    }catch(e){}
    if(changed)["renderCats","renderChips"].forEach(function(f){try{if(typeof window[f]==="function")window[f]()}catch(e){}});
    /* page title of the Visa service page (if open) */
    try{var h=document.querySelector("#svcPage .svchead h2");if(h&&/^visa, legal & tickets$/i.test(h.textContent.trim()))h.textContent=VISA_NAME}catch(e){}
  }

  /* ---------- 2. Flights page ---------- */
  if(!document.getElementById("npFlCss")){var st=document.createElement("style");st.id="npFlCss";
    st.textContent=
    '#npFlights{position:fixed;inset:0;z-index:99990;display:none;flex-direction:column;background:#0b0a16;color:#f2eefc;overflow:hidden}'+
    '#npFlights.on{display:flex}'+
    '#npFlights .hd{display:flex;align-items:center;gap:10px;padding:calc(12px + env(safe-area-inset-top,0px)) 14px 12px;border-bottom:1px solid rgba(255,255,255,.08);flex:0 0 auto}'+
    '#npFlights .bk{width:44px;height:44px;border-radius:14px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.06);color:inherit;display:grid;place-items:center;cursor:pointer;flex:0 0 auto}'+
    '#npFlights .bk svg{width:22px;height:22px}'+
    '#npFlights .tt{display:flex;align-items:center;gap:10px;min-width:0}'+
    '#npFlights .tt .ic{width:40px;height:40px;border-radius:12px;display:grid;place-items:center;background:linear-gradient(135deg,#ffb547,#ff4d6d);color:#fff;flex:0 0 auto}'+
    '#npFlights .tt .ic svg{width:22px;height:22px}'+
    '#npFlights h2{margin:0;font-size:19px;font-weight:800;line-height:1.2}'+
    '#npFlights .sub{font-size:12.5px;opacity:.72;margin-top:2px}'+
    '#npFlights .bd{flex:1 1 auto;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:14px 14px calc(24px + env(safe-area-inset-bottom,0px))}'+
    '#npFlights .box{background:#fff;color:#1d1830;border-radius:20px;padding:10px;min-height:120px}'+
    '#npFlights .ld{display:flex;align-items:center;justify-content:center;gap:10px;padding:26px 10px;font-size:14px;color:#6b6385}'+
    '#npFlights .ld i{width:18px;height:18px;border-radius:50%;border:2.5px solid #d8d2ee;border-top-color:#ff7a3d;animation:npFlSpin .8s linear infinite}'+
    '@keyframes npFlSpin{to{transform:rotate(360deg)}}'+
    '#npFlights .err{display:none;padding:18px 10px;text-align:center;font-size:14px;color:#6b6385}'+
    '#npFlights .err button{margin-top:10px;min-height:44px;padding:0 18px;border-radius:999px;border:0;background:#ff7a3d;color:#fff;font:inherit;font-weight:700;cursor:pointer}'+
    '#npFlights .disc{margin:14px 4px 0;font-size:12px;opacity:.7;text-align:center}'+
    '#tpwl-tickets{margin-top:10px}'+
    /* Family = cream */
    'html.np-fam #npFlights{background:#fff4e8;color:#2b2140}'+
    'html.np-fam #npFlights .hd{border-bottom-color:rgba(43,33,64,.1)}'+
    'html.np-fam #npFlights .bk{background:#fff;border-color:rgba(43,33,64,.12);box-shadow:inset 0 -3px 0 rgba(0,0,0,.05)}'+
    'html.np-fam #npFlights .box{box-shadow:inset 0 -5px 0 rgba(0,0,0,.05),0 6px 14px rgba(140,90,40,.10)}'+
    /* Singles tile */
    '#npFlCat>span svg{width:22px;height:22px}';
    document.head.appendChild(st)}

  var page=null,loaded=false,loading=false;
  function build(){
    if(page)return page;
    page=document.createElement("div");page.id="npFlights";page.setAttribute("role","dialog");page.setAttribute("aria-label",FL_NAME);
    page.innerHTML='<div class="hd"><button class="bk" type="button" aria-label="Back"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg></button>'+
      '<div class="tt"><span class="ic">'+PLANE+'</span><div><h2>'+FL_NAME+'</h2><div class="sub">Search and compare flights</div></div></div></div>'+
      '<div class="bd"><div class="box"><div class="ld"><i></i><span>Loading flight search…</span></div>'+
      '<div class="err"><div>Flight search could not load. Please check your internet.</div><button type="button" class="rt">Try again</button></div>'+
      '<div id="tpwl-search"></div><div id="tpwl-tickets"></div></div>'+
      '<p class="disc">Flight search powered by Travelpayouts.</p></div>';
    document.body.appendChild(page);
    page.querySelector(".bk").onclick=function(){if(history.state&&history.state.np==="flights")history.back();else close()};
    page.querySelector(".rt").onclick=function(){loaded=false;loading=false;var bx2=page.querySelector(".box");bx2.style.background="";bx2.style.boxShadow="";bx2.style.padding="";["tpwl-search","tpwl-tickets"].forEach(function(id){var d=document.getElementById(id);if(d)d.style.display=""});var s=document.getElementById("npFlScript");if(s)s.remove();load()};
    return page;
  }
  function showLoad(on){var p=build();p.querySelector(".ld").style.display=on?"flex":"none"}
  function showErr(on){var p=build();p.querySelector(".err").style.display=on?"block":"none"}
  function fallback(){
    var p=build();var bx=p.querySelector(".box");bx.style.background="transparent";bx.style.boxShadow="none";bx.style.padding="0";
    ["tpwl-search","tpwl-tickets"].forEach(function(id){var d=document.getElementById(id);if(d)d.style.display="none"});
    var e=p.querySelector(".err");e.querySelector("div").textContent="Flight search could not load right now. Please try again, or search directly below.";
    if(!e.querySelector(".alt")){var a2=document.createElement("a");a2.className="alt";a2.href="https://www.aviasales.com/";a2.target="_blank";a2.rel="noopener";a2.textContent="Search flights directly";a2.style.cssText="display:block;margin-top:12px;color:#ff7a3d;font-weight:700;text-decoration:none";e.appendChild(a2)}
    showErr(true);
  }
  function load(){
    if(loaded||loading)return;loading=true;showErr(false);showLoad(true);
    var s=document.createElement("script");s.id="npFlScript";s.async=true;s.charset="utf-8";s.src=WL_SRC;
    s.onload=function(){loaded=true;loading=false;
      /* hide the "Loading" text once the widget has drawn something (or after 8 s) */
      var n=0,t=setInterval(function(){var a=document.getElementById("tpwl-search");
        if(a&&a.children.length){clearInterval(t);showLoad(false);return}
        if(++n>40){clearInterval(t);showLoad(false);fallback()}},200)};
    s.onerror=function(){loading=false;showLoad(false);fallback()};
    document.body.appendChild(s);
  }
  function open(){
    var p=build();p.classList.add("on");document.documentElement.style.overflow="hidden";
    if(!(history.state&&history.state.np==="flights"))history.pushState({np:"flights"},"","#flights");
    load();
    try{if(window.npTrack)window.npTrack("open_flights",fam()?"family":"singles")}catch(e){}
  }
  function close(){if(page)page.classList.remove("on");document.documentElement.style.overflow=""}
  window.addEventListener("popstate",function(){if(!(history.state&&history.state.np==="flights"))close()});
  window.npOpenFlights=open;

  /* ---------- 3. tiles ---------- */
  function singlesTile(){
    var cats=document.getElementById("cats");if(!cats||document.getElementById("npFlCat"))return;
    var b=document.createElement("button");b.type="button";b.id="npFlCat";b.className="cat npFamDup";
    b.innerHTML='<span>'+PLANE+'</span>';b.append(FL_NAME);
    b.onclick=function(e){e.stopPropagation();open()};
    /* place it right after the Visa tile; if not found, at the end */
    var after=null;[].forEach.call(cats.querySelectorAll(".cat"),function(c){if(/^visa/i.test(c.textContent.trim()))after=c});
    if(after&&after.nextSibling)cats.insertBefore(b,after.nextSibling);else cats.appendChild(b);
  }
  function familyTile(){
    var home=document.getElementById("npFamHome");if(!home||document.getElementById("npFlFam"))return;
    var h=[].slice.call(home.querySelectorAll("h3")).find(function(x){return /getting around/i.test(x.textContent)});
    var g=h&&h.nextElementSibling;if(!g)return;
    var b=document.createElement("button");b.type="button";b.id="npFlFam";b.className="ft";b.style.background="#d9ecff";
    var im=document.createElement("img");im.src=FAM_IMG;im.alt="";var t=document.createElement("div");t.textContent=FL_NAME;
    b.appendChild(im);b.appendChild(t);b.onclick=function(){try{open()}catch(e){}};
    var visa=[].slice.call(g.querySelectorAll(".ft")).find(function(x){return /^visa/i.test(x.textContent.trim())});
    if(visa&&visa.nextSibling)g.insertBefore(b,visa.nextSibling);else g.appendChild(b);
  }
  function run(){renameVisa();singlesTile();familyTile()}
  run();window.addEventListener("load",run);setTimeout(run,1500);setTimeout(run,4000);
  var busy=false;new MutationObserver(function(){if(busy)return;busy=true;requestAnimationFrame(function(){busy=false;try{singlesTile();familyTile()}catch(e){}})}).observe(document.body,{childList:true,subtree:true});
  /* opened directly with #flights in the address */
  if(location.hash==="#flights")setTimeout(function(){history.replaceState({np:"flights"},"","#flights");open()},600);
})();

/* ===== 22 Oct 2026 (Rahul): Family home tiles can be slid to any place and stay there. The "↺ Wapis jagah" button brings every tile back to the normal layout. Family mode only. Nothing is deleted. ===== */
(function(){
  if(window.__npFamDrag)return;window.__npFamDrag=true;
  var KEY="np_fam_layout_v1",DEF="np_fam_default_v1",seq=0,dragging=null,moved=false,suppress=false,lastT=null,lastAfter=null;
  var css=document.createElement("style");css.id="npFamDragCss";
  css.textContent=""+
    ".npDragging{opacity:.85;transform:scale(1.05);z-index:5;position:relative;box-shadow:0 12px 24px rgba(0,0,0,.28)!important}"+
    "#npRst{display:flex;justify-content:flex-end;padding:6px 16px 0}#npRst button{border:0;border-radius:999px;padding:9px 14px;background:#fff;color:#2b2140;font:inherit;font-weight:800;font-size:13px;box-shadow:0 3px 0 rgba(0,0,0,.12);cursor:pointer}";
  document.head.appendChild(css);
  function fam(){return document.documentElement.classList.contains("np-fam")}
  function H(){return document.getElementById("npFamHome")}
  function rows(){var h=H();return h?[].slice.call(h.querySelectorAll(".fg")):[]}
  function tiles(){var h=H();return h?[].slice.call(h.querySelectorAll(".ft")):[]}
  function assign(){tiles().forEach(function(t){if(!t.dataset.npk)t.dataset.npk=t.id?("id:"+t.id):("t"+(++seq))})}
  function find(k){return tiles().filter(function(t){return t.dataset.npk===k})[0]}
  function snap(){return rows().map(function(r){return [].slice.call(r.children).filter(function(c){return c.classList&&c.classList.contains("ft")}).map(function(c){return c.dataset.npk})})}
  function same(a,b){return JSON.stringify(a)===JSON.stringify(b)}
  function apply(layout){
    if(!layout)return;
    rows().forEach(function(r,i){
      var want=layout[i];if(!want)return;
      var keep=want.filter(function(k){return !!find(k)});
      var have=[].slice.call(r.children).filter(function(c){return c.classList&&c.classList.contains("ft")}).map(function(c){return c.dataset.npk});
      if(same(have,keep))return;
      keep.forEach(function(k){r.appendChild(find(k))});
    });
  }
  function save(){try{localStorage.setItem(KEY,JSON.stringify(snap()))}catch(e){}}
  function load(k){try{return JSON.parse(localStorage.getItem(k)||"null")}catch(e){return null}}
  function resetBtn(){
    var h=H();if(!h||document.getElementById("npRst"))return;
    var d=document.createElement("div");d.id="npRst";
    var b=document.createElement("button");b.type="button";b.textContent="↺ Wapis jagah";
    b.onclick=function(){apply(load(DEF));try{localStorage.removeItem(KEY)}catch(e){}};
    d.appendChild(b);h.insertBefore(d,h.firstChild);
  }
  function run(){
    return; /* Family drag disabled (23 Oct): grids stay in their normal places */
    if(!fam()||!H()||!tiles().length)return;
    assign();
    if(!load(DEF)){try{localStorage.setItem(DEF,JSON.stringify(snap()))}catch(e){}}
    apply(load(KEY));
    resetBtn();
  }
  document.addEventListener("pointerdown",function(e){
    return; /* drag disabled */
    if(!fam()||e.button>0)return;
    var t=e.target.closest&&e.target.closest("#npFamHome .ft");if(!t)return;
    dragging={t:t,x:e.clientX,y:e.clientY};moved=false;
  },true);
  document.addEventListener("pointermove",function(e){
    if(!dragging)return;
    if(!moved){
      if(Math.abs(e.clientX-dragging.x)+Math.abs(e.clientY-dragging.y)<14)return;
      moved=true;dragging.t.classList.add("npDragging");
    }
    var el=document.elementFromPoint(e.clientX,e.clientY);if(!el)return;
    var t=dragging.t,target=el.closest&&el.closest("#npFamHome .ft");
    if(target&&target!==t){
      var r=target.getBoundingClientRect(),after=e.clientX>r.left+r.width/2;
      if(lastT!==target||lastAfter!==after){
        target.parentNode.insertBefore(t,after?target.nextSibling:target);
        lastT=target;lastAfter=after;
      }
    }else{
      var row=el.closest&&el.closest("#npFamHome .fg");
      if(row&&row!==t.parentNode){row.appendChild(t);lastT=null}
    }
  },true);
  function end(){
    if(!dragging)return;
    var t=dragging.t;t.classList.remove("npDragging");
    if(moved){suppress=true;setTimeout(function(){suppress=false},300);save()}
    dragging=null;lastT=null;lastAfter=null;moved=false;
  }
  document.addEventListener("pointerup",end,true);
  document.addEventListener("pointercancel",end,true);
  document.addEventListener("click",function(e){if(suppress){e.stopPropagation();e.preventDefault()}},true);
  var busy=false;
  new MutationObserver(function(){if(busy)return;busy=true;setTimeout(function(){busy=false;try{run()}catch(e){}},150)}).observe(document.body,{childList:true,subtree:true});
  window.addEventListener("load",run);setTimeout(run,1500);setTimeout(run,4000);
})();

/* ===== 22 Oct 2026: 3D Tornado booking page (opens at #tornado). Only adds a new page; nothing existing changed.
   Themes are set in THEMES below: anyone (team, Claude, or a user) can pick one. Themes can be sold to VIP later. ===== */
(function(){
  if(window.__npTornado)return;window.__npTornado=true;
  var THEMES={
    Sunset:{bg:"linear-gradient(#2b1d4a,#8a3f5f 55%,#f08a4b)",title:"#fff",sub:"#ffe2cc",cloud:"rgba(255,220,190,.35)",cards:["#ffe7cf","#ffd9c2","#ffe0e8","#fff0c2"],acc:["#e0662c","#c2375b","#b7860b","#9b3fc0"]},
    Night:{bg:"linear-gradient(#1f2350,#4a3f7a 60%,#7a5d7e)",title:"#fff",sub:"#d7d0ef",cloud:"rgba(200,190,240,.22)",cards:["#ffffff","#e4f7ea","#d9ecff","#fbe6ff"],acc:["#e0662c","#2e9e5b","#2f6fd6","#9b3fc0"]},
    Monsoon:{bg:"linear-gradient(#2c3e50,#4b6c7f 60%,#8aa7b5)",title:"#fff",sub:"#dfeaf0",cloud:"rgba(230,240,245,.40)",cards:["#d9f6ef","#d9ecff","#e0f5e4","#ece6ff"],acc:["#16907a","#2f6fd6","#2e9e5b","#6a4fc9"]}
  };
  var APPS=["Hotels","Villas","Flights","Taxi","Motorbike","Bike","SUV","Self drive","Ride Pass","Private jet","Visa & Legal","Spa","Golf","Shows","Groceries","Beach"];
  var css="#npTornado{position:fixed;inset:0;z-index:99998;display:none;font-family:sans-serif;overflow:hidden;touch-action:none;transition:background .6s}"+
    "#npTornado.on{display:block}"+
    "#npTornado .tt{position:absolute;top:44px;left:0;right:0;text-align:center;font-weight:800;font-size:17px;z-index:9}"+
    "#npTornado .ss{position:absolute;top:72px;left:0;right:0;text-align:center;font-size:12px;z-index:9;opacity:.85}"+
    "#npTornado .stage{position:absolute;inset:0;perspective:900px}"+
    "#npTornado .wrap{position:absolute;left:50%;top:50%;width:0;height:0;transform-style:preserve-3d}"+
    "#npTornado .ap{position:absolute;left:0;top:0;border-radius:20px;background:#fff;box-shadow:0 10px 22px rgba(0,0,0,.28);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;font-weight:800;color:#2b2140;will-change:transform}"+
    "#npTornado .ap i{display:block;width:30%;height:30%;border-radius:40%;margin-bottom:6px}"+
    "#npTornado .ap span{font-size:11px;line-height:1.1}"+
    "#npTornado .cl{position:absolute;left:0;top:0;border-radius:50%;filter:blur(14px);pointer-events:none;will-change:transform}"+
    "#npTornado .bar{position:absolute;bottom:24px;left:0;right:0;display:flex;justify-content:center;gap:8px;z-index:9;flex-wrap:wrap;padding:0 12px}"+
    "#npTornado .bar button{border:0;border-radius:999px;padding:8px 13px;font:inherit;font-size:12px;font-weight:800;cursor:pointer;background:rgba(255,255,255,.9);color:#2b2140}"+
    "#npTornado .bar button.on{background:#2b2140;color:#fff}"+
    "#npTornado .st{position:absolute;bottom:72px;left:0;right:0;text-align:center;font-size:12px;z-index:9;opacity:.85}"+
    "#npTornado .bk{position:absolute;top:14px;left:14px;z-index:10;border:0;border-radius:999px;padding:8px 13px;font:inherit;font-size:12px;font-weight:800;background:rgba(255,255,255,.9);color:#2b2140;cursor:pointer}";
  var st=document.createElement("style");st.id="npTornadoCss";st.textContent=css;document.head.appendChild(st);
  var root=document.createElement("div");root.id="npTornado";
  root.innerHTML='<button class="bk" type="button">‹ Wapis</button><div class="tt" id="npTtl">Namaste Pattaya</div><div class="ss" id="npSub">Tap karke rokein, ungli se ghumaayein</div><div class="stage"><div class="wrap" id="npWrap"></div></div><div class="st" id="npSt">Chal raha hai</div><div class="bar" id="npBar"></div>';
  document.body.appendChild(root);
  var wrap=root.querySelector("#npWrap"),bar=root.querySelector("#npBar"),ttl=root.querySelector("#npTtl"),sub=root.querySelector("#npSub"),sst=root.querySelector("#npSt");
  var N=APPS.length,H=520,t=0,spin=0.0035,paused=false,drag=null,els=[],clouds=[],cur="Night",raf=0,built=false;
  function build(){
    if(built)return;built=true;
    for(var c=0;c<9;c++){var cl=document.createElement("div");cl.className="cl";wrap.appendChild(cl);clouds.push({e:cl,f:c/8,off:c*0.9,w:150+(c%3)*40,h:40+(c%2)*16});}
    APPS.forEach(function(n,i){var e=document.createElement("div");e.className="ap";e.innerHTML='<i></i><span>'+n+'</span>';wrap.appendChild(e);els.push({e:e,i:i});});
    Object.keys(THEMES).forEach(function(name){var b=document.createElement("button");b.type="button";b.textContent=name;b.onclick=function(){applyTheme(name)};bar.appendChild(b)});
  }
  function applyTheme(name){
    var th=THEMES[name];cur=name;
    root.style.background=th.bg;ttl.style.color=th.title;sub.style.color=th.sub;sst.style.color=th.sub;
    els.forEach(function(o,k){o.e.style.background=th.cards[k%th.cards.length];o.e.querySelector("i").style.background=th.acc[k%th.acc.length]});
    clouds.forEach(function(c){c.e.style.background=th.cloud});
    Array.prototype.forEach.call(bar.children,function(b){b.className=(b.textContent===name)?"on":""});
  }
  function frame(){
    if(!paused)t+=spin;
    var items=[];
    els.forEach(function(o){
      var f=o.i/(N-1),ang=o.i*2.399+t,R=160*(1-f*0.78),y=H/2-f*H;
      var x=R*Math.cos(ang),z=R*Math.sin(ang),pr=900/(900-z),s=(46+(1-f)*68)/100;
      items.push({e:o.e,z:z,px:x*pr,py:y,sc:s*pr,op:0.45+0.55*((z+R)/(2*R)),sz:1});
    });
    clouds.forEach(function(c){
      var f=c.f,ang=c.off+t*1.4,R=170*(1-f*0.78),y=H/2-f*H;
      var x=R*Math.cos(ang),z=R*Math.sin(ang),pr=900/(900-z);
      items.push({e:c.e,z:z+0.5,px:x*pr,py:y,sc:pr,op:(z>0?0.35:0.9),sz:0,cw:c.w,ch:c.h});
    });
    items.sort(function(a,b){return a.z-b.z});
    items.forEach(function(it,k){
      var e=it.e;
      if(it.sz){e.style.width="100px";e.style.height="100px";}
      else{e.style.width=it.cw+"px";e.style.height=it.ch+"px";}
      e.style.transform="translate(-50%,-50%) translate3d("+it.px+"px,"+it.py+"px,0) scale("+it.sc+")";
      e.style.opacity=it.op;e.style.zIndex=k;
    });
    raf=requestAnimationFrame(frame);
  }
  function tap(){paused=!paused;sst.textContent=paused?"Ruka hua hai. Ungli khinchein to ghoomega":"Chal raha hai"}
  root.addEventListener("pointerdown",function(e){if(e.target.tagName==="BUTTON")return;drag={x:e.clientX,t:t,moved:false}});
  root.addEventListener("pointermove",function(e){if(!drag)return;var dx=e.clientX-drag.x;if(Math.abs(dx)>6){drag.moved=true;paused=true;t=drag.t+dx*0.01}});
  root.addEventListener("pointerup",function(e){if(drag&&!drag.moved&&e.target.tagName!=="BUTTON")tap();drag=null});
  function open(){build();applyTheme(cur);root.classList.add("on");if(!raf)raf=requestAnimationFrame(frame)}
  function close(){root.classList.remove("on");cancelAnimationFrame(raf);raf=0}
  root.querySelector(".bk").onclick=function(){if(location.hash==="#tornado"){history.replaceState(null,"",location.pathname+location.search)}close()};
  function route(){if(location.hash==="#tornado")open();else close()}
  window.addEventListener("hashchange",route);
  if(location.hash==="#tornado")route();
  window.npOpenTornado=function(){location.hash="#tornado"};
  window.npOpenTornadoBg=function(){root.classList.add("bg");open()};
})();

/* ===== 23 Oct 2026 (Rahul, final decisions): Moon removed. 3D Tornado shown as a visible background layer in the centre of the home screen, behind the cards, non-blocking. ===== */
(function(){
  var s=document.createElement("style");s.id="npFinalBg";
  s.textContent=
    "#npSky .moon{display:none!important}"+
    "#npTornado.bg{position:fixed;inset:0;z-index:-1;pointer-events:none;display:block;opacity:.6}"+
    "#npTornado.bg .tt,#npTornado.bg .ss,#npTornado.bg .bar,#npTornado.bg .st,#npTornado.bg .bk{display:none}";
  document.head.appendChild(s);
  function go(){
    var r=document.getElementById("npTornado");
    if(!r||!window.npOpenTornadoBg)return;
    window.npOpenTornadoBg();
  }
  /* tornado background removed (23 Oct, owner request): go() is no longer called */
  void go;
})();
