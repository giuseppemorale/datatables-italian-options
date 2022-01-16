import { Injectable } from '@angular/core';
import { Calciatore } from '../models/calciatore.model';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  public listaCalciatori: Calciatore[] = [
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

  public get lista(): Calciatore[] {
    return this.lista;
  }
}
