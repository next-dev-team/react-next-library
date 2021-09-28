import { ThemeProvider as ShopifyThemeProvider } from '@shopify/restyle';
import type { FC } from 'react';
import React from 'react';
import type { AppTheme } from '..';
import { lightTheme } from '..';

const Provider: FC<{ theme?: AppTheme }> = ({ theme = lightTheme, children }) => {
  return <ShopifyThemeProvider theme={theme}>{children}</ShopifyThemeProvider>;
};

export default Provider;
