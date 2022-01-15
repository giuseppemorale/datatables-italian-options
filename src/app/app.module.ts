import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule, DataTablesModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
