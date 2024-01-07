import { ReactNode } from "react";
import { ViewStyle } from "react-native";

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
