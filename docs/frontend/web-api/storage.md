---
id: storage
title: 瀏覽器儲存區
tags:
  - WebAPI
---

:::note
此文為[《JavaScript 大全第七版》筆記](https://www.books.com.tw/products/0010886126)
:::

在使用者本地端電腦儲存資料，是根據依據來源(origin)劃分。

## Web Storage

分為 `localStorage`跟`sessionStorage`，兩者皆是`Storage`物件， 儲存格式只有字串。

### 用法

- `clear()`: 移除一個儲存區物件所有 Properties。
- `getItem()`: 取得單一項目。
- `setItem()`: 設定單一項目。
- `deleteItem()`: 刪除單一項目。

:::info
`Storage`只能儲存字串，所以儲存或取回都需要轉為字串。

```js
localStorage.data = JSON.stringify(data);
let data = JSON.parse(localStorage.data);
```

:::

### `localStorage` vs. `sessionStorage`

| type           | 生命週期                   |
| -------------- | -------------------------- |
| localStorage   | 一直儲存在使用者裝置       |
| sessionStorage | 儲存在頂層視窗或瀏覽器分頁 |


:::caution
受到瀏覽器實作影響，訪問FireFox後用Chrome訪問，第一次儲存的資料無法在第二次取用。

:::

### 儲存區事件
`window.storage` 或 使用`window.addEventListener()`監聽`storage`事件。

當`localStorage`資料改變，會在除了改變的視窗以外，所有看的到該資料的視窗發出事件。

- `key`: 項目鑑值，若是localStorage被清空，則會是 `null`
- `newValue`: 新值
- `oldValue`: 舊值
- `storageArea`: 發生改變的Storage物件。

## Cookies

適合儲存少量文字，而且儲存為 cookies 的資料，一定會跟著 HTTP 請求被送到伺服器。

## IndexedDB
