import {Component, Input, Output, EventEmitter} from '@angular/core';
import {TODO_STORE} from '../../share'

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
  styles: [
    `:host {
      display: block;
      border:#4e5d5f solid 2px;
      margin: 5px 0 5px 0;
      padding: 5px 0 5px 0;
      width: 100%;
      min-height: 112px;
      overflow : hidden;
    }`
    ,
    `.list-no {
      text-align: center;
      font-size: 2rem;
      margin: 5px 5px 5px 5px;
      width: 100px;
      height: 100px;
      background-color: #4e5d5f;
      color: #ffffff;
    }`,
    `div {
      float: left;
    }`,
    `button {
      background-color: #e8345a;
    }`
  ]
})
export default class TodosDetailComponent {
  @Input('list-no')
  private listNo: number;

  @Input('todo-data')
  private todo: TODO_STORE;

  @Output('on-delete')
  private onDelete = new EventEmitter();
  
  public onClick($event): void {
    this.onDelete.emit($event);
  }
}
