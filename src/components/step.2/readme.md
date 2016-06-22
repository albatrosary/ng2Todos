# Todosアプリを作ってみる

### 実行確認

Step.2ではコンポーネント化などはあまり意識せずにTodosを作成します。`scripts/main.ts`にある`bootstrap`で`AppComponent`を指定すると実際に動くものを見ることができます。

```typscript
bootstrap(AppComponent);
```

このTodosアプリはタイトルと備考を入力/登録し一覧表示する簡素なものです。`components/step.2/answer/app.js`を見るとコードが確認できます。

### ハンズオン

ハンズオンを行います。`scripts/main.ts`にある`bootstrap`で`AppTemplate`を呼び出します。

```typscript
bootstrap(AppTemplate);
```

コードが書かれていないためエラーが発生しますが、コード上の`TODO`と書かれている部分を追加していくことでアプリケーションを完成することができます。コードは

```bash
components/step.2/template/app.js
```

を変更してください。TODOは次の通りです：

1. todo及びtodosの初期化を行います
2. todoをtodosに保存し、todoを初期化します
3. todosから該当する行番号(index)でデータを削除します


### 注意

rc3で実行すると現状のコードでは次のメッセージが表示されます。

> *It looks like you're using the old forms module. This will be opt-in in the next RC, and will eventually be removed in favor of the new forms module. For more information, see: https://docs.google.com/document/u/1/d/1RIezQqE4aEhBRmArIAS1mRIZtWFf6JxN_7B4meyWK0Y/pub