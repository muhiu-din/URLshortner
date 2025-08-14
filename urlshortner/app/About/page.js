import Link from 'next/link';

export default function About() {
  return (
    <main className="bg-purple-100 min-h-screen flex items-center justify-center p-8">
      <section className="max-w-4xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-purple-600">
          About Our URL Shortener
        </h1>

        <p className="text-lg text-gray-700 mb-4 text-center">
          Welcome to <span className="font-semibold">ZapLink</span> - the simplest way to shorten your URLs.  
          No accounts. No ads. No tracking. Just paste your link, click shorten, and share it anywhere.
        </p>

        <p className="text-lg text-gray-700 mb-4 text-center">
          We believe in keeping things <span className="font-semibold">fast, clean, and privacy-friendly</span>.  
          That’s why we don’t ask for your personal information or store unnecessary data.  
          Your links are created instantly, and you’re ready to go in seconds.
        </p>

        <ul className="list-disc pl-8 text-lg text-gray-700 mb-6">
          <li>🚀 <strong>Instant Shortening</strong> - Paste, click, done.</li>
          <li>🔒 <strong>Privacy First</strong> - No sign-ups, no tracking.</li>
          <li>🎯 <strong>Minimal & Focused</strong> - Just a short link, nothing else.</li>
        </ul>

        <div className="flex justify-center gap-4">
          <Link href="/Shorten">
            <button className="bg-purple-400 hover:bg-purple-500 text-white px-4 py-2 rounded-lg">
              Try Now
            </button>
          </Link>
          <Link href="/">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg">
              Back Home
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
