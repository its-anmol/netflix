import './App.scss';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from "./Components/Home/Home.jsx"
import Header from './Components/Header/Header';
//xawafe2744@aosod.com
//movie1234@
function App() {
  return <Router>
      <Header />
    <Routes>
      <Route path="/" element={<Home />}/>;
    </Routes>
  </Router>;
}

export default App;
