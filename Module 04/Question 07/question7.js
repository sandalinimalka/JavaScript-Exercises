'use strict';

// show the map
const map = L.map('map').setView([60.2241, 24.7586], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const apiKey = '7bd8d0459c42463bb274632cc073ea88';
const apiAddress = 'https://api.digitransit.fi/routing/v2/hsl/gtfs/v1';

const form = document.querySelector('#route-form');
const addressInput = document.querySelector('#address');
const tripTime = document.querySelector('#trip-time');

// Karaportti 2
const school = {
  latitude: 60.2241,
  longitude: 24.7586,
};

let routeLines = [];
let markers = [];

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const address = addressInput.value;

  clearMap();

  getCoordinates(address).then(function(origin) {
    if (origin) {
      getRoute(origin, school);
    } else {
      tripTime.textContent = 'Address not found.';
    }
  });
});

// get coordinates from address
function getCoordinates(address) {
  const addressUrl =
      'https://api.digitransit.fi/geocoding/v1/search?text=' +
      encodeURIComponent(address) +
      '&size=1';

  const fetchOptions = {
    headers: {
      'digitransit-subscription-key': apiKey,
    },
  };

  return fetch(addressUrl, fetchOptions).then(function(response) {
    return response.json();
  }).then(function(result) {
    if (result.features && result.features.length > 0) {
      const coordinates = result.features[0].geometry.coordinates;

      return {
        latitude: coordinates[1],
        longitude: coordinates[0],
      };
    } else {
      return null;
    }
  });
}

// fetch route with origin and target
function getRoute(origin, target) {
  const GQLQuery = `{
  plan(
    from: {lat: ${origin.latitude}, lon: ${origin.longitude}}
    to: {lat: ${target.latitude}, lon: ${target.longitude}}
    numItineraries: 1
  ) {
    itineraries {
      legs {
        startTime
        endTime
        mode
        duration
        distance
        legGeometry {
          points
        }
      }
    }
  }
}`;

  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'digitransit-subscription-key': apiKey,
    },
    body: JSON.stringify({query: GQLQuery}),
  };

  fetch(apiAddress, fetchOptions).then(function(response) {
    return response.json();
  }).then(function(result) {
    const googleEncodedRoute = result.data.plan.itineraries[0].legs;

    console.log('google Route ', googleEncodedRoute);

    const firstLeg = googleEncodedRoute[0];
    const lastLeg = googleEncodedRoute[googleEncodedRoute.length - 1];

    const startTime = new Date(firstLeg.startTime).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    const endTime = new Date(lastLeg.endTime).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    tripTime.textContent = 'Start time: ' + startTime + ' | End time: ' +
        endTime;

    for (let i = 0; i < googleEncodedRoute.length; i++) {
      let color = '';

      switch (googleEncodedRoute[i].mode) {
        case 'WALK':
          color = 'green';
          break;
        case 'BUS':
          color = 'red';
          break;
        case 'RAIL':
          color = 'cyan';
          break;
        case 'TRAM':
          color = 'magenta';
          break;
        default:
          color = 'blue';
          break;
      }

      const route = googleEncodedRoute[i].legGeometry.points;
      const pointObjects = L.Polyline.fromEncoded(route).getLatLngs();

      const routeLine = L.polyline(pointObjects).setStyle({
        color: color,
      }).addTo(map);

      routeLines.push(routeLine);
    }

    const startMarker = L.marker([origin.latitude, origin.longitude]).
        addTo(map).
        bindPopup('Start');

    const schoolMarker = L.marker([target.latitude, target.longitude]).
        addTo(map).
        bindPopup('School: Karaportti 2');

    markers.push(startMarker);
    markers.push(schoolMarker);

    map.fitBounds([
      [origin.latitude, origin.longitude],
      [target.latitude, target.longitude],
    ]);
  }).catch(function(e) {
    console.error(e?.message);
    tripTime.textContent = 'Route not found.';
  });
}

// Clear previous route and markers
function clearMap() {
  for (let i = 0; i < routeLines.length; i++) {
    map.removeLayer(routeLines[i]);
  }

  for (let i = 0; i < markers.length; i++) {
    map.removeLayer(markers[i]);
  }

  routeLines = [];
  markers = [];
  tripTime.textContent = '';
}