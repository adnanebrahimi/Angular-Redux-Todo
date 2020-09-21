import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  createTodo(titleTodo: string): Observable<Todo> {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const formData = new FormData();
    /**
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
    */

    formData.append('UserId', Math.random().toString().substring(1, 3));
    formData.append('title', titleTodo);
    formData.append('completed', 'false');
    return this.httpClient.post<Todo>(url, formData).pipe(
      map((respond) => {
        return {
          id: respond.id,
          userId: Number(formData.get('UserId')),
          title: titleTodo,
          listId: 1,
          completed: Boolean(formData.get('completed')),
        };
      })
    );
  }

  editTodoTitle(todoId: number, title: string): Observable<Todo> {
    const url = 'https://jsonplaceholder.typicode.com/todos/' + todoId;
    const formData = new FormData();
    formData.append('title', title);
    return this.httpClient.patch<Todo>(url, formData);
  }

  toggleTodo(todoId: number, completed: boolean) {
    const url = 'https://jsonplaceholder.typicode.com/todos/' + todoId;
    const formData = new FormData();
    formData.append('completed', String(completed));
    return this.httpClient.patch(url, formData);
  }

  deleteTodo(todoId: number) {
    const url = 'https://jsonplaceholder.typicode.com/todos/' + todoId;
    return this.httpClient.delete(url);
  }

  getAllTodo(): Observable<Todo[]> {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    return this.httpClient.get<Todo[]>(url);
  }

  getTodo(todoId: number) {
    const url = 'https://jsonplaceholder.typicode.com/todos/' + todoId;
    return this.httpClient.get<Todo[]>(url);
  }
}
