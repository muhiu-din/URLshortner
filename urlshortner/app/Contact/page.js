import Link from 'next/link';
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <main className="bg-purple-100 min-h-screen flex items-center justify-center p-8">
      <section className="max-w-4xl bg-white shadow-lg rounded-2xl p-8 w-full">
        <h1 className="text-4xl font-bold text-center mb-6 text-purple-600">
          Contact Me
        </h1>

        <p className="text-lg text-gray-700 mb-6 text-center">
          Got a question, suggestion, or just want to say hello?  
          I’m always happy to connect!
        </p>

        <div className="space-y-4 text-lg">
          <div className="flex items-center gap-3">
            <FaWhatsapp className="text-green-500 text-2xl" />
            <a
              href="https://wa.me/923394199501"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-gray-800"
            >
              0339 4199501
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-red-500 text-2xl" />
            <a
              href="mailto:connectmuhiudin@gmail.com"
              className="hover:underline text-gray-800"
            >
              connectmuhiudin@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaLinkedin className="text-blue-600 text-2xl" />
            <a
              href="https://www.linkedin.com/in/muhiu-din/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-gray-800"
            >
              linkedin.com/in/muhiu-din
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaGithub className="text-gray-900 text-2xl" />
            <a
              href="https://github.com/muhiu-din"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-gray-800"
            >
              github.com/muhiu-din
            </a>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/">
            <button className="bg-purple-400 hover:bg-purple-500 text-white px-4 py-2 rounded-lg">
              Back Home
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
