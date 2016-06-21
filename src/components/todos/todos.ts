import {Component, OnInit,} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES, FormControl, FormGroup, Validators} from '@angular/forms';

import {TodosInputComponent} from './todos.input';
import {TodosBodyComponent} from './todos.body';

import {TodosStore} from '../../share';


@Component({
  selector: 'my-app',
  template: `
    <h2>Todos</h2>

    <todos-input></todos-input>
    
    <todos-body></todos-body>
    `,
    styles: [],
    directives: [TodosInputComponent, TodosBodyComponent],
    providers: [TodosStore]
})
export class TodosComponent implements OnInit  {
  constructor () {}

  ngOnInit () {

  }
}
