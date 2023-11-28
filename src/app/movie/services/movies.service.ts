import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { baseUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getAllMovie(): Observable<any> {
    return this.http.get(`${baseUrl}movies/`);
  }

  getMovie(id: number): Observable<any> {
    return this.http.get(`${baseUrl}movies/${id}`);
  }

  createMovie(data: any): Observable<any> {
    return this.http.post(`${baseUrl}movies`, data, { observe: 'response' });
  }

  updateMovie(id: number, data: any): Observable<any> {
    return this.http.put(`${baseUrl}movies/${id}`, data);
  }

  deleteMovie(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}movies/${id}`, { observe: 'response' });
  }

  findByTitle(title: string): Observable<any> {
    return this.http.get(`${baseUrl}movies?title=${title}`);
  }

}
