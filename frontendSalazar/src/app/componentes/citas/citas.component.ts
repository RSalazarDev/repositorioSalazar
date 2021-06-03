import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
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
  styleUrls: ['./citas.component.css'],
})
export class CitasComponent implements OnInit {
  mensaje: undefined;
hoy: string;
dia: string;
mes: string;
anio: string;

  constructor(
    
    private servMedicos: MedicosService,
    private fb: FormBuilder,
    private irHacia: Router,
    private servicioU: UsuariosService,
    private servCitas: CitasService,
    private servSalas: SalasService
    
  ) {}

  ngOnInit(): void {
    this.obtenerCitas();
    this.obtenerMedicos();
    this.obtenerSalas();
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    if (month<10) {
      this.mes = String("0"+month);
    }else{
      this.mes = String(month);
    }
    if (day<10) {
      this.dia=String("0"+day);
    }else{
      this.dia = String(month);
    }

    this.anio = String(year);


    this.hoy = this.anio+"-"+this.mes+"-"+this.dia;
    console.log(this.hoy);
  }

  citas: Cita[] = [];
  medicos: Medico[] = [];
  salas: Sala[] = [];

  isLogged(): boolean {
    return this.servicioU.isLogged();
  }

  formularioCita = this.fb.group({
    fecha: ['', Validators.required],
    medico: ['', Validators.required],
    sala: ['', Validators.required],
  });

  obtenerCitas() {
    this.servCitas.obtenerCitas().subscribe(
      (respuesta) => {
        console.log(respuesta);
        this.citas = respuesta;
      },
      (error) => console.log(error)
    );
  }

  obtenerSalas() {
    this.servSalas.obtenerSalas().subscribe(
      (respuesta) => {
        console.log(respuesta);
        this.salas = respuesta;
      },
      (error) => console.log(error)
    );
    
  }

  obtenerMedicos() {
    this.servMedicos.obtenerMedicos().subscribe(
      (respuesta) => {
        console.log(respuesta);
        this.medicos = respuesta;
      },
      (error) => console.log(error)
    );
  }

  concertarCita() {
    console.log(this.formularioCita.value);

    this.servCitas.registrar(this.formularioCita.value).subscribe(
      (respuesta) => {
        console.log(respuesta);
        this.obtenerCitas();
      },
      (error) => console.log(error)
    );
  }

  borrarCita(cita: Cita) {
    
    if(confirm("¿Seguro que desea borrar la cita?")) {
      this.servCitas.borrar(cita).subscribe(
        (respuesta) => {
          console.log(respuesta);
          this.obtenerCitas();
          this.mensaje = respuesta.respuesta;
        },
        (error) => console.log(error)
      );
    }
    }
    
}
