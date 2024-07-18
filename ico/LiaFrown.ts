import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Frown icon from Icons8 Line Awesome
 * @module
 */
export function LiaFrown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 21.535156 6 26 10.464844 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 Z M 11.5 12 C 10.671875 12 10 12.671875 10 13.5 C 10 14.328125 10.671875 15 11.5 15 C 12.328125 15 13 14.328125 13 13.5 C 13 12.671875 12.328125 12 11.5 12 Z M 20.5 12 C 19.671875 12 19 12.671875 19 13.5 C 19 14.328125 19.671875 15 20.5 15 C 21.328125 15 22 14.328125 22 13.5 C 22 12.671875 21.328125 12 20.5 12 Z M 16 18 C 13.332031 18 10.980469 19.335938 9.53125 21.34375 L 11.15625 22.5 C 12.246094 20.984375 13.992188 20 16 20 C 18.007813 20 19.753906 20.984375 20.84375 22.5 L 22.46875 21.34375 C 21.019531 19.335938 18.667969 18 16 18 Z"}}]})(props);
}
export default LiaFrown;
