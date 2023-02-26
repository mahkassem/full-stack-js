import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items = [
    { name: 'Bread', price: 2.5 },
    { name: 'Milk', price: 3.5 },
    { name: 'Cheese', price: 4.5 },
    { name: 'Eggs', price: 5.5 },
    { name: 'Butter', price: 6.5 }
  ];

  currentItem: Observable<any> = of(this.items[0]);

  selectItem(item: any) {
    this.currentItem = of(item);
  }

  deleteItem(item: any) {
    this.items = this.items.filter(i => i !== item);
  }
}
