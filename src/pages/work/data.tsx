import eventBg from '@/assets/img/breadcrumb/vl-event-bg.png';

export const tabsContent = {
    education: [
        {
            tabName: "Overview",
            component: () => <div>EducationContent</div>, // Component for the Overview tab
        },
        {
            tabName: "Programs",
            component: () => <div>Programs content for Education</div>, // Placeholder content
        },
        {
            tabName: "Impact",
            component: () => <div>Impact content for Education</div>, // Placeholder content
        },
    ],
    health: [
        {
            tabName: "Overview",
            component:  () => <div>HealthContent</div>, // Component for the Overview tab
        },
        {
            tabName: "Initiatives",
            component: () => <div>Initiatives content for Health</div>, // Placeholder content
        },
        {
            tabName: "Statistics",
            component: () => <div>Statistics content for Health</div>, // Placeholder content
        },
    ],
    nutrition: [
        {
            tabName: "Overview",
            component: () => <div>NutritionContent</div>, // Component for the Overview tab
        },
        {
            tabName: "Challenges",
            component: () => <div>Challenges content for Nutrition</div>, // Placeholder content
        },
        {
            tabName: "Solutions",
            component: () => <div>Solutions content for Nutrition</div>, // Placeholder content
        },
    ],
    sustainableHealth: [
        {
            tabName: "Overview",
            component: () => <div>SustainableHealthContent</div>, // Component for the Overview tab
        },
        {
            tabName: "Projects",
            component: () => <div>Projects content for Sustainable Health</div>, // Placeholder content
        },
        {
            tabName: "Future Goals",
            component: () => <div>Future Goals content for Sustainable Health</div>, // Placeholder content
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