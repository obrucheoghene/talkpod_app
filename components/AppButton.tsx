import { ReactNode, useContext } from "react"
import { Pressable, ViewStyle } from "react-native"
import { AppContext } from "../context/AppContext"

interface AppButtonProps {
  children: ReactNode,
  style?: ViewStyle
  onPress?: () => {}
}

const AppButton: React.FC<AppButtonProps> = ({style, onPress, children}) => {
  const {theme} = useContext(AppContext);
  
  const defaultStyle: ViewStyle = {
    backgroundColor: theme.colors.dark2,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: theme.sizes.b,
    borderWidth: 1,
    borderColor: theme.colors.dark3,
    columnGap: theme.spacing.s,
  }
  return (
    <Pressable style={[defaultStyle, style]} onPress={onPress}>
      {children}
    </Pressable>
  )
}

export default AppButton
