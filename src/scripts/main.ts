import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core'
import {disableDeprecatedForms, provideForms} from '@angular/forms';

// Step.1
import {HomeComponent} from '../components'

// Step.2
import {AppComponent} from '../components'

// Step.3
import {ServiceComponent} from '../components'


enableProdMode();

bootstrap(ServiceComponent, [
  disableDeprecatedForms(),
  provideForms()
]);
