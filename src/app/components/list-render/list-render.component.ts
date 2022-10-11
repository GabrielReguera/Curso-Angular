import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/service/list.service';

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

  constructor(private listService: ListService) {}

  ngOnInit(): void {}

  showAge(animal: Animal): void {
    this.animalsDetails = `${animal.name} have ${animal.age} years old`;
  }

  removeAnimal(animal: Animal): void {
    this.animals = this.listService.remove(this.animals, animal);
  }
}
