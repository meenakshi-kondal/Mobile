import { Component } from '@angular/core';
import { ButtonData, InputFormat } from 'src/app/interfaces/common';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { RESPONSE } from 'src/app/shared/response';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  standalone: true,
  styleUrls: ['./login-page.component.scss'],
  imports: [InputComponent, ButtonComponent, IonicModule],
})
export class LoginPageComponent {
  inputDetails = [
    {
      placeholder: 'Email',
      required: true,
      id: 'email',
      value: '',
      validateMessage: '',
    },
    {
      placeholder: 'Password',
      required: true,
      id: 'password',
      value: '',
      validateMessage: '',
    },
  ];
  buttonDetail: ButtonData = {
    value: 'Login',
    style: {
      width: '330px',
    },
  };
  loginButton: ButtonData = {
    value: 'Sign In',
    style: {
      width: '330px',
    },
    icon: 'logo-google',
  };

  constructor(private router: Router, private commonService: CommonService) {}

  public inputData(data: InputFormat) {
    this.inputDetails.map((item) => {
      if (item.id === data.id) {
        item.value = data.value;
      }
    });
  }

  public login(data: ButtonData) {
    let allValid = true;
    this.inputDetails.forEach((item) => {
      if (item.required && item.value === '') {
        item.validateMessage = RESPONSE.REQUIRED;
        allValid = false;
      } else {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*(),.?":{}|<>]{8,15}$/;
        const isEmailValid =
          item.id === 'email' && !emailRegex.test(item.value);
        const isPasswordValid =
          item.id === 'password' && !passwordRegex.test(item.value);
        if (isEmailValid || isPasswordValid) {
          allValid = false;
          item.validateMessage = isEmailValid
            ? RESPONSE.EMAIL
            : RESPONSE.PASSWORD;
        } else {
          item.validateMessage = '';
        }
      }
    });
    if (!allValid) {
      return;
    }
    this.commonService.showToast('success', RESPONSE.LOGIN);
    this.inputDetails.map((data) => {
      data.value = '';
    });
    this.router.navigate(['/home']);
  }

  // will update soon as backend is live on cloud
  public googleSignIn(data: ButtonData) {}
}
