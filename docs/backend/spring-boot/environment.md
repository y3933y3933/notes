---
title: 環境建置
tags:
 - spring-boot
---

## 安裝Java (Mac)
[java 17 下載連結](https://docs.aws.amazon.com/corretto/latest/corretto-17-ug/downloads-list.html)

![img](https://github.com/byoungd/English-level-up-tips/assets/28300286/e9dbfed5-ff4c-4184-931d-d80ca051bffe)

- M1/M2 =>aarch64
- 其他 => x64

關於這台mac查看自己電腦裝置
![img](https://github.com/byoungd/English-level-up-tips/assets/28300286/90ee45fb-31a1-4c89-aafd-a0934da20e03)

檢查是否安裝完成:
於命令列輸入以下指令，有回傳java版本表示安裝成功。
```bash
java --version
```
## 安裝Maven (Mac)
透過[homebrew](https://brew.sh/index_zh-tw)安裝
安裝完後可以輸入以下指令安裝maven
```
brew install maven
```

檢查是否安裝完成
```
mvn --help
```

## 安裝VsCode & 擴充套件
[VsCode](https://code.visualstudio.com/download)

擴充套件
- [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)
- [Spring Boot Extension Pack](https://marketplace.visualstudio.com/items?itemName=vmware.vscode-boot-dev-pack)

## 建立第一個Spring Boot專案
在vscode用快捷鍵`command + shift + P`打開
1. 選擇`Spring initializr: Create a Maven Project`
![init](https://github.com/byoungd/English-level-up-tips/assets/28300286/1a939966-4317-47fc-8608-690e0e0e7e53")

2. 選擇版本
3. 選擇java語言
4. 輸入group id: `com.xxx`
  - Domain Extension
  - 組織名稱
5. Artifact id: 應用程式名稱(小寫)
6. 選擇packing type: `jar`
7. 選擇java版本
8. 選擇dependencies
