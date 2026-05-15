import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getMovies, deleteMovie } from '../api/movieService'
import './Movies.css'

export default function Movies() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovies().then(({ data }) => setMovies(data))
  }, [])

  const handleDelete = (id) => {
    deleteMovie(id).then(() => {
      alert('Película eliminada')
      setMovies((prev) => prev.filter((m) => m.id !== id))
    })
  }

  return (
    <div
      className="min-vh-100 d-flex flex-column text-white"
      style={{
        backgroundImage: "url('/img/body.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="netflix-container">
        <h1 className="title">Catálogo de Películas</h1>

        <div className="movies-grid">
          {movies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img
                src={`https://movies-bit.onrender.com//storage/covers/${movie.cover}`}
                alt="cover"
              />
              <div className="movie-info">
                <h2>{movie.title}</h2>
                <p>{movie.synopsis}</p>
                <span>{movie.year}</span>
                <br />
                <Link to={`/edit/${movie.id}`} className="btn btn-warning">
                  Edit
                </Link>
                <button className="btn btn-danger" onClick={() => handleDelete(movie.id)}>
                  Eliminar
                </button>
                <a href={movie.trailer} target="_blank" rel="noreferrer" className="btn btn-danger">
                  Ver Trailer
                </a>
              </div>
            </div>
          ))}
        </div>

        <div>
          <Link to="/add" className="btn btn-secondary mb-3">Agregar</Link>
          <br />
          <Link to="/home" className="btn btn-secondary mb-3">Regresar</Link>
        </div>
      </div>

      <footer className="bg-dark text-white text-center p-3 mt-auto">
        <p>Materia: Conceptualización de entornos de desarrollo</p>
        <p>Nombre: Cristopher Adrián González</p>
        <p>Código: 207706561</p>
        <p>Correo: adriangonzalez1.uber@gmail.com</p>
      </footer>
    </div>
  )
}
