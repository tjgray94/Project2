import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cheesecake',
  templateUrl: './cheesecake.component.html',
  styleUrls: ['./cheesecake.component.css']
})
export class CheesecakeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show: boolean = true
}
