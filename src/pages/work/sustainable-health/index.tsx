import Hero from '../components/Hero';
import WorkTabs from '../components/WorkTabs';
import { heroContent } from '../data';
import Counter from '../../about/components/Counter'

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
            <Counter/>
        </>
    );
};

export default WorkPage;