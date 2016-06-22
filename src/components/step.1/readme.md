# 準備（Hello World的な）

ハンズオンを始める準備をします。

Step.1ではハンズオンリポジトリをcloneし`npm start`でAngular2の実行確認をします。`scripts/main.ts`にある`bootstrap()`でHomeComponentを呼び出します。

```typscript
bootstrap(HomeComponent);
```

> 参考: bootstrapメソッドは、ここでコンポーネント（いまの場合だと`HomeComponent`）を使用してアプリケーションを起動するようAngular2に指示します。Angular1で言うところの`ng-app`にあたります。

ブラウザが起動し`My First Angular 2 App`が表示されます。このコードは`components/step.1/home.ts`にあります。

通常のプロジェクトではいろいろな人が作っているStarter Kitか[Angular2 CLI](https://cli.angular.io/)、YEOMANなどを利用することで簡単にプロジェクトを開始することが可能です。

> デコレーター「@Component」はこのクラスがAngularコンポーネントであることをAngularに伝えます。

このテンプレートは下記手順で作成しています。

# Angular2テンプレート

##  1: Install essential libraries

### Create a project folder

作成するディレクトリを定義します。

```bash
mkdir ng2Todos && cd $_
```

最終的に作られるファイルは

```bash
.
├── src
│   ├── components
│   │   ├── home
│   │   │   └── home.ts
│   │   └── index.ts
│   ├── index.html
│   ├── scripts
│   │   └── main.ts
│   └── system-config.ts
├── bs-config.json
├── package.json
├── tsconfig.json
└── typings.json
```

### save dependencies

```bash
npm init -y
npm install es6-shim@0.35.0 --save
npm install reflect-metadata@0.1.3 --save
npm install rxjs@5.0.0-beta.6 --save
npm install systemjs@0.19.26 --save
npm install zone.js@0.6.12 --save
npm install @angular/core@2.0.0-rc.2 --save
npm install @angular/common@2.0.0-rc.2 --save
npm install @angular/compiler@2.0.0-rc.2 --save
npm install @angular/platform-browser@2.0.0-rc.2 --save
npm install @angular/platform-browser-dynamic@2.0.0-rc.2 --save
```

### save devDependencies

```bash
npm install concurrently@2.0.0 --save
npm install lite-server@2.2.0 --save
npm install typescript@1.8.10 --save
npm install typings@0.8.1 --save
```

## 2. Configuration

### bs-config.json

```json
{
  "port": 8000,
  "files": ["./**/*.{html,htm,css,js}"],
  "server": {
    "baseDir": "./src/",
    "routes": {"/node_modules": "node_modules"}
  }
}
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "system",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": false
  },
  "exclude": [
    "node_modules",
    "typings/main",
    "typings/main.d.ts"
  ]
}
```

### typings.json

## 3. Application files

### Create Files

```bash
mkdir src
mkdir src/scripts
mkdir components/home
```

### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <base href="/">
    <title>Angular2 Todos</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <!-- 1. Display the application -->
    <my-app>Loading...</my-app>
    
    <!-- 2. Load libraries -->
    <script src="node_modules/es6-shim/es6-shim.js"></script>
    <script src="node_modules/reflect-metadata/Reflect.js"></script>
    <script src="node_modules/systemjs/dist/system.src.js"></script>
    <script src="node_modules/zone.js/dist/zone.js"></script>
    
    <!-- 3. Configure SystemJS -->
    <script>
    System.import('system-config.js')
      .then(function () {
        System.import('scripts/main');
      })
      .catch(console.error.bind(console));
    </script>
  </body>
</html>
```

### system.ts

```typescript
declare var System: any;

// apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs',
    'scripts/main': 'scripts/main.js',
  },
  packages: {
    '@angular/core': { main: 'index' },
    '@angular/common': { main: 'index' },
    '@angular/compiler': { main: 'index' },
    '@angular/platform-browser': { main: 'index' },
    '@angular/platform-browser-dynamic': { main: 'index' },

    // thirdparty barrels.
    'rxjs': { main: 'Rx' },

    // app specific barrels.
    'components': { main: 'index' }
  },
});
```

### scripts/main.ts

```typescript
import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from '../components'

bootstrap(AppComponent);
```

### components/index.ts

```typescript
export {AppComponent} from './home/home';
```

### components/home/home.ts

```typescript
import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>My First {{name}} {{1+1}} App</h1>
    `,
})

export class AppComponent {
  public name: string = 'Angular';
}
```

[次のステップ](../step.2)


