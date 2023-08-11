import { useScroll, motion, useTransform, MotionValue, useMotionValueEvent } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { breakpoints } from '../cats-framer-motion'

export default function WizardKitty() {
    // ================ STATE ================
    const targetRef = useRef<HTMLDivElement | null>(null);
    

    // ================ FRAMER-MOTION STATE ================
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    })

    const WK = {
        initial: 0,
        headPeaking: 0.2,
        headDonePeaking: 0.6,
    }

    const y = useTransform(scrollYProgress, [WK.initial, WK.headPeaking, WK.headDonePeaking], ["0%", "50%", "50%"])
    const scale = useTransform(scrollYProgress, [0, WK.headDonePeaking], [0.5, 2])
    // must use return if () => { }, not if () => pos >= .... { } is for multi line
    const position = useTransform(scrollYProgress, (pos: number) => {
        // console.log("pos: ", pos)
        return pos >= 0.2 ? "sticky" : "relative"
    });
    const marginTop = useTransform(scrollYProgress, [0, 0.2], ['', "80%"])
    const rotateX = useTransform(scrollYProgress, [0, 0.2], ['0deg', '30deg'])

    // ================ LIFECYCLE ================


    // ================ FRAMER MOTION LIFE CYCLE ================
    

    // ================ RETURN ================

    return (
        <motion.section ref={targetRef} className="bg-slate-600 border-4 border-red-500">
            <div className='sticky top-0 mt-10'>
                <p className='text-white font-bold'>dd</p>
            </div>
            <motion.div style={{ y, position }} className=' border-4 border-cyan-300'>
                <motion.img style={{ transform: rotateX, perspective: "100px", transformOrigin: "center bottom" }} src="/images/cats/wizardKitty.png" alt="" className="" />
            </motion.div>
        </motion.section>
    )
}