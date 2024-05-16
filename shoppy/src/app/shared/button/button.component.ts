import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports:[IonicModule]
})
export class ButtonComponent implements OnInit {
  @Input() buttonDetail = {
    value: 'Save',
    style: {},
  };
  @Output() dataEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {
    this.buttonDetail.style = Object.assign(
      {
        '--background': 'var(--theme-color)',
        width: '100px',
      },
      this.buttonDetail.style
    );
  }

  public clickHandler(data: any) {
    this.dataEvent.emit(data);
  }
}
