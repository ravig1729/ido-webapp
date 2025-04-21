import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { tabsContent } from '../data';

const WorkTabs = ({ pageKey }: { pageKey: keyof typeof tabsContent }) => {
    const tabItems = tabsContent[pageKey];
    const hasNamedTabs = tabItems.length > 1 && tabItems.every((tab) => 'tabName' in tab);

    const [key, setKey] = useState(
        hasNamedTabs ? (tabItems[0] as { tabName: string }).tabName : ''
    );

    if (!hasNamedTabs) {
        // Only one unnamed tab — just render the component directly
        const TabComponent = tabItems[0].component;
        return (
            <div className="work-tabs container">
                <div className="tab-content">
                    <TabComponent />
                </div>
            </div>
        );
    }

    return (
        <div className="work-tabs container">
            <Tabs
                id="work-tabs"
                activeKey={key}
                onSelect={(k) => setKey(k || (tabItems[0] as { tabName: string }).tabName)}
                className="mb-3"
            >
                {tabItems.map((tab) => (
                    <Tab
                        eventKey={(tab as { tabName: string }).tabName}
                        title={(tab as { tabName: string }).tabName}
                        key={(tab as { tabName: string }).tabName}
                    >
                        <div className="tab-content">
                            <tab.component />
                        </div>
                    </Tab>
                ))}
            </Tabs>
        </div>
    );
};

export default WorkTabs;