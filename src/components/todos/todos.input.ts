import {Component} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES, FormControl, FormGroup, Validators, NgForm} from '@angular/forms';

import {TodoStore, TODO_STORE} from '../../share';

@Component({
  selector: 'todos-input',
  template: `
    <form (ngSubmit)="onClick()" #todoForm="ngForm">
      <input [(ngModel)]="todo.title" name="title" required>
      <textarea [(ngModel)]="todo.desc" name="desc" required></textarea>
      <button type=submit [disabled]="!todoForm.form.valid">登録</button>
    </form>
    `,
  styles: [
    `
    input {
      width: 100%;
    }
    textarea {
      width: 100%;
      height: 7em;
    }
  `],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export default class TodosInputComponent {

  private todo: TODO_STORE;
  
  constructor (private todoStore: TodoStore) {
    this.todo = {
      title: '',
      desc: ''
    }
  }

  public onClick() {
    this.todoStore.add(
      this.todo
    );
    this.todo = {
      title: '',
      desc: ''
    }
  }
}
