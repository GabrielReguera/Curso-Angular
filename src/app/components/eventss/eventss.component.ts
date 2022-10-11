import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventss',
  templateUrl: './eventss.component.html',
  styleUrls: ['./eventss.component.css']
})
export class EventssComponent implements OnInit {

  Show: boolean = false;
  showMouse: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  showMessage(): void{
    this.Show = !this.Show;
  }

  moveMouse(): void{
    this.showMouse = !this.showMouse;
  }

}
