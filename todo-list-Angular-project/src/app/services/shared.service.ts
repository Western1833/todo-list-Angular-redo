import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private itemsSubject = new BehaviorSubject<string[]>([]);
    items$ = this.itemsSubject.asObservable();

    addData(newItem: string) {
        const currentItems = this.itemsSubject.value;
        const updatedItems = [...currentItems, newItem];
        this.itemsSubject.next(updatedItems);
    }
}