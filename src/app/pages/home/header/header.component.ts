import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
                './header.component.css',
                './header.component-responsive.css'
              ]
})
export class HeaderComponent implements OnInit {

  public prototipo:boolean = false

  constructor() { 
    this.onResize();
  }

  ngOnInit(): void {
    this.onResize();
  }

  //checando se o prototipo precisa aparecer
  @HostListener('window:resize', ['$event']) onResize(event? : any) {
    if (window.innerWidth < 800){
      this.prototipo = false
    }else{
      this.prototipo = true
    }
  }

}
