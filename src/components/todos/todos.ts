import {Component} from '@angular/core';

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
  directives: [TodosInputComponent, TodosBodyComponent],
  providers: [TodosStore]
})
export class TodosComponent {}
