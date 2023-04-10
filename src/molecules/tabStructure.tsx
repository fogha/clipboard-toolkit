import { Flex } from '@chakra-ui/layout';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs';
import React, { useState } from 'react';
import { History } from '../templates/history';

const tabStructureConfig = [
  {
    position: 0,
    title: "History",
  },
  {
    position: 0,
    title: "Settings",
  }
]

export const TabStructure = () => {

  return (
    <div>
      <Tabs w="100%" variant="enclosed">
        <TabList>
          <Tab w="50%" fontSize={18}>History</Tab>
          <Tab w="50%" fontSize={18}>Settings</Tab>
        </TabList>

        <TabPanels>
          <TabPanel px={0}>
            <History />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}
