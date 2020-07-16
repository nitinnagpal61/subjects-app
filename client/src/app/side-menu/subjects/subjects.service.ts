import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  private url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getSubjects = () => this.http.get(`${this.url}/subjects`);
  getSubjectDetails = (id: number) =>
    this.http.get(`${this.url}/subjects/${id}`);
}
