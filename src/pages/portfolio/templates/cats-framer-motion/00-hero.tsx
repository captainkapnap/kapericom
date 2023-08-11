import { useScroll, motion, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { breakpoints } from "../cats-framer-motion";

type AO_Type = {
    initial: number;
    finishGrowing: number;
    hiThere: number;
    wantToSee: number;
    comeOnIn: number;
    startShrinking: number;
    finishShrinking: number;

    scale_Initial: number;
    scale_StartGrowing: number;
    scale_StartShrinking: number;
    scale_FinishShrinking: number;
};

type AO_X_Val_Type = {
    [key: string]: string;
}

export default function Hero() {
  // ================ STATE ================
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [speechBubble, setSpeechBubble] = useState<string>("/images/cats/speechBubble.png");

  // for responsive useTransforms and Animation Orders
  const [screenSize, setScreenSize] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth;
    }
    return breakpoints.md; // default value
  });
  

  // ================ FRAMER-MOTION STATE ================
  const heroHeight = 'h-[500svh]'
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  
  
  let AO_X_Val: AO_X_Val_Type;
  let responsiveTop = "top-[5vh]";
  // Animation Order for Responsive Props
  // scale not needed here but x is needed
  if (screenSize <= breakpoints.sm) {
      responsiveTop = "top-[6vh]"
        AO_X_Val = {
            x_initial: "300%",
            x_finishGrowing: "300%",
            x_hiThere: "120%",
        }
    } else if (screenSize <= breakpoints.md) {
        responsiveTop = "top-[6vh]"
        AO_X_Val = {
            x_initial: "300%",
            x_finishGrowing: "300%",
            x_hiThere: "120%",
        }
    }  else if (screenSize <= breakpoints.lg) {
        responsiveTop = "top-[6vh]"
        AO_X_Val = {
            x_initial: "400%",
            x_finishGrowing: "400%",
            x_hiThere: "80%",
        }
    } else {
        responsiveTop = "top-[2vh]"
        AO_X_Val = {
            x_initial: "400%",
            x_finishGrowing: "400%",
            x_hiThere: "80%",
        }
    }
    
    const AO: AO_Type = {
      initial: 0.16,
      finishGrowing: 0.3,
      hiThere: 0.35,
      wantToSee: 0.5,
      comeOnIn: 0.75,
      startShrinking: 0.86,
      finishShrinking: 1,
  
      scale_Initial: 0.1,
      scale_StartGrowing: 1,
      scale_StartShrinking: 1,
      scale_FinishShrinking: 0,
    };
    
    const scale = useTransform(scrollYProgress, 
            [AO.initial, AO.finishGrowing, AO.startShrinking, AO.startShrinking, AO.finishShrinking], 
            [AO.scale_Initial, AO.scale_StartGrowing, AO.scale_StartGrowing, AO.scale_StartShrinking, AO.scale_FinishShrinking]
        );
    const x = useTransform(scrollYProgress, 
            [AO.initial, AO.finishGrowing, AO.hiThere], 
            [AO_X_Val.x_initial, AO_X_Val.x_finishGrowing, AO_X_Val.x_hiThere]
        );
    const scaleSpeechBubble = useTransform(scrollYProgress,
            [AO.initial, AO.startShrinking, AO.finishShrinking],
            [1, 1, AO.scale_FinishShrinking]
        );


    // ================ LIFECYCLE ================
    // for responsive design.. to set values for each screensize
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
        if (latest >= AO.wantToSee && latest <= AO.comeOnIn) {
            setSpeechBubble("/images/cats/speechBubbleSeeHome.png");
        } else if (latest >= AO.comeOnIn) {
            setSpeechBubble("/images/cats/speechBubbleComeIn.png");
        } else if (latest >= AO.initial) {
            setSpeechBubble("/images/cats/speechBubble.png");
        }
    })

  // ================ RETURN ================
  return (
    <section ref={targetRef}>
      <div className={`${heroHeight} border-4 border-emerald-500 bg-blue-200 `}>
        <div className=' border-4 border-white z-30 flex justify-center'>
            <motion.div style={{ scale }} className="fixed top-4 z-10">
              <img src="/images/cats/happyCat.png" alt="" />
            </motion.div>
            <motion.div style={{ x, scale: scaleSpeechBubble }} className={`${responsiveTop} fixed z-20`}>
              <img
                src={speechBubble}
                className="h-[20vw] w-[20vw]"
                alt=""
              />
            
            </motion.div>
        </div>
      </div>
    </section>
  );
}
