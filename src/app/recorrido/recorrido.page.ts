import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recorrido',
  templateUrl: './recorrido.page.html',
  styleUrls: ['./recorrido.page.scss'],
})
export class RecorridoPage implements OnInit {
  linea_selecta: string;
  constructor() { }
  optionSelected: string;
  ngOnInit() {
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
