import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  users = [
    {
      name: 'John',
      age: 25,
    },
    {
      name: 'Jane',
      age: 20,
    },
    {
      name: 'Jim',
      age: 30,
    },
  ]
}
