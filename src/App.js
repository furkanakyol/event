import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Communities from "./pages/Communities";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="*" exact element={<NotFound />}></Route>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/communities" exact element={<Communities/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
