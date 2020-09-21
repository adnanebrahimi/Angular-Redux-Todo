import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import {
  AddNewTodo,
  DeleteTodo,
  UpdateTodo,
  GetAllTodo,
} from '../actions/todo.actions';
import { Todo } from '../models/todo.model';
import { tap } from 'rxjs/operators';
import { TodoService } from '../services/todo.service';

export class TodoStateModel {
  public todos: Todo[] = [];
}

@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    todos: [],
  },
})
@Injectable()
export class TodoState {
  constructor(private todoService: TodoService) {}


  @Selector()
  static todos(state: TodoStateModel) {
    return state.todos;
  }

  @Action(AddNewTodo)
  addTodo(ctx: StateContext<TodoStateModel>, title: string) {
    return this.todoService.createTodo(title).pipe(
      tap((newTodo) => {
        const state = ctx.getState();
        ctx.setState({ ...state, todos: [...state.todos, newTodo] });
      })
    );
  }

  @Action(UpdateTodo)
  updateTodo(ctx: StateContext<TodoStateModel>, id: number, title: string) {
    return this.todoService.editTodoTitle(id , title).pipe(
      tap((newTodo) => {
        const state = ctx.getState();
        ctx.setState({ ...state, todos: [...state.todos, newTodo] });
      })
    );
  }

  @Action(GetAllTodo)
  getAllTodos(ctx: StateContext<TodoStateModel>) {
    return this.todoService.getAllTodo().pipe(
      tap((allTodos) => {
        const state = ctx.getState();
        ctx.setState({ ...state, todos: allTodos});
      })
    );
  }
}