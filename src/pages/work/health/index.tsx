import Hero from '../components/Hero';
import WorkTabs from '../components/WorkTabs';
import { heroContent } from '../data';
const WorkPage = () => {
    return (
        <>
           <Hero
                title={heroContent.health.title}
                subtitle={heroContent.health.subtitle}
                backgroundImage={heroContent.health.backgroundImage}
                pageName={heroContent.health.pageName}
            />
            <WorkTabs pageKey="health"/>
        </>
    );
};

export default WorkPage;