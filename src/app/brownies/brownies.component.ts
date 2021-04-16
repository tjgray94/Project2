import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brownies',
  templateUrl: './brownies.component.html',
  styleUrls: ['./brownies.component.css']
})
export class BrowniesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show: boolean = true
}
