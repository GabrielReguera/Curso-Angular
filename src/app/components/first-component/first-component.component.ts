import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = "Gabriel";
  age= "20";
  job= "programmer";
  Hobbies= ["Play volleibol", " Study JavaScript"];
  car = {
    name: "350z",
    year: "2006"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
