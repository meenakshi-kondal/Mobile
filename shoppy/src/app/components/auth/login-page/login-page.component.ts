import { Component, OnInit } from '@angular/core';
import { InputComponent } from 'src/app/shared/input/input.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  standalone: true,
  styleUrls: ['./login-page.component.scss'],
  imports: [InputComponent]
})
export class LoginPageComponent  implements OnInit {
  inputDetails = [
    { placeholder: 'Email'},
    { placeholder: 'Password'},
  ];
  constructor() { }

  ngOnInit() {}

}
