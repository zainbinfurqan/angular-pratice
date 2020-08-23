import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'zain ahmed';

  constructor() {
    // this.name = "omer"
    this.changeName('john')
    console.log(123)
  }

  changeName(name: string) {
    this.name = name
  }
}
