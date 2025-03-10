import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Patreon icon from Icons8 Line Awesome
 * @module
 */
export function LiaPatreon(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 4 4 L 4 28 L 11 28 L 11 4 L 4 4 z M 21.5 4 C 16.813 4 13 7.813 13 12.5 C 13 17.187 16.813 21 21.5 21 C 26.187 21 30 17.187 30 12.5 C 30 7.813 26.187 4 21.5 4 z M 6 6 L 9 6 L 9 26 L 6 26 L 6 6 z M 21.5 6 C 25.084 6 28 8.916 28 12.5 C 28 16.084 25.084 19 21.5 19 C 17.916 19 15 16.084 15 12.5 C 15 8.916 17.916 6 21.5 6 z"}}]})(props);
}
export default LiaPatreon;
