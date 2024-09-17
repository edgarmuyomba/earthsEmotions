import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse } from './apiresponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private base_url = "http://localhost:8000/core"

  constructor(private http: HttpClient) { }

  polarityNow(): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.base_url}/polarity-now/`,)
  }
}
