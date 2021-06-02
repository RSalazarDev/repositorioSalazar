import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = 'http://127.0.0.1:8000/especialidades'

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  constructor(private http:HttpClient) { }

obtenerEspecialidades(): Observable<any>{
  return this.http.get(url)
}

}