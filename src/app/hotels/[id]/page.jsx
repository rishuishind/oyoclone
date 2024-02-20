import Image from 'next/image'
const SingleHotel = () => {
  return (
    <div className=' w-7/12 mx-auto'>
      <Image src='https://www.shutterstock.com/image-illustration/hotel-sign-stars-3d-illustration-260nw-195879770.jpg' height={2000} width={2000} className='w-full h-large-box my-5'/>
      <div className='mx-20'>
        <h3 className='font-bold text-3xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat beatae nihil optio delectus nisi consectetur?</h3>
        <p className='my-5 text-lg text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vel maxime suscipit accusantium. Consectetur inventore consequuntur deleniti voluptatum assumenda iste totam nostrum sint officia! Porro molestiae voluptatibus maxime ab veniam. Vel a autem, accusantium sequi dolorem repudiandae similique recusandae rerum amet doloremque voluptatem ipsa tempore aliquid, optio veritatis voluptates labore. Repudiandae omnis esse facilis animi autem reprehenderit libero a vitae.</p>
        <button className='w-60 h-14 rounded-lg bg-blue-500 hover:cursor-default text-white font-semibold'>Price : 4500</button>
        <p className=' text-3xl font-bold my-5'>Facilities :</p>
        <ul className='flex justify-between font-semibold'>
          <li>Swimming</li>
          <li>Free Wifi</li>
          <li>GYM</li>
          <li>Free Breakfast</li>
          <li>Free Pickup</li>
        </ul>
        <button className='w-60 h-14 rounded-lg bg-red-500 my-3 text-white font-semibold'>Book Now</button>
      </div>
    </div>
  )
}

export default SingleHotel