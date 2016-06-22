import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';

// Step.1
import {HomeComponent} from '../components';

// Step.2
import {AppComponent} from '../components';
import {AppTemplate} from '../components';

// Step.3
import {ServiceComponent} from '../components';
import {ServiceTemplate} from '../components';

// Step.4
import {TodosComponent} from '../components';
import {TodosTemplate} from '../components';

enableProdMode();

bootstrap(HomeComponent);
