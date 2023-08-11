import { useScroll, motion, useTransform, MotionValue, useMotionValueEvent } from "framer-motion";
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
    const [hookedYPosition, setHookedYPosition] = useState(0);

    //                                            progress, opacity values
    const opacity = useTransform(scrollYProgress, [0.16, 0.75, 0.83], [1, 1, 0])
    const y = useTransform(scrollYProgress, [0.16, 0.5, 0.83], ["0%", "0%", "-160%"])
    const scale = useTransform(scrollYProgress, [0.16, 0.5, 0.83], [1, 4, 20])
    const position = useTransform(scrollYProgress, (pos: number) =>
        pos >= 1 ? "relative" : "fixed"
    );

    // ================ LIFECYCLE ================


    // ================ FRAMER MOTION LIFE CYCLE ================


    // ================ RETURN ================

    return (
        <section ref={targetRef}>
            <div className="h-[500vh] mt-[-30vh] bg-blue-200 border-4 border-blue-500">
                <div className='flex justify-center'>
                    <motion.img style={{ position, scale, y }} src="/images/cats/catHouse.png" alt="" className="" />
                </div>
            </div>
        </section>
    )
}