import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-western-omelet',
  templateUrl: './western-omelet.component.html',
  styleUrls: ['./western-omelet.component.css']
})
export class WesternOmeletComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show: boolean = true;
}
