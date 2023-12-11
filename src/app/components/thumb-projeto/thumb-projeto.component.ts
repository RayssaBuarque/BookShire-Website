import { Component, OnInit, Input } from '@angular/core';
import { projetoData } from 'src/app/data/conquistas-data';

@Component({
  selector: 'app-thumb-projeto',
  templateUrl: './thumb-projeto.component.html',
  styleUrls: ['./thumb-projeto.component.css','./thumb-projeto.component.responsive.css']
})
export class ThumbProjetoComponent implements OnInit {

  @Input() id!:string

  ano:string = '2023'
  classificacao!:string
  fundo!:string
  tituloProjeto!:string

  constructor() { }

  ngOnInit(): void {
    const dados = projetoData.filter( (dev) => dev.id == this.id )[0];
  
    this.ano = dados.ano
    this.classificacao = dados.relevancia
    this.tituloProjeto = dados['titulo-projeto']
  
    if(this.id == '1'){
      this.fundo = '../../../../../assets/pages/galeria/projetos/hackabdias2022.png'
    }
    else if(this.id == '2'){
      this.fundo = '../../../../../assets/pages/galeria/projetos/desafioLigaJovem.jpg'
    }
    else if(this.id == '3'){
      this.fundo = '../../../../../assets/pages/galeria/projetos/technovationGirls.png'
    }
    else if(this.id == '4'){
      this.fundo = '../../../../../assets/pages/galeria/projetos/hackabdias2023.png'
    }
  }

}
