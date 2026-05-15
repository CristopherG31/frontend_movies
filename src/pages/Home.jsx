import { Link } from 'react-router-dom'
import bodyBg from '../assets/body.png';
import netflixBg from '../assets/netflix.png';

export default function Home() {
  return (
    <div
      className="min-vh-100 d-flex flex-column text-white"
      style={{
        backgroundImage: `url(${bodyBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container flex-grow-1">
        <div className="row bg-dark text-white p-3">
          <div className="col">
            <img className="img-fluid" src={netflixBg} width={250} alt="Logo" /> |
          </div>
        </div>

        <div className="row mt-4 text-white p-3">
          <div className="col">
            <h1>Catálogo de Películas</h1>
            <p>
              Bienvenido a nuestro catálogo donde podrás encontrar las mejores películas de Anime
            </p>
            <Link to="/movies" className="btn btn-primary">Ver Películas</Link>
            <br />
            <Link to="/add" className="btn btn-secondary mb-3">Agregar Películas</Link>
          </div>
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
