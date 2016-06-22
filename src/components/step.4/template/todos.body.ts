import {Component, OnInit} from '@angular/core';

import {TodosDetailComponent} from './todos.detail'; 

import {TodoStore, Todo} from '../../../shared';

@Component({
  selector: 'todos-body',
  template: `
    <todos-detail
      *ngFor="let todo of todos; let i = index"
      [list-no]="i"
      [todo-data]="todo"
      (on-delete)="onDelete(i)">
    </todos-detail>
  `,
  directives: [TodosDetailComponent]
})
export class TodosBodyComponent
  implements OnInit {

  private todos: Todo[];

  constructor (
    // TODO: 5. TodoStoreをインジェクションします

  ) {}

  public ngOnInit () {
    // TODO: 6. TodoStoreからTodosを取得します
    
  }

  public onDelete(index: number): void {
    // TODO: 7. todoStoreから該当する行番号(index)でデータを削除します
    
  }
}
