---
---

:::info
[GreatFrontEnd Cycle](https://www.greatfrontend.com/questions/javascript/cycle)
:::

### Description

實作一個函式，此函式接收一個或多個值，並返回一個函式，該函式每次被呼叫時會依序循環返回這些值。

Example:

```javascript
const helloFn = cycle("hello");
console.log(helloFn()); // "hello"
console.log(helloFn()); // "hello"

const onOffFn = cycle("on", "off");
console.log(onOffFn()); // "on"
console.log(onOffFn()); // "off"
console.log(onOffFn()); // "on"
```

### Approach

- 看到 function 回傳 function，想到 closure
- 循環取值，可以用 % 取餘數

### Code Implementation

```javascript
export default function cycle(...values) {
  let index = 0;

  return () => {
    const value = values[index];
    index = (index + 1) % values.length;
    return value;
  };
}
```
