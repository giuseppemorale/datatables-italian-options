import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Calciatore } from './models/calciatore.model';
import { PlayerService } from './services/player.service';
import { DataTableOptions } from './util/datatable-options.util';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();

  public listaCalciatori: Calciatore[] = [];

  constructor(public playerService: PlayerService) {
    this.listaCalciatori = this.playerService.lista;
  }

  public ngOnInit(): void {
    this.dtOptions = DataTableOptions.Italian;
    this.dtTrigger.next(this.listaCalciatori);
  }

  public ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
