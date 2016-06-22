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
  styles: []  // TODO: 11. 必要なCSSを定義します
})
export class TodosInputComponent
  implements OnInit {

  private todo: Todo;
  
  constructor (
    // TODO: 12. TodoStoreをインジェクションします
    
  ) {}

  ngOnInit(): void {
    // TODO: 13. todoを初期化します
    
  }

  public onSubmit(): void {
    // TODO: 14. todoをtodoStoreに保存し、todoを初期化します
    
  }
}
