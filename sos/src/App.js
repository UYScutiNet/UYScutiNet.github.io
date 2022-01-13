import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

/*====== page =======*/
import Home from "./pages/home";

import "react-toastify/dist/ReactToastify.css";

const getLibrary = (provider) => {
  return new Web3(provider);
};

const App = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Web3ReactProvider>
  );
};

export default App;
