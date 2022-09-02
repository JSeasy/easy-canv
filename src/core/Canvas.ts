import {
  IInitOptions,
  IPoint,
  ITarget,
  TController,
  TMouseAction,
  TObjects,
} from "../types";
import Control from "./Control";
import Line from "./Line";

class Canvas {
  canvas: HTMLCanvasElement | null;
  objects: TObjects;
  control: Control | null;
  activeObject: ITarget | null;
  ctx: CanvasRenderingContext2D | null;
  height: number;
  width: number;
  paddingX: number;
  paddingY: number;
  stored: boolean;
  controlType: TController;
  mouseActionType: TMouseAction;
  constructor({ el, height, width, stored = false }: IInitOptions) {
    this.canvas = null;
    this.objects = [];
    this.control = null;
    this.controlType = undefined;
    this.activeObject = null;
    this.paddingX = 0;
    this.paddingY = 0;
    this.height = height;
    this.width = width;
    this.stored = stored;
    this.ctx = null;

    this.mouseActionType = "up";
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

  // 获取在鼠标内的对象
  getOverMouseObject(offsetX: number, offsetY: number) {
    const filterObjects = this.objects.filter((object) =>
      this.isIncludesTheRange(offsetX, offsetY, object)
    );
    return filterObjects;
  }

  reset() {
    this.render();
    this.paddingX = 0;
    this.paddingY = 0;
    this.control = null;
    this.activeObject = null;
  }
  //绑定事件
  bindEvent() {
    const { canvas } = this;
    canvas!.addEventListener("mousedown", (e) => {
      this.mouseActionType = "dwon";
      const { offsetX, offsetY } = e;
      const activeObjects = this.getOverMouseObject(offsetX, offsetY);
      if (!activeObjects.length) {
        !this.controlType && this.reset();

        return;
      }

      this.activeObject = activeObjects.at(-1) as ITarget;
      this.drawControl(this.activeObject);
      this.paddingX = offsetX - this.activeObject.x;
      this.paddingY = offsetY - this.activeObject.y;
    });

    canvas!.addEventListener("mousemove", (e) => {
      const { offsetX, offsetY } = e;

      if (this.mouseActionType === "up" || !this.activeObject) {
        this.changeTheCursorStyle(e);
        return;
      }

      if (this.controlType) {
        const { x, y } = this.getStartPosition(
          this.activeObject,
          this.controlType
        )!;

        const diffScaleX = (2 * (offsetX - x)) / x;
        const diffScaleY = (2 * (offsetY - y)) / y;

        this.activeObject.scaleX = this.activeObject.scaleX! + diffScaleX;
        this.activeObject.scaleY = this.activeObject.scaleY! + diffScaleY;
        // this.activeObject.x =
        // this.activeObject.y = this.activeObject.scaleY! + 2 * diffScaleY;
        if (this.controlType === "tr") {
        }
        // if (this.controlType === "tl") {
        // }
        // if (this.controlType === "bl") {
        // }

        this.render();
        this.drawControl(this.activeObject);
        console.log(this.activeObject);
        return;
      }
      this.activeObject.x = offsetX - this.paddingX;
      this.activeObject.y = offsetY - this.paddingY;
      this.render();
      this.drawControl(this.activeObject);
      this.drawHelpLine();
    });
    document.addEventListener("mouseup", (e) => {
      this.mouseActionType = "up";
    });
  }
  getStartPosition(activeObject: ITarget, type: TController): IPoint | void {
    if (type === "tr") {
      return {
        x: activeObject.x + activeObject.width * activeObject.scaleX!,
        y: activeObject.y,
      };
    }
    if (type === "br") {
      return {
        x: activeObject.x + activeObject.width * activeObject.scaleX!,
        y: activeObject.y + activeObject.height * activeObject.scaleY!,
      };
    }
    if (type === "bl") {
      return {
        x: activeObject.x,
        y: activeObject.y + activeObject.height * activeObject.scaleY!,
      };
    }
    if (type === "tl") {
      return {
        x: activeObject.x,
        y: activeObject.y,
      };
    }
  }
  changeTheCursorStyle(e: MouseEvent) {
    const { offsetX, offsetY } = e;
    const activeObjects = this.getOverMouseObject(offsetX, offsetY);
    activeObjects.length
      ? this.setCursorStyle("pointer")
      : this.setCursorStyle("auto");
    this.control && this.changeTheControlMouseStyle(offsetX, offsetY);
  }
  changeTheControlMouseStyle(offsetX: number, offsetY: number) {
    const { tr, tl, br, bl } = this.control!;
    if (this.isIncludesTheRange(offsetX, offsetY, tr!)) {
      this.controlType = "tr";
      this.setCursorStyle("ne-resize");
      return;
    }
    if (this.isIncludesTheRange(offsetX, offsetY, tl!)) {
      this.controlType = "tl";
      this.setCursorStyle("pointer");
      return;
    }
    if (this.isIncludesTheRange(offsetX, offsetY, br!)) {
      this.controlType = "br";
      this.setCursorStyle("ne-resize");
      return;
    }
    if (this.isIncludesTheRange(offsetX, offsetY, bl!)) {
      this.controlType = "bl";
      this.setCursorStyle("ne-resize");
      return;
    }
    this.controlType = undefined;
  }

  setCursorStyle(type: string) {
    this.canvas!.style.cursor = type;
  }
  setCenter(target: ITarget) {
    const centerX = this.width / 2;
    const centerY = this.height / 2;
    target.x = centerX - target.width / 2;
    target.y = centerY - target.height / 2;
  }
  drawHelpLine() {
    if (this.isCenterY()) {
      new Line({
        points: [
          { x: 0, y: this.height / 2 },
          { x: this.width, y: this.height / 2 },
        ],
        lineWidth: 0.5,
        strokeStyle: "red",
      }).draw(this.ctx!);
    }
    if (this.isCenterX()) {
      new Line({
        points: [
          { x: this.width / 2, y: 0 },
          { x: this.width / 2, y: this.height },
        ],
        lineWidth: 0.5,
        strokeStyle: "red",
      }).draw(this.ctx!);
    }
  }
  isCenterY() {
    const halfHeight = this.height / 2;
    const centerPositionY =
      this.activeObject!.y + this.activeObject!.height / 2;
    if (halfHeight - 1 < centerPositionY && centerPositionY < halfHeight + 1) {
      return true;
    } else {
      return false;
    }
  }
  isCenterX() {
    const halfWidth = this.width / 2;
    const centerPositionX = this.activeObject!.x + this.activeObject!.width / 2;
    if (halfWidth - 1 < centerPositionX && centerPositionX < halfWidth + 1) {
      return true;
    } else {
      return false;
    }
  }

  drawControl(target: ITarget) {
    const control = new Control(target);
    control.draw(this.ctx!);
    this.control = control;
  }

  isIncludesTheRange(
    offsetX: number,
    offsetY: number,
    { x, y, height, width, scaleX, scaleY }: ITarget
  ) {
    return (
      offsetX > x &&
      offsetX < x + width * scaleX! &&
      offsetY < y + height * scaleY! &&
      offsetY > y
    );
  }

  add(target: ITarget) {
    this.objects.push(target);
  }
  draw(item: ITarget) {
    const { ctx } = this;
    item.draw(ctx!);
  }

  clear() {
    const { height, width } = this.canvas!;
    this.ctx!.fillStyle = "white";
    this.ctx!.fillRect(0, 0, height, width);
  }
  render() {
    this.clear();
    this.objects.forEach((item) => {
      this.draw(item);
    });
  }
}

export default Canvas;
