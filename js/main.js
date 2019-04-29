// Select DOM Items

const menuToggler = document.querySelector('.menu-toggler');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuInfo = document.querySelector('.menu-info');
const info = document.querySelector('.info');
const navLinks = document.querySelectorAll('.nav-link');
const loader = document.querySelector(".loader");

let openMenu = false;

menuToggler.addEventListener('click', toggleMenu);
window.addEventListener("load", function(){
  loader.classList.add("hidden");
});

function toggleMenu(){
  if (!openMenu){
    menuToggler.classList.add('close');
    menu.classList.add('open');
    menuNav.classList.add('open');
    menuInfo.classList.add('open');
    info.classList.add('last-fade-in');
    for (let i = 0; i < 4; i++){
      navLinks[i].classList.add('open');
    }
    openMenu = true;
  }
  else{
    menuToggler.classList.remove('close');
    menu.classList.remove('open');
    menuNav.classList.remove('open');
    menuInfo.classList.remove('open');
    info.classList.remove('last-fade-in');
    for (let i = 0; i < 4; i++){
      navLinks[i].classList.remove('open');
    }
    openMenu = false;
  }
}

// Contact Page Google map

function initMap(){

  // Map options
  var options = {
    zoom: 7,
    center: {lat: 49.282730, lng: -123.120735},
    mapTypeControl: false,
    zoomControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    styles: [
      {elementType: 'labels.text.stroke', stylers: [{color: '#000'}]},
      {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
              "visibility": "of"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#2fe0b8"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2fe0b8"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            },
            {
              "color": "#4f4f4f"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            },
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#3c3e41"
            },
            {
                "visibility": "on"
            }
        ]
    }
    ]
  }

  // New map 
  var map = new google.maps.Map(document.getElementById('map'), options);

  // Add marder
  var marker = new google.maps.Marker({
    position: {lat: 49.178009, lng: -122.854111},
    map: map,
    icon: 'img/location.png'
  });

  var infoWindow = new google.maps.InfoWindow({
    content: '<h3 class="home-marker">9651 Salal Place <br> Surrey, BC V3T 5A8  </h3>'
  });

  marker.addListener('click', function(){
    infoWindow.open(map, marker);
  });

  infoWindow.open(map, marker);
}