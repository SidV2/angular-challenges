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
import { initTodos } from '../store/Todos/todo.actions';
import { selectTodos } from '../store/Todos/todo.selectors';
import { TodoItemComponent } from './todo-item/todo-item.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  template: `
    <div class="todos-container">
      @for (todo of todos(); track todo.id) {
        <app-todo-item [todo]="todo" />
      }
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
}
