---
slug: /web-api/history
title: History物件
tags:
  - WebAPI
---

:::note
此文為[《JavaScript 大全第七版》筆記](https://www.books.com.tw/products/0010886126)
:::

History 物件表示當前視窗的歷史紀錄，可以使用 `window.histroy`取得。

## 常見用法

### 頁面跳轉操作

- `back()`: 上一頁
- `forward()`: 下一頁
- `go(num)`: 跳轉，接受整數數值，負數表示跳轉回前幾頁，0 表示重整。

:::caution
如果視窗內含有 `<iframe>`，子視窗跟主視窗的瀏覽歷程紀錄會依照時間順序混在一起!
:::

### hashchange 事件

使用 `hashchange`管理歷史紀錄，需要有以下先備知識：

- `location.hash`可以設定 URL 的片段識別符，可以把它設為任何字串，如果沒有元素的 ID 是傳入字串，瀏覽器就不會捲動。
- 設定 `location.hash`會更新顯示在 URL 上，並且新增一個項目到瀏覽器的歷史紀錄。
- 文件的片段識別符改變，會在 Window 物件上發送一個名叫`hashchange`的事件。

### pushState()

使用 `pushState()` 與 `popstate()`。

瀏覽器會呼叫`pushState()`來儲存一個狀態到歷程。
`pushState()`參數:

1. 物件，用來回復文件目前狀態所需的資訊
2. 字串，通常都傳 `""` (因為歷史包袱而存在)。
3. URL 字串(Optional)

使用瀏覽器返回或下一頁時，會觸發 Window 上的`popstate`事件。

實際應用：
使用者點瀏覽器的返回時，跳出提示視窗：

```js
let flag = true;
history.pushState({}, "", location.href);
window.onpopstate = function () {
  if (flag) {
    alert("返回");
    history.forward();
    flag = false;
  } else {
    flag = true;
  }
};
```
