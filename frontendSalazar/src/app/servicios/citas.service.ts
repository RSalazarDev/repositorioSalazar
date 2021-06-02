import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cita } from '../clases/cita';

const url = 'http://127.0.0.1:8000/citas'

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  constructor(private http:HttpClient) { }

obtenerCitas(): Observable<any>{
  return this.http.get(url)
}


registrar(cita: Cita): Observable<any> {
  return this.http.post(url, cita)
}

borrar(cita: Cita): Observable<any> {
  return this.http.delete(url+"/"+cita.id)
}

}