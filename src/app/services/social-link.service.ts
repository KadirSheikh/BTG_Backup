import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocialLinkService {

  constructor(
    private _http: HttpClient
  ) { }

  async getSocial() {
    return this._http.get(`${environment.apiUrl}api/manage-social-links/all`)
  }
  
}
