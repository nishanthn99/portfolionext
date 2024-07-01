
import Link from "next/link"

const Nav = () => {
  return (
    <div>
      <nav className="navbar w-screen flex-col sm:flex-wrap">
        <div className="w-1/3 "><Link href='/' className="pl-40 text-3xl">Nishanth</Link></div>
        <div className="w-2/3 justify-between flex">
        <div><Link href='/' className="navpages pl-40">Home</Link></div>
        <div><Link href='/projects' className="navpages">Projects</Link></div>
        <div><Link href='/skills' className="navpages">Skills</Link></div>
        <div><Link href="/aboutMe" className="navpages pr-40">about</Link> </div></div></nav>
    </div>
  )
}

export default Nav
