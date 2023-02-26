import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent {
  @Input() item: any;
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  deleteItem(item: any) {
    this.deleteEvent.emit(item);
  }
}
