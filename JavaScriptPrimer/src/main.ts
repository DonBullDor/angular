/*import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err =*/

// tslint:disable-next-line:only-arrow-functions typedef
let myFunc = (nameFunction) => ('Hello ' + nameFunction() + '.');
let printName = (nameFunction, printFunction) => printFunction(myFunc(nameFunction));
// tslint:disable-next-line:only-arrow-functions typedef
printName(function() { return 'Adam'; }, console.log);
