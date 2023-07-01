import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-viacep',
  templateUrl: './api-viacep.page.html',
  styleUrls: ['./api-viacep.page.scss'],
})
export class ApiViacepPage implements OnInit {

  cep: any = {
    cep: '',
    logradouro:'', 
    complemento:'', 
    bairro:'',
    localidade:'',
    uf:''
  }

  constructor() { }

  ngOnInit() {
  }

  async verifica(){
    const cep = this.cep.cep
    const url = 'https://viacep.com.br/ws/'+ cep +'/json/'    
    const response = await fetch(url)
    const prom = response.text()
    prom.then((x: any) => {
      x = JSON.parse(x);
      this.cep.cep = x.cep,
      this.cep.logradouro = x.logradouro,
      this.cep.complemento = x.complemento,
      this.cep.bairro = x.bairro,
      this.cep.localidade = x.localidade,
      this.cep.uf = x.uf
     })
}

}
