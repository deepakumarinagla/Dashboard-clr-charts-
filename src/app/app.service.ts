import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

  getLineGraph() {
      return this.http.get('http://localhost:3000/linegraph');
  }
}