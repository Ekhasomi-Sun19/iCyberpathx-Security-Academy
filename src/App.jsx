import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import './styles/Responsive.css'
import './styles/Theme.css'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import SignUp from './pages/SignUp'
import Courses from './pages/Courses'
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/get-started" element={<SignUp />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App


