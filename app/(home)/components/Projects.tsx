import React from 'react'
import Titles from './Titles'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from './ui/direction-aware-hover'
import { SiJavascript, SiNextdotjs, SiReactquery, SiSupabase, SiTailwindcss } from 'react-icons/si'

export default function Projects() {

    const projects = [
        {
            title: "Weather App API",
            tech: [SiNextdotjs, SiReactquery, SiSupabase, SiTailwindcss],
            Link: "http://localhost:3000/",
            cover: "/p1_resized.png",
            background: "bg-indigo-500",
        },

        {
            title: "To Do List",
            tech: [SiJavascript, SiSupabase, SiTailwindcss],
            Link: "http://localhost:3000/",
            cover: "/p2_resized.png",
            background: "bg-green-500",
        },
    ]
    return (
        <div className='py-10 p-5 sm:p-0'>
            <div className="max-w-sm mx-auto">
                <Titles text='Projects' className='flex flex-col items-center justify-center max-w-1xl' />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
                {projects.map((project, index) => {
                    return <Link href={project.Link} key={index}>
                        <div className={cn("p-5 rounded-md cursor-pointer", project.background)}>
                            <DirectionAwareHover imageUrl={project.cover} className='w-full space-y-5'>
                                <div className='space-y-5'>
                                    <h1 className='text-xl font-bold'>{project.title}</h1>
                                    <div className='flex items-center gap-5'>
                                        {project.tech.map((Icon, index) => {
                                            return <span className="w-8 h-8">
                                                <Icon key={index} size={32}/>
                                            </span> 
                                        })}
                                    </div>
                                </div>
                            </DirectionAwareHover>
                        </div>
                    </Link>
                })}
            </div>
        </div>
    )
}
