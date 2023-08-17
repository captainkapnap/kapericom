import { useScroll, motion, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

export default function WizardKitty() {
    // ================ STATE ================
    const targetRef = useRef<HTMLDivElement | null>(null);
    const [msg, setMsg] = useState<string>('But first.. I want to show you something');

    // ================ FRAMER-MOTION STATE ================
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    })


    const AO = {
        initial: 0,
        wkSticky: 0.15,
        firstText: 0.2,
        startMoveWKUp: 0.35,
        startShowingCard: 0.39,
        finishShowingCard: 0.4,
        startSeal: 0.45,
        finishSeal: 0.6,
        showNameAndHp: 0.7,
        showDesc: 0.8,
        rotate1: 0.6,
        rotate2: 0.62,
        rotate3: 0.64,
        rotate4: 0.66,
    }

    const x_SpeechBubble = useTransform(scrollYProgress,
        [AO.initial, AO.wkSticky],
        ["-120%", "-10%"]
    );
    const text_opacity = useTransform(scrollYProgress,
        [AO.initial, AO.wkSticky, AO.firstText],
        [0, 0, 1]
    );
    const y_wizardKitty = useTransform(scrollYProgress,
        [AO.firstText, AO.startMoveWKUp],
        ['0%', '-35%']
    );
    const y_card = useTransform(scrollYProgress,
        [AO.initial, AO.initial, AO.startShowingCard, AO.finishShowingCard],
        ['200%','200%', '0%', '-10%']
    );
    const y_seal = useTransform(scrollYProgress,
        [AO.initial, AO.startShowingCard, AO.startSeal, AO.rotate4],
        ['1000%', '800%', '500%', '0%' ]
    );
    const opacity_sappySeal = useTransform(scrollYProgress,
        [AO.initial, AO.finishSeal, AO.showNameAndHp],
        ['0', '0', '1']
    );
    const opacity_hp = useTransform(scrollYProgress,
        [AO.initial, AO.finishSeal, AO.showNameAndHp],
        ['0', '0', '1']
    );
    const opacity_desc = useTransform(scrollYProgress,
        [AO.initial, AO.finishSeal, AO.showDesc],
        ['0', '0', '1']
    );


    // ================ LIFECYCLE ================


    // ================ FRAMER MOTION LIFE CYCLE ================
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log(latest)
        if (latest >= 0.5) {
            setMsg("He's the best bud out there.")
        } else if (latest >= 0.6 && msg === "He's the best bud out there.") {
            setMsg('Going to look at him again eh?')
        }


        // console.log("imageRef", houseCoords?.right)
    });

    // ================ RETURN ================

    return (
        <section ref={targetRef}>
            <div className='h-[500vh] mt-[-80vh] bg-slate-950 flex flex-col items-center justify-start'>

                <motion.div style={{ y: y_wizardKitty }} className='sticky top-[20%] flex max-w-[24rem]'>
                    <img src="/images/cats/wizardKitty.png" alt="" className="" />
                    
                    <motion.div style={{ x: x_SpeechBubble }} className='absolute w-[45%] md:w-[21vw] h-max-[200px] flex items-start'>
                        <img src="/images/cats/speechBubbleBlankRight.png" alt="" className='w-full max-w-[220px]' />
                        <motion.div style={{ opacity: text_opacity }} className='absolute flex justify-center items-center xl:max-w-[50%] border-4 border-red-500'>
                            <p className='text-slate-950 font-bold p-4 pt-4 md:p-4 leading-tight md:leading-normal text-md md:text-xl text-center'>{msg}</p>
                        </motion.div>
                    </motion.div>


                </motion.div>

                <div className='flex flex-col h-full w-full items-center justify-start'>
                    <motion.div style={{ y: y_card, scale: 0.8 }} className='fixed -bottom-10'>
                        <Image src="/images/cats/pokemonCardPurple.png" width='300' height='1' alt="" className=''/>
                        <motion.img style={{ opacity: opacity_sappySeal, scale: 0.46, top: '-1.8%', left: '-9%' }} src="/images/cats/card/01sappyseal.png" alt="" className='absolute' />
                        <motion.img style={{ opacity: opacity_hp, scale: 0.3, top: '-1.7%', left: '27%' }} src="/images/cats/card/02hp.png" alt="" className='absolute' />
                        <motion.div style={{ y: y_seal, scale: 1.4, top: '11%', left: '27%' }} className='absolute'>
                            <Image src="/images/cats/8603nobg.png" width='125' height='1' alt="" />
                        </motion.div>
                        <motion.div style={{ opacity: opacity_desc, scale: 1, top: '55%', left: '8%' }}  className='absolute'>
                            <Image src="/images/cats/card/03desc.png" width="250" height='100' alt='' />
                        </motion.div>
                    </motion.div>



                </div>
            </div>
        </section>
    )
}