class Canvas {
  constructor(target, height, width) {
    this.canvas = null;
    this.objects = [];
    this.controls = [];
    this.activeObject = null;
    this.paddingX = 0;
    this.paddingY = 0;
    this.height = height;
    this.width = width;
    this.init(target);
    this.bindEvent();
  }
  init(target) {
    const canvasWrap = document.querySelector(target);
    const canvas = document.createElement("canvas");
    canvasWrap.appendChild(canvas);
    canvas.height = this.height;
    canvas.width = this.width;
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
  }
  //绑定事件
  bindEvent() {
    const { canvas } = this;
    canvas.addEventListener("mousedown", (e) => {
      const { offsetX, offsetY } = e;
      const filterObjects = this.objects.filter((object) =>
        this.isIncludesTheRange(offsetX, offsetY, object)
      );
      if (!filterObjects.length) return;
      this.activeObject =
        filterObjects.length === 1
          ? filterObjects[0]
          : filterObjects[filterObjects.length - 1];
      this.render();
      this.drawControl(this.activeObject);
      this.paddingX = offsetX - this.activeObject.x;
      this.paddingY = offsetY - this.activeObject.y;
    });

    canvas.addEventListener("mousemove", (e) => {
      if (!this.activeObject) return;
      const { offsetX, offsetY } = e;
      this.activeObject.x = offsetX - this.paddingX;
      this.activeObject.y = offsetY - this.paddingY;
      this.render();
      this.drawControl(this.activeObject);
    });
    document.addEventListener("mouseup", (e) => {
      this.activeObject && this.reset();
    });
  }
  reset() {
    this.activeObject = null;
    this.paddingX = 0;
    this.paddingY = 0;
  }
  drawControl(target) {
    console.log("this.asdas");
    const { x, y, height, width } = target;
    this.drawLine(
      {
        beginPoint: { x, y },
        endPoint: { x: x + width, y: y },
        lineWidth: 10,
        strokeStyle: "red",
      },
      this.ctx
    );
    this.drawLine(
      {
        beginPoint: { x, y },
        endPoint: { x: x, y: y + height },
        lineWidth: 10,
        strokeStyle: "red",
      },
      this.ctx
    );
    this.drawLine(
      {
        beginPoint: { x: x + width, y },
        endPoint: { x: x + width, y: y + height },
        lineWidth: 10,
        strokeStyle: "red",
      },
      this.ctx
    );
    this.drawLine(
      {
        beginPoint: { x, y: y + height },
        endPoint: { x: x + width, y: y + height },
        lineWidth: 10,
        strokeStyle: "red",
      },
      this.ctx
    );
  }

  isIncludesTheRange(offsetX, offsetY, { x, y, height, width }) {
    return (
      offsetX > x && offsetX < x + width && offsetY < y + height && offsetY > y
    );
  }

  add(target) {
    this.objects.push(target);
  }
  draw(item) {
    const { ctx } = this;
    item._draw(ctx);
  }
  // drawRect({ x, y, height, width, fillStyle }, ctx) {
  //   ctx.fillStyle = fillStyle;
  //   ctx.fillRect(x, y, height, width);
  // }
  // drawImage({ x, y, src }, ctx) {
  //   ctx.drawImage(src, x, y, src.width, src.height);
  // }
  drawLine({ beginPoint, endPoint, lineWidth, strokeStyle }, ctx) {
    ctx.beginPath();
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    ctx.moveTo(beginPoint.x, beginPoint.y);
    ctx.lineTo(endPoint.x, endPoint.y);
    ctx.stroke();
  }

  clear() {
    const { height, width } = this.canvas;
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, height, width);
  }
  render() {
    this.clear();
    this.objects.forEach((item) => {
      this.draw(item);
    });
  }
  upper(target) {}
  lower(target) {}
}
