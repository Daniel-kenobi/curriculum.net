import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent implements OnInit {

  @Input()  mensagem = '';

  constructor() { }

  ngOnInit() {

  }
}
