import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { Animes } from '../Animes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals';
  private apiUrlAnime = 'http://localhost:3000/animes';

  constructor(private http: HttpClient) {}

  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) => animal.name !== a.name);
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getAllAnime(): Observable<Animes[]> {
    return this.http.get<Animes[]>(this.apiUrlAnime);
  }
}
