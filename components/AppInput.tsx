import React, { useContext } from 'react'
import { TextInput, TextStyle } from 'react-native'
import { AppContext } from '../context/AppContext';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';

interface AppInputProps {
    placeholder: string;
    style?: TextStyle,
    placeholderTextColor?: string;
    isSecret?: boolean;
    forBottomSheet?: boolean;
}
const AppInput: React.FC<AppInputProps> = ({placeholder, style, placeholderTextColor, isSecret= false, forBottomSheet=false }) => {
    const {theme} = useContext(AppContext);
    const defaultStyle: TextStyle = {
        fontSize: theme.sizes.b,
        color: theme.colors.foreground,
        flex: 1,
        ...style
    }
  if (forBottomSheet){
    return <BottomSheetTextInput 
    placeholder={placeholder} style={defaultStyle}
      secureTextEntry={isSecret}
    placeholderTextColor={placeholderTextColor ? placeholderTextColor : theme.colors.grey600} />
  }
    
  return <TextInput 
  placeholder={placeholder} style={defaultStyle}
    secureTextEntry={isSecret}
  placeholderTextColor={placeholderTextColor ? placeholderTextColor : theme.colors.grey600} />
}

export default AppInput
