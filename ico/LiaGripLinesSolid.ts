import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * GripLinesSolid icon from Icons8 Line Awesome
 * @module
 */
export function LiaGripLinesSolid(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 3 11 L 3 13 L 29 13 L 29 11 L 3 11 z M 3 19 L 3 21 L 29 21 L 29 19 L 3 19 z"}}]})(props);
}
export default LiaGripLinesSolid;
