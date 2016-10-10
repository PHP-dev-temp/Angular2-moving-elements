import {Component, DynamicComponentLoader, ElementRef, Inject, OnInit} from 'angular2/core';
import {ElementComponent} from './element.component';
import {ElementidService} from './elementid.service';

@Component({
  selector: 'ang-app',
  template:`
  		<div id="container">
      <div #child></div>
  		</div>
  		<button id="big" (click)='addBigElement()'>Add big square</button>
  `,
  directives: [ElementComponent],
  providers: [ElementidService]
})
export class AppComponent {
  nextElementId:  number = 0;


  constructor(private dynamicComponentLoader:DynamicComponentLoader, private elementRef: ElementRef) {}
  addBigElement(){
    this.dynamicComponentLoader.loadIntoLocation(ElementComponent, this.elementRef,'child');
    this.nextElementId++;
  }
}
