# 準備（Hello World的な）

ハンズオンを始める準備をします。

Step.1ではハンズオンリポジトリをcloneし`npm start`でAngular2の実行確認をします。`scripts/main.ts`にある`bootstrap()`でHomeComponentを呼び出します。

```typscript
bootstrap(HomeComponent);
```

> 参考: bootstrapメソッドは、ここでコンポーネント（いまの場合だと`HomeComponent`）を使用してアプリケーションを起動するようAngular2に指示します。Angular1で言うところの`ng-app`にあたります。

ブラウザが起動し`My First Angular 2 App`が表示されます。このコードは`components/step.1/home.ts`にあります。

通常のプロジェクトではいろいろな人が作っているStarter Kitか[Angular2 CLI](https://cli.angular.io/)、YEOMANなどを利用することで簡単にプロジェクトを開始することが可能です。

[次のステップ](../step.2)
