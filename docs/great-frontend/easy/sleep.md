---
slug: /
---

:::info
[GreatFrontEnd Sleep](https://www.greatfrontend.com/questions/javascript/sleep)
:::

### Description

實現一個非同步的 sleep 函數，來模擬 Python 或 Java 中的 sleep 行為，但不會阻塞 JavaScript 主執行緒。目標是在 greeting 函數中延遲 2 秒後打印 "Bye."。

Example:

```javascript
async function greeting() {
  console.log("Hello!");
  await sleep(2000);
  console.log("Bye."); // Only logs after 2000 milliseconds (2 seconds)
}

greeting();
// t = 0: Hello!
// t = 2000: Bye.
```

### Approach

看到 `await` 或 `then` 關鍵字，就知道這題是考非同步的寫法。

1. 用 Promise 跟 setTimeout 實現 sleep 函數

### Code Implementation

```javascript
export default async function sleep(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}
```

### Reflection

複習 Promise 的用法，new Promise 接收一個 callback function，參數是 (resolve, reject)

### Reference

- [MDN Promise](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise)
