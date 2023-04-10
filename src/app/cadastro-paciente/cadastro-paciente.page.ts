import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.page.html',
  styleUrls: ['./cadastro-paciente.page.scss'],
})
export class CadastroPacientePage implements OnInit {

  constructor(public modalCtrl: ModalController,) { }

  ngOnInit() {
  }

  async dismiss() {
    return await this.modalCtrl.dismiss();
  }
  
}
