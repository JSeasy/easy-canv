import { IPoint } from "../types";

class Line {
  type: "Line";
  endPoint: IPoint;
  beginPoint: IPoint;
  strokeStyle: string;
  lineWidth: number;
  constructor({
    endPoint,
    beginPoint,
    lineWidth,
    strokeStyle,
  }: Omit<Line, "type">) {
    this.type = "Line";
    this.endPoint = endPoint;
    this.beginPoint = beginPoint;
    this.strokeStyle = strokeStyle;
    this.lineWidth = lineWidth;
  }
}

export default Line;
