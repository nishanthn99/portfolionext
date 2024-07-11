import Link from 'next/link';

const Nav = () => {
  return (
    <div>
      <nav className="navbar flex-col py-2 sm:py-4 bg-gray-800 text-white shadow-md">
        <div className="w-full mb-2">
          <Link href='/' className="flex justify-center text-xl sm:text-2xl font-bold hover:text-pink-500 transition-colors duration-300">
            Nishanth
          </Link>
        </div>
        <div className="sm:w-2/3 w-full flex flex-wrap sm:flex-nowrap justify-center sm:justify-between">
          <div className="mx-2 sm:mx-4 hover:bg-gray-700 rounded-lg transition-colors duration-300">
            <Link href='/' className="block px-4 py-2 font-light text-lg sm:text-xl text-center hover:text-orange-400">
              Home
            </Link>
          </div>
          <div className="mx-2 sm:mx-4 hover:bg-gray-700 rounded-lg transition-colors duration-300">
            <Link href='/projects' className="block px-4 py-2 font-light text-lg sm:text-xl text-center hover:text-orange-400">
              Projects
            </Link>
          </div>
          <div className="mx-2 sm:mx-4 hover:bg-gray-700 rounded-lg transition-colors duration-300">
            <Link href='/skills' className="block px-4 py-2 font-light text-lg sm:text-xl text-center hover:text-orange-400">
              Skills
            </Link>
          </div>
          <div className="mx-2 sm:mx-4 hover:bg-gray-700 rounded-lg transition-colors duration-300">
            <Link href="/aboutMe" className="block px-4 py-2 font-light text-lg sm:text-xl text-center hover:text-orange-400">
              About
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
