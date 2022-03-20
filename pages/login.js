import React from 'react'
import { getProviders, signIn } from 'next-auth/react'

function login({ providers }) {
  return (
    <div className='flex flex-col items-center bg-black min-h-screen w-full justify-center'>
        <img className='w-52 mb-5' src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png" alt="Spotify Logo" />
        {Object.values(providers).map((providers) =>(
          <div key={providers.name}>
            <button className='bg-[#18d860] text-white p-5 rounded-full
             shadow hover:shadow-[0px_0px_5px_#18d860]' 
             onClick={() => signIn(providers.id, { callbackUrl: "/"} )}>Login with {providers.name}</button>
          </div>
        ))}
    </div>
  )
}

export default login


export async function getServerSideProps(){
  const providers = await getProviders();

  return {
    props: {
      providers
    }
  }
}