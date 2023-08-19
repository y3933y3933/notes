---
title: 檔案指令
slug: /command-line/file
tags:
 - command-line
---

## 建立檔案
### touch
用來建立一個空內容的檔案
```
touch <fileName>
```

也可以用來建立多個檔案
```
touch index.html about.html style.css
```

### echo
寫入內容
```
echo "hello world" > hello.txt
```

使用`>>`將內容添加到已有的檔案
```
echo "Wordl!!" >> hello.txt
```

### cat
除了可以讀取檔案內容，也可以用來建立檔案
cat = creating and reading 
```
cat > hello.txt
```
執行後可以輸入文字，按`Enter`換行，`ctrl + d`存檔。

也可以自定義要終止的字元
```
cat << 'EOF' > names.txt
```
當輸入EOF時，會存檔並跳出。

可以讀多筆檔案:
```
echo hello.txt world.txt
```

將多筆檔案寫入同一檔案：
```
cat header.html main.html footer.html > index.html
```

## 讀取檔案
### less

### head
預設只讀取前十行，也可以放參數
```
head index.html
head -n 1 index.html
```

### tail
讀取最後十行，也可以放參數
```
tail index.html
tail -n 1 index.html
```
可以使用`-f`進入debug mode
```
tail -f xxx.log
```
使用`ctrl + c`跳出

## 建立路徑
### mkdir
建立資料夾

使用`-p`告訴`mkdir`去建立完整路徑，包含不存在的路徑。
```
mkdir -p files/java/c1 files/java/c2
```

上面也可以用縮寫方式建立
```
mkdir -p files/java/{c1,c2}
```

建立多個子路徑
```
mkdir -p files/code/{java,javascript,python}

```

## 複製檔案
```
cp <要複製的檔案路徑> <要貼到的檔案路徑>
```
`cp`會覆蓋檔案，可以使用`-i` flag跳出提示，會問你是否要overwrite檔案。

也可以複製一堆資料，拿來做備份方便。
```
cp files/docs/*.txt files/backup
```

## 複製路徑