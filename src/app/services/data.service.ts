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

  getParamsHeader(emailAdmin: string, app: string): HttpHeaders {
    return new HttpHeaders({
      'Accept': 'application/json',
      'adminemail': emailAdmin,
      'token': this.getToken(),
      'app': app
    });
  }

  getData(emailUser: string, emailAdmin: string, app: string){
    return this.http.get<any>(`${environment.apiUrl}/${emailUser}/bookings?current=true`, {
      headers: this.getParamsHeader(emailAdmin, app)
    })
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
