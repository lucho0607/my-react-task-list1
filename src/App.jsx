import React from "react";
import Tasklist from "./components/Tasklist";
import MainTask from "./components/mainTask";
import Home from "./components/home";
import AboutUs from "./components/aboutUs";
import Menu from "./components/menu";
import BgImage from "./components/img/fondob.jpg";
import PgImage from "./components/img/papel.avif";

import { Box } from "@chakra-ui/react";

import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Box bg="white" padding="150">
      <BrowserRouter>
        <Box
          color="gray"
          bg="yellow"
          borderRadius="2px"
          backgroundImage={`url(${PgImage})`}
          bgRepeat="no-repeat"
          bgSize="cover"
        >
          <Menu />
        </Box>
        <Box
          fontFamily="georgia"
          justify="center"
          backgroundImage={`url(${BgImage})`}
          bgRepeat="no-repeat"
          bgSize="cover"
          color="white"
          bg=""
          textAlign="center"
          border="10"
          w="40"
          padding="100"
        >
          <Routes>
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/" element={<Home />} />
            <Route path="/MainTask" element={<MainTask />} />
            <Route path="/Task" element={<Tasklist />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </Box>
  );
}
export default App;
