import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

// 의존성으로 주입 가능, 다른 의존성을 주입받을 수도 있음.
@Injectable({
  // 메타데이터
  // root 는 서비스 프로바이더를 최상위 인젝터에 등록하는 것.
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES); // await 같은 역할?
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
