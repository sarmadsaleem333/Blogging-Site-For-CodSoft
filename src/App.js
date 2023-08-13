import './App.css';
import CreatePost from './components/CreatePost';
import Navbar from './components/Navbar';
import PostState from './context/postState';
import ReactionState from './context/reaction/reactionState';
function App() {
  return (
    <>
      <ReactionState>
        <PostState>
          <Navbar />
          <CreatePost />
        </PostState>
      </ReactionState>
    </>
  );
}

export default App;
