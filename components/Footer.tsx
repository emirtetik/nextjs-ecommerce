import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from '@/constans'
import { linkSync } from 'fs'
const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-300'>
         <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
            <div className="flex justify-center items-start gap-6 flex-col ">
                <Image src={"/logo.svg"} alt="logo" width={118} height={18} className='object-contain'/>
                <p className="text-base text-gray-700 ">&copy; CarHub 2023 <br /> All rights reserved</p>
                 </div>
                 <div className="footer__links">
                    {footerLinks.map((link) => (
                        <div key={link.title} className='footer__link'>
                            <h3 className='font-bold'>{link.title}</h3>
                            {link.links.map((item) => (
                                <Link key={item.title} href={item.url} className='footer__link-item text-gray-500'>{item.title}</Link>
                            ))}
                        </div>
                    ))} 
                 </div>
         </div>

                 <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
                    <p>@2023 CarHub. All rights reserved</p>
                    <div className="footer__copyrights-link">
                        <Link href={"/"} className="text-gray-500 hover:text-primary-blue">Privacy Policy</Link>
                        <Link href={"/"} className="text-gray-500 hover:text-primary-blue">Terms of Use</Link>

                    </div>
                 </div>
    </footer>
  )
}

export default Footer