import { Component, OnInit } from '@angular/core';
import { Especialidad } from 'src/app/clases/especialidad';
import { Medico } from 'src/app/clases/medico';
import { EspecialidadesService } from 'src/app/servicios/especialidades.service';
import { MedicosService } from 'src/app/servicios/medicos.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private servMedicos: MedicosService, private servEspecialidades: EspecialidadesService ) { }

  medicos: Medico[] = []
  especialidades: Especialidad[] = []

  ngOnInit(): void {
    this.obtenerMedicos()
    this.obtenerEspecialidades()
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

  obtenerEspecialidades() {
    this.servEspecialidades.obtenerEspecialidades().subscribe(
      respuesta => {
        console.log(respuesta)
        this.especialidades = respuesta
      },
      error => console.log(error)
    )
  }
}
