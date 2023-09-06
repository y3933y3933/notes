---
title: Array
tags:
 - Java
---

## 陣列型別
基礎型別 + []
```java
int [] arrayOfInts; 
```

## 陣列建立與初始化
使用`new`建立陣列的實體，`new`後面接的是指定的基礎型別，中括號內的數字表示陣列長度。
```java
arrayOfInts = new int [42];
```

陣列的元素都會初始化為型別的預設值，e.g. 數值型別初始化為零

可以使用`{}`建立陣列並初始化元素。

```java
int [] ages = {25, 16, 30 , 29};
```

## 使用陣列
### length
`.length`取得陣列長度。



### 迴圈
```java
for(Button b : keyPad){
    System.out.println(b);
}
```

如果嘗試存取超出陣列的元素會產生`ArrayIndexOutOfBoundsException`(RuntimeException型別)。


### 複製陣列
- `Arrays.copyOf(target, targetLength)`: 目標長度比原始陣列長度還常，新陣列會用0或null填補。
- `Arrays.copyOfRange(target, start, end)`


```java
byte [] bar = new byte[]{1,2,3,4,5};

byte [] barCopy = Arrays.copyOf(bar, bar.length) // {1,2,3,4,5}

byte [] firstThree = Arrays.copyOfRange(bar, 0 , 3) // {1,2,3k}
```
