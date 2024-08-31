import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-green-600 to-teal-700 text-amber-200 shadow-lg">
      <div className="container mx-auto px-6 py-2 sm:py-3">
        <div className="flex sm:flex-row justify-between items-center border-b border-teal-700 pb-2 sm:pb-4">
          <div className="text-xs sm:text-lg font-semibold sm:mb-0 text-center sm:text-left">
            Website Developed By:
            <span className="sm:inline"> Nishanth</span>
          </div>
          <div className="text-xs sm:text-lg font-semibold sm:mb-0 text-center sm:text-left">
            Portfolio
            <span className="hidden sm:inline sm:visible"> Website</span>
          </div>
          <div className="text-xs hidden sm:inline sm:visible sm:text-xl font-semibold sm:mb-0 text-center sm:text-left">
            Tech Stack Used:
            <span className="inline"> Next.js</span>
          </div>
        </div>
        <div className="flex pt-1 sm:flex-row justify-between items-center">
          <a
            className="flex items-center space-x-2 sm:pt-3 transition-transform duration-300 transform hover:scale-110"
            href="https://in.linkedin.com/in/nishanth-sherugar"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src={"/images/linkedin.png"}
              width={25}
              height={25}
              alt="LinkedIn logo"
            />
            <p className="hidden sm:inline">LinkedIn</p>
          </a>
            <a
              href="mailto:nishanthsherugar@gmail.com"
              target="_blank"
              className="flex items-center space-x-2 sm:pt-4 transition-transform duration-300 transform hover:scale-110"
            >
              <Image
                src={"/images/gmail-logo.png"}
                width={25}
                height={25}
                alt="Gmail logo"
              />
              <p className="hidden sm:inline">nishanthsherugar@gmail.com</p>
            </a>
          <a
            className="flex items-center space-x-2 sm:pt-4 transition-transform duration-300 transform hover:scale-110"
            href="https://github.com/nishanthn99/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={"/images/code.png"}
              width={25}
              height={25}
              alt="GitHub logo"
            />
            <p className="hidden sm:inline">GitHub</p>
          </a>
          <a
            className="flex items-center space-x-2 sm:pt-4 transition-transform duration-300 transform hover:scale-110"
            href="https://www.instagram.com/nishanth_kshatriya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={"/images/instagram.png"}
              width={25}
              height={25}
              alt="Instagram logo"
            />
            <p className="hidden sm:inline">nishanth_kshatriya</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
