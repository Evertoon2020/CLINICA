import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { CadastroPacientePage } from './../cadastro-paciente/cadastro-paciente.page';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(
    public modalCtrl: ModalController,
    ) { }

  ngOnInit() {
  }

  async login() {
    const modal = await this.modalCtrl.create({
      component: LoginPage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'login-modal',
    })

    return await modal.present();
  }

  async cadastro() {
    const modal = await this.modalCtrl.create({
      component: CadastroPacientePage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'cadastro-paciente-modal',
    })

    return await modal.present();
  }
}
