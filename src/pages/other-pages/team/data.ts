import team1 from '@/assets/img/team/Dr R Narender, Secretary & Founder.jpeg'
import team2 from '@/assets/img/team/K Mallikarjuna Rao, Joint Secretary.jpeg'
import team3 from '@/assets/img/team/Dr N Ravinder Rao, President.jpeg'
import team4 from '@/assets/img/team/B V Radhakrishna, Executive Member.jpeg'
import team5 from '@/assets/img/team/Dr Archana K.jpeg'
import team6 from '@/assets/img/team/Dr Kapil Sharma.jpeg'
import team7 from '@/assets/img/team/Dr Swathi.jpeg'
import team8 from '@/assets/img/team/Vijender Mogili, Social Entrepreneur.jpeg'

type TeamMember = {
    name: string;
    designation: string;
    image: string;
};

export const teamData: TeamMember[] = [
    {
        name: "Dr R Narender",
        designation: "Secretary & Founder",
        image: team1,
    },
    {
        name: "Dr Kapil Sharma",
        designation: "Joint Secretary",
        image: team6,
    },
    {
        name: "Dr N Ravinder Rao",
        designation: "President",
        image: team3,
    },
    {
        name: "Mr B V Radhakrishna",
        designation: "Executive Member",
        image: team4,
    },
    {
        name: "Dr Archana K",
        designation: "Doctor",
        image: team5,
    },
    {
        name: "Mr K Mallikarjuna Rao",
        designation: "Executive Member",
        image: team2,
    },
    {
        name: "Dr Swathi",
        designation: "Doctor",
        image: team7,
    },
    {
        name: "Mr Vijender Mogili",
        designation: "Social Entrepreneur",
        image: team8,
    }
];
