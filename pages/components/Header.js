import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import Avatar from './Avatar';
import HearderOptions from './HearderOptions';

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (e) => {
          e.preventDefault();
          const term = searchInputRef.current.value;
          if(!term) return;

          router.push(`/search?term=${term}`);
    }

    return (
        <header className='sticky top-0 bg-white'>
      <div className='flex w-full p-6'>
      <Image
            src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            height={40}
            width={120}
            onClick={() => router.push("/")}
            className="cursor-pointer"
             />
             <form className='flex flex-grow px-6 py-3 ml-10 mr-5 border-dashed
             border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
                 <input ref={searchInputRef} 
                 className='flex-grow w-full focus:outline-none'
                 type="text" 
                 />
                 <XIcon className="h-7 text-gray-500 cursor-pointer transition
                 duration-100 transform hover:scale-125" 
                 onClick={() => (searchInputRef.current.value = "")}
                 />
                 <MicrophoneIcon className='mr-3 h-6 sm:inline-flex text-blue-500
                 border-l-2 pl-4 border-gray-300 hidden' />
                 <SearchIcon  className='h-6 text-blue-500 hidden sm:inline-flex'/>
                 <button hidden type='submit'
                 onClick={search}>Search</button>
             </form>
             <Avatar className="ml-auto" url="https://avatars.githubusercontent.com/u/38337273?s=400&u=e6723cb2af09b4381329c9831e91fe8a5bf89b9a&v=4" />
      </div>
      <HearderOptions />
        </header>

      
    )
}

export default Header;
