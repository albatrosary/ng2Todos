import {Injectable} from '@angular/core';

export class TODOS_STORE {
  title: string;
  desc: string;
}

@Injectable()
export class TodosStore {
  private todolist: TODOS_STORE[] = [];
  
  public delete(index: number): void {
    this.todolist.splice(index, 1);
  }
  
  public add(todo: TODOS_STORE): void {
    this.todolist.push(todo);
    console.log(this.todolist);
  }
  
  public getList(): TODOS_STORE[] {
    return this.todolist;
  }
}
