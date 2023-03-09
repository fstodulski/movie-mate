import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { path } from 'ramda';

import type { Color } from './design-tokens/colors.models';
import tokens from './design-tokens/colors.token.json';

const extractCurlyBracesColor = (value: string) => {
  return value.replace('{', '').replace('}', '').split('.');
};

const getPath = (pathArr: Array<string>) => {
  try {
    return path(pathArr, tokens);
  } catch (e) {
    console.log();
  }
};

async function main() {
  const { core, text, border, background } = tokens.color as Color;

  const { base, neutral, blue, red, yellow, green } = core;

  const getObjectKeys = (group: any) =>
    Object.fromEntries(
      Object.entries(group).map(([k, v]) => {
        const hasRef = v.$value.includes('{');

        if (hasRef) {
          const dotPath = extractCurlyBracesColor(v.$value);
          const value = getPath(dotPath).$value;

          console.log(k, value);
          return [k, value];
        }

        return [k, v.$value];
      })
    );

  return {
    base: getObjectKeys(base),
    neutral: {
      default: getObjectKeys(neutral.default),
      lighten: getObjectKeys(neutral.lighten),
      darken: getObjectKeys(neutral.darken)
    },
    blue: getObjectKeys(blue),
    green: getObjectKeys(green),
    red: getObjectKeys(red),
    yellow: getObjectKeys(yellow),
    text: {
      default: {
        ...getObjectKeys(text.default)
      },
      action: {
        ...getObjectKeys(text.action)
      }
    },
    border: {
      default: {
        ...getObjectKeys(border.default.default)
      },
      muted: {
        ...getObjectKeys(border.default.muted)
      },
      strong: {
        ...getObjectKeys(border.default.strong)
      }
    },
    bg: {
      action: {
        primary: {
          ...getObjectKeys(background.action.primary)
        },
        error: {
          ...getObjectKeys(background.action.error)
        },
        success: {
          ...getObjectKeys(background.action.success)
        },
        caution: {
          ...getObjectKeys(background.action.caution)
        }
      },
      default: {
        muted: {
          ...getObjectKeys(background.default.muted)
        },
        strong: {
          ...getObjectKeys(background.default.strong)
        },
        default: {
          ...getObjectKeys(background.default.default)
        },
        elevated: {
          ...getObjectKeys(background.default.elevated)
        }
      }
    }
  };
}

main()
  .then((res) => {
    const path = `${__dirname}/out`;
    const name = 'colors.json';

    const isFolder = existsSync(path);

    if (!isFolder) mkdirSync(path, { recursive: true });

    writeFileSync(`${path}/${name}`, JSON.stringify(res), null);
  })
  .catch((e) => console.log(e));
