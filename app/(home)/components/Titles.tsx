import React from 'react'

export default function Titles({ text, className }: { text: string, className?: string }) {
    return (
        <div className={className}>
            <h1 className='text-2xl font-bold group-hover:text-green-500 transition-all'>{text}</h1>

            <div className='w-full h-2 bg-green-400 rounded-full'></div>
            <div className='w-full h-2 bg-indigo-400 rounded-full translate-x-2'></div>
        </div>
    )
}
