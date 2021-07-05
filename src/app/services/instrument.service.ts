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
    
  async getInstrument(id) {
    // console.log("%cThis is Servcie","background:red; color: white; font-size: 36px ");
    return this._http.get(`${environment.apiUrl}api/instrumnet/all/${id}`)
  }

}
