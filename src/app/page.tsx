'use client';

import Image from 'next/image';
import { FaLinkedin, FaGithub, FaAt } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { AiFillSound } from 'react-icons/ai';

export default function Home() {
  const playNameSound = () => {
    const audio = new Audio('/name-pronunciation.mp3');
    audio.play().catch((error) => console.error('Error playing audio:', error));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-screen max-w-screen-xl m-auto px-4 md:px-8 lg:px-20 py-20 lg:py-0">
      <header className="flex flex-col h-max lg:sticky lg:top-0 lg:py-24">
        <Image className="mb-8" src="/next.svg" alt="Next.js logo" width={180} height={180} priority />
        <div className="flex flex-row items-end gap-3 mb-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Hyunyi Kim</h1>
          <AiFillSound size={20} className="mb-1 cursor-pointer" onClick={playNameSound} title="Listen to pronunciation" />
        </div>
        <p className="text-xl">
          Web developer with 5 years of experience, <br />
          driven by curiosity and a love for solving problems.
        </p>
      </header>
      <main className="flex flex-col gap-8 lg:gap-16 lg:py-24">
        <section className="">
          <div className="mb-4">
            <p className="text-lg mb-2">
              I build <span className="highlight">fast</span>, <span className="highlight">reliable</span>, and <span className="highlight">user-friendly</span>{' '}
              web applications, whether handling high-traffic environments or working with teams in fast-paced settings.
            </p>
            <p className="text-lg mb-2">
              I’m dedicated to finding effective, practical solutions that make <span className="highlight">a real impact</span>.
            </p>
            <p className="text-lg mb-2">
              In my free time, I love being in <span className="highlight">nature</span>. I often go jogging and lie on the grass, watching the trees and sky,
              which gives me the energy to work on my computer. I’m also <span className="highlight">a huge Korean food lover</span>.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <a className=" underline underline-offset-1" href="https://www.linkedin.com/in/hyunyikim/" target="_blank">
              <FaLinkedin size={20} />
            </a>
            <a className="" href="https://github.com/hyunyikim" target="_blank">
              <FaGithub size={20} />
            </a>
            <a className="" href="mailto:hyunyikim11@gmail.com">
              <FaAt size={20} />
            </a>
          </div>
        </section>
        <section className="">
          <div className="flex flex-row items-center justify-between flex-wrap mb-2">
            <h3 className="text-2xl font-semibold ">Working Experience</h3>
            <a className="flex flex-row gap-1 items-center underline underline-offset-1 group" href="" target="_blank">
              <FiExternalLink size={14} className="hidden group-hover:flex" />
              <span className="font-semibold">Résumé</span>
            </a>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="flex flex-col gap-1 bg-white p-4 rounded-lg">
              <div className="flex flex-row justify-between items-center">
                <span className="font-semibold ">Full stack Engineer, MassAdoption</span>
                <span className="text-sm">Feb 2024 - Feb 2024</span>
              </div>
              <div className="text-sm">Implemented a micro-frontend architecture to support both legacy and new environments</div>
            </li>
            <li className="flex flex-col gap-1 bg-white p-4 rounded-lg">
              <div className="flex flex-row justify-between items-center">
                <span className="font-semibold ">Full stack Engineer, MassAdoption</span>
                <span className="text-sm">Feb 2024 - Feb 2024</span>
              </div>
              <div className="text-sm">Implemented a micro-frontend architecture to support both legacy and new environments</div>
            </li>
          </ul>
        </section>
        <section className="">
          <h3 className="text-2xl font-semibold mb-2">Side Projects</h3>
          <ul className="flex flex-col gap-2">
            <li className="flex flex-col gap-1 bg-white p-4 rounded-lg cursor-pointer">
              <Image src="/images/title-for-chat-gpt-promotion-title-440.png" alt="TitleViewer" width={100} height={200} />
              <div className="flex flex-row flex-wrap items-center justify-between">
                <a href="" target="_blank">
                  <span className="font-semibold">TitleViewer for ChatGPT</span>
                </a>
                <span className="text-sm bg-gray-100 rounded-md px-2 py-1 min-w-[130px]">Browser Extension</span>
              </div>
              <span className="text-sm">Implemented a micro-frontend architecture to support both legacy and new environments</span>
            </li>
          </ul>
        </section>
        <section className="">
          <h3 className="text-2xl font-semibold">What I like</h3>
          <ul>
            <li>2024</li>
            <li>2024</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
