import React, { ReactNode, useContext } from 'react'
import { StatusBar, View } from 'react-native'
import { AppContext } from '../../context/AppContext'

interface ScreenContainerProps {
    styles: Record<string, string|number>
    children: ReactNode,
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({styles, children}) => {
    const {theme, themeName} = useContext(AppContext)
    const containerStyle = {
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingHorizontal: theme.spacing.l,
        ...styles

    }
  return (
    <View style={containerStyle}>
      <StatusBar backgroundColor={theme.colors.background} 
      barStyle={themeName === 'dark' ? 'light-content' : 'dark-content'} />

      {children}</View>
  )
}

export default ScreenContainer
