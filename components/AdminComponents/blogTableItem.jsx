import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const BlogTableItem = ({ authorImage, title, author, date, deleteBlog, mongoId }) => {
    const BlogDate = new Date(date);
    return (
        <tr className='bg-white border-b'>
            <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                <Image
                    width={40}
                    height={40}
                    src={typeof authorImage === 'string' && authorImage.trim() !== '' ? authorImage : assets.profile_icon}
                    alt={author ? `${author}'s profile picture` : 'Default profile icon'}
                />
                <p>
                    {author || "No Author"}
                </p>
            </th>
            <td className='px-6 py-4'>
                {title || "No Title"}
            </td>
            <td className='px-6 py-4'>
                {BlogDate.toDateString()}
            </td>
            <td onClick={() => deleteBlog(mongoId)} className='px-6 py-4 cursor-pointer'>
                x
            </td>
        </tr>
    )
}

export default BlogTableItem