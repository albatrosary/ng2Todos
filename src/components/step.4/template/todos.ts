import {Component} from '@angular/core';

import {TodosInputComponent} from './todos.input';
import {TodosBodyComponent} from './todos.body';

import {TodoStore} from '../../../shared';

@Component({
  selector: 'my-app',
  template: `
    <h2>Todos</h2>

    <!-- TODO: todos.inputを呼び出します -->

    <!-- TODO: todos.bodyを呼び出します -->
  `,
  directives: [], // TODO: 利用するコンポーネントを登録します
  providers: [] // TODO: TodoStoreをプロバイダーとして登録します
})
export class TodosTemplate {}
