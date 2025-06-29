const btn = document.getElementById('bukaUndangan');
const music = document.getElementById('music');

btn.addEventListener('click', () => {
    music.play();
    alert("Undangan Dibuka - lanjut ke halaman isi nanti");
    // Setelah ini bisa diarahkan ke halaman isi (misalnya halaman kedua)
});

// Ambil parameter nama dari URL
const urlParams = new URLSearchParams(window.location.search);
const namaTamu = urlParams.get('to') || 'Tamu Undangan';

// Ubah teks nama tamu di halaman
document.getElementById('namaTamu').innerText = decodeURIComponent(namaTamu);
