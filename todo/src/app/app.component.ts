import {Component} from '@angular/core';
import {TodoItem} from './TodoItem';
import {TodoList} from './TodoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  showComplete = false;
  private list = new TodoList('Bob', [
    new TodoItem('go for run', true),
    new TodoItem('get flower')
  ]);

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.items.length;
  }

  get items(): readonly TodoItem[] {
    // return this.list.items;
    return this.list.items.filter(item => this.showComplete || !item.complete);
  }

  // tslint:disable-next-line:typedef
  addItem(newItem) {
    // tslint:disable-next-line:triple-equals
    if (newItem != '') {
      this.list.addItems(newItem);
    }
  }
}
