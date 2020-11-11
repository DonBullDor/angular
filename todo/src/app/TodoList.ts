import {TodoItem} from './TodoItem';

export class TodoList {
  constructor(public user: string, private todoItem: TodoItem[] = []) {
  }

  get items(): readonly TodoItem[] {
    return this.todoItem;
  }

  // tslint:disable-next-line:typedef
  addItems(task: string) {
    this.todoItem.push(new TodoItem(task));
  }
}
