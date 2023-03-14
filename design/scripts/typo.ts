import tokens from '../design-tokens/typography.token.json';
import type { FontSizeConfig } from './tailwind.models';
import type { Typography } from './typo.models';

async function typToTailwind(): Promise<{ fontSize: FontSizeConfig }> {
  const { font } = tokens as Typography;
  const { styles } = font;

  const { desktop, mobile } = styles;

  const textStyles = Object.fromEntries(
    Object.entries(mobile.text).map(([key, value]) => {
      const textSizes = Object.fromEntries(
        Object.entries(mobile.text[key]).map(([subKey, subValue]) => {
          return [subKey, subValue.$value];
        })
      );

      return [key, textSizes];
    })
  );

  const types = Object.fromEntries(
    Object.entries(textStyles).map(([tKey, tValue]) => {
      const sizesInside = Object.fromEntries(
        Object.entries(tValue).map(([sKey, sValue]) => {
          return sValue;
        })
      );

      return [tKey, sizesInside];
    })
  );

  console.log(types);

  return {
    fontSize: {}
  };
}

typToTailwind()
  .then((res) => {
    console.log(res);
  })
  .catch((e) => console.log(e));
