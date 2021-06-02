import { Injectable } from '@angular/core';
import {acceso, Usuario } from '../clases/usuario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
var url = 'http://127.0.0.1:8000/usuarios'


@Injectable({
  providedIn: 'root'
})


export class UsuariosService {

  

  constructor(private http:HttpClient) { }

  
  login(usuario: acceso): Observable<any> {
    return this.http.post(url + "/login", usuario)
  }

  registrar(usuario: Usuario): Observable<any> {
    return this.http.post(url + "/registro", usuario)
  }

  getUsuario(): Observable<any> {
    return this.http.get(url)
  }

  actualizarUsuario(usuario: Usuario): Observable<any> {
    return this.http.put(url, usuario)
  }

  borrarUsuario(): Observable<any> {
    return this.http.delete(url)
  }


  //Metodos para el token

  guardarToken(token: string) {
    console.log('token guardado')
    localStorage.setItem('userToken', token)
  }
  
  

  
  leerToken(): string {
    return localStorage.getItem('userToken')
  }

  isLogged(): boolean {
    return !!localStorage.getItem('userToken')
  }

  logOut(): void {
    localStorage.removeItem('userToken')
  }
}
