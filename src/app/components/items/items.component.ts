import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDoAppModel } from 'src/app/models/toDoAppModel';
import { ToDoServicesService } from '../../servecies/to-do-services.service'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  @Input() todoitem: ToDoAppModel;
  @Output() deleteToDo: EventEmitter<ToDoAppModel> = new EventEmitter();

  constructor(private ToDoServicesService: ToDoServicesService) { }

  ngOnInit(): void {
  }

  handleDelete(todo) {
    console.log('delete')
    this.deleteToDo.emit(todo);
  }

}
