import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import heroBanner from '../../assets/hero-img.jpeg';
import dotGrid from '../../assets/pp.png'

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
          
        <div className="mx-auto flex gap-40 px-4 sm:px-6 lg:px-8 sm:flex-col">
            <div className="relative mt-20 lg:w-[33rem] w-96 ">
                <div className="animate-bounce">
                    <img src={dotGrid} className="mt-5 absolute border-blue-900 border-8 bg-cover"></img>
                    <img src={heroBanner} className="absolute ml-5 border border-black"></img>
                </div>
                
            </div>
            <div className="">
                <h1 className="text-3xl font-semibold">Join the millions learning to code <br/> with Codecademy for free</h1>
            </div>
        </div>
        </div>
    )
}

export default Home
