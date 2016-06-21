import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'todos-detail',
  template: `
    <h3>{{i+1}}</h3>
    <div>
      <p>{{title}}</p>
      <pre>{{desc}}</pre>
      <button (click)="onClick($event)" aria-label="Remove">削除</button>
    </div>
    `,
  styles: [
    `:host {
      display: block;
      border:#0000ff solid 1px;
      margin: 5px 0 5px 0;
      padding: 5px 0 5px 0;
      width: 100%;
      min-height: 112px;
      overflow : hidden;
    }`
    ,
    `h3 {
      float: left;
      display: block;
      margin: 5px 5px 5px 5px;
      width: 100px;
      min-height: 100px;
      text-align: center;
      background-color: #4e5d5f;
      color: #ffffff;
    }`,
    `div {
      float: left;
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
