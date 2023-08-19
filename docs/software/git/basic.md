---
title: 基本操作
slug: /git/basic
tags:
 - git
---

## 設定
讓Git知道你素隨


```
git config <option> user.name "你的名字"
git config <option> user.email "你的信箱"
```

`<option>`可以設為:
- `--global`: 全域
- `--local`: 當前專案


查看目前設定
```
global config --list
```

## 查看commit

```
git log 
```
可以查看commit紀錄，包含作者、commit日期、commit hash
- `--oneline`: 簡短版
- `--graph`: 線性



## 查詢commit
抓戰犯用(誤)

`git log`查commit紀錄
```
git log --author="某某某"
git log --grep="commit訊息"
```

`git blame <file>`查某個檔案的修改紀錄

## 刪除檔案
以下太遜了
```
rm <file>
git add <file>
```


直接讓git幫你做完刪除+加入版控
```
git rm <file>
```

### 只是不想再被git控制
```
git rm <file> --cached
```

## 改名
```
mv <file> <new file name>
```

git會認為是刪除+新增檔案


git幫你做
```
git mv <file> <new file name>
```


## 修改commit
commit寫壞了或要被老闆檢查時

使用`--amend`修改最新一次commit
### 修改訊息
```
git commit --amend -m "message"
```

### 追加檔案
```
git add <file>
git commit --amend --no-edit
```
`--no-edit`表示不編輯commit訊息



## 新增資料夾
空資料夾沒辦法add、commit
這時候可以在資料夾內加入`.gitkeep`檔案，就可以提交變更了


## 不加入git
建立`.gitignore`檔案
```bash title=".gitignore"

node_modules

```

## 拯救檔案
當檔案處於刪除狀態
```
git checkout <file>
git checkout . 
```

`git checkout`把暫存區的內容拉到工作目錄(回復到上次commit的狀態)。



## Reset 
### 拆掉commit
```
git reset <commmit碼>^
git reset <branch>^
get reset HEAD^
```
`^`表示前一次，可以疊加

### 模式
- `--mixed`: 預設，拆出的commit留在工作目錄
- `--soft`: 拆出的commit放到暫存區
- `--hard`: 工作目錄跟暫存區檔案都丟掉

## reflog
可以看到消失commit的紀錄唷
```
git log -g
git reflog
```
