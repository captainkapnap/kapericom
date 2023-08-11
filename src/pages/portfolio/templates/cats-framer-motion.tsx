import Hero from "./cats-framer-motion/00-hero";
import CatHouse from "./cats-framer-motion/01-catHouse";
import WizardKitty from "./cats-framer-motion/02-wizardKitty"


// .onChange is depracated... have to use useMotionValueEvent() now
// https://stackoverflow.com/questions/65647918/framer-motion-not-updating-scrollyprogress#:~:text=For%20example%2C%20the%20onChange%20on,triggering%20react%20to%20re%2Drender.&text=Note%20that%20now%20onChange()%20is%20deprecated%20and%20replaced%20with%20useMotionValueEvent()%20.
export const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  };


function ICodeThis() {
    // ================ STATE ================
    
    // ================ HELPERS ================

    function EmptySection() {
        return (
            <section className='h-[100vh] border-4 border-purple-500'>

            </section>
        )
    }

    // ================ RETURN ================
    return (
      <div id="toggleDarkDiv" className="dark">
        <div id="bodyDiv" className="w-full overflow-x-clip">
            <Hero />
            <CatHouse />
            <WizardKitty />
            <EmptySection />
        </div>
      </div>

    )
}

export default ICodeThis;

 