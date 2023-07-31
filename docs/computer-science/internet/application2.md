---
title: 應用協定(下)
tags:
  - Internet
---
:::note
此文為[《圖解TCP/IP網路通訊協定（涵蓋IPv6）2021修訂版》](https://www.books.com.tw/products/0010883910)筆記
:::



##  WWW (World Wide Web) 基本概念
### URI (Uniform Resource Identifier)
資源的識別碼，能夠用於WWW以外，範例：
`http://localhost:631`
`http://www.ietf.org:80/index.html`


:::info

**URL**(Uniform Resource Locator)表示網際網路資源位址，URI則不限於網際網路。

:::

URI顯示的組合稱作方案(scheme)，其http Scheme的格式如下:
- `http://主機名稱/路徑`
- `http://主機名稱:連接埠編號/路徑`
- `http://主機名稱:連接埠編號/路徑?查詢字串#部分資料`


### HTTP (HyperText Transfer Protocol)
傳送接收HTML文件、影像、聲音等協定。

使用者端向HTTP伺服器請求資訊，HTTP伺服器根據請求，傳送資訊給使用者端。

一般會使用port `80`，建立TCP連線。

HTTP主要使用 `HTTP1.0`與`HTTP1.1`兩個版本，從1.1開始，建立一個TCP連線就能勾傳輸接收多個指令與回應。

`HTTP/2`導入平行處理、使用二進位檔案，提高網路資源的傳輸效率，如果Web伺服器或瀏覽器能支援HTTP/2，就會自動進行HTTP/2的通訊。


### CGI (Common Gateway Interface)
Web伺服器呼叫外部程式的伺服器端應用程式。


### Cookie
Cookie是web伺服器用來把資料儲存在使用者端的機制，讓瀏覽器可以記住登入狀態等資料。

### WebSocket
讓使用者與伺服器進行雙向通訊的協定，如: 聊天App。



