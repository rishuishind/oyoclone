import Image from 'next/image'
import Cookies from 'js-cookie';
import Link from 'next/link';

const SingleHotel = async (params) => {

  const response = await fetch(`${process.env.BASE_URL}/api/hotels/single?id=${params.params.id}`);
  const result = await response.json();
  const hotel = result.hotel;
  return (
    <div className=' w-7/12 mx-auto'>
      <Image src={hotel.banner} alt='banner-img' height={2000} width={2000} className='w-full h-large-box my-5' />
      <div className='mx-20'>
        <h3 className='font-bold text-3xl'>{hotel.name}</h3>
        <p className='my-5 text-lg text-justify'>{hotel.description}</p>
        <button className='w-60 h-14 rounded-lg bg-blue-500 hover:cursor-default text-white font-semibold'>Price : {hotel.price}</button>
        <p className=' text-3xl font-bold my-5'>Facilities :</p>
        <ul className='flex justify-between font-semibold'>
          {hotel.facilities.map((faci) => <li key={faci.name}>
            <span>{faci.name}</span>
            <Image src={faci.img} height={20} width={20} className='h-10 w-10 rounded-full' />
          </li>)}
        </ul>
        <button className='w-60 h-14 rounded-lg bg-red-500 my-3 text-white font-semibold'>Book Now</button>
      </div>
    </div>
  )
}

export default SingleHotel