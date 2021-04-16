import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chili',
  templateUrl: './chili.component.html',
  styleUrls: ['./chili.component.css']
})
export class ChiliComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show: boolean = true
}
