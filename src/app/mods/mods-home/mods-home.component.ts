import { Component, ElementRef } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { SharedModule } from '../../shared/shared.module';
import { DividerComponent } from "../../shared/divider/divider.component";
import { NgIf } from '@angular/common';
import { AccordionComponent } from "../accordion/accordion.component";

@Component({
  selector: 'app-mods-home',
  standalone: true,
  imports: [ModalComponent, SharedModule, DividerComponent, NgIf, AccordionComponent],
  templateUrl: './mods-home.component.html',
  styleUrl: './mods-home.component.css'
})
export class ModsHomeComponent {
  items = [
    { title: 'Why is the sky blue?', content: 'The sky is blue because it is.' },
    { title: 'What does an orange taste like?', content: 'An orange tastes like an orange.' },
    { title: 'What time is it?', content: 'The time is now.' }
  ];

  modalOpen = false;
  constructor(private element: ElementRef) {
    this.element.nativeElement.addEventListener('click', () => {
      
    });
  }
  ngOnInit(): void {
    document.body.appendChild(this.element.nativeElement);
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  } 
}
