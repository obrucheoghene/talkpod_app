import { ReactNode, useContext } from "react"
import {  View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { AppContext } from "../context/AppContext"


const SafeAreaInset = ({children}: {children: ReactNode}) => {
    const insets = useSafeAreaInsets()
    const {theme} = useContext(AppContext)
    const safeAreaContainer =  {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        backgroundColor: theme.colors.background,
        flex: 1
    }
  return (
    <View style={safeAreaContainer}>{children}</View>
  )
}

export default SafeAreaInset
