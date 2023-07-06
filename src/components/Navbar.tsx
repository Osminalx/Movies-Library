import {Link} from 'react-router-dom'
import {IconPlus,IconMovie,IconSearch,IconHeart} from '@tabler/icons-react'

type navBarProps={
  onOpen: () => void;
}

const Navbar = ({onOpen}:navBarProps) => {
  

  return (
    <nav className=' bg-primary text-white p-1.5 rounded-md drop-shadow-md' >
        <ul className='grid grid-cols-4 ' >
        <li > <Link to ='/' className='flex flex-col items-center' > <IconMovie color='#40E675' /> </Link> </li>
        <li > <Link to='/search' className='flex flex-col items-center' > <IconSearch color='#40E675' /> </Link> </li>
        <li > <Link to='/fav' className='flex flex-col items-center' > <IconHeart color='#40E675' /> </Link> </li>
        <li className='flex flex-col items-center' > <IconPlus className='cursor-pointer ' onClick={onOpen} color='#40E675'  /> </li>
        </ul>
    </nav>
  )
}

export default Navbar