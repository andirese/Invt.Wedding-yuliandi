// Buka Undangan
const bukaUndangan = document.getElementById('bukaUndangan');
const opening = document.querySelector('.opening');
const music = document.getElementById('music');

bukaUndangan.addEventListener('click', () => {
  opening.style.display = 'none';
  music.play();
});

// Smooth Scroll dan Active Menu
const navLinks = document.querySelectorAll('.bottom-nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });

    navLinks.forEach(nav => nav.classList.remove('active'));
    this.classList.add('active');
  });
});

// Nama tamu dari URL
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('to');
if(nama) {
  document.getElementById('namaTamu').innerText = decodeURIComponent(nama);
}
