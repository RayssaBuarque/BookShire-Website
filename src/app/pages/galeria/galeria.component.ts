import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: [
    './galeria.component.css',
    './galeria.component-responsive.css'
  ]
})
export class GaleriaComponent implements OnInit {

  index_conteudo:string =  localStorage.getItem('galeria_index') || '1' 
  constructor() { }

  ngOnInit(): void {
  }

  showMonografia():void{
    localStorage.setItem('galeria_index', '0')
    this.index_conteudo = '0'
    // Scroll the page down by 900 pixels
    window.scrollTo({
      top: window.scrollY + 900,
      behavior: 'smooth'
    });
  }
  
  showDesenvolvimento():void{
    localStorage.setItem('galeria_index', '1')
    this.index_conteudo = '1'
    // Scroll the page down by 900 pixels
    window.scrollTo({
      top: window.scrollY + 900,
      behavior: 'smooth'
    });
  }
  
  showProjetos():void{
    localStorage.setItem('galeria_index', '2')
    this.index_conteudo = '2'
    // Scroll the page down by 900 pixels
    window.scrollTo({
      top: window.scrollY + 900,
      behavior: 'smooth'
    });
  }

}
