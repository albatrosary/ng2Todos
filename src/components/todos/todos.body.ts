import {Component, OnInit,} from '@angular/core';

import {TodosDetailComponent} from './todos.detail'; 

import {TodosStore, TODOS_STORE} from '../../share';

@Component({
  selector: 'todos-body',
  template: `
    <todos-detail *ngFor="let item of todolist; let i = index"
      [no]=i
      [todos-store]=item
      (on-delete)="onDelete(i)">
    </todos-detail>
    `,
  directives: [TodosDetailComponent]
})
export class TodosBodyComponent implements OnInit  {

  private todolist: TODOS_STORE[];

  constructor (private todosStore: TodosStore) {}

  public ngOnInit () {
    this.todolist = this.todosStore.getList();
  }

  public onDelete(index) {
    this.todosStore.delete(index);
  }
}
