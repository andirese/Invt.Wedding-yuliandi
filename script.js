const bukaUndangan = document.getElementById('bukaUndangan');
const opening = document.getElementById('opening');
const music = document.getElementById('music');

// Buka undangan
bukaUndangan.addEventListener('click', () => {
    opening.style.display = 'none';
    music.play();
    window.location.hash = '#home';
    triggerImageAnimation();
});

// Navbar Smooth Scroll + Active
const navLinks = document.querySelectorAll('.bottom-nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');

        setTimeout(() => {
            triggerImageAnimation();
        }, 500);
    });
});

// Nama tamu dari URL
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('to');
if (nama) {
    document.getElementById('namaTamu').innerText = decodeURIComponent(nama);
}

// Fungsi animasi gambar
function triggerImageAnimation() {
    const images = document.querySelectorAll('section img');
    images.forEach(img => {
        const rect = img.getBoundingClientRect();
        if (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        ) {
            img.classList.add('show');
        } else {
            img.classList.remove('show');
        }
    });
}

// Jalankan saat scroll
window.addEventListener('scroll', triggerImageAnimation);

// Jalankan pertama kali saat load
window.addEventListener('load', triggerImageAnimation);
