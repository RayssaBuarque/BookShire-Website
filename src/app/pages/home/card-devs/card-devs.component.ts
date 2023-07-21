import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {devData} from '../../../data/developers-data';

@Component({
  selector: 'app-card-devs',
  templateUrl: './card-devs.component.html',
  styleUrls: [
                './card-devs.component.css',
                './card-devs.component-responsive.css'
              ]
})
export class CardDevsComponent implements OnInit {

  //PROPRIEDADES INPUTÁVEIS DO CARD
  @Input() id:string | null =''
  private Id: string | null = '' 
  nome:string = 'Nome'
  cargo:string = 'Cargo'
  picUrl:string = 'Url da Imagem'

  socials:{
    rede: string,
    redePicUrl: string,
    redeUrl: string
  }[] = []

  constructor(private route:ActivatedRoute) {
    this.route.params.subscribe( res => console.log(res) ) //printando o parâmetro do path

    this.route.queryParams.subscribe( res => console.log(res) ) 
  }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe( (value) => this.Id = value.get('id') );

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:string | null){
    const dados = devData.filter( (dev) => dev.id == id )[0];
    // console.log(dados)

    this.nome = dados.nome;
    this.cargo = dados.cargo;
    this.picUrl = dados.picUrl;

    this.socials.push(...dados.socials)
    // console.log(this.socials)
  }

}
