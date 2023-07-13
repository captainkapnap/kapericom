

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
            <div className='mx-2 bg-slate-50 p-4 rounded-t border-red-400 border'>
                <div className='sponsorshipTop flex flex-col justify-center items-center'>
                    <div className=''>
                        {props.title}
                    </div>
                    <div className=''>
                        {props.cost}
                    </div>
                    <div className=''>
                        <button className='py-1 px-2 hover:bg-sky-700 bg-red-400 rounded border border-red-800'>
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className='sponsorshipBtm'>
                    <ul>
                        <li>{props.bullet1}</li>
                        <li>{props.bullet2}</li>
                        <li>{props.bullet3}</li>
                    </ul>
                </div>

            </div>
        )
    }

    // ================ LIFECYCLE ================


    // ================ RETURN ================
    return (
      <div id="toggleDarkDiv" className="dark">
        <div id="bodyDiv" className="bg-yellow-400 flex flex-col justify-center items-center min-h-screen">
            <div className='sponsorshipContainer border-4 border-red-800 bg-slate-100 w-3/4 min-h-[80vh] rounded-lg shadow-xl'>
                <div className='w-full px-8 pt-6'>
                    <h1 className='font-bold'>Website Sponsorship</h1>
                    <p className='leading-none'>In the event that we do not have a full 30 days, we extrapolate based on data we have.</p>
                </div>
                <div className='flex justify-center items-center'>
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



 