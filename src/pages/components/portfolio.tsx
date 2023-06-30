import { listOfPages } from "~/utils/pages";
import Link from "next/link";
import IcT from "./icons";


function KaperiPortfolio() {
    // ================ STATE ================

    // ================ HELPERS ================

    // ================ LIFECYCLE ================

    // ================ RETURN ================
    return (
        <div className='text-slate-300 flex flex-wrap w-[90%] justify-center items-center'>
            {listOfPages.map((event, index) => (
                <div className={`mb-14 relative bg-purple-700 hover:bg-cyan-600 rounded-t-xl text-center m-3 h-20 w-[25%] max-w-[10rem] text-clamp border-black border shadow-lg flex basis-full justify-center items-center`} key={index}>
                    {/* ICON for COMPONENT / TEMPLATE */}
                    <div className='absolute right-1 -top-3'>
                        {event.type === "Component" ?
                            <IcT icons="components" classNameCustom="h-[1.2rem] w-[1.2rem]" />
                         :
                            <IcT icons="template" classNameCustom="h-[1.2rem] w-[1.2rem]" />
                         }
                    </div>
                    {/* TEXT / Link */}
                    <Link href={event.type === "Component" ? `/portfolio/components/${event.fileName.slice(0,-4)}` :  `/portfolio/templates/${event.fileName.slice(0,-4)}`} key={index}>
                        {event.title}
                    </Link>
                    
                    {/* DESCRIPTION */}
                    <div className='absolute top-[4.8rem] w-40'>
                        <div className={`${event.desc ? 'cutoff-text' : 'h-12' }  relative rounded-b-xl bg-slate-300 border-black border text-black shadow-xl drop-shadow-lg`}>
                            {event.desc}
                            {event.desc ? <input className='expand-btn' type="checkbox" /> : '' }
                        </div>
                    </div>
                </div>

            ))}
        </div>
    )

}

export default KaperiPortfolio;