import {movies} from '../Api/movies'
import {useEffect, useState} from 'react'
import {Movie} from '../interfaces/movies.interface'
import MovieCard from './MovieCard'


const Movies = () => {

    const [allMovies,setallMovies] = useState <Movie[] | null> (null)

    useEffect(()=>{
        movies.getAll().then((r)=>{
        try {
            const everyMovie = r.data
            setallMovies(everyMovie)
        } catch (error) {
            console.error(error)
        }
    })
},[])


    return (
        <>
        {
            allMovies?.length !== 0 ?(
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-3' >
                    {allMovies && allMovies.map((movie) => (
                        <MovieCard
                            _id={movie._id}
                            name={movie.name}
                            genero={movie.genero}
                            fecha_publicacion={movie.fecha_publicacion}
                            img={movie.img}
                            link={movie.link}
                            sipnosis={movie.sipnosis}
                            liked={movie.liked}
                            key={movie._id}
                    />))}
                </div>
            ):(
                <div> No hay películas de momento</div>
            )
        }
        </>
    )
}

export default Movies