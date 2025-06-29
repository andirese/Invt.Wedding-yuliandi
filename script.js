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
  <script>
  // Fungsi untuk ambil nama dari URL
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

  // Fungsi buka undangan
  const bukaUndangan = document.getElementById('bukaUndangan');
  const opening = document.getElementById('opening');
  const music = document.getElementById('music');

  bukaUndangan.addEventListener('click', () => {
    opening.style.display = 'none';
    music.play();
    window.location.hash = '#home';
  });
</script>

});
