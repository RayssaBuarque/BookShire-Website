import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-secao-galeria',
  templateUrl: './secao-galeria.component.html',
  styleUrls: [
    './secao-galeria.component.css',
    './secao-galeria.component-responsive.css'
  ]
})
export class SecaoGaleriaComponent implements OnInit {

  @Input() titulo:string = "Título da Seção"
  fundoImagem:string = 'Fundo de Imagem'

  constructor() { }

  ngOnInit(): void {
    if(this.titulo == 'Monografia'){
      // this.fundoImagem = 'https://img.freepik.com/fotos-gratis/fundo-de-gotas-de-agua_23-2148098971.jpg'
    }
    else if(this.titulo == 'Projetos'){
      this.fundoImagem = '../../../assets/pages/galeria/capa_proj.jpg'
    }
    else if(this.titulo == 'Desenvolvimento'){
      this.fundoImagem = '../../../assets/pages/galeria/capa_dev.png'
    }
  }

}