import eventBg from '@/assets/img/breadcrumb/vl-event-bg.png';
import missionThumbImg from '@/assets/img/about/vl-about-mission-thumb.png';
import WorkSection from './components/WorkSection'

export const tabsContent = {
    health: [
        {
            tabName: "Regalla Clinic:",
            component: () => <WorkSection section={workSection.health.health_regalla} />,
        },
        {
            tabName: "Community Health Workers",
            component: () => <WorkSection section={workSection.health.health_community} />,
        },
        {
            tabName: "Mobile Medical Units",
            component: () => <WorkSection section={workSection.health.health_mmu} />,
        },
        {
            tabName: "Maternal and Child Health Kit",
            component: () => <WorkSection section={workSection.health.health_mandchealth} />,
        },
        {
            tabName: "SPH-PAR",
            component: () => <WorkSection section={workSection.health.health_sphpar} />,
        }
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
        'health_regalla': {
            image: missionThumbImg,
            title: '',
            subtitle: '',
            section: [
                'In a sprawling campus of X acres, I-DO Health Centre is a facility established with funding from noble donors, to cater to the needs of Indigenous Population with a focus on out-patient services.',
                'A unique health facility owned by tribal community where more than 6231+ volunteers from habitations came forward to construct the facility by doing manual works in their physical capacities.',
                'The centre is also equipped with lab facilities to provide diagnostic services and it is also acting as first point of referral for higher health services.',
                'Doctor consultations, out-patient, in-patient services, operation theatre, ultrasound scan, lab investigations &amp; pharmacy services are available for patients for free-of-cost'
            ]
        },
        'health_community': {
            image: missionThumbImg,
            title: '',
            subtitle1: 'Community Health Workers: The Health Warriors of Tribals',
            section1: [
                'In the remote tribal regions of Bhadradri Kothagudem, access to healthcare is severely limited. With no ASHA workers, Primary Health Centres (PHCs), or emergency services in these insurgency-affected areas, the lives of indigenous communities, especially women and children are constantly at risk.',
                'Institutional deliveries are rare, and without medical support, maternal and infant mortality rates remain alarmingly high.',
                'To bridge this critical gap, IDO trained one male and one female from each habitation as ‘Community Health Workers (CHWs)’ - trusted individuals from the same communities. Currently, 103 CHWs are serving across 134 habitations, delivering essential health services right at people’s doorsteps.',
            ],
            subtitle2: 'Maternal and Child Health Care at Doorstep',
            section2: [
                'CHWs provide comprehensive antenatal care including haemoglobin tests, pregnancy confirmation, urine protein, HIV, HBsAg, VDRL, GRBS, and monitor vitals. Iron-folic acid and calcium supplements are also provided to ensure healthier pregnancies.',
                'During childbirth, CHWs assist with safe home deliveries using a Maternal and Child Health Care Kit. Postnatal care includes Home-Based Newborn Care (HBNC), where newborns are monitored for vital signs such as temperature, respiratory rate, and signs of sepsis. CHWs promote breastfeeding, maintain warmth with baby warm-bags, and guide families on immunization schedules and nutrition.'
            ],
            subtitle3: 'Promoting Institutional Deliveries and Reproductive Health',
            section3: [
                'Cultural beliefs and fear of hospitals often lead pregnant women to choose unsafe traditional home deliveries. To counter this, CHWs engage directly with families, building trust and encouraging institutional deliveries, vital for reducing both maternal and infant deaths.',
                'Through home visits, they break language barriers, dispel myths, and promote hospital- based care. Their presence within the community makes healthcare guidance more acceptable and accessible.'
            ],
            subtitle4: 'Cultural Programs for Awareness',
            section4: [
                'Our ‘Seemantham Program’, a culturally rooted baby shower celebration helps promote safer pregnancies. Using tribal songs, dances, and flipcharts, we educate women about the importance of antenatal check-ups and supplements.',
                'After childbirth, CHWs maintain regular follow-ups to guide mothers on vaccinations, nutrition, and overall newborn care.'
            ],
            subtitle5: 'Street Theatre for Health Education',
            section5: [
                'To further spread awareness, we use ‘Nukkad Natak’, a traditional street theatre to educate entire communities about the risks of unsupervised home deliveries and the importance of newborn care. Performed in local dialects, these engaging plays blend cultural art with powerful messaging, creating a lively and participatory environment for learning.',
                'With this grassroots model, we aim to improve maternal and infant health outcomes in one of the most underserved regions of India—by empowering the very people who live there.'
            ]
        },
        'health_mmu': {
            image: missionThumbImg,
            title: '',
            subtitle1: 'Mobile Medical Units (MMUs):',
            section1: [
                'Delivering Healthcare to Remote Tribal Habitations',
                'In the rugged terrains of Bhadradri Kothagudem district, access to quality healthcare remains a major challenge for tribal and marginalized communities. Poor road connectivity, scattered habitations, and lack of transport have left thousands without essential health services.',
                'To bridge this critical gap, the Indigenous Development Organization (IDO) has launched Mobile Medical Units (MMUs), a lifeline for those in hard-to-reach areas.',
            ],
            subtitle2: 'Reaching the Unreachable',
            section2: [
                'Deployed across Cherla, Pinapaka, Aswaraopeta, Karakagudem, Manguru, Dummugudem, and Mulkulapalli, MMUs are expected to benefit over 130 villages and hamlets spanning a vast 7,500 sq. km area.',
                'These mobile clinics are staffed by a multidisciplinary team comprising Medical Officer, Staff Nurse, Pharmacist, Driver and operate from vehicles equipped for outpatient care, bringing medical services to people who otherwise walk for hours, even days for treatment.'
            ],
            subtitle3: 'MMU Services',
            section3: [
                'Services include treatment for common illnesses, maternal and child healthcare, newborn care, reproductive health, and malnutrition management. MMUs also offer screenings for non-communicable diseases, basic mental health support, dental and eye care, and first aid for emergencies like snake bites and injuries.',
                'Patients needing advanced care are referred to PHCs or hospitals, with follow-up support.'
            ],
            subtitle4: 'Community Mobilization',
            section4: [
                'Before deployment, IDO teams work closely with village heads and Community Health Workers (CHWs) to understand local health needs. Each village hosts a monthly Arogya Sabha a community health meeting where issues like anemia, malnutrition, chronic diseases, and maternal health are addressed collaboratively.',
                'This grassroots approach builds trust, ensures cultural sensitivity, and strengthens local ownership key factors for the long-term success and sustainability of the MMU program.'
            ],
        },
        'health_mandchealth': {
            image: missionThumbImg,
            title: '',
            subtitle1: 'Maternal and Child Health (MCH) Kit is a tool kit comprising of 27 items designed to:',
            section1: [
                '1. Provide doorstep ante-natal check-up (ANC).',
                '2. Conduct delivery and Home-based newborn care (HBNC).',
                '3. Deliver emergency care if baby suffers from asphyxia, sepsis and hypothermia.',
            ],
            subtitle2: 'Parvathi helps deliver a baby amidst Forest with the help of MCH Kit',
            section2: [
                'Community Health Workers (CHWs) are crucial in promoting Institutional Deliveries to improve safe Maternal and Child Health Care. Especially, in remote tribal habitations where access to medical facilities can be limited.',
                'One such interesting example is from Umeshchandra Nagar, a tribal habitation from Pinapaka Mandal, Bhadradri where a pregnant woman was experiencing labour pains.',
                'Ms Parvathi, a dedicated IDO CHW, counselled the family to opt for an Institutional Delivery. However, the stretch from the village to the main road is a challenging terrain with uneven roads making it inaccessible for most vehicles.',
                'With a firm grit to ensure the pregnant woman received the maternal care, Parvathi gathered the local community. With their help, she transformed a cot into a makeshift stretcher (DOLI) to carry the woman to the nearby government hospital.',
                'Along the way, deep in the forest, the labour pains increased, and she unexpectedly delivered the baby before reaching the hospital.',
                'In this critical moment, Parvathi relied on her training and the tools in her Mother and Child Health kit – sterile gloves, an umbilical cord clamp, and a sterile blade to safely deliver the baby.',
                'After ensuring both the baby and mother are safe, she called for an Ambulance through 108 emergency services to transport them. She handed over the baby with a smile to the ASHA worker for further intervention.',
                'Commending this heroic act, Shri B Rahul, IAS, Project Officer, ITDA, Bhadradri extended his congratulations to Ms Parvathi for saving both mother and new born baby lives.',
                'At IDO, we are proud to call our Community Health Workers as Champions of Change. These heroes work tirelessly to bridge the healthcare gap in tribal communities, often going above and beyond to provide high-quality care where its needed the most.'
            ]
        },
        'health_sphpar': {
            image: missionThumbImg,
            title: '',
            subtitle: '',
            section: [
                'SPH PAR - Strengthening of Primary Health Care through Participatory Action Research.', 
            ],
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

