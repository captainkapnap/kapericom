import { useScroll, motion, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

export default function Hero() {
  // ================ STATE ================
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [speechBubble, setSpeechBubble] = useState<string>("/images/cats/speechBubble.png");

  // ================ FRAMER-MOTION STATE ================
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.3, 0.5], [0.1, 1]);
  const x = useTransform(scrollYProgress, [0.3, 0.5, 0.6], ["110vw", "110vw", "45vw"]);
    //   const speechBubble = useTransform(scrollYProgress, (pos) => 
    //     pos >= 0.8 ? { let speechBubble2 = "/images/cats/speechBubble.png" } : "/images/cats/speechBubbleComeIn.png"
    //   );

    // ================ LIFECYCLE ================

    // ================ FRAMER MOTION LIFE CYCLE ================
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log(latest)
        if (latest >= 0.7) {
            setSpeechBubble("/images/cats/speechBubbleComeIn.png");
        } else {
            setSpeechBubble("/images/cats/speechBubble.png");
        }
    })

  // ================ RETURN ================
  return (
    <section ref={targetRef}>
      <div className="h-[300svh] border-4 border-emerald-500 bg-blue-200">
        <motion.div style={{ scale }} className="fixed top-4 z-10">
          <img src="/images/cats/happyCat.png" alt="" />
        </motion.div>

        {/* this top has to go... not responsive */}
        <motion.div style={{ x }} className="fixed z-20 top-[5vw]"> 
          {/* <p className='absolute ms-10'>Hi There</p>  CLAMP THIS MARGIN VALUE TO MAKE RESPONSIVE!! */}
          <img
            src={speechBubble}
            className="h-[20vw] w-[20vw]"
            alt=""
          />
          
        </motion.div>
      </div>
    </section>
  );
}
