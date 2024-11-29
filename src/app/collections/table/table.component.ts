import { Component, Input } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() classNames: any = '';
  @Input() data: any = [{}];
  @Input() headers: any = [{}];
}
