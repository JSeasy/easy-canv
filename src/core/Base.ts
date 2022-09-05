import { IActiveScale } from "../types";

export default class Base {
  activeScale: IActiveScale;
  constructor() {
    this.activeScale = { scaleX: 1, scaleY: 1 };
  }
}
