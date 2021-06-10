import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  error= undefined
  currentUser: Usuario = new Usuario;


  constructor(private fb:FormBuilder, private servUsuario: UsuariosService, private irHacia:Router) { }

  ngOnInit(): void {
    this.get();
  }

  
  formEditar = this.fb.group({
    email:['', Validators.email],
    password:['', Validators.minLength(4)],
    nombre:['', ],
    apellidos:['', ],
    telefono:['', [Validators.minLength(9),Validators.maxLength(9)]],
    social:['', [Validators.maxLength(12),Validators.minLength(12)]],
    
  })

  get() : void{
    
    this.servUsuario.getUsuario().subscribe(
      respuesta => {
        this.currentUser = respuesta;
        console.log(this.currentUser);
        
      },
      error => {console.log(error)}
    )
  }

  edit() : void{
    if(confirm("¿Seguro que desea modificar su usuario?. Los campos no usados no cambiarán")) {
    this.servUsuario.actualizarUsuario(this.formEditar.value).subscribe(
      respuesta => {
        console.log(respuesta)
        this.irHacia.navigate(['/'])
      },
      error => {
        this.error = error.error.error
      }
    )}
  }

  borrar() : void{
    if(confirm("¿Seguro que desea borrar su usuario?. Será redireccionado al inicio")) {
      this.servUsuario.borrarUsuario().subscribe(
        respuesta => {
          console.log(respuesta)
          this.servUsuario.logOut();
          this.irHacia.navigate(['/'])
          
        },
        error => {
          this.error = error.error.error
          this.irHacia.navigate(['/perfil'])
        }
      )
    }
    
    
    
  }



  
}
