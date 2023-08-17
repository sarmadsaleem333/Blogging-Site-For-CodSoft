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
import Alert from './components/Alert';
import { useState } from 'react';
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  }

  return (
    <>
      <ReactionState>
        <PostState>
          <UserState>
            <BrowserRouter>
              <Navbar />
              <Alert alert={alert} />
              <Routes>
                <Route path="/" element={<Home  showAlert={showAlert}/>} />
                <Route path="/myprofile" element={<MyProfile  showAlert={showAlert}/>} />
                <Route path="/users" element={<Users  showAlert={showAlert}/>} />
                <Route path="/blogdisplay/:postId" element={<DisplayFullBlog showAlert={showAlert} />} />
                <Route path="/signup" element={<SignUp showAlert={showAlert} />} />
                <Route path="/login" element={<Login  showAlert={showAlert}/>} />
              </Routes>
            </BrowserRouter>
          </UserState>
        </PostState>
      </ReactionState>

    </>
  );
}

export default App;
