import React, { ReactNode, useContext } from 'react'
import { Text, TextStyle } from 'react-native'
import { AppContext } from '../context/AppContext'
import { AppFonts } from '../types/interfaces'

interface AppTextProps {
  children: ReactNode,
  style?: TextStyle,
  font?: AppFonts
}
const AppText: React.FC<AppTextProps> = ({style, font='Urbanist-Regular', children }) => {
  const {theme} = useContext(AppContext)
  const defaultStyle: TextStyle = {
    color: theme.colors.foreground,
    fontSize: theme.sizes.b,
    fontFamily: font.toString()
  }
  return (
    <Text style={[defaultStyle, style]}>{children}</Text>
  )
}

export default AppText
