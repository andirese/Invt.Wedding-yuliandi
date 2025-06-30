// Musik dan buka undangan
const bukaUndangan = document.getElementById('bukaUndangan');
const opening = document.getElementById('opening');
const music = document.getElementById('music');

bukaUndangan.addEventListener('click', () => {
  opening.style.display = 'none';
  music.play();
  window.location.hash = '#home';
});

// Bottom navigation active state
const navLinks = document.querySelectorAll('.nav-btn');

window.addEventListener('hashchange', () => {
  const current = window.location.hash;
  navLinks.forEach(link => {
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Nama tamu dari URL
function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

const nama = getQueryParam('to');
const namaTamu = document.getElementById('namaTamu');

if (nama) {
  namaTamu.innerText = decodeURIComponent(nama.replace(/\+/g, ' '));
} else {
  namaTamu.innerText = 'Tamu Undangan';
}

// Efek bunga jatuh
const totalBunga = 15;
for (let i = 0; i < totalBunga; i++) {
  const bunga = document.createElement('img');
  bunga.src = 'bunga.png'; // Gambar bunga
  bunga.classList.add('falling-bunga');
  bunga.style.left = Math.random() * 100 + 'vw';
  bunga.style.animationDuration = (Math.random() * 3 + 2) + 's';
  document.body.appendChild(bunga);
}
