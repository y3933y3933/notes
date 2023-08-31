---
title: Spring boot介紹
tags:
  - spring-boot
---

## Spring-boot 結構

### 原始碼

`src/main/java`原始碼位置

DemoApplication 為程式碼進入點(依據你所命名的應用程式，名稱會不一樣)
![img](https://github.com/byoungd/English-level-up-tips/assets/28300286/dde0248e-07c3-4e37-a0b4-2a1c7c7ac811)

### 資源

`src/main/resources`:靜態資源
範例

```
statics => image、css、靜態html
templates =>動態html模板
application.properties => 應用程式的config
```

### 測試

`src/test/java`

## 啟動

編譯原始碼＆執行

```
mvn spring-boot:run
```

移除之前編譯好的檔案

```
mvn clean spring-boot:run
```

## 啟動 HTTP Server

### 安裝相依套件

使用`Spring Web`，需要先為專案配置 dependency package。
搜尋 `spring boot web dependency`，到[maven repository](https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-web)。


### 設定專案相依套件
找到對應的版本，複製到專案下的`pom.xml`內。
![version](https://github.com/y3933y3933/y3933y3933.github.io/assets/28300286/b0356cd0-f86f-4858-9d7f-34f77f426ea7)

```xml title="pom.xml"
<dependencies>
		...
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
			<version>3.1.3</version>
		</dependency>
</dependencies>

```



### 重新啟動專案
```
mvn clean spring:boot run
```
啟動完後會看到terminal顯示`Tomcat started on port(s): 8080`
![serve](https://github.com/y3933y3933/y3933y3933.github.io/assets/28300286/e44e20a6-b356-4be9-aa88-5ce98012ba4d)


到`localhost:8080`會看到以下畫面
![8080](https://github.com/y3933y3933/y3933y3933.github.io/assets/28300286/74426ce0-4387-47c4-9565-6020dc8589b0)


### 設定html檔案
到專案目錄下新建html，路徑:`src/main/resources/static/index.html`
```html title="src/main/resources/static/index.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello Spring Boot</h1>
</body>
</html>
```

重新啟動專案後可以看到畫面
![img](https://github.com/y3933y3933/y3933y3933.github.io/assets/28300286/7492f5ff-6a95-400a-80b7-2bf703176f46)


### 變更port
```title="src/main/resources/application.properties"
server.port=3000
```
### 打包成`jar`
```
mvn package
```

打包出來的`jar`會被放到`target`資料夾內，命名是由`artifact-id`跟`version`組成


執行
```
java xxx.jar
```


## Maven Dependencies
有分成兩種:
- Central Maven Repositroy
- Local Maven Repository


### Central Maven Repository
Maven下載套件的的地方

### Local Maven Repository
放在自己電腦裡

Maven會先看Local有沒有，沒有的話會去`Central Repository`下載回來並放到Local。


查看本機存放的地方
mac操作
- 在桌面按`shift+command+G`
- 輸入 `~/.m2/repository`


## Spring Boot DevTool Dependency
[maven download](https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-devtools)

每次變更後會restart