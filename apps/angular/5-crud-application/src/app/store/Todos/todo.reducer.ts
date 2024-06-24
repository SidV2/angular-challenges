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
  on(TodoActions.updateTodo, (state, action) => {
    const todoUpdated: Todo = action.payload;
    const { todos } = state;
    const updatedTodos = todos.map((todo) =>
      todo.id === todoUpdated.id
        ? { ...todo, isLoading: true }
        : { ...todo, isLoading: false },
    );
    return {
      ...state,
      todos: updatedTodos,
    };
  }),
  on(TodoActions.updateTodoSuccessful, (state, action) => {
    const todoUpdated: Todo = action.payload;
    const { todos } = state;
    const updatedTodos = todos.map((todo) =>
      todo.id === todoUpdated.id
        ? { ...todo, title: todoUpdated.title, isLoading: false }
        : todo,
    );
    return {
      ...state,
      todos: updatedTodos,
    };
  }),
  on(TodoActions.deleteTodo, (state, action) => {
    const todoUpdated: Todo = action.payload;
    const { todos } = state;
    const updatedTodos = todos.map((todo) =>
      todo.id === todoUpdated.id
        ? { ...todo, isLoading: true }
        : { ...todo, isLoading: false },
    );
    return {
      ...state,
      todos: updatedTodos,
    };
  }),
  on(TodoActions.deleteTodoSuccessful, (state, action) => {
    const todoToBeDeleted: Todo = action.payload;
    return {
      ...state,
      todos: [...state.todos.filter((todo) => todo.id !== todoToBeDeleted.id)],
    };
  }),
);
