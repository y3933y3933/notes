---
slug: /web-api/location
title: Location物件
tags: 
  - WebAPI
---
:::note
此文為[《JavaScript大全第七版》筆記](https://www.books.com.tw/products/0010886126)
:::


Location物件表示視窗中的文件目前的URL，可以使用 `window.location` 或 `document.location`取得。


## 常見用法

### search
取得查詢字串。 <br/>
假設網址串為 `https://www.google.com/?test=123`
```js
window.location.search // ?test=123
```

### replace()
`replace(url)`傳入一個字串，會被解析為URL並載入新頁面。
但會在瀏覽器歷史紀錄中，取代原本的文件。

範例：<br/>
`google.com` => `facebook.com` 呼叫 `location.replace("yahoo.com")`<br/>
現在變成
`google.com` => `yahoo.com` (現在按瀏覽器上一步會返回到google.com)


### reload()
重新載入頁面。

### 載入新文件
想要見當前網址變為其他網址，可以使用:
```js
window.location = <新網址>
document.location =<新網址>
```

或是相對路徑的URL
```js
window.location = "shop.html"
document.location = "shop.html"
```

使用　`#`(片段識別符)，它不會導致瀏覽器重新載入一個新文件，常見用途是捲動到特定ID位置的元素，例如：

```js
document.location.has = "TOC" // 捲動至目錄

```

