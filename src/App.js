import "./App.scss";
import { useState } from "react";
// import Navbar from "./components/Navbar/Navbar";
import Page from "./components/Pages/Page";
// import Sidebar from "./components/Sidebar/Sidebar";
// import Timeline from "./components/Timeline/Timeline";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import InstaState from "./context/InstaState";
import Redirect from "./components/Timeline/Redirect/Redirect";
import Screenloader from "./ScreenLoader/Screenloader";
function App() {
  const [loader, setloader] = useState(false)
  setTimeout(() => {
    setloader(true)
  }, 2000);
  return (
    <div className="App">
      <InstaState>
      
      {!loader&& <Screenloader/>}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={loader&&<Page />}/>
          <Route path="/redirect" element={<Redirect/>}/>
        </Routes>
      </BrowserRouter>
      </InstaState>
    </div>
  );
}

export default App;
