import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import AboutUs from "./pages/aboutus/aboutUs";
import Layouts from "./layouts/layout";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Layouts>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/aboutus" exact={true} element={<AboutUs />} />
        </Routes>
      </Layouts>
    </>
  );
}

export default App;
