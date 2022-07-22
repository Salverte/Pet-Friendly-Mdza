import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
//Servicio
export class LugaresService {

  constructor(
    private http: HttpClient
  ) {}
//Hacemos una función get
  getLugares() {
    return this.http.get("assets/lugares.json")
  }
}


