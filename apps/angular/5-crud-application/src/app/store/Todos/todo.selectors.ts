import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState, todoFeatureKey } from './todo.reducer';

export const selectTodosSlice =
  createFeatureSelector<TodoState>(todoFeatureKey);

export const selectTodos = createSelector(
  selectTodosSlice,
  (todosSlice) => todosSlice.todos,
);

export const selectLoadingStatus = (id: number | undefined) =>
  createSelector(selectTodos, (todos) => {
    return todos.find((todo) => todo.id === id)?.isLoading;
  });

export const selectDeletingStatus = (id: number | undefined) =>
  createSelector(selectTodos, (todos) => {
    return todos.find((todo) => todo.id === id)?.aboutToBeDeleted;
  });
