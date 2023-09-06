---
title: Thymeleaf
tags:
  - spring-boot
---

Thymeleaf 透過`Variable Expression`將`Model`跟`View`結合。

## Variable Expression

在一個 model attribute 上執行，語法:

```
${age}
```

使用方式：

- 回傳一個`model attribute`
- 基於`model attribute`執行一個條件式
- 基於`model attribeute`執行迴圈

### th:text

顯示文字

```
th:text="${grade.score}"
```

## Selection Expression

`*{field}`：選擇之前綁定的物件`field`

```
th:object="${model object}"
```

=> 綁定 object 到 HTML 元素

```
<tr th:object="${grade}">
          <th th:text="*{name}"></th>
          <th th:text="*{subject}"></th>
          <th th:text="*{score}"></th>
</tr>

```


## Conditionals
- `th:if`：條件為true則渲染元素
- `th:unless`：`th:if`的相反
- `th:switch`
 - ```
    <div th:switch="${model att.}">
     <p th:case="'val1'"></p>
     <p th:case="'val2'"></p>
     <p th:case="*"></p>
    </div>
   ```
- 三元運算子：
```
th:text="${age > 20 ? 'Old' : 'Young'}"
```

## Utility Methods
語法：
```
${#type.method(target, args)}
```
- `type`: Thymeleaf class
- `method`:
- `parameters`


```
    <h1 th:text="${#strings.contains(menu, 'rice cakes')}"></h1>
```

[thymeleaf utility methods](https://github.com/thymeleaf/thymeleaf/tree/3.1-master/lib/thymeleaf/src/main/java/org/thymeleaf/expression)

## Link Expression
`@{/}`: URL endpoint或是資源路徑

e.g. `css`

```
<link th:href="@{/grades-stylesheet.css}" rel="stylesheet"> 

```

## Loop

```
th:each="<variable name>: ${model attributes}"
```

## Form
1. 設定action 
```
th:action="@{/<url>}"
```

2. 設定`@PostMapping`方法 (處理Post Request)
```
  @PostMapping("/handleSubmit")
    public String submitGrade(Grade grade){
        studentGrades.add(grade);
        return "redirect:grades";
    }
```

`redirect:`用來重新導頁。


## Update
透過`th:href`導頁，發送GET
```
th:href="@{/}"
th:href="@{/url (parameter = value)} // GET請求的query params
```

URL的query params會帶到GetMapping method的參數。
```
@GetMapping("/")
    public String gradeForm(Model model,@RequestParam(required false) String name) {
                System.out.println(name);

        model.addAttribute("grade", new Grade("Winnie","Math","A-"));
        return "form";
    }
```

`@RequestParam`表示該參數的來源只能從get request取得。


## Unique ID

```
UUID.randomUUID().toString()
```
    