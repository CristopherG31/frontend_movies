import { useState } from 'react'
import { addMovie } from '../api/movieService'

export default function AddMovie() {
  const [movie, setMovie] = useState({ title: '', synopsis: '', year: '', cover: '' })

  const handleChange = (e) => setMovie({ ...movie, [e.target.name]: e.target.value })

  const handleSubmit = () => {
    addMovie(movie)
      .then(() => alert('Película agregada'))
      .catch(console.error)
  }

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow">
        <h2 className="mb-4">Agregar película</h2>

        <input
          type="text"
          name="title"
          className="form-control mb-3"
          placeholder="Título"
          value={movie.title}
          onChange={handleChange}
        />
        <textarea
          name="synopsis"
          className="form-control mb-3"
          placeholder="Sinopsis"
          value={movie.synopsis}
          onChange={handleChange}
        />
        <input
          type="number"
          name="year"
          className="form-control mb-3"
          placeholder="Año"
          value={movie.year}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cover"
          className="form-control mb-3"
          placeholder="Imagen"
          value={movie.cover}
          onChange={handleChange}
        />
        <button className="btn btn-primary" onClick={handleSubmit}>
          Guardar película
        </button>
      </div>
    </div>
  )
}
