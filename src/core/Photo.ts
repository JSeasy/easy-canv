import { IPOption } from "../types";
import Base from "./Base";

class Photo extends Base {
  src: HTMLImageElement;
  height: number;
  width: number;
  x: number;
  y: number;
  scaleX: number;
  scaleY: number;
  type: "Photo";
  constructor({ src, x = 0, y = 0, scaleX = 1, scaleY = 1 }: IPOption) {
    super();
    this.src = src;
    this.height = src.height;
    this.width = src.width;
    this.x = x;
    this.y = y;
    this.scaleX = scaleX;
    this.scaleY = scaleY;
    this.type = "Photo";
  }
  draw(ctx: CanvasRenderingContext2D) {
    const { src, x, y, scaleX, scaleY } = this;
    ctx.drawImage(src, x, y, src.width * scaleX!, src.height * scaleY!);
  }
}

export default Photo;
