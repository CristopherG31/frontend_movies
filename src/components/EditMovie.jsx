import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getMovies, updateMovie } from '../api/movieService'

export default function EditMovie() {
  const { id } = useParams()
  const [movie, setMovie] = useState({ title: '', synopsis: '', year: '', cover: '' })

  useEffect(() => {
    getMovies().then(({ data }) => {
      const found = data.find((m) => m.id == id)
      if (found) setMovie(found)
    })
  }, [id])

  const handleChange = (e) => setMovie({ ...movie, [e.target.name]: e.target.value })

  const handleUpdate = () => {
    updateMovie(id, movie)
      .then(() => alert('Película actualizada'))
      .catch(console.error)
  }

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow">
        <h2 className="mb-4">Editar película</h2>

        <input
          type="text"
          name="title"
          className="form-control mb-3"
          value={movie.title}
          onChange={handleChange}
        />
        <textarea
          name="synopsis"
          className="form-control mb-3"
          value={movie.synopsis}
          onChange={handleChange}
        />
        <input
          type="number"
          name="year"
          className="form-control mb-3"
          value={movie.year}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cover"
          className="form-control mb-3"
          value={movie.cover}
          onChange={handleChange}
        />
        <button className="btn btn-warning" onClick={handleUpdate}>
          Actualizar película
        </button>
      </div>

      <Link to="/home" className="btn btn-secondary mb-3">Regresar</Link>
      <Link to="/add" className="btn btn-secondary mb-3">Agregar</Link>
    </div>
  )
}
