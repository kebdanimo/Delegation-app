import NavBar from "./website/Components/NavBar";
import Footer from "./website/Components/Footer";
import RoutesW from "./website/Components/Routes";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from "react-router-dom";

// import "../src/style.css";

//global css
import "../src/styles/global.css";
// nav bar
import "../src/styles/navBar.css";
// footer
import "../src/styles/footer.css";

import Website from "./website/Website";
import Application from "./app/Application";

function App() {
  return (
    <div className="big-container">
      <Routes>
        <Route path="/*" element={<Website></Website>}></Route>
        <Route path="/app/*" element={<Application></Application>}></Route>
      </Routes>
    </div>
  );
}

export default App;
