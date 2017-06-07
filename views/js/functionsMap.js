// Google Maps
//////////////////////////////////


google.maps.visualRefresh = true;

var map;
function initialize() {
  var geocoder = new google.maps.Geocoder();
  var address = $('#map-input').text(); /* change the map-input to your address */
  var mapOptions = {
      // center: new google.maps.LatLng(),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false,
      backgroundColor: "#428bca",
  };

  // keep location centered on browser resize
  google.maps.event.addDomListener(window, "resize", function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center); 
  });

  map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
  
  // re-center button
  function moveToLocation(lat, lng){
    var center = new google.maps.LatLng(lat, lng);
    map.panTo(center);
  }
  $('#recenter').click( function() {
      moveToLocation(37.566522, -122.324874);
  });


    // initial load based on address enterd in html
    if (geocoder) {
      geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
          map.setCenter(results[0].geometry.location);

            // var infowindow = new google.maps.InfoWindow(
            //     {
            //       content: address,
            //       map: map,
            //       position: results[0].geometry.location,
            //     });

            var marker = new google.maps.Marker({
                position: results[0].geometry.location,
                map: map, 
                title:address
            }); 

          } else {
            alert("No results found");
          }
        }
      });
  }
}

google.maps.event.addDomListener(window, 'load', initialize);