import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-home-cards',
  templateUrl: './home-cards.component.html',
  styleUrls: ['./home-cards.component.scss'],
  standalone: true,
  imports:[IonicModule]
})
export class HomeCardsComponent  implements OnInit {
  cardList = [
    'modern_men.png', 'modern_women.png', 'traditional_men.png'
  ];
  constructor() { }

  ngOnInit() {}

}
