import React from 'react'
import Card from './Card'

const About = () => {
  return (
    <section className='bg-white rounded-lg contenedor p-5 text-left md:p-10'>
        <h2 className='mb-5 font-semibold text-xl'>About this project</h2>
        <p>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
            to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
            your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
        </p>
        <p className='my-5'>
            Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
            to allow notepads, pens, and USB sticks to be stored under the stand.
        </p>
        <Card 
            titulo={'Bamboo Stand'}
            precio={'Pledge $25 or more'}
            parrafo={`You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
                    you’ll be added to a special Backer member list.`}
            numero={101}
        />
        <Card 
            titulo={'Black Edition Stand'}
            precio={'Pledge $75 or more'}
            parrafo={`You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
            member list. Shipping is included.`}
            numero={64}
        />
        <Card 
            titulo={'Mahogany Special Edition'}
            precio={'Pledge $200 or more'}
            parrafo={`You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
            to our Backer member list. Shipping is included.`}
            numero={0}
        />
    </section>
  )
}

export default About