import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Movie from './pages/Movie'
import AddMovie from './components/AddMovie'
import EditMovie from './components/EditMovie'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/add" element={<AddMovie />} />
        <Route path="/edit/:id" element={<EditMovie />} />
      </Routes>
    </BrowserRouter>
  )
}
