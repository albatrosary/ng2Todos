# Angular2 Todos

このリポジトリはAngular2を利用して簡素なTodosアプリケーションを作るためのものです。構成としては次の通り

* Step1: 準備（Hello World的な）
* Step2: Todosアプリを作ってみる
* Step3: サービスを利用する（@Injectableの利用）
* Step4: コンポーネント化する（@Input/@Outputの利用）

`src/components`の各ステップ中にあるtemplateディレクトリがハンズオンを行うファイルです。完成したファイルは各ステップ中のanswerディレクトリにあります。これらは`scripts/main.ts`にある`bootstrap`を変更することでいつでも見ることができます。


ファイル構成は次の通り：

```bash
.
├── README.md
├── bs-config.json
├── favicon.ico
├── package.json
├── src
│   ├── components
│   │   ├── index.ts
│   │   ├── step.1
│   │   ├── step.2
│   │   ├── step.3
│   │   └── step.4
│   ├── index.html
│   ├── scripts
│   │   └── main.ts
│   ├── shared
│   │   ├── index.ts
│   │   ├── todo.store.ts
│   │   └── todo.ts
│   ├── styles
│   │   └── main.css
│   └── system-config.ts
├── tsconfig.json
├── tslint.json
├── typings
└── typings.json
```