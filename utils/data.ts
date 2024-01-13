import { Meeting, OnboardingSlideProps } from "../types/interfaces";
import Conference from "../assets/svg/dark-conference.svg"
import GroupCall from "../assets/svg/dark-group-call.svg"
import FlowerGirl from "../assets/svg/dark-flower-girl.svg"


export const onboardingSlides: OnboardingSlideProps[] = [
    {
        id: 1,
        Svg: GroupCall,
        text: 'Video conferencing \n made easy and fast \n in your hands'
    },
    {
        id: 2,
        Svg: Conference,
        text: 'Lots of great \n features that further \n help your work'
    },
    {
        id: 3,
        Svg: FlowerGirl,
        text: `Let's boost your \n productivity with \n Zomo right now!`
    },

]

export const meetings: Meeting[] = [
    {
        id: '154 658 554',
        title: 'RTC Team Demo',
        status: 'Completed',
        date: 'Dec 14 2023',
        time: '14:20'
    },

    {
        id: '745 745 543',
        title: 'Interview Meeting',
        status: 'Completed',
        date: 'Dec 13 2023',
        time: '10:00'
    },
    {
        id: '457 486 593',
        title: 'UI/UX Review',
        status: 'Completed',
        date: 'Dec 12 2023',
        time: '16:20'
    },
    {
        id: '257 456 543',
        title: 'Stand up',
        status: 'Completed',
        date: 'Dec 11 2023',
        time: '12:20'
    },
    {
        id: '533 622 143',
        title: 'Onboarding',
        status: 'Completed',
        date: 'Dec 10 2023',
        time: '09:20'
    },
    {
        id: '455 553 543',
        title: 'Interview Meeting',
        status: 'Completed',
        date: 'Dec 09 2023',
        time: '17:30'
    },
    {
        id: '753 745 855',
        title: 'Project Review',
        status: 'Completed',
        date: 'Dec 08 2023',
        time: '19:20'
    },
    {
        id: '634 544 855',
        title: 'Coffee Chat',
        status: 'Completed',
        date: 'Dec 08 2023',
        time: '15:20'
    },
    {
        id: '323 666 889',
        title: 'Stand Up',
        status: 'Completed',
        date: 'Dec 08 2023',
        time: '11:40'
    },

]
