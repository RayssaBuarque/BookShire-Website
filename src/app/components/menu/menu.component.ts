import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: [
                './menu.component.css',
                './menu.component-responsive.css'
              ]
})
export class MenuComponent implements OnInit {

  public sanduiche:boolean = false

  constructor() { 
    this.onResize();
  }

  ngOnInit(): void {
    this.onResize();
  }

  //checando se o menu sanduiche precisa aparecer
  @HostListener('window:resize', ['$event']) onResize(event? : any) {
    if (window.innerWidth < 800){
      this.sanduiche = true
    }else{
      this.sanduiche = false
    }
  }

}
