# サービス化する

### 実行確認

Step.3ではStep2で作成したコードにサービスを追加します。実施に動くコードは`scripts/main.ts`を変更すると見ることができます。

```typscript
bootstrap(ServiceComponent);
```

`components/step.3/template/service.js`を見るとコードが確認できます。サービスは、TodoStoreクラスとTodoクラスを定義しsharedフォルダへ移してます。

### ハンズオン

ハンズオンを行います。`scripts/main.ts`にある`bootstrap`で`ServiceTemplate`を呼び出します。

```typscript
bootstrap(ServiceTemplate);
```

コードが書かれていないためエラーが発生しますが、コード上の`TODO`と書かれている部分を追加していくことでアプリケーションを完成することができます。コードは

```bash
components/step.3/template/service.js
```

を変更してください。TODOは次の通りです：

1. TodoStoreをインジェクションします
2. todo及びtodosを初期化します
3. todoをtodoStoreに保存し、todoを初期化します
4. todoStoreから該当する行番号(index)でデータを削除します

