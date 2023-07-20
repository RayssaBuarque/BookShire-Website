import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-devs',
  templateUrl: './card-devs.component.html',
  styleUrls: ['./card-devs.component.css']
})
export class CardDevsComponent implements OnInit {

  //PROPRIEDADES INPUTÁVEIS DO CARD
  @Input() nome:string = 'Nome'
  @Input() cargo:string = 'Cargo'
  @Input() picUrl:string = 'Url da Imagem'

  constructor() { }

  ngOnInit(): void {
  }

}
