import React, { forwardRef, useState, useEffect } from 'react'

import { Link, useLocation } from 'react-router-dom'

/** Icons **/
import { AiOutlineMenu, AiOutlineCode, AiOutlineContacts, AiOutlineDashboard, AiOutlineDash } from 'react-icons/ai'
import { MdOutlineSpaceDashboard } from "react-icons/md"
import { RiPagesLine } from "react-icons/ri" /** ticket */
import { GiAlienBug } from "react-icons/gi";

const navItems = [
    {
        label: 'Dashboard',
        navigate: '/dashboard',
        icon: <AiOutlineDashboard size={24} />,
    },
    {
        label: 'Projects',
        navigate: '/projects',
        icon: <AiOutlineCode size={24} />,
    },
    {
        label: 'Tickets',
        navigate: '/tickets',
        icon: <RiPagesLine size={24} />,
    },
    {
        label: 'Administration',
        navigate: '/admin',
        icon: <AiOutlineContacts size={24} />,
    },
]

const Sidenav = forwardRef(({ showNav }, ref) => {

    const location = useLocation()

    return (
        <div ref={ref} className='fixed w-56 h-full bg-white shadow-sm'>
            <div className='flex justify-center mt-6 mb-14'>
                <GiAlienBug size={45} className='text-blue-700' />
                <div className='text-blue-700 flex items-center pl-2 font-bold text-xl tracking-wider'>
                    Bug <span className='pl-2 text-orange-700'>Tracker</span>
                </div>
            </div>

            <div className='flex flex-col'>
                {navItems.map(({ label, navigate, icon }) => (
                    <Link to={navigate} key={label}>
                        <div
                            className={`pl-5 py-6 ml-2 rounded text-center cursor-pointer flex items-center transition-colors 
                            ${location.pathname == navigate
                            ? 'text-blue-500 bg-blue-200'
                            : 'text-gray-400 hover:text-blue-500 '}`}
                        >
                            <div className='mr-2 flex items-center justify-center'>
                                        {icon}
                                        <span className='pl-4'>{label}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
})

Sidenav.displayName = 'Sidenav'

export default Sidenav