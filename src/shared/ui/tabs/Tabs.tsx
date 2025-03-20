import React, { useCallback, useState } from "react";
import {
  Tab,
  TabContent,
  TabList,
  TabsContainer,
  TabsSeparator,
} from "./Tabs.styles";

export interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.label || "");

  const handleTabClick = useCallback((tabLabel: string) => {
    setActiveTab(tabLabel);
  }, []);

  return (
    <TabsContainer>
      <TabList role="tablist">
        {tabs.map((tab) => (
          <Tab
            key={tab.label}
            $isActive={activeTab === tab.label}
            onClick={() => handleTabClick(tab.label)}
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>
      <TabsSeparator />
      <TabContent>
        {tabs.map((tab) =>
          activeTab === tab.label ? (
            <div key={tab.label}>{tab.content}</div>
          ) : null
        )}
      </TabContent>
    </TabsContainer>
  );
};

export default Tabs;
