import eventBg from '@/assets/img/banner/banner2.jpg';

import idoHealthCenter1 from '@/assets/img/Health/IDO Hospital/1.jpg';
import idoHealthCenter2 from '@/assets/img/Health/IDO Hospital/2.jpg';
import idoHealthCenter3 from '@/assets/img/Health/IDO Hospital/3.jpg';
import idoHealthCenter4 from '@/assets/img/Health/IDO Hospital/4.jpg';
import idoHealthCenter5 from '@/assets/img/Health/IDO Hospital/5.jpg';

import chw1 from '@/assets/img/Health/CHW/1.jpg';
import chw2 from '@/assets/img/Health/CHW/2.jpg';
import chw3 from '@/assets/img/Health/CHW/3.jpg';
import chw4 from '@/assets/img/work/health_comm.jpg';

import mmu1 from '@/assets/img/Health/MMU/1.jpg';
import mmu2 from '@/assets/img/Health/MMU/2.jpg';
import mmu3 from '@/assets/img/Health/MMU/3.jpg';
import mmu4 from '@/assets/img/Health/MMU/4.jpg';
import mmu5 from '@/assets/img/Health/MMU/5.jpg';
import mmu6 from '@/assets/img/work/health_mmu.jpeg';

import mandchealth1 from '@/assets/img/Health/Maternal and Child Health Kit/2.jpg';
import mandchealth2 from '@/assets/img/work/health_mc.jpeg';

import sphpar from '@/assets/img/work/health_sph.jpeg';

import edu1 from '@/assets/img/education/edu_1.jpg';
import edu2 from '@/assets/img/education/edu_2.jpg';
import edu3 from '@/assets/img/education/edu_3.jpg';
import edu4 from '@/assets/img/education/edu_4.jpeg';

import nutri1 from '@/assets/img/Nutrition/1.jpg';
import nutri2 from '@/assets/img/Nutrition/2.jpg';
import nutri3 from '@/assets/img/Nutrition/3.jpg';
import nutri4 from '@/assets/img/Nutrition/4.jpg';
import nutri5 from '@/assets/img/work/nutrition.jpg';

import missionThumbImg8 from '@/assets/img/work/sus_heal.jpg';
import WorkSection from './components/WorkSection'

