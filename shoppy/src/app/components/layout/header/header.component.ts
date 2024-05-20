import { Component, OnInit } from '@angular/core';
import { IonContent, } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [ IonicModule ]
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  public handleSearch(data: Event) {
    console.log({data});
    
  }

}
