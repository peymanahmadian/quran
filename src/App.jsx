import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Text from "./pages/text.page";
import Home from "./pages/home.page";
const App=()=> {

  return (
    <BrowserRouter>
    <div>
        <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/view" element={<Text/>} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
