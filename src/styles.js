import { css } from 'styled-components';

const deviceWidths = {
  medium: 500,
  big: 900
};

export const media = Object.keys(deviceWidths).reduce((result, device) => {
  result[device] = (...args) => css`
    @media (min-width: ${() => deviceWidths[device]}px) {
      ${css(args)}
    }
  `;

  return result;
}, {});
