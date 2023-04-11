import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

// Component switches background-image every 5 seconds
function BackgroundImageSwitcher({ images, interval = 5000, ...rest }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Create an array of Image objects and set their src to preload the images
    const imageObjects = images.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    // Clear the interval and free up memory when the component unmounts
    return () => {
      clearInterval(intervalId);
      imageObjects.forEach((img) => URL.revokeObjectURL(img.src));
    };
  }, [images, interval]);

  return (
    <Box
    bgImage={`url(${images[index]})`}
    bgSize="cover"
    bgPosition="center"
    h="100vh"
    w="100vw"
    {...rest}
  />
  );
}

export default BackgroundImageSwitcher;