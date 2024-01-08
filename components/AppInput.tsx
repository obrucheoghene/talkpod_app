import React, { useContext } from 'react'
import { TextInput, TextStyle } from 'react-native'
import { AppContext } from '../context/AppContext';

interface AppInputProps {
    placeholder: string;
    style?: TextStyle,
    placeholderTextColor?: string;
    isSecret?: boolean;
}
const AppInput: React.FC<AppInputProps> = ({placeholder, style, placeholderTextColor, isSecret= false }) => {
    const {theme} = useContext(AppContext);
    const defaultStyle: TextStyle = {
        fontSize: theme.sizes.b,
        color: theme.colors.foreground,
        flex: 1,
        ...style
    }
  return <TextInput 
  placeholder={placeholder} style={defaultStyle}
    secureTextEntry={isSecret}
  placeholderTextColor={placeholderTextColor ? placeholderTextColor : theme.colors.grey600} />
}

export default AppInput
