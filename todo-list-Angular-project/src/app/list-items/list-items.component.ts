import { Component, Input } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent {
  @Input() items!: string[];
  isActive = false;

  faCheck = faCheck;
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;

  checkHandler() {
    console.log('clicked for check');
    this.isActive = !this.isActive;
  }

  editHandler() {
    console.log('clicked for edit');
  }

  deleteHandler() {
    console.log('clicked for delete');
  }
}
