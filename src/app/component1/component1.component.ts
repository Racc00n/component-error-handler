import { Component1ErrorHandler } from './component1-error-handler';
import { Component, OnInit } from '@angular/core';
import { ErrorHandler } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
  providers: [ {provide: ErrorHandler, useClass: Component1ErrorHandler}]
})
export class Component1Component implements OnInit {

  constructor(private errorHandler:ErrorHandler) { }

  ngOnInit() {
  }

  onClick() {
    throw 'some error!'
  }

}
