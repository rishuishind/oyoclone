'use client'
import Image from 'next/image'
import Block from './Block'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

const Header1 = () => {
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        const key = Cookies.get('user');
        if (key) {
            setAuth(true);
            return;
        }
        setAuth(false);
    }, [auth]);

    const handleLogout = () => {
        Cookies.remove('user');
        setAuth(false);
    }

    return (
        <div className='flex h-24 px-10 justify-between border-b-2 items-center'>
            <Link href='/'>
                <Image src="/logo.png" alt="oyo_logo" width={200} height={200} className='h-28 w-28' />
            </Link>
            <div className=' flex h-full'>
                <Block title='Become a member' para='Additional 10% off on stays' />
                <Block title='OYO for business' para='Trusted by 5000 corporates' />
                <Block title='List your property' para='Start earning in 30 min.' img='/building.png' />
                <Block title='9205097674' para='Call me to hire for giving your website a new look.' img='/callIcon.png' />
                <div className="flex items-center px-3">
                    <Image src="/demo.svg" alt="oyo_logo" width={200} height={200} className='h-10 w-10 rounded-full mr-5' />
                    {!auth ? <Link href='/login'><h3 className='font-bold'>Login/Signup</h3></Link> : <button onClick={handleLogout} className='font-bold text-lg bg-red-500 text-white rounded-lg px-3 py-1'>Logout</button>}
                </div>
            </div >
        </div >
    )
}

export default Header1