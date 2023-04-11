import { useRef } from "react";
import { Box, SimpleGrid, Flex, Image } from "@chakra-ui/react";

function ImageGrid({searchResults = []}) {
  const observer = useRef();

  return (
    <Box marginTop="10px" paddingTop="10px" borderTop="2px" borderColor="#ffffff">
      <Box
        maxH="500px"
        overflowY="scroll"
        sx={{
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            bg: "gray.300",
            borderRadius: "full",
          },
        }}
      >
        <SimpleGrid columns={[2, 3, 4]} spacing={4}>
          {searchResults.map((photo, index) => (
            <Box key={photo.id}>
              <Flex
                alignItems="center"
                justifyContent="center"
                h="200px"
                ref={searchResults.length === index + 1 ? observer : null}
              >
                <Image
                  src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`}
                  alt={photo.title}
                />
              </Flex>
            </Box>
          ))}
          </SimpleGrid>
      </Box>
    </Box>
  );
}

export default ImageGrid;