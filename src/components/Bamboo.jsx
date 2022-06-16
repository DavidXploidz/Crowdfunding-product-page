import { useState } from 'react'
import logoG from '../images/logo-mastercraft.svg'
import bookMark from '../images/icon-bookmark.svg'
import cerrarModal from '../images/icon-close-modal.svg'

import CardModal from './CardModal'
import useCrow from '../hooks/useCrow'
import Gracias from './Gracias'

const Bamboo = () => {

const {mostrarModal, setMostrarModal} = useCrow()

const mostrarModalFn = () => {
    setMostrarModal(true)
}



  return (
    <div className='contenedor flex flex-col text-center font-bold text-xl bg-white rounded-lg px-2 hacia-arriba '>
        <img src={logoG} alt="LogoG" className='mx-auto logoG mb-2' />
        <div>
            <h1 className='md:text-4xl md:mb-5'>Mastercraft Bamboo <span className='block md:inline'>Monitor Riser</span></h1>
            <p className='text-sm font-light mt-2 md:text-xl md:mb-10'>A beautiful & handcrafted monitor stand to <span className='block md:inline'>reduce neck and eye strain.</span></p>
            <div className='flex justify-center gap-x-3 my-5 md:flex md:justify-between md:mx-10'>
                <button onClick={mostrarModalFn} className='btn-project md:text-xl'>Back this project</button>
                <div className='bookmark'>
                    <img src={bookMark} alt="Icon Bookmark" />
                    <p>Bookmarked</p>
                </div>
            </div>
            <Gracias />
            {/*Modal oculto*/}
            {mostrarModal && (
              <div className='modal-oculto contenedor bg-white p-10 rounded-lg shadow-lg  md:shadow-2xl'>
                  <div className='flex justify-between items-center'>
                      <h2>Back this project</h2>
                      <img onClick={cerrarModal => {setMostrarModal(false)}} src={cerrarModal} alt="icon close modal" className='cursor-pointer' />
                  </div>
                  <p className='text-left text-sm font-normal my-5'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                  <CardModal 
                      titulo={'Pledge with no reward'}
                      contenido={`Choose to support us without a reward if you simply believe in our project. As a backer, 
                      you will be signed up to receive product updates via email.`}
                  />
                  <CardModal 
                      titulo={'Bamboo Stand'}
                      precio={25}
                      contenido={`You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                      you’ll be added to a special Backer member list.
                      101 left`}
                      numero={101}
                  />
                  <CardModal 
                      titulo={'Black Edition Stand'}
                      precio={75}
                      contenido={`You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                      member list. Shipping is included.`}
                      numero={64}
                  />
                  <CardModal 
                      titulo={'Mahogany Special Edition'}
                      precio={200}
                      contenido={`You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                      to our Backer member list. Shipping is included.`}
                      numero={0}
                  />
              </div>
            )}
            
        </div>
    </div>
  )
}

export default Bamboo