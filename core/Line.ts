import { ILine } from "../types";

class Line implements ILine {
  type: "Line";
  constructor(options) {
    this.type = "Line";
  }
}

export default Line;
