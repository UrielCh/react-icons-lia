import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * EqualsSolid icon from Icons8 Line Awesome
 * @module
 */
export function LiaEqualsSolid(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 5 12 L 5 14 L 27 14 L 27 12 Z M 5 18 L 5 20 L 27 20 L 27 18 Z"}}]})(props);
}
export default LiaEqualsSolid;
