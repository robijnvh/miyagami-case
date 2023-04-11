import { useState } from "react";
import { Box, Input, InputGroup, InputRightElement, Text, Button } from "@chakra-ui/react";
import ImageGrid from "./ImageGrid";

function ImageSearcher() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  
  const sendSearchQuery = async () => {
    const response = await fetch(`/api?query=${searchTerm}`);
    const data = await response.json();
    setSearchResults(data.photos);
  };

  return (
    <Box
    w="70%"
    position="absolute"
    top="40%"
    left="50%"
    transform="translate(-50%, -50%)"
    zIndex="1"
    backgroundColor="#000000be"
    padding="30px"
    borderRadius="6px"
    >
      <Text fontFamily="Titillium-Regular" textAlign="left" fontSize="3xl" color="#ffffff" marginBottom="20px">Image Searcher</Text>
      <InputGroup size='md'>
        <Input 
        fontFamily="Titillium-Thin"
        placeholder="Enter keyword here... (e.g. city, sky, dog)"
        backgroundColor="white"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        pr='4.5rem'
        />
        <InputRightElement width='4.5rem' pr='0.5rem'>
        <Button fontFamily="Titillium-Regular" h='1.75rem' size="sm" onClick={sendSearchQuery}>
          search
        </Button>
        </InputRightElement>
      </InputGroup>
      <ImageGrid searchResults={searchResults}/>
      <Text fontFamily="Titillium-Thin" textAlign="right" fontSize="10px" color="#ffffff" paddingTop="5px">By Robijn van Houts</Text>
      </Box>
  );
}

export default ImageSearcher;