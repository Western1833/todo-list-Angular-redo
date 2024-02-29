import { Component } from '@angular/core';
import { DataService } from '../services/shared.service';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent {
  newItem: string = '';

  constructor(private dataService: DataService){

  }

  inputDataHandler() {
    if(!this.newItem){
      return;
    }
    this.dataService.addData(this.newItem);
    this.newItem = '';
  }
}
