import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SquareSolid icon from Icons8 Line Awesome
 * @module
 */
export function LiaSquareSolid(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 6 6 L 6 26 L 26 26 L 26 6 L 6 6 z"}}]})(props);
}
export default LiaSquareSolid;
