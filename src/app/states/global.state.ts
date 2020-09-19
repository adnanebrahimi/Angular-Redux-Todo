import { InjectionToken } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { Todo } from '../models';



export interface GlobalState {
  todos: Todo[];
}

export const GLOBAL_RX_STATE = new InjectionToken<RxState<GlobalState>>(
  'GLOBAL_RX_STATE'
);

