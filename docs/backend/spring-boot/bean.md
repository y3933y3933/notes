---
title: Beans and Dependency Injection
tags:
 - spring-boot
---

## Bean
Bean是一個物件，由Spring-boot創建及管理。

### 如何被建立
```java
@SpringBootApplication
public class Application{

    Application.run();
}
```

當執行一個spring-boot應用程式時，會做以下三件事情：
1. `@ComponentScan`:去找所有`@Component`裝飾的`class`。
2. 為這些`@Component` class建立`object`
3. Spring容器（ApplicationContext）負責儲存及管理這些object。

## Dependency Injection
Beans允許依賴注入。

不要做以下事情：
```java
GradeService gradeService = new GradeService();
```

**Tight Coupling** - 在一dependency class中建立一個物件。

 
### 使用DI
1. `@Component`裝飾`class`
2. Spring-boot 為 `@Component` class註冊`bean`
3. `@Autowired`把`bean`注入到相依class


## `@Service` & `@Repository`
`@Service`、`@Repositoy`、`@Component`是一樣的。

## @Bean
用來註冊一個`bean`
1. 建立`@Bean`
2. `@Configuration`標示這個class是`@Bean`的定義。

```java
@Configuration
public class AppConfig{

    @Bean
    public GradeSubmissionRepository gradeRepository(){
        return new GradeSubmissionRepository();
    }
}
```

3. `@Autowired`