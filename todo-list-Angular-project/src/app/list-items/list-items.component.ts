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
      this.selectedItem = selectedObject;
    }

  }

  deleteHandler(id: number) {
    const itemIndex = this.items.findIndex(item => item.id === id);

    if (itemIndex !== -1) {
      // Item found, remove it from the array
      this.items.splice(itemIndex, 1);
    } else {
      console.error('Item with id not found');
    }
  }
}
