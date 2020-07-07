import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdditionalInvInfoService {

  private url = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  getAdditionalInfo = () => this.http.get(`${this.url}/additional-info`);
}