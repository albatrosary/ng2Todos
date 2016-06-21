import {Injectable} from '@angular/core';

export class TODOS_STORE {
  title: string;
  desc: string;
}

@Injectable()
export class TodosStore {
  private todolist: TODOS_STORE[] = [];
  
  public delete(index: number) {
    this.todolist.splice(index, 1);
  }
  
  public add(todo: TODOS_STORE) {
    this.todolist.push(todo);
    console.log(this.todolist);
  }
  
  public getList() {
    return this.todolist;
  }
}