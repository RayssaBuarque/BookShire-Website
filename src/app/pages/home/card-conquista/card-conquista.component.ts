import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { projetoData } from 'src/app/data/conquistas-data';

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
  @Input() id:string = ''
  
  // private Id:string | null = ''
  tituloProjeto:string = "desafio X"
  relevancia:string = "finalista"
  logoUrl:string = "../../assets/pages/conquistas/empresas/sebrae.png"

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe( (value) => this.Id = value.get('id') );
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:string | null){
    const dados = projetoData.filter( (dev) => dev.id == id )[0];
    console.log(dados)

    this.tituloProjeto = dados['titulo-projeto']
    this.relevancia = dados.relevancia;

    this.logoUrl = dados.empresas[0].logoUrl
  }

}
