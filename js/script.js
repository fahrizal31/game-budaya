/********************
 * DATA STORE (STATIC)
 ********************/
const staticDB = {
  version: 1,
  houses: [
    { id: 'house-1', name: 'Rumah Gadang', credit: 'Foto oleh Arief Suwandi, Wikimedia Commons', history: 'Rumah Gadang adalah rumah adat Minangkabau, Sumatera Barat. Rumah ini memiliki atap berbentuk gonjong yang menyerupai tanduk kerbau. Fungsinya sebagai tempat tinggal dan juga tempat melaksanakan upacara adat.', size: 3, img: 'img/rumah-gadang.png' },
    { id: 'house-2', name: 'Tongkonan', credit: 'Sumber: Kementerian Pariwisata dan Ekonomi Kreatif', history: 'Tongkonan adalah rumah tradisional suku Toraja di Sulawesi Selatan. Atapnya yang melengkung ke atas sangat khas dan dianggap sebagai perwujudan alam semesta. Rumah ini menjadi pusat kehidupan sosial dan spiritual masyarakat.', size: 4, img: 'img/tongkonan.png' },
    { id: 'house-3', name: 'Rumah Bolon', credit: 'Foto oleh Perpusnas Indonesia, Wikimedia Commons', history: 'Rumah Bolon adalah rumah adat suku Batak Toba, Sumatera Utara. Ciri khasnya adalah bangunan berbentuk persegi besar dengan atap dari ijuk dan dinding dari papan tanpa menggunakan paku. Pilar-pilar kayunya yang besar menjadi daya tarik utama.', size: 4, img: 'img/rumah-bolon.png' },
    { id: 'house-4', name: 'Rumah Joglo', credit: 'Sumber: Taman Mini Indonesia Indah', history: 'Rumah Joglo adalah rumah tradisional dari Jawa Tengah dan Yogyakarta. Struktur atapnya yang bertingkat dengan puncak yang meruncing (tumpang) melambangkan kesuburan dan hubungan antara manusia dengan Tuhan.', size: 3, img: 'img/joglo.png' },
    { id: 'house-5', name: 'Rumah Kebaya', credit: 'Foto oleh Ary Siswanto, Wikimedia Commons', history: 'Rumah Kebaya adalah rumah adat suku Betawi, Jakarta. Namanya berasal dari bentuk atapnya yang melengkung mirip lipatan kebaya. Rumah ini sering digunakan untuk tempat tinggal dan acara-acara adat Betawi.', size: 3, img: 'img/rumah-kebaya.png' },
    { id: 'house-6', name: 'Rumah Betang', credit: 'Sumber: Dokumentasi Kementerian Pariwisata', history: 'Rumah Betang adalah rumah tradisional suku Dayak di Kalimantan. Berbentuk rumah panggang yang sangat panjang, rumah ini dihuni oleh banyak keluarga dalam satu komunitas besar. Tingginya dari tanah untuk menghindari banjir dan hewan liar.', size: 5, img: 'img/rumah-betang.png' },
    { id: 'house-7', name: 'Bola Soba', credit: 'Sumber: Dinas Kebudayaan Sulawesi Selatan', history: 'Bola Soba adalah rumah adat suku Bugis, Sulawesi Selatan. Berbeda dengan Tongkonan, atap Bola Soba cenderung lebih simetris dan tidak melengkung setinggi Tongkonan. Rumah ini mencerminkan status sosial pemiliknya.', size: 4, img: 'img/bola-soba.png' },
    { id: 'house-8', name: 'Uma Mbatangu', credit: 'Sumber: Pemerintah Daerah Sumba Timur', history: 'Uma Mbatangu atau "rumah besar" adalah rumah adat suku Sumba di Nusa Tenggara Timur. Atapnya yang sangat tinggi dan besar terbuat dari alang-alang dan memiliki tiga tingkatan yang melambangkan lapisan langit.', size: 4, img: 'img/uma-mbatangu.png' },
    { id: 'house-9', name: 'Baileo', credit: 'Foto oleh J. Tondok, Wikimedia Commons', history: 'Baileo adalah bangunan adat masyarakat Maluku yang berfungsi sebagai balai pertemuan atau pusat pemerintahan adat. Strukturnya terbuka dan menjadi tempat untuk melakukan upacara adat, musyawarah, dan aktivitas komunal lainnya.', size: 3, img: 'img/baileo.png' },
    { id: 'house-10', name: 'Honai', credit: 'Sumber: Pemerintah Daerah Papua', history: 'Honai adalah rumah tradisional suku Dani di Lembah Baliem, Papua. Berbentuk bundar dengan atap jerami yang menutup hingga ke tanah, rumah ini dirancang untuk menghangatkan penghuninya di udara pegunungan yang dingin.', size: 3, img: 'img/honai.png' },
    { id: 'house-11', name: 'Rumah Limas', credit: 'Sumber: Museum Negeri Sumatera Selatan Balaputera Dewa', history: 'Rumah Limas adalah rumah adat Provinsi Sumatera Selatan, khususnya suku Palembang. Ciri khas utamanya adalah atap berbentuk limas (piramida) yang bersusun. Rumah ini mencerminkan stratifikasi sosial masyarakat.', size: 4, img: 'img/rumah-limas.png' },
    { id: 'house-12', name: 'Rumah Lopo', credit: 'Sumber: Dinas Kebudayaan Pariwisata Pemuda dan Olahraga Alor', history: 'Rumah Lopo adalah rumah adat dari Pulau Alor, Nusa Tenggara Timur. Rumah ini berbentuk persegi dengan atap yang terbuat dari alang-alang dan memiliki tiang penyangga yang tinggi. Fungsinya sebagai tempat tinggal dan kegiatan adat.', size: 3, img: 'img/lopo.png' }
  ],
  questions: [
    { id: 'q-1', text: 'Rumah adat manakah yang berasal dari Sumatera Barat dan memiliki atap berbentuk seperti tanduk kerbau?', options: ['Rumah Gadang', 'Tongkonan', 'Honai', 'Joglo'], answerIndex: 0, houseId: 'house-1' },
    { id: 'q-2', text: 'Rumah adat Tongkonan merupakan rumah tradisional dari suku apa?', options: ['Suku Minangkabau', 'Suku Jawa', 'Suku Toraja', 'Suku Sasak'], answerIndex: 2, houseId: 'house-2' },
    { id: 'q-3', text: 'Rumah adat "Bolon" dari suku Batak Toba memiliki ciri khas berupa...?', options: ['Pilar kayu besar yang menjulang tanpa menggunakan paku', 'Atap berbentuk seperti tanduk kerbau', 'Rumah panggang panjang untuk banyak keluarga', 'Atap berbentuk piramida bersusun'], answerIndex: 0, houseId: 'house-3' },
    { id: 'q-4', text: 'Rumah adat dengan struktur atap bertingkat yang melambangkan kesuburan dan berasal dari Jawa adalah...?', options: ['Rumah Kebaya', 'Rumah Limas', 'Rumah Joglo', 'Bola Soba'], answerIndex: 2, houseId: 'house-4' },
    { id: 'q-5', text: 'Nama rumah adat Betawi yang dinamai demikian karena bentuk atapnya mirip lipatan pakaian tradisional adalah...?', options: ['Rumah Kebaya', 'Rumah Joglo', 'Rumah Gadang', 'Rumah Limas'], answerIndex: 0, houseId: 'house-5' },
    { id: 'q-6', text: 'Rumah adat yang berbentuk sangat panjang dan dihuni oleh banyak keluarga sekaligus adalah ciri khas dari rumah adat...?', options: ['Rumah Betang', 'Honai', 'Baileo', 'Uma Mbatangu'], answerIndex: 0, houseId: 'house-6' },
    { id: 'q-7', text: 'Rumah adat Bola Soba berasal dari suku...?', options: ['Bugis', 'Makassar', 'Mandar', 'Toraja'], answerIndex: 0, houseId: 'house-7' },
    { id: 'q-8', text: 'Uma Mbatangu adalah rumah adat yang berasal dari pulau...?', options: ['Sumba', 'Flores', 'Bali', 'Lombok'], answerIndex: 0, houseId: 'house-8' },
    { id: 'q-9', text: 'Baileo di Maluku berfungsi utama sebagai...?', options: ['Balai pertemuan dan pusat adat', 'Rumah tinggal kepala suku', 'Tempat penyimpanan hasil bumi', 'Peninggalan kerajaan'], answerIndex: 0, houseId: 'house-9' },
    { id: 'q-10', text: 'Rumah adat Honai yang berbentuk bundar dirancang untuk menghadapi iklim...?', options: ['Dingin di pegunungan', 'Panas di pantai', 'Basah di hutan', 'Kering di gurun'], answerIndex: 0, houseId: 'house-10' },
    { id: 'q-11', text: 'Rumah adat dengan atap berbentuk piramida yang merupakan ikon dari Sumatera Selatan adalah...?', options: ['Rumah Limas', 'Rumah Gadang', 'Rumah Bolon', 'Rumah Kebaya'], answerIndex: 0, houseId: 'house-11' },
    { id: 'q-12', text: 'Rumah Lopo adalah rumah adat yang berasal dari...?', options: ['Pulau Alor', 'Pulau Timor', 'Pulau Sulawesi', 'Pulau Kalimantan'], answerIndex: 0, houseId: 'house-12' }
  ],
  settings: { adminCode: '1234', quizLength: 5 }
};

