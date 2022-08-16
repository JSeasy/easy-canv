class Photo {
  constructor({ src, x, y }) {
    this.src = src;
    this.height = src.height;
    this.width = src.width;
    this.x = x;
    this.y = y;
    this.type = "Image";
  }
  _draw(ctx) {
    const { src, x, y } = this;
    ctx.drawImage(src, x, y, src.width, src.height);
  }
}
