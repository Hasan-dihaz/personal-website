
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import LeftBar from '../../components/leftBar'
// import Typewriter from '../../components/typeWriter';
// import Typewriter from 'typewriter-effect/dist/core';
import Typewriter from 'typewriter-effect';
import { BsArrowDownCircle } from "react-icons/Bs";


const HomePage = () => {
  const [pathName, setPathName] = useState('/#home')

  function handleScroll(event) {
    const elementsArray = document.elementsFromPoint(window.innerWidth / 2, window.innerHeight / 3);

    const elementWithId = elementsArray.find(element => typeof element.id === 'string' && element.id.trim() !== '');

    let previousID, correntID = elementWithId.id
    if (correntID !== previousID) {
      previousID = elementWithId.id
      setPathName(`/#${elementWithId.id}`)
    }


  }

  return (
    <div className='flex flex-row h-screen'>
      <LeftBar pathName={pathName} setPathName={setPathName} />
      <div className='overflow-y-scroll scroll-smooth  flex-grow' onScroll={handleScroll}>
        <div id="home" className='relative flex flex-col justify-center items-center bg-cover bg-center bg-fixed w-full h-screen' style={{ backgroundImage: `url('/images/DSC00878.JPG')` }}>
          <p className=' text-white text-5xl font-serif'>HI </p>
          <div className='text-5xl font-bold font-serif text-white'>
            <Typewriter
              options={{
                strings: [`I'm Zahid Hasan.`, `I'm a Web Developer.`],
                autoStart: true,
                loop: true,
              }}
            // onInit={(typewriter) => {
            //   typewriter.typeString('Hello World!')
            //     .callFunction(() => {
            //       console.log('String typed out!');
            //     })
            //     .pauseFor(2500)
            //     .deleteAll()
            //     .callFunction(() => {
            //       console.log('All strings were deleted');
            //     })
            //     .start();
            // }}
            />
          </div>
          <BsArrowDownCircle className='text-3xl animate-bounce' />
        </div>
        <div id="about" className='relative h-screen w-full'>
          <Image
            src="/images/DSC00891.JPG"
            alt='Nature'
            layout="fill"
            className=''
          />
        </div>
        <div id="do" className='relative h-screen w-full'>
          <Image
            src="/images/DSC00891.JPG"
            alt='Nature'
            layout="fill"
            className=''
          />
        </div>
        <div id="resume" className='relative h-screen w-full'>
          <Image
            src="/images/DSC00891.JPG"
            alt='Nature'
            layout="fill"
            className=''
          />
        </div>
        <div id="portfolio" className='relative h-screen w-full'>
          <Image
            src="/images/DSC00891.JPG"
            alt='Nature'
            layout="fill"
            className=''
          />
        </div>
        <div id="testimonial" className='relative h-screen w-full'>
          <Image
            src="/images/DSC00891.JPG"
            alt='Nature'
            layout="fill"
            className=''
          />
        </div>
        <div id="contact" className='relative h-screen w-full bg-slate-600'>

        </div>
      </div>
    </div >
  )
}

export default HomePage