import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chicken-parm',
  templateUrl: './chicken-parm.component.html',
  styleUrls: ['./chicken-parm.component.css']
})
export class ChickenParmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title: string = "Baked Chicken Parmesan"

  show: boolean = true;
}
