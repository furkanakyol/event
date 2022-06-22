import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Categories from "./pages/Categories";
import Communities from "./pages/Communities";
import EventPage from "./pages/EventPage";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CommunitPage from "./pages/CommunityPage";
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="*" exact element={<NotFound />}></Route>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/communities" element={<Communities/>}></Route>
          <Route path="/categories" element={<Categories/>}></Route>
          <Route path="/event/:eventId" element={<EventPage/>}/>
          <Route path="/c/:communityId" element={<CommunitPage/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
