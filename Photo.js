class Photo {
  constructor({ src, x, y }) {
    this.src = src;
    this.height = src.height;
    this.width = src.width;
    this.x = x;
    this.y = y;
    this.type = "Image";
  }
}
