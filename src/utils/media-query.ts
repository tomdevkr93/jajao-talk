import { css } from 'styled-components';

type BreakPoint = {
  desktop: number;
  tablet: number;
};

export const sizes: BreakPoint = {
  desktop: 1366,
  tablet: 768,
};

type Media = {
  desktop: (arg: TemplateStringsArray) => ReturnType<typeof css>;
  tablet: (arg: TemplateStringsArray) => ReturnType<typeof css>;
};

const media: Media = Object.keys(sizes).reduce((acc: any, label: string) => {
  acc[label] = (args: TemplateStringsArray) => css`
    @media (min-width: ${(sizes as any)[label] / 16}em) {
      ${css(args)};
    }
  `;

  return acc;
}, {});

export default media;
