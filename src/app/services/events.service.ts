import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private _http: HttpClient) { }

  async getEvents() {
    return this._http.get(`${environment.apiUrl}api/events/all`)
  }
}
