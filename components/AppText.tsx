import React, { ReactNode, useContext } from 'react'
import { Text, TextStyle } from 'react-native'
import { AppContext } from '../context/AppContext'

interface AppTextProps {
  children: ReactNode,
  style?: TextStyle
}
const AppText: React.FC<AppTextProps> = ({style, children}) => {
  const {theme} = useContext(AppContext)
  const defaultStyle: TextStyle = {
    color: theme.colors.foreground,
    fontSize: theme.sizes.b
  }
  return (
    <Text style={[defaultStyle, style]}>{children}</Text>
  )
}

export default AppText
