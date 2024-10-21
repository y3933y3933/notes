---
title: Array.prototype.filter
---

:::info
[GreatFrontEnd Array.prototype.filter](https://www.greatfrontend.com/questions/javascript/array-filter)
:::

### Description

實作 `Array.prototype.filter` 方法，比照原生 `Array.prototype.filter` 的行為，[MDN Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

Example:

```javascript
[1, 2, 3, 4].myFilter((value) => value % 2 == 0); // [2, 4]
[1, 2, 3, 4].myFilter((value) => value < 3); // [1, 2]
```

### Approach

直覺的做法是遍歷陣列，將符合條件的元素收集起來。

### Code Implementation

```javascript
/**
 * @template T
 * @param { (value: T, index: number, array: Array<T>) => boolean } callbackFn
 * @param {any} [thisArg]
 * @return {Array<T>}
 */
Array.prototype.myFilter = function (callbackFn, thisArg) {
  const len = this.length;
  const results = [];

  for (let k = 0; k < len; k++) {
    const kValue = this[k];
    if (
      // Ignore index if value is not defined for index (e.g. in sparse arrays).
      Object.hasOwn(this, k) &&
      callbackFn.call(thisArg, kValue, k, this)
    ) {
      results.push(kValue);
    }
  }

  return results;
};
```

### Reflection

- [Object.hasOwn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)第一次見到，用來取代 `Object.prototype.hasOwnProperty()`，便於判斷物件是否擁有某個屬性。
- callbackFn 的參數有 3 個，分別是 `value`、`index`、`array`，這是原生 `Array.prototype.filter` 的行為。
- Function.prototype.call 的用法，第一個參數是 this 的值，後續的參數是 callbackFn 的參數。
