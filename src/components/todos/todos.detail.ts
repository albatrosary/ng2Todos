import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'todos-detail',
  template: `
    {{i+1}}
    <p>{{title}}</p>
    <pre>{{desc}}</pre>
    <button (click)="onClick($event)" aria-label="Remove">削除</button>
    `
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
