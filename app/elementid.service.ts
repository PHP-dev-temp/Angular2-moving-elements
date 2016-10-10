import {Injectable} from 'angular2/core';

@Injectable()
export class ElementidService{
  id: number;

  getElementId(): number{
    if (!this.id) this.id=0;
    this.id++;
    return this.id;
  }
}
