export interface Tokens {
  color: Color;
}

export interface Color {
  $type: string;
  core: Core;
  text: Text;
  border: Border;
  background: Background;
}

export interface Background {
  $description: string;
  default: BackgroundDefault;
  action: BackgroundAction;
}

export interface BackgroundAction {
  primary: CautionClass;
  error: CautionClass;
  success: CautionClass;
  caution: CautionClass;
}

export interface CautionClass {
  muted: Overlay;
  default: Overlay;
  strong: Overlay;
  light?: Overlay;
}

export interface Overlay {
  $description: string;
  $value: string;
}

export interface BackgroundDefault {
  muted: ElevatedClass;
  default: ElevatedClass;
  strong: ElevatedClass;
  elevated: ElevatedClass;
  overlay: Overlay;
}

export interface ElevatedClass {
  default: Overlay;
  alpha: Overlay;
}

export interface Border {
  $description: string;
  default: BorderDefault;
  action: BorderAction;
}

export interface BorderAction {
  primary: Overlay;
  error: Overlay;
}

export interface BorderDefault {
  muted: PurpleDefault;
  default: PurpleDefault;
  strong: PurpleDefault;
}

export interface PurpleDefault {
  default: Black;
  alpha: Overlay;
}

export interface Black {
  $value: string;
}

export interface Core {
  $description: string;
  base: Base;
  neutral: Neutral;
  blue: { [key: string]: Black };
  red: { [key: string]: Black };
  green: { [key: string]: Black };
  yellow: { [key: string]: Black };
}

export interface Base {
  white: Black;
  black: Black;
}

export interface Neutral {
  default: { [key: string]: Black };
  lighten: { [key: string]: Black };
  darken: { [key: string]: Black };
}

export interface Text {
  $description: string;
  default: CautionClass;
  action: TextAction;
}

export interface TextAction {
  primary: Overlay;
  error: Overlay;
  success: Overlay;
  caution: Overlay;
}
