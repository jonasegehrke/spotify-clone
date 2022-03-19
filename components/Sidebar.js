import { HomeIcon, SearchIcon, LibraryIcon, PlusCircleIcon, HeartIcon, RssIcon } from '@heroicons/react/outline'

import React from 'react'


function Sidebar() {
  return (
    <div className='text-gray-500 p-5 text-sm border-r border-gray-900'>
        <div className='space-y-4'>
            <button className='flex items-center space-x-2 hover:text-white transition-colors'>
                <HomeIcon className='h-5 w-5'/>
                <p>Home</p>
            </button>
            <button className='flex items-center space-x-2 hover:text-white transition-colors'>
                <SearchIcon className='h-5 w-5'/>
                <p>Search</p>
            </button>
            <button className='flex items-center space-x-2 hover:text-white transition-colors'>
                <LibraryIcon className='h-5 w-5'/>
                <p>Your Library</p>
            </button>

            <hr className='border-t-[0.1px] border-gray-900'/>

            <button className='flex items-center space-x-2 hover:text-white transition-colors'>
                <PlusCircleIcon className='h-5 w-5'/>
                <p>Create Playlist</p>
            </button>
            <button className='flex items-center space-x-2 hover:text-white transition-colors'>
                <HeartIcon className='h-5 w-5'/>
                <p>Liked Songs</p>
            </button>
            <button className='flex items-center space-x-2 hover:text-white transition-colors'>
                <RssIcon className='h-5 w-5'/>
                <p>Your episodes</p>
            </button>

            <hr className='border-t-[0.1px] border-gray-900'/>


            {/* Playlists */}

            <p className='cursor-pointer hover:text-white transition-colors'>Playlist name...</p>
            <p className='cursor-pointer hover:text-white transition-colors'>Playlist name...</p>
            <p className='cursor-pointer hover:text-white transition-colors'>Playlist name...</p>
            <p className='cursor-pointer hover:text-white transition-colors'>Playlist name...</p>
            <p className='cursor-pointer hover:text-white transition-colors'>Playlist name...</p>
            <p className='cursor-pointer hover:text-white transition-colors'>Playlist name...</p>
            <p className='cursor-pointer hover:text-white transition-colors'>Playlist name...</p>
            <p className='cursor-pointer hover:text-white transition-colors'>Playlist name...</p>
            <p className='cursor-pointer hover:text-white transition-colors'>Playlist name...</p>
            <p className='cursor-pointer hover:text-white transition-colors'>Playlist name...</p>
            <p className='cursor-pointer hover:text-white transition-colors'>Playlist name...</p>
            <p className='cursor-pointer hover:text-white transition-colors'>Playlist name...</p>

        </div>
    </div>
  )
}

export default Sidebar
