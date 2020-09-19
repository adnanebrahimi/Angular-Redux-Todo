import { Component, Inject } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { GlobalState, GLOBAL_RX_STATE } from './states/global.state';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AngularReduxTodo';
  constructor(
    @Inject(GLOBAL_RX_STATE) private globalState: RxState<GlobalState>,
    private todoService: TodoService
  ) {
    this.globalState.connect('todos', this.todoService.getAllTodo() );
  }
}
