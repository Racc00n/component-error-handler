import { ErrorHandler } from '@angular/core';

export class Component1ErrorHandler  extends ErrorHandler{
  constructor(){
    super();
    console.log('component error handler constructor');
  }

  handleError(error) {
    alert('this is component1 error handler: '+ error);
  }
}
