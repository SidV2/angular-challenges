import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { Todo } from '../../models/todos';
import { TodoService } from '../../services/todo/todo.service';
import * as TodoActions from './todo.actions';

@Injectable()
export class TodoEffects {
  private readonly actions$ = inject(Actions);
  private readonly todoService = inject(TodoService);

  initTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.initTodos),
      switchMap(() =>
        this.todoService.getTodos().pipe(
          map((todos: Todo[]) =>
            TodoActions.getTodosSuccessful({ payload: todos }),
          ),
          catchError(() => of(TodoActions.getTodosFailure)),
        ),
      ),
    ),
  );

  updateTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.updateTodo),
      switchMap((action) => {
        return this.todoService.updateTodos(action.payload).pipe(
          map((todo: Todo) =>
            TodoActions.updateTodoSuccessful({ payload: todo }),
          ),
          catchError(() => of(TodoActions.updateTodoFailure)),
        );
      }),
    ),
  );

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.deleteTodo),
      switchMap((action) =>
        this.todoService.deleteTodo(action.payload).pipe(
          map((deletedItem: Todo) =>
            TodoActions.deleteTodoSuccessful({ payload: deletedItem }),
          ),
          catchError(() => of(TodoActions.deleteTodoFailure)),
        ),
      ),
    ),
  );
}
