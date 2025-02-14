import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
  title = 'Welcome to My Component';
  counter = 0;

  incrementCounter() {
    this.counter++;
  }
}
