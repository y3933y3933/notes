---
---

:::info
[GreatFrontEnd Debounce](https://www.greatfrontend.com/questions/javascript/debounce)
:::

### Description

實作一個 debounce function，它接受一個 callback function 和等待時間。呼叫 debounce() 後，返回一個新的函式，該函數會在滿足防抖行為後呼叫 callback function。

Example:

```javascript
let i = 0;
function increment() {
  i++;
}
const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement().
debouncedIncrement(); // i = 0

// t = 50: i is still 0 because 100ms have not passed.

// t = 100: increment() was invoked and i is now 1.
```

### Approach

看到倒數，想到 `setTimeout`、`clearTimeout`

### Code Implementation

```javascript
/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait) {
  let timerId;

  return function (...args) {
    const context = this;
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      timerId = null;
      func.apply(context, args);
    }, wait);
  };
}
```

### Reflection

- 複習 `setTimeout`、`clearTimeout` 的用法
- 複習 `this` 的指向，可採用 `apply()` 或 `call` 的方式指定 `this`
- `timerId` 設為 `null` 是一個好習慣，可以明確指出 setTimeout 是否被執行過
- 如果丟空值給 `clearTimeout`，並不會報錯，所以不用特別檢查

### Reference

- [MDN ClearTimeout](https://developer.mozilla.org/en-US/docs/Web/API/Window/clearTimeout)
