import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private servicioUsuario:UsuariosService, private irHacia:Router) { }

  ngOnInit(): void {
  }

  error= undefined
  formularioLogin = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required]]
    
  })

  login() {
    this.servicioUsuario.login(this.formularioLogin.value).subscribe(
      respuesta => {
        
 
        
          console.log(respuesta)
          this.servicioUsuario.guardarToken(respuesta.token);
          this.irHacia.navigate(["/citas"])
        },
        error => {
          console.log(error)
          this.error = error.error.error
        }
    )
    }
    
  }

