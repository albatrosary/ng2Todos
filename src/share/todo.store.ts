import {Injectable} from '@angular/core';

export class TODO_STORE {
  title: string;
  desc: string;
}

@Injectable()
export class TodoStore {
  private todolist: TODO_STORE[] = [];
  
  public delete(index: number): void {
    this.todolist.splice(index, 1);
  }
  
  public add(todo: TODO_STORE): void {
    this.todolist.push(todo);
  }
  
  public getList(): TODO_STORE[] {
    return this.todolist;
  }
}
