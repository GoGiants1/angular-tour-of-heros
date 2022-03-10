import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
// messages property에 메시지를 캐싱
export class MessageService {
  messages: string[] = [];
  add(message: string) {
    this.messages.push(message);
  }
  clear() {
    this.messages = [];
  }
}
