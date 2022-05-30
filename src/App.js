import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react';
import DemoForm from './components/DemoForm';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <DemoForm />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
