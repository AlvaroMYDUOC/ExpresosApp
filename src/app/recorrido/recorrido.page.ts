import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { PlacesService } from '../services';
import { Map } from 'mapbox-gl';

@Component({
  selector: 'app-recorrido',
  templateUrl: './recorrido.page.html',
  styleUrls: ['./recorrido.page.scss'],
})
export class RecorridoPage implements AfterViewInit {
  linea_selecta: string;
  constructor(private  placesService: PlacesService) { }
  optionSelected: string;
  //Mapa
  //@ViewChild('mapDiv') mapDivElement!: ElementRef;

  ngAfterViewInit(): void{
    //Visualizacion del mapa

      /*const map = new Map({
        container: this.mapDivElement.nativeElement,
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: this.placesService.useLocation, // starting position [lng, lat]
        zoom: 14, // starting zoom
        });
        map.on('style.load', () => {
          map.setFog({}); // Set the default atmosphere style
          }); */
  }  
  //METODO DE VISUALIZACION DE RECORRIDOS
  recoverAlertValue(event: CustomEvent){
    console.log(event.detail.value)
    this.optionSelected = event.detail.value;
    if(this.optionSelected=="406"){
      document.getElementById("406").hidden = false;
      document.getElementById("402").hidden = true;
    }else if(this.optionSelected=="402"){
      document.getElementById("402").hidden = false;
      document.getElementById("406").hidden = true;
    }else if(this.optionSelected=="309"){
      document.getElementById("402").hidden = true;
      document.getElementById("406").hidden = true;
      document.getElementById("309").hidden = false;
    }
  }

}
