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
                <div className='relative bg-purple-700 hover:bg-cyan-600 hover:font-semibold rounded-xl text-center m-3 h-20 w-[25%] border-black border shadow-lg flex justify-center items-center' key={index}>
                    <div className='absolute right-1 -top-3'>
                        {event.type === "Component" ?
                            <IcT icons="components" classNameCustom="h-[1.2rem] w-[1.2rem]" />
                         :
                            <IcT icons="template" classNameCustom="h-[1.2rem] w-[1.2rem]" />
                         }
                    </div>
                    <Link href={event.type === "Component" ? `/portfolio/components/${event.fileName.slice(0,-4)}` :  `/portfolio/templates/${event.fileName.slice(0,-4)}`} key={index}>
                        {event.title}
                    </Link>
                </div>
            ))}
        </div>
    )

}

export default KaperiPortfolio;