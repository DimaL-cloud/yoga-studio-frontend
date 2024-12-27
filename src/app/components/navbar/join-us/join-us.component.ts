import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {JoinUsFormModel} from '../../../models/join-us-form.model';

@Component({
  selector: 'app-join-us',
  imports: [CommonModule, FormsModule],
  templateUrl: './join-us.component.html',
  standalone: true,
  styleUrl: './join-us.component.css'
})
export class JoinUsComponent {
  @Input() visible: boolean = false;
  @Output() close = new EventEmitter<void>();

  joinUsForm: JoinUsFormModel = new JoinUsFormModel('', '', '');

  onSubmit() {
    this.clearForm();
    this.close.emit();
  }

  clearForm() {
    this.joinUsForm = new JoinUsFormModel('', '', '');
  }
}