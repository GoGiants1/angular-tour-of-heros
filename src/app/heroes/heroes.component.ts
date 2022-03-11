import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  // 컴포넌트의 생성자는 생성자로 받은 인자를 클래스 프로퍼티로 연결하는 정도로 간단하게 유지하는 것이 좋습니다.
  // 생성자에는 이 외의 로직이 들어가지 않는 것이 좋습니다.
  // 리모트 서버로 HTTP 요청을 보내는 로직도 물론 들어가지 않는 것이 좋습니다.
  constructor(private heroService: HeroService, private messageService: MessageService) {}

  heroes: Hero[] = [];
  // 컴포넌트 초기화 로직 ngOnInit에 작성할 것.
  ngOnInit(): void {
    this.getHeros();
  }

  getHeros() {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
