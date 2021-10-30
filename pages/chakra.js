import { Box, Button, ChakraProvider } from "@chakra-ui/react";

const Chakra = () => {
  return (
    <ChakraProvider>
      <Box align="center">
        <Button colorScheme="teal">About</Button>
      </Box>
    </ChakraProvider>
  );
};
export default Chakra;
