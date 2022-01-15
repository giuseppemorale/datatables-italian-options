import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;

    // Otherwise, log the boot error
  })
  .catch((err) => console.error(err));

// function addScript(source: string) {
//   const script = document.createElement('script');
//   script.type = 'text/javascript';
//   script.src = source;
//   document.head.append(script);
// }

// addScript('node_modules/jquery/dist/jquery.js');
// addScript('node_modules/datatables.net/js/jquery.dataTables.js');
