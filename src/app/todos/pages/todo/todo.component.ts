import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todos = [
    {
      id: 1,
      title: 'Todo 1',
      completed: true,
    },
    {
      id: 2,
      title: 'Todo 2',
      completed: false,
    },
    {
      id: 3,
      title: 'Todo 3',
      completed: true,
    },
  ];

  todoFormGroup: FormGroup;

  constructor(private snackbar: MatSnackBar) {
    this.todoFormGroup = new FormGroup({
      todoFormControl: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  onNewTodo(): void {
    if (this.todoFormGroup.controls.todoFormControl.value?.length > 0) {
      this.todos.unshift({
        id: ++this.todos[0].id,
        title: this.todoFormGroup.controls.todoFormControl.value,
        completed: false,
      });
      this.todoFormGroup.controls.todoFormControl.setValue('');
    } else {
      this.snackbar.open('You must enter at leaset 1 Character', 'Sure!', {
        duration: 1500,
      });
    }
  }
}
