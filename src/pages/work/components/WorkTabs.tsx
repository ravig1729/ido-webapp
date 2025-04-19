import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { tabsContent } from '../data';

const WorkTabs = ({ pageKey }: { pageKey: keyof typeof tabsContent }) => {
    const [key, setKey] = useState(tabsContent[pageKey][0].tabName);

    return (
        <div className="work-tabs container">
            <Tabs
                id="work-tabs"
                activeKey={key}
                onSelect={(k) => setKey(k || tabsContent[pageKey][0].tabName)}
                className="mb-3"
            >
                {tabsContent[pageKey].map((tab) => (
                    <Tab eventKey={tab.tabName} title={tab.tabName} key={tab.tabName}>
                        <div className="tab-content">
                            <tab.component /> {/* Render the component dynamically */}
                        </div>
                    </Tab>
                ))}
            </Tabs>
        </div>
    );
};

export default WorkTabs;