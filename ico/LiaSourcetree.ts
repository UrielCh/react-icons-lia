import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Sourcetree icon from Icons8 Line Awesome
 * @module
 */
export function LiaSourcetree(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 16 4 C 10.486 4 6 8.486 6 14 C 6 17.983 8.383 21.57725 12 23.15625 L 12 28 L 20 28 L 20 23.15625 C 23.617 21.57725 26 17.983 26 14 C 26 8.486 21.514 4 16 4 z M 16 6 C 20.411 6 24 9.589 24 14 C 24 17.377 21.856016 20.404156 18.666016 21.535156 L 18 21.769531 L 18 26 L 14 26 L 14 21.769531 L 13.333984 21.533203 C 10.143984 20.403203 8 17.377 8 14 C 8 9.589 11.589 6 16 6 z M 16 10 C 13.794 10 12 11.794 12 14 C 12 16.206 13.794 18 16 18 C 18.206 18 20 16.206 20 14 C 20 11.794 18.206 10 16 10 z M 16 12 C 17.103 12 18 12.897 18 14 C 18 15.103 17.103 16 16 16 C 14.897 16 14 15.103 14 14 C 14 12.897 14.897 12 16 12 z"}}]})(props);
}
export default LiaSourcetree;
