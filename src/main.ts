/**
 * Copyright 2017 - Author gauravm.git@gmail.com
 */

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Bring the app related root css.
import 'src/assets/css/styles.scss';

import { AppModule } from 'app/app.module';

if (process.env.ENV === 'production') {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule);
