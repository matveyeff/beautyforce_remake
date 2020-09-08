"use strict";

var langSwitcher = document.querySelector('.dropdown__label');
var langContainer = document.querySelector('.dropdown');
langSwitcher.addEventListener('click', function (e) {
  langContainer.classList.toggle('is-open');

  if (!e.target.classList === 'dropdown__links') {
    langContainer.classList.remove('is-open');
  }
});

function initMap() {
  var moscow = {
    lat: 55.712632,
    lng: 37.628248
  };
  var google = window.google;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {
      lat: 55.7005654,
      lng: 37.6214963
    },
    disableDefaultUI: false,
    zoomControl: true,
    scrollwheel: false,
    styles: [{
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{
        color: '#444'
      }]
    }, {
      featureType: 'landscape',
      elementType: 'all',
      stylers: [{
        color: '#f2f2f2'
      }]
    }, {
      featureType: 'poi',
      elementType: 'all',
      stylers: [{
        visibility: 'off'
      }]
    }, {
      featureType: 'road',
      elementType: 'all',
      stylers: [{
        saturation: '-100'
      }, {
        lightness: '1'
      }, {
        gamma: '1.44'
      }, {
        weight: '2.70'
      }]
    }, {
      featureType: 'road.highway',
      elementType: 'all',
      stylers: [{
        visibility: 'simplified'
      }]
    }, {
      featureType: 'road.arterial',
      elementType: 'labels.icon',
      stylers: [{
        visibility: 'on'
      }]
    }, {
      featureType: 'transit',
      elementType: 'all',
      stylers: [{
        visibility: 'off'
      }]
    }, {
      featureType: 'water',
      elementType: 'all',
      stylers: [{
        color: '#1f1a3d'
      }, {
        visibility: 'on'
      }]
    }]
  });
  var marker = new google.maps.Marker({
    position: moscow,
    icon: {
      url: './images/map-marker.svg'
    },
    map: map
  });
  return marker;
}

document.addEventListener('DOMContentLoaded', function () {
  initMap();
});