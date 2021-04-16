import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { DinnerComponent } from './dinner/dinner.component';
import { HomeComponent } from './home/home.component';
import { LunchComponent } from './lunch/lunch.component';
import { VeganComponent } from './vegan/vegan.component';
import { DessertComponent } from './dessert/dessert.component'

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'breakfast',component:BreakfastComponent},
  {path:'lunch',component:LunchComponent},
  {path:'dinner',component:DinnerComponent},
  {path:'vegan',component:VeganComponent},
  {path:'dessert',component:DessertComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
