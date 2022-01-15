import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [BrowserModule, FormsModule, DataTablesModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
