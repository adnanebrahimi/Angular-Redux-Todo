import { InjectionToken } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { List, Todo } from '../models';



export interface GlobalState {
  todos: Todo[];
  lists: List[];
}

export const GLOBAL_RX_STATE = new InjectionToken<RxState<GlobalState>>(
  'GLOBAL_RX_STATE'
);

