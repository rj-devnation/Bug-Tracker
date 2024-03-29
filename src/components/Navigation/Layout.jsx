import React, { useState, useEffect, Fragment } from 'react'
import Sidenav from './Sidenav'
import Topbar from './Topbar'
import { Transition } from '@headlessui/react'
import { Outlet } from 'react-router-dom'

export default function Layout({ children }) {
    const [showNav, setShowNav] = useState(true)
    const [isMobile, setIsMobile] = useState(false)

    function handleResize() {
        if(innerWidth <= 640) {
            setShowNav(false)
            setIsMobile(true)
        } else {
            setShowNav(true)
            setIsMobile(false)
        }
    }

    useEffect(() => {
        if(typeof window != undefined){
            addEventListener("resize", handleResize)
        }

        return () => {
            removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <>
            <Topbar showNav={showNav} setShowNav={setShowNav} />
            <Transition
                as={Fragment}
                show={showNav}
                enter='transform transition duration-[400ms]'
                enterFrom='-translate-x-full'
                enterTo='translate-x-0'
                leave='transform duration-[400ms] transition ease-in-out'
                leaveFrom='translate-x-0'
                leaveTo='-translate-x-full'
            >
                <Sidenav showNav={showNav}/>
            </Transition>
            <main className={`pt-16 transition-all duration-[400ms] ${showNav && !isMobile ? 'pl-56' : ''}`}>
                <div className='px-8 md:px-8'>{children}</div>
            </main>
            <Outlet />
        </>
    )
}