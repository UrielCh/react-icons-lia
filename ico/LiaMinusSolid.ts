import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MinusSolid icon from Icons8 Line Awesome
 * @module
 */
export function LiaMinusSolid(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 5 15 L 5 17 L 27 17 L 27 15 Z"}}]})(props);
}
export default LiaMinusSolid;