function loadDB() { return staticDB; }
function saveDB(db) {
  console.warn('Perubahan tidak disimpan. Aplikasi ini berjalan dalam mode statis. Untuk mengubah data, silakan edit file JavaScript secara manual.');
  alert('Mode Statis: Perubahan tidak disimpan. Untuk memperbarui, edit file `js/script.js` dan upload ulang.');
}

/********************
 * UTILITIES
 ********************/
const $ = (id)=>document.getElementById(id);
const pad = (n)=>String(n).padStart(2,'0');
function randomId(prefix='id'){return prefix+'-'+Date.now().toString(36)+Math.random().toString(36).slice(2,7)}
function shuffle(arr){ for(let i=arr.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]]; } return arr; }

/********************
 * ROUTING
 ********************/
function show(page){ ['page-landing','page-quiz','page-puzzle','page-admin'].forEach(id=>$(id).classList.remove('active')); $(page).classList.add('active'); }

/********************
 * LANDING
 ********************/
function refreshLanding(){ const db=loadDB(); const sel=$('sel-direct-house'); sel.innerHTML=''; if(!db.houses.length){ const opt=document.createElement('option'); opt.textContent='(Belum ada)'; sel.appendChild(opt); return; } db.houses.forEach(h=>{ const opt=document.createElement('option'); opt.value=h.id; opt.textContent=h.name; sel.appendChild(opt); }); }
 $('btn-home').addEventListener('click', ()=>show('page-landing'));
 $('btn-admin').addEventListener('click', ()=>show('page-admin'));
 $('btn-start-direct').addEventListener('click', ()=>{ const id=$('sel-direct-house').value; if(!id){ alert('Belum ada rumah. Tambahkan di Admin.'); return; } startPuzzle(id); });
 $('btn-start-quiz').addEventListener('click', ()=>{ const db=loadDB(); const len = Number($('quiz-length').value || db.settings.quizLength || 5); startQuiz(len); });

