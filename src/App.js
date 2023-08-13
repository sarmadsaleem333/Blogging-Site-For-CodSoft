import './App.css';
import CreatePost from './components/CreatePost';
import Navbar from './components/Navbar';
import PostState from './context/postState';
import ReactionState from './context/reaction/reactionState';
import MyProfile from './components/MyProfile';
import Users from './components/Users';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
function App() {
  return (
    <>
      <ReactionState>   
        <PostState>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/myprofile" element={<MyProfile />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </BrowserRouter>
        </PostState>
      </ReactionState>

    </>
  );
}

export default App;
