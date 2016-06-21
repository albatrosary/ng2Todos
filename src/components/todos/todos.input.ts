import {Component} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES, FormControl, FormGroup, Validators} from '@angular/forms';

import {TodosStore} from '../../share';

@Component({
  selector: 'todos-input',
  template: `
    <form [formGroup]="todoForm">
      <input type=text formControlName="title">
      <textarea formControlName="desc"></textarea>
    </form>
    <button (click)="onClick()">登録</button>
    `,
    styles: [`
    input.ng-invalid.ng-dirty {
      border-color: #ff0000;
    }
    textarea.ng-invalid.ng-dirty {
      border-color: #ff0000;
    }
    `,
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
export class TodosInputComponent {

  private todoForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    desc: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ])
  });

  constructor (private todosStore: TodosStore) {}

  onClick() {
    if (this.todoForm.status === 'VALID') {
      this.todosStore.add(this.todoForm.value);
    }
  }
}
