import Head from "next/head";
import KaperiPortfolio from "./components/portfolio";
import FluidNavBar from "./portfolio/components/fluid-navbar";


export default function Home() {
  return (
    <>
      <Head>
        <title>Kaperi.com</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&Playfair+Display:wght@900&family=Roboto:wght@300;400&display=swap" rel="stylesheet" />
      </Head>
      <main className="flex flex-col min-h-screen items-center bg-gradient-to-b from-[#02666d] to-[#220909]">
        <section className='' id="title">
          <h1 className='font-mono text-3xl font-bold m-3 select-none hover:text-amber-700 transition-colors duration-500 cursor-no-drop'>Kaperi Portfolio</h1>
        </section>
        <section className='' id="portfolio">
          <div className='flex justify-center'>
              <KaperiPortfolio />

          </div>
        </section>
      </main>
    </>
  );
}
