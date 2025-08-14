import Image from "next/image";
import localFont from 'next/font/local';
import Link from "next/link";

const poppins = localFont({
  src: './fonts/Poppins-ExtraBold.ttf',
  variable: '--font-poppins',
  weight: '100 900', 
});

export default function Home() {
  return (
    <main className="bg-purple-100 md:h-screen min-h-screen">
      <section className="grid grid-cols-1 md:grid-cols-2 h-full">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center items-center px-4 py-8 md:py-0">
          <p className={`text-2xl md:text-3xl font-bold text-center ${poppins.className}`}>
            The best URL shortener in the Market
          </p>
          <p className="text-base md:text-lg w-full md:w-[40vw] text-center mt-4">
            We are the Simplest existing solution to large URLs. Most of the URL shortners will track you or ask you to give your details for login. We understand your need hence we provided this solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 mt-6 text-white">
            <Link href="/Shorten">
              <button className='bg-purple-400 hover:bg-purple-500 p-3 py-1 rounded-lg w-full sm:w-auto'>
                Try Now
              </button>
            </Link>
            <Link target='_blank' href="https://github.com/muhiu-din">
              <button className='bg-purple-400 hover:bg-purple-500 p-3 py-1 rounded-lg w-full sm:w-auto'>
                Github
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-64 md:h-auto">
          <Image 
            className="mix-blend-darken object-contain" 
            alt="vector image" 
            fill={true}  
            src={"/vector.jpg"} 
          />
        </div>

      </section>
    </main>
  );
}
