let map;
let moscow;

function initMap() {
	moscow = { lat: 55.68546, lng: 37.5679276 };
	let google = window.google;
	map = new google.maps.Map(document.getElementById("map"), {
		zoom: 13,
		center: { lat: 55.661620, lng: 37.608823 },
		disableDefaultUI: true,
		zoomControl: false,
		scrollwheel: false,
		//scrollwheel: boolean,
		styles: [
			{
				featureType: "administrative.locality",
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#444"
					}
				]
			},
			{
				featureType: "landscape",
				elementType: "all",
				stylers: [
					{
						color: "#f2f2f2"
					}
				]
			},
			{
				featureType: "poi",
				elementType: "all",
				stylers: [
					{
						visibility: "off"
					}
				]
			},
			{
				featureType: "road",
				elementType: "all",
				stylers: [
					{
						saturation: "-100"
					},
					{
						lightness: "1"
					},
					{
						gamma: "1.44"
					},
					{
						weight: "2.70"
					}
				]
			},
			{
				featureType: "road.highway",
				elementType: "all",
				stylers: [
					{
						visibility: "simplified"
					}
				]
			},
			{
				featureType: "road.arterial",
				elementType: "labels.icon",
				stylers: [
					{
						visibility: "off"
					}
				]
			},
			{
				featureType: "transit",
				elementType: "all",
				stylers: [
					{
						visibility: "off"
					}
				]
			},
			{
				featureType: "water",
				elementType: "all",
				stylers: [
					{
						color: "#86a77a"
					},
					{
						visibility: "on"
					}
				]
			}
		]
	});
}