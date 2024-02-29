import { Component } from '@angular/core';
import { DataService } from '../services/shared.service';
import { from } from 'rxjs';

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
    let obj = {
      value: this.newItem,
      id: Math.floor(Math.random() * (10000 - 1 + 1)) + 1,
    }
    
    if(!this.newItem){
      return;
    }
    console.log(obj);
    this.dataService.addData(obj);
    this.newItem = '';
  }
}
