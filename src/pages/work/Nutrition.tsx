import Hero from './components/Hero';
import WorkTabs from './components/WorkTabs';
import { heroContent } from './data';
const WorkPage = () => {
    return (
        <>
            <Hero
                title={heroContent.nutrition.title}
                subtitle={heroContent.nutrition.subtitle}
                backgroundImage={heroContent.nutrition.backgroundImage}
                pageName={heroContent.nutrition.pageName}
            />
            <WorkTabs pageKey='nutrition'/>
        </>
    );
};

export default WorkPage;