import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableOptions } from './util/datatable-options.util';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();

  public listaCalciatori = [
    { ruolo: 'P', calciatore: 'Andrenacci', squadra: 'GEN', quotazione: '1' },
    { ruolo: 'D', calciatore: 'Ceccaroni', squadra: 'VEN', quotazione: '9' },
    { ruolo: 'D', calciatore: 'Ghoulam', squadra: 'NAP', quotazione: '1' },
    { ruolo: 'D', calciatore: 'Mazzocchi', squadra: 'VEN', quotazione: '5' },
    { ruolo: 'C', calciatore: 'Akpa Akpro', squadra: 'LAZ', quotazione: '2' },
    { ruolo: 'C', calciatore: 'Anderson A.', squadra: 'LAZ', quotazione: '2' },
    { ruolo: 'C', calciatore: 'Asllani', squadra: 'EMP', quotazione: '2' },
    { ruolo: 'A', calciatore: 'Afena-Gyan', squadra: 'ROM', quotazione: '3' },
    { ruolo: 'A', calciatore: 'Antiste', squadra: 'SPE', quotazione: '7' },
    { ruolo: 'A', calciatore: 'Bianchi F.', squadra: 'GEN', quotazione: '6' },
  ];

  public ngOnInit(): void {
    this.dtOptions = DataTableOptions.Italian;
    this.dtTrigger.next(this.listaCalciatori);
  }

  public ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
