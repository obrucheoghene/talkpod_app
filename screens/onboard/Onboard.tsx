import { Dimensions, FlatList, StyleSheet, View } from "react-native"
import AppText from "../../components/AppText"
import ScreenContainer from "../../components/ScreenContainer"
import { onboardingSlides } from "../../utils/data"
import { OnboardingSlideProps } from "../../types/interfaces"
import { SvgXml } from "react-native-svg"

const {height, width} = Dimensions.get("window")

interface SlideProps {
    item: OnboardingSlideProps
}
const Slide: React.FC<SlideProps> = ({item}) => {
    const {Svg, text} = item
    return (
        <View style={styles.slideContainer} >
         <Svg height={'70%'} />
            <AppText style={styles.text}>{text }</AppText>
        </View>
    )
}

const Onboard = () => {
  return (
    <ScreenContainer>
        <FlatList
            horizontal
            data={onboardingSlides}
            contentContainerStyle={{height: height * 0.75}}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            renderItem={({item}) => <Slide item={item} />}
        />

    </ScreenContainer>
  )
}

export default Onboard

const styles  = StyleSheet.create({
    slideContainer: {
       flex: 1
    },

    text: {
        fontSize: 25,
        textAlign: 'center'
        
    }
})
