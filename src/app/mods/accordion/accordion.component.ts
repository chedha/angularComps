import { Component, Input } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {
  @Input() items: any = [];
  openedItemIndex: number = 0;

  onClick(index: number) {
    if (index === this.openedItemIndex) {
      this.openedItemIndex = -1;
    } else {
      this.openedItemIndex = index;
    }
  }
}
