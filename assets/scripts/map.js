 // Initialize and add the map
 function initMap() {
    // The location of Uluru
    const uluru = { lat: 53.0586248562419, lng: -1.482663503186773 }; 
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }