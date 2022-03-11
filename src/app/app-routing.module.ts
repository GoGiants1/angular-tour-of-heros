// ng generate module app-routing --flat --module=app 로 생성
// --flat: 새로운 폴더를 만들지 않고 src/app 폴더에 파일 생성
// --module=app: Angular CLI가 라우팅 모듈을 AppModule의 imports 배열에 추가

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // 애플리케이션 최상위 계층에 존재하는 라우터를 설정할 때는 forRoot() 메소드를 사용합니다.
  // forRoot() 메소드를 사용하면 라우팅과 관련된 서비스 프로바이더와 디렉티브를 애플리케이션에 제공할 수 있으며,
  // 브라우저에서 변경되는 URL을 감지할 수 있습니다.
  exports: [RouterModule],
})
export class AppRoutingModule {}
