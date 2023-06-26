import Head from "next/head";
import Link from "next/link";
import KaperiPortfolio from "./components/portfolio";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kaperi.com</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
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
