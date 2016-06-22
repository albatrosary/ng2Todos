import {Component} from '@angular/core';

import {TodosInputComponent} from './todos.input';
import {TodosBodyComponent} from './todos.body';

import {TodoStore} from '../../../shared';

@Component({
  selector: 'my-app',
  template: `
    <h2>Todos</h2>

    <!-- TODO: 1. todos.inputを呼び出します -->

    <!-- TODO: 2. todos.bodyを呼び出します -->
  `,
  directives: [], // TODO: 3. 利用するコンポーネントを登録します
  providers: [] // TODO: 4. TodoStoreをプロバイダーとして登録します
})
export class TodosTemplate {}
