import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service'
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Favorites } from '../favorites';

@Component({
  selector: 'app-addfavorite',
  templateUrl: './addfavorite.component.html',
  styleUrls: ['./addfavorite.component.css']
})
export class AddfavoriteComponent implements OnInit {

  constructor(private favoritesservice:FavoritesService) { }

  // fav : Favorites =new Favorites(0,0);
  submitted = false;

  ngOnInit(): void {
  }

  // save(){
  //   this.favoritesservice.addFav(this.fav)
  //   .subscribe((data) => {console.log(data);
  //   this.fav = new Favorites(data.userId, data.recipeId), (error: any) => console.log(error)});
  
  // }

}
