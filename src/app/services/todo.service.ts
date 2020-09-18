import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  createTodo(title: string): Observable<Todo> {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const formData = new FormData();
    /**
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
    */

    formData.append('UserId', Math.random().toString().substring(1,3));
    formData.append('title', title);
    formData.append('completed', 'false');
    return this.httpClient.post<Todo>(url, formData);
  }

  editTodoTitle(todoId: number, title: string): Observable<Todo> {
    const url = 'https://jsonplaceholder.typicode.com/todos/' + todoId;
    const formData = new FormData();
    formData.append('title', title);
    return this.httpClient.patch<Todo>(url,formData);
  }

  toggleTodo(todoId: number, completed: boolean) {
    const url = 'https://jsonplaceholder.typicode.com/todos/' + todoId;
    const formData = new FormData();
    formData.append('completed', String(completed));
    return this.httpClient.patch(url,formData);
  }

  deleteTodo(todoId: number) {
    const url = 'https://jsonplaceholder.typicode.com/todos/' + todoId;
    return this.httpClient.delete(url);
  }

  getAllTodo(): Observable<Todo[]> {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    return this.httpClient.get(url);
  }

  getTodo(todoId: number) {
    const url = 'https://jsonplaceholder.typicode.com/todos/' + todoId;
    return this.httpClient.get<Todo[]>(url);
  }
}
