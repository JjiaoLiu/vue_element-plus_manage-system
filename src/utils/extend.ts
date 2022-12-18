import { useNumberFormat } from "./number";
import dayjs from "dayjs";
import {
  first,
  last,
  sample,
  sampleSize,
  chunk,
  parseInt,
  trimEnd,
} from "lodash";

declare global {
  interface Array<T> {
    first<T>(this: T[]): T
    last<T>(this: T[]): T;
    sample<T>(this: T[]): T;
    sampleSize<T>(this: T[], size: number): T[];
    chunk<T>(this: T[], size: number): T[][];
  }
  interface String {
    toInt(this: string): number;
    trimEnd(this: string, chars?: string): string;
  }
  interface Number {
    toDate(this: number, formate?: string): string;
    numberFormat(this: number): string | number;
  }
}

Array.prototype.first = function <T>(this: T[]): T {
  return first<T>(this) as T;
};
Array.prototype.last = function <T>(this: T[]): T {
  return last<T>(this) as T;
};
Array.prototype.sample = function <T>(this: T[]): T {
  return sample<T>(this) as T;
};
Array.prototype.sampleSize = function <T>(this: T[], size: number): T[] {
  return sampleSize<T>(this, size) as T[];
};
Array.prototype.chunk = function <T>(this: T[], size: number): T[][] {
  return chunk<T>(this, size) as T[][];
};
String.prototype.toInt = function (this: string): number {
  return parseInt(this);
};
String.prototype.trimEnd = function (this: string, chars?: string): string {
  return trimEnd(this, chars);
};
Number.prototype.toDate = function (this: number, formate?: string): string {
  return dayjs(this).format(formate);
};
Number.prototype.numberFormat = function (this: number): string | number {
  return useNumberFormat(this);
};
