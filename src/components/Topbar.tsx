import React from 'react'
import { FaSearch } from 'react-icons/fa';

function Topbar() {
    return (
        <header className='flex items-center justify-between' >

            <h1 className="font-robo text-biz-blackcolor text-xl font-bold">
                Dashboard
            </h1>

            <div>
                <div className="relative w-full mt-2">
                    <label htmlFor="search-input" className="sr-only">
                        Search
                    </label>
                    <input
                        type="text"
                        id="search-input"
                        placeholder="Search..."
                        className="w-full py-1 pl-10 pr-4 border border-gray-300  focus:outline-none focus:border-blue-500"
                    />
                    <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                </div>
            </div>
        </header>
    )
}

export default Topbar

