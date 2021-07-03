import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {

  constructor(
    private _http: HttpClient
  ) { }
    
  async getInstrument() {
    return this._http.get(`${environment.apiUrl}api/instrumnet/all`, {
      headers: {
        "auth-token": localStorage.getItem('auth-token'),
        "role": localStorage.getItem('role')
      }
    })
  }

}
