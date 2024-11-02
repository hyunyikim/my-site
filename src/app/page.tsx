import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-screen max-w-screen-xl px-20">
      <header className="flex flex-col max-h-screen lg:sticky lg:top-0 lg:py-24">
        <Image className="mb-8" src="/next.svg" alt="Next.js logo" width={180} height={180} priority />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Hyunyi Kim</h1>
        <p className="text-xl">
          Web developer with 5 years of experience, <br />
          driven by curiosity and a love for solving problems.
        </p>
      </header>
      <main className="flex flex-col gap-8 lg:gap-16 h-[1000px] lg:py-24">
        <section className="">
          <div>
            <p className="text-lg mb-2">
              I build fast, reliable, and user-friendly web applications, whether handling high-traffic environments or working with teams in fast-paced
              settings.
            </p>
            <p className="text-lg mb-2">I’m dedicated to finding effective, practical solutions that make a real impact.</p>
            <p className="text-lg mb-2">
              In my free time, I love being in nature. I often go jogging and lie on the grass, watching the trees and sky, which gives me the energy to work on
              my computer. I’m also a huge Korean food lover.
            </p>
          </div>
          <div className="flex flex-row">
            <a className="mr-5">Linkedin</a>
            <a className="mr-5">Github</a>
            <a className="mr-5">Email</a>
            <a className="mr-5">Resume</a>
          </div>
        </section>
        <section className="">
          <h3 className="text-2xl font-semibold mb-2">Working Experience</h3>
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
          <h3 className="text-2xl font-semibold">Side Projects</h3>
          <ul>
            <li>2024</li>
            <li>2024</li>
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
