
mapboxgl.accessToken = 'pk.eyJ1IjoibG1hZ2VlIiwiYSI6ImNpbnprZG80NzE4dmR1Nmx5bzY5M3NyY2MifQ.kJkjaUJQLVc-dME4lbRsJQ';

// Mapbox GL JS
var map = new mapboxgl.Map({
    // container id
    container: 'map',
    //stylesheet location
    style: 'mapbox://styles/mapbox/streets-v8',
    // starting position
    center: [151.200, -33.868],
    zoom: 12
});

map.on('load', function () {

    map.addSource('performance-and-exhibition', {
        type: 'geojson',
        data: 'data/performance-and-exhibition.geojson'
    });
    map.addLayer({
        'id': 'performance-and-exhibition',
        'type': 'fill',
        'source': 'performance-and-exhibition',
        'source-layer': 'performance-and-exhibition',
        'layout': {},
        'paint': {
            'fill-color': '#AF4900', // orange
            'fill-opacity': 0.8
        }
    });

    map.addSource('festivals-and-public-space', {
        type: 'geojson',
        data: 'data/festivals-and-public-space.geojson'
    });
    map.addLayer({
        'id': 'festivals-and-public-space',
        'type': 'fill',
        'source': 'festivals-and-public-space',
        'source-layer': 'festivals-and-public-space',
        'layout': {},
        'paint': {
            'fill-color': '#205C86', // indigo
            'fill-opacity': 0.8
        }
    });

    map.addSource('commercial-and-enterprise', {
        type: 'geojson',
        data: 'data/commercial-and-enterprise.geojson'
    });
    map.addLayer({
        'id': 'commercial-and-enterprise',
        'type': 'fill',
        'source': 'commercial-and-enterprise',
        'source-layer': 'commercial-and-enterprise',
        'layout': {},
        'paint': {
            'fill-color': '#C4DAF1', // light blue
            'fill-opacity': 0.8
        }
    });

    map.addSource('practice-education-and-development', {
        type: 'geojson',
        data: 'data/practice-education-and-development.geojson'
    });
    map.addLayer({
        'id': 'practice-education-and-development',
        'type': 'fill',
        'source': 'practice-education-and-development',
        'source-layer': 'practice-education-and-development',
        'layout': {},
        'paint': {
            'fill-color': '#007A4B', // weird green
            'fill-opacity': 0.8
        }
    });

    map.addSource('community-and-participation', {
        type: 'geojson',
        data: 'data/community-and-participation.geojson'
    });
    map.addLayer({
        'id': 'community-and-participation',
        'type': 'fill',
        'source': 'community-and-participation',
        'source-layer': 'community-and-participation',
        'layout': {},
        'paint': {
            'fill-color': '#7AC145', // mustard green
            'fill-opacity': 0.8
        }
    });

    map.addSource('digital-space', {
        type: 'geojson',
        data: 'data/digital-space.geojson'
    });
    map.addLayer({
        'id': 'digital-space',
        'type': 'fill',
        'source': 'digital-space',
        'source-layer': 'digital-space',
        'layout': {},
        'paint': {
            'fill-color': '#888888', // weird green
            'fill-opacity': 0.8
        }
    });

});

$(document).ready(function() {
  addLayer('performance-and-exhibition');
  addLayer('festivals-and-public-space');
  addLayer('commercial-and-enterprise');
  addLayer('practice-education-and-development');
  addLayer('community-and-participation');
  addLayer('digital-space');

  function addLayer(id) {

      var link = $('#' + id);

      link[0].onclick = function (e) {
          // e.preventDefault();
          // e.stopPropagation();

          var visibility = map.getLayoutProperty(id, 'visibility');

          if (visibility === 'visible') {
              map.setLayoutProperty(id, 'visibility', 'none');
              this.className = '';
          } else {
              this.className = 'active';
              map.setLayoutProperty(id, 'visibility', 'visible');
          }
      };

  }

});
