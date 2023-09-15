import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { HomeModule } from './app/home/home.module';


platformBrowserDynamic().bootstrapModule(HomeModule)
  .catch(err => console.error(err));
