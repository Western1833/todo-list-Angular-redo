import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private itemsSubject = new BehaviorSubject<DataItem[]>([]);
    items$ = this.itemsSubject.asObservable();

    addData(newItem: DataItem) {
        const currentItems = this.itemsSubject.value;
        const updatedItems = [...currentItems, newItem];
        this.itemsSubject.next(updatedItems);
        console.log(updatedItems)
    }
}

export interface DataItem {
    value: string;
    id: number;
  }