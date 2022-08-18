import { IPoint } from "../types";

class Line {
  type: "Line";
  points: IPoint[];
  strokeStyle: string;
  lineWidth: number;
  constructor({ points, lineWidth, strokeStyle }: Omit<Line, "type" | "draw">) {
    this.type = "Line";
    this.points = points;
    this.strokeStyle = strokeStyle;
    this.lineWidth = lineWidth;
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.strokeStyle = this.strokeStyle;
    ctx.lineWidth = this.lineWidth;
    this.points.forEach((point, index) => {
      index === 0 && ctx.moveTo(point.x, point.y);
      index !== 0 && ctx.lineTo(point.x, point.y);
    });
    ctx.stroke();
  }
}

export default Line;
