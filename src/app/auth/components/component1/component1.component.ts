import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss'],
})
export class Component1Component  implements OnInit {

  @Input()
  artigo: any = {
    titulo: 'Chaves',
    autor: 'Everton', 
    data: '01/07/2023', 
    imgUrl: 'https://imagens.brasil.elpais.com/resizer/xdswXhpcImNBn1gIVao9L05t_HU=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/WZF3MMB4ONHUTB5KBSMFZ7L2OI.JPG',
    texto: 'Foi sem querer querendo'
  }

  constructor() { }

  ngOnInit() {}



}
