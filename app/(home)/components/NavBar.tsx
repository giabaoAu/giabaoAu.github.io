import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiInstagram } from "react-icons/si";

export default function NavBar({className}:{className?:string}) {

    const socials = [
        {
            links: "https://www.linkedin.com/in/bao-au-ab8635232/",
            Label: "Linkedin",
            Icon: SiLinkedin,
        },
        {
            links: "https://github.com/giabaoAu",
            Label: "Github",
            Icon: SiGithub,
        },
        {
            links: "https://www.instagram.com/_bbbauu/",
            Label: "Instagram",
            Icon: SiInstagram,
        },
    ];

    return (
        <nav className={cn(" py-10 flex justify-between items-center", className)}>
            <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500">Samuel 👨‍🚀</h1>

            <div className="flex items-center gap-5">
                {socials.map((social, index) => {
                    const Icon = social.Icon
                    return <Link href={social.links} key={index} aria-label={social.Label}>
                        <span className="w-5 h-5 hover:scale-125 transition-all">
                            <Icon />
                        </span>
                    </Link>
                })}
            </div>
        </nav>
    )
}
