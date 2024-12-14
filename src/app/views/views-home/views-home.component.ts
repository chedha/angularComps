import { Component } from '@angular/core';
import { StatisticsComponent } from '../statistics/statistics.component';
import { DividerComponent } from "../../shared/divider/divider.component";
import { SegmentComponent } from "../../elements/segment/segment.component";
import { ItemListComponent } from "../item-list/item-list.component";

@Component({
  selector: 'app-views-home',
  standalone: true,
  imports: [StatisticsComponent, DividerComponent, SegmentComponent, ItemListComponent],
  templateUrl: './views-home.component.html',
  styleUrl: './views-home.component.css'
})
export class ViewsHomeComponent {
  stats = [
    { value: 22, label: '# of Users' },
    { value: 900, label: 'Revenue' },
    { value: 50, label: 'Reviews' }
  ]

  items = [
    { image: 'assets/couch.jpeg', title: 'Couch', description: 'This is a fantastic couch to sit on' },
    { image: 'assets/dresser.jpeg', title: 'Dresser', description: 'You can put all of your clothes in this dresser' },
  ]

}
