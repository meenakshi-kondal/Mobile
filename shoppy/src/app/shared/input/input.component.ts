import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { InputData } from 'src/app/interfaces/common';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class InputComponent implements OnInit {
  @Input() inputDetails: InputData = {
    placeholder: '',
    style: { },
  };

  constructor() {}

  ngOnInit() {
    this.inputDetails.style = Object.assign({
      'font-size': 'var(--important-text-size)',
      color: 'var(--theme-color)',
      border: '1px solid var(--theme-color)',
      padding: '5px !important',
      width: '300px'
      
    }, this.inputDetails.style);
  }
}
