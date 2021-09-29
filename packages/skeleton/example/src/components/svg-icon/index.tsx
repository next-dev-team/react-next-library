/* tslint:disable */
/* eslint-disable */

import React, { FC } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconArrowdown from './IconArrowdown';
import IconBells from './IconBells';
import IconCheck from './IconCheck';
import IconCheckcircle from './IconCheckcircle';
import IconCheckcircleo from './IconCheckcircleo';
import IconClockcircleo from './IconClockcircleo';
import IconClose from './IconClose';
import IconClosecircleo from './IconClosecircleo';
import IconDate from './IconDate';
import IconDown from './IconDown';
import IconEllipsis from './IconEllipsis';
import IconEyeclose from './IconEyeclose';
import IconEyeopen from './IconEyeopen';
import IconLeft from './IconLeft';
import IconMinus from './IconMinus';
import IconPlus from './IconPlus';
import IconRadioChecked from './IconRadioChecked';
import IconRadioUnchecked from './IconRadioUnchecked';
import IconReload from './IconReload';
import IconRight from './IconRight';
import IconSearch from './IconSearch';
import IconUp from './IconUp';
import IconUser from './IconUser';

export type IconNames =
  | 'arrowdown'
  | 'bells'
  | 'check'
  | 'checkcircle'
  | 'checkcircleo'
  | 'clockcircleo'
  | 'close'
  | 'closecircleo'
  | 'date'
  | 'down'
  | 'ellipsis'
  | 'eyeclose'
  | 'eyeopen'
  | 'left'
  | 'minus'
  | 'plus'
  | 'radio-checked'
  | 'radio-unchecked'
  | 'reload'
  | 'right'
  | 'search'
  | 'up'
  | 'user';

export interface SvgIconProps extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let SvgIcon: FC<SvgIconProps> = ({ name, ...rest }) => {
  switch (name) {
    case 'arrowdown':
      return <IconArrowdown {...rest} />;
    case 'bells':
      return <IconBells {...rest} />;
    case 'check':
      return <IconCheck {...rest} />;
    case 'checkcircle':
      return <IconCheckcircle {...rest} />;
    case 'checkcircleo':
      return <IconCheckcircleo {...rest} />;
    case 'clockcircleo':
      return <IconClockcircleo {...rest} />;
    case 'close':
      return <IconClose {...rest} />;
    case 'closecircleo':
      return <IconClosecircleo {...rest} />;
    case 'date':
      return <IconDate {...rest} />;
    case 'down':
      return <IconDown {...rest} />;
    case 'ellipsis':
      return <IconEllipsis {...rest} />;
    case 'eyeclose':
      return <IconEyeclose {...rest} />;
    case 'eyeopen':
      return <IconEyeopen {...rest} />;
    case 'left':
      return <IconLeft {...rest} />;
    case 'minus':
      return <IconMinus {...rest} />;
    case 'plus':
      return <IconPlus {...rest} />;
    case 'radio-checked':
      return <IconRadioChecked {...rest} />;
    case 'radio-unchecked':
      return <IconRadioUnchecked {...rest} />;
    case 'reload':
      return <IconReload {...rest} />;
    case 'right':
      return <IconRight {...rest} />;
    case 'search':
      return <IconSearch {...rest} />;
    case 'up':
      return <IconUp {...rest} />;
    case 'user':
      return <IconUser {...rest} />;

    default:
      return null;
  }
};

SvgIcon = React.memo ? React.memo(SvgIcon) : SvgIcon;

export default SvgIcon;
