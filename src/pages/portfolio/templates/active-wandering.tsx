import Image from "next/image";
import IcT from "~/pages/components/icons";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

type AWContentType = { title: string, image: string, alt: string, link: string, desc: string}[]

const nameOfBlog = "Active Wandering"

const cldResponsiveSizing = `sizes="(min-width: 480px ) 50vw,
                      (min-width: 728px) 33vw,
                      (min-width: 976px) 25vw,
                      100vw"`


const awImages = {
    sideProfile: '/images/AW/awSideProfile.jpg',
    hero: '/images/AW/awHero.jpg',
    followScript: '/images/AW/awFollowScript.png',
    victoriaSignature: '/images/AW/awVictoriaSignature.webp',
    contentFitness: '/images/AW/awContent2.jpg',
    contentYoga: '/images/AW/awContent4.jpg',
    contentMentalHealth: '/images/AW/awContent3.jpg',
    contentTravel: '/images/AW/awContent1.jpg',
}

const awImagesCld = {
    sideProfile: 'ActiveWandering/sideProfile',
    hero: 'ActiveWandering/awHero',
    followScript: 'ActiveWandering/dmz0rjilayzelnxrphg4',
    victoriaSignature: 'ActiveWandering/jnfgxzofeorwf3ryhfu9',
    contentFitness: 'ActiveWandering/mub0yheazcvnjuhhr8yu',
    contentYoga: 'ActiveWandering/w9rnda1lml6ihujzf5jl',
    contentMentalHealth: 'ActiveWandering/pyq8tl9ztzgjcjbvht2r',
    contentTravel: 'ActiveWandering/ms47djfu5h1apli9bxvc',
}

const awContent: AWContentType = [
    {title: 'Fitness', image: awImagesCld.contentFitness, alt: '', link: '', desc: 'Elevate your workouts to benefit your health'},
    {title: 'Yoga', image: awImagesCld.contentYoga, alt: '', link: '', desc: 'Boost mind and body synergies with Yoga'},
    {title: 'Travel', image: awImagesCld.contentTravel, alt: '', link: '', desc: 'Ignite your wanderlust with captivating travel stories'},
    {title: 'Mental Health', image: awImagesCld.contentMentalHealth, alt: '', link: '', desc: 'Harness serenity and mental wellbeing'},
]


const awAbout = {
    title: `About Me!`,
    welcomeText: "Welcome to my niche-juggling extravaganza! As a one-person show, I tackle multiple niches with humor and curiosity, navigating the adventurous world with gusto!”",
    explanationText: "Discover the art of healthy living while traveling the world at Active Wandering. From travel tips to local cuisines, and wellness insights, this blog inspires you to live well while exploring new destinations.",

}

function ICodeThis() {
    // ================ STATE ================


    // ================ HELPERS ================
    function AWContent() {

        return (
            <div className='flex items-stretch gap-4 awContentSplit my-10 border-4 border-red-500'>
                {awContent.map((content, idx) => (
                    <div className='awContentWidths h-1/4 shadow-md rounded-lg border-4 border-blue-500' key={idx}>
                        <CldImage src={content.image} alt={content.alt} className='rounded-t-lg'  width={400} height={400} crop="thumb" gravity="auto" loading="lazy" sizes={cldResponsiveSizing} key={idx} /> 
                        <p className='flex justify-center font-bold text-aw_title_dynamic'>{content.title}</p>
                        <p className='flex justify-center items-center px-1.5 text-aw_p_dynamic'>{content.desc}</p>
                    </div>
                ))}
            </div>
        )
    }

    // ================ LIFECYCLE ================


    // ================ RETURN ================
    return (
      <div id="toggleDarkDiv" className="dark">
        <div id="bodyDiv" className="bg-slate-100 min-h-[100dvh] flex flex-col">
            {/* Nav Bar */}
            <section className="bg-slate-900 py-4" id="awHeader">
                <nav className='text-slate-100 font'>
                    <h1>{nameOfBlog}</h1>
                </nav>
            </section>


            {/* Hero */}
            <section className="" id ="awHero">
                <div className='relative h-[80dvh] w-full'>
                    <CldImage src={awImagesCld.hero} className='' priority width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto'}} alt='travel fitness yoga mental health' />
                </div>
            </section>


            {/* CONTENT BOXES */}
            <section className="bg-slate-200" id ="awContent">
                <div className=''>
                    <AWContent />
                </div>
            </section>


            {/* ABOUT PAGE */}
            <section className="bg-slate-300 flex justify-center items-center pb-8 awAboutSplit" id ="awAbout">
                <div className='text-slate-900 flex flex-col items-center awAboutMaxWidth' id="awAboutText">
                    <h1 className='font-bold my-[1em] text-2xl text-aw_h1_dynamic'>{awAbout.title}</h1>
                    <p className='px-[1.5em] text-aw_p_dynamic'>{awAbout.welcomeText}</p>
                    <p className='px-[1.5em] text-aw_p_dynamic'>{awAbout.explanationText}</p>
                    <div className='w-64'>
                        <CldImage src={awImagesCld.victoriaSignature} loading="lazy" width={0} height={0} alt="victoria mojabi signature" sizes={cldResponsiveSizing} style={{ width: '100%', height: 'auto'}} />
                    </div>
                </div>
                <div className='awAboutMaxWidth flex items-center mx-4' id="awAboutImage">
                    <CldImage src={awImagesCld.sideProfile} loading="lazy" className='rounded-full shadow-xl border-slate-400 border-2 hover:scale-110 hover:transition-transform hover:duration-200' width={300} height={300} sizes={cldResponsiveSizing} alt="profile picture side sideways victoria mojabi" />
                </div>
            </section>


            {/* FOOTER */}
            <section className="bg-slate-900 py-10 flex flex-col gap-4 items-center" id ="awFooter">
                <div className='text-slate-100 tracking-widest text-xl font-semibold' id="awFooterBlogName">
                    {nameOfBlog.toUpperCase()}
                </div>
                <div className='' id="awFooterFollowImg">
                    <CldImage src={awImagesCld.followScript} loading="lazy" width={80} height={40} sizes={cldResponsiveSizing} alt="follow me on social media" />
                </div>
                <div className='text-slate-100 flex' id="awFooterSocials">
                    <div className='hover:scale-150 hover:transition-transform hover:duration-200 hover:text-red-500'>
                        <IcT icons="twitter" classNameCustom="mx-4"/>
                    </div>
                    <div className='hover:scale-150 hover:transition-transform hover:duration-200 hover:text-red-500'>
                        <IcT icons="facebook" classNameCustom="mx-4"/>
                    </div>
                    <div className='hover:scale-150 hover:transition-transform hover:duration-200 hover:text-red-500'>
                        <IcT icons="pinterest" classNameCustom="mx-4"/>
                    </div>
                </div>
                <div className='text-slate-500 flex text-sm' id="awFooterTCs">
                    <Link href="#" className='mr-2 hover:text-slate-100 hover:underline hover:underline-offset-4'>Privacy Policy</Link>
                    <Link href="#" className='ml-2 hover:text-slate-100 hover:underline hover:underline-offset-4'>Terms & Conditions</Link>
                </div>
            </section>
        </div>
      </div>

    )
}

export default ICodeThis;



 