import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  // messageService 프로퍼티는 템플릿에 바인딩되기 때문에,
  // 반드시 public으로 선언해야 합니다.
  // Angular에서는 public 으로 선언된 컴포넌트 프로퍼티만 바인딩할 수 있음.
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {}
}
