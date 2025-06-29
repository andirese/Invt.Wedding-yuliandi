const btn = document.getElementById('bukaUndangan');
const music = document.getElementById('music');

btn.addEventListener('click', () => {
    music.play();
    alert("Undangan Dibuka - lanjut ke halaman isi nanti");
    // Setelah ini bisa diarahkan ke halaman isi (misalnya halaman kedua)
});
