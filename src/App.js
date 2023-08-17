import './App.css';
import CreatePost from './components/CreatePost';
import Navbar from './components/Navbar';
import PostState from './context/postState';
import ReactionState from './context/reaction/reactionState';
import MyProfile from './components/MyProfile';
import Users from './components/Users';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import UserState from './context/usercontext/userState';
import DisplayFullBlog from './components/DisplayFullBlog';
import SignUp from './components/SignUp';
import Login from './components/Login';

global.message="";
global.Alert=false;
function App() {
  return (
  
    <>
      <ReactionState>
        <PostState>
          <UserState>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/myprofile" element={<MyProfile />} />
                <Route path="/users" element={<Users />} />
                <Route path="/blogdisplay/:postId" element={<DisplayFullBlog />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </BrowserRouter>
          </UserState>
        </PostState>
      </ReactionState>

    </>
  );
}

export default App;
