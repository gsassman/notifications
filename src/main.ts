import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './notifications/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);