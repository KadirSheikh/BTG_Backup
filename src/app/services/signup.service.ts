import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private _http: HttpClient) { }

  async signup(body:any) {
    return this._http.post(`${environment.apiUrl}api/user-auth/register` , body)
  }
}
