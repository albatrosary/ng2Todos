# コンポーネント化する

### 実行確認

Step.4ではStep3で作成したコードをさらにコンポーネント化します。実施に動くコードは`scripts/main.ts`を変更すると見ることができます。

```typscript
bootstrap(TodosComponent);
```

`components/step.3/template/service.js`を見るとコードが確認できます。サービスは、TodoStoreクラスとTodoクラスを定義しsharedフォルダへ移してます。

### ハンズオン

ハンズオンを行います。`scripts/main.ts`にある`bootstrap`で`ServiceTemplate`を呼び出します。

```typscript
bootstrap(ServiceTemplate);
```

コードが書かれていないためエラーが発生しますが、コード上の`TODO`と書かれている部分を追加していくことでアプリケーションを完成することができます。コードは

```bash
components/step.4/template/todos.ts
components/step.4/template/todos.body.ts
components/step.4/template/todos.detail.ts
components/step.4/template/todos.input.ts
```

を変更してください。TODOは次の通りです：


todos.ts

1. todos.inputを呼び出します
2. todos.bodyを呼び出します
3. 利用するコンポーネントを登録します
4. TodoStoreをプロバイダーとして登録します


todos.body.ts

5. TodoStoreをインジェクションします
6. TodoStoreからTodosを取得します
7. todoStoreから該当する行番号(index)でデータを削除します

todos.detail.ts

8. detailに必要なCSSを定義します
9. @Inputと@Outputを定義します
10. emitを実行します

todos.input.ts

11. 必要なCSSを定義します
12. TodoStoreをインジェクションします
13. todoを初期化します
14. todoをtodoStoreに保存し、todoを初期化します
