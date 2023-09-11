---
title: Three Layer CodeBase
tags:
 - Spring-boot

---

## 如何更好的組織程式碼？
採用three layer Codebase


### Presentation Layer
Controller 
- 呼叫`Service`方法
- 更新`Model`
- 回傳`View`

```java
getGrades(Model model){
    service.getGrades();
    update Model
}
```


### Business Logic Layer
Service : Presentation <=> Data Access
Controller 跟 Data Access不會直接互動，而是透過`Service`

```java
getGrades(){
  repository.READ()
  }
```

### Data Access Layer
CRUD
- C: Create
- R: Read
- U: Update
- D: Delete


