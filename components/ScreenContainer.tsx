import React, { useContext } from 'react'
import { StatusBar, View } from 'react-native'
import { AppContext } from '../context/AppContext'
import { ViewContainerProps } from '../types/interfaces'


const ScreenContainer: React.FC<ViewContainerProps> = ({style, children}) => {
    const {theme, themeName} = useContext(AppContext)
    const containerStyle = {
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingHorizontal: theme.spacing.l,
        ...style

    }
  return (
    <View style={containerStyle}>
      <StatusBar backgroundColor={theme.colors.background} 
      barStyle={themeName === 'dark' ? 'light-content' : 'dark-content'} />

      {children}</View>
  )
}

export default ScreenContainer
