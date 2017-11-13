import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

// Bring the app related root css.
import 'src/assets/css/styles.scss';

import { AppModule } from 'app/app.module';

if (process.env.ENV === 'production') {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule);