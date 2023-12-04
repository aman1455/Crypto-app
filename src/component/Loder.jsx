import React from 'react';
import { Box, Spinner } from '@chakra-ui/react';

const Loder = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Spinner size="xl" color="blue.400" />
    </Box>
  );
};

export default Loder;