# サービス化する

### 実行確認

Step.3ではStep2で作成したコードにサービスを追加します（この段階ではコンポーネント化は行いません）。実施に動くコードは`scripts/main.ts`を変更すると見ることができます。

```typscript
bootstrap(ServiceComponent);
```

`components/step.3/template/service.ts`を見るとコードが確認できます。サービスは、TodoStoreクラスとTodoクラスを定義しsharedフォルダへ移してます。

### ハンズオン

ハンズオンを行います。サービス化したモジュールは既に`shared`ディレクトリの中にありますのでどういった処理が書かれているか確認してください。ハンズオンを行うには`scripts/main.ts`にある`bootstrap`で`ServiceTemplate`を呼び出すことからはじめます。

```typscript
bootstrap(ServiceTemplate);
```

コードが書かれていないためエラーが発生しますが、コードの中にある`TODO`と書かれている部分を追加していくことでアプリケーションを完成することができます。コードは

```bash
components/step.3/template/service.ts
```

を変更してください。TODOは次の通りです：

1. TodoStore及びTodoをインポートします
2. TodoStoreをプロバイダー登録します
3. TodoStoreをインジェクションします
4. todo及びtodosを初期化します
5. todoをtodoStoreに保存し、todoを初期化します
6. todoStoreから該当する行番号(index)でデータを削除します

尚、このステップでコンポーネントが利用しているCSSはStep2のものを、そのまま使っています。

[次のステップ](../step.4)