/********************
 * QUIZ ENGINE
 ********************/
let quizIndices = [], quizIdx = 0;
function startQuiz(length=5){ const db=loadDB(); if(!db.questions.length){ alert('Belum ada pertanyaan. Tambahkan di Admin.'); show('page-admin'); return; } const all=Array.from(db.questions.keys()); shuffle(all); quizIndices = all.slice(0, Math.min(length, db.questions.length)); quizIdx=0; $('quiz-progress').textContent = `(0/${quizIndices.length})`; renderQuestion(); show('page-quiz'); }
 $('btn-exit-quiz').addEventListener('click', ()=>show('page-landing'));
 $('btn-back-quiz').addEventListener('click', ()=>show('page-quiz'));
 $('btn-next-question').addEventListener('click', ()=>{ nextQuestion(); });
function renderQuestion(){ const db=loadDB(); const qIdx = quizIndices[quizIdx]; const q = db.questions[qIdx]; const box=$('quiz-box'); if(!q){ finishQuiz(); return; } $('quiz-progress').textContent = `(${quizIdx+1}/${quizIndices.length})`; box.innerHTML=''; const elQ=document.createElement('div'); elQ.style.fontSize='18px'; elQ.style.marginBottom='8px'; elQ.innerHTML = `<strong>Pertanyaan:</strong> ${q.text}`; box.appendChild(elQ); (q.options||[]).forEach((opt,i)=>{ const btn=document.createElement('button'); btn.className='option'; btn.textContent=String.fromCharCode(65+i)+'. '+opt; btn.addEventListener('click',()=>{ const correct = i === (q.answerIndex||0); if (correct){ startPuzzle(q.houseId); } else { btn.classList.add('wrong'); setTimeout(()=>btn.classList.remove('wrong'), 600); } }); box.appendChild(btn); }); }
function nextQuestion(){ if (quizIdx+1 >= quizIndices.length){ finishQuiz(); } else { quizIdx++; renderQuestion(); show('page-quiz'); } }
function finishQuiz(){ const box=$('quiz-box'); box.innerHTML = '<h3>Selesai! 👏</h3><p>Kamu sudah menyelesaikan sesi kuis. Silakan kembali ke Beranda atau mulai lagi.</p>'; }

