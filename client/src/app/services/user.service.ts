import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  loginUser(userData: any): Observable<any> {
    return this.http.post(this.baseUrl + 'authenticate/', userData, {headers: this.httpHeaders});
  }
  registerUser(userData: any): Observable<any> {
    return this.http.post(this.baseUrl + 'users/', userData, {headers: this.httpHeaders});
  }
  getUserById(id): Observable<any>{
    return this.http.get(this.baseUrl + 'users/' + id + '/', {headers: this.httpHeaders});
  }
  editUser(user: User, id: number): Observable<any>{
    return this.http.patch(this.baseUrl + 'users/' + id + '/', user, {headers: this.httpHeaders });
  }
}
