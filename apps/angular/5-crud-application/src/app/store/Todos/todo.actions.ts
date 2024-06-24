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

//update
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

//delete
export const deleteTodo = createAction(
  '[Todo Component] Delete a todo',
  props<{ payload: Todo }>(),
);

export const deleteTodoSuccessful = createAction(
  '[Todo Component] Delete a todo success',
  props<{ payload: Todo }>(),
);

export const deleteTodoFailure = createAction(
  '[Todo Component] Delete a todo failure',
);
