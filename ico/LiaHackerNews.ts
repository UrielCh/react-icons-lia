import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * HackerNews icon from Icons8 Line Awesome
 * @module
 */
export function LiaHackerNews(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 5 5 L 5 27 L 27 27 L 27 5 Z M 7 7 L 25 7 L 25 25 L 7 25 Z M 11.5 11 L 15 17 L 15 22 L 17 22 L 17 17 L 20.5 11 L 18.5 11 L 16 15.28125 L 13.5 11 Z"}}]})(props);
}
export default LiaHackerNews;
