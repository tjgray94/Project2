import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs'; 
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = 'http://localhost:9095/api/u1/users'; 

  httpOption = {headers:new HttpHeaders({
    'Content-Type' : 'application/json'
  })}
  userData:User | any;
  constructor(private http:HttpClient) { }

  createUser(user: object): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}`+`createusers`, user);
  }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  setData(data: any){
    this.userData=data;
  }

  getData(){
    return this.userData;
  }
}
