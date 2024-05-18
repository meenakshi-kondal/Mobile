import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  checkmarkCircleOutline,
  informationCircleOutline,
  closeCircleOutline,
} from 'ionicons/icons';
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private toast: ToastController) {
    addIcons({
      checkmarkCircleOutline,
      informationCircleOutline,
      closeCircleOutline,
    });
  }

  async showToast(type: string, message: string) {
    let icon;
    let cssClass;
    switch (type) {
      case 'success':
        icon = checkmarkCircleOutline;
        cssClass = 'success-toast';
        break;
      case 'error':
        icon = closeCircleOutline;
        cssClass = 'error-toast';
        break;
      case 'warning':
        icon = informationCircleOutline;
        cssClass = 'warning-toast';
        break;
      default:
        icon = informationCircleOutline;
        cssClass = 'warning-toast';
    }
    const toast = await this.toast.create({
      message: message,
      position: 'top',
      duration: 40000,
      icon: icon,
      cssClass: cssClass,
      buttons: [
        {
          text: 'Dismiss',
          role: 'cancel',
        },
      ],
    });
    await toast.present();
  }

}
