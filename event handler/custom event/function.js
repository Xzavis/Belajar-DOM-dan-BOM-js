// variable baru dengan custom event
// bernama changeCaption
const changeCaption = new Event("changeCaption");

// tombol
window.addEventListener("load", function () {
  // panggil id tombol
  const tombol = document.getElementById("tombol");
  //  gunakan custom event handler dengan id tombol
  tombol.addEventListener("changeCaption", customEventHandler);
  // tombol ketika diklick
  tombol.addEventListener("click", function () {
    tombol.dispatchEvent(changeCaption);
  });
});

// function customEventHandler
function customEventHandler(ev) {
  // menampilkan pesan console
  console.log("Event " + ev.type + " Telah dijalankan");

  // variable caption dan ambil id caption
  const caption = document.getElementById('caption');
  // memasukan text pada tag H3 id caption
  caption.innerText = 'Anda Telah memanggil Custom Event';
}
