# 对 canvas 的封装

[在线查看](https://jseasy.github.io/easy-canv/dist/index.html)

# 简单示例

```Typescript
import { EasyCanv, Rect, Photo } from "easy-canv";
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

const img = new Image();
img.src =
  "https://image.s2bdiy.com/1200/r2j4HsirJE1660785264486_1200.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_1000,h_1000/auto-orient,0/quality,Q_100";
img.onload = () => {
  const photo = new Photo({
    src: img,
    x: 100,
    y: 200,
    width: 100,
    height: 200,
  });
  EasyCanv.add(photo);
  EasyCanv.add(rect);
  EasyCanv.render();
};
```
### todo
- 控制元素旋转缩放
- 撤销恢复
- 添加文本
- 添加动画
- 从数据恢复canvas
- 添加元素间辅助线
- 元素图层上下移动
- 无限拖拽,canvas放大缩小

