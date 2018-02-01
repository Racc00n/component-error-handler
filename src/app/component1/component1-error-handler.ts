import { ErrorHandler } from '@angular/core';

export class Component1ErrorHandler  extends ErrorHandler{
  handleError(error) {
    alert('this is component1 error handler: '+ error);
  }
}
