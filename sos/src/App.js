import { BrowserRouter, Route, Routes } from "react-router-dom";

/*====== page =======*/
import Home from "./pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
