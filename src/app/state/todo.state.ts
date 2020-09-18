import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddNewTodo, DeleteTodo, UpdateTodo, GetAllTodo } from '../actions/todo.actions';
import { TodoModel } from '../models/todo.model';

export class TodoStateModel {
  public todos: TodoModel[] = [];
}



@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    todos: []
  }
})

export class TodoState {




}
