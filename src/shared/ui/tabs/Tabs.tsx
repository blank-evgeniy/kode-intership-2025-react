import React, { useCallback, useState } from "react";
import {
  Tab,
  TabContent,
  TabList,
  TabsContainer,
  TabsSeparator,
} from "./Tabs.styles";

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.id || "");

  const handleTabClick = useCallback((tabId: string) => {
    setActiveTab(tabId);
  }, []);

  return (
    <TabsContainer>
      <TabList role="tablist">
        {tabs.map((tab) => (
          <Tab
            key={tab.label}
            $isActive={activeTab === tab.id}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>
      <TabsSeparator />
      <TabContent>
        {tabs.map((tab) =>
          activeTab === tab.id ? <div key={tab.id}>{tab.content}</div> : null
        )}
      </TabContent>
    </TabsContainer>
  );
};

export default Tabs;
