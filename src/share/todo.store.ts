import {Injectable} from '@angular/core';

import {TODO_STORE} from './todo';

@Injectable()
export class TodoStore {
  private todolist: TODO_STORE[] = [];
  
  public delete(index: number): void {
    this.todolist.splice(index, 1);
  }
  
  public add(todo: TODO_STORE): void {
    this.todolist.push(todo);
  }
  
  public get list(): TODO_STORE[] {
    return this.todolist;
  }
}
