import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-screen max-w-screen-xl px-20 pb-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex flex-col h-[100px] bg-yellow-300 lg:sticky lg:top-0 lg:py-24">
        <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">I'm Hyunyi Kim</h1>
        <p>Web Developer</p>
      </header>
      <main className="h-[1000px] bg-blue-300">
        <section className="mb-8 lg:mb-16">
          <p>I'm a web developer with a passion for creating user-friendly and efficient web applications.</p>
          <div className="flex flex-row">
            <a className="mr-5">Linkedin</a>
            <a className="mr-5">Github</a>
            <a className="mr-5">Resume</a>
          </div>
        </section>
        <section className="mb-8 lg:mb-16">
          <h3>Working Experience</h3>
          <ul>
            <li>2024</li>
            <li>2024</li>
          </ul>
        </section>
        <section className="mb-8 lg:mb-16">
          <h3>Side Projects</h3>
          <ul>
            <li>2024</li>
            <li>2024</li>
          </ul>
        </section>
        <section className="mb-8 lg:mb-16">
          <h3>What I like</h3>
          <ul>
            <li>2024</li>
            <li>2024</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