export const tabsContent = {
    health: [
        {
            tabName: "IDO Health Centre",
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
            title: '',
            image1: idoHealthCenter1,
            subtitle1: 'IDO Health Centre – A Lifeline for Tribal Communities',
            section1: [
                'In 2022, after five years of dedicated frontline health work, Indigenous Development Organisation (IDO) established the IDO Health Centre in Gattumalla, Bhadradri Kothagudem district, Telangana.',
                'This is Telangana’s only NGO-operated specialty hospital in an Agency area, offering specialized Gynaecology & Obstetrics services to underserved tribal populations.',
                'Fondly called “Adivasi Aspatal” by the community, the hospital was built through the collective labour of 9,570 tribal community members, a powerful symbol of ownership, trust, and solidarity.',
                'Spanning a one-acre campus, the centre is a charitable facility funded by generous donors, serving over 42,000 people across 133 tribal and rural villages. It stands as a trusted platform where healthcare providers and indigenous communities come together in an environment of mutual respect, acceptance, and trust to improve health outcomes and reduce healthcare dependency.'
            ],
            subtitle2: 'Who We Serve',
            image2: idoHealthCenter2,
            section2: [
                '•	People trust and visit IDO HC from Andhra, Telangana, Chhattisgarh and odisha',
                '•	Serving more than 42,000 people across 133 villages',
                '•	Tribal and rural communities who otherwise travel long distances for basic care',
            ],
            subtitle3: 'Our Facilities & Services (All Free of Cost)',
            image3: idoHealthCenter3,
            section3: [
                '•	Doctor consultations (OPD & IPD)',
                '•	Specialized Gynaecology & Obstetrics care',
                '•	Operation theatre services',
                '•	Diagnostic services (Ultrasound, Lab Investigations)',
                '•	Free pharmacy services',
                '•	Community kitchen for patients and attendants',
                '•	Referral linkages to higher centres for advanced care'
            ],
            subtitle4: 'Why It Matters',
            image4: idoHealthCenter4,
            section4: [
                '•	First NGO-run specialty health centre in a tribal Agency area of Telangana',
                '•	Trusted as a safe, respectful space where doctors and Adivasi communities work together',
                '•	Reduces dependency on distant facilities by providing accessible, quality care locally',
                '•	A sustainable model of community-driven rural healthcare'
            ],
            subtitle5: 'Our Impact',
            image5: idoHealthCenter5,
            section5: [
                '•	A health lifeline for remote, hard-to-reach villages',
                '•	Built with community participation and donor support',
                '•	Restoring dignity, saving lives, and improving health outcomes in tribal Telangana',
            ]
        },
        'health_community': {
            image1: chw1,
            title: '',
            subtitle1: 'Community Health Workers: The Front Line Health Workers',
            section1: [
                'Community Health Workers (CHW) Program aims to enhance healthcare access in remote tribal areas across Telangana and Chattisgarh.',
                'In the remote tribal regions of Bhadradri Kothagudem and Sukma, access to healthcare is severely limited. With lack of  ASHA workers in the interior hamlets , Primary Health Centres (PHCs), or emergency services in these Interior – Left Wing Extremism affected areas are limited due to poor connectivity. Distant PHCs and unavailability of medical staff especially doctors pose threat to the lives of indigenous communities, especially women and children.',
                '•	Why it matters: Tribal communities face high maternal & child mortality, have poor access to Primary health care services and a triple burden of communicable, non-communicable diseases and mental health.',
                '•	Our solution: Training and mentoring local CHWs/ASHAs to provide community-based maternal, child, and primary health services.',
            ],
            subtitle2: 'Objectives',
            image2: chw2,
            section2: [
                '•	Strengthen CHW/ASHA skills in MCH, infectious & non-communicable diseases and health promotion.',
                '•	Promote safe motherhood: ANC, PNC, HBNC, institutional deliveries.',
                '•	Improve immunization coverage and disease prevention.',
                '•	Ensure early identification and referral of high-risk mothers, newborns, and children.',
                '•	Build community trust and strengthen referral linkages with health facilities.',
            ],
            subtitle3: 'Activities / Approach',
            image3: chw3,
            section3: [
                '•	Training Workshops: Induction (5 days) & refresher (every 6 months) on MCH, HBNC, nutrition, and disease management.',
                '•	Hands- O n Practical Sessions: Home visits, monitoring, and care demonstrations.',
                '•	Job Aids & Toolkits: ANC/PNC/HBNC registers, flipbooks, and monthly checklists.',
                '•	Mentorship & Supervision: Supervisors monitor 10–12 CHWs each, verify home visits, and provide support.',
                '•	Exposure Visits / Field-Based Training: Strengthen problem-solving and real-world application.',
                '•	Digital Data System: CHWs record data manually → verified digitally for reporting and planning.'
            ],
            subtitle4: 'Impact / Outcomes',
            image4: chw4,
            section4: [
                '•	CHWs Trained: 79',
                '•	Households Covered:  2370',
                '•	Habitations covered: 79',
                '•	Health Outcomes: Increased institutional deliveries from 23% to 46% from 2021 -2023, reduced IMR from 158 to 116',
                '•	Skills Gained: Example – 90% of CHWs can correctly identify danger signs in pregnancy.',
                '•	Case Stories & Testimonials: Highlight successful interventions in communities.',
            ],
        },
        'health_mmu': {
            image1: mmu1,
            title: '',
            subtitle1: 'Mobile Medical Units (MMUs):',
            section1: [
                'What are MMUs? → “Clinics on wheels bringing healthcare to the doorstep of remote tribal communities.',
                'Mobile Medical Units (MMUs) play a vital role in delivering essential healthcare services to remote, tribal, and underserved communities in the unreachable / hard to reach areas, of Bhadradri Kothagudem District. Over the district 4 MMUs are operational . These units are instrumental in providing accessible primary care, with a strong emphasis on maternal and child health. ',
                'They also address the growing burden of non-communicable diseases (NCDs) such as diabetes and hypertension, alongside the prevention and management of communicable diseases (CDs) through timely screening, diagnosis, and treatment.',
                'In addition, MMUs are equipped to offer emergency stabilization for acute medical conditions, reducing delays in critical care, and facilitate referrals to higher healthcare centers when advanced or specialized treatment is needed. By bridging the gap between remote populations and the formal healthcare system, MMUs significantly enhance health equity and outcomes in these marginalized regions.',
                'Why needed? → “In many villages there are no doctors, no transport, and health centres are 10–50 km away. Our MMUs bridge this gap.”',
            ],
            subtitle2: 'Where We Work?',
            image2: mmu2,
            section2: [
                'We operate in 19 mandals of Bhadradri Kothagudem District',
                'We operate in 82 villages of Bhadradri kothagudem district , (Listing will be attached separately)',
            ],
            subtitle3: 'Services Provided',
            image3: mmu3,
            section3: [
                '•	General OPD care',
                '•	Maternal & Child Health (ANC, PNC, immunization support, growth monitoring)',
                '•	Communicable disease detection (malaria, TB, leprosy, cataract screening, snakebite first aid)',
                '•	Non-communicable disease care (BP, diabetes, mental health counselling)',
                '•	Basic diagnostics (RDTs, Hb, urine tests, BP, sugar check)',
                '•	Free essential medicines distribution',
                '•	Health education & awareness (nutrition, hygiene, safe motherhood, immunization importance)',
            ],
            subtitle4: 'Innovations in MMUs',
            image4: mmu4,
            section4: [
                'Our Mobile Medical Units go beyond basic consultations. By equipping them with portable diagnostic devices, we ensure early detection and timely treatment right at the doorstep of remote tribal communities.',
                '•	Digital stethoscopes for screening congenital heart disease in children',
                '•	Portable otoscopes for identifying ear infections and perforations (ASOM/CSOM)',
                '•	Fetal Dopplers for monitoring pregnancies and reducing maternal risks',
                '•	Rapid diagnostic kits for malaria, diabetes, and other common conditions',
                'This innovative approach enables faster diagnosis, reduced referrals, and better outcomes, especially in areas where access to hospitals is limited.',
            ],
            subtitle5: 'Our Approach',
            image5: mmu5,
            section5: [
                '•	Fixed-day monthly visit schedule for each remote village.',
                '•	Appointment system for pregnancy scans & elective procedures.',
                '•	Referral linkage to higher centres/hospitals.',
                '•	Community involvement: CHWs/ASHAs help mobilize patients.',
            ],
            subtitle6: 'Impact / Outcomes',
            image6: mmu6,
            section6: [
                '•	Villages covered : 79',
                '•	Households reached : XXXX',
                '•	Patients treated : 18545',
                '•	Pregnant women registered/monitored : XXXX',
                '•	Emergency referrals supported : XXXX',
            ],
        },
        'health_mandchealth': {
            image1: mandchealth1,
            title: '',
            subtitle1: 'Maternal and Child Health (MCH) Kit is a tool kit comprising of 27 items designed to:',
            section1: [
                '1. Provide doorstep ante-natal check-up (ANC).',
                '2. Conduct delivery and Home-based newborn care (HBNC).',
                '3. Deliver emergency care if baby suffers from asphyxia, sepsis and hypothermia.',
            ],
            subtitle2: 'Parvathi helps deliver a baby amidst Forest with the help of MCH Kit',
            image2: mandchealth2,
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
            image: sphpar,
            title: '',
            subtitle: '',
            section: [
                'SPH PAR - Strengthening of Primary Health Care through Participatory Action Research.',
            ],
        }
    },
    education: {
        'education_overview': {
            image1: edu1,
            title: 'Education',
            subtitle1: 'Helping Tribal Children access Education through Bridge Schools',
            section1: [
                'The remote and difficult terrain of the Gutti Koya tribe’s living areas, with rough roads and overflowing streams, makes it nearly impossible for children to attend government schools, even on foot.',
                'The financial burden on parents, who rely on daily wages from agriculture, further complicates the situation, as escorting children to school means losing a day’s income, leading to higher child labor.',
                'As a result, the literacy rate among tribal children is very low. Additionally, the lack of early childhood education hinders their development, especially since 85% of brain growth occurs in the first six years. Mainstream schools often face high dropout rates due to lack of initial support and engagement.'
            ],
            subtitle2: 'Why Bridge Schools for the Tribal Community?',
            image2: edu2,
            section2: [
                'Bridge schools in the remote tribal areas of Bhadradri and Kothagudem in Telangana serve as temporary, makeshift study centers for children. They help bridge the educational gap by offering basic education, enabling children to eventually transition to mainstream schools. Built with limited resources, they play a vital role in providing essential education to children.',
                'Local community volunteers, often school dropouts, are recruited from within the habitations and trained to teach the children in their native languages. This approach minimizes language barriers, reduces the fear of schooling, and fosters a positive attitude toward education encouraging regular attendance.',
                'The volunteers also prepare mid-day meals for the children. Their service is aimed at benefiting their community and ensuring children receive essential nourishment while gaining basic education.',
                'In cases of irregular attendance or high child labor, team members from IDO visit the habitation, motivating parents to recognize the importance of education for their children’s future.'
            ],
            subtitle3: 'Activities of Bridge School',
            image3: edu3,
            section3: [
                '•	Daily Classes on literacy, numeracy, and life skills using interactive and culturally relevant materials, including solar TV in off-grid areas.',
                '•	Vidhya Sabhas to engage parents, promote education, and reduce child labor.',
                '•	Local Youth as Teachers to ensure cultural fit and address mobility challenges.',
                '•	Teacher Training through monthly capacity-building sessions.',
                '•	Community Events like sports and cultural programs to boost participation.',
                '•	Life Skills & Culture through tribal songs and vegetable gardening.',
                '•	School Integration by enrolling eligible children into formal schools annually.'
            ],
            subtitle4: 'Impact:',
            image4: edu4,
            section4: [
                '•	400+ children now have access to basic education & midday meals in 13 habitations.',
                '•	600+ children joined mainstream school.',
                '•	50+ children are participating in district level sports like hockey, archery, volleyball, etc.',
            ],
        }
    },
    nutrition: {
        'nutrition_overview': {
            image1: nutri1,
            title: '',
            subtitle1: 'Nutrition Intervention for Tribal Women and Children',
            section1: [
                'In Bhadradri Kothagudem, approximately 65% of tribal women aged 15-49 suffer from anemia due to inadequate nutrition, leading to complications such as low birth weight and pre-term deliveries as per a study. The lack of access to anganwadi centers exacerbates the situation, highlighting the urgent need for nutritional support for women and children.'
            ],
            subtitle2: 'Nutrition Powder Mix Initiative',
            image2: nutri2,
            section2: [
                'To address this, the IDO developed a Nutrition Powder Mix composed of:',
                '•	Bengal gram',
                '•	Wheat',
                '•	Jowar',
                '•	Ground nuts',
                '•	Jaggery powder',
                'This mix is designed to provide essential proteins, fats, carbohydrates, and iron, targeting under-5 children, pregnant women, and lactating mothers in 31 habitations.'
            ],
            subtitle3: 'Implementation',
            image3: nutri3,
            section3: [
                '•	Daily Distribution: Each beneficiary receives 60 grams of the Nutrition Powder as Ready-to-Use Food (RTUF) daily.',
                '•	Spot Feeding: Community Health Workers (CHWs) conduct daily spot feeding to encourage consistent consumption within the habitations.',
                '•	Production Unit: A production unit has been established in Regalla village, where two local tribal community members have been trained to prepare the powder, providing them with sustainable livelihoods.'
            ],
            subtitle4: 'Impact',
            image4: nutri4,
            section4: [
                'The initiative aims to provide 70 grams of nutrition powder daily to over 1800 beneficiaries in 40+ interior habitations, resulting in significant health improvements:',
                '•	Reduction of Anemia: 39.5%',
                '•	Reduction of Wasting: 38%',
                '•	Reduction of Underweight: 24%',
            ],
            subtitle5: 'Conclusion',
            image5: nutri5,
            section5: [
                'This program not only addresses the immediate nutritional needs of women and children but also empowers local community members by providing them with skills and livelihood opportunities. The sustainability of the nutrition unit ensures continued support for the community health and well-being.'
            ]
        }
    },
    sustainableHealth: {
        'sustainableHealth_overview': {
            image: missionThumbImg8,
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

