import { Component, OnInit } from '@angular/core';
import { Medico } from 'src/app/clases/medico';
import { MedicosService } from 'src/app/servicios/medicos.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

  constructor(private servMedicos: MedicosService) { }

  medicos: Medico[] = []
  

  ngOnInit(): void {
    this.obtenerMedicos()
    
  }

  obtenerMedicos() {
    this.servMedicos.obtenerMedicos().subscribe(
      respuesta => {
        console.log(respuesta)
        this.medicos = respuesta
      },
      error => console.log(error)
    )
  }

}
