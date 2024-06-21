import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { TalkativeDirective } from './directives/talkative.directive';
import { InputValidationPipe } from './pipes/placeholder.pipe';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule,InputValidationPipe,TalkativeDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular.cont';
 

  outcomes: string[] = ['Prize 1', 'Prize 2', 'Try Again', 'Bonus!'];
  result: string = '';

  spinWheel() {
    const index = Math.floor(Math.random() * this.outcomes.length);
    this.result = this.outcomes[index];
  }

  get extraSpin(): boolean {
    return this.result === 'Try Again';
  }

  userInput: string = '';
  errorMessage: string = '';

  // validateInput(minLength: number): void {
  //   if (!this.userInput || this.userInput.length < minLength) {
  //     this.errorMessage = `Input is required and must be at least ${minLength} characters long.`;
  //   } else {
  //     this.errorMessage = '';
  
  //   }
  // }
}
