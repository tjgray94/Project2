import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs'; 
import { Ingredients } from './ingredients';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  private baseUrl = 'http://localhost:9095/api/i1/';

  constructor(private http:HttpClient) { }

  getIngredient(ingredient_name:string): Observable<Ingredients> {
    return this.http.get<Ingredients>(`${this.baseUrl}`+ `ingredients/{ingredient_name}`);
  }
}
