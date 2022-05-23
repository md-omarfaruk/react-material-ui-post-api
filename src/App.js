import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import SinglePost from './components/SinglePost/SinglePost';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts/:postId" element={<SinglePost />} />        
      </Routes>
    </div>
  );
}

export default App;
