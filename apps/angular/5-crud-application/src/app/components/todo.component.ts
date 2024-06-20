import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Signal,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todos';
import { initTodos, updateTodo } from '../store/Todos/todo.actions';
import { selectTodos } from '../store/Todos/todo.selectors';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="todos-container">
      <div class="todo" *ngFor="let todo of todos()">
        {{ todo.title }}
        <button (click)="update(todo)">Update</button>
      </div>
    </div>
  `,
  styleUrls: ['./todos.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnInit {
  private readonly store = inject(Store);

  public todos: Signal<Todo[] | undefined> = toSignal(
    this.store.select(selectTodos),
  );

  ngOnInit(): void {
    this.store.dispatch(initTodos());
  }

  update(todo: Todo) {
    //this.todoService.updateTodos(todo);
    this.store.dispatch(updateTodo({ payload: todo }));
  }
}
