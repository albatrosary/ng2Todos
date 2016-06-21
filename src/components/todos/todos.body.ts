import {Component, OnInit} from '@angular/core';

import TodosDetailComponent from './todos.detail'; 

import {TodoStore, TODO_STORE} from '../../share';

@Component({
  selector: 'todos-body',
  template: `
    <todos-detail *ngFor="let todo of todos; let i = index"
      [list-no]="i"
      [todo-store]="todo"
      (on-delete)="onDelete(i)">
    </todos-detail>
    `,
  directives: [TodosDetailComponent]
})
export default class TodosBodyComponent implements OnInit {

  private todos: TODO_STORE[];

  constructor (private todoStore: TodoStore) {}

  public ngOnInit () {
    this.todos = this.todoStore.list;
  }

  public onDelete(index) {
    this.todoStore.delete(index);
  }
}
