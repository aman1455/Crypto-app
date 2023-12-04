import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ErrorC = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading size="xl" mb={4}>
        Oops! Something went wrong.
      </Heading>
      <Text fontSize="lg" mb={4}>
        While Fetching Data From Server
      </Text>
      <Button  colorScheme="teal" size="md">
      <Link to="/"> Go Back To Home</Link>
      </Button>
    </Box>
  );
};

export default ErrorC;