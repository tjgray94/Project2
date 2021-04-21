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
  httpOption = {headers:new HttpHeaders({
    'Content-Type' : 'application/json'
  })}
  constructor(private http:HttpClient) { }

  addFavorite(fav: object): Observable<Favorites> {
    
    return this.http.post<Favorites>(`${this.baseUrl}`+`addfavorites`, fav);
  }

  getFavorites(userId: number): Observable<Favorites> {
    return this.http.get<Favorites>(`${this.baseUrl}`+ `favorites/{user_id}`);
  }
}
