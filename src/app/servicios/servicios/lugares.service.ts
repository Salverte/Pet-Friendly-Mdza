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
// FUNCIÓN FIND DONDE VA?
 //const db = require('../lugares');

// // // WHERE titulo LIKE "%termino%"
// const findLugares = async (termino) => {
//    const lugar = await db.lugares.findAll({
//        where: {
//                    nombre: {
//                [Op.substring]: termino,
//                          }
//               }
//    }).then(result => {
//       return result;
//    });

//    return lugar;
//    }

//  module.exports = {
//    findLugares
//  }


