import Image from 'next/image'

const Hotel = () => {
  return (
    <div className='border-2 border-red-500 rounded-lg h-96 w-full mb-5 p-5'>
        <div className="flex">
            <Image src='https://www.shutterstock.com/image-illustration/hotel-sign-stars-3d-illustration-260nw-195879770.jpg' height={200} width={200} className='w-96 h-large-box mr-3'/>
            <div className="grid grid-rows-3">
                <Image src='https://www.shutterstock.com/image-illustration/hotel-sign-stars-3d-illustration-260nw-195879770.jpg' height={200} width={200} className='w-28 '/>
                <Image src='https://www.shutterstock.com/image-illustration/hotel-sign-stars-3d-illustration-260nw-195879770.jpg' height={200} width={200} className='w-28 '/>
                <Image src='https://www.shutterstock.com/image-illustration/hotel-sign-stars-3d-illustration-260nw-195879770.jpg' height={200} width={200} className='w-28 '/>
                <Image src='https://www.shutterstock.com/image-illustration/hotel-sign-stars-3d-illustration-260nw-195879770.jpg' height={200} width={200} className='w-28 '/>
            </div>
        </div>
    </div>
  )
}

export default Hotel