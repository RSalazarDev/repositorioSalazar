import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cita } from 'src/app/clases/cita';
import { Medico } from 'src/app/clases/medico';
import { Sala } from 'src/app/clases/sala';
import { CitasService } from 'src/app/servicios/citas.service';
import { MedicosService } from 'src/app/servicios/medicos.service';
import { SalasService } from 'src/app/servicios/salas.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  constructor(
    private servMedicos: MedicosService,
    private fb:FormBuilder,
    private irHacia:Router,
    private servicioU:UsuariosService,
    private servCitas:CitasService,
    private servSalas: SalasService
    ) { }

  ngOnInit(): void {
    this.obtenerCitas()
    this.obtenerMedicos()
    this.obtenerSalas()
  }
  
  
  citas: Cita[] = []
  medicos: Medico[] = []
  salas: Sala[] = []
  
  isLogged():boolean {
    return this.servicioU.isLogged()
  }

  formularioCita = this.fb.group({
    
    fecha:['', Validators.required],
    medico:['', Validators.required],
    sala:['', Validators.required],
  })


  obtenerCitas() {
    this.servCitas.obtenerCitas().subscribe(
      respuesta => {
        console.log(respuesta)
        this.citas = respuesta
      },
      error => console.log(error)
    )
  }

 

  obtenerSalas() {
    this.servSalas.obtenerSalas().subscribe(
      respuesta => {
        console.log(respuesta)
        this.salas = respuesta
      },
      error => console.log(error)
    )
    for (let index = 0; index < this.salas.length; index++) {
      if (!this.salas[index].estado) {
        this.salas = this.salas.splice(index,1);
      }
      
      
    }
    
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

  concertarCita() {
    console.log(this.formularioCita.value);
    
    this.servCitas.registrar(this.formularioCita.value).subscribe(
      respuesta => {
        console.log(respuesta)
        this.obtenerCitas()
      },
      error => console.log(error)
    )
  }

  borrarCita(cita: Cita) {
    this.servCitas.borrar(cita).subscribe(
      respuesta => {
        console.log(respuesta)
        this.obtenerCitas()
      },
      error => console.log(error)
    )
  }

  
}
