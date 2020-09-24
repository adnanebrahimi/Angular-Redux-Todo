import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {AddTodo, getAllTodo, getAllTodoFailure,getAllTodoSuccess } from './todo.actions';

@Injectable({
  providedIn: 'root'
})
export class NameEffects {
  constructor(private actions$: Actions) {}

  addTodo$ = this.actions$.pipe(ofType(AddTodo));
  getAllTodo$ = this.actions$.pipe(ofType(getAllTodo));
  getAllTodoFailure$ = this.actions$.pipe(ofType(getAllTodoFailure));
  getAllTodoSuccess$ = this.actions$.pipe(ofType(getAllTodoSuccess));

}
