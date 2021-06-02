import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sala } from '../clases/sala';

const url = 'http://127.0.0.1:8000/salas'

@Injectable({
  providedIn: 'root'
})
export class SalasService {

  constructor(private http:HttpClient) { }

obtenerSalas(): Observable<any>{
  return this.http.get(url)
}



}