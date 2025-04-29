import { assets } from "@/assets/assets";
import Sidebar from "@/components/AdminComponents/sidebar";
import Image from "next/image";
import { ToastContainer } from 'react-toastify';

export default function Layout({ children }) {
    return (
        <>
            <div className="flex">
                <ToastContainer theme="dark" />
                <Sidebar />
                <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full h-[60px] px-12 shadow-[0_4px_6px_-2px_rgba(0,0,0,0.1)]">
                        <h3 className="font-medium">
                            Admin Panel
                        </h3>
                        <Image src={assets.profile_icon} width={40} alt="" />
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}