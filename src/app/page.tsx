'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';

import { FaLinkedin, FaGithub, FaAt } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { AiFillSound } from 'react-icons/ai';

const ThemeSelector = dynamic(() => import('@/components/ThemeSelector'), {
  ssr: false,
  loading: () => <div className="lg:top-8 w-20 h-8"></div>,
});

export default function Home() {
  const playNameSound = () => {
    const audio = new Audio('/name-pronunciation.mp3');
    audio.play().catch((error) => console.error('Error playing audio:', error));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-screen max-w-screen-xl m-auto px-4 md:px-8 lg:px-20 py-8 lg:py-0 lg:-right-8">
      <header className="flex flex-col h-max lg:sticky lg:top-0 lg:py-24">
        <div className="mb-8 overflow-hidden rounded-lg w-[200px] h-[200px]">
          <Image className="relative top-[-50px] scale-[1.3]" src="/images/IMG_6246.jpg" alt="me" width={200} height={200} priority />
        </div>
        <div className="flex flex-row items-end gap-3 mb-4">
          <h1 className="text-4xl font-bold cursor-pointer tracking-tight sm:text-5xl transition-colors duration-400 hover:text-[#169f4d]">Hyunyi Kim</h1>
          <AiFillSound size={20} className="mb-1 cursor-pointer" onClick={playNameSound} title="Listen to pronunciation" />
        </div>
        <p className="text-xl">
          Web developer with 5 years of experience, <br />
          driven by curiosity and a love for solving problems.
        </p>
      </header>
      <div>
        <div className="fixed top-8 right-3 lg:sticky col-span-1 lg:col-span-2 flex justify-end lg:-right-6 lg:top-8">
          <ThemeSelector />
        </div>
        <main className="flex flex-col gap-8 lg:gap-16 lg:pt-16 lg:pb-24">
          <section className="">
            <div className="mb-4">
              <p className="text-lg mb-2">
                I build <span className="highlight first">fast</span>, <span className="highlight second">reliable</span>, and{' '}
                <span className="highlight">user-friendly</span> web applications, whether handling high-traffic environments or working with teams in
                fast-paced settings.
              </p>
              <p className="text-lg mb-2">
                I’m dedicated to finding effective, practical solutions that make <span className="highlight third">a real impact</span>.
              </p>
              <p className="text-lg mb-2">
                In my free time, I love being in <span className="highlight fourth">nature</span>. I often go jogging and lie on the grass, watching the trees
                and sky, which gives me the energy to work on my computer. I’m also <span className="highlight fifth">a huge Korean food lover</span>.
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
              <a
                className="flex flex-row gap-1 items-center underline underline-offset-1 group"
                href="https://assets.hyunyikim.xyz/public/CV.pdf"
                target="_blank">
                <FiExternalLink size={14} className="hidden group-hover:flex" />
                <span className="font-semibold">Résumé</span>
              </a>
            </div>
            <ul className="flex flex-col gap-2 dark:text-stone-900">
              <li className="flex flex-col gap-1 bg-white p-4 rounded-lg">
                <div className="flex flex-row justify-between items-start flex-wrap">
                  <div className="flex flex-col">
                    <span className="font-semibold">Frontend Developer,</span>
                    <span className="font-semibold">MassAdoption</span>
                  </div>
                  <span className="text-sm whitespace-nowrap">Aug 2022 - Apr 2024</span>
                </div>
                <div className="text-sm">Built and maintained a B2B SaaS service, successfully migrating legacy features to a new environment</div>
              </li>
              <li className="flex flex-col gap-1 bg-white p-4 rounded-lg">
                <div className="flex flex-row justify-between items-start flex-wrap">
                  <div className="flex flex-col">
                    <span className="font-semibold">Full stack Developer,</span>
                    <span className="font-semibold">OasisBusiness</span>
                  </div>
                  <span className="text-sm whitespace-nowrap">Feb 2021 - Aug 2022</span>
                </div>
                <div className="text-sm">Developed and managed both frontend and backend systems for small business owners</div>
              </li>
              <li className="flex flex-col gap-1 bg-white p-4 rounded-lg">
                <div className="flex flex-row justify-between items-start flex-wrap">
                  <div className="flex flex-col">
                    <span className="font-semibold">Full stack Developer,</span>
                    <span className="font-semibold">HanteoGlobal</span>
                  </div>
                  <span className="text-sm whitespace-nowrap">Jun 2019 - Dec 2020</span>
                </div>
                <div className="text-sm">Created and supported frontend and backend functionality for a global K-pop fan community</div>
              </li>
            </ul>
          </section>
          <section className="">
            <h3 className="text-2xl font-semibold mb-2">Side Projects</h3>
            <ul className="flex flex-col gap-2 dark:text-stone-900">
              <li
                className="flex flex-col gap-1 bg-white p-4 rounded-lg cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://marketplace.visualstudio.com/items?itemName=hyunyi-kim.file-name-linter', '_blank');
                }}>
                <div className="flex flex-row flex-wrap items-center justify-between gap-1">
                  <div className="flex flex-row items-center gap-2">
                    <Image src="/images/file-name-linter-icon-128.png" alt="file name linter" width={32} height={32} />
                    <a href="https://marketplace.visualstudio.com/items?itemName=hyunyi-kim.file-name-linter" target="_blank">
                      <span className="font-semibold">File Name Linter</span>
                    </a>
                  </div>
                  <span className="text-sm bg-gray-100 rounded-md px-2 py-1 min-w-[130px]">VSCode Extension</span>
                </div>
                <div className="text-sm">Helps you follow consistent file naming rules for images, audio, fonts, and more.</div>
              </li>
              <li
                className="flex flex-col gap-1 bg-white p-4 rounded-lg cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://chromewebstore.google.com/detail/title-viewer-for-chatgpt/nmgmmjadfonlheejkphohnlpnhcchkdl', '_blank');
                }}>
                <div className="flex flex-row flex-wrap items-center justify-between gap-1">
                  <div className="flex flex-row items-center gap-2">
                    <Image src="/images/title-for-chat-gpt-icon-128.png" alt="title viewer" width={32} height={32} />
                    <a href="https://chromewebstore.google.com/detail/title-viewer-for-chatgpt/nmgmmjadfonlheejkphohnlpnhcchkdl" target="_blank">
                      <span className="font-semibold">Title Viewer for ChatGPT</span>
                    </a>
                  </div>
                  <span className="text-sm bg-gray-100 rounded-md px-2 py-1 min-w-[130px]">Browser Extension</span>
                </div>
                <div className="text-sm">Displays the chat title at the top of the screen for ChatGPT</div>
              </li>
              <li className="relative flex flex-col gap-1 bg-white p-4 rounded-lg">
                <div className="flex flex-row flex-wrap items-center justify-between gap-1">
                  <div className="flex flex-row items-center gap-2">
                    <span className="font-semibold">Life is short</span>
                  </div>
                  <div className="flex flex-row gap-1">
                    <span className="text-sm bg-gray-100 rounded-md px-2 py-1">App</span>
                    <span className="text-sm bg-red-100 rounded-md px-2 py-1">In development</span>
                  </div>
                </div>
                <div className="text-sm">An app to manage D-Day events, showing how many days are left until each event.</div>
              </li>
            </ul>
          </section>
          <section className="">
            <h3 className="text-2xl font-semibold mb-4">What I like</h3>
            <article className="grid grid-cols-2 grid-rows-4 gap-2">
              <div className="favoriate vertical">
                <Image src="/images/IMG_5864.jpg" alt="berlin dom" fill className="object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="favoriate vertical">
                <Image src="/images/IMG_6081.jpg" alt="leaf" fill className="object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="favoriate horizontal col-span-2">
                <Image src="/images/IMG_7279.jpg" alt="sunset in tempelhof" fill className="object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="favoriate vertical">
                <Image src="/images/IMG_6646.jpg" alt="dog" fill className="object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="favoriate vertical">
                <Image src="/images/IMG_3241.jpg" alt="icecream" fill className="object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="favoriate vertical">
                <Image src="/images/IMG_6846.jpg" alt="leaf" fill className="object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="favoriate vertical">
                <Image src="/images/IMG_7424.jpg" alt="beer" fill className="object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="favoriate horizontal col-span-2">
                <Image
                  src="/images/IMG_6787.jpg"
                  alt="roses"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
              </div>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}
