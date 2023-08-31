---
title: 函式
slug: /clean-code/function
tags:
 - clean-code
---

:::note
此文為[《Clean Code無暇的程式碼-敏捷軟體開發技巧守則》](https://www.books.com.tw/products/0010579897?sloc=reprod_t_1)筆記
:::

## 每個函式只有一層抽象概念
函式只做一件事情

要怎麼判斷是哪種抽象層？
```
getHtml() // 高層次
String pagePathName = PathParser.render(pagePath); // 中層次
.append("\n) // 低層次
```


## 函式的參數
- 測試角度來看使用參數是困難的事。
- 輸出型參數較難看。


### 單一參數
- 跟這個參數有關的問題
- 對這個參數進行某種轉換
- 事件: 沒有輸出型參數

```
userExist("Joanne");
```


