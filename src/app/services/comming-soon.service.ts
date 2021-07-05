import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommingSoonService {

  constructor(private _http: HttpClient) { }

  async getCommingSoon() {
    return this._http.get(`${environment.apiUrl}api/comingSoon/get-all`)
  }
}
