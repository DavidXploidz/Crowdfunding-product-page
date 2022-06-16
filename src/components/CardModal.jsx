import {useState} from 'react'
import useCrow from '../hooks/useCrow'
const CardModal = ({titulo, precio, contenido, numero}) => {

const {mostrarModal, setMostrarModal, setMostrarGracias, setCargando} = useCrow()
const [ activo, setActivo ] = useState()


const activarPledge = (e) => {
    const resultado = e.target.value
    if(resultado){
        setActivo(true)
    }
}

  return (
    <>
        <div className={activo ? 'border-activo divide-y-2' : `border-solid border-2 rounded-lg p-5 mb-7 text-left divide-y-2` + (numero <=0 ? ' opacity-25' : '')}>
            <div className='grid-modal'>
                <div className='grid-modal-1'>
                    {numero <= 0 ? (
                        <input disabled={true} type="radio" name='plan'  value={titulo} />
                    ) : (
                        <input type="radio" name='plan'  value={titulo} onClick={activarPledge} className="cursor-pointer" />
                    ) }
                </div>
                <div className='grid-modal-2'>
                    <div className='block md:flex gap-x-3'>
                        <h3 className='text-base'>{titulo}</h3>
                        {precio && <p className='titulo-card text-sm'>{`Pledge $${precio} or more`}</p> }
                      
                    </div>
                    
                </div>
                <div className='grid-modal-3'>
                    <p className='text-sm font-normal'>
                        {contenido}
                    </p>
                </div>
                <div className='grid-modal-4'>
                    {numero && (
                        <p className='text-3xl font-semibold text-black my-3'>{numero} <span className='text-sm font-light text-gray-500'>left</span></p>
                    )} 
                </div>
                
            </div>
            {/*Pledge Oculto */}
            {activo && (
                <div className='block md:flex justify-between items-center  '>
                    <p className='text-sm text-center font-light my-5 '>Enter your pledge</p>
                    <div className='grid grid-cols-2 items-center gap-x-2 md:flex md:mt-5  '>
                        <input type="text" className='input-pledge' placeholder='$' value={precio}/>
                        <button onClick={e=> {
                            setMostrarModal(false)
                            setMostrarGracias(true)
                            } 
                        } className='btn-pledge'>Continue</button>
                    </div>
                </div>
            )}
            
        </div>
    </>
    
  )
}

export default CardModal