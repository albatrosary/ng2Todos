import {Component, Input, Output, EventEmitter} from '@angular/core';

import {TodoStore, Todo} from '../../../shared';

@Component({
  selector: 'todos-detail',
  template: `
    <div ngClass="list-no">{{listNo+1}}</div>
    <div>
      <p>{{todo.title}}</p>
      <pre>{{todo.desc}}</pre>
      <button (click)="onClick($event)">削除</button>
    </div>
    `,
  styles: [] // TODO: 8. detailに必要なCSSを定義します
})
export class TodosDetailComponent {
  // TODO: 9. @Inputと@Outputを定義します
  // (1) @Input: list-no -> listNo
  // (2) @Input: todo-data -> todo
  // (3) @Output: on-delete <- onDelete
  
  public onClick($event: any): void {
    // TODO: 10. emitを実行します

  }
}
