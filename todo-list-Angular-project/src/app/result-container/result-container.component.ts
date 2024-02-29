import { Component, OnDestroy } from '@angular/core';
import { DataService } from '../services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-result-container',
  templateUrl: './result-container.component.html',
  styleUrls: ['./result-container.component.css']
})
export class ResultContainerComponent implements OnDestroy {
  newItem: string[] = [];

  private subscription: Subscription;

  constructor(private dataService: DataService) {
    this.subscription = this.dataService.items$.subscribe(items => {
      this.newItem = items;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
