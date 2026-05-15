import axios from 'axios'

const API_URL = 'https://movies-bit.onrender.com/api/movies'

export const getMovies = () => axios.get(API_URL)
export const addMovie = (movie) => axios.post(API_URL, movie)
export const updateMovie = (id, movie) => axios.put(`${API_URL}/${id}`, movie)
export const deleteMovie = (id) => axios.delete(`${API_URL}/${id}`)
