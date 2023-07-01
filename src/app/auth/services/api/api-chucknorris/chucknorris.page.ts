import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chucknorris',
  templateUrl: './chucknorris.page.html',
  styleUrls: ['./chucknorris.page.scss'],
})
export class ChucknorrisPage implements OnInit {

  norris: any = {
    icon: '',
    id:'', 
    url:'', 
    value:''
  }
  ocultar: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  async verifica(){
      const url = 'https://api.chucknorris.io/jokes/random'    
      const response = await fetch(url)
      const prom = response.text();
      console.log(prom)
      prom.then((x: any) => {
        x = JSON.parse(x);
        this.norris.icon = x.icon_url,
        this.norris.id = x.id,
        this.norris.url = x.url,
        this.norris.value = x.value
       })
       this.ocultar = true;
  }

}
