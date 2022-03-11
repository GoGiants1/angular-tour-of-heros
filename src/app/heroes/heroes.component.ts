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

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
    // subscribe()를 생략하면 서버로 제거 요청을 보내지 않습니다! 왜냐하면 아무도 구독하지 않은 Observable은 아무 동작도 하지 않기 때문입니다!
    // 이 내용을 확인해 보려면 subscribe() 부분을 제거하고 앱을 다시 실행해 보세요. 히어로를 제거한 뒤 다른 페이지로 이동했다가 돌아오면 이전에 표시되었던 히어로 목록이 그대로 표시되는 것을 확인할 수 있습니다.
  }
}
