import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ImageSearcher from "./components/ImageSearcher";
import BackgroundImageSwitcher from "./components/BackgroundImageSwitcher";
import Landscape from "./assets/images/Landscape.jpg";
import Bouldering from "./assets/images/Bouldering.jpg";
import Amsterdam from "./assets/images/Amsterdam.jpg";
import Coding from "./assets/images/Coding.jpg";
import BoatInOcean from "./assets/images/BoatInOcean.jpg";

function App() {
  return (
    <ChakraProvider>
      <BackgroundImageSwitcher
        images={[Landscape, Bouldering, Amsterdam, Coding, BoatInOcean]}
      />
      <ImageSearcher />
    </ChakraProvider>
  );
}

export default App;
