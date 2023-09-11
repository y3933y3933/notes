---
title: 欄位檢核
tags:
  - Spring-boot
---

## 欄位檢核
### Install Dependency
[Spring boot Validation Dependency](https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-validation)


### Annotate the fields
透過`@`在欄位增加檢核條件，範例：

```java
 @NotBlank(message = "Name can not be blank")
    private String name;
```

### `@Valid`
檢查傳進來的欄位是否通過檢核。

```java
public String submitForm(@Valid Grade grade){
    ...
}
```

### BindingResult
`BindingResult` => 表示檢核的結果
```java
public String submitForm(@Valid Grade grade, BindingResult result) {
    ...
 }

```

### Handle Errors
透過`BindingResult`檢查是否有錯誤，有錯誤則導回原本頁面。
``` java
if (result.hasErrors()){
    return "form";
}
```

`th:errors`顯示錯誤訊息

```index.html
<p style="color: red;" th:errors="*{name}"></p>
```

## 自定義檢核

### 建立檢核Annotation
- `@interface` 建立檢核Annotation。
- `@Target`: 指定一個自定義注解可以應用到哪些程式元素，這裡使用`FIELD`表示用在欄位。
- `@Retention`:用來指定自定義注解的保留策略，這裡使用`RUNTIME`表示整個應用程式執行期間。
- `Constraint`: 指定了哪個類別用於執行特定的驗證邏輯。

- ` Class<?>[] groups() default {};`、`Class<? extends Payload>[] payload() default {};`:固定寫法
- `message()`：設定錯誤訊息defulat文字。

```java
@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = ScoreValidator.class)
public @interface ValidScore{
    String message() default "Invalid Data";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
```

### ConstranintValidator實現檢核邏輯
語法：
`implement ConstraintValidator<<Annotation Type>, <Validation Type>>`

需要覆寫`isValid`方法


```java
public class ScoreValidator implements ConstraintValidator<Score, String> {
    List<String> scores = Arrays.asList("A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F");

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        for (String string : scores) {
            if (value.equals(string))
                return true;
        }
        return false;
    }

}
```

