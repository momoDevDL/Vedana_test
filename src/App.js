import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainComponent from "./MainComponent";

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path={"/"} element={<MainComponent/>}/>
        </Routes>
    </Router>
  );
}

export default App;