/********************
 * PUZZLE ENGINE
 ********************/
let size=3, order=[], moves=0, running=false, won=false, timerId=null, ms=0, currentHouse=null, imgUrl='';
function fmt(ms){ const s=Math.floor(ms/1000); return `${pad(Math.floor(s/60))}:${pad(s%60)}.${pad(Math.floor((ms%1000)/10))}`; }
function startTimer(){ stopTimer(); timerId=setInterval(()=>{ ms+=100; $('time').textContent=fmt(ms); },100); }
function stopTimer(){ if(timerId){ clearInterval(timerId); timerId=null; } }
function shuffledSolvableOrder(n){ const t=n*n; const arr=Array.from({length:t},(_,i)=>i); for(let i=t-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]]; } if(!isSolvable(arr,n)){ const i1=arr.findIndex(x=>x!==t-1); const i2=arr.findIndex((x,idx)=>x!==t-1 && idx!==i1); [arr[i1],arr[i2]]=[arr[i2],arr[i1]]; } return arr; }
function isSolvable(order,n){ const t=n*n; const bi=order.indexOf(t-1); const arr=order.filter(x=>x!==t-1); let inv=0; for(let i=0;i<arr.length;i++){ for(let j=i+1;j<arr.length;j++){ if(arr[i]>arr[j]) inv++; } } if(n%2===1) return inv%2===0; const rowTop=Math.floor(bi/n); const rowBottom=n-rowTop; return (rowBottom%2===0)?(inv%2===1):(inv%2===0); }
function renderBoard(){ const total=size*size, blank=total-1; const board=$('board'); board.innerHTML=''; const tilePct=100/size; order.forEach((tile,idx)=>{ const r=Math.floor(idx/size), c=idx%size; const tr=Math.floor(tile/size), tc=tile%size; const isBlank = tile===blank; const btn=document.createElement('button'); btn.className='tile'; btn.style.left=(c*tilePct)+'%'; btn.style.top=(r*tilePct)+'%'; btn.style.width=tilePct+'%'; btn.style.height=tilePct+'%'; btn.style.transition='left 120ms ease, top 120ms ease'; btn.style.cursor=isBlank?'default':'pointer'; if(!isBlank){ const face=document.createElement('div'); face.className='tile-face'; face.style.backgroundImage=`url(${imgUrl})`; face.style.backgroundSize=(size*100)+'% '+(size*100)+'%'; face.style.backgroundPosition=(tc*(100/(size-1)))+'% '+(tr*(100/(size-1)))+'%'; const num=document.createElement('div'); num.className='tile-num'; num.textContent=String(tile+1); face.appendChild(num); btn.appendChild(face); } btn.addEventListener('click',()=>tryMove(idx)); board.appendChild(btn); }); $('hint').src = imgUrl; updateBestUI(); }
function tryMove(idx){ if(won) return; const r=Math.floor(idx/size), c=idx%size; const total=size*size, blank=total-1; const bi=order.indexOf(blank), br=Math.floor(bi/size), bc=bi%size; const adj=(Math.abs(r-br)+Math.abs(c-bc))===1; if(adj){ [order[idx],order[bi]]=[order[bi],order[idx]]; moves++; $('moves').textContent=String(moves); if(!running){ running=true; startTimer(); } renderBoard(); checkWin(); } }
function checkWin(){ const ok=order.every((v,i)=>v===i); if(!ok) return; won=true; running=false; stopTimer(); const key=`best-${size}-${currentHouse}`; const prev=localStorage.getItem(key); if(!prev || Number(prev)>ms){ localStorage.setItem(key,String(ms)); } $('win-stats').textContent = `Langkah: ${moves} • Waktu: ${fmt(ms)}`; const db=loadDB(); const h = db.houses.find(x=>x.id===currentHouse); $('history').textContent = h?.history || ''; $('win').style.display='flex'; updateBestUI(); }
function updateBestUI(){ const key=`best-${size}-${currentHouse}`; const v=localStorage.getItem(key); $('best').textContent = v? fmt(Number(v)) : '–'; $('best-label').textContent = `${size}×${size}`; }
function startShuffle(){ order=shuffledSolvableOrder(size); moves=0; $('moves').textContent='0'; won=false; running=true; ms=0; $('time').textContent=fmt(ms); $('win').style.display='none'; startTimer(); renderBoard(); }
function resetSolved(){ order=Array.from({length:size*size},(_,i)=>i); moves=0; $('moves').textContent='0'; won=false; running=false; ms=0; $('time').textContent=fmt(ms); $('win').style.display='none'; stopTimer(); renderBoard(); }
 $('btn-shuffle').addEventListener('click', startShuffle);
 $('btn-reset').addEventListener('click', resetSolved);
 $('btn-hint').addEventListener('click', ()=>{ const on=$('hint').style.display!=='none'; $('hint').style.display = on? 'none':'block'; $('btn-hint').textContent = on? '👀 Hint':'🙈 Sembunyikan'; });
 $('btn-again').addEventListener('click', startShuffle);
