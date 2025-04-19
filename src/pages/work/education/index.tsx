import Hero from '../components/Hero';
import WorkTabs from '../components/WorkTabs';
import { heroContent } from '../data';
const WorkPage = () => {
    return (
        <>
         <Hero
                title={heroContent.education.title}
                subtitle={heroContent.education.subtitle}
                backgroundImage={heroContent.education.backgroundImage}
                pageName={heroContent.education.pageName}
            />
            <WorkTabs pageKey="education"/>
        </>
    );
};

export default WorkPage;