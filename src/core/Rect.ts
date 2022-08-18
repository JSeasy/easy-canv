class Rect {
  x: number;
  y: number;
  height: number;
  width: number;
  fillStyle: string;
  type: "Rect";
  constructor({ x, y, height, width, fillStyle }: Omit<Rect, "type" | "draw">) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.fillStyle = fillStyle;
    this.type = "Rect";
  }
  draw(ctx: CanvasRenderingContext2D) {
    const { fillStyle, x, y, height, width } = this;
    ctx.fillStyle = fillStyle;
    ctx.fillRect(x, y, height, width);
  }
}

export default Rect;
