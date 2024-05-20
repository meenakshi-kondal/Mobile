import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { InputData, InputFormat } from 'src/app/interfaces/common';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class InputComponent implements OnInit {
  @Output() InputEvent = new EventEmitter<InputFormat>();
  @Input() inputDetails: InputData = {
    placeholder: '',
    value: '',
    style: {},
    validateMessage: '',
    required: false,
    id: '',
  };
  constructor() {
    this.inputDetails.value = '';
  }

  ngOnInit() {
    this.inputDetails.style = Object.assign(
      {
        padding: '5px !important',
      },
      this.inputDetails.style
    );
  }

  public inputData(event: any, data: InputData) {
    const submitInput = {
      value: event.value,
      id: data.id ? data.id.trim() : '',
    };
    this.InputEvent.emit(submitInput);
  }
}
