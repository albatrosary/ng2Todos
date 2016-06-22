import {Component} from '@angular/core';

import {TodosInputComponent} from './todos.input';
import {TodosBodyComponent} from './todos.body';

import {TodoStore} from '../../shared';

@Component({
  selector: 'my-app',
  template: `
    <h2>Todos</h2>
    <todos-input></todos-input>
    <todos-body></todos-body>
  `,
  directives: [
    TodosInputComponent,
    TodosBodyComponent
  ],
  providers: [TodoStore]
})
export class TodosComponent {}
