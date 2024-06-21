import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inputValidation',
  standalone: true
})
export class InputValidationPipe implements PipeTransform {
  transform(value: string, minLength: number = 0, placeholderText: string = 'Please enter a value'): string {
    if (!value || value.trim().length === 0 || value.length < minLength) {
      return placeholderText;
    } else {
      return value;
    }
  }
}
