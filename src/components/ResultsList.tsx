import {Movie} from '../interfaces/movies.interface'
import MovieCard from './MovieCard'

type ResultListProps ={
    results: Movie[]
}

const ResultsList = ({results}:ResultListProps) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 my-5 w-full gap-6' >{
        results.map((result)=>{
            return <MovieCard
            _id={result._id}
            name={result.name}
            genero={result.genero}
            fecha_publicacion={result.fecha_publicacion}
            img={result.img}
            link={result.link}
            sipnosis={result.sipnosis}
            liked={result.liked}
            key={result._id}
    />
        })
    }</div>
  )
}

export default ResultsList