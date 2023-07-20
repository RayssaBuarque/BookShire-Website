import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-conquista',
  templateUrl: './card-conquista.component.html',
  styleUrls: [
                './card-conquista.component.css',
                './card-conquista.component-responsive.css'
              ]
})
export class CardConquistaComponent implements OnInit {

  //PROPRIEDADES INPUTÁVEIS DO CARD
  @Input() id:string = '#'
  @Input() title:string = 'Título do projeto'
  @Input() desc:string = 'Descrição do projeto'

  constructor() { }

  ngOnInit(): void {
  }

}
