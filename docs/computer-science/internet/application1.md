---
title: 應用協定(上)
tags:
  - Internet
---


:::note
此文為[《圖解TCP/IP網路通訊協定（涵蓋IPv6）2021修訂版》](https://www.books.com.tw/products/0010883910)筆記
:::

## 什麼是應用協定？
包含：Web瀏覽器、電子郵件，或是安裝在手機內Facebook、LINE等應用程式所使用的協定。

相當於**OSI參考模型**的5~7層協定。

## 遠端登入
坐在電腦A前使用終端機，透過網路連接到主機B，使用主機B的應用程式或其他系統設定。



### SSH
加密後的遠端登入系統。

![image](https://github.com/y3933y3933/y3933y3933.github.io/assets/28300286/bad8f0d2-bd34-4a1b-afd2-a5df063ce743)




## 檔案傳輸(FTP)
不同電腦進行檔案傳輸的協定。

可以使用檔案傳輸軟體，如:[FileZilla](https://filezilla-project.org/)，設定伺服器位址及登入帳密。

### 結構
使用兩條TCP連接：

1. 控制
如：確認登入使用的帳號及密碼。並不會用來傳輸資料，Port為`21`。

2. 傳輸資料
一般使用Port為`20`。

# 電子郵件
電子郵件服務的協定稱作 `SMTP` ，使用`TCP`當作傳輸協定。

透過不會關機的電子郵件伺服器傳送電子郵件，其組成元素包含:
- 電子郵件位址
- 資料格式
- 傳輸協定

## 位址
相當於 **姓名@地址**，如 `xxx@tcpip.kusa.ac.jp`
`xxx` = 名字
`tcpip.kusa.ac.jp` = 地址

## MIME (Multipurpose Internet Mail Extenstions)
過去網際網路電子郵件只能處理文字格式，現在有可以傳送各式各樣的資料的`MIME`格式。
組成:
- 表頭
```text
To: xxx@gmial.com
Subject: =?ISO-2022-akawekowpek 
Mime-Version: 1.0
Content-Type: Multipart/Mixed; boundary=Sample-Boundary
Content-Trasnfer-Encoding: 7bit
From: skdajl@gamil.com
```
- 本文(資料)

## SMTP(Simple Mail Transfer Protocol)
傳送電子郵件的協定，TCP的port是`25`


## POP (Post Office Protocol)
前面的SMTP是傳送用，個人電腦沒辦法向電子郵件伺服器提出請求，`POP`是為了解決這個問題提出的協定。

寄件者透過`SMTP`傳送郵件到24小時開機的`POP`伺服器，使用者透過 `POP`取得儲存在上面的電子郵件。

## IMAP (Internet Message Access Protocol)
與`POP`一樣，用來接收電子郵件的協定，差別在於 `POP`在使用者端，`IMAP`在伺服器端。

可以不用下載伺服器上所有電子郵件，就可以讀取，如:只下載第5個附加檔案。
