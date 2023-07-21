import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { projetoData } from 'src/app/data/conquistas-data';

@Component({
  selector: 'app-conquista-projeto',
  templateUrl: './conquista-projeto.component.html',
  styleUrls: ['./conquista-projeto.component.css']
})
export class ConquistaProjetoComponent implements OnInit {

  private Id:string | null = ''
  @Input() id:string | null = ''

  ano:string = '2023'
  tituloProjeto:string = "desafio X"
  relevancia:string = "finalista"
  descricaoProjeto:string = "descricao do projeto"

  pic:any = {}
  links:any[] = []

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (value) => this.Id = value.get('id') );
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:string | null){
    const dados = projetoData.filter( (dev) => dev.id == id )[0];
    // console.log(dados)

    // this.links.push(...dados.links)
  }

}
