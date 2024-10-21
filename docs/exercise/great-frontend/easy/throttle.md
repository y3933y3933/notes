---
---

:::info
[GreatFrontEnd Throttle](https://www.greatfrontend.com/questions/javascript/throttle)
:::

### Description

節流（Throttling）是一種用來控制函式在一段時間內執行次數的技術。當一個 JavaScript 函式被設定為以 X 毫秒的等待時間進行節流時，這個函式在每 X 毫秒內最多只能執行一次。 callback function 會立刻執行，但在接下來的等待時間內就不能再被執行了。

實作一個節流函式，它接受一個 callback function 和一個等待時間。呼叫 throttle() 會返回一個新的函式，這個函式會根據上面的規則來控制回調函式的執行。

Example:

```javascript
let i = 0;
function increment() {
  i++;
}
const throttledIncrement = throttle(increment, 100);

// t = 0: Call throttledIncrement(). i is now 1.
throttledIncrement(); // i = 1

// t = 50: Call throttledIncrement() again.
//  i is still 1 because 100ms have not passed.
throttledIncrement(); // i = 1

// t = 101: Call throttledIncrement() again. i is now 2.
//  i can be incremented because it has been more than 100ms
//  since the last throttledIncrement() call at t = 0.
throttledIncrement(); // i = 2
```

### Approach

- 一個 bool ，作為是否要執行 func 的 flag
- 使用 `setTimeout` 來控制 func 的執行時間

### Code Implementation

```javascript
/**
 * @callback func
 * @param {number} wait
 * @return {Function}
 */
export default function throttle(func, wait = 0) {
  let shouldThrottle = false;

  return function (...args) {
    if (shouldThrottle) {
      return;
    }

    shouldThrottle = true;
    setTimeout(function () {
      shouldThrottle = false;
    }, wait);

    func.apply(this, args);
  };
}
```
