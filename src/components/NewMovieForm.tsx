import {Formik,Form,Field} from 'formik'
import {FormValues} from '../interfaces/movies.interface'
import {movies} from '../Api/movies'


const NewMovieForm = () => {



  const handleSubmit = (values:FormValues)=>{
    movies.postAll(values).then((response)=>{
      console.log(response.data)
    }).catch((error)=>{
      console.error(error)
    })
  }

  

  return (
    <div>
      <Formik
        initialValues={{
          name:'',
          genero:'',
          fecha_publicacion: new Date,
          img:'',
          link:'',
          sipnosis:'',
          liked:false }}
          onSubmit={(values:FormValues,{resetForm})=>{
            handleSubmit(values);
            resetForm()
          }}
      >
        <div className='text-white' >
        <div className='flex flex-col justify-center text-center text-lg' > Añadir nueva película </div>
        <Form className='flex flex-col p-5  ' >
          <div className='flex flex-col m-3' >
            <label htmlFor="Nombre">Nombre de la película</label>
            <Field type='text' name='name' placeholder='Nombre' className='rounded-md text-secondary px-2 focus:outline-none' />
          </div>
          <div className='flex flex-col m-3' >
            <label htmlFor="genero">Género</label>
            <Field type='text' name='genero' placeholder='Género' className='rounded-md text-secondary px-2 focus:outline-none' />
          </div>
          <div className='flex flex-col m-3' >
            <label htmlFor="Fecha">Fecha de publicación</label>
            <Field type='date' name='fecha_publicacion' 
            placeholder={new Intl.DateTimeFormat('en-ca').format(new Date())} 
            className='rounded-md text-secondary px-2 focus:outline-none' />
          </div>
          <div className='flex flex-col m-3' >
            <label htmlFor="img">Imagen</label>
            <Field type='text' name='img' placeholder='img link' className='rounded-md text-secondary px-2 focus:outline-none'/>
          </div>
          <div className='flex flex-col m-3' >
            <label htmlFor="link">Link de la película</label>
            <Field type='text' name='link' placeholder='movie link' className='rounded-md text-secondary px-2 focus:outline-none'/>
          </div>
          <div className='flex flex-col m-3' >
            <label htmlFor="sipnosis">Sipnosis</label>
            <Field type='text' name='sipnosis' placeholder='sipnosis' 
            className='rounded-md text-secondary p-2 focus:outline-none'/>
            <button type='submit' className='rounded-lg bg-tertiary text-secondary hover:bg-opacity-40 my-5' >Enviar</button>
          </div>
        </Form>
        </div>
      </Formik>
    </div>
  )
}

export default NewMovieForm