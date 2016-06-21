import {Component, OnInit,} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES, FormControl, FormGroup, Validators} from '@angular/forms';

class Todos {
  title: string;
  desc: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h2>Todos</h2>

    <form [formGroup]="todoForm">
      <input type=text formControlName="title">
      <textarea formControlName="desc"></textarea>
    </form>
    <button (click)="onClick()">ボタン</button>
    
    <div *ngFor="let item of todolist; let i = index">
      {{i+1}}
      <p>{{item.title}}</p>
      <pre>{{item.desc}}</pre>
      <button class="btn btn-danger" (click)="onDelete(i)" aria-label="Remove">X</button>
    </div>
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
    `,
    `div {
      border:#0000ff solid 1px;
      padding: 1px;
      width: 100%;
    }`],
    directives: [REACTIVE_FORM_DIRECTIVES]
})
export class AppComponent implements OnInit  {

  private todoForm = new FormGroup({
    title: new FormControl('' ,
    [
      Validators.required,
      Validators.minLength(3)
    ]),
    desc: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ])
  });

  private todolist:Todos[] = [];

  constructor () {}

  onClick() {
    if (this.todoForm.status === 'VALID') {
      this.todolist.push(this.todoForm.value);
      console.log(this.todolist[0]);
    }
  }

  onDelete(index: number) {
    this.todolist.splice(index, 1);
  }

  ngOnInit () {

  }
}
