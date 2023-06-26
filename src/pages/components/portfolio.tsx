import { listOfPages } from "~/utils/pages";
import Link from "next/link";


function KaperiPortfolio() {
    // ================ STATE ================

    // ================ HELPERS ================

    // ================ LIFECYCLE ================

    // ================ RETURN ================
    return (
        <div className='text-slate-300 flex flex-wrap w-[90%] justify-center items-center'>
            {listOfPages.map((event, index) => (
                <div className='bg-purple-700 hover:bg-cyan-600 hover:font-semibold rounded-xl text-center m-3 h-20 w-[25%] border-black border shadow-lg flex justify-center items-center' key={index}>
                    <Link href={event.type === "Component" ? `/portfolio/components/${event.fileName.slice(0,-4)}` :  `/portfolio/templates/${event.fileName.slice(0,-4)}`} key={index}>
                        {event.title}
                    </Link>
                </div>
            ))}
        </div>
    )

}

export default KaperiPortfolio;