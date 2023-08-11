import { useScroll, motion, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { breakpoints } from '../cats-framer-motion'

// _____________________________________________________
// THERE IS GOOD INFO ON REFS HERE... 
// store getBoundingClientRect in state
// set state on component mount in useEffect w/ [] dep
// this lets the ref={imageRef} set first before setting state
// _____________________________________________________

export default function CatHouse() {
    // ================ STATE ================
    const targetRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLDivElement | null>(null);
    // const [houseCoords, setHouseCoords] = useState<DOMRect | null>(null);
    const [screenSize, setScreenSize] = useState(() => {
        if (typeof window !== 'undefined') {
          return window.innerWidth;
        }
        return breakpoints.md; // default value
      });

    // ================ FRAMER-MOTION STATE ================
    let smokeRight = "0.6rem";
    let smokeHeight = "40%";
    let smokeWidth = "50%";
    let smokeTop = "-4rem";
    if (screenSize <= breakpoints.sm) {
        smokeRight = "1.7rem"
        smokeHeight = "40%";
        smokeWidth = "40%";
        smokeTop = "-3.4rem";
      } 
    //   else {
    //     smokeRight = "1rem";
    //     smokeHeight = "100%";
    //     smokeWidth = "100%";
    //     smokeTop = "-3rem";
    //   }


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
        midGrowing: 0.35,
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
        [AO.initial, AO.heroKittyGone, AO.midGrowing, AO.finishGrowing], 
        [AO.scale_Initial, AO.scale_Initial, AO.scale_midGrowing, AO.scale_finishGrowing]
        );
    const scaleSmoke = useTransform(scrollYProgress, [AO.initial], [AO.scale_smokeInitial])
    const backgroundColor = useTransform(scrollYProgress,
            [AO.initial, AO.startGrowing, AO.midGrowing, AO.makeHouseInvis],
            [AO_BgColor.initial, AO_BgColor.initial, AO_BgColor.mid, AO_BgColor.black]
        )


    // ================ LIFECYCLE ================
    // useEffect(() => {
    //     if (imageRef.current) {
    //         setHouseCoords(imageRef.current.getBoundingClientRect());
    //     }
    // }, []);

    useEffect(() => {
        const handleResize = () => {
          setScreenSize(window.innerWidth);
        };
      
        window.addEventListener('resize', handleResize);
        handleResize();
      
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);


    // ================ FRAMER MOTION LIFE CYCLE ================
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log(latest)
        // console.log("imageRef", houseCoords?.right)
    });

    // ================ RETURN ================

    return (
        <section ref={targetRef}>
            <motion.div style={{ backgroundColor }} className="h-[500vh]">
                <div className='sticky top-[20%] flex justify-center items-start '>
                    <motion.div style={{ scale: scaleHouse, y, opacity }} className='relative' ref={imageRef}>
                        <img src="/images/cats/catHouse.png" alt="" className=""  />
                        <motion.div style={{ scale: scaleSmoke, right: smokeRight, height: smokeHeight, width: smokeWidth, top: smokeTop  }} className='absolute flex'>
                            <img src="/images/cats/smoke.gif" alt=""  />
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}