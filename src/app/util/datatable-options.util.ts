export class DataTableOptions {
  public static Italian = {
    pagingType: 'full_numbers',
    pageLength: 10,
    language: {
      emptyTable: 'Nessun dato presente nella tabella',
      info: 'Vista da _START_ a _END_ di _TOTAL_ elementi',
      infoEmpty: 'Vista da 0 a 0 di 0 elementi',
      infoFiltered: '(filtrati da _MAX_ elementi totali)',
      infoPostFix: '',
      lengthMenu: 'Visualizza _MENU_ elementi',
      loadingRecords: 'Caricamento...',
      processing: '',
      search: 'Cerca:',
      zeroRecords: 'La ricerca non ha portato alcun risultato.',
      paginate: {
        first: 'Inizio',
        previous: 'Precedente',
        next: 'Successivo',
        last: 'Fine',
      },
      aria: {
        sortAscending: ': attiva per ordinare la colonna in ordine crescente',
        sortDescending:
          ': attiva per ordinare la colonna in ordine decrescente',
      },
    },
  };
}
