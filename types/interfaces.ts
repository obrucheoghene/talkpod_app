import React, { ReactNode } from "react";
import { ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";

export interface Meeting {
    id: string,
    title: string
    status: string
    time: string,
    date: string,
}

export type theme = 'dark' | 'light';


export interface ViewContainerProps {
    style?: ViewStyle
    children: ReactNode,
}

export interface OnboardingSlideProps {
    id: number,
    Svg: any,
    text: string,
}

export enum AppFonts {
    'Urbanist-Bold',
    'Urbanist-Light',
    'Urbanist-Medium',
    'Urbanist-Regular',
    'Urbanist-SemiBold'
}
