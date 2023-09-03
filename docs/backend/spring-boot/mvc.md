---
title: MVC 
tags:
  - spring-boot
---

## MVC

### View
畫面，e.g. `index.html`

### Model
View所需要的資料(Data)

### Controller
從Model拿Data傳給View

Controller處理request，從Model拿到資料，傳給View


## Controller
### 建立Controller
透過Annotation `@Controller` - 使得class變成web request的進入點。

Contoller內會包含處理各個request的方法，透過Annotation `@GetMapping`使得方法變成用來處理web request的處理器。

`@GetMapping`:
- 接收一個字串作為`path`
- 方法會回應一個在`path`的GET請求

## View
網頁元素
Controller的方法會找`resources/templates`與回傳字串對應的`html`檔案。

```java 
public class GradeController {

    @GetMapping("/grades")
    public String getGrades() {
        return "grades";
    }

}

```


```html title="resources/templates/grades.html"
<head></head>
<body>grades</body>
```


## Model
`Controller`傳給`View`的資料。


### 操作
1. 處理的方法能夠直接取用`Model`
  - `getGrades(Model model)`

2. 處理的方法可以使用`POJO`建立資料
:::note
`POJO`指的是一個Java物件，只包含`private`屬性、`constructors`及`Getters/Setters`
:::

3. 處理的方法可以透過`Model`的`attribute`儲存資料。
```
model.addAttribute("<attribute name>", <value>);
```


### Java Code Generator Extension
[Java Code Generators](https://marketplace.visualstudio.com/items?itemName=sohibe.java-generate-setters-getters)

快速建立`POJO`

```java
package com.ltp.gradesubmission;

public class Grade {
    private String name;
    private String subject;
    private String score;

}
```

![img](https://github.com/y3933y3933/angular-practice/assets/28300286/8b3b73db-b8ec-4624-9aeb-e9425960fc0e)