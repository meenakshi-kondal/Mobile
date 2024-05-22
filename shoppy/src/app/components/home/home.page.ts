import { Component } from '@angular/core';
import { HeaderComponent } from '../layout/header/header.component';
import { HomeCardsComponent } from '../home-cards/home-cards.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ HeaderComponent,HomeCardsComponent],
})
export class HomePage {
  constructor() {}
}
