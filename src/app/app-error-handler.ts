import { ErrorHandler } from '@angular/core';
export class AppErrorHandler extends ErrorHandler{
  handleError(error) {
    alert('this is app error handler: '+ error);
  }
}
