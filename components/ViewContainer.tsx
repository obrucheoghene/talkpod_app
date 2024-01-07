import { useContext } from "react"
import { View, ViewStyle } from "react-native"
import { AppContext } from "../context/AppContext"
import { ViewContainerProps } from "../types/interfaces"


const ViewContainer: React.FC<ViewContainerProps> = ({style, children}) => {
    const {theme} = useContext(AppContext)

    const containerStyle: ViewStyle = {
        backgroundColor: theme.colors.dark2,
        flexDirection: 'row',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderRadius: theme.sizes.b,
        borderWidth: 1,
        borderColor: theme.colors.dark2,
        columnGap: theme.spacing.s,
        paddingHorizontal: 20,
        ...style
    }
  return (
    <View style={containerStyle}>{children}</View>
  )
}

export default ViewContainer
