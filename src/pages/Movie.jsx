import { useParams } from 'react-router-dom'

const MOVIES = [
  { id: '1', name: 'Avengers' },
  { id: '2', name: 'Batman' },
  { id: '3', name: 'Spiderman' },
]

export default function Movie() {
  const { id } = useParams()
  const movie = MOVIES.find((m) => m.id === id)

  return (
    <div className="container mt-4">
      <h2>Detalle de Película</h2>
      <div className="card mt-3">
        <div className="card-body">
          <h4>ID: {id}</h4>
          <h3>Nombre: {movie ? movie.name : 'No encontrada'}</h3>
        </div>
      </div>
    </div>
  )
}
