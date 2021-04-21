import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs'; 
import { Favorites } from './favorites';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  // This is the REST server
  private baseUrl = 'http://localhost:9095/api/f1/';  
  
  constructor(private http:HttpClient) { }
  httpOption = {headers:new HttpHeaders({
    'Content-Type' : 'application/json'
  })}

  // addFav(username : string, recipeName: string): Observable<any> {
  //   return this.http.post<any>(this.baseUrl + 'addfavorites/'+ username + '/' + recipeName);
  // }

  getFavorites(username: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`+ `favorites/` + username);
  }
}
