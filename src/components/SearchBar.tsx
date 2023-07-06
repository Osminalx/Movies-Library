import {useState} from 'react'
import {IconSearch} from '@tabler/icons-react'
import {movies} from '../Api/movies'
import {Movie} from '../interfaces/movies.interface'

type SearchBarProps = {
    setResults: React.Dispatch<React.SetStateAction<Movie[]>>
}

const SearchBar = ({setResults}:SearchBarProps) => {
    const [input,setInput]= useState("");

    const fetchData = (value:string)=>{
        movies.getAll().then((r)=>{
            try {
                const data = r.data
                const result = data.filter((movie:Movie)=>{
                    return(
                        value &&
                        movie &&
                        movie.name &&
                        movie.name.toLowerCase().includes(value) ||
                        movie.genero.toLowerCase().includes(value)
                    )
            })
            setResults(result)
            } catch (error) {
                console.error(error)
            }
        });
        
    }

    const handleChange = (value:string)=>{
        setInput(value)
        fetchData(value)
    }

  return (
    <div className='border-none rounded-lg p-4 shadow-md bg-primary flex items-center w-full h-10' >
        <IconSearch color='#40E675' />
        <input
        className='border-none text-xl w-full ml-1 focus:outline-none bg-transparent'
        type="text" 
        placeholder='Buscar...'
        value={input}
        onChange={(e)=> handleChange(e.target.value) }
        />
    </div>
  )
}

export default SearchBar