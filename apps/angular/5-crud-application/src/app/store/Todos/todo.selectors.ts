import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState, todoFeatureKey } from './todo.reducer';

export const selectTodosSlice =
  createFeatureSelector<TodoState>(todoFeatureKey);

export const selectTodos = createSelector(
  selectTodosSlice,
  (todosSlice) => todosSlice.todos,
);
