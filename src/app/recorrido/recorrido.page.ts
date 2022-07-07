import { Component, OnInit } from '@angular/core';

declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'app-recorrido',
  templateUrl: './recorrido.page.html',
  styleUrls: ['./recorrido.page.scss'],
})
export class RecorridoPage implements OnInit {

  map = null;

  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  // parque simon bolivar
  origin = { lat: -33.025228, lng: -71.551534 };
  // Parque la 93
  destination = { lat: -33.024702, lng: -71.551150 };

  markers: Marker[] = [
    {
      position: {
        lat: -33.025421,
        lng: -71.549853
      },
      title: "Compañía De Bomberos"
    },

    {
      position: {
        lat: -33.025871,
        lng: -71.552436
      },
      title: "Plaza Sucre"
    },

    {
      position: {
        lat: -33.024702,
        lng: -71.551155
      },
      title: "Plaza Vergara"
    },

    {
      position: {
        lat: -33.023804,
        lng: -71.553018
      },
      title: "Municipalidad De Viña"
    },

    {
      position: {
        lat: -33.022446,
        lng: -71.551408
      },
      title: "Uno Norte - Libertad"
    },

  ];

  constructor() { }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: this.origin,
      zoom: 15
    });

    this.directionsDisplay.setMap(this.map);
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      this.calculateRoute();
      this.renderMarkers();
    });
  }

  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }

  private calculateRoute() {
    this.directionsService.route({
      origin: this.origin,
      destination: {
        lat: -33.024702,
        lng: -71.551155
      },
      travelMode: google.maps.TravelMode.WALKING,
    }, (response, status)  => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.directionsDisplay.setDirections(response);
      } else {
        alert('Could not display directions due to: ' + status);
      }
    });
    }

}

