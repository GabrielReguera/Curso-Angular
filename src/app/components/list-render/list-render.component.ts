import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 3 },
    { name: 'Tom', type: 'Car', age: 6 },
    { name: 'Frida', type: 'Dog', age: 8 },
    { name: 'Bob', type: 'Horse', age: 1 },
  ];

  animalsDetails = '';

  constructor() {}

  ngOnInit(): void {}

  showAge(animal: Animal): void {
    this.animalsDetails = `${animal.name} have ${animal.age} years old`;
  }
}
