"use client"
import React from 'react'
import imageSrc from '/public/whiteArrow.svg'
import Image from 'next/image'

const Button = ({ content, href }) => {
    const [isHovered, setIsHovered] = React.useState(false)
    return (
        <button className='bg-[#13670B] m-auto py-3 md:py-5 px-6 md:px-10 rounded-full ' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <a href={href} className="flex flex-col relative overflow-hidden text-sm md:text-lg font-medium">
                    <div className={`flex flex-row gap-2 `}>
                        <p className={`text-white  ease-in-out duration-300 ${isHovered && '-translate-y-[150%]'} `}>{content}</p>
                        <Image
                            src={imageSrc}
                            width={23}
                            height={23}
                            alt='heroContact'
                            className={`
                            ease-in-out 
                            duration-300 
                            ${isHovered && '-translate-y-[150%] translate-x-5'} 
                            w-[15px] h-[15px] md:w-[23px] md:h-[23px]
                            `}
                        />
                    </div>
                    <div className='flex flex-row gap-2 absolute bottom-0'>
                        <p className={`text-white ease-in-out duration-300 ${isHovered ? '-translate-y-0' : 'translate-y-[150%] '} `}>{content}</p>
                        <Image src={imageSrc} width={23} height={23} alt='heroContact' className={` ease-in-out duration-300 ${isHovered ? '' : 'translate-y-[150%] -translate-x-5'}`} />
                    </div>
                </a>
        </button>
    )
}

export default Button