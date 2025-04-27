import Hero from '../components/Hero';
import WorkTabs from '../components/WorkTabs';
import { heroContent } from '../data';
import Counter from '../../about/components/Counter'

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
            <Counter/>
        </>
    );
};

export default WorkPage;