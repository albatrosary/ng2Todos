import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'todos-detail',
  template: `
    <div ngClass="no">{{i+1}}</div>
    <div>
      <p>{{title}}</p>
      <pre>{{desc}}</pre>
      <button (click)="onClick($event)" aria-label="Remove">削除</button>
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
    `.no {
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
export class TodosDetailComponent {
  @Input('no')
  private i: number;

  @Input()
  private title: string;
  
  @Input()
  private desc: string;
  
  @Output('on-delete')
  private onDelete = new EventEmitter();
  
  onClick($event): void {
    this.onDelete.emit($event);
  }
}
