import { CusBox, CusButton, CusText, Flex } from 'components';
import Button from 'components/Button';
import { useNetWork } from 'hooks/useNetwork';
import { goBack, isCanGoBack } from 'navigation/NavigationService';
import React, { ReactNode } from 'react';
import { SpacingTheme } from 'themes/spacing';
import { ifIphoneX } from 'utils/dimension';

export type CusHeaderProps = {
  center?: string | boolean | ReactNode;
  left?: ReactNode | string | boolean;
  right?: ReactNode | boolean;
};

const CusHeader = (props: CusHeaderProps) => {
  const { netInfo } = useNetWork();
  const { center, left = true, right = true } = props;

  return (
    <CusBox
      bg="fgSuccess"
      height={50}
      alignItems="center"
      paddingHorizontal="l"
      flexDirection="row"
      mt={ifIphoneX<SpacingTheme>('xxl', 'none')}
    >
      <CusBox flex={1} flexDirection="row" alignItems="center" justifyContent="flex-start">
        {typeof left === 'boolean' && left && isCanGoBack() ? (
          <Button onPress={goBack} flexDirection="row" alignItems="center">
            <CusText variant="subheader" color="fgContrasting" opacity={0.9}>
              &#60;&nbsp;
            </CusText>
            <CusText variant="body" color="fgContrasting" opacity={0.9}>
              Back
            </CusText>
          </Button>
        ) : (
          left
        )}
      </CusBox>

      <CusBox flex={2} justifyContent="center" alignItems="center">
        {typeof center === 'string' ? (
          <CusText variant="body" color="fgContrasting" opacity={0.9} textAlign="center">
            {center}
          </CusText>
        ) : (
          center
        )}
      </CusBox>

      <CusBox flex={1} justifyContent="flex-end">
        {typeof right === 'boolean' ? (
          <Flex>
            <CusText variant="body" color="fgContrasting" opacity={0.9}>
              {netInfo?.isInternetReachable ? 'Online' : 'Offline'}
            </CusText>

            <CusButton label="KH" ml="m" labelProps={{ color: 'colorWhite' }} />
          </Flex>
        ) : (
          right
        )}
      </CusBox>
    </CusBox>
  );
};

export default CusHeader;
