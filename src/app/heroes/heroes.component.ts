import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mockheroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor() { }

  heroes = HEROES;
  selectedHero: HERO;

  onSelect(hero :HERO): void {
    this.selectedHero = hero;
  }
  ngOnInit(): void {
  }
}
