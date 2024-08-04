import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import 'ngx-toastr/toastr';
import { CustomButtonComponent } from '../custom-button/custom-button.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CustomButtonComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  buttons = [
    { id: 'button1', text: 'Button 1', class: 'teal' },
    { id: 'button2', text: 'Button 2', class: 'red' },
  ];

  constructor(private toastr: ToastrService) {}

  handleButtonClick(buttonId: string) {
    if (buttonId === this.buttons[0].id) {
      this.toastr.info('Button 1 is clicked');
    } else if (buttonId === this.buttons[1].id) {
      this.toastr.info('Button 2 is clicked');
    }
  }
}
