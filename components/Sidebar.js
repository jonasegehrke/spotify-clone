import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
  LogoutIcon,
} from '@heroicons/react/outline'
import { signOut, useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import useSpotify from '../hooks/useSpotify'

function Sidebar() {
  const spotifyApi = useSpotify();

  const { data: session, status } = useSession()
  const [playlists, setPlaylists] = useState([])

  useEffect(() =>{
    if(spotifyApi.getAccessToken()){
      spotifyApi.getUserPlaylists().then((data) =>{
        setPlaylists(data.body.items)
      })
    }

  }, [session, spotifyApi])


  return (
    <div className="border-r border-gray-900 p-5 text-sm text-gray-500 
    overflow-y-scroll h-screen scrollbar-hide">
      <div className="space-y-4">
        <button className="flex items-center space-x-2 transition-colors hover:text-white"
        onClick={() => signOut()}>
          <LogoutIcon className="h-5 w-5" />
          <p>Logout</p>
        </button>
        <button className="flex items-center space-x-2 transition-colors hover:text-white">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 transition-colors hover:text-white">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 transition-colors hover:text-white">
          <LibraryIcon className="h-5 w-5" />
          <p>Your Library</p>
        </button>

        <hr className="border-t-[0.1px] border-gray-900" />

        <button className="flex items-center space-x-2 transition-colors hover:text-white">
          <PlusCircleIcon className="h-5 w-5" />
          <p>Create Playlist</p>
        </button>
        <button className="flex items-center space-x-2 transition-colors hover:text-white">
          <HeartIcon className="h-5 w-5" />
          <p>Liked Songs</p>
        </button>
        <button className="flex items-center space-x-2 transition-colors hover:text-white">
          <RssIcon className="h-5 w-5" />
          <p>Your episodes</p>
        </button>

        <hr className="border-t-[0.1px] border-gray-900" />

        {/* Playlists */}
        {playlists.map((playlist) => (
          <p key={playlist.id} className='cursor-pointer hover:text-white transition-colors'>{playlist.name}</p>
        ))}

        
      </div>
    </div>
  )
}

export default Sidebar
