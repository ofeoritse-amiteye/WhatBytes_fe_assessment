"use client"
import Image from "next/image"
export default function Navbar() {
  return (
    <div className="bg-white h-20 border border-b-gray-200 flex items-center justify-between px-4">
        <div>
            <Image src="/images/whatbytes_logo.jpg" alt="logo" width={200} height={50} />
        </div>
        <div className="rounded-lg p-1 flex items-center border border-gray-200 gap-2">
            <div>
            <Image src="/images/profile.png" alt="logo" width={30} height={50} className="rounded-full" />
            </div>
            <div>
                <p className="text-black font-extrabold">Rahil Siddique</p>
            </div>
        </div>
    </div>)
}
