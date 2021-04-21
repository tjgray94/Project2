import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable, throwError } from 'rxjs'; 
import { retry, catchError } from 'rxjs/operators'
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

   private baseUrl = 'http://localhost:9095/api/u1'; 
   constructor(private http:HttpClient) { }

   HttpOption = {headers:new HttpHeaders({
     'Content-Type' : 'application/json'
   })}

loginUser(username: string, password: string):Observable<any>{
    return this.http.get<any>(this.baseUrl + '/' + username + '/' + password);
    }

   userData:User | any;

  createUser(user: object): Observable<User> {
    
    return this.http.post<User>(`${this.baseUrl}`+`createusers`, user);
  }

  handleError(error: any){
    let errorMessage = 'Wrong Username or Password. Please Try Again';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl).pipe(
      retry(1),
      catchError(this.handleError)
    );

  }

  setData(data: any){
    this.userData=data;
  }

  getData(){
    return this.userData;
  }
}
