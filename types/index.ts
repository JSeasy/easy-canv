export interface ICanvas {
  canvas: HTMLCanvasElement;
  objects: ILine[] | IPhoto[] | IRect[];
}

export interface ILine {
  type: "Line";
}
export interface IPhoto extends Pick<IBase, "x" | "y" | "_draw"> {
  type: "Photo";
  src: HTMLImageElement;
}

export interface IRect extends IBase {
  type: "Rect";
}

class IBase {
  x: number;
  y: number;
  height: number;
  width: number;
  _draw: (ctx: CanvasRenderingContext2D | null) => void;
}

export type TObjects = Array<ITarget>;

export type ITarget = ILine | IRect | IPhoto;
