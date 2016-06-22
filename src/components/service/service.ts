import {Component, OnInit} from '@angular/core';

import {TodoStore, Todo} from '../todos/shared';

@Component({
  selector: 'my-app',
  template: `
    <h2>Todos</h2>

    <form (ngSubmit)="onSubmit()" #todoForm="ngForm">
      <input [(ngModel)]="todo.title" name="title" required placeholder="title">
      <textarea [(ngModel)]="todo.desc" name="desc" required placeholder="desc"></textarea>
      <button type=submit [disabled]="!todoForm.form.valid">登録</button>
    </form>

    <div ngClass="todos" *ngFor="let todo of todos; let i = index">
      <div ngClass="list-no">{{i+1}}</div>
      <div>
        <p>{{todo.title}}</p>
        <pre>{{todo.desc}}</pre>
        <button (click)="onDelete($event)">削除</button>
      </div>
    </div>
    `,
    styleUrls: ['components/app/app.css'],
    providers: [TodoStore]
})
export class ServiceComponent
  implements OnInit {

  private todo: Todo;
  private todos: Todo[];

  constructor (
    private todoStore: TodoStore
  ) {}

  ngOnInit(): void {
    this.todo = new Todo;
    this.todos = this.todoStore.list;
  }

  public onSubmit(): void {
    this.todoStore.add(this.todo);
    this.todo = new Todo;
  }

  public onDelete(index: number): void {
    this.todoStore.delete(index);
  }
}
