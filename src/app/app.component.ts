import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedIn } from './models/logged-in';
import { UsersService } from './users.service';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { IngredientsService } from './ingredients.service';
import { FavoritesService } from './favorites.service';
import { ɵangular_packages_platform_browser_dynamic_testing_testing_a } from '@angular/platform-browser-dynamic/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Recipe Newsletter';
  show: boolean = true;
  nav: boolean = true;
  model = new LoggedIn('', '')
  username: string = '';
  password: string = '';
  ingredient: string = '';
  recipeName: any = '';
  fName: string = '';
  lName: string = '';
  email: string = '';
  user = new User(this.fName, this.lName, this.email, this.username, this.password)
  credentials = { username: '', password: '' };

  constructor(private usersService: UsersService, private http: HttpClient, private router: Router, private ingredientsService: IngredientsService,private favoritesService: FavoritesService) {
  }

  loginUser() {
    console.log(this.username + ' ' + this.password);
    this.usersService.loginUser(this.username, this.password).subscribe((data) => {
      console.log(data);
    })
    console.log(this.username);
    this.nav = !this.nav;
  };

  getFavorites(){ 
    this.favoritesService.getFavorites(this.username).subscribe((data) => {
      console.log(data);
      let recipeName = data.recipeName;
    })
    
  };

  Search() {
    this.ingredientsService.getIngredient(this.ingredient).subscribe((data) => {
      console.log(data);
  });
  }
  create(){
    this.usersService.createUser(this.user).subscribe((data) => {
      console.log(data);
  });
  this.nav = !this.nav;
  }
}
