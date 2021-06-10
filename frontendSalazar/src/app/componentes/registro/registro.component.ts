import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  mensaje: string = ''
  constructor(private fb:FormBuilder, private servicioUsuario:UsuariosService, private irHacia:Router) { }


  


  ngOnInit(): void {
    
  }

  
  formularioRegistro = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(4)]],
    nombre:['', Validators.required],
    apellidos:['', Validators.required],
    telefono:['', [Validators.required,Validators.minLength(9),Validators.maxLength(9),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    social:['', [Validators.required, Validators.maxLength(12),Validators.minLength(12),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    
    
  })

  registro() {



    this.servicioUsuario.registrar(this.formularioRegistro.value).subscribe(
      respuesta => {
        console.log(respuesta)
        this.irHacia.navigate(["/login"])
      },
      error =>{
        console.log(error.error.error)
        this.mensaje = error.error.error;
      } 
        
      
    )
  }

  
  

  

  

}

