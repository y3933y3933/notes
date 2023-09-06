---
title: Collections
tags:
 - Java
---

## 集合
集合是程式設計基礎的資料結構

## Collection 介面
Collection是集合之母，定義了一些所有集合共有的基本操作：

- public boolean add(element)
將指定物件加到集合，成功回傳true，已存在且集合不允許重複則會回傳false

- public boolean remove(element)
從集合移除指定物件，成功回傳true，物件不存在則回傳false

- public boolean contains(element)
容器包含指定的物件則回傳true

- public int size()
傳回容器中的元素數量

- public boolean isEmpty()
容器沒有任何元素回傳true

- public Inerator iterator()
遍歷集合所有元素，傳回一個Interator