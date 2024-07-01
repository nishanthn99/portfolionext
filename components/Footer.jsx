import Image from "next/image"
const Footer = () => {
  return (
    <div className="w-full pt-3 mt-3 bg-teal-800 text-amber-200">
      <div className="flex justify-between">
        <div className="pl-10">WebSite Develpoed By:Nishanth</div>
        <div className="pr-20">Portfolio WebSite</div></div>
      <div className="pl-10">Tech Stack Used:Next JS</div>
      <div className="flex justify-between py-3">
        <a className="flex pl-10" href="https://in.linkedin.com/in/nishanth-sherugar" rel="noopener noreferrer"><Image src={"/images/linkedin.png"} width={25} height={20} alt="linkedin logo"/>LinkedIn</a>
        <div className="flex" ><Image src={"/images/gmail-logo.png"} width={20} height={20} alt="gmail logo" />nishanthsherugar@gmail.com</div>
        <div><a className="flex" href="https://github.com/nishanthn99/" target="_blank" rel="noopener noreferrer"><Image src={"/images/code.png"} width={20} height={20} alt="github logo" />Git Hub</a></div>
        <div><a className="flex pr-20"><Image src={"/images/instagram.png"} width={20} height={20} alt="insta logo" />nishanth_kshatriya</a></div>
      </div>
    </div>
  )
}

export default Footer