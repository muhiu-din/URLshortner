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
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" flex flex-col justify-center items-center ">
          <p className={`text-3xl font-bold ${poppins.className}`}>The best URL shortener in the Market</p>
          <p className="text-lg w-[40vw] text-center">We are the Simplest existing solution to large URLs.Most of the URL shortners will track you or ask you to give your details for login.We understand your need hence we provided this solution.</p>
          <div className="flex gap-2 mt-4 text-white">
            <Link href="/Shorten"><button className='bg-purple-400 p-3 py-1 rounded-lg'>Try Now</button></Link>
                <Link href="/"><button className='bg-purple-400 p-3 py-1 rounded-lg'>Github</button></Link>
          </div>
        </div>
        <div className="relative">
          <Image className="mix-blend-darken" alt="vector image" fill={true}  src={"/vector.jpg"} />
        </div>
      </section>
    </main>
  );
}
