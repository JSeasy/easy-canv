import { ITarget } from "../types";
import Line from "./Line";
import Rect from "./Rect";
class Control {
  target: ITarget;
  constructor(target: ITarget) {
    this.target = target;
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
    const rectWidth = 10;
    const halfRectWidth = rectWidth / 2;
    new Rect({
      x: x - halfRectWidth,
      y: y - halfRectWidth,
      height: rectWidth,
      width: rectWidth,
      fillStyle: "blue",
    }).draw(ctx);

    new Rect({
      x: x - halfRectWidth,
      y: y + height - halfRectWidth,
      height: rectWidth,
      width: rectWidth,
      fillStyle: "blue",
    }).draw(ctx);
    new Rect({
      x: x + width - halfRectWidth,
      y: y - halfRectWidth,
      height: rectWidth,
      width: rectWidth,
      fillStyle: "blue",
    }).draw(ctx);
    new Rect({
      x: x + width - halfRectWidth,
      y: y + height - halfRectWidth,
      height: rectWidth,
      width: rectWidth,
      fillStyle: "blue",
    }).draw(ctx);
  }
}

export default Control;
