---
title: 字串
tags:
 - Java
---

## Java字串的內核
Java String類別類別封裝了一連串的Unicode字元，這些字元是以陣列的方式儲存，String會嚴格保護內部陣列，只能透過API存取。


## 建立字串
```java
String <變數名稱> = "<變數值>";
```

- `length()`
- `isEmpty()`: 長度是否為零
- `.concat`:等同於 `+`，用來串接字串。


## 各種東西到字串
`String.valueOf()`
```
String one = String.valueOf(1); // "1"
String two = String.valueOf(2.38f); // "2.38f"
String notTrue = String.valueOf(false); // "false"
 
```


### valueOf() v.s. toString()
所有物件都有繼承自Object類別的`toString()`方法。
用物件呼叫`String.valueOf()`時，會呼叫該物件的`toString()`，差別在於傳入`null`物件參考，會回傳`"null"`，而不是NullPointerException。


```
String.valueOf(xxx) // "null"
xxx.toString() // NullPointerException
 
```


## 比較字串
`equals()`:兩者是否包含相同字元與相同順序。
`equalsIgnoreCase()`: 不考慮大小寫的方式比較。

`compareTo()`：比較字串跟另一個字串的詞彙值，判斷依照字典順序排序，是在目標字串：
- 之前（小於0)
- 相同 (等用0)
- 之後 (大於0)

```java
    String abc = "abc";
    String def = "def";
    String num = "123";
    System.out.println(abc.compareTo(def)<0);
    System.out.println(abc.compareTo(abc)==0);
    System.out.println(abc.compareTo(num)>0);
```
只適用於簡單文字！


## 搜尋
- `startWith()`
- `endWith()`
- `indexOf()`: 找不到會回傳-1
- `contains()`: 是否包含特定字串