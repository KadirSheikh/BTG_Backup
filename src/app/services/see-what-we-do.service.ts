import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SeeWhatWeDoService {

  constructor(private _http: HttpClient) { }

  async getWhatWeDo() {
    return this._http.get(`${environment.apiUrl}api/seewhatwedo/all`)
  }

  

}
