import { lazy } from "react";

const Home = lazy(() => import('@/pages/home'))
const About = lazy(() => import('@/pages/about'))
const Reports = lazy(() => import('@/pages/reports'))
const Partners = lazy(() => import('@/pages/partners'))
const Contact = lazy(() => import('@/pages/contact'))
const Donation = lazy(() => import('@/pages/donation'))
const Error404 = lazy(() => import('@/pages/other-pages/error-404'))
const Faq = lazy(() => import('@/pages/other-pages/faq'))
const Team = lazy(() => import('@/pages/other-pages/team'))
const VolunteerForm = lazy(() => import('@/pages/volunteer-form'))
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
]

const otherRoutes = [
    {
        path: '/about',
        name: 'about',
        element: <About/>,
    },
    {
        path: '/reports',
        name: 'reports',
        element: <Reports/>,
    },
    {
        path: '/partners',
        name: 'partners',
        element: <Partners/>,
    },
    {
        path: '/contact',
        name: 'contact',
        element: <Contact/>,
    },
    {
        path: '/donation',
        name: 'donation',
        element: <Donation/>,
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
        path: '/pages/team',
        name: 'pages-team',
        element: <Team/>,
    },
    {
        path: '/pages/volunteer-form',
        name: 'volunteer-form',
        element: <VolunteerForm/>,
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
