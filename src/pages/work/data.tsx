import eventBg from '@/assets/img/breadcrumb/vl-event-bg.png';
import missionThumbImg from '@/assets/img/about/vl-about-mission-thumb.png';
import WorkSection from './components/WorkSection'

export const tabsContent = {
    health: [
        {
            tabName: "Overview",
            component: () => <WorkSection section={workSection.health[0]} />,
        },
        {
            tabName: "Initiatives",
            component: () => <WorkSection section={workSection.health[1]} />,
        },
        {
            tabName: "Statistics",
            component: () => <WorkSection section={workSection.health[2]} />,
        },
    ],
    education: [
        {
            tabName: "Overview",
            component: () => <WorkSection section={workSection.education[0]} />,
        },
        {
            tabName: "Programs",
            component: () => <WorkSection section={workSection.education[1]} />,
        },
        {
            tabName: "Impact",
            component: () => <WorkSection section={workSection.education[2]} />,
        },
    ],
    nutrition: [
        {
            tabName: "Overview",
            component: () => <WorkSection section={workSection.nutrition[0]} />,
        },
        {
            tabName: "Challenges",
            component: () => <WorkSection section={workSection.nutrition[1]} />,
        },
        {
            tabName: "Solutions",
            component: () => <WorkSection section={workSection.nutrition[2]} />,
        },
    ],
    sustainableHealth: [
        {
            tabName: "Overview",
            component: () => <WorkSection section={workSection.sustainableHealth[0]} />,
        },
        {
            tabName: "Projects",
            component: () => <WorkSection section={workSection.sustainableHealth[1]} />,
        },
        {
            tabName: "Future Goals",
            component: () => <WorkSection section={workSection.sustainableHealth[2]} />,
        },
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
    health: [
        {
            image: missionThumbImg,
            title: 'Mobile medical unit (MMU)',
            subtitle: 'Intervention',
            points: [
                '1. Free healthcare services in rural areas since Jan 2021.',
                '2. Covers 2300 tribal people across 18 villages.',
                '3. Built trust with communities for long-term impact.',
            ],
        },
        {
            image: missionThumbImg,
            title: 'Mobile medical unit (MMU)',
            subtitle: 'Intervention',
            points: [
                '4. Free healthcare services in rural areas since Jan 2021.',
                '5. Covers 2300 tribal people across 18 villages.',
                '6. Built trust with communities for long-term impact.',
            ],
        },
        {
            image: missionThumbImg,
            title: 'Mobile medical unit (MMU)',
            subtitle: 'Intervention',
            points: [
                '7. Free healthcare services in rural areas since Jan 2021.',
                '8. Covers 2300 tribal people across 18 villages.',
                '9. Built trust with communities for long-term impact.',
            ],
        }
    ],
    education: [
        {
            image: missionThumbImg,
            title: 'Mobile medical unit (MMU)',
            subtitle: 'Intervention',
            points: [
                '1. Free healthcare services in rural areas since Jan 2021.',
                '2. Covers 2300 tribal people across 18 villages.',
                '3. Built trust with communities for long-term impact.',
            ],
        },
        {
            image: missionThumbImg,
            title: 'Mobile medical unit (MMU)',
            subtitle: 'Intervention',
            points: [
                '4. Free healthcare services in rural areas since Jan 2021.',
                '5. Covers 2300 tribal people across 18 villages.',
                '6. Built trust with communities for long-term impact.',
            ],
        },
        {
            image: missionThumbImg,
            title: 'Mobile medical unit (MMU)',
            subtitle: 'Intervention',
            points: [
                '7. Free healthcare services in rural areas since Jan 2021.',
                '8. Covers 2300 tribal people across 18 villages.',
                '9. Built trust with communities for long-term impact.',
            ],
        }
    ],
    nutrition: [
        {
            image: missionThumbImg,
            title: 'Mobile medical unit (MMU)',
            subtitle: 'Intervention',
            points: [
                '1. Free healthcare services in rural areas since Jan 2021.',
                '2. Covers 2300 tribal people across 18 villages.',
                '3. Built trust with communities for long-term impact.',
            ],
        },
        {
            image: missionThumbImg,
            title: 'Mobile medical unit (MMU)',
            subtitle: 'Intervention',
            points: [
                '4. Free healthcare services in rural areas since Jan 2021.',
                '5. Covers 2300 tribal people across 18 villages.',
                '6. Built trust with communities for long-term impact.',
            ],
        },
        {
            image: missionThumbImg,
            title: 'Mobile medical unit (MMU)',
            subtitle: 'Intervention',
            points: [
                '7. Free healthcare services in rural areas since Jan 2021.',
                '8. Covers 2300 tribal people across 18 villages.',
                '9. Built trust with communities for long-term impact.',
            ],
        }
    ],
    sustainableHealth: [
        {
            image: missionThumbImg,
            title: 'Mobile medical unit (MMU)',
            subtitle: 'Intervention',
            points: [
                '1. Free healthcare services in rural areas since Jan 2021.',
                '2. Covers 2300 tribal people across 18 villages.',
                '3. Built trust with communities for long-term impact.',
            ],
        },
        {
            image: missionThumbImg,
            title: 'Mobile medical unit (MMU)',
            subtitle: 'Intervention',
            points: [
                '4. Free healthcare services in rural areas since Jan 2021.',
                '5. Covers 2300 tribal people across 18 villages.',
                '6. Built trust with communities for long-term impact.',
            ],
        },
        {
            image: missionThumbImg,
            title: 'Mobile medical unit (MMU)',
            subtitle: 'Intervention',
            points: [
                '7. Free healthcare services in rural areas since Jan 2021.',
                '8. Covers 2300 tribal people across 18 villages.',
                '9. Built trust with communities for long-term impact.',
            ],
        }
    ],
};

