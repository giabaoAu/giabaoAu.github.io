import Link from 'next/link'
import React from 'react'
import { MovingBorderBtn } from './ui/moving-border';
import Titles from './Titles';

export default function HeroSection() {
    return (
        <div className='min-h-[60vh] flex flex-col-reverse lg:gap-0 gap-14 lg:flex-row items-center justify-between'>
            <div className='space-y-10 text-center lg:text-left'>
                <h1 className='text-4xl lg:text-6xl font-bold'>Fancy meeting ya!👋😊 <br />
                    <span className='underline underline-offset-8 decoration-green-500'>
                        {"I'm Samuel."}
                    </span>
                </h1>
                <p className="md:w-96 text-lg text-gray-300">
                    {
                        "Based in the heart of South Australia, I'm a Computer Science at the University of Adelaide. I am passionate programmer that build mordern application that users love!"
                    }
                </p>
                <Link className='inline-block group' href={"mailto:bao.au135@gmail.com"}>
                    <Titles text='Contact Me 📬' />
                </Link>
            </div>

            <div className='relative'>
                <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
                    <div className="flex gap-3 translate-x-8">
                        <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
                        <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
                    </div>
                    <div className="flex gap-3 -translate-x-8">
                        <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
                        <div className="w-32 h-32 rounded-full bg-green-500"></div>
                    </div>
                    <div className='glow absolute top-[40%] right-1/2 -z-10'></div>
                </div>

                {/* <div className='absolute bottom-5 sm:left-10 sm:bottom-14 left-0'>
                    <MovingBorderBtn className="p-3 font-semibold" borderRadius='0.5rem'>
                        <p>📢💼 Available for work</p>
                    </MovingBorderBtn>
                </div> */}
            </div>

        </div>
    );
}
