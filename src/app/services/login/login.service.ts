import { Injectable } from '@angular/core';
import { User } from '../../models/User'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = 'http://localhost:3000'

  constructor(
    private _http: HttpClient
  ) { }

  sendData(user: User): Observable<any>{
    return this._http.post(this.baseUrl+'/login', user).pipe(map(res => res))
  }

  createData(user: User): Observable<any>{
    return this._http.post(this.baseUrl+'/register', user).pipe(map(res => res))
  }
}
