import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'
import {useState} from 'react'
import {Movie} from '../interfaces/movies.interface'

const SearchPage = () => {
  const [results, setResults] = useState<Movie[]>([]);

  return (
    <div className='flex flex-col my-5 justify-center items-center' >
      <SearchBar setResults={setResults} />
      <ResultsList  results={results} />
    </div>   
  )
}

export default SearchPage