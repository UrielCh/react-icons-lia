import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Uikit icon from Icons8 Line Awesome
 * @module
 */
export function LiaUikit(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M22.2 6.7L17.9 9.2 23 12.1 23 19.9 16 24 9 19.9 9 14.4 5 12 5 22.5 16 29 27 22.5 27 9.5zM20.2 5.5L16 3 11.8 5.5 16 8z"}}]})(props);
}
export default LiaUikit;
