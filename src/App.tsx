import './App.css'
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import Favorites from './pages/Favorites'
import {useState} from 'react'
import Modal from './components/Modal'


function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="bg-secondary text-white">
      <Navbar onOpen={() => setIsOpen(true)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/fav" element={<Favorites />} />
      </Routes>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} />
    </main>
  );
}

export default App
