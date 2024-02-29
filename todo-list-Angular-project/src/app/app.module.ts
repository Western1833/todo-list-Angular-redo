import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { ResultContainerComponent } from './result-container/result-container.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    InputFieldComponent,
    ListItemsComponent,
    ResultContainerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
