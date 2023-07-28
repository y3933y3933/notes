---
title: Transition
tags:
  - CSS
---

元素從一個狀態到另一個狀態的過程，稱為「transition」。

## Properties

簡寫

```css
    transition: [property] [duration] [delay] [timing-function];
```

### property

要過渡的屬性，也可以使用 `all`

### duration

過渡持續時間，單位為毫秒。

### delay

過渡效果的延遲時間，單位可以是秒或毫秒 (如: `3s`或 `100ms`)

### timing-function

時間函數

- `linear`: 固定的線性變化
- `ease-in` : 先較慢，後較快
- `ease-out`: 先較快，後較慢
- `cubic-bezier`: 利用[貝賽爾曲線](https://cubic-bezier.com/#.17,.67,.83,.67)
  有四個參數，代表兩個控制點座標，範例:

```css
cubic-bezier(1,-0.54,.13,1.07)
```

### Steps

`steps` 適用於不連續的過渡效果。

```css
steps(<num>, <start/end>)
```
第二個參數用來指定是第一幀還是最後一幀作為第一個step，默認為 `end`


## Multiple transition

### 多個元素
在不同元素上可以設置不同的 `transtion`

### 單一元素
單一元素要設置多個transtion，使用逗號(,)隔開
```css
    transition: background 1s ease-out, border 0.5s linear;
```

## JS 觸發 transition
- 新增或移除 Class
- 直接設置`transition`:
```js
    element.style.transition = 'opacity 1s ease-out';

```
### 新增或移除 Class
