import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AboutsService {

  constructor(private _http: HttpClient) { }

  async getTeam() {
    return this._http.get(`${environment.apiUrl}api/teams/all`)
  }

  async getHistory() {
    return this._http.get(`${environment.apiUrl}api/history/all`)
  }

  async getExportControl() {
    return this._http.get(`${environment.apiUrl}api/export-control/all`)
  }

  async getAbout() {
    return this._http.get(`${environment.apiUrl}api/about/all`)
  }

  async getLeadership() {
    return this._http.get(`${environment.apiUrl}api/leadership/all`)
  }

  async getWhistleblowing() {
    return this._http.get(`${environment.apiUrl}api/complianceWhistleblowing/all`)
  }
  
}
