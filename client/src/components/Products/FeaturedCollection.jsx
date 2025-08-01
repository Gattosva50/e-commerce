import React from 'react'
import { Link } from 'react-router-dom'


const FeaturedCollection = () => {
  return (
    <section className='py-16 px-4 lg:px-0'>
        <div className='container mx-auto flex flex-col-reverse lg:flex-row items-center bg-red-300 rounded-3xl'>
            {/* Left Content */}
            <div className='lg:w-1/2 p-8 text-center lg:text-left'>
                <h2 className='text-lg font-semibold text-gray-700 mb-2'> Comfort and Style</h2>
                <h2 className='text-4xl lg:text-5xl font-bold mb-6'> Apparel made for your everyday life</h2>
                <p className='text-lg text-gray-600 mb-6'>
                    Discover high quality, comfortable clothing that effortlessly blends fashion and function. Designed to
                    make you look and feel great every day. 
                </p>

                <Link to="collections/all" className='bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-700'>
                    Shop Now
                </Link>
            </div>
            {/*Rigth image*/}
            <div className='lg:w-1/2'>
                <img src="https://media.istockphoto.com/id/932448170/photo/laughing-friends-in-sportswear-standing-together-in-a-gym.jpg?s=612x612&w=0&k=20&c=CtUEpNn_Rjn5d5EAlBLAi52IEdRnOqx5ebs5WniAQ1A=" 
                alt="Features Collection"
                className='w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl' />
            </div>
        </div>
    </section>
  )
}

export default FeaturedCollection
