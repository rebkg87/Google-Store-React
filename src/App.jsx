import "./App.scss";
import WatchIndex from "./components/indexWatch/IndexWatch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WatchIndex />} />
        <Route path="/" element={< IndexEarbuds/>} />
        <Route path="/" element={< CartPage />} />
      </Routes>
    </Router>
  )
}

export default App
