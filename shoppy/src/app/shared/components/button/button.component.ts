import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { logoGoogle  } from 'ionicons/icons';
import { ButtonData } from 'src/app/interfaces/common';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class ButtonComponent implements OnInit {
  @Output() buttonEvent = new EventEmitter<ButtonData>();
  @Input() buttonDetail: ButtonData = {
    value: 'Save',
    style: {},
    icon: ''
  };

  constructor() {
    addIcons({ 'logo-google': logoGoogle });
  }

  ngOnInit() {
    this.buttonDetail.style = Object.assign(
      {
        '--background': 'var(--theme-color)',
        width: 'fit-content',
      },
      this.buttonDetail.style
    );
    this.buttonDetail.icon = this.buttonDetail.icon ?? '';
  }

  public clickHandler(data: ButtonData) {
    this.buttonEvent.emit(data);
  }
  
}
