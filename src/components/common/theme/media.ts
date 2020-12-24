// @ts-nocheck
import { css } from "styled-components";

export interface Sizes {
  uhd: number;
  widescreen: number;
  desktop: number;
  tablet: number;
}
const sizes = {
  uhd: 1980,
  widescreen: 1366,
  desktop: 1024,
  tablet: 768,
};
// source: https://tobbelindstrom.com/blog/how-to-create-a-breakpoint-mixin-with-styled-components/
export default Object.keys(sizes).reduce((acc: any, label: string) => {
  acc[label] = (...args: any) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
