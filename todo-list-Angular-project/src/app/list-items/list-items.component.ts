import { Component, Input } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { DataItem } from '../services/shared.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent {
  @Input() items!: DataItem[];
  selectedItem: DataItem | null = null;

  faCheck = faCheck;
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;

  checkHandler(id: number) {
    const selectedObject = this.items.find(item => item.id === id);

  if (selectedObject) {
    console.log('clicked for check', selectedObject.value);
    // Perform any actions with the selected object
    this.selectedItem = selectedObject;
  } else {
    console.error('Item with id not found');
  }

  }

  editHandler() {
    console.log('clicked for edit');
  }

  deleteHandler() {
    console.log('clicked for delete');
  }
}
