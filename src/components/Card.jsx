import React from 'react'
import useCrow from '../hooks/useCrow'

const Card = ({titulo, precio, parrafo, numero}) => {

const {mostrarModal, setMostrarModal} = useCrow()

const mostrar = () => {
    setMostrarModal(true)
}



  return (
    <>
        <div className={`border-solid border-2 border-gry-200 rounded-lg p-5 mb-7` + (numero <=0 ? ' opacity-25' : '')}>
            <div className='block md:flex justify-between'>
                <h3 className='font-semibold'>{titulo}</h3>
                <p className='titulo-card'>{precio}</p>
            </div>
            <p className='my-5'>
                {parrafo}
            </p>
            <div className='block md:flex justify-between items-center '>
                <p className='text-3xl font-semibold text-black'>{numero} <span className='text-sm font-light text-gray-500'>left</span></p>
                {numero <= 0 ? (
                    <button className='btn-card-out' disabled={true}>Out of Stock</button>
                ): (
                    <button onClick={mostrar} className='btn-card'>Select Reward</button>
                )}
            </div>
            
            
        </div>
    </>
  )
}

export default Card