function startPuzzle(houseId){
  const db=loadDB();
  const h=db.houses.find(x=>x.id===houseId);
  if(!h){
    alert('Data rumah tidak ditemukan.');
    return;
  }
  currentHouse = houseId;
  
  // --- PERUBAHAN DI SINI ---
  // Ukuran puzzle sekarang SELALU 3, tidak lagi mengikuti data rumah.
  size = 3; 
  
  imgUrl = h.img;
  $('puzzle-title').textContent = `🧩 Puzzle: ${h.name}`;
  const img=$('original');
  img.onerror=()=>{
    img.removeAttribute('src');
    img.alt='Gambar gagal dimuat';
  };
  img.src = imgUrl;
  $('credit').textContent = h.credit||'';
  resetSolved();
  show('page-puzzle');
}
/********************
 * ADMIN
 ********************/
const ADMIN_SESSION_KEY = 'adminSession.v1';
function isAdmin(){ return sessionStorage.getItem(ADMIN_SESSION_KEY)==='1'; }
function requireAdmin(){ if(!isAdmin()){ show('page-admin'); $('admin-panel').style.display='none'; $('admin-login').style.display='block'; } else { $('admin-panel').style.display='block'; $('admin-login').style.display='none'; } }
 $('db-version').textContent = String(loadDB().version||1);
 $('admin-login-btn').addEventListener('click', ()=>{ const code=$('admin-pass').value||''; const db=loadDB(); if(code===db.settings.adminCode){ sessionStorage.setItem(ADMIN_SESSION_KEY,'1'); requireAdmin(); initAdminTabs(); } else { alert('Kode admin salah'); } });
 $('tab-houses').addEventListener('click', ()=>showTab('houses'));
 $('tab-questions').addEventListener('click', ()=>showTab('questions'));
 $('tab-settings').addEventListener('click', ()=>showTab('settings'));
