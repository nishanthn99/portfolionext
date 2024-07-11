import Image from 'next/image';

export default function Home() {
  return (
    <div className="noscroll h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
      <div className="flex flex-wrap h-full p-5">
      <main className="flex flex-col items-center justify-center flex-grow p-5">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:w-2/3">
            <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-shadow-lg">
            Hello Guys, I'm Nishanth
          </h1>
          <p className="text-lg sm:text-2xl transition-colors duration-300 ease-in-out hover:text-orange-300">
            An energetic and enthusiastic computer science undergraduate with domain knowledge in the latest information technology.
          </p>
          <p className="text-gray-200 transition-colors duration-300 ease-in-out sm:text-xl sm:py-5 hover:text-gray-100">
            You can get more information by visiting the pages...
          </p>
          <p className="text-orange-300 font-semibold sm:text-2xl transition-colors duration-300 ease-in-out hover:text-orange-200">
            Check it out!!!
          </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <Image
              src="/images/profile.JPG"
              alt="Profile image"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="flex space-x-4 mt-5">
          <a href="https://in.linkedin.com/in/nishanth-sherugar" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image src="/images/linkedin.png" width={25} height={25} alt="LinkedIn logo" className="rounded-full" />
          </a>
          <a href="mailto:nishanthsherugar@gmail.com" className="flex items-center space-x-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image src="/images/gmail-logo.png" width={25} height={25} alt="Gmail logo" className="rounded-full" />
          </a>
          <a href="https://github.com/nishanthn99/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image src="/images/code.png" width={25} height={25} alt="GitHub logo" className="rounded-full" />
          </a>
          <a href="https://www.instagram.com/nishanth_kshatriya/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image src="/images/instagram.png" width={25} height={25} alt="Instagram logo" className="rounded-full" />
          </a>
        </div>
      </main>
      </div>
    </div>
  );
}
