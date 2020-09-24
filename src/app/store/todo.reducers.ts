import { createReducer, on } from '@ngrx/store';
import {
  AddTodo,
  getAllTodo,
  getAllTodoFailure,
  getAllTodoSuccess,
} from './todo.actions';

export interface State {}

const initialState: State = {};

export const reducer = createReducer(
  initialState,
  on(getAllTodo, (state) => ({ ...state }))
);
