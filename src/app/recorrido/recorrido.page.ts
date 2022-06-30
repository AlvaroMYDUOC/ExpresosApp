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
    // create LatLng object
    const myLatLng = {lat: -33.024580, lng: -71.551846};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 15
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
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

}

