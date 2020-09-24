import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import {AddTodo, getAllTodo} from './todo.actions';

@Injectable({
  providedIn: 'root'
})
export class NameEffects {
  constructor(private actions$: Actions) {}
  addTodo$ = this.actions$.pipe(ofType(AddTodo));
  getAllTodo$ = this.actions$.pipe(ofType(getAllTodo));
}
