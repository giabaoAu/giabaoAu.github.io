"use client";   // convert to client side component
import React from 'react'
import Titles from './Titles'
import { HoverEffect } from './ui/card-hover-effect'
import { SiGit, SiJavascript, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiSupabase, SiSvelte, SiTailwindcss } from 'react-icons/si'

export default function Skills() {

  const skills = [
    {
      text: 'React',
      Icon: SiReact,
    },

    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },

    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },

    {
      text: "Git",
      Icon: SiGit,
    },

    {
      text: "Javascript",
      Icon: SiJavascript,
    },

    {
      text: "Nodedotjs",
      Icon: SiNodedotjs,
    },

    {
      text: "Postgresql",
      Icon: SiPostgresql,
    },

    {
      text: "Supabase",
      Icon: SiSupabase,
    },

    {
      text: "Svelte",
      Icon: SiSvelte,
    },
  ]

  return (
    <div className='max-w-5xl mx-auto px-8'>
      <div className="max-w-sm mx-auto">
        <Titles text='Skills' className='flex flex-col items-center justify-center max-w-1xl' />
      </div>
      <HoverEffect items={skills} />
    </div>
  )
}
