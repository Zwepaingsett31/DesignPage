import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss'],
})
export class FirstPageComponent{

  constructor(private modalController: ModalController) {}

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      cssClass: 'custom-modal'
    });
    return await modal.present();
  }

}
