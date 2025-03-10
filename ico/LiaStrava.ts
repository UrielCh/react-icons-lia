import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Strava icon from Icons8 Line Awesome
 * @module
 */
export function LiaStrava(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 14.179688 2 L 5.9003906 18 L 10.779297 18 L 14.179688 11.619141 L 17.560547 18 L 22.400391 18 L 14.179688 2 z M 22.400391 18 L 20 22.789062 L 17.560547 18 L 13.859375 18 L 20 30 L 26.099609 18 L 22.400391 18 z"}}]})(props);
}
export default LiaStrava;
