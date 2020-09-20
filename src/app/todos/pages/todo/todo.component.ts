import { Component, Inject, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RxState } from '@rx-angular/state';
import { Todo, List } from 'src/app/models';
import { TodoService } from 'src/app/services/todo.service';
import { GlobalState, GLOBAL_RX_STATE } from 'src/app/states/global.state';
import { Subject } from 'rxjs';
import { global } from '@angular/compiler/src/util';

export interface TodoState {
  todos: Todo[];
  lists: List[];
}
@Component({
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent extends RxState<TodoState> implements OnInit {
  todoFormGroup: FormGroup;
  readonly todos$ = this.select('todos');
  newTodoBtn$ = new Subject();

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
    // this.connect(this.newTodoBtn$, (s, e) => ({ todos: s.todos.push({id:1,completed:false,title:'tello',userId:1}) }));
  }

  ngOnInit(): void {}

  onNewTodo(): void {
    if (this.todoFormGroup.controls.todoFormControl.value?.length > 0) {
      const todoTitle = this.todoFormGroup.controls.todoFormControl.value;
      this.todoService.createTodo(todoTitle).subscribe(
        (result) => {
          const newTodo = {
            id: result.id,
            completed: false,
            title: todoTitle,
            userId: 1,
          };
          const newGlobalTodo = this.globalState.get('todos');
          newGlobalTodo.unshift(newTodo);
          this.globalState.set({
            todos: newGlobalTodo,
            lists: [{ id: 1, title: 'hello' }],
          });
        },
        (error) => {
          console.log(error);
        }
      );
      this.todoFormGroup.controls.todoFormControl.setValue('');
    } else {
      this.snackbar.open('You must enter at leaset 1 Character', 'Sure!', {
        duration: 1500,
      });
    }
  }
}