function showTab(name){ ['houses','questions','settings'].forEach(n=>{ $('tabc-'+n).style.display = (n===name)?'block':'none'; }); }
 $('btn-export').addEventListener('click', ()=>{ const db=loadDB(); const blob=new Blob([JSON.stringify(db,null,2)],{type:'application/json'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='game-budaya-db.json'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url); });
 $('file-import').addEventListener('change', ()=>{ const f=$('file-import').files?.[0]; if(!f) return; const fr=new FileReader(); fr.onload=()=>{ try{ const dat=JSON.parse(fr.result); if(!dat || !('houses' in dat) || !('questions' in dat)) throw new Error('Format tidak sesuai'); saveDB(dat); alert('Impor sukses'); initAll(); }catch(e){ alert('Gagal impor: '+e.message); } }; fr.readAsText(f); });
 $('house-new').addEventListener('click', ()=>{ $('house-form').style.display='block'; $('h-id').value=''; $('h-name').value=''; $('h-credit').value=''; $('h-history').value=''; $('h-size').value='3'; $('h-img-path').value=''; });
 $('h-cancel').addEventListener('click', ()=>{ $('house-form').style.display='none'; });
 $('h-save').addEventListener('click', ()=>{ const db=loadDB(); const id=$('h-id').value||randomId('house'); const name=$('h-name').value.trim(); if(!name) return alert('Nama wajib diisi'); const credit=$('h-credit').value.trim(); const history=$('h-history').value.trim(); const size=Number($('h-size').value||3); let img = $('h-img-path').value.trim(); if(!img) return alert('Path gambar wajib diisi'); const exists = db.houses.find(x=>x.id===id); const obj={ id, name, credit, history, size, img }; if(exists){ Object.assign(exists, obj); } else { db.houses.push(obj); } saveDB(db); $('house-form').style.display='none'; renderHousesList(); refreshLanding(); refreshQuestionTargets(); });
function renderHousesList(){ const db=loadDB(); const el=$('houses-list'); if(!db.houses.length){ el.innerHTML='<div class="small muted">Belum ada rumah.</div>'; return; } el.innerHTML=''; db.houses.forEach(h=>{ const row=document.createElement('div'); row.className='list-item'; const img=document.createElement('img'); img.className='thumb'; img.src=h.img; const meta=document.createElement('div'); meta.innerHTML=`<div><strong>${h.name}</strong></div><div class="small muted">Ukuran: ${h.size||3}×${h.size||3} • ${h.credit||''}</div>`; const act=document.createElement('div'); const edit=document.createElement('button'); edit.className='btn'; edit.textContent='✏️ Edit'; edit.addEventListener('click',()=>{ $('house-form').style.display='block'; $('h-id').value=h.id; $('h-name').value=h.name; $('h-credit').value=h.credit||''; $('h-history').value=h.history||''; $('h-size').value=String(h.size||3); $('h-img-path').value = h.img; }); const del=document.createElement('button'); del.className='btn'; del.style.marginLeft='6px'; del.textContent='🗑️ Hapus'; del.addEventListener('click',()=>{ if(!confirm('Hapus rumah ini?')) return; const db2=loadDB(); db2.houses = db2.houses.filter(x=>x.id!==h.id); saveDB(db2); renderHousesList(); refreshLanding(); refreshQuestionTargets(); }); const play=document.createElement('button'); play.className='btn-dark'; play.style.marginLeft='6px'; play.textContent='🧩 Mainkan'; play.addEventListener('click',()=>startPuzzle(h.id)); act.appendChild(play); act.appendChild(edit); act.appendChild(del); row.appendChild(img); row.appendChild(meta); row.appendChild(act); el.appendChild(row); }); }
function refreshQuestionTargets(){ const db=loadDB(); const sel=$('q-target'); if(!sel) return; sel.innerHTML=''; db.houses.forEach(h=>{ const opt=document.createElement('option'); opt.value=h.id; opt.textContent=h.name; sel.appendChild(opt); }); }
 $('q-new').addEventListener('click', ()=>{ $('q-form').style.display='block'; $('q-id').value=''; $('q-text').value=''; $('q-a').value=''; $('q-b').value=''; $('q-c').value=''; $('q-d').value=''; $('q-answer').value='0'; refreshQuestionTargets(); });
 $('q-cancel').addEventListener('click', ()=>{ $('q-form').style.display='none'; });
 $('q-save').addEventListener('click', ()=>{ const db=loadDB(); const id=$('q-id').value||randomId('q'); const text=$('q-text').value.trim(); if(!text) return alert('Pertanyaan wajib diisi'); const options=[$('q-a').value.trim(),$('q-b').value.trim(),$('q-c').value.trim(),$('q-d').value.trim()]; if(options.some(o=>!o)) return alert('Semua opsi (A–D) wajib diisi'); const answerIndex=Number($('q-answer').value||0); const houseId=$('q-target').value; if(!houseId) return alert('Pilih target rumah'); const exists=db.questions.find(x=>x.id===id); const obj={ id, text, options, answerIndex, houseId }; if(exists){ Object.assign(exists,obj); } else { db.questions.push(obj); } saveDB(db); $('q-form').style.display='none'; renderQuestionsList(); });
function renderQuestionsList(){ const db=loadDB(); const el=$('questions-list'); if(!db.questions.length){ el.innerHTML='<div class="small muted">Belum ada pertanyaan.</div>'; return; } el.innerHTML=''; db.questions.forEach(q=>{ const row=document.createElement('div'); row.className='list-item'; const thumb=document.createElement('div'); thumb.className='thumb'; thumb.style.display='flex'; thumb.style.alignItems='center'; thumb.style.justifyContent='center'; thumb.style.fontSize='20px'; thumb.textContent='❓'; const meta=document.createElement('div'); const h = db.houses.find(x=>x.id===q.houseId); const ans = String.fromCharCode(65+(q.answerIndex||0)); meta.innerHTML=`<div><strong>${q.text}</strong></div><div class="small muted">Benar: ${ans} • Target: ${h? h.name : '(hapus)'} </div>`; const act=document.createElement('div'); const edit=document.createElement('button'); edit.className='btn'; edit.textContent='✏️ Edit'; edit.addEventListener('click',()=>{ $('q-form').style.display='block'; $('q-id').value=q.id; $('q-text').value=q.text; $('q-a').value=q.options[0]||''; $('q-b').value=q.options[1]||''; $('q-c').value=q.options[2]||''; $('q-d').value=q.options[3]||''; $('q-answer').value=String(q.answerIndex||0); refreshQuestionTargets(); $('q-target').value = q.houseId||''; }); const del=document.createElement('button'); del.className='btn'; del.style.marginLeft='6px'; del.textContent='🗑️ Hapus'; del.addEventListener('click',()=>{ if(!confirm('Hapus pertanyaan ini?')) return; const db2=loadDB(); db2.questions = db2.questions.filter(x=>x.id!==q.id); saveDB(db2); renderQuestionsList(); }); act.appendChild(edit); act.appendChild(del); row.appendChild(thumb); row.appendChild(meta); row.appendChild(act); el.appendChild(row); }); }
 $('set-save').addEventListener('click', ()=>{ alert('Mode Statis: Perubahan tidak disimpan. Untuk mengubah kode admin, edit file `js/script.js`.'); });
 $('set-apply').addEventListener('click', ()=>{ alert('Mode Statis: Perubahan tidak disimpan. Untuk mengubah default soal, edit file `js/script.js`.'); });
 $('set-reset').addEventListener('click', ()=>{ if(!confirm('Reset SEMUA data di tampilan? Data di file tidak akan berubah.')) return; location.reload(); });

/********************
 * INIT
 ********************/
function initAdminTabs(){ renderHousesList(); renderQuestionsList(); refreshQuestionTargets(); showTab('houses'); }
function initAll(){ refreshLanding(); $('db-version').textContent=String(loadDB().version||1); if(isAdmin()){ $('admin-panel').style.display='block'; $('admin-login').style.display='none'; initAdminTabs(); } else { $('admin-panel').style.display='none'; $('admin-login').style.display='block'; } }

initAll();
