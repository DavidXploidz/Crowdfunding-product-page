import React from 'react'

const Precios = () => {
  return (
    <div className='bg-white rounded-lg contenedor px-2 py-10 text-center'>
      <div className='grid grid-cols-1 divide-y-2 w-40 mx-auto   md:grid md:grid-cols-3 md:divide-x-2 md:w-full md:divide-y-0'>
        <span className='text-4xl font-semibold my-2'>$89,914<p className='block text-sm font-light my-2 '>of $100,000 backed</p></span>
        <span className='text-4xl font-semibold my-2'>5,007<p className='block text-sm font-light my-2'>total backers</p></span>
        <span className='text-4xl font-semibold my-2'>56<p className='block text-sm font-light my-2'>days left</p></span>
      </div>
        

        <div className='barra-precios md:my-10'>
            <div></div>
        </div>
    </div>
  )
}

export default Precios