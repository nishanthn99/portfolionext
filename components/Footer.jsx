import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-teal-800 text-amber-200 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-teal-700 pb-4">
          <div className="text-lg font-semibold mb-2 sm:mb-0">
            Website Developed By: Nishanth
          </div>
          <div className="text-lg font-semibold mb-2 sm:mb-0">
            Portfolio Website
          </div>
          <div className="text-lg font-semibold mb-2 sm:mb-0">
            Tech Stack Used: Next.js
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center pt-4">
          <a className="flex items-center space-x-2 mb-2 sm:mb-0 transition-transform duration-300 transform hover:scale-110" href="https://in.linkedin.com/in/nishanth-sherugar" rel="noopener noreferrer">
            <Image src={"/images/linkedin.png"} width={25} height={25} alt="LinkedIn logo" />
            <p className="sm:visible">LinkedIn</p>
          </a>
          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            <Image src={"/images/gmail-logo.png"} width={25} height={25} alt="Gmail logo" />
            <p>nishanthsherugar@gmail.com</p>
          </div>
          <a className="flex items-center space-x-2 mb-2 sm:mb-0 transition-transform duration-300 transform hover:scale-110" href="https://github.com/nishanthn99/" target="_blank" rel="noopener noreferrer">
            <Image src={"/images/code.png"} width={25} height={25} alt="GitHub logo" />
            <p className="sm:visible">GitHub</p>
          </a>
          <a className="flex items-center space-x-2 mb-2 sm:mb-0 transition-transform duration-300 transform hover:scale-110" href="https://www.instagram.com/nishanth_kshatriya/" target="_blank" rel="noopener noreferrer">
            <Image src={"/images/instagram.png"} width={25} height={25} alt="Instagram logo" />
            <p>nishanth_kshatriya</p>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
