import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class InputComponent implements OnInit {
  @Input() inputDetails = {
    placeholder: '',
  };

  constructor() {}

  ngOnInit() {
    console.log(this.inputDetails)
  }
}
