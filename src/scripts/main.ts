import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core'
import {disableDeprecatedForms, provideForms} from '@angular/forms';

// import {HomeComponent} from '../components'
import {AppComponent} from '../components'


enableProdMode();

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms()
]);
