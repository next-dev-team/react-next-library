import type { ViewStyle } from 'react-native';
import type { ColorsTheme } from './colors';
import type { SpacingTheme } from './spacing';

type BaseResponsive = {
  phone?: SpacingTheme;
  tablet?: SpacingTheme;
};

type RestStyle = Omit<ViewStyle, 'padding' | 'color' | 'margin'> & {
  color?: ColorsTheme;
  padding?: BaseResponsive;
  margin?: BaseResponsive;
  [key: string]: any;
};

type CreateStyle = Record<string, RestStyle>;

export function createStyle<T extends CreateStyle>(obj: T) {
  return obj;
}
