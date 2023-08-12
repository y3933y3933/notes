---
title: 基礎指令
slug: /command-line/basic
tags:
 - command-line
---

## 基本指令
### pwd
獲得當前路徑

### ls
顯示路徑下的所有檔案/資料夾


### echo
使用`echo`建立檔案
```bash
echo Hello > test.txt
```

### cat
讀取檔案內容
```
cat text.txt
```

### less
讀取較大檔案內容，按`Enter`可以繼續讀取，按`q`退出。
```
less huge.txt
```

### ps
`ps`顯示正在執行的`processes`
`-ef`(optional)顯示每個使用者執行的processes

使用以下指令將輸出結果存到`process.txt`檔案
```
ps -ef > process.txt
```

使用`|`管道字元，改用`less`方式顯示
```
ps -ef | less
```

### mkdir
建立資料夾

### cd
移動到某路徑

`cd ~`回到根路徑

使用`tab`鍵有autocomplete效果


### sudo
sudo = superuser do

### man
man = manual
後面接指令可以獲得指令的資訊
```
man <指令>
```

## 查看指令紀錄
### history
查看之前輸入過的指令紀錄

### !
搭配history上的數字，可以直接執行過去指令
```
!<number>
```
### !!
直接執行最近一次的指令


## 快捷鍵
### Ctrl + a
到字串的最前面一個字元

### Ctrl + e
到字串的最後面一個字元

### Ctrl + l 
等同於`clear`，清空畫面

### Ctrl + r
搜尋history的命令並執行

### Ctrl + u
移除我們正在輸入的指令

## 下載檔案
### which
使用`which`檢查必要工具是否已安裝
```
which curl
which unzip
```

### `curl`
透過`curl`下載檔案
```
curl -O https://....zip
```

`-O` 表示使用檔案原本的名稱作為檔案名稱

### unzip
```
unzip xxx.zip
```


