import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Image from 'next/image'
import { BsFacebook } from "react-icons/Bs";
import { VscGithub } from "react-icons/Vsc";
// import { FaLinkedinIn } from "react-icons/fa";
// import { BsLinkedin } from "react-icons/Bs";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { MdFacebook } from "react-icons/md";

const LeftBar = ({ pathName, setPathName }) => {
    const [gitHub, setHub] = useState('false')
    // const [pathName, setPathName] = useState()
    const route = useRouter()


    const handlePath = (path) => {
        window.location.replace(path)
        setPathName(path)
    }

    return (
        <div className='z-10 flex flex-col items-center justify-around bg-black w-2/12 h-screen'>
            <div className='flex flex-col flex-shrink'>
                <Image
                    // src="/images/IMG-removebg-preview (4).png"
                    src="/images/5.jpg"
                    alt='Nature'
                    width={200}
                    height={300}
                    // layout="responsive"
                    className='rounded-full relative top-5 border-8 border-gray-400'
                />
                <p className='text-white font-semibold text-xl relative top-7 text-center'>Zahid Hasan</p>
            </div>
            <div className='relative flex flex-shrink'>
                <ol className='flex flex-col flex-shrink  gap-y-3 items-center text-white font-semibold text-xl'>
                    <li className={`${pathName == "/#home" ? 'text-amber-700' : ''} hover:text-amber-700 hover:cursor-pointer`} onClick={() => handlePath("/#home")}>Home</li>
                    <li className={`${pathName == "/#about" ? 'text-amber-700' : ''} hover:text-amber-700 hover:cursor-pointer`} onClick={() => handlePath("/#about")}>About Me</li>
                    <li className={`${pathName == "/#do" ? 'text-amber-700' : ''} hover:text-amber-700 hover:cursor-pointer`} onClick={() => handlePath("/#do")}>What I Do</li>
                    <li className={`${pathName == "/#resume" ? 'text-amber-700' : ''} hover:text-amber-700 hover:cursor-pointer`} onClick={() => handlePath("/#resume")}>Resume</li>
                    <li className={`${pathName == "/#portfolio" ? 'text-amber-700' : ''} hover:text-amber-700 hover:cursor-pointer`} onClick={() => handlePath("/#portfolio")}>Portfolio</li>
                    <li className={`${pathName == "/#testimonial" ? 'text-amber-700' : ''} hover:text-amber-700 hover:cursor-pointer`} onClick={() => handlePath("/#testimonial")}>Testimonial</li>
                    <li className={`${pathName == "/#contact" ? '!text-amber-700' : ''} hover:text-amber-700 hover:cursor-pointer`} onClick={() => handlePath("/#contact")}>Contact</li>
                </ol>
            </div>
            <div className=' flex justify-evenly w-40'>
                {/* <BsFacebook className=' text-white hover:text-facebook hover:cursor-pointer' /> */}
                <div className='relative' onClick={() => window.open('https://www.fb.com/355.hasan', '_blank')}>
                    <BsFacebook className=' hover:text-facebook hover:cursor-pointer' />
                    <div style={{ top: '0.100rem', left: '0.100rem' }} className=' absolute -z-10 left-0.5 w-3.5 h-3.5 rounded-lg bg-white'></div>
                </div>
                <FaTwitter className=' hover:text-twitter text-white hover:cursor-pointer' onClick={() => window.open('https://twitter.com/_dihaznett', '_blank')} />
                {/* <FaLinkedinIn className=' text-white'/> */}
                <div className='relative' onClick={() => window.open('https://www.linkedin.com/in/hasan355/', '_blank')}>
                    <FaLinkedin className=' hover:text-linkedin hover:cursor-pointer' />
                    <div className=' absolute -z-10 top-0.5 left-0.5 w-3 h-3 bg-white '></div>
                </div>
                <div className='relative' onMouseOver={() => setHub('true')} onMouseLeave={() => setHub('false')} onClick={() => window.open('https://github.com/Hasan-dihaz', '_blank')}>
                    <VscGithub className='text-white hover:text-black hover:cursor-pointer' />
                    {gitHub == 'true' && (<div style={{ top: '0.1rem', left: '0.09rem' }} className=' absolute -z-10 left-0.5 w-3.5 h-3.5 rounded-lg bg-white'></div>)}
                </div>
                {/* <VscGithub className=' text-white hover:cursor-pointer' /> */}
            </div>
        </div>
    )
}

export default LeftBar;