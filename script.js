/**
 * ==============================================================================
 * PERJUANGAN MEMPERTAHANKAN KEMERDEKAAN INDONESIA (1945–1949)
 * INTERACTIVE SCRAPBOOK ENGINE
 * ==============================================================================
 */

// --- 1. HISTORICAL DATA COLLECTION ---
const historicalEventsData = {
  // A. PERJUANGAN FISIK
  "semarang": {
    id: "semarang",
    category: "fisik",
    categoryName: "Perjuangan Fisik",
    number: "1",
    title: "Pertempuran Lima Hari di Semarang",
    waktu: "15–19 Oktober 1945",
    tokoh: "Dr. Kariadi",
    tempat: "Semarang, Jawa Tengah",
    penyebab: "Konflik antara pemuda Indonesia dan tentara Jepang.",
    peristiwa: "Pertempuran berlangsung selama lima hari dan menimbulkan banyak korban dari kedua belah pihak.",
    dampak: "Dikenang melalui berdirinya Monumen Tugu Muda di pusat kota Semarang.",
    image: "./pertempuran lima hari di semarang.jpg",
    photoCaption: "Monumen Tugu Muda Semarang",
    year: 1945,
    historicalFact: "Dr. Kariadi gugur saat dalam perjalanan memeriksa Cadangan Air Minum Siranda yang dikabarkan diracuni oleh tentara Jepang. Keberanian beliau membakar amarah pemuda Semarang untuk bertempur habis-habisan.",
    narration: "Pertempuran Lima Hari di Semarang terjadi pada tanggal 15 hingga 19 Oktober 1945. Tokoh utamanya adalah Dokter Kariadi. Penyebab pertempuran adalah konflik antara pemuda Indonesia dan tentara Jepang. Pertempuran sengit ini menimbulkan banyak korban dan kini diabadikan melalui Monumen Tugu Muda di Semarang."
  },
  "surabaya": {
    id: "surabaya",
    category: "fisik",
    categoryName: "Perjuangan Fisik",
    number: "2",
    title: "Pertempuran Surabaya",
    waktu: "10 November 1945",
    tokoh: "Bung Tomo dan Gubernur Suryo.",
    tempat: "Surabaya, Jawa Timur",
    penyebab: "Rakyat menolak ultimatum Sekutu untuk menyerahkan senjata.",
    peristiwa: "Rakyat melawan serangan besar pasukan Sekutu lewat darat, laut, dan udara.",
    dampak: "Menjadi dasar peringatan Hari Pahlawan setiap 10 November.",
    image: "./pertempuran surabaya 10 november.jpg",
    photoCaption: "Bung Tomo Membakar Semangat",
    year: 1945,
    historicalFact: "Pidato radio Bung Tomo yang menggelegar dengan pekikan 'Merdeka atau Mati' serta takbir menyatukan para santri, pemuda, dan laskar rakyat Surabaya untuk menantang pasukan imperium Inggris terkuat di Asia Tenggara.",
    narration: "Pertempuran Surabaya meletus pada 10 November 1945, dipimpin oleh Bung Tomo dan Gubernur Suryo. Rakyat Surabaya dengan tegas menolak ultimatum Sekutu untuk menyerahkan senjata. Perlawanan heroik rakyat ini menjadi tonggak peringatan Hari Pahlawan nasional setiap tanggal 10 November."
  },
  "ambarawa": {
    id: "ambarawa",
    category: "fisik",
    categoryName: "Perjuangan Fisik",
    number: "3",
    title: "Pertempuran Ambarawa",
    waktu: "20 November–15 Desember 1945",
    tokoh: "Kolonel Soedirman.",
    tempat: "Ambarawa, Jawa Tengah",
    penyebab: "Kedatangan Sekutu yang dianggap membantu Belanda (NICA).",
    peristiwa: "Pasukan Indonesia menggunakan taktik supit urang untuk mengepung lawan secara serentak.",
    dampak: "Sekutu berhasil dipukul mundur dari Ambarawa menuju Semarang.",
    image: "./pertempuran ambarawa.jpg",
    photoCaption: "Kolonel Soedirman",
    year: 1945,
    historicalFact: "Taktik Supit Urang merupakan taktik pengepungan rangkap dari dua sisi sehingga musuh terisolir dan kehabisan pasokan logistik. Keberhasilan ini mengukuhkan Kolonel Soedirman menjadi Panglima Besar TKR.",
    narration: "Pertempuran Ambarawa berlangsung dari 20 November hingga 15 Desember 1945 di bawah komando Kolonel Soedirman. Pasukan Indonesia menerapkan taktik brilian Supit Urang untuk mengepung lawan, hingga pasukan Sekutu berhasil dipukul mundur sepenuhnya dari Ambarawa."
  },
  "bandung": {
    id: "bandung",
    category: "fisik",
    categoryName: "Perjuangan Fisik",
    number: "4",
    title: "Bandung Lautan Api",
    waktu: "23–24 Maret 1946",
    tokoh: "A.H. Nasution dan Mohammad Toha.",
    tempat: "Bandung, Jawa Barat",
    penyebab: "Sekutu memerintahkan pasukan Indonesia meninggalkan Bandung.",
    peristiwa: "Rakyat membumihanguskan sejumlah bangunan dan fasilitas sebelum mengungsi ke daerah selatan.",
    dampak: "Mencegah fasilitas penting dimanfaatkan musuh dan menjadi simbol pengorbanan rakyat yang abadi.",
    image: "./bandung lautan api.jpg",
    photoCaption: "Asap Membubung di Kota Bandung",
    year: 1946,
    historicalFact: "Mohammad Toha dengan gagah berani meledakkan gudang mesiu Sekutu di Dayeuhkolot menggunakan dinamit, mengorbankan jiwanya demi memastikan amunisi musuh hancur lebur.",
    narration: "Peristiwa Bandung Lautan Api terjadi pada 23 sampai 24 Maret 1946. Tokoh utamanya adalah A.H. Nasution dan Mohammad Toha. Demi mencegah fasilitas vital dipakai musuh, rakyat Bandung membumihanguskan kota mereka sendiri sebelum mengungsi, menjadikannya simbol pengorbanan tertinggi."
  },
  "medan": {
    id: "medan",
    category: "fisik",
    categoryName: "Perjuangan Fisik",
    number: "5",
    title: "Pertempuran Medan Area",
    waktu: "Sejak 13 Oktober 1945",
    tokoh: "Ahmad Tahir.",
    tempat: "Medan, Sumatera Utara",
    penyebab: "Kedatangan Sekutu bersama NICA yang bertindak sewenang-wenang.",
    peristiwa: "Rakyat dan pejuang melawan pasukan Sekutu serta Belanda dalam berbagai front pertempuran.",
    dampak: "Perlawanan berlanjut meluas di Medan dan wilayah Sumatera bagian utara sekitarnya.",
    image: "./semangat rakyat sumatera utara.jpg",
    photoCaption: "Laskar Pejuang Medan Area",
    year: 1945,
    historicalFact: "Konflik bermula dari insiden seorang opsir NICA yang menginjak-injak lencana Merah Putih di sebuah hotel di Jalan Bali, Medan, yang memicu kemarahan spontan pemuda Sumatera Utara.",
    narration: "Pertempuran Medan Area meletus sejak 13 Oktober 1945 dipimpin oleh Ahmad Tahir. Kedatangan Sekutu yang membonceng NICA menyulut perlawanan sengit dari laskar rakyat Sumatera Utara untuk mempertahankan kehormatan bendera Merah Putih."
  },
  "margarana": {
    id: "margarana",
    category: "fisik",
    categoryName: "Perjuangan Fisik",
    number: "6",
    title: "Puputan Margarana",
    waktu: "20 November 1946",
    tokoh: "I Gusti Ngurah Rai.",
    tempat: "Marga, Tabanan, Bali",
    penyebab: "Belanda berusaha kembali menguasai Bali dan memecah belah persatuan Republik.",
    peristiwa: "Pasukan Ciung Wanara bertempur habis-habisan (puputan) melawan tentara Belanda hingga titik darah penghabisan.",
    dampak: "Menjadi simbol abadi keberanian, martabat, dan pengorbanan rakyat Bali.",
    image: "./puputan margarana.jpg",
    photoCaption: "Letkol I Gusti Ngurah Rai",
    year: 1946,
    historicalFact: "I Gusti Ngurah Rai menolak mentah-mentah ajakan kompromi Belanda dengan mengirim surat balasan terkenal: 'Bali bukanlah tempat perundingan bagi mereka yang ingin merampas kemerdekaan bangsaku!'",
    narration: "Puputan Margarana berlangsung pada 20 November 1946 di Bali dipimpin oleh Letkol I Gusti Ngurah Rai. Bersama pasukan Ciung Wanara, mereka melancarkan perang puputan atau pertempuran habis-habisan hingga tetes darah terakhir demi mempertahankan kedaulatan tanah air."
  },
  "westerling": {
    id: "westerling",
    category: "fisik",
    categoryName: "Perjuangan Fisik",
    number: "7",
    title: "Peristiwa Westerling",
    waktu: "Desember 1946–Februari 1947",
    tokoh: "Raymond Westerling.",
    tempat: "Sulawesi Selatan",
    penyebab: "Belanda berupaya melumpuhkan kantong-kantong pertahanan pejuang pendukung Republik di Indonesia Timur.",
    peristiwa: "Pasukan DST Belanda pimpinan Westerling melakukan operasi kekerasan dan pembunuhan terhadap ribuan penduduk yang dicurigai mendukung Republik.",
    dampak: "Menimbulkan banyak korban jiwa rakyat serta semakin memperkuat kobaran perlawanan rakyat terhadap Belanda.",
    image: "./peristiwa wasterling.jpg",
    photoCaption: "Raymond Westerling",
    year: 1946,
    historicalFact: "Kekejaman Westerling memicu kecaman keras internasional dan memperkuat tekad rakyat Sulawesi Selatan, termasuk perjuangan pahlawan seperti Robert Wolter Mongisidi, untuk terus melawan penjajah.",
    narration: "Peristiwa Westerling terjadi pada Desember 1946 hingga Februari 1947 di Sulawesi Selatan. Pasukan Belanda pimpinan Raymond Westerling melakukan operasi kekerasan brutal terhadap penduduk sipil yang setia kepada Republik, yang justru semakin mengobarkan api perlawanan rakyat."
  },
  "serangan-umum": {
    id: "serangan-umum",
    category: "fisik",
    categoryName: "Perjuangan Fisik",
    number: "8",
    title: "Serangan Umum 1 Maret 1949",
    waktu: "1 Maret 1949",
    tokoh: "Sri Sultan Hamengkubuwono IX dan Letkol Soeharto.",
    tempat: "Yogyakarta",
    penyebab: "Belanda menduduki Yogyakarta (ibu kota RI saat itu) dan menyebarkan propaganda dunia bahwa Republik telah musnah.",
    peristiwa: "TNI melakukan serangan terkoordinasi fajar dan berhasil menguasai kota Yogyakarta secara penuh selama sekitar enam jam.",
    dampak: "Membuktikan kepada dunia internasional dan PBB bahwa Republik Indonesia dan TNI masih tegak berdiri.",
    image: "./serangan umum 1 maret 1949.jpg",
    photoCaption: "TNI Menguasai Yogyakarta",
    year: 1949,
    historicalFact: "Berita kemenangan Serangan Umum 1 Maret dipancarkan melalui radio pemancar PC-2 di Playen Gunungkidul ke Bukittinggi, lalu diteruskan ke New Delhi dan PBB di Lake Success, menggagalkan klaim Belanda seketika.",
    narration: "Serangan Umum 1 Maret 1949 diprakarsai oleh Sri Sultan Hamengkubuwono IX dan dipimpin oleh Letkol Soeharto di Yogyakarta. TNI berhasil menguasai ibu kota selama enam jam, membuktikan kepada dunia internasional bahwa Republik Indonesia dan tentaranya masih bertahan kuat."
  },

  // B. PERJUANGAN DIPLOMASI
  "hooge-veluwe": {
    id: "hooge-veluwe",
    category: "diplomasi",
    categoryName: "Perjuangan Diplomasi",
    number: "1",
    title: "Perundingan Hooge Veluwe",
    waktu: "14–25 April 1946",
    tokoh: "Sutan Sjahrir dan Mohammad Hatta.",
    tempat: "Hooge Veluwe, Belanda",
    penyebab: "Upaya awal mencari pengakuan resmi Belanda atas kemerdekaan Republik Indonesia pasca Proklamasi.",
    peristiwa: "Membahas status hukum dan batas wilayah Republik, namun gagal mencapai kesepakatan karena perbedaan prinsipil.",
    dampak: "Gagal mencapai kesepakatan, namun membuktikan kepada Belanda bahwa Indonesia mengutamakan jalur diplomasi beradab.",
    image: "./perundingan hooge veluwe.jpg",
    photoCaption: "Delegasi di Hooge Veluwe",
    year: 1946,
    historicalFact: "Belanda hanya bersedia mengakui kekuasaan de facto RI atas pulau Jawa saja, sedangkan delegasi Indonesia dengan tegas menuntut pengakuan atas seluruh wilayah bekas Hindia Belanda.",
    narration: "Perundingan Hooge Veluwe berlangsung dari tanggal 14 sampai 25 April 1946 di Belanda, diwakili oleh tokoh Sutan Sjahrir dan Mohammad Hatta. Perundingan ini belum menghasilkan kesepakatan karena Belanda menolak mengakui kedaulatan Indonesia di luar pulau Jawa."
  },
  "linggarjati": {
    id: "linggarjati",
    category: "diplomasi",
    categoryName: "Perjuangan Diplomasi",
    number: "2",
    title: "Perundingan Linggarjati",
    waktu: "Ditandatangani 25 Maret 1947",
    tokoh: "Sutan Sjahrir dan Wim Schermerhorn.",
    tempat: "Linggarjati, Kuningan, Jawa Barat",
    penyebab: "Kebutuhan kedua belah pihak untuk meredakan ketegangan militer dan menentukan status kedaulatan.",
    peristiwa: "Belanda mengakui secara de facto wilayah Republik Indonesia meliputi Jawa, Madura, dan Sumatra. Kedua pihak sepakat membentuk RIS dan Uni Indonesia–Belanda.",
    dampak: "Memberikan pengakuan internasional terbatas, namun perbedaan penafsiran isi perjanjian akhirnya memicu Agresi Militer Belanda I.",
    image: "./perundingan linggar jati.jpg",
    photoCaption: "Naskah Persetujuan Linggarjati",
    year: 1947,
    historicalFact: "Perundingan ini dipimpin oleh diplomat Inggris Lord Killearn sebagai penengah. Walau wilayah RI mengecil, perjanjian ini membuka jalan pengakuan kedaulatan de jure dari negara-negara sahabat seperti Mesir dan Suriah.",
    narration: "Perundingan Linggarjati ditandatangani pada 25 Maret 1947 antara Sutan Sjahrir dan Wim Schermerhorn. Belanda mengakui wilayah RI secara de facto meliputi Jawa, Madura, dan Sumatra, serta merencanakan pembentukan Republik Indonesia Serikat."
  },
  "renville": {
    id: "renville",
    category: "diplomasi",
    categoryName: "Perjuangan Diplomasi",
    number: "3",
    title: "Perjanjian Renville",
    waktu: "17 Januari 1948",
    tokoh: "Amir Sjarifuddin.",
    tempat: "Kapal Perang USS Renville (Teluk Jakarta)",
    penyebab: "Agresi Militer Belanda I yang dihentikan atas campur tangan Dewan Keamanan PBB dan Komisi Tiga Negara (KTN).",
    peristiwa: "Menyepakati gencatan senjata dan penetapan Garis Van Mook sebagai batas demarkasi pasukan.",
    dampak: "Wilayah kedaulatan Republik semakin sempit dan pasukan TNI harus berhijrah (long march) meninggalkan kantong-kantong gerilya di Jawa Barat.",
    image: "./renville.jpg",
    photoCaption: "Kapal Perang USS Renville",
    year: 1948,
    historicalFact: "Kapal perang AS ini dipilih sebagai zona netral di laut internasional Teluk Jakarta. KTN terdiri dari Australia (pilihan RI), Belgia (pilihan Belanda), dan AS (pilihan kedua belah pihak).",
    narration: "Perjanjian Renville disepakati pada 17 Januari 1948 di atas kapal perang USS Renville, dipimpin oleh Amir Sjarifuddin. Perjanjian ini menetapkan Garis Van Mook yang mempersempit wilayah Republik, memaksa pasukan TNI melakukan long march ke pedalaman."
  },
  "roem-royen": {
    id: "roem-royen",
    category: "diplomasi",
    categoryName: "Perjuangan Diplomasi",
    number: "4",
    title: "Perundingan Roem–Royen",
    waktu: "7 Mei 1949",
    tokoh: "Mohammad Roem dan Herman van Roijen.",
    tempat: "Hotel Des Indes, Jakarta",
    penyebab: "Tekanan dunia internasional dan perlawanan gerilya TNI pasca Agresi Militer Belanda II yang menawan para pemimpin Republik.",
    peristiwa: "Belanda menyetujui pemulihan pemerintahan Republik di Yogyakarta dan pembebasan tahanan politik. Indonesia bersedia menghentikan perang gerilya dan menghadiri KMB.",
    dampak: "Pemerintahan Republik Indonesia kembali ke Yogyakarta dan membuka jalan lebar menuju pengakuan kedaulatan di KMB.",
    image: "./perundingan roem royen.jpg",
    photoCaption: "Pertemuan Roem & Van Roijen",
    year: 1949,
    historicalFact: "Berkat keteguhan Mohammad Roem, Presiden Soekarno dan Wapres Hatta yang sebelumnya diasingkan di Bangka akhirnya dapat kembali ke ibu kota Yogyakarta dengan penuh kehormatan.",
    narration: "Perundingan Roem-Royen disepakati pada 7 Mei 1949 antara Mohammad Roem dan Herman van Roijen. Belanda setuju memulihkan pemerintahan Republik di Yogyakarta dan membebaskan para pemimpin bangsa, membuka pintu menuju penyerahan kedaulatan di Den Haag."
  },
  "kmb": {
    id: "kmb",
    category: "diplomasi",
    categoryName: "Perjuangan Diplomasi",
    number: "5",
    title: "Konferensi Meja Bundar (KMB)",
    waktu: "23 Agustus–2 November 1949",
    tokoh: "Mohammad Hatta.",
    tempat: "Den Haag, Belanda",
    penyebab: "Kebutuhan mengakhiri seluruh sengketa kolonial dan merealisasikan penyerahan kedaulatan penuh tanpa syarat kepada Indonesia.",
    peristiwa: "Belanda setuju menyerahkan kedaulatan penuh kepada Republik Indonesia Serikat (RIS), sedangkan penyelesaian masalah status Irian Barat ditunda satu tahun.",
    dampak: "Kedaulatan Indonesia secara resmi diserahkan pada 27 Desember 1949, mengakhiri perang kemerdekaan dan menandai kemerdekaan Republik secara de jure di mata dunia.",
    image: "./konferensi meja bundar.jpg",
    photoCaption: "Sidang Pleno KMB Den Haag",
    year: 1949,
    historicalFact: "Mohammad Hatta memimpin delegasi RI dengan sangat piawai berhadapan dengan delegasi Belanda dan BFO. Pada 27 Desember 1949, upacara penyerahan kedaulatan serentak diadakan di Amsterdam dan Jakarta.",
    narration: "Konferensi Meja Bundar berlangsung di Den Haag pada 23 Agustus hingga 2 November 1949 dipimpin oleh Bung Hatta. Hasil KMB menetapkan penyerahan kedaulatan resmi kepada Indonesia pada 27 Desember 1949, mengakhiri perjuangan bersenjata empat tahun pasca proklamasi."
  }
};

