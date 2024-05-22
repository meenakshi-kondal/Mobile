import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HeaderComponent implements OnInit {
  @Input() activeTab = 'Home';
  cartCount = 15;
  placeholderIndex: number = 0;
  intervalId: any;
  placeholders: string[] = [
    "Start your shopping adventure...",
    "Search for the perfect gift...",
    "Find your next favorite item...",
    "Discover new trends...",
    "Type to explore amazing deals...",
    "Looking for something special?",
    "Find it all here...",
  ];
  currentPlaceholder: string = this.placeholders[0];
  constructor() {}

  ngOnInit() {
    this.startPlaceholderRotation();
  }

  public handleSearch(data: Event) {
    console.log({ data });
  }

  startPlaceholderRotation() {
    this.intervalId = setInterval(() => {
      this.placeholderIndex = (this.placeholderIndex + 1) % this.placeholders.length;
      this.currentPlaceholder = this.placeholders[this.placeholderIndex];
    }, 10000);
  }

  clearPlaceholderRotation() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  ngOnDestroy() {
    this.clearPlaceholderRotation();
  }
}
