import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { projetoData } from 'src/app/data/conquistas-data';

@Component({
  selector: 'app-conquista-projeto',
  templateUrl: './conquista-projeto.component.html',
  styleUrls: [
    './conquista-projeto.component.css',
    './conquista-projeto.component-responsive.css'
  ]
})
export class ConquistaProjetoComponent implements OnInit {

  private Id:string | null = ''

  ano:string = '2023'
  descricaoProjeto:string = "descricao do projeto"
  tituloProjeto:string = "desafio X"
  relevancia:string = "finalista"

  pic:any = {}
  pitch:string | SafeHtml= '<iframe width="560" height="315" src="https://www.youtube.com/embed/9HsxCNVLW-Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  links:any[] = []
  empresas:any[] = []

  constructor(private route:ActivatedRoute, private sanitizer:DomSanitizer, private router:Router) {
  }

  ngOnInit(): void {
    //pegando o id do projeto na url da pagina
    this.route.paramMap.subscribe( (value) => this.Id = value.get('id') );

    //checa se o projeto existe mesmo
    if(Number(this.Id) > 3 || Number(this.Id) < 1){
      this.router.navigate(['**']);
    }else{

      //setando os valores da pagina
      this.setValuesToComponent(this.Id, this.sanitizer);

    }
    
  }

  setValuesToComponent(id:string | null, sanitizer:DomSanitizer){
    const dados = projetoData.filter( (dev) => dev.id == id )[0];
    
    this.pic = dados.pic
    this.tituloProjeto = dados['titulo-rojeto']
    
    this.relevancia = dados.relevancia
    this.ano = dados.ano
    
    this.descricaoProjeto = dados['descricao-projeto']
    this.empresas.push(...dados.empresas)

    this.links.push(...dados.links)
    //o angular bloqueia injeções de js através do bounding html, pra permitir eu preciso garantir segurança:
    this.pitch = sanitizer.bypassSecurityTrustHtml(dados.pitch) 
  }

}
