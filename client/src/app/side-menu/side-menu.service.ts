import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {
  private url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getLinks = () => this.http.get(`${this.url}/navLinks`);
}
