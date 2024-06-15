import { navList } from '../constants'

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-center items-center">
        <nav className="flex fixed z-50 max-sm:w-full mt-10">
            <a href='#' className='mr-1 px-1 py-1 bg-gray bg-opacity-20 backdrop-filter backdrop-blur-lg border border-white border-opacity-25 rounded-full'>
              <img src='/assets/images/logo_dark.svg' alt="logo" width={24} height={24}/>
            </a>

            <div className='flex flex-1 items-center gap-6 px-5 py-1 max-sm:hidden bg-gray bg-opacity-20 backdrop-filter backdrop-blur-lg border border-white border-opacity-25 rounded-lg'>
              {navList.map((nav) => (
                <a href='#' key={nav} className="px-2 text-sm text-zinc hover:text-gray transition-all">{nav}</a>
              ))}
            </div>
        </nav>
    </header>
  )
}

export default Navbar
