import Photo from "../core/Photo";
import Rect from "../core/Rect";
import Line from "../core/Line";

export interface IPoint {
  x: number;
  y: number;
}

export interface IBase {
  x: number;
  y: number;
  height: number;
  width: number;
}

export type ITarget = Rect | Photo;

export type TObjects = Array<ITarget>;

export interface IInitOptions {
  el: string;
  height: number;
  width: number;
  stored?: boolean;
}

