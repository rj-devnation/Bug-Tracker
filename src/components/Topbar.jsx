import { Fragment } from "react"
import { BellIcon, CheckIcon} from "@heroicons/react/24/outline"
import { PencilIcon, ChevronDownIcon, Cog8ToothIcon } from '@heroicons/react/24/solid'
import { AiOutlineMenu } from "react-icons/ai"
import { Menu, Transition, Popover } from "@headlessui/react"
import { Link } from "react-router-dom"

function Topbar ({showNav, setShowNav}) {
    return (
        <>
            <div className={`fixed w-full h-16 flex justify-between items-center transition-all duration-[400ms] 
            ${showNav ? 'pl-56' : ''}`}>
                <div className="pl-4 md:pl-16">
                    <AiOutlineMenu className="h-8 w-8 text-gray-700 cursor-pointer" onClick={() => setShowNav(!showNav)} />
                </div>
                <div className="flex items-center pr-4 md:pr-16">
                    <Popover className='relative'>
                        <Popover.Button className='outline-none mr-5 md:mr-8 cursor-pointer text-gray-700'>
                            <BellIcon className="h-6 w-6" />
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform scale-95"
                            enterTo="transform scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform scale-100"
                            leaveTo="transform scale-95"
                        >
                            <Popover.Panel className='absolute -right-16 sm:right-4 z-50 mt-2 bg-white shadow-sm rounded max-w-xs sm:max-width-sm w-screen'>
                                <div className="relative p-3">
                                    <div className="flex justify-between items-center w-full">
                                        <p className="text-gray-700 font-medium">Notifications</p>
                                        <a className="text-sm text-orange-500" href='#'>Mark all as read</a>
                                    </div>
                                    <div className="mt-4 grid gap-4 grid-cols-1 overflow-hidden">
                                        {/** Loop through notifications later on when functionality is done */}
                                        <div className="flex">
                                            <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                                                <CheckIcon className="h-4 w-4 text-green-600" />
                                            </div>
                                            <div className="ml-4">
                                                <p className="font-medium text-gray-700">Notification Title</p>
                                                <p className="text-sm text-gray-500 truncate">Notification Test text for design</p>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                                                <CheckIcon className="h-4 w-4 text-green-600" />
                                            </div>
                                            <div className="ml-4">
                                                <p className="font-medium text-gray-700">Notification Title</p>
                                                <p className="text-sm text-gray-500 truncate">Notification Test text for design</p>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                                                <CheckIcon className="h-4 w-4 text-green-600" />
                                            </div>
                                            <div className="ml-4">
                                                <p className="font-medium text-gray-700">Notification Title</p>
                                                <p className="text-sm text-gray-500 truncate">Notification Test text for design</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                    <Menu as='div' className='relative inline-block text-left'>
                        <div>
                            <Menu.Button className='inline-flex w-full justify-center items-center'>
                                <picture>
                                    <img 
                                        src="src\assets\calgary_me.jpg"
                                        className="rounded-full h-8 md:mr-4 border-2 border-white shadow-sm" 
                                        alt="Profile Picture"
                                    />
                                </picture>
                                <span className="hidden md:block font-medium text-gray-700">Roland Geli</span>
                                <ChevronDownIcon className='mt-2 h-4 w-4 text-gray-700' />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform scale-95"
                            enterTo="transform scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform scale-100"
                            leaveTo="transform scale-95"
                        >
                            <Menu.Items className='absolute right-0 w-56 z-50 mt-2 origin-top-right bg-white rounded shadow-sm'>
                                <div className="p-1">
                                    <Menu.Item>
                                        <Link to='#' className="flex hover:bg-blue-200 hover:text-blue-700 text-gray-700 rounded p-2 text-sm group transition-colors items-center">
                                            <PencilIcon className="h-4 w-4 mr-2" />
                                            Edit Profile
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link to='#' className="flex hover:bg-blue-200 hover:text-blue-700 text-gray-700 rounded p-2 text-sm group transition-colors items-center">
                                            <Cog8ToothIcon className="h-4 w-4 mr-2" />
                                            Settings
                                        </Link>
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </>
    )
}

export default Topbar