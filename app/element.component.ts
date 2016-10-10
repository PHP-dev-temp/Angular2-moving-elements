import {Component, OnInit, HostListener} from 'angular2/core';
import {ElementidService} from './elementid.service';

@Component({
  selector: 'ang-element',
  template:`
  		<div id="{{elementId}}" data-top="0" data-left="0" class="big" style="top: {{posY}}px; left: {{posX}}px;"></div>
  `
})
export class ElementComponent{
  private mouseDown : boolean;
  private elementId: number;
  private posX: number;
  private posY: number;
  private posRelX: number;
  private posRelY: number;
  constructor (private _elementidSevice: ElementidService) {
  }
  ngOnInit() {
      this.posY = 200;
      this.posX = 300;
      this.elementId = this._elementidSevice.getElementId();
      this.mouseDown = false;
    }
  @HostListener('mousedown', ['$event'])
  mousedownElement(event){
    this.mouseDown = true;
    this.posRelX = event.clientX - this.posX;
    this.posRelY = event.clientY - this.posY;
    //console.log('mousedown', event);
  }
  @HostListener('mousemove', ['$event'])
  mousemoveElement(event){
    if(this.mouseDown){
      this.posX = (event.clientX - this.posRelX) < 0 ? 0 : (event.clientX - this.posRelX) > 920 ? 920 : event.clientX - this.posRelX;
      this.posY = (event.clientY - this.posRelY) < 0 ? 0 : (event.clientY - this.posRelY) > 420 ? 420 : event.clientY - this.posRelY;
    }
  }
  @HostListener('mouseup', ['$event'])
  mouseupElement(event){
    this.mouseDown = false;
  }
}
