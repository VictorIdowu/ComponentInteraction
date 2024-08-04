import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css',
})
export class CustomButtonComponent {
  @Input() id!: string;
  @Input() text!: string;
  @Input() className!: string;

  @Output() buttonClick = new EventEmitter<string>();

  handleClick() {
    this.buttonClick.emit(this.id);
  }
}
