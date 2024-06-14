import {navList} from '../constants'

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-center items-center">
        <nav className="flex max-sm:w-full">
            <a href='#' className='mr-1 px-1 py-1 bg-white bg-opacity-45 backdrop-filter backdrop-blur-lg border border-gray border-opacity-25 rounded-full'>
              <img src='/assets/images/logo_dark.svg' alt="logo" width={24} height={24}/>
            </a>

            <div className='flex flex-1 gap-6 px-5 py-1 max-sm:hidden bg-white bg-opacity-45 backdrop-filter backdrop-blur-lg border border-gray border-opacity-25 rounded-md'>
              {navList.map((nav) => (
                <a href='#' key={nav} lassName="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all cursor-pointer">{nav}</a>
              ))}
            </div>
        </nav>
    </header>
  )
}

export default Navbar
