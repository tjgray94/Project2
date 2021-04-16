import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vegan-burger',
  templateUrl: './vegan-burger.component.html',
  styleUrls: ['./vegan-burger.component.css']
})
export class VeganBurgerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show: boolean = true
}
