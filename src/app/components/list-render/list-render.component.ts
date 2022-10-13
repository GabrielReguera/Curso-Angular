import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { Animes } from 'src/app/Animes';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];
  animes: Animes[] = [];

  animalsDetails = '';

  constructor(private listService: ListService) {
    this.getAnimals();
    this.getAnimes();
  }

  ngOnInit(): void {}

  showAge(animal: Animal): void {
    this.animalsDetails = `${animal.name} have ${animal.age} years old`;
  }

  removeAnimal(animal: Animal): void {
    this.animals = this.animals.filter((a) => animal.name !== a.name);
    this.listService.remove(animal.id).subscribe();
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

  getAnimes(): void {
    this.listService.getAllAnime().subscribe((animes) => (this.animes = animes));
  }
}
