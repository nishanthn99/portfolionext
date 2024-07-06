
import Link from "next/link"

const Nav = () => {
  return (
    <div>
      <nav className="navbar flex-col pt-3 pb-1 sm:pt-10 sm:pb-3">
        <div className="w-full"><Link href='/' className="flex justify-center text-xl sm:text-3xl">Nishanth</Link></div>
        <div className="sm:w-2/3 w-full flex justify-between sm:justify-between sm:flex ">
        <div><Link href='/' className="p-10 font-light text-lg sm:text-xl sm:pl-40">Home</Link></div>
        <div><Link href='/projects' className="font-light  text-lg sm:text-xl">Projects</Link></div>
        <div><Link href='/skills' className="font-light text-lg sm:text-xl">Skills</Link></div>
        <div><Link href="/aboutMe" className="pr-10 font-light text-lg sm:text-xl">about</Link> </div></div></nav>
    </div>
  )
}

export default Nav
