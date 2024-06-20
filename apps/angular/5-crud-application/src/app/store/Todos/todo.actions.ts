import { createAction, props } from '@ngrx/store';
import { Todo } from '../../models/todos';

export const initTodos = createAction('[Todo Component] Init todos');

export const getTodosSuccessful = createAction(
  '[Todo Component] Successful got all todos',
  props<{ payload: Todo[] }>(),
);

export const getTodosFailure = createAction(
  '[Todo Component] Failure in getting all todos',
);

export const updateTodo = createAction(
  '[Todo Component] Update a todo',
  props<{ payload: Todo }>(),
);

export const updateTodoSuccessful = createAction(
  '[Todo Component] Update a todo success',
  props<{ payload: Todo }>(),
);

export const updateTodoFailure = createAction(
  '[Todo Component] Update a todo failure',
);