// --- 2. SOUND SYNTHESIS ENGINE (WEB AUDIO API - ZERO ASSETS REQUIRED) ---
let audioContext = null;
let isAudioMuted = false;

function initAudio() {
  if (!audioContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioContext = new AudioContextClass();
    }
  }
  if (audioContext && audioContext.state === 'suspended') {
    audioContext.resume();
  }
}

// Paper Rustle / Page Turn Sound
function playPaperRustle() {
  if (isAudioMuted) return;
  try {
    initAudio();
    if (!audioContext) return;
    const now = audioContext.currentTime;
    
    // Pink noise paper slide
    const bufferSize = audioContext.sampleRate * 0.18;
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + (0.02 * white)) / 1.02;
      lastOut = data[i];
      data[i] *= 3.5;
    }
    
    const noise = audioContext.createBufferSource();
    noise.buffer = buffer;
    
    const filter = audioContext.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1400, now);
    filter.Q.setValueAtTime(1.8, now);
    
    const gain = audioContext.createGain();
    gain.gain.setValueAtTime(0.01, now);
    gain.gain.exponentialRampToValueAtTime(0.14, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
    
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(audioContext.destination);
    
    noise.start(now);
  } catch (e) {
    console.debug('Audio play skipped:', e);
  }
}

