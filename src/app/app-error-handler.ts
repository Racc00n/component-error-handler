import { ErrorHandler } from '@angular/core';
export class AppErrorHandler extends ErrorHandler{

  constructor(){
    super();
    console.log('app error handler constructor');
  }
  handleError(error) {
    alert('this is app error handler: '+ error);
  }
}
