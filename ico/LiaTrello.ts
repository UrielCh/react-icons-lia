import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Trello icon from Icons8 Line Awesome
 * @module
 */
export function LiaTrello(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 5 5 L 5 27 L 27 27 L 27 5 Z M 7 7 L 15 7 L 15 21 L 7 21 Z M 17 7 L 25 7 L 25 16 L 17 16 Z"}}]})(props);
}
export default LiaTrello;
