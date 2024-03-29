'use client'
import Link from 'next/link'
import { useState } from 'react'

const Header3 = () => {
    const [city, setCity] = useState(' ');
    return (
        <div className=' bg-gradient-to-r from-red-600 to-red-400 h-60'>
            <div className="p-5">
                <h2 className='font-bold text-4xl text-center text-white'>Over 174,000+ hotels and homes across 35+ countries</h2>
                <div className="flex justify-center my-5 mx-20">
                    <input onChange={(e) => setCity(e.target.value)} type="text" placeholder='Search...' className=' w-6/12 h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-2' />
                    {/* <input type="text" placeholder='Search...' className=' h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1' />
                    <input type="text" placeholder='Search...' className=' h-16 outline-none px-3 text-lg col-span-1' /> */}
                    <button type="submit" className="col-span-1 py-2 px-3 h-16 bg-green-500 hover:cursor-pointer hover:bg-green-600 w-72 text-xl text-white"><Link href={`/hotels?city=${city}`}>Search</Link></button>
                </div>
                <div className="flex mx-20 my-5 font-bold">
                    <button type='submit' className=' h-16 px-3 py-2 hover:cursor-pointer text-white mr-5'>Continue your Search</button>
                    <button type='submit' className=' h-16 px-3 py-2 hover:cursor-pointer text-white border-2 border-white hover:bg-red-600  mr-5'>Homestay in Indian hotels</button>
                </div>
            </div>
        </div>
    )
}

export default Header3