import Image from "next/image"

export default function KevinPowellCSS() {
    // ================ STATE ================

    // ================ HELPER ================

    // ================ LIFECYCLE ================

    // ================ RETURN ================

    return (
        <div id="toggleDarkDiv" className="dark">
            <div id="bodyDivRD" className="">

                <section className='text-center' id="bg-light">
                    <div className="containerRD container--narrow border">
                        <p>Lorem, ipsum dolor.</p>
                        <h1 className="h1Responsive">Responsive layouts don&apos;t have to be a struggle</h1>
                    </div>
                </section>

                <section>
                    <div className="containerRD">
                        <h2 className='h2Responsive text-center'>Quality Designs</h2>
                        <div className="split">
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum assumenda quisquam numquam voluptas dolorum excepturi architecto temporibus officiis molestiae officia.</p>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam alias voluptate rerum totam vero atque aperiam similique ex ratione et.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='' id="bg-dark">
                    <div className="containerRD">
                        <div className='split'>
                            <div>
                                <h2 className='h2Responsive'>Made custom for you</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur facere distinctio doloremque sed nesciunt?</p>
                            </div>
                            <div>
                                <Image src="/images/image-01.jpg" alt="super cool lion" width={400} height={200} className='imgNext' />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='' id="bg-primary">
                    <div className="containerRD">
                        <div className='split'>
                            <div>
                                <Image src="/images/image-02.jpg" alt="super cool lion" width={400} height={200} className='imgNext' />
                            </div>
                        <div>
                            <h2 className='h2Responsive'>Created with Care</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam asperiores amet placeat corporis eius?</p>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )

}