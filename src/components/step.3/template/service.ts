import {Component, OnInit} from '@angular/core';

// TODO: 1. TodoStore及びTodoをインポートします


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
    styleUrls: ['components/step.2/app.css'],
    providers: [] // TODO: 2. TodoStoreをプロバイダー登録します
})
export class ServiceTemplate
  implements OnInit {

  private todo: Todo;
  private todos: Todo[];

  constructor (
    // TODO: 3. TodoStoreをインジェクションします
    
  ) {}

  ngOnInit(): void {
    // TODO: 4. todo及びtodosを初期化します

  }

  public onSubmit(): void {
    // TODO: 5. todoをtodoStoreに保存し、todoを初期化します
    
  }

  public onDelete(index: number): void {
    // TODO: 6. todoStoreから該当する行番号(index)でデータを削除します
    
  }
}
