import Link from 'next/link';

const Nav = () => {
  return (
    <div className='flex bg-gradient-to-r flex-between from-blue-500 via-purple-500 to-slate-500'>
      <div className="flex items-center p-4 sm:p-10">
          <Link href='/' className="justify-center text-xl text-orange-400 sm:text-2xl font-bold hover:text-pink-500 transition-colors duration-300">
            Nishanth
          </Link>
          <p className="hidden sm:pl-4 sm:visible sm:inline text-sm text-gray-300">Web Developer</p>
        </div>
      <nav className="flex flex-col text-white sm:pr-20">
        <div className="sm:w-2/3 w-full flex flex-wrap sm:flex-nowrap justify-center sm:justify-between">
          <div className="mx-2 sm:mx-4 hover:bg-gray-700 rounded-lg transition-colors duration-300">
            <Link href='/' className="block px-4 py-2 text-lg sm:text-xl text-center hover:text-orange-400">
              Home
            </Link>
          </div>
          <div className="mx-2 sm:mx-4 hover:bg-gray-700 rounded-lg transition-colors duration-300">
            <Link href='/projects' className="block px-4 py-2 text-lg sm:text-xl text-center hover:text-orange-400">
              Projects
            </Link>
          </div>
          <div className="mx-2 sm:mx-4 hover:bg-gray-700 rounded-lg transition-colors duration-300">
            <Link href='/skills' className="block px-4 py-2 text-lg sm:text-xl text-center hover:text-orange-400">
              Skills
            </Link>
          </div>
          <div className="mx-2 sm:mx-4 hover:bg-gray-700 rounded-lg transition-colors duration-300">
            <Link href="/aboutMe" className="block px-4 py-2 text-lg sm:text-xl text-center hover:text-orange-400">
              About
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
