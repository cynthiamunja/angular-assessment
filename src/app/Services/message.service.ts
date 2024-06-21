// src/app/services/message.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: string[] = [
    'Hello, Adventurer!',
    'You found a treasure!',
    'Watch out for the dragon!',
    'Your journey is just beginning.',
    'You have gained a level!'
  ];

  constructor() {}

  getRandomMessage(): string {
    const index = Math.floor(Math.random() * this.messages.length);
    return this.messages[index];
  }
}
