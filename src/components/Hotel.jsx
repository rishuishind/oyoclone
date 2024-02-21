import Image from 'next/image'
import Link from 'next/link'

const Hotel = () => {
  return (
    <div className='border-2 border-red-500 rounded-lg h-72 w-full mb-5 p-5'>
      <div className="flex">
        <Image src='https://www.shutterstock.com/image-illustration/hotel-sign-stars-3d-illustration-260nw-195879770.jpg' height={200} width={200} className='w-96 h-60 mr-3' />
        <div className="grid grid-rows-3">
          <Image src='https://www.shutterstock.com/image-illustration/hotel-sign-stars-3d-illustration-260nw-195879770.jpg' height={200} width={200} className='w-28 ' />
          <Image src='https://www.shutterstock.com/image-illustration/hotel-sign-stars-3d-illustration-260nw-195879770.jpg' height={200} width={200} className='w-28 ' />
          <Image src='https://www.shutterstock.com/image-illustration/hotel-sign-stars-3d-illustration-260nw-195879770.jpg' height={200} width={200} className='w-28 ' />
          <Image src='https://www.shutterstock.com/image-illustration/hotel-sign-stars-3d-illustration-260nw-195879770.jpg' height={200} width={200} className='w-28 ' />
        </div>
        <div className="ml-20">
          <h2 className='font-bold line-clamp-1 text-3xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, illum!</h2>
          <p className='my-5 text-justify text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, autem? Sint vitae illo repellat excepturi ipsa recusandae quaerat laboriosam eaque voluptatum, similique quas laudantium, deleniti optio perferendis aperiam asperiores voluptate!</p>
          <p className='text-2xl my-5'>
            <span className='font-bold'>Facilities : </span>
            <span>Free wifi, Pet Care, Swimming Pool, Beaches, Resort</span>
          </p>
          <div className="flex items-center">
            <button className='w-60 h-14 rounded-lg bg-blue-500 hover:cursor-default text-white font-semibold'>Price : 4500</button>
            <Link className=' ml-10 font-bold text-lg text-red-500' href='/hotels/2'>See details</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotel