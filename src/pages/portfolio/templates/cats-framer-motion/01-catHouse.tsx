import { useScroll, motion, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { breakpoints } from '../cats-framer-motion'

export default function CatHouse() {
    // ================ STATE ================
    const targetRef = useRef<HTMLDivElement | null>(null);

    // ================ FRAMER-MOTION STATE ================
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    })

    const AO_BgColor = {
        initial: "rgb(191 219 254)",
        mid: "rgb(100 116 139)",
        final: "rgb(30 41 59)",
        black: "rgb(2 6 23)",
    }

    const AO = {
        initial: 0,
        heroKittyGone: 0.16,
        startGrowing: 0.25,
        midGrowing: 0.4,
        startMovingIn: 0.45,
        finishGrowing: 0.7,
        makeHouseInvis: 0.8,
    
        scale_Initial: 1,
        scale_smokeInitial: 0.4,
        scale_midGrowing: 3,
        scale_finishGrowing: 30,
    };

    const opacity = useTransform(scrollYProgress, 
            [AO.initial, AO.finishGrowing, AO.makeHouseInvis], 
            [1,1,0]
        )
    const y = useTransform(scrollYProgress, [AO.startGrowing, AO.startMovingIn, AO.finishGrowing], ["0%", "0%", "-250%"])
    const scaleHouse = useTransform(scrollYProgress, 
        [AO.initial, AO.startGrowing, AO.midGrowing, AO.finishGrowing], 
        [AO.scale_Initial, AO.scale_Initial, AO.scale_midGrowing, AO.scale_finishGrowing]
        );
    const scaleSmoke = useTransform(scrollYProgress, [AO.initial], [AO.scale_smokeInitial])
    const backgroundColor = useTransform(scrollYProgress,
            [AO.initial, AO.startGrowing, AO.midGrowing, AO.makeHouseInvis],
            [AO_BgColor.initial, AO_BgColor.initial, AO_BgColor.mid, AO_BgColor.black]
        )


    // ================ LIFECYCLE ================


    // ================ FRAMER MOTION LIFE CYCLE ================
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log(latest)
    });

    // ================ RETURN ================

    return (
        <section ref={targetRef}>
            <motion.div style={{ backgroundColor }} className="h-[500vh]">
                <div className='sticky top-[20%] flex justify-center items-start '>
                    <motion.div style={{ scale: scaleHouse, y, opacity }} className='relative'>
                        <img src="/images/cats/catHouse.png" alt="" className="" />
                        <motion.div style={{ scale: scaleSmoke }} className='absolute -top-12 right-4'>
                            <img src="/images/cats/smoke.gif" alt=""  />
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}