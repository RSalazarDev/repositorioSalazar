import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Otro } from 'src/app/clases/otro';
import { OtrosService } from 'src/app/servicios/otros.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements OnInit {
  mapa: any;
  marcador: any;
  otro: any;

  constructor(private servOtros: OtrosService) {}

  otros: Otro[] = [];

  obtenerOtros() {
    this.servOtros.obtenerOtros().subscribe(
      (respuesta) => {
        console.log(respuesta);
        this.otros = respuesta;
      },
      (error) => console.log(error)
    );
  }

  ngOnInit(): void {
    this.obtenerOtros();
    this.mapa = L.map('posicionMapa').setView([39.592017, -3.038692], 16);
    L.marker([39.592017, -3.038692])
      .addTo(this.mapa)
      .bindPopup('Centro Médico Santa María')
      .openPopup();
    const trozos = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 19,
      }
    );
    trozos.addTo(this.mapa);
  }

  
  cambiar(o: Otro) {
    
    
    this.mapa.panTo(new L.LatLng(o.latitud, o.longitud));
    L.marker([o.latitud, o.longitud])
      .addTo(this.mapa)
      .bindPopup('Centro Médico ' + o.nombre)
      .openPopup();
  }
}
