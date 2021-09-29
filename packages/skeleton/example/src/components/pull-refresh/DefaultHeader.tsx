import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import SvgIcon from '../svg-icon';
import { PullRefreshHeaderProps, PullRefreshHeaderRef } from './type';

export const DefaultHeader = forwardRef<
  PullRefreshHeaderRef,
  PullRefreshHeaderProps & {
    pullDownText?: string;
    refreshingText?: string;
    releaseText?: string;
  }
>(
  (
    {
      refreshing,
      headerHeight,
      headerStyle,
      pullDownText = '下拉进行刷新',
      refreshingText = '正在刷新数据中...',
      releaseText = '释放立刻刷新',
    },
    ref,
  ) => {
    const [statePercent, setPercent] = useState(0);

    useEffect(() => {
      setPercent(+refreshing);
    }, [refreshing]);

    useImperativeHandle(ref, () => {
      return {
        setProgress,
      };
    });

    /** 必须要暴露出去 */
    const setProgress = ({ percent }: { percent: number }) => {
      setPercent(percent);
    };

    const { text, icon } = useMemo(() => {
      let text = pullDownText;
      let icon = <SvgIcon name="arrowdown" size={20} color="black" />;
      if (statePercent >= 1) {
        if (refreshing) {
          text = refreshingText;
          icon = <ActivityIndicator size={20} color="black" />;
        } else {
          text = releaseText;
        }
      }
      return {
        text,
        icon,
      };
    }, [pullDownText, refreshing, refreshingText, releaseText, statePercent]);

    const style = useAnimatedStyle(() => ({
      opacity: statePercent,
      transform: [
        {
          translateY: -(headerHeight ?? 0),
        },
      ],
    }));

    const iconStyle = useAnimatedStyle(() => {
      return {
        transform: [
          {
            rotate: statePercent >= 1 ? '180deg' : '0deg',
          },
        ],
      };
    });

    return (
      <Animated.View style={[styles.wrapper, { height: headerHeight }, style, headerStyle]}>
        <Animated.View style={iconStyle}>{icon}</Animated.View>
        <Text style={styles.title}>{text}</Text>
      </Animated.View>
    );
  },
);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginLeft: 10,
  },
});
