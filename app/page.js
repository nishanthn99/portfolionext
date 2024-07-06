import Image from "next/image";

export default function Home() {
  return (
    <div className="noscrol h-full"><div className="flex"><main className="flex p-5 text-xl sm:p-20 sm:text-4xl w-2/3 flex-wrap">Hello Guys, I'm Nishanth an energetic and enthusiastic computer science undergraduate having domain knowledge in the field of latest information technology.
    <div className="text-gray-100">You Can Get More Information on Visiting the pages...</div>
    <div className="text-orange-500">Check it out!!!</div></main>
    <div className="flex justify-end sm:p-10 w-1/3 p-0 bg-slate-400"><Image src={"/images/profile.JPG"}
    alt="Profile image" 
    width={400}
    height={300}/></div>
    </div></div>
    
  );
}
