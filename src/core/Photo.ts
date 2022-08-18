class Photo {
  src: HTMLImageElement;
  height: number;
  width: number;
  x: number;
  y: number;
  type: "Photo";

  constructor({ src, x, y }: Omit<Photo, "type" | "draw">) {
    this.src = src;
    this.height = src.height;
    this.width = src.width;
    this.x = x;
    this.y = y;
    this.type = "Photo";
  }
  draw(ctx: CanvasRenderingContext2D) {
    const { src, x, y } = this;
    ctx.drawImage(src, x, y, src.width, src.height);
  }
}

export default Photo;
