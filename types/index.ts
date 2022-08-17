export interface ICanvas {
  canvas: HTMLCanvasElement;
  objects: ILine[] | IPhoto[] | IRect[];
}

export interface IPoint {
  x: number;
  y: number;
}

export interface ILine {
  type: "Line";
  beginPoint: IPoint;
  endPoint: IPoint;
  lineWidth: number;
  strokeStyle: string;
}
export interface IPhoto
  extends Pick<IBase, "x" | "y" | "_draw" | "height" | "width"> {
  type: "Photo";
  src: HTMLImageElement;
}

export interface IRect extends IBase {
  type: "Rect";
}

export class IBase {
  x: number;
  y: number;
  height: number;
  width: number;
  _draw: (ctx: CanvasRenderingContext2D | null) => void;
  paddingX: number;
  paddingY: number;
  stored: boolean;
}

export type ITarget = IRect | IPhoto;

export type TObjects = Array<ITarget>;
