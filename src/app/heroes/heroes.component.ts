import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  hero: Hero = { id: 1, name: 'Windstorm' };

  constructor() {}

  // 컴포넌트 초기화 로직 ngOnInit에 작성할 것.
  ngOnInit(): void {}
}
