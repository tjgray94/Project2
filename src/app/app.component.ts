import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedIn } from './models/logged-in';
import { UsersService } from './users.service';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { IngredientsService } from './ingredients.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Recipe Newsletter';
  show: boolean = true;
  nav:boolean = true;
  model=new LoggedIn('', '')
  username : string = '';
  password : string = '';
  ingredient: string = '';
  credentials = {username: '', password: ''};

  constructor(private usersService: UsersService, private http: HttpClient, private router: Router, private ingredientsService: IngredientsService) {
  }
  
  loginUser() { 
    console.log(this.username+' ' + this.password);
  this.usersService.loginUser(this.username, this.password).subscribe((data) => {
    console.log(data);
  
    // if (this.currentUser != null) {
    //   localStorage.setItem('isLoggedIn', 'true');
    //   localStorage.setItem('token', this.currentUser.username);
    //   this.router.navigate(['/']);
    // } else {
    //   alert("Login failed. Try again.");
    // }
  });

  this.nav = !this.nav;
  }

  Search() {
    this.ingredientsService.getIngredient(this.ingredient).subscribe((data) => {
      console.log(data);

  });
}

}