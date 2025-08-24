'use client';

import { X } from 'lucide-react';
import { useState } from 'react';
import { ModeToggle } from './ModeToggle';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='relative z-50 md:hidden'>
            {/* Menu Button */}
            <img
                onClick={() => setIsOpen(true)}
                className="md:hidden w-5 h-5 invert dark:invert-0 cursor-pointer transition-transform hover:scale-110"
                src="/menu.svg"
                alt="menu"
            />

            {/* Overlay */}
            {/* {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                    onClick={() => setIsOpen(false)}
                />
            )} */}

            {/* Sidebar */}
            <aside
                className={`fixed rounded-s-lg  top-0 right-0 w-72 h-screen bg-[#e0e8f6] border border-black dark:bg-[#1e1e1e] dark:border-white shadow-xl z-[100] transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">Menu</span>
                    <div className="flex items-center gap-2">
                        <ModeToggle />
                        <X
                            className="w-6 h-6 text-gray-600 dark:text-gray-300 cursor-pointer hover:text-red-500"
                            onClick={() => setIsOpen(false)}
                        />
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-4 text-base text-gray-700 dark:text-gray-300">
                    {['Home', 'About', 'Projects', 'Services'].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            </aside>
        </div>
    );
};

export default Sidebar;
