import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getParamsHeader(password, app): HttpHeaders {
    return new HttpHeaders({
      'Accept': 'application/json',
      'password': password,
      'app': app
    });
  }

  getData(email: string, codeCity: number, codeOffice: number){
    return this.http.get<any>(`${environment.apiUrl}/${email}?current=true`, {headers: this.headers})
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  public getToken(): string {
    return localStorage.getItem('currentUser');
  }

}