// Polaroid Camera Shutter Snap
function playCameraSnap() {
  if (isAudioMuted) return;
  try {
    initAudio();
    if (!audioContext) return;
    const now = audioContext.currentTime;
    
    // Click tone
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1200, now);
    osc.frequency.exponentialRampToValueAtTime(220, now + 0.08);
    
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
    
    osc.connect(gain);
    gain.connect(audioContext.destination);
    osc.start(now);
    osc.stop(now + 0.09);
    
    // Secondary mechanical snap
    setTimeout(() => {
      if (!audioContext) return;
      const t = audioContext.currentTime;
      const osc2 = audioContext.createOscillator();
      const gain2 = audioContext.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(800, t);
      osc2.frequency.exponentialRampToValueAtTime(180, t + 0.06);
      gain2.gain.setValueAtTime(0.12, t);
      gain2.gain.exponentialRampToValueAtTime(0.01, t + 0.06);
      osc2.connect(gain2);
      gain2.connect(audioContext.destination);
      osc2.start(t);
      osc2.stop(t + 0.07);
    }, 90);
  } catch (e) {}
}

// Vintage Stamp / Wax Thump
function playStampThump() {
  if (isAudioMuted) return;
  try {
    initAudio();
    if (!audioContext) return;
    const now = audioContext.currentTime;
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(45, now + 0.15);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
    osc.connect(gain);
    gain.connect(audioContext.destination);
    osc.start(now);
    osc.stop(now + 0.16);
  } catch (e) {}
}

