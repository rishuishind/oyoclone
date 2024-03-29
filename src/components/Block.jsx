import Image from 'next/image'

const Block = ({ title, para, img = '/demo.svg' }) => {
    return (
        <div className=' border-r w-60 h-full flex items-center px-3'>
            <Image src={img} alt="oyo_logo" width={200} height={200} className='h-10 w-10 rounded-full mr-5' />
            <div>
                <h3 className=' font-bold'>{title}</h3>
                <p className=' text-gray-400 text-xs line-clamp-1'>{para}</p>
            </div>
        </div>
    )
}

export default Block