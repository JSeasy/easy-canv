# 对 canvas 的封装

# [在线查看] (https://jseasy.github.io/easy-canv/dist/index.html)

# 简单示例

```js
import { EasyCanv, Rect } from "easy-canv";
const EasyCanv = new EasyCanv({
  el: ".canvasWrap",
  height: 550,
  width: 550,
  stored: true,
});
const rect = new Rect({
  x: 100,
  y: 100,
  height: 100,
  width: 100,
  fillStyle: "yellow",
});
EasyCanv.add(rect);
EasyCanv.render();
```
