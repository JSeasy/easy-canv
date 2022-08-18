import { ITarget } from "../types";
import Line from "./Line";
import Rect from "./Rect";
class Control {
  target: ITarget;
  tr: Rect | null;
  tl: Rect | null;
  br: Rect | null;
  bl: Rect | null;
  constructor(target: ITarget) {
    this.target = target;
    this.tr = null;
    this.tl = null;
    this.br = null;
    this.bl = null;
  }
  draw(ctx: CanvasRenderingContext2D) {
    this.drawBoder(ctx);
    this.drawRect(ctx);
  }
  drawBoder(ctx: CanvasRenderingContext2D) {
    const { x, y, height, width } = this.target;
    new Line({
      points: [
        { x, y },
        { x: x + width, y: y },
        { x: x + width, y: y + height },
        { x, y: y + height },
        { x, y },
      ],
      strokeStyle: "red",
      lineWidth: 2,
    }).draw(ctx);
  }
  drawRect(ctx: CanvasRenderingContext2D) {
    const { x, y, height, width } = this.target;
    const rectWidth = 15;
    const halfRectWidth = rectWidth / 2;
    this.tr = new Rect({
      x: x - halfRectWidth,
      y: y - halfRectWidth,
      height: rectWidth,
      width: rectWidth,
      fillStyle: "blue",
    });
    this.tl = new Rect({
      x: x - halfRectWidth,
      y: y + height - halfRectWidth,
      height: rectWidth,
      width: rectWidth,
      fillStyle: "blue",
    });
    this.br = new Rect({
      x: x + width - halfRectWidth,
      y: y - halfRectWidth,
      height: rectWidth,
      width: rectWidth,
      fillStyle: "blue",
    });
    this.bl = new Rect({
      x: x + width - halfRectWidth,
      y: y + height - halfRectWidth,
      height: rectWidth,
      width: rectWidth,
      fillStyle: "blue",
    });
    this.tr.draw(ctx);
    this.tl.draw(ctx);
    this.br.draw(ctx);
    this.bl.draw(ctx);
  }
}

export default Control;
