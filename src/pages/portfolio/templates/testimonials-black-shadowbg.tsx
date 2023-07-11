import IcT from "~/pages/components/icons";

type testimonials = { nameOfPerson: string, title: string, company: string, testimonial: string}[];


const testimonial: testimonials = [
    {nameOfPerson: "Patrik Bell", title: "CEO", company: "Phone Company", testimonial: "Some days a motiviational quote can provide a quick pick-me-up for employees and even management.  They can be a breath of fresh air when it comes to a drab situation."},
    {nameOfPerson: "Zachary Cooper", title: "Project Manager", company: "Company", testimonial: "I've been using ProductX for the past few months, and I must say it's been a game-changer for me. The features are incredibly powerful and user-friendly."},
    {nameOfPerson: "Caleb Swanson", title: "Managing Partner", company: "IT Company", testimonial: "I was skeptical at first, but ProductX exceeded all my expectations. It has revolutionized how I manage my tasks and projects. "},
]

function ICodeThis() {
    // ================ STATE ================


    // ================ HELPERS ================
    function ShowTestimonials({testimonials}: {testimonials: testimonials}) {

        return (
            <div className='container flex justify-center items-stretc'>
                {testimonials.map((testInfo, idx) => (
                    <div className='testimonialDiv rounded-lg w-1/3 m-3 shadow border' key={idx}>
                        <div className=''>
                            <IcT icons="quote" classNameCustom="h-4 mt-2"/>
                        </div>

                        <div className=''>
                            <p className='testimonial-text mx-2'>
                                {testInfo.testimonial}
                            </p>
                        </div>
                        
                        <div className='flex justify-end'>
                            <IcT icons="quote" classNameCustom="h-4 align-right"/>
                        </div>

                        <div className='font-bold mx-2'>
                            <p></p>
                            {testInfo.nameOfPerson} {testInfo.title} at {testInfo.company}
                        </div>
                        
                    </div>
                ))}
            </div>
        )
    }
    
    // ================ LIFECYCLE ================


    // ================ RETURN ================
    return (
      <div id="toggleDarkDiv" className="dark">
        <div id="bodyDiv" className="bg-slate-50 flex flex-col items-center min-h-screen">
            <div className='m-10 w-full'>
                <div className='mx-4 h-8'>
                    <h1 className='text-xl font-bold'>Testimonials</h1>
                    <div className='h-40'>
                        <ShowTestimonials testimonials={testimonial} />
                    </div>
                </div>
            </div>
        </div>
      </div>

    )
}

export default ICodeThis;

 