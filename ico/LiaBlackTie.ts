import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BlackTie icon from Icons8 Line Awesome
 * @module
 */
export function LiaBlackTie(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 5 5 L 5 27 L 27 27 L 27 5 Z M 7 7 L 25 7 L 25 25 L 7 25 Z M 12 9 L 14.8125 12.625 L 12 20.375 L 16 24 L 20 20.375 L 17.1875 12.625 L 20 9 Z"}}]})(props);
}
export default LiaBlackTie;
