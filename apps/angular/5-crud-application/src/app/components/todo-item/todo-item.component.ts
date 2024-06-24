import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todos';
import { deleteTodo, updateTodo } from '../../store/Todos/todo.actions';
//import { selectLoadingStatus } from '../../store/Todos/todo.selectors';
import { AsyncPipe } from '@angular/common';
import { selectLoadingStatus } from '../../store/Todos/todo.selectors';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatProgressSpinnerModule, AsyncPipe],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input() todo: Todo | undefined;
  // readonly todo = input<Todo>();
  private readonly store = inject(Store);

  public loadingStatus$: Observable<boolean | undefined> | undefined;
  public deletingStatus$: Observable<boolean | undefined> | undefined;

  update(todo: Todo) {
    this.store.dispatch(updateTodo({ payload: todo }));
    this.loadingStatus$ = this.store.select(selectLoadingStatus(this.todo?.id));
  }

  delete(todo: Todo) {
    this.store.dispatch(deleteTodo({ payload: todo }));
    this.loadingStatus$ = this.store.select(selectLoadingStatus(this.todo?.id));
  }
}
