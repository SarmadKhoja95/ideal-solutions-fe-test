import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.http.get(`${environment.API_URL}users`);
  }

  public getUserById(id: string): Observable<any> {
    return this.http.get(`${environment.API_URL}users/${id}`);
  }

  public addUser(user: any): Observable<any> {
    return this.http.post(`${environment.API_URL}users`, user);
  }
}
