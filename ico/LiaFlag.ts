import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Flag icon from Icons8 Line Awesome
 * @module
 */
export function LiaFlag(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 5 5 L 5 29 L 7 29 L 7 19 L 15 19 L 15 22 L 27 22 L 27 8 L 17 8 L 17 5 Z M 7 7 L 15 7 L 15 17 L 7 17 Z M 17 10 L 25 10 L 25 20 L 17 20 Z"}}]})(props);
}
export default LiaFlag;
