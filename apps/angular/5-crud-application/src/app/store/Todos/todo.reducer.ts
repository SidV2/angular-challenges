import { createReducer, on } from '@ngrx/store';
import { Todo } from '../../models/todos';
import * as TodoActions from './todo.actions';

export const todoFeatureKey = 'todoSlice';

export interface TodoState {
  todos: Todo[];
}

export const initialState: TodoState = {
  todos: [],
};

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.getTodosSuccessful, (state, action) => {
    return {
      ...state,
      todos: action.payload,
    };
  }),
  on(TodoActions.updateTodoSuccessful, (state, action) => {
    const todoUpdated: Todo = action.payload;
    const { todos } = state;
    const updatedTodos = todos.map((todo) =>
      todo.id === todoUpdated.id ? { ...todoUpdated } : todo,
    );
    return {
      ...state,
      todos: updatedTodos,
    };
  }),
);
