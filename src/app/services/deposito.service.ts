import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Deposito } from '../models/Deposito';
import { baseUrl } from '../../constants/constants'


@Injectable({
  providedIn: 'root'
})
export class DepositoService {

  

  baseUrl = baseUrl+'/deposito'; 
  headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": "Basic YWRtaW46SGlDaWZyYW9zXzI1MjI="
  })
  
  constructor(private _http: HttpClient) { }

  getDepositos(): Observable<any>{
    return this._http.get(this.baseUrl, {headers: this.headers}).pipe(map( res => res))
  }

  addDeposito(deposito: Deposito): Observable<any>{
    return this._http.post<Deposito>(this.baseUrl, deposito, {headers: this.headers})
  }

  getOneDeposito(id): Observable<any>{
    return this._http.get(
      this.baseUrl+'/'+id, 
      {headers: this.headers}
      )
      .pipe(
        map( 
          res => res
        )
      )
  }

  updateDeposito(deposito: Deposito): Observable<any>{
    return this._http.put(this.baseUrl+'/'+deposito.id, deposito, {headers: this.headers})
  }

  deleteDeposito(id){
    return this._http.delete(this.baseUrl+'/'+id, {headers: this.headers})
  }

  likeDeposito(deposito: Deposito){
    return this._http.put(this.baseUrl+'/'+deposito.id, deposito, {headers: this.headers})
  }
}
