import eventBg from '@/assets/img/breadcrumb/vl-event-bg.png';
import missionThumbImg from '@/assets/img/about/vl-about-mission-thumb.png';
import WorkSection from './components/WorkSection'

export const tabsContent = {
    health: [
        {
            tabName: "Mobile medical unit (MMU)",
            component: () => <WorkSection section={workSection.health.health_overview} />,
        },
        {
            tabName: "Mother & Child Health Care",
            component: () => <WorkSection section={workSection.health.health_initiatives} />,
        },
        {
            tabName: "Regalle Village Clinic",
            component: () => <WorkSection section={workSection.health.health_statistics} />,
        },
    ],
    education: [
        {
            component: () => <WorkSection section={workSection.education.education_overview} />,
        }
    ],
    nutrition: [
        {
            component: () => <WorkSection section={workSection.nutrition.nutrition_overview} />,
        }
    ],
    sustainableHealth: [
        {
            component: () => <WorkSection section={workSection.sustainableHealth.sustainableHealth_overview} />,
        }
    ],
};


export const heroContent = {
    education: {
        title: "Education for All",
        subtitle: "Empowering communities through accessible education.",
        backgroundImage: eventBg,
        pageName: "Education",
    },
    health: {
        title: "Health and Wellness",
        subtitle: "Promoting health and well-being for everyone.",
        backgroundImage: eventBg,
        pageName: "Health",
    },
    nutrition: {
        title: "Nutrition and Food Security",
        subtitle: "Ensuring access to nutritious food for all.",
        backgroundImage: eventBg,
        pageName: "Nutrition",
    },
    sustainableHealth: {
        title: "Sustainable Health Initiatives",
        subtitle: "Building a healthier future through sustainable practices.",
        backgroundImage: eventBg,
        pageName: "Sustainable Health",
    },
};

export const workSection = {
    health: {
        'health_overview': {
            image: missionThumbImg,
            title: 'Mobile medical unit (MMU)',
            subtitle: 'Intervention',
            section: [
                'To increase the health awareness & to provide quality healthcare services free of cost to the last mile, Initiative of mobile medical unit taken up in January 2021.',
                'MMU covers tribal population of 2300 members in 18 villages. Mobile medical unit visits habitations on scheduled basis and provides diagnostics & curative services for the communicable and non-communicable diseases.',
                'Through regular visits to the habitations, there has been gradual development of trust & bond between the community members and our team which is crucial for sustainability.',
            ]
        },
        'health_initiatives': {
            image: missionThumbImg,
            title: 'Mother & Child Health Care',
            subtitle1: 'Challenge',
            section1: [
                'There is no ASHA or Community Health Workers in the locality. Poor health seeking behaviour, black magic and language barrier are the major issues.',
                'As these tribal habitations are located remotely, hilly and insurgency areas majority of deliveries occur in the habitations only (The rate of institutional delivery is the lowest among tribal women) & there are no healthcare services for both mother & newborn.',
                'In the year 2019, in 31 habitations we have recorded 24 infant deaths out of 88 live births. (Under-1 year age). IMR recorded was 27.2%.',
                'In the year 2019, IMR recorded of India was 3%.'
            ],
            subtitle2: 'Intervention',
            section2: [
                'To fill the gap we have trained one male & one female person from their own community in each habitation to provide basic healthcare. They are called community health workers (CHWs).',
                'CHWs are trained for providing basic mother & child healthcare',
                'Now doorstep Antenatal care of pregnant women include hemoglobin test, pregnancy confirmation test, urine for protein , HIV, HBsAg, VDRL, and GRBS are done. Vitals are also monitored. Much needed Iron-folic acid & calcium supplements are provided.',
                'Intrapartum care: Conducting safe deliveries.',
                'Postnatal care & HBNC (Home Based Newborn Care): CHW examines the newborn for cry, temperature, conjunctivitis, respiratory rate, baby weight, and umbilical cord care. Also checks for any signs of sepsis like vomiting, chest in-drawing, cough & diarrhoea.',
                'CHW ensures warmth by providing warm-bags for the baby, assists in breast-feeding, and counsels about the nutrition & guides about the immunization schedule. Creates health & nutrition awareness within the habitations.',
                'These CHWs are effective means to improve awareness & also remove the language barrier/misbelief and are locally available.',
                'We have identified & trained 43 CHWs from 31 habitations.'
            ]
        },
        'health_statistics': {
            image: missionThumbImg,
            title: 'Regalle Village Clinic',
            subtitle: 'Intervention',
            section: [
                'Outpatient clinic was started in Regalla village of Laxmidevipalli mandal to provide health services to rural & tribal villages.'
            ]
        }
    },
    education: {
        'education_overview': {
            image: missionThumbImg,
            title: '',
            subtitle1: 'Challenge',
            section1: [
                'In the interior habitations there are no anganwadi centres or schools which made education inaccessible to the tribal habitation children.'
            ],
            subtitle2: 'Intervention',
            section2: [
                'To fill this gap we have initiated BRIDGE SCHOOLS within the habitations itself, where they get access to basic education, mid-day meal & nutrition (Nutrition powder). After identifying potential students we motivate them to join into mainstream schools.'
            ]
        }
    },
    nutrition: {
        'nutrition_overview': {
            image: missionThumbImg,
            title: '',
            subtitle1: 'Challenge',
            section1: [
                'There is no anganwadi centre in interior tribal habitation.',
                'We have observed majority of adolescents, pregnant women & under-5 age children had malnutrition, anaemia due to lack of balanced diet & no food security card which also contributes for low birth weight newborn & pre-term deliveries.',
                'Tribal report 2018 says, 65% of tribal women in the 15-49 years age group suffer from anemia.',
                'The prevalence of underweight is almost one and a half times in tribal children than in the others',
                'Only about 25% pregnant and lactating women and 29-32% children had adequate intakes of both protein and calories.',
                'Hence there was a need to provide them a supply of adequate protein, fats, carbohydrates & iron.'
            ],
            subtitle2: 'Intervention',
            section2: [
                'To fill the gap we have trained one male & one female person from their own community in each habitation to provide basic healthcare. They are called community health workers (CHWs).',
                'CHWs are trained for providing basic mother & child healthcare',
                'Now doorstep Antenatal care of pregnant women include hemoglobin test, pregnancy confirmation test, urine for protein , HIV, HBsAg, VDRL, and GRBS are done. Vitals are also monitored. Much needed Iron-folic acid & calcium supplements are provided.',
                'Intrapartum care: Conducting safe deliveries.',
                'Postnatal care & HBNC (Home Based Newborn Care): CHW examines the newborn for cry, temperature, conjunctivitis, respiratory rate, baby weight, and umbilical cord care. Also checks for any signs of sepsis like vomiting, chest in-drawing, cough & diarrhoea.',
                'CHW ensures warmth by providing warm-bags for the baby, assists in breast-feeding, and counsels about the nutrition & guides about the immunization schedule. Creates health & nutrition awareness within the habitations.',
                'These CHWs are effective means to improve awareness & also remove the language barrier/misbelief and are locally available.',
                'We have identified & trained 43 CHWs from 31 habitations.'
            ]
        }
    },
    sustainableHealth: {
        'sustainableHealth_overview': {
            image: missionThumbImg,
            title: '',
            subtitle: 'People often think of Charity As an Action. But We think of Charity as a State Of The Heart',
            section: [
                'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for uncover many web sites still in their infancy.',
                'Giving to those in need what they could be gaining from their own initiative may well be the kindest way to destroy people.',
                'Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
            ]
        },
    }
};

