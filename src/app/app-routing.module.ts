import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { DinnerComponent } from './dinner/dinner.component';
import { HomeComponent } from './home/home.component';
import { LunchComponent } from './lunch/lunch.component';
import { VeganComponent } from './vegan/vegan.component';
import { DessertComponent } from './dessert/dessert.component'
import { SkillEasyComponent } from './skill-easy/skill-easy.component';
import { SkillMedComponent } from './skill-med/skill-med.component';
import { SkillHardComponent } from './skill-hard/skill-hard.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'breakfast',component:BreakfastComponent},
  {path:'lunch',component:LunchComponent},
  {path:'dinner',component:DinnerComponent},
  {path:'vegan',component:VeganComponent},
  {path:'dessert',component:DessertComponent},
  {path:'easy',component:SkillEasyComponent},
  {path:'intermediate',component:SkillMedComponent},
  {path:'hard',component:SkillHardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
