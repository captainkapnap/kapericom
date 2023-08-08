import { useScroll, motion, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

function ICodeThis() {
    // ================ STATE ================

    // ================ HELPERS ================
    function CatHouse() {
        // ================ STATE ================
        const targetRef = useRef<HTMLDivElement | null>(null);

        // ================ FRAMER-MOTION STATE ================
        const { scrollYProgress } = useScroll({
            target: targetRef,
            offset: ["start end", "end start"],
        })

        //                                            progress, opacity values
        const opacity = useTransform(scrollYProgress, [0.16, 0.75, 0.83], [1, 1, 0])
        const y = useTransform(scrollYProgress, [0.16, 0.5, 0.83], ["0%", "0%", "-160%"])
        const scale = useTransform(scrollYProgress, [0.16, 0.5, 0.83], [1, 4, 20])
        const position = useTransform(scrollYProgress, (pos: number) =>
            pos >= 1 ? "relative" : "fixed"
        );

        // ================ LIFECYCLE ================
        // useEffect(() => {
        //     const unsubscribe = scrollYProgress.onChange(value => {
        //         console.log("Scroll Progress:", value);
        //     });
        
        //     return () => {
        //         // Cleanup: remove the listener when the component is unmounted
        //         unsubscribe();
        //     };
        // }, [scrollYProgress]);

        // ================ RETURN ================

        return (
            <motion.section ref={targetRef} className="h-[500vh] bg-blue-200">
                <div className='flex justify-center'>
                    <motion.img style={{ position, scale, y }} src="/images/cats/catHouse.png" alt="" className="" />
                </div>
            </motion.section>
        )
    }

    function WizardKitty() {
        // ================ STATE ================
        const targetRef = useRef<HTMLDivElement | null>(null);

        // ================ FRAMER-MOTION STATE ================
        const { scrollYProgress } = useScroll({
            target: targetRef,
            offset: ["start end", "end start"],
        })

        //                                            progress, opacity values
        const opacity = useTransform(scrollYProgress, [0.16, 0.83], [1, 0])
        const y = useTransform(scrollYProgress, [0, 0.1], ["-100%", "0%"])
        const scale = useTransform(scrollYProgress, [0, 0.1], [1, 2])
        const position = useTransform(scrollYProgress, (pos: number) =>
            pos >= 1 ? "relative" : "fixed"
        );

        // ================ LIFECYCLE ================
        useEffect(() => {
            const unsubscribe = scrollYProgress.onChange(value => {
                console.log("Scroll Progress:", value);
            });
        
            return () => {
                // Cleanup: remove the listener when the component is unmounted
                unsubscribe();
            };
        }, [scrollYProgress]);

        // ================ RETURN ================

        return (
            <motion.section ref={targetRef} className="h-[200vh] bg-slate-600">
                <div className='flex justify-center'>
                    <motion.img style={{ scale,  y }} src="/images/cats/wizardKitty.png" alt="" className="" />
                </div>
            </motion.section>
        )
    }


    // ================ RETURN ================
    return (
      <div id="toggleDarkDiv" className="dark">
        <div id="bodyDiv" className="">
            <CatHouse />
            <WizardKitty />
        </div>
      </div>

    )
}

export default ICodeThis;

 