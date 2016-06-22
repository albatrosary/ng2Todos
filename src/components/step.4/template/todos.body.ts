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
    // TODO: TodoStoreをインジェクションします

  ) {}

  public ngOnInit () {
    // TODO: TodoStoreからTodosを取得します
    
  }

  public onDelete(index: number): void {
    // TODO: todoStoreから該当する行番号(index)でデータを削除します
    
  }
}
