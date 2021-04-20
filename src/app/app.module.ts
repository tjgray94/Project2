import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  
import {DataTableModule} from 'angular-datatable'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChickenParmComponent } from './chicken-parm/chicken-parm.component';
import { DinnerRollsComponent } from './dinner-rolls/dinner-rolls.component';
import { VeganPancakesComponent } from './vegan-pancakes/vegan-pancakes.component';
import { WesternOmeletComponent } from './western-omelet/western-omelet.component';
import { PaniniComponent } from './panini/panini.component';
import { GreekPastaSaladComponent } from './greek-pasta-salad/greek-pasta-salad.component';
import { ChiliComponent } from './chili/chili.component';
import { VeganBurgerComponent } from './vegan-burger/vegan-burger.component';
import { BrowniesComponent } from './brownies/brownies.component';
import { CheesecakeComponent } from './cheesecake/cheesecake.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { HomeComponent } from './home/home.component';
import { LunchComponent } from './lunch/lunch.component';
import { DinnerComponent } from './dinner/dinner.component';
import { VeganComponent } from './vegan/vegan.component';
import { DessertComponent } from './dessert/dessert.component';
import { SkillEasyComponent } from './skill-easy/skill-easy.component';
import { SkillMedComponent } from './skill-med/skill-med.component';
import { SkillHardComponent } from './skill-hard/skill-hard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddUserComponent } from './add-user/add-user.component';
import { AddfavoriteComponent } from './addfavorite/addfavorite.component';


@NgModule({
  declarations: [
    AppComponent,
    ChickenParmComponent,
    DinnerRollsComponent,
    VeganPancakesComponent,
    WesternOmeletComponent,
    PaniniComponent,
    GreekPastaSaladComponent,
    ChiliComponent,
    VeganBurgerComponent,
    BrowniesComponent,
    CheesecakeComponent,
    BreakfastComponent,
    HomeComponent,
    LunchComponent,
    DinnerComponent,
    VeganComponent,
    DessertComponent,
    SkillEasyComponent,
    SkillMedComponent,
    SkillHardComponent,
    AddUserComponent,
    AddfavoriteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
    DataTableModule, 
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
