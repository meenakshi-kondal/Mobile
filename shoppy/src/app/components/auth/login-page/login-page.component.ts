import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { InputComponent } from 'src/app/shared/input/input.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  standalone: true,
  styleUrls: ['./login-page.component.scss'],
  imports: [InputComponent, ButtonComponent],
})
export class LoginPageComponent implements OnInit {
  inputDetails = [{ placeholder: 'Email' }, { placeholder: 'Password' }];
  buttonDetail = {
    value: 'Login',
    style: {
      width: '300px',
    },
  };
  constructor() {}

  ngOnInit() {}
}
