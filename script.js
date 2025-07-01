// Ambil nama tamu dari URL
const urlParams = new URLSearchParams(window.location.search);
const namaTamu = urlParams.get('to');
const guestNameEl = document.getElementById('guestName');

if (namaTamu) {
  guestNameEl.textContent = decodeURIComponent(namaTamu);
}

function openInvitation() {
  alert("Terima kasih telah membuka undangan kami.");
  // Bisa diarahkan ke halaman baru dengan: window.location.href = "halaman-undangan.html";
}
