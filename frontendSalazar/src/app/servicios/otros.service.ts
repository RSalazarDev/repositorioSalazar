import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const url = 'http://127.0.0.1:8000/otros'

@Injectable({
  providedIn: 'root'
})
export class OtrosService {

  constructor(private http:HttpClient) { }

obtenerOtros(): Observable<any>{
  return this.http.get(url)
}

}
