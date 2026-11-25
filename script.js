// Menu hamburger (mobile)
var tombol = document.getElementById("zofan_tombol");
if (tombol) tombol.onclick = function () { document.getElementById("zofan_menubar").classList.toggle("zofan_buka"); };

// Jam digital di sidebar
function zofan_jam() {
  var el = document.getElementById("zofan_jam");
  if (el) el.textContent = new Date().toLocaleTimeString("id-ID");
}
zofan_jam(); setInterval(zofan_jam, 1000);

// Accordion jurusan
document.querySelectorAll(".zofan_acc").forEach(function (b) {
  b.onclick = function () { b.nextElementSibling.classList.toggle("zofan_buka"); };
});

// Galeri: tampilkan keterangan
document.querySelectorAll(".zofan_foto").forEach(function (f) {
  f.onclick = function () { document.getElementById("zofan_cap").textContent = f.dataset.cap; };
});

// Validasi form kontak
var form = document.getElementById("zofan_form");
if (form) form.onsubmit = function (e) {
  e.preventDefault();
  var n = document.getElementById("zofan_nm").value.trim();
  var m = document.getElementById("zofan_em").value.trim();
  var p = document.getElementById("zofan_ps").value.trim();
  var o = document.getElementById("zofan_notif");
  if (!n || !/^\S+@\S+\.\S+$/.test(m) || p.length < 5) {
    o.className = "zofan_pesan zofan_salah";
    o.textContent = "Lengkapi nama, email yang valid, dan pesan (minimal 5 karakter).";
    return;
  }
  o.className = "zofan_pesan zofan_ok";
  o.textContent = "Terima kasih, " + n + "! Pesan Anda sudah terkirim.";
  form.reset();
};
