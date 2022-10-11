import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  someText = 'Another information';
  today = new Date();
  real = 2200;

  constructor() {}

  ngOnInit(): void {}
}
