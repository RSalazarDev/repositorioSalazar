import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = 'http://127.0.0.1:8000/medicos'

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  constructor(private http:HttpClient) { }

obtenerMedicos(): Observable<any>{
  return this.http.get(url)
}

}
