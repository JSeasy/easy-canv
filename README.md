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

- :triangular_flag_on_post: 控制元素旋转~~缩放删除~~
- :triangular_flag_on_post: 撤销恢复
- :triangular_flag_on_post: 添加文本
- :triangular_flag_on_post: 添加动画
- :triangular_flag_on_post: 从数据恢复 canvas
- :triangular_flag_on_post:添加元素间辅助线
- :white_check_mark:元素图层上下移动
- :triangular_flag_on_post:无限拖拽,canvas 放大缩小
