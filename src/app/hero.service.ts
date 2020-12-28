import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mockheroes'
import {Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Hero[] {
    return of(HEROES);
  }

  constructor() { }
}
