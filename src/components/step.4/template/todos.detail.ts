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
  styles: [] // TODO必要なCSSを定義します
})
export class TodosDetailComponent {
  @Input('list-no')
  private listNo: number;

  @Input('todo-data')
  private todo: Todo;

  @Output('on-delete')
  private onDelete = new EventEmitter();
  
  public onClick($event: any): void {
    this.onDelete.emit($event);
  }
}
