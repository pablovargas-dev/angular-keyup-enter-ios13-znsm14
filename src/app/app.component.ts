import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  keyupCounter: number = 0;
  keyupEnterCounter: number = 0;

  keyup(event) {
    console.log(event);
    if (event.key === 'Enter') this.keyupCounter++;
  }

  keyupEnter(event) {
    console.log('Enter', event);
    this.keyupEnterCounter++;
  }

  keyupShiftEnter(event) {
    console.log('keyupShiftEnter', event);
    this.keyupEnterCounter++;
  }
}
