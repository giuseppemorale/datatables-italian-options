import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, NgbModule, DataTablesModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
