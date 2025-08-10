import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="bg-red-950">
          <p>We are the best URL shortener</p>
          <p>Simplest existing solution to large URLs</p>
        </div>
        <div className="bg-slate-950 relative">
          <Image alt="vector image" fill={true}  src={"/vector.jpg"} />
        </div>
      </section>
    </main>
  );
}
