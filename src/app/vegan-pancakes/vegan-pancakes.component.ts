import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vegan-pancakes',
  templateUrl: './vegan-pancakes.component.html',
  styleUrls: ['./vegan-pancakes.component.css']
})
export class VeganPancakesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show: boolean = true;
}
