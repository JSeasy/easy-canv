import { IBase, IInitOptions, ITarget, TObjects } from "../types";
import Line from "./Line";

class Canvas {
  canvas: HTMLCanvasElement | null;
  objects: TObjects;
  controls: [];
  redo: TObjects[];
  undo: TObjects[];
  activeObject: ITarget | null;
  ctx: CanvasRenderingContext2D | null;
  height: number;
  width: number;
  paddingX: number;
  paddingY: number;
  stored: boolean;
  constructor({ el, height, width, stored = false }: IInitOptions) {
    this.canvas = null;
    this.objects = [];
    this.controls = [];
    this.redo = [];
    this.undo = [];
    this.activeObject = null;
    this.paddingX = 0;
    this.paddingY = 0;
    this.height = height;
    this.width = width;
    this.stored = stored;
    this.ctx = null;
    this.init(el);
    this.bindEvent();
  }
  init(el: string) {
    const canvasWrap = document.querySelector(el);
    const canvas = document.createElement("canvas");
    canvasWrap && canvasWrap.appendChild(canvas);
    canvas.height = this.height;
    canvas.width = this.width;
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
  }
  //绑定事件
  bindEvent() {
    const { canvas } = this;
    canvas!.addEventListener("mousedown", (e) => {
      const { offsetX, offsetY } = e;
      const filterObjects = this.objects.filter((object) =>
        this.isIncludesTheRange(offsetX, offsetY, object)
      );
      if (!filterObjects.length) {
        this.render();
        return;
      }
      this.activeObject =
        filterObjects.length === 1
          ? filterObjects[0]
          : filterObjects[filterObjects.length - 1];
      this.render();
      this.drawControl(this.activeObject);
      this.paddingX = offsetX - this.activeObject.x;
      this.paddingY = offsetY - this.activeObject.y;
    });

    canvas!.addEventListener("mousemove", (e) => {
      if (!this.activeObject) return;
      const { offsetX, offsetY } = e;
      this.activeObject.x = offsetX - this.paddingX;
      this.activeObject.y = offsetY - this.paddingY;
      this.render();
      this.drawControl(this.activeObject);
      this.drawHelpLine();
    });
    document.addEventListener("mouseup", (e) => {
      this.activeObject && this.reset();
      this.activeObject && this.stored && this.save();
    });
    canvas!.addEventListener("contextmenu", (e) => {
      if (this.activeObject) {
        console.log(123);
      }
      e.preventDefault();
    });
  }
  setCenter(target: ITarget) {
    const centerX = this.width / 2;
    const centerY = this.height / 2;
    target.x = centerX - target.width / 2;
    target.y = centerY - target.height / 2;
  }
  drawHelpLine() {
    if (this.isCenterY()) {
      this.drawLine(
        {
          beginPoint: { x: 0, y: this.height / 2 },
          endPoint: { x: this.width, y: this.height / 2 },
          lineWidth: 0.5,
          strokeStyle: "red",
        },
        this.ctx!
      );
    }
    if (this.isCenterX()) {
      this.drawLine(
        {
          beginPoint: { x: this.width / 2, y: 0 },
          endPoint: { x: this.width / 2, y: this.height },
          lineWidth: 0.5,
          strokeStyle: "red",
        },
        this.ctx!
      );
    }
  }
  isCenterY() {
    const halfHeight = this.height / 2;
    const centerPositionY =
      this.activeObject!.y + this.activeObject!.height / 2;
    if (halfHeight - 2 < centerPositionY && centerPositionY < halfHeight + 2) {
      return true;
    } else {
      return false;
    }
  }
  isCenterX() {
    const halfWidth = this.width / 2;
    const centerPositionX = this.activeObject!.x + this.activeObject!.width / 2;
    if (halfWidth - 2 < centerPositionX && centerPositionX < halfWidth + 2) {
      return true;
    } else {
      return false;
    }
  }
  save() {
    this.redo.push(this.objects);
  }
  reset() {
    this.activeObject = null;
    this.paddingX = 0;
    this.paddingY = 0;
  }
  drawControl(target: ITarget) {
    const { x, y, height, width } = target;
    this.drawLine(
      {
        beginPoint: { x, y },
        endPoint: { x: x + width, y: y },
        lineWidth: 2,
        strokeStyle: "red",
      },
      this.ctx!
    );
    this.drawLine(
      {
        beginPoint: { x, y },
        endPoint: { x: x, y: y + height },
        lineWidth: 2,
        strokeStyle: "red",
      },
      this.ctx!
    );
    this.drawLine(
      {
        beginPoint: { x: x + width, y },
        endPoint: { x: x + width, y: y + height },
        lineWidth: 2,
        strokeStyle: "red",
      },
      this.ctx!
    );
    this.drawLine(
      {
        beginPoint: { x, y: y + height },
        endPoint: { x: x + width, y: y + height },
        lineWidth: 2,
        strokeStyle: "red",
      },
      this.ctx!
    );
  }

  isIncludesTheRange(
    offsetX: number,
    offsetY: number,
    { x, y, height, width }: IBase
  ) {
    return (
      offsetX > x && offsetX < x + width && offsetY < y + height && offsetY > y
    );
  }

  add(target: ITarget) {
    this.objects.push(target);
  }
  draw(item: ITarget) {
    const { ctx } = this;
    item._draw(ctx!);
  }
  drawLine(
    { beginPoint, endPoint, lineWidth, strokeStyle }: Omit<Line, "type">,
    ctx: CanvasRenderingContext2D
  ) {
    ctx.beginPath();
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    ctx.moveTo(beginPoint.x, beginPoint.y);
    ctx.lineTo(endPoint.x, endPoint.y);
    // ctx.setLineDash([5, 10]);
    ctx.stroke();
  }

  clear() {
    const { height, width } = this.canvas!;
    this.ctx!.fillStyle = "white";
    this.ctx!.fillRect(0, 0, height, width);
  }
  render() {
    this.clear();
    this.objects.forEach((item) => {
      console.log("123");
      this.draw(item);
    });
  }
  // upper(target) {}
  // lower(target) {}
}

export default Canvas;
