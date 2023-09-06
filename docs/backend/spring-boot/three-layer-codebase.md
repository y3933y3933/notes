---
title: Three Layer CodeBase
tags:
 - Spring-boot

---

## 如何更好的組織程式碼？
採用three layer Codebase

### Presentation
Controller

```java
getGrades(Model model){}
```


### Business Logic
Service : Presentation <=> Data Access

### Data Access
CRUD
- C: Create
- R: Read
- U: Update
- D: Delete
