class Rect {
  constructor({ x, y, height, width, fillStyle }) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.fillStyle = fillStyle;
    this.type = "Rect";
  }
  _draw(ctx) {
    const { fillStyle, x, y, height, width } = this;
    ctx.fillStyle = fillStyle;
    ctx.fillRect(x, y, height, width);
  }
}
