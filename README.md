### **MyModal クラス仕様書**

---

#### **概要**
`MyModal` クラスは、画面上に簡単にモーダルダイアログを表示するためのクラスです。
デザインをカスタマイズして独自のデザインに変更することも可能です。

#### **特徴**

* なるべくシンプルで機能は最小限
* 簡単に使える

---

### **使い方**

#### **1. モーダルを表示する**
以下のように `MyModal.showModalDialog()` を呼び出すだけで、指定したメッセージを表示するモーダルを作成できます。

```javascript
MyModal.showModalDialog('これはモーダルダイアログの例です！');
```

#### **2. カスタムデザインを指定する**
`MyModal.setCustomClassNames()` を使うと、モーダルのスタイルを部分的または全体的に変更できます。

- **例: 一部カスタムスタイルクラスを指定**
```javascript
MyModal.setCustomClassNames({
    dialog: "custom-dialog",
    button: "custom-button",
});
```

カスタムスタイルクラス名を指定すると、該当する部分だけが変更され、それ以外の部分にはデフォルトスタイルが適用されます。

- **カスタムスタイルクラス指定例**
```javascript
MyModal.setCustomClassNames({
    overlay: "custom-overlay",
    dialog: "custom-dialog",
    content: "custom-content",
    button: "custom-button",
});
```

---

### **メソッド一覧**

#### **1. `MyModal.showModalDialog(message)`**
モーダルを表示します。

- **パラメータ**
  - `message` (必須): モーダルに表示するメッセージ（HTML を使用できます）。

- **例**
  ```javascript
  MyModal.showModalDialog('ようこそ！このモーダルは簡単に使えます。');
  ```

#### **2. `MyModal.setCustomClassNames(customClasses)`**
モーダルのデザインをカスタマイズします。

- **パラメータ**
  - `customClasses` (任意): モーダル要素に適用するカスタムスタイルクラス名のオブジェクト。

- **オブジェクトのキー**
  | キー         | 対応する要素        | 説明                                   |
  |--------------|---------------------|----------------------------------------|
  | `overlay`    | モーダル全体の背景  | 背景を覆うオーバーレイのスタイルを指定 |
  | `dialog`     | モーダル本体        | ダイアログ全体のスタイルを指定         |
  | `content`    | メッセージ部分      | 表示するメッセージのスタイルを指定     |
  | `button`     | OK ボタン           | ボタンのスタイルを指定                 |

- **例**
  ```javascript
  MyModal.setCustomClassNames({
      overlay: "custom-overlay",
      dialog: "custom-dialog",
  });
  ```

#### **3. `MyModal.setUseUniquePrefix(value)`**
内部的なスタイルクラスの命名ルールを変更します。通常は不要です。

- **パラメータ**
  - `value` (必須): `true` (デフォルト)、または `false`。

---

### **使用例**

#### **1. デフォルトスタイルでモーダルを表示**
特別な設定なしで、Modal クラスをそのまま使います。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>デフォルトモーダル</title>
    <script src="modal.js" defer></script>
</head>
<body>
    <button onclick="MyModal.showModalDialog('デフォルトスタイルのモーダルです！')">モーダルを表示</button>
</body>
</html>
```

#### **2. 一部カスタムスタイルクラスを使用**
スタイルを一部変更し、他の部分はデフォルトをそのまま利用します。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>一部カスタムスタイルクラスモーダル</title>
    <script src="modal.js" defer></script>
    <style>
        .custom-dialog {
            background-color: #f4f4f4;
            padding: 30px;
            border-radius: 15px;
        }
        .custom-button {
            background-color: green;
            color: white;
        }
    </style>
</head>
<body>
    <script>
        MyModal.setCustomClassNames({
            dialog: "custom-dialog",
            button: "custom-button",
        });
    </script>
    <button onclick="MyModal.showModalDialog('一部カスタムスタイルクラスのモーダルです！')">モーダルを表示</button>
</body>
</html>
```

#### **3. 完全カスタムスタイルクラスを使用**
全てのスタイルをカスタマイズします。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>完全カスタムモーダル</title>
    <script src="modal.js" defer></script>
    <style>
        .custom-overlay {
            background-color: rgba(0, 0, 0, 0.8);
        }
        .custom-dialog {
            background-color: #f4f4f4;
            padding: 30px;
            border-radius: 15px;
        }
        .custom-content {
            font-size: 18px;
        }
        .custom-button {
            background-color: green;
            color: white;
        }
        .custom-button:hover {
            background-color: #218838;
        }
    </style>
</head>
<body>
    <script>
        MyModal.setCustomClassNames({
            overlay: "custom-overlay",
            dialog: "custom-dialog",
            content: "custom-content",
            button: "custom-button",
        });
    </script>
    <button onclick="MyModal.showModalDialog('完全カスタムスタイルクラスのモーダルです！')">モーダルを表示</button>
</body>
</html>
```

