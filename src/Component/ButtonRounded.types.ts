import type { GestureResponderEvent, TextStyle, ViewStyle } from "react-native";

export type Styles = {
    containerButton: (width?: number, height?: number) => ViewStyle;
    text: TextStyle
}

export type Props = {
    disabled?: boolean;
    color?: string;
    buttonStyles?: ViewStyle;
    textStyles?: TextStyle;
    accessibilityLabel?: string;
    children?: React.ReactNode;
    width?: number;
    height?: number;
    onPress: (event: GestureResponderEvent) => void;
}