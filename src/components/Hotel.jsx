import Image from 'next/image'
import Link from 'next/link'

const Hotel = ({ data }) => {
  const heading = data.name;
  const description = data.description;
  const banner = data.banner;
  const gallery = data.gallery;
  const facilities = data.facilities;
  const price = data.price;
  return (
    <div className='border-2 border-red-500 rounded-lg h-72 w-full mb-5 p-5'>
      <div className="flex">
        <Image src={banner} alt='banner-img' height={200} width={200} className='w-96 h-60 mr-3' />
        <div className="flex flex-col justify-between">
          {gallery?.map((i) => {
            return (<div key={i._id}>
              <Image src={i} alt='gallery-img' height={20} width={20} className=' w-24 h-14' />
            </div>)
          })}
        </div>
        <div className="ml-20">
          <h2 className='font-bold line-clamp-1 text-3xl'>{heading}</h2>
          <p className='my-5 text-justify text-lg'>{description}</p>
          <div className='text-2xl my-5 flex items-center'>
            <span className='font-bold'>Facilities : </span>
            {facilities.map((facilities) => (<ul key={facilities.name}>
              <li className='flex items-center'>
                <span className='ml-10 mr-3'>{`${facilities.name}`}</span>
                <Image src={facilities.img} alt='facilities-icon' width={40} height={40} className='w-8 h-8 rounded-full mr-5' />
              </li>
            </ul>))}
          </div>
          <div className="flex items-center">
            <button className='w-60 h-14 rounded-lg bg-blue-500 hover:cursor-default text-white font-semibold'>Price : {price}</button>
            <Link className=' ml-10 font-bold text-lg text-red-500' href={`/hotels/${data?._id}`}>See details</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotel