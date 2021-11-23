import requests from '../utils/requests'
import router, { useRouter } from 'next/router'

function Nav() {
  return (
    <nav>
      <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            onClick={() => router.push(`/?genre=${key}`)}
            key={key}
            className='cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 last:pr-24'>{title}
          </h2>
        ))}
      </div>
    </nav>
  )
}

export default Nav
