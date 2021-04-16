import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinner-rolls',
  templateUrl: './dinner-rolls.component.html',
  styleUrls: ['./dinner-rolls.component.css']
})
export class DinnerRollsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show: boolean = true;
}
