---
title: Array.prototype.map
---

:::info
[GreatFrontEnd Array.prototype.map](https://www.greatfrontend.com/questions/javascript/array-map)
:::

### Description

實作 `Array.prototype.map` 方法，比照原生 `Array.prototype.map` 的行為，[MDN Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

Example:

```javascript
[1, 2, 3, 4].myMap((i) => i); // [1, 2, 3, 4]
[1, 2, 3, 4].myMap((i) => i * i); // [1, 4, 9, 16]
```

### Approach

跟 `filter` 作法類似，差別在於 map 回傳的長度跟原陣列相同。

### Code Implementation

```javascript
/**
 * @template T, U
 * @param { (value: T, index: number, array: Array<T>) => U } callbackFn
 * @param {any} [thisArg]
 * @return {Array<U>}
 */
Array.prototype.myMap = function (callbackFn, thisArg) {
  const len = this.length;
  const result = new Array(len);

  for (let i = 0; i < len; i++) {
    const value = this[i];
    if (Object.hasOwn(this, i)) {
      result[i] = callbackFn.call(thisArg, value, i, this);
    }
  }

  return result;
};
```
