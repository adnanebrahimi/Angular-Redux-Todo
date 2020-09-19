import { InjectionToken } from '@angular/core';
import { RxState } from '@rx-angular/state';

export interface Task {
  id: number;
  label: string;
  done: boolean;
}

export interface GlobalState {
  tasks: Task[];
}

export const GLOBAL_RX_STATE = new InjectionToken<RxState<GlobalState>>(
  'GLOBAL_RX_STATE'
);
