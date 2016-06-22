import {Component, OnInit} from '@angular/core';

import {TodoStore, Todo} from '../../../shared';

@Component({
  selector: 'todos-input',
  template: `
    <form (ngSubmit)="onSubmit()" #todoForm="ngForm">
      <input [(ngModel)]="todo.title" name="title" required placeholder="title">
      <textarea [(ngModel)]="todo.desc" name="desc" required placeholder="desc"></textarea>
      <button type=submit [disabled]="!todoForm.form.valid">登録</button>
    </form>
  `,
  styles: [`
    input {
      width: 100%;
    }
    textarea {
      width: 100%;
      height: 7em;
    }
  `]
})
export class TodosInputComponent
  implements OnInit {

  private todo: Todo;
  
  constructor (
    private todoStore: TodoStore
  ) {}

  ngOnInit(): void {
    this.todo = new Todo;
  }

  public onSubmit(): void {
    this.todoStore.add(this.todo);
    this.todo = new Todo;
  }
}
