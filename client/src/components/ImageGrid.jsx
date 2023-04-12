import { useEffect, useRef } from "react";
import { Box, SimpleGrid, Flex, Image, Button } from "@chakra-ui/react";
import { useState } from "react";

// Loads a scrollable grid based on an array of images/photos
function ImageGrid({searchResults = []}) {
  const [photos, setPhotos] = useState([]);
  const observer = useRef();

  useEffect(() => {
    setPhotos(searchResults);
  }, [searchResults])

  const handleClickCancel = () => {
    setPhotos([]);
  }

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
          {photos.map((photo, index) => (
            <Box key={photo.id}>
              <Flex
                alignItems="center"
                justifyContent="center"
                h="200px"
                ref={photos.length === index + 1 ? observer : null}
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
      <Button hidden={photos.length === 0}  marginTop="10px" fontFamily="Titillium-Regular" h='1.75rem' size="sm" onClick={handleClickCancel}>Cancel</Button>
    </Box>
  );
}

export default ImageGrid;