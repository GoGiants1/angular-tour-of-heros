import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;

  constructor() {}

  // 컴포넌트 초기화 로직 ngOnInit에 작성할 것.
  ngOnInit(): void {}

  selectedHero?: Hero;
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
