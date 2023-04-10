import React from 'react';

import { ChakraProvider, Flex, Text } from '@chakra-ui/react'
import { TabStructure } from './molecules/tabStructure';
import { ClipboardProvider } from './context/clipboardProvider';

function App() {
  return (
    <ClipboardProvider>
      <ChakraProvider>
        <Flex
          width="100%"
          height="100vh"
          justifyContent="center"
          alignItems="center"
          className="app"

        >
          <Flex shadow="xl" flexDirection="column" padding={4} width={420} height={480} borderRadius={8}>
            <Text></Text>

            <div>
              <TabStructure />
            </div>
          </Flex>
        </Flex>
      </ChakraProvider>
    </ClipboardProvider>
  );
}

export default App;
