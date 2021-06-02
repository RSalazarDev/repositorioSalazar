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

  constructor(private fb:FormBuilder, private servUsuario: UsuariosService, private irHacia:Router) { }

  ngOnInit(): void {
    
  }

  
  formEditar = this.fb.group({
    nombre:['', Validators.required],
    apellidos:['', Validators.required],
    password:['', Validators.required],
    social:['', Validators.required],
    telefono:['', Validators.required]
  })


  edit() : void{
    this.servUsuario.actualizarUsuario(this.formEditar.value).subscribe(
      respuesta => {
        console.log(respuesta)
        this.irHacia.navigate(['/'])
      },
      error => {console.log(error)}
    )
  }

  borrar() : void{
    
    this.servUsuario.borrarUsuario().subscribe(
      respuesta => {
        console.log(respuesta)
        this.irHacia.navigate(['/'])
      },
      error => {console.log(error)}
    )

    this.servUsuario.logOut();
    
  }



  
}
