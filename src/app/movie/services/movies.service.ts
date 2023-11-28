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
    return this.http.get(baseUrl);
  }

  getMovie(id: number): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  createMovie(data: any): Observable<any> {
    return this.http.post(baseUrl, data, { observe: 'response' });
  }

  updateMovie(id: number, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteMovie(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`, { observe: 'response' });
  }

  findByTitle(title: string): Observable<any> {
    return this.http.get(`${baseUrl}?title=${title}`);
  }

}
