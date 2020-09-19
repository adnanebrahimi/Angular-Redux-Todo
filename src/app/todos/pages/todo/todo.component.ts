import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RxState } from '@rx-angular/state';
import { Todo } from 'src/app/models';
import { TodoService } from 'src/app/services/todo.service';
import { GlobalState, GLOBAL_RX_STATE } from 'src/app/states/global.state';

export interface TodoState {
  todos: Todo[];
}
@Component({
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent extends RxState<TodoState> implements OnInit {
  todoFormGroup: FormGroup;
  readonly todos$ = this.select('todos');

  constructor(
    @Inject(GLOBAL_RX_STATE) private globalState: RxState<GlobalState>,
    private snackbar: MatSnackBar,
    private todoService: TodoService
  ) {
    super();
    this.todoFormGroup = new FormGroup({
      todoFormControl: new FormControl('', Validators.required),
    });
    this.connect('todos', this.globalState.select('todos'));
    // this.connect('todos', this.todoService.getAllTodo());
  }

  ngOnInit(): void {
  }

  onNewTodo(): void {
    if (this.todoFormGroup.controls.todoFormControl.value?.length > 0) {
      // this.todos.unshift({
      //   id: ++this.todos[0].id,
      //   title: this.todoFormGroup.controls.todoFormControl.value,
      //   completed: false,
      // });
      this.todoFormGroup.controls.todoFormControl.setValue('');
    } else {
      this.snackbar.open('You must enter at leaset 1 Character', 'Sure!', {
        duration: 1500,
      });
    }
  }
}
