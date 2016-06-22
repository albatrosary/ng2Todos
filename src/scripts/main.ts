import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core'
import {disableDeprecatedForms, provideForms} from '@angular/forms';

import {TodosComponent} from '../components'

enableProdMode();

bootstrap(TodosComponent, [
  disableDeprecatedForms(),
  provideForms()
]);
