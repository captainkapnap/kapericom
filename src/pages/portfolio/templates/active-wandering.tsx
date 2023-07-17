import Image from "next/image";
import awHeroImg from '../../../../public/images/awHero.jpg';
import IcT from "~/pages/components/icons";
import Link from "next/link";

type AWContentType = { title: string, image: string, alt: string, link: string}[]

const nameOfBlog = "Active Wandering"

const awContent: AWContentType = [
    {title: 'Fitness', image: '/images/awContent1.jpg', alt: '', link: ''},
    {title: 'Yoga', image: '/images/awContent2.jpg', alt: '', link: ''},
    {title: 'Travel', image: '/images/awContent3.jpg', alt: '', link: ''},
    {title: 'Mental Health', image: '/images/awContent4.jpg', alt: '', link: ''},
]

const awImages = {
    sideProfile: '/images/awSideProfile.jpg',
    hero: '/images/awHero.jpg',
    followScript: '/images/awFollowScript.png',
    victoriaSignature: '/images/awVictoriaSignature.webp',
}

const awAbout = {
    title: `About ${nameOfBlog}`,
    welcomeText: "Welcome to my niche-juggling extravaganza! As a one-person show, I tackle multiple niches with humor and curiosity, navigating the adventurous world with gusto!”",
    explanationText: "Discover the art of healthy living while traveling the world at Active Wandering. From travel tips to local cuisines, and wellness insights, this blog inspires you to live well while exploring new destinations.",

}

function ICodeThis() {
    // ================ STATE ================


    // ================ HELPERS ================
    function AWContent() {

        return (
            <div className='flex items-center gap-4 awSplit mt-10'>
                {awContent.map((content, idx) => (
                    <div className='w-1/2 h-44 border border-red-500 overflow-hidden'>
                        {content.title}
                        <Image src={content.image} alt={content.alt} className='awContentImage' width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto'}} /> 
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
            <section className="bg-slate-900 py-4" id="awHeader">
                <nav className='text-slate-100'>
                    <h1>{nameOfBlog}</h1>
                </nav>
            </section>


            <section className="" id ="awHero">
                <div className=''>
                    <Image src={awHeroImg} alt='travel fitness yoga mental health' />
                </div>
            </section>

            {/* CONTENT BOXES */}
            <section className="" id ="awContent">
                <div className=''>
                    <AWContent />
                </div>
            </section>

            {/* ABOUT PAGE */}
            <section className="bg-slate-300 flex" id ="awAbout">
                <div className='text-slate-900 flex flex-col items-center max-w-[60%]' id="awAboutText">
                    <h1 className='font-bold'>{awAbout.title}</h1>
                    <p className=''>{awAbout.welcomeText}</p>
                    <p className=''>{awAbout.explanationText}</p>
                    <div className='w-64'>
                        <Image src='/images/awVictoriaSignature.webp' width={0} height={0} alt="victoria mojabi" sizes="100vw" style={{ width: '100%', height: 'auto'}} />
                    </div>
                </div>
                <div className='max-w-[40%]' id="awAboutImage">
                    <Image src={awImages.sideProfile} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto'}} alt="profile picture side sideways victoria mojabi" />
                </div>
            </section>

            {/* FOOTER */}
            <section className="bg-slate-900 py-10 flex flex-col gap-4 items-center" id ="awFooter">
                <div className='text-slate-100' id="awFooterBlogName">
                    {nameOfBlog.toUpperCase()}
                </div>
                <div className='' id="awFooterFollowImg">
                    <Image src='/images/awFollowScript.png' width={80} height={40} alt="follow me on social media" />
                </div>
                <div className='text-slate-100 flex' id="awFooterSocials">
                    <IcT icons="twitter" />
                    <IcT icons="facebook" />
                    <IcT icons="pinterest" />
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



 