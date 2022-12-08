import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Video from './components/Video/Video'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Links for test <br></br>
        <Router>
          <a href="/external?token=video-1">Video 1</a>
          <a href="/external?token=video-2">Video 2</a>
          <div>
            <Routes>
              <Route path="/external" element={<Video />}></Route>
              <Route path="/" element={<div>Hello</div>}></Route>
            </Routes>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
