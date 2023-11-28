import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DirectorsService {

constructor(private http: HttpClient) { }

getAllDirector(): Observable<any> {
  return this.http.get(`${baseUrl}directors/`);
}

getDirector(id: number): Observable<any> {
  return this.http.get(`${baseUrl}directors/${id}`);
}

createDirector(data: any): Observable<any> {
  return this.http.post(`${baseUrl}directors/`, data, { observe: 'response' });
}

updateDirector(id: number, data: any): Observable<any> {
  return this.http.put(`${baseUrl}directors/${id}`, data);
}

deleteDirector(id: number): Observable<any> {
  return this.http.delete(`${baseUrl}directors/${id}`, { observe: 'response' });
}

// findByTitle(title: string): Observable<any> {
//   return this.http.get(`${baseUrl}?title=${title}`);
// }

}
