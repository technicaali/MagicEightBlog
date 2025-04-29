import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='flex flex-col w-full max-w-[280px] bg-slate-100 h-screen shadow-[4px_0_6px_-2px_rgba(0,0,0,0.1)]'>
            <div className='px-4 py-3 flex items-center justify-center'>
                <Link href='/'>
                    <Image src={assets.logo} width={100} alt='Logo' />
                </Link>
            </div>

            <nav className='flex flex-col gap-4 p-4 mt-10'>
                <Link href='/admin/addProduct' className='flex items-center gap-3 border border-black px-3 py-2 bg-white shadow hover:shadow-md text-sm sm:text-base'>
                    <Image src={assets.add_icon} alt='Add' width={24} />
                    <span className='truncate'>Add Blogs</span>
                </Link>

                <Link href='/admin/blogList' className='flex items-center gap-3 border border-black px-3 py-2 bg-white shadow hover:shadow-md text-sm sm:text-base'>
                    <Image src={assets.blog_icon} alt='List' width={24} />
                    <span className='truncate'>Blog List</span>
                </Link>

                <Link href='/admin/subscriptions' className='flex items-center gap-3 border border-black px-3 py-2 bg-white shadow hover:shadow-md text-sm sm:text-base'>
                    <Image src={assets.email_icon} alt='Subs' width={24} />
                    <span className='truncate'>Subscriptions</span>
                </Link>
            </nav>
        </div>
    );
}

export default Sidebar;

