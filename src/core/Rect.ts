import Base from "./Base";

class Rect extends Base {
  x: number;
  y: number;
  height: number;
  width: number;
  fillStyle: string;
  scaleX?: number;
  scaleY?: number;
  type: "Rect";
  constructor({ x, y, height, width, fillStyle, scaleX = 1, scaleY = 1 }: any) {
    super();
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.fillStyle = fillStyle;
    this.scaleX = scaleX;
    this.scaleY = scaleY;
    this.type = "Rect";
  }
  draw(ctx: CanvasRenderingContext2D) {
    const { fillStyle, x, y, height, width, scaleX, scaleY } = this;
    ctx.fillStyle = fillStyle;
    ctx.fillRect(x, y, width * scaleX!, height * scaleY!);
  }
}

export default Rect;
