import React from 'react';
import { Pressable, Text } from 'react-native';

import type { Props } from './ButtonRounded.types';
import styles from './ButtonRounded.styles';

const _getBgColor = (props: Props, pressed: boolean) => {
  if (props.disabled) {
    return '#C7C8CC';
  }

  if (pressed) {
    return '#146C94';
  }

  return props.color || '#19A7CE';
};

const AppButton: React.FC<Props> = (props: Props) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: _getBgColor(props, pressed),
        },
        styles.containerButton(props.width, props.height),
        props.buttonStyles,
      ]}
      disabled={props.disabled}
      onPress={props.onPress}
      accessible
      accessibilityLabel={props.accessibilityLabel || 'Rounded Button'}
    >
      <Text style={[styles.text, props.textStyles]}>
        {props.children || 'Press Me'}
      </Text>
    </Pressable>
  );
};

export default AppButton;
