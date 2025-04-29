'use client';
import { blog_data } from '@/assets/assets';
import { assets } from '@/assets/assets'
import React, { useEffect, useState, use } from 'react';
import Image from 'next/image'
import Footer from '@/components/footer';
import Link from 'next/link';
import axios from 'axios';

const Page = (props) => {
    const { id } = use(props.params); // unwrap the params Promise

    const [data, setData] = useState(null);

    const fetchBlogData = async () => {
        const response = await axios.get('/api/blog', {
            params: { id }
        });
        setData(response.data);
    }

    useEffect(() => {
        fetchBlogData();
    }, [id]);

    return (data ? <>
        <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
            <div className='flex justify-between items-center'>
                <Link href='/'>
                    <Image src={assets.logo} width={120} alt='' className='w-[140px] sm:w-auto' />
                </Link>
                <Link href='/admin'>
                    <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-md/20'>
                        Admin
                        <Image src={assets.arrow} alt=''></Image>
                    </button>
                </Link>
            </div>
            <div className='text-center my-24'>
                <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>
                    {data.title}
                </h1>
                <Image className='mx-auto my-6 border border-white rounded-full' src={data.authorImage} width={60} height={60} alt='' />
                <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
            </div>
        </div>
        <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
            <Image className='border-4 border-white' src={data.image} width={1280} height={720} alt='' />
            <h1 className='my-8 text-[-26px] font-semibold'>
                Introduction:
            </h1>
            <p>{data.description}</p>
            <h3 className='my-5 text-[18px] font-semibold'>
                Paragraph 1
            </h3>
            <p className='my-3'>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
            </p>
            <h3 className='my-5 text-[18px] font-semibold'>
                Paragraph 2
            </h3>
            <p className='my-3'>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
            </p>
            <h3 className='my-5 text-[18px] font-semibold'>
                Conclusion
            </h3>
            <p className='my-3'>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
            </p>
            <div className='my-24'>
                <p className='text-black font-semibold my-4'>Share this article on social media</p>
                <div className='flex'>
                    <Image src={assets.facebook_icon} alt='' width={40} />
                    <Image src={assets.twitter_icon} alt='' width={40} />
                    <Image src={assets.googleplus_icon} alt='' width={40} />
                </div>
            </div>
        </div>
        <Footer />
    </> : <></>
    )
}

export default Page;