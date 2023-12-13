// Menu Open Close
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");


menu.onclick = () => {
  menu.classList.toggle("move");
  navbar.classList.toggle("open-menu");
};

// Header
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});

function initMap() {
  // Koordinat lokasi (contoh: Jakarta, Indonesia)
  var myLatLng = {lat: -6.2088, lng: 106.8456};

  // Buat objek peta
  var map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      zoom: 12 // Sesuaikan level zoom
  });

  // Tambahkan marker pada peta
  var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Lokasi Saya'
  });
}