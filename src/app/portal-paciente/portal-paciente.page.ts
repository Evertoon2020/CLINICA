import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal-paciente',
  templateUrl: './portal-paciente.page.html',
  styleUrls: ['./portal-paciente.page.scss'],
})
export class PortalPacientePage implements OnInit {

  isModalOpen = false;
  isModalOpen2 = false;

  constructor() { }

  ngOnInit() {
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  setOpen2(isOpen2: boolean) {
    this.isModalOpen2 = isOpen2;
  }

}
