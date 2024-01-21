import { View } from 'react-native'

interface SpacerProps {
    height?: number,
    width?: number
}
const Spacer: React.FC<SpacerProps> = ({height=1, width=1}) => {
  return (
    <View style={{height: height, width: width}}></View>
  )
}

export default Spacer
