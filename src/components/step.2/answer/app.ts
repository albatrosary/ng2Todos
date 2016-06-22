import {Component, OnInit} from '@angular/core';

class Todo {
  title: string;
  desc: string;
}

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
    styleUrls: ['components/step.2/app.css']
})
export class AppComponent
  implements OnInit {

  private todo: Todo;
  private todos: Todo[];

  constructor () {
    this.todo = new Todo;
    this.todos = [];
  }

  ngOnInit(): void {
    this.todo = new Todo;
  }

  public onSubmit(): void {
    this.todos.push(this.todo);
    this.todo = new Todo;
  }

  public onDelete(index: number): void {
    this.todos.splice(index, 1);
  }
}