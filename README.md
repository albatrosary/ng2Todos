# Angular2 Todos

このリポジトリはAngular2を利用して簡素なTodosアプリケーションを作るためのものです。構成としては次の通り

* Step1: [準備（Hello World的な）](src/components/step.1)
* Step2: [Todosアプリを作ってみる](src/components/step.2)
* Step3: [サービスを利用する（@Injectableの利用）](src/components/step.3)
* Step4: [コンポーネント化する（@Input/@Outputの利用）](src/components/step.4)

ハンズオンのコメントは各ステップの中の`readme.md`に書かれています。参照しながら進めてください。

また、`src/components`の各ステップ中にあるtemplateディレクトリがハンズオンを行うファイルです。完成したファイルは各ステップ中のanswerディレクトリにあります。これらは`scripts/main.ts`にある`bootstrap`を変更することでいつでも見ることができます。

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
│   │   ├── step.1 <- 準備（Hello World的な）
│   │   ├── step.2 <- Todosアプリを作ってみる
│   │   ├── step.3 <- サービスを利用する（@Injectableの利用）
│   │   └── step.4 <- コンポーネント化する（@Input/@Outputの利用）
│   ├── index.html
│   ├── scripts
│   │   └── main.ts <- 呼び出すコンポーネントを切り替えます
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

[はじめる](src/components/step.1)
