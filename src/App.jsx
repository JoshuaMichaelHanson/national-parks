import logo from './logo.svg';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import StateParks from "./pages/StateParks/StateParks.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import NoPage from "./pages/404/NoPage.jsx";
import NationalParkDetails from "./components/NationalParkDetails/NationalParkDetails.jsx";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="state-parks" element={<StateParks />} />
              <Route path="contact" element={<Contact />} />
              <Route path="national-park-details/:parkCode" element={<NationalParkDetails />} />
              <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
