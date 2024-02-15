import Image from "next/image"

const Header4 = () => {
    return (
        <div className="flex my-14 items-center justify-between border-2 border-gray-300 p-5 rounded-lg">
            <div className="flex items-center">
                <Image src="/fire.jpg" alt="fire" width={200} height={200} className=" w-32 h-32 rounded-full mr-5" />
                <div className="text-xl">
                    <h3 className="font-bold">Get access to exclusive deals</h3>
                    <p>Only the best deals reach your inbox</p>
                </div>
            </div>
            <div className="flex">
                <input type="email" className="px-6 mr-5 py-3 rounded-lg outline-none border border-gray-300" placeholder="e.g hespnod45gmail.com" />
                <button type="submit" className="bg-[#ee2a24] text-white px-6 rounded-lg cursor-pointer font-bold">Notify me</button>
            </div>
        </div>
    )
}

export default Header4