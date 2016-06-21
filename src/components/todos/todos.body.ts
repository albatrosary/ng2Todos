import {Component, OnInit} from '@angular/core';

import {TodosDetailComponent} from './todos.detail'; 

import {TodoStore, Todo} from '../../share';

@Component({
  selector: 'todos-body',
  template: `
    <todos-detail *ngFor="let todo of todos; let i = index"
      [list-no]="i"
      [todo-data]="todo"
      (on-delete)="onDelete(i)">
    </todos-detail>
    `,
  directives: [TodosDetailComponent]
})
export class TodosBodyComponent implements OnInit {

  private todos: Todo[];

  constructor (private todoStore: TodoStore) {}

  public ngOnInit () {
    this.todos = this.todoStore.list;
  }

  public onDelete(index) {
    this.todoStore.delete(index);
  }
}
