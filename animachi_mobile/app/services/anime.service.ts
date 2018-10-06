import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Anime } from '../models/anime';
import * as ApplicationSettings from "application-settings";

@Injectable()
export class AnimeService {

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAnimes(): Observable<any> {
    return this.http.get(this.baseUrl + 'animes/', this.getAuthHeaders());
  }
  getAnime(id: number): Observable<any> {
    return this.http.get(this.baseUrl + 'animes/'+id+'/', this.getAuthHeaders());
  }

  addAnime(anime): Observable<any> {
    return this.http.post(this.baseUrl + 'animes/', anime, this.getAuthHeaders());
  }

  editAnime(anime, id: number): Observable<any> {
    return this.http.put(this.baseUrl + 'animes/' + id + '/', anime, this.getAuthHeaders());
  }
  deleteAnime(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + 'animes/' + id + '/', this.getAuthHeaders());
  }

  private getAuthHeaders() {
    const token = ApplicationSettings.getString('token');
    const httpHeaders = new HttpHeaders(
      {'Content-Type': 'application/json; charset=utf-8',
      'Authorization': 'Token ' + token});
    return { headers: httpHeaders};
  }

}