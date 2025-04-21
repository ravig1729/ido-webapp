import { lazy } from "react";

const Home = lazy(() => import('@/pages/multi-page/home'))
const About = lazy(() => import('@/pages/about'))

const Reports = lazy(() => import('@/pages/reports'))
const Contact = lazy(() => import('@/pages/contact'))
const Error404 = lazy(() => import('@/pages/other-pages/error-404'))
const Faq = lazy(() => import('@/pages/other-pages/faq'))
const Service = lazy(() => import('@/pages/other-pages/service'))
const Team = lazy(() => import('@/pages/other-pages/team'))

const Health = lazy(() => import('@/pages/work/health'));
const Nutrition = lazy(() => import('@/pages/work/nutrition'));
const Education = lazy(() => import('@/pages/work/education'));
const SustainableHealth = lazy(() => import('@/pages/work/sustainable-health'));

const multiPageRoutes = [
    {
        path: '/',
        name: 'multi-page-home',
        element: <Home/>,
    },
    // {
    //     path: '/multi-page/animal-rescue',
    //     name: 'multi-page-animal-rescue',
    //     element: <MultiPageAnimalRescue/>,
    // },
    // {
    //     path: '/multi-page/human-rights',
    //     name: 'multi-page-human-rights',
    //     element: <MultiPageHumanRights/>,
    // },
    // {
    //     path: '/multi-page/senior-citizen',
    //     name: 'multi-page-senior-citizen',
    //     element: <MultiPageSeniorCitizen/>,
    // },
    // {
    //     path: '/multi-page/water-aid',
    //     name: 'multi-page-water-aid',
    //     element: <MultiPageWaterAid/>,
    // },
]

// const singlePageRoutes = [
//     {
//         path: '/home-single',
//         name: 'multi-page-home',
//         element: <SinglePageHome/>,
//     },
//     {
//         path: '/animal-rescue',
//         name: 'single-page-animal-rescue',
//         element: <SinglePageAnimalRescue/>,
//     },
//     {
//         path: '/human-rights',
//         name: 'single-page-human-rights',
//         element: <SinglePageHumanRights/>,
//     },
//     {
//         path: '/senior-citizen',
//         name: 'single-page-senior-citizen',
//         element: <SinglePageSeniorCitizen/>,
//     },
//     {
//         path: '/water-aid',
//         name: 'single-page-water-aid',
//         element: <SinglePageWaterAid/>,
//     },
// ]

const otherRoutes = [
    {
        path: '/about',
        name: 'about',
        element: <About/>,
    },
    // {
    //     path: '/event',
    //     name: 'event',
    //     element: <Event/>,
    // },
    // {
    //     path: '/event-left',
    //     name: 'event-left',
    //     element: <EventLeft/>,
    // },
    // {
    //     path: '/event-right',
    //     name: 'event-right',
    //     element: <EventRight/>,
    // },
    // {
    //     path: '/event-single',
    //     name: 'event-single',
    //     element: <EventSingle/>,
    // },
    {
        path: '/reports',
        name: 'reports',
        element: <Reports/>,
    },
    // {
    //     path: '/blog-left',
    //     name: 'blog-left',
    //     element: <BlogLeft/>,
    // },
    // {
    //     path: '/blog-right',
    //     name: 'blog-right',
    //     element: <BlogRight/>,
    // },
    // {
    //     path: '/blog-single',
    //     name: 'blog-single',
    //     element: <BlogSingle/>,
    // },
    // {
    //     path: '/cause',
    //     name: 'cause',
    //     element: <Cause/>,
    // },
    // {
    //     path: '/cause-left',
    //     name: 'cause-left',
    //     element: <CauseLeft/>,
    // },
    // {
    //     path: '/cause-right',
    //     name: 'cause-right',
    //     element: <CauseRight/>,
    // },
    // {
    //     path: '/cause-single',
    //     name: 'cause-single',
    //     element: <CauseSingle/>,
    // },
    {
        path: '/contact',
        name: 'contact',
        element: <Contact/>,
    },
    {
        path: '/pages/error-404',
        name: 'pages-error-404',
        element: <Error404/>,
    },
    {
        path: '/pages/faq',
        name: 'pages-faq',
        element: <Faq/>,
    },
    {
        path: '/pages/service',
        name: 'pages-service',
        element: <Service/>,
    },
    {
        path: '/pages/team',
        name: 'pages-team',
        element: <Team/>,
    },
    {
        path: '/pages/health',
        name: 'work',
        element: <Health/>,
    },
    {
        path: '/pages/nutrition',
        name: 'work',
        element: <Nutrition/>,
    },
    {
        path: '/pages/education',
        name: 'work',
        element: <Education/>,
    },
    {
        path: '/pages/sustainable-health',
        name: 'work',
        element: <SustainableHealth/>,
    },
]

const landingRoutes = [
    ...multiPageRoutes
]

export { landingRoutes, otherRoutes };
