import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Hourglass icon from Icons8 Line Awesome
 * @module
 */
export function LiaHourglass(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 7 4 L 7 6 L 9 6 L 9 10 C 9 12.542969 10.367188 14.773438 12.40625 16 C 10.367188 17.226563 9 19.457031 9 22 L 9 26 L 7 26 L 7 28 L 25 28 L 25 26 L 23 26 L 23 22 C 23 19.457031 21.632813 17.226563 19.59375 16 C 21.632813 14.773438 23 12.542969 23 10 L 23 6 L 25 6 L 25 4 Z M 11 6 L 21 6 L 21 10 C 21 12.773438 18.773438 15 16 15 C 13.226563 15 11 12.773438 11 10 Z M 16 17 C 18.773438 17 21 19.226563 21 22 L 21 26 L 11 26 L 11 22 C 11 19.226563 13.226563 17 16 17 Z"}}]})(props);
}
export default LiaHourglass;
