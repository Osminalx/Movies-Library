import { useState } from 'react'
import {Movie} from '../interfaces/movies.interface'
import {movies} from '../Api/movies'
import {IconPlayerPlay,IconPlayerPlayFilled,
  IconHeart,IconHeartFilled} from '@tabler/icons-react'


const MovieCard = ({_id,name,genero,fecha_publicacion,img,link,sipnosis,liked}:Movie) => {

  const formattedDate =new Date(fecha_publicacion).toLocaleDateString()
  const [isHovered, setIshovered] = useState(false);
  const[isLiked,setIsLiked] = useState(liked);
  
  const likeHandler =()=> {
    setIsLiked((prevLiked)=> !prevLiked )
    movies.patchLike(_id,!isLiked)
    .catch((error)=>console.error(error))
  }


  const playMovie = (link:string)=>{
    window.open(link,'_blank')
  }

  const handleMouseEnter = ()=>{
    setIshovered(true);
  }

  const handleMouseLeave = ()=>{
    setIshovered(false);
  }


  return (
    <div className='bg-primary rounded-md drop-shadow-md hover:drop-shadow-xl' >
      <div className='flex flex-col ' >
      <img src={img} alt={name} className='rounded-md h-60 ' />
      <div className='text-lg my-1 ' >{name}</div>
      <div className='flex flex-row justify-end' >
      <div className='flex justify-stretch mx-2 my-1 text-xs' > {formattedDate} </div>
      <div className='flex justify-stretch mx-2 my-1 text-xs' >{genero}</div>
      </div>
      <div className='flex flex-row justify-center' >
      <p>{sipnosis}</p>
      </div>
      <div className='flex flex-row p-3 justify-around ' >
      <div  
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='cursor-pointer m-0.5'
      >{

        isHovered ? (
          <IconPlayerPlayFilled onClick={()=>playMovie(link)}  className='justify-evenly' />
        ): (
          <IconPlayerPlay  onClick={()=> playMovie(link) }  className='justify-evenly' />
        )

      }</div>
      <div >
      {
        isLiked  ? (
          <IconHeartFilled className="cursor-pointer" onClick={likeHandler} />
        ) : (
          <IconHeart className="cursor-pointer" onClick={likeHandler} />
        )}
        </div>
        </div>
        </div>
    </div>
  )
}

export default MovieCard