import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  index_conteudo:string = '1'
  constructor() { }

  ngOnInit(): void {
  }

  showMonografia():void{
    this.index_conteudo = '0'
  }

  showDesenvolvimento():void{
    this.index_conteudo = '1'
  }

  showProjetos():void{
    this.index_conteudo = '2'
  }

}
