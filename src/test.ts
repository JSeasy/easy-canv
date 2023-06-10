import { Canvas, Line, Rect, Photo } from "./index";

const canv = new Canvas({
  el: ".canvasWrap",
  height: 550,
  width: 550,
  stored: true,
});

document.querySelector("#addRect")?.addEventListener("click", () => {
  const rect = new Rect({
    x: 100,
    y: 100,
    height: 100,
    width: 100,
    fillStyle: "yellow",
  });
  canv.add(rect);
  canv.render();
});

document.querySelector("#addPhoto")?.addEventListener("click", () => {
  const img = new Image();
  img.src =
    "https://image.s2bdiy.com/1200/r2j4HsirJE1660785264486_1200.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_1000,h_1000/auto-orient,0/quality,Q_100";
  img.onload = () => {
    const photo = new Photo({
      src: img,
      x: 100,
      y: 200,
      scaleX: 0.5,
      scaleY: 0.5,
    });
    canv.add(photo);
    canv.render();
  };
});

document.querySelector("#goForward")?.addEventListener("click", () => {
  const { activeObject } = canv;
  canv.goForward(activeObject!);
});
document.querySelector("#goBackward")?.addEventListener("click", () => {
  const { activeObject } = canv;
  canv.goBackward(activeObject!);
});

document.querySelector("#setTransition")?.addEventListener("click", () => {
  const { ctx } = canv;
  const { a } = ctx?.getTransform()!;
  ctx?.setTransform(a + 1, 0, 0, a + 1, -136 * a, -136 * a);
  canv.render();
});
