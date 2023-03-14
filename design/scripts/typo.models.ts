export interface Typography {
  font: Font;
}

export interface Font {
  family: Family;
  size: Size;
  weight: Weight;
  styles: Styles;
}

export interface Family {
  $type: string;
  primary: Primary;
}

export interface Primary {
  $value: string[];
}

export interface Size {
  '1': The1;
  '2': The1;
  '3': The1;
  '4': The1;
  '5': The1;
  '6': The1;
  '7': The1;
  '8': The1;
  '9': The1;
  '10': The1;
  '11': The1;
  '12': The1;
  '13': The1;
  '14': The1;
  $description: string;
  $type: string;
}

export interface The1 {
  $value: string;
}

export interface Styles {
  mobile: Desktop;
  desktop: Desktop;
}

export interface Desktop {
  heading: { [key: string]: Heading };
  text: Text;
}

export interface Heading {
  $type: Type;
  $value: Value;
}

export type Type = 'typography';

export interface Value {
  fontFamily: FontFamily;
  fontSize: string;
  fontWeight: FontWeight;
  lineHeight: string;
  letterSpacing?: LetterSpacing;
  textTransformation?: string;
}

export type FontFamily = '{font.family.primary}';

export type FontWeight =
  | '{font.weight.bold}'
  | '{font.weight.semibold}'
  | '{font.weight.medium}'
  | '{font.weight.normal}';

export type LetterSpacing = '0.07em' | '0.01em' | '0.005em' | '0.02em';

export interface Text {
  t400: T100;
  t300: T100;
  t200: T100;
  t100: T100;
}

export interface T100 {
  regular: Heading;
  medium: Heading;
  strong: Heading;
}

export interface Weight {
  $type: string;
  light: The1;
  normal: The1;
  medium: The1;
  semibold: The1;
  bold: The1;
}
