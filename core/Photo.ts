import { IPhoto } from "../types";
class Photo implements IPhoto {
  src: HTMLImageElement;
  height: number;
  width: number;
  x: number;
  y: number;
  type: "Photo";
  constructor({ src, x, y }) {
    this.src = src;
    this.height = src.height;
    this.width = src.width;
    this.x = x;
    this.y = y;
    this.type = "Photo";
  }
  _draw(ctx) {
    const { src, x, y } = this;
    ctx.drawImage(src, x, y, src.width, src.height);
  }
}

export default Photo;
