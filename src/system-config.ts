declare var System: any;

// apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs',
    'scripts/main': 'scripts/main.js'
  },
  packages: {
    '@angular/core': { main: 'index' },
    '@angular/common': { main: 'index' },
    '@angular/compiler': { main: 'index' },
    '@angular/platform-browser': { main: 'index' },
    '@angular/platform-browser-dynamic': { main: 'index' },
    '@angular/forms': { main: 'index' },

    // thirdparty barrels.
    'rxjs': { main: 'Rx' },

    // app specific barrels.
    'components': { main: 'index' },
    'shared': { main: 'index' }
  },
});
