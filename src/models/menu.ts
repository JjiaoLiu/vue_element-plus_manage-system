import {RouteMeta} from "vue-router";

export interface IMenuItem {
  label: string;
  icon?: any;
  key: string;
  rightSlotName?: any;
  rightIcon?: any;
  meta?: RouteMeta;
}
export interface IMenu {
  label?: string;
  key?: string;
  menu: IMenuItem[];
  rightSlotName?: any;
}
