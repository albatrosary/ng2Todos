import {Injectable} from '@angular/core';

import {TODO_STORE} from './todo';

@Injectable()
export class TodoStore {
  private todos: TODO_STORE[] = [];
  
  public delete(index: number): void {
    this.todos.splice(index, 1);
  }
  
  public add(
    title: string,
    desc: string
  ): void {
    let todo = {
      title: title,
      desc: desc
    }
    this.todos.push(todo);
  }
  
  public get list(): TODO_STORE[] {
    return this.todos;
  }
}
