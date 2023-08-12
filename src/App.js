import './App.css';
import CreatePost from './components/CreatePost';
import Navbar from './components/Navbar';
import PostState from './context/postState';
function App() {
  return (
    <>
      <PostState>
        <Navbar />
        <CreatePost />
      </PostState>
    </>
  );
}

export default App;
