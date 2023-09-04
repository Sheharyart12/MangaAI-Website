import React from 'react'
import { IoMdCopy } from 'react-icons/io'

const FirstMangaAI = () => {
      return (

            <div className='bg-main-gray pb-5 h-screen'>
                  <div className='flex flex-col lg:flex-row lg:items-center bg-main-gray h-full font-Lato'>
                        <div className=' lg:w-1/2 p-3 lg:ml-10 pt-5 font-Lato'>
                              <h1 className='text-[#A075B4] leading-normal text-3xl lg:text-[68px] font-custom9 '>MANGA AI</h1>
                              <h3 className='text-[#88C48A] font-custom8 text-lg lg:text-[39px]'>Unleash Your Anime Creativity </h3>
                              <p className='text-[#F8F7F5] text-sm lg:text-2xl mt-16'>Welcome to Manga AI, where creativity meets technology to revolutionize anime content creation. Our platform blends AI and blockchain, offering a unique space for creators and fans to explore, collaborate, and thrive.</p>

                              <div className='flex items-center gap-x-4 mt-5'>
                                    <button className="rounded-md bg-gradient-to-r from-purple-500 to-green-500 text-[26px] text-[#F8F7F5] px-6 py-3">Generate Anime Art</button>

                                    <div className='w-[3px] h-[57.009px] ml-1 bg-[#8F41B4]' />

                                    
                                    <p className='text-[#F8F7F5] text-sm lg:text-[26px] font-custom7 '><u>Documentation</u></p>
                              </div>
                        </div>

                        <div className='flex h-full items-center lg:w-[70%] justify-center relative'>
                              <img className='hidden lg:block' src='/images/hero-image.svg' />
                        </div>

                  </div>


            </div>

      )
}

export default FirstMangaAI