// Victory Chime for Quiz
function playVictoryChime() {
  if (isAudioMuted) return;
  try {
    initAudio();
    if (!audioContext) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const now = audioContext.currentTime + (idx * 0.12);
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
      osc.connect(gain);
      gain.connect(audioContext.destination);
      osc.start(now);
      osc.stop(now + 0.46);
    });
  } catch (e) {}
}

// Toggle Audio Function
function toggleAudio() {
  isAudioMuted = !isAudioMuted;
  const btn = document.getElementById('btnAudioToggle');
  const soundOn = btn.querySelector('.sound-on');
  const soundOff = btn.querySelector('.sound-off');
  
  if (isAudioMuted) {
    soundOn.classList.add('hidden');
    soundOff.classList.remove('hidden');
    btn.querySelector('.btn-text').textContent = 'Suara Mati';
  } else {
    soundOn.classList.remove('hidden');
    soundOff.classList.add('hidden');
    btn.querySelector('.btn-text').textContent = 'Suara Kertas';
    playPaperRustle();
  }
}

// --- 3. SPEECH SYNTHESIS ENGINE (INDONESIAN TTS) ---
let currentSpeakingId = null;

function readEventNarration(eventId) {
  const item = historicalEventsData[eventId];
  if (!item) return;

  if (!('speechSynthesis' in window)) {
    alert('Browser kamu tidak mendukung Text-to-Speech.');
    return;
  }

  // If already reading this one, toggle off
  if (window.speechSynthesis.speaking && currentSpeakingId === eventId) {
    window.speechSynthesis.cancel();
    currentSpeakingId = null;
    updateReadAloudButtons();
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(item.narration);
  utterance.lang = 'id-ID';
  utterance.rate = 0.95;
  utterance.pitch = 1.0;

  // Find Indonesian voice if possible
  const voices = window.speechSynthesis.getVoices();
  const idVoice = voices.find(v => v.lang.includes('id') || v.lang.includes('ID'));
  if (idVoice) {
    utterance.voice = idVoice;
  }

  currentSpeakingId = eventId;
  updateReadAloudButtons();

  utterance.onend = () => {
    currentSpeakingId = null;
    updateReadAloudButtons();
  };

  utterance.onerror = () => {
    currentSpeakingId = null;
    updateReadAloudButtons();
  };

  window.speechSynthesis.speak(utterance);
}

function updateReadAloudButtons() {
  document.querySelectorAll('.btn-read-aloud').forEach(btn => {
    const parentCard = btn.closest('[data-event-id]');
    if (parentCard) {
      const cardId = parentCard.getAttribute('data-event-id');
      const textSpan = btn.querySelector('span');
      if (cardId === currentSpeakingId) {
        textSpan.textContent = 'Membaca...';
        btn.classList.add('reading-active');
      } else {
        textSpan.textContent = 'Dengarkan';
        btn.classList.remove('reading-active');
      }
    }
  });
}

// --- 4. SEARCH & CATEGORY FILTERING ---
const filterPills = document.querySelectorAll('.filter-pill');
const searchInput = document.getElementById('searchInput');
const btnClearSearch = document.getElementById('btnClearSearch');

let activeFilter = 'all';
let searchQuery = '';

function applyFilters() {
  const query = searchQuery.trim().toLowerCase();
  let visibleCount = 0;

  document.querySelectorAll('.event-scrapbook-card').forEach(card => {
    const eventCategory = card.getAttribute('data-category');
    const textContent = card.innerText.toLowerCase();

    // Category match
    const categoryMatches = (activeFilter === 'all') || (activeFilter === eventCategory);

    // Search query match
    const searchMatches = (!query) || textContent.includes(query);

    if (categoryMatches && searchMatches) {
      card.classList.remove('hidden');
      visibleCount++;
    } else {
      card.classList.add('hidden');
    }
  });
}

function filterByYear(year) {
  playPaperRustle();
  // Set filter to all so year items aren't hidden by category
  activeFilter = 'all';
  filterPills.forEach(p => {
    p.classList.toggle('active', p.getAttribute('data-filter') === 'all');
  });

  // Highlight timeline node
  document.querySelectorAll('.timeline-node').forEach(node => {
    const nodeYear = parseInt(node.getAttribute('data-year'), 10);
    node.classList.toggle('active-year', nodeYear === year);
  });

  // Filter cards by year attribute and scroll to first matching card
  let firstMatch = null;
  document.querySelectorAll('.event-scrapbook-card').forEach(card => {
    const cardYear = parseInt(card.getAttribute('data-year'), 10);
    if (cardYear === year) {
      card.classList.remove('hidden');
      card.style.outline = '3px solid var(--pink-primary)';
      card.style.boxShadow = '0 0 25px rgba(203, 101, 119, 0.4)';
      if (!firstMatch) firstMatch = card;
      setTimeout(() => {
        card.style.outline = '';
        card.style.boxShadow = '';
      }, 2500);
    } else {
      card.classList.add('hidden');
    }
  });

  if (firstMatch) {
    firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// --- 5. PHOTO LIGHTBOX & MODAL LOGIC ---
const photoModal = document.getElementById('photoModal');
const modalPhotoImg = document.getElementById('modalPhotoImg');
const modalPhotoTitle = document.getElementById('modalPhotoTitle');
const modalPhotoDesc = document.getElementById('modalPhotoDesc');

function openPhotoModal(src, title, desc) {
  playCameraSnap();
  modalPhotoImg.src = src;
  modalPhotoTitle.textContent = title || 'Foto Sejarah Kemerdekaan';
  modalPhotoDesc.textContent = desc || '';
  photoModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closePhotoModal() {
  playPaperRustle();
  photoModal.classList.add('hidden');
  document.body.style.overflow = '';
}

// --- 6. DIARY DETAIL INSPECTION MODAL ---
const detailModal = document.getElementById('detailModal');
const diaryDetailContent = document.getElementById('diaryDetailContent');

function openDetailModal(eventId) {
  playPaperRustle();
  const data = historicalEventsData[eventId];
  if (!data) return;

  diaryDetailContent.innerHTML = `
    <div class="diary-header">
      <div class="diary-title-box">
        <span class="diary-category-tag">${data.categoryName} • Nomor ${data.number}</span>
        <h3 id="modalDetailTitle">${data.title}</h3>
        <p style="font-size: 0.9rem; color: var(--pink-dark); font-weight: 600;">Waktu: ${data.waktu}</p>
      </div>
      <button class="btn-read-aloud" onclick="readEventNarration('${data.id}')" title="Dengarkan narasi suara">
        <svg class="speaker-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
        <span>Dengarkan Narasi</span>
      </button>
    </div>

    <div class="diary-grid">
      <div class="diary-facts-column">
        <ul class="diary-facts-list">
          <li class="diary-fact-item">
            <h5>Tokoh Pemimpin</h5>
            <p><strong>${data.tokoh}</strong></p>
          </li>
          ${data.tempat ? `
          <li class="diary-fact-item">
            <h5>Lokasi Kejadian</h5>
            <p>${data.tempat}</p>
          </li>` : ''}
          <li class="diary-fact-item">
            <h5>Penyebab / Latar Belakang</h5>
            <p>${data.penyebab}</p>
          </li>
          <li class="diary-fact-item">
            <h5>Jalannya Peristiwa</h5>
            <p>${data.peristiwa}</p>
          </li>
          <li class="diary-fact-item">
            <h5>Dampak & Makna Sejarah</h5>
            <p><strong>${data.dampak}</strong></p>
          </li>
          <li class="diary-fact-item" style="background: var(--paper-parchment); padding: 0.85rem; border-radius: 8px; border-left: 3px solid var(--green-primary);">
            <h5 style="color: var(--green-dark);">Kilas Fakta Historis</h5>
            <p style="font-size: 0.88rem; font-style: italic;">&ldquo;${data.historicalFact}&rdquo;</p>
          </li>
        </ul>
      </div>

      <div class="diary-polaroid-column">
        <div class="diary-photo-box" onclick="openPhotoModal('${data.image}', '${data.title}', '${data.photoCaption}')">
          <img src="${data.image}" alt="${data.title}">
          <div style="text-align: center; padding-top: 8px;">
            <span style="font-family: var(--font-hand); font-weight: 700; font-size: 1rem; color: var(--ink-sepia);">${data.photoCaption}</span>
          </div>
        </div>
      </div>
    </div>
  `;

  detailModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeDetailModal() {
  playPaperRustle();
  detailModal.classList.add('hidden');
  document.body.style.overflow = '';
}

// --- 7. INTERACTIVE HISTORICAL QUIZ (5 QUESTIONS) ---
const quizModal = document.getElementById('quizModal');
const quizCard = document.getElementById('quizCard');
const quizNumber = document.getElementById('quizNumber');
const quizQuestion = document.getElementById('quizQuestion');
const quizOptions = document.getElementById('quizOptions');
const quizProgressFill = document.getElementById('quizProgressFill');
const quizFeedback = document.getElementById('quizFeedback');
const feedbackBadge = document.getElementById('feedbackBadge');
const feedbackText = document.getElementById('feedbackText');
const quizResult = document.getElementById('quizResult');
const quizScoreDisplay = document.getElementById('quizScoreDisplay');
const quizAppreciation = document.getElementById('quizAppreciation');

const quizQuestionsList = [
  {
    q: "Monumen bersejarah apa yang dibangun untuk mengenang keberanian pejuang dalam Pertempuran Lima Hari di Semarang?",
    options: [
      "Monumen Nasional (Monas)",
      "Monumen Tugu Muda",
      "Monumen Pahlawan",
      "Monumen Perjuangan Rakyat"
    ],
    correct: 1,
    explanation: "Pertempuran Lima Hari di Semarang (15–19 Oktober 1945) yang menewaskan Dr. Kariadi diabadikan melalui berdirinya Monumen Tugu Muda di Semarang."
  },
  {
    q: "Taktik strategi perang gerilya apa yang digunakan Kolonel Soedirman untuk memukul mundur Sekutu dalam Pertempuran Ambarawa?",
    options: [
      "Taktik Perang Gerilya Semesta",
      "Taktik Supit Urang (Pengepungan Ganda)",
      "Taktik Bumi Hangus",
      "Taktik Perang Benteng"
    ],
    correct: 1,
    explanation: "Kolonel Soedirman menggunakan taktik Supit Urang untuk mengepung musuh secara serentak dari dua sisi hingga Sekutu berhasil dipukul mundur."
  },
  {
    q: "Siapakah pahlawan yang memimpin pasukan Ciung Wanara dalam pertempuran habis-habisan Puputan Margarana di Bali?",
    options: [
      "I Gusti Ngurah Rai",
      "Ahmad Tahir",
      "Gubernur Suryo",
      "Amir Sjarifuddin"
    ],
    correct: 0,
    explanation: "Letkol I Gusti Ngurah Rai memimpin pasukan Ciung Wanara pada 20 November 1946 bertempur habis-habisan (puputan) melawan tentara Belanda di Bali."
  },
  {
    q: "Wilayah manakah yang diakui secara de facto oleh Belanda sebagai kekuasaan Republik Indonesia dalam Perundingan Linggarjati?",
    options: [
      "Hanya Pulau Jawa saja",
      "Jawa, Madura, dan Sumatra",
      "Seluruh kepulauan Indonesia",
      "Sumatra dan Kalimantan"
    ],
    correct: 1,
    explanation: "Dalam Perundingan Linggarjati (ditandatangani 25 Maret 1947), Belanda mengakui secara de facto wilayah Republik Indonesia di Jawa, Madura, dan Sumatra."
  },
  {
    q: "Berdasarkan hasil Konferensi Meja Bundar (KMB), pada tanggal berapakah Belanda secara resmi menyerahkan kedaulatan kepada Indonesia?",
    options: [
      "17 Agustus 1945",
      "10 November 1945",
      "1 Maret 1949",
      "27 Desember 1949"
    ],
    correct: 3,
    explanation: "Puncak perjuangan diplomasi terjadi saat kedaulatan Indonesia secara resmi diserahkan oleh Belanda pada 27 Desember 1949 sebagai realisasi kesepakatan KMB."
  }
];

let currentQuizIndex = 0;
let userQuizScore = 0;
let hasAnsweredCurrentQuestion = false;

function openQuizModal() {
  playPaperRustle();
  currentQuizIndex = 0;
  userQuizScore = 0;
  hasAnsweredCurrentQuestion = false;

  quizCard.classList.remove('hidden');
  quizFeedback.classList.add('hidden');
  quizResult.classList.add('hidden');

  renderQuizQuestion();
  quizModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeQuizModal() {
  playPaperRustle();
  quizModal.classList.add('hidden');
  document.body.style.overflow = '';
}

function renderQuizQuestion() {
  const current = quizQuestionsList[currentQuizIndex];
  hasAnsweredCurrentQuestion = false;
  quizFeedback.classList.add('hidden');

  quizNumber.textContent = `Pertanyaan ${currentQuizIndex + 1} dari ${quizQuestionsList.length}`;
  quizQuestion.textContent = current.q;
  quizProgressFill.style.width = `${((currentQuizIndex + 1) / quizQuestionsList.length) * 100}%`;

  const prefixes = ['A', 'B', 'C', 'D'];
  quizOptions.innerHTML = '';
  current.options.forEach((optText, idx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt-btn';
    btn.innerHTML = `<span class="opt-prefix">${prefixes[idx]}</span> <span>${optText}</span>`;
    btn.onclick = () => selectQuizOption(idx);
    quizOptions.appendChild(btn);
  });
}

function selectQuizOption(selectedIndex) {
  if (hasAnsweredCurrentQuestion) return;
  hasAnsweredCurrentQuestion = true;

  const current = quizQuestionsList[currentQuizIndex];
  const optionButtons = quizOptions.querySelectorAll('.quiz-opt-btn');

  // Disable all option buttons
  optionButtons.forEach(btn => btn.disabled = true);

  const isCorrect = selectedIndex === current.correct;

  if (isCorrect) {
    userQuizScore++;
    playVictoryChime();
    optionButtons[selectedIndex].classList.add('correct');
    feedbackBadge.textContent = 'Jawaban Benar!';
    feedbackBadge.style.color = 'var(--green-primary)';
    quizFeedback.classList.remove('feedback-wrong');
  } else {
    playStampThump();
    optionButtons[selectedIndex].classList.add('wrong');
    optionButtons[current.correct].classList.add('correct');
    feedbackBadge.textContent = 'Kurang Tepat';
    feedbackBadge.style.color = 'var(--pink-dark)';
    quizFeedback.classList.add('feedback-wrong');
  }

  feedbackText.textContent = current.explanation;
  quizFeedback.classList.remove('hidden');
}

function nextQuizQuestion() {
  playPaperRustle();
  currentQuizIndex++;
  if (currentQuizIndex < quizQuestionsList.length) {
    renderQuizQuestion();
  } else {
    showQuizResults();
  }
}

function showQuizResults() {
  playVictoryChime();
  quizCard.classList.add('hidden');
  quizFeedback.classList.add('hidden');
  quizResult.classList.remove('hidden');

  quizScoreDisplay.textContent = `${userQuizScore} / ${quizQuestionsList.length}`;
  if (userQuizScore === 5) {
    quizAppreciation.textContent = 'Luar Biasa Sempurna! Kamu telah memahami seluruh sejarah perjuangan fisik dan diplomasi kemerdekaan Indonesia dengan sangat mendalam!';
  } else if (userQuizScore >= 3) {
    quizAppreciation.textContent = 'Bagus Sekali! Kamu memiliki pemahaman sejarah yang kuat mengenai perjuangan para pahlawan bangsa mempertahankan kemerdekaan.';
  } else {
    quizAppreciation.textContent = 'Terus Semangat! Baca kembali catatan scrapbook dan coba kuis lagi untuk semakin menguasai sejarah perjuangan kemerdekaan.';
  }
}

function restartQuiz() {
  openQuizModal();
}

// --- 8. EVENT LISTENERS SETUP ---
document.addEventListener('DOMContentLoaded', () => {
  // Audio Toggle
  document.getElementById('btnAudioToggle').addEventListener('click', toggleAudio);

  // Quiz Open Button in Nav
  document.getElementById('btnOpenQuiz').addEventListener('click', openQuizModal);

  // Category filter pills
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      playPaperRustle();
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeFilter = pill.getAttribute('data-filter');
      applyFilters();
    });
  });

  // Search input
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    btnClearSearch.classList.toggle('hidden', !searchQuery);
    applyFilters();
  });

  btnClearSearch.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    btnClearSearch.classList.add('hidden');
    applyFilters();
  });

  // Close modals on backdrop click
  [photoModal, detailModal, quizModal].forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        if (modal === photoModal) closePhotoModal();
        if (modal === detailModal) closeDetailModal();
        if (modal === quizModal) closeQuizModal();
      }
    });
  });

  // Keyboard Navigation: Escape to close modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (!photoModal.classList.contains('hidden')) closePhotoModal();
      if (!detailModal.classList.contains('hidden')) closeDetailModal();
      if (!quizModal.classList.contains('hidden')) closeQuizModal();
    }
  });

  // Preload speech synthesis voices
  if ('speechSynthesis' in window) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.getVoices();
    };
  }
});
