import useCrow from '../hooks/useCrow'
import graciasIMG from '../images/icon-check.svg'


const Gracias = () => {


  const {mostrarGracias, setMostrarGracias} = useCrow()

  const cerrarGracias = () => {
    setMostrarGracias(false)
  }

  return (

    <>
    {mostrarGracias && (
      <div className='gracias rounded-lg shadow-2xl' >
          <img src={graciasIMG} alt="Icon check" />
          <h3 className='my-5'>Thanks for your support!</h3>
          <p className='text-sm font-light'>
            Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
            an email once our campaign is completed.
          </p>
          <button onClick={cerrarGracias} className='btn-project mt-10'>Got it!</button>
      </div>
    )}
     
    </>
    
  )
}

export default Gracias