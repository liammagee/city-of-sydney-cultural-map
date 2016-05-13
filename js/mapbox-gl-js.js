
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

    map.addSource('contours', {
        type: 'vector',
        url: 'mapbox://mapbox.mapbox-terrain-v2'
    });
    map.addLayer({
        'id': 'contours',
        'type': 'line',
        'source': 'contours',
        'source-layer': 'contour',
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#877b59',
            'line-width': 1
        }
    });

    map.addSource('cultural-venues', {
        type: 'geojson',
        data: 'data/cultural-venues.geojson'
    });
    map.addLayer({
        'id': 'cultural-venues',
        'type': 'fill',
        'source': 'cultural-venues',
        'source-layer': 'cultural-venues',
        'layout': {},
        'paint': {
            'fill-color': '#088',
            'fill-opacity': 0.8
        }
    });

});

// addLayer('Contours', 'contours');
// addLayer('Cultural Venues', 'cultural-venues');

function addLayer(name, id) {

    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.textContent = name;

    link.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(id, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(id, 'visibility', 'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty(id, 'visibility', 'visible');
        }
    };

    var layers = document.getElementById('menu');
    layers.appendChild(link);
}
