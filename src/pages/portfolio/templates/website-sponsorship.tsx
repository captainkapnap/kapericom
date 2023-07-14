

type sponsorshipType =  {title: string, cost: string, bullet1?: string | null, bullet2?: string | null, bullet3?: string | undefined, note?: string | undefined}[]

const sponsorshipData: sponsorshipType = [
    {title: "Sidebar Block", cost: "$250/mo", bullet1: "7 bazillion impressions", bullet2: "120x200"},
    {title: "Middle Block", cost: "$1250/mo", bullet1: "10 bazillion impressions", bullet2: "120x200", bullet3: "Middle"},
    {title: "Right Block", cost: "$2250/mo", bullet1: "20 bazillion impressions", bullet2: "120x200", bullet3: "Right", note: "Sold Out"},
]

function ICodeThis() {
    // ================ STATE ================


    // ================ HELPERS ================
    function ShowCards({props}: {props: sponsorshipType[number]}) {
        
        return (
            <div className='mx-2 lg:mt-8 my-4 bg-slate-50 rounded-t drop-shadow-md sponsorshipCard'>
                <div className='sponsorshipTop h-2/3 flex flex-col p-2 border-b-2'>
                    <div className='h-1/3 w-full flex justify-center items-center'>
                        <h1 className='text-h1_dynamic font-semibold'>{props.title}</h1>
                    </div>
                    <div className='h-1/3 w-full flex justify-center items-center'>
                        <p className='text-cost_dynamic font-bold'>{props.cost}</p>
                    </div>
                    <div className='h-1/3 w-full flex justify-center items-center'>
                        <button className='py-1 px-2 hover:bg-sky-700 bg-red-400 rounded border border-red-800'>
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className='sponsorshipBtm h-1/3 flex justify-center items-center'>
                    <div className='text-ul_dynamic p-6'>
                        <ul className='list-disc'>
                            {props.bullet1 && <li>{props.bullet1}</li> }
                            {props.bullet2 && <li>{props.bullet2}</li> }
                            {props.bullet3 && <li>{props.bullet3}</li> }
                        </ul>
                    </div>
                </div>

            </div>
        )
    }

    // ================ LIFECYCLE ================


    // ================ RETURN ================
    return (
      <div id="toggleDarkDiv" className="dark">
        <div id="bodyDiv" className="bg-yellow-400 flex justify-center items-center min-h-screen">
            <div className='sponsorshipContainer border-4 border-red-800 bg-slate-100 w-3/4 min-h-[80vh] rounded-lg shadow-xl overflow-hidden overflow-y-scroll'>
                <div className='w-full px-8 pt-6'>
                    <h1 className='font-bold text-h1_dynamic'>Website Sponsorship</h1>
                    <p className='leading-none text-p_dynamic'>In the event that we do not have a full 30 days, we extrapolate based on data we have.</p>
                </div>
                <div className='justify-center items-stretch testingSponsorship'>
                    {sponsorshipData.map((data, idx) => (
                        <ShowCards props={data} key={idx} />
                    ))}
                </div>
            </div>
        </div>
      </div>

    )
}

export default ICodeThis;



 