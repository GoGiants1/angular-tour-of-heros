import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero = 'Windstorm';

  constructor() { }

  // 컴포넌트 초기화 로직 ngOnInit에 작성할 것.
  ngOnInit(): void {
  }

}
