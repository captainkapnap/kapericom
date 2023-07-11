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
            {listOfPages.map((pageExample, index) => (
                <div className={`mb-4 relative bg-purple-700 hover:bg-cyan-600 rounded-xl text-center m-3 h-20 w-[25%] max-w-[10rem] text-clamp border-black border shadow-lg flex basis-full justify-center items-center`} key={index}>
                    {/* ICON for COMPONENT / TEMPLATE */}
                    <div className='absolute right-1 -top-3'>
                        {pageExample.type === "Component" ?
                            <IcT icons="components" classNameCustom="h-[1.2rem] w-[1.2rem]" />
                         :
                            <IcT icons="template" classNameCustom="h-[1.2rem] w-[1.2rem]" />
                         }
                    </div>
                    {/* TEXT / Link */}
                    <Link href={pageExample.type === "Component" ? `/portfolio/components/${pageExample.fileName.slice(0,-4)}` :  `/portfolio/templates/${pageExample.fileName.slice(0,-4)}`} key={index}>
                        {pageExample.title}
                    </Link>
                    
                    {/* DESCRIPTION */}
                    {/* <div className='absolute top-[4.8rem] w-40'>
                        <div className={`${pageExample.desc ? 'cutoff-text' : 'h-12' } relative rounded-b-xl bg-slate-300 border-black border text-black shadow-xl drop-shadow-lg`}>
                            {pageExample.desc}
                            {pageExample.desc ? <input className='expand-btn' type="checkbox" /> : '' }
                        </div>
                    </div> */}
                </div>

            ))}
        </div>
    )

}

export default KaperiPortfolio;