---
slug: /web-api/fetch
title: Fetch
tags:
  - WebAPI
---

:::note
此文為[《JavaScript 大全第七版》筆記](https://www.books.com.tw/products/0010886126)
:::

Fetch 用來發送 HTTP 請求，且完全基於`Promise`，可以使用`.then()`或是`async/await`解析回應。

[Dog api](https://dog.ceo/dog-api/)範例：

```js
fetch("https://dog.ceo/api/breeds/image/random")
.then(response=> response.json())
.catch(error = >{
  console.log("Error")
})

```

## Request

### Request Method & Body

```js
fetch(url, {
  method: "POST",
  body: "Test",
});
```

### Requeset Headers

```js
let customHeaders = new Headers();
customHeaders.set("Authorization", "Bearer xxx"); // 設定標頭
fetch(url, { headers: customHeaders }); // 放在fetch第二個參數
```

### File Upload

使用 `formData`物件作為 Request Body

```html
<input type="file" />
```

```js
// file change Event emit files Object
let form = new FormData();
form.append("xxx", e.target.files[0]);
fetch("/upload", { method: "POST", body: form });
```

### 跨來源請求

同源請求(same-origin requests): 請求的伺服器有相同來源(protolcol + hosname + port)。

Web 瀏覽器一般不允許跨來源請求，要做到 CORS(Cross-Origin Resource Sharing)，通常需要後端協助添加 header 回應:

範例：
`Access-Control-Allow-Origin: *`


### 其他請求選項
- `cache`: 瀏覽器預設快取行為
   - `default`
   - `no-store`: 忽略快取。
   - `reload`: 告訴永遠發出一個正常網路請求，忽略快取，但是接收到回應時，會將它存在快取。
   - `no-cache`: 告知瀏覽器不要從快取提供最近的值，最近的值和舊的值都要再回傳前重新驗證過。
   - `force-cache`: 告訴瀏覽器從快取提供回應。

- `redirect`: 重導回應
  - `follow`: 預設，`fetch`的status code永遠都不應該有 **300** ~ **399**
  - `error`:  fetch會拒絕回傳Promise
  - `manual`: fetch回傳的Promise可以解析範圍在**300** ~ **399**的Response


## Response 物件

### `status`

HTTP 狀態碼，如: 200

### `ok`

Http status code 介於 **200~299**。

### `headers`

Headers 物件

- `has()`: 是否含有某個標頭
- `get()`: 取得某個標頭的值

## 解析 Response

### `json()`

### `text()`

### `arrayBuffer()`

用於處理回應含有**二進位**的資料

### `blob()`

Binary Large Object(二進位大型物件)。
當預期大量的二進位資料，瀏覽器可能會把回應資料串流到一個暫存檔，並回傳一個 `Blob`物件表示該暫存檔。
使用方式：

- `URL.createObjectURL()`: 建立一個 URL 指向它。
- `FileReader API`: 非同步獲取該 Blob

以下是一個 API 回傳資料為 blob 格式的音檔播放範例：

```js
fetch(url)
  .then((response) => response.blob())
  .then((blob) => {
    const blobUrl = URL.createObjectURL(blob);
    const audio = new Audio(blobUrl);
    audio.play();
  });
```

### `formData()`

Reponse 回應的 Body 為 `multipart/form-data`格式，則使用此方法。

## Error 情境

無法聯繫 Web 伺服器時才會出現，否則都會回傳 Promise。
常見情境如:

- 使用者電腦離線
- 伺服器沒反應
