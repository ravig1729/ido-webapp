import blogThumb1 from '@/assets/img/blog/vl-blog-sm-thumb-1.1.png'
import blogThumb2 from '@/assets/img/blog/vl-blog-sm-thumb-1.2.png'
import blogThumb3 from '@/assets/img/blog/vl-blog-sm-thumb-1.3.png'
import testimonial1 from '@/assets/img/testimonial/Abhijeet Bharat Dekho.jpeg'
import testimonial2 from '@/assets/img/testimonial/Dr Anusha Vanaganti.jpeg'
import testimonial3 from '@/assets/img/testimonial/Dr Sahithi profile.jpeg'
import testimonial4 from '@/assets/img/testimonial/Pratham Raj Website.jpeg'
import testimonial5 from '@/assets/img/testimonial/Shanthi Teacher.jpeg'
import testimonial6 from '@/assets/img/testimonial/Karamchedu.jpeg'
import team1 from '@/assets/img/team/Dr R Narender, Secretary & Founder.jpeg'
import team2 from '@/assets/img/team/K Mallikarjuna Rao, Joint Secretary.jpeg'
import team3 from '@/assets/img/team/Dr N Ravinder Rao, President.jpeg'
import team4 from '@/assets/img/team/B V Radhakrishna, Executive Member.jpeg'
import team5 from '@/assets/img/team/Dr Archana K.jpeg'
import team6 from '@/assets/img/team/Dr Kapil Sharma.jpeg'
import team7 from '@/assets/img/team/Dr Swathi.jpeg'
import team8 from '@/assets/img/team/Vijender Mogili, Social Entrepreneur.jpeg'

type TabType = {
    title: string
    time: string
    image: string
    detailsUrl: string
    icon: string
}
type TestimonialType = {
    name: string
    role: string
    image: string
    quote: string
    rating: number
}

type TeamType = {
    name: string
    role: string
    image: string
}


export const tab1Data: TabType[] = [
    {
        title: "Unity Giving Community Charity Event",
        time: "11:00 AM",
        image: blogThumb1,
        detailsUrl: "/event-single",
        icon: "assets/img/icons/vl-clock-1.1.svg"
    },
    {
        title: "Spread the Love Charity Art Exhibition",
        time: "11:00 AM",
        image: blogThumb2,
        detailsUrl: "/event-single",
        icon: "assets/img/icons/vl-clock-1.1.svg"
    },
    {
        title: "Shine for a Cause Charity Dinner & Auction",
        time: "11:00 AM",
        image: blogThumb3,
        detailsUrl: "/event-single",
        icon: "assets/img/icons/vl-clock-1.1.svg"
    }
]
export const tab2Data: TabType[] = [
    {
        title: "Unity Giving Community Charity Event",
        time: "11:00 AM",
        image: blogThumb1,
        detailsUrl: "/event-single",
        icon: "assets/img/icons/vl-clock-1.1.svg"
    },
    {
        title: "Spread the Love Charity Art Exhibition",
        time: "11:00 AM",
        image: blogThumb2,
        detailsUrl: "/event-single",
        icon: "assets/img/icons/vl-clock-1.1.svg"
    },
    {
        title: "Shine for a Cause Charity Dinner & Auction",
        time: "11:00 AM",
        image: blogThumb3,
        detailsUrl: "/event-single",
        icon: "assets/img/icons/vl-clock-1.1.svg"
    }
]
export const tab3Data: TabType[] = [
    {
        title: "Unity Giving Community Charity Event",
        time: "11:00 AM",
        image: blogThumb1,
        detailsUrl: "/event-single",
        icon: "assets/img/icons/vl-clock-1.1.svg"
    },
    {
        title: "Spread the Love Charity Art Exhibition",
        time: "11:00 AM",
        image: blogThumb2,
        detailsUrl: "/event-single",
        icon: "assets/img/icons/vl-clock-1.1.svg"
    },
    {
        title: "Shine for a Cause Charity Dinner & Auction",
        time: "11:00 AM",
        image: blogThumb3,
        detailsUrl: "/event-single",
        icon: "assets/img/icons/vl-clock-1.1.svg"
    }
]
export const tab4Data: TabType[] = [
    {
        title: "Unity Giving Community Charity Event",
        time: "11:00 AM",
        image: blogThumb1,
        detailsUrl: "/event-single",
        icon: "assets/img/icons/vl-clock-1.1.svg"
    },
    {
        title: "Spread the Love Charity Art Exhibition",
        time: "11:00 AM",
        image: blogThumb2,
        detailsUrl: "/event-single",
        icon: "assets/img/icons/vl-clock-1.1.svg"
    },
    {
        title: "Shine for a Cause Charity Dinner & Auction",
        time: "11:00 AM",
        image: blogThumb3,
        detailsUrl: "/event-single",
        icon: "assets/img/icons/vl-clock-1.1.svg"
    }
]

export const testimonialData: TestimonialType[] = [
    {
        name: "Mr Abhijit Biswas",
        role: "Founder, Bharath Dekho",
        image: testimonial1,
        quote: "IDO’s work is rooted, humble, and transformative. Their commitment to health, dignity, and justice for the most underserved communities is nothing short of extraordinary.",
        rating: 5
    },
    {
        name: "Dr Anusha Vanaganti",
        role: "MBBS",
        image: testimonial2,
        quote: "Being part IDO, I realised that meaningful change doesn’t always require grand gestures. Often, it starts with showing up, listening, and doing what we can with what we have.",
        rating: 5
    },
    {
        name: "Dr Sahithi",
        role: "Gynecologist",
        image: testimonial3,
        quote: "As a gynecologist, it has been particularly fulfilling to contribute my medical expertise in improving women’s health and access to care in rural tribal habitations.",
        rating: 5        
    },
    {
        name: "Mr Pratham Raj",
        role: "MA Education, Mahindra University, Hyderabad",
        image: testimonial4,
        quote: "IDO Bridge schools children helped me understand daily struggles of villagers, social setting of schools and education related perception of community and teachers.",
        rating: 5
    },
    {
        name: "Ms Shanthi Sode",
        role: "Volunteer Teacher – Bridge School, Yerrakunta Habitation, Pinapaka Mandal",
        image: testimonial5,
        quote: "With the advent of Bridge schools, children in the habitations have developed a genuine fondness for learning. It’s heartening to see them attend classes regularly, recite poems with actions, and grasp new concepts quickly.",
        rating: 5
    },
    {
        name: "Mr Karamchedu Shatamsh",
        role: "Civils Services Aspirant",
        image: testimonial6,
        quote: "It’s an enriching experience to give a helping hand to the underprivileged communities in interior tribal habitations of Bhadradri.",
        rating: 5
    }
]

export const teamData: TeamType[] = [
    {
        name: "Dr R Narender",
        role: "Secretary & Founder",
        image: team1,
    },
    {
        name: "Mr K Mallikarjuna Rao",
        role: "Joint Secretary",
        image: team2,
    },
    {
        name: "Dr N Ravinder Rao",
        role: "President",
        image: team3,
    },
    {
        name: "Mr B V Radhakrishna",
        role: "Executive Member",
        image: team4,
    },
    {
        name: "Dr Archana K",
        role: "Doctor",
        image: team5,
    },
    {
        name: "Dr Kapil Sharma",
        role: "Doctor",
        image: team6,
    },
    {
        name: "Dr Swathi",
        role: "Doctor",
        image: team7,
    },
    {
        name: "Mr Vijender Mogili",
        role: "Social Entrepreneur",
        image: team8,
    }
]








