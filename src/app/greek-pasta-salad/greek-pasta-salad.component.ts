import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greek-pasta-salad',
  templateUrl: './greek-pasta-salad.component.html',
  styleUrls: ['./greek-pasta-salad.component.css']
})
export class GreekPastaSaladComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show: boolean = true
}
