import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { randText } from '@ngneat/falso';
import { Observable, of, switchMap } from 'rxjs';
import { Todo } from '../../models/todos';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly http = inject(HttpClient);

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  updateTodos(todo: Todo): Observable<Todo> {
    const requestOptions = {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };

    return this.http.put<Todo>(
      `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
      JSON.stringify({ todo: todo.id, title: randText(), userId: todo.userId }),
      requestOptions,
    );
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    return this.http
      .delete<Todo>(`https://jsonplaceholder.typicode.com/todos/${todo.id}`)
      .pipe(switchMap(() => of(todo)));
  }
}
