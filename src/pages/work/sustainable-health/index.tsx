import Hero from '../components/Hero';
import WorkTabs from '../components/WorkTabs';
import { heroContent } from '../data';
const WorkPage = () => {
    return (
        <>
            <Hero
                title={heroContent.sustainableHealth.title}
                subtitle={heroContent.sustainableHealth.subtitle}
                backgroundImage={heroContent.sustainableHealth.backgroundImage}
                pageName={heroContent.sustainableHealth.pageName}
            />
            <WorkTabs pageKey='sustainableHealth'/>
        </>
    );
};

export default WorkPage;