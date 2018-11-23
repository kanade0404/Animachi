import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { Anime } from '../models/anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAnimes(): Observable<any> {
    return this.http.get(this.baseUrl + 'anime/', this.getAuthHeaders());
  }
  getAnimeById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + 'anime/' + id, this.getAuthHeaders());
  }
  addAnime(anime: Anime): Observable<any> {
    return this.http.post(this.baseUrl + 'anime/', anime, this.getAuthHeaders());
  }
  editAnime(anime: Anime, id: number): Observable<any> {
    return this.http.put(this.baseUrl + 'anime/' + id + '/', anime, this.getAuthHeaders());
  }
  deleteAnime(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + 'anime/' + id + '/', this.getAuthHeaders());
  }

  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    const httpHeaders = new HttpHeaders(
      {'Content-Type': 'application/json; charset=utf-8',
    'Authorization': 'Token ' + token}
    );
    return {headers: httpHeaders};
  }
}
