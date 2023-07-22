import { useState, useRef, useEffect, createRef } from "react";
import type { RefObject } from 'react';
import IcT from "~/pages/components/icons";
import { MouseEvent } from "react";


const fnbItems = [
    {icon: <IcT icons="home" classNameCustom="w-10 h-10 fnbIcon" />, id: 0, color: '#b39ddb'},
    {icon: <IcT icons="world" classNameCustom="w-10 h-10 fnbIcon" />, id: 1, color: '#80deea'},
    {icon: <IcT icons="search" classNameCustom="w-10 h-10 fnbIcon" />, id: 2, color: '#9fa8da'},
    {icon: <IcT icons="facebook" classNameCustom="w-10 h-10 fnbIcon" />, id: 3, color: '#c5e1a5'},
    {icon: <IcT icons="pinterest" classNameCustom="w-10 h-10 fnbIcon" />, id: 4, color: '#b0bec5'},
]

function FluidNavBar() {
    // ================ STATE ================
    const [activeButton, setActiveButton] = useState<number>(0);
    const buttonRefs = useRef<RefObject<HTMLButtonElement>[]>([]);
    const refMenu = useRef<HTMLDivElement | null>(null);
    const refMenuBorder = useRef<HTMLDivElement | null>(null);

    // Use these refs to get position of elements on the screen.
    // will ultimately need to calculate fnbLeft once a button is clicked.
    // fnbLeft will be used to move the MenuBorder (camel back shape)
    const fnbMenu = refMenu.current?.getBoundingClientRect();
    const fnbMenuBorder = refMenuBorder.current?.getBoundingClientRect();

    
    // ================ HELPERS ================
    function FNBDisplayIcons() {
        
        return (
            <div className='flex justify-evenly items-center text-slate-100 py-5'>
                {fnbItems.map((fnbItem, idx) => (
                    <div className='' key={idx}>
                        <button className={`${activeButton === idx ? 'fnbActive' : '' } fnbItem `} onClick={(e) => handleFNBButton(parseInt(e.currentTarget.id), e)} id={idx.toString()} ref={buttonRefs.current[idx]} >{fnbItem.icon}</button>
                    </div>
                ))}
                
            </div>
        )
    }
    
    function handleFNBButton(buttonID: number, e: MouseEvent<HTMLButtonElement>) {
        setActiveButton(buttonID)
        
        const fnbActiveBtn = buttonRefs.current[buttonID]?.current?.getBoundingClientRect();
        
        if (fnbActiveBtn && fnbMenu && fnbMenuBorder && refMenuBorder.current && fnbItems[buttonID]) {
            const fnbLeft = `${Math.floor(fnbActiveBtn.left - fnbMenu.left - (fnbMenuBorder.width - fnbActiveBtn.width) / 2)}px`;
            refMenuBorder.current.style.transform = `translate3d(${fnbLeft}, 0, 0)`;
            // buttonRefs.current[buttonID].current.style.transform = `translateX(${fnbLeft})`;
            document.documentElement.style.setProperty('--fnb-bgColorItem', fnbItems[buttonID]?.color || '#000000')
            console.log(buttonRefs.current)
        }
    }
    
    
    // ================ LIFECYCLE ================
    useEffect(() => {
        document.documentElement.style.setProperty('--fnb-bgColorItem', fnbItems[0]?.color || '#000000')
        
        
        buttonRefs.current = buttonRefs.current.slice(0,fnbItems.length)
        for (let i = buttonRefs.current.length; i < fnbItems.length; i++) {
            buttonRefs.current[i] = createRef();
        }
    }, [])
    useEffect(() => {
        if (fnbMenu && refMenuBorder.current) {
            refMenuBorder.current.style.bottom = `${fnbMenu.height - 6}px`;
        }
    }, [activeButton])
    
    // ================ RETURN ================
    return (
      <>
      <div id="toggleDarkDiv" className="dark">
        <div id="bodyDiv" className="flex items-end min-h-[100svh] w-full overflow-hidden bodyDivFNB ">
            <div className='w-full' id="fnbContainer"  ref={refMenu} >
                <div className='bg-slate-900 w-full relative' id="fnbMenu">
                    {/* fnbMenu div is used to ensure overflow-hidden works on fnbMenuBorder */}
                    {/* since fnbMB is position'd absolute.  of-hidden doesn't work on abs w/o a rel parent */}
                    <FNBDisplayIcons />
                    <div className='fnbMenuBorder bg-slate-900' ref={refMenuBorder}></div>
                </div>
            </div>


        </div>
    </div>

    <div className="fnbSVGContainer">
        <svg viewBox="0 0 202.9 45.5" >
            <clipPath id="menu" clipPathUnits="objectBoundingBox" transform="scale(0.0049285362247413 0.021978021978022)">
                <path  d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
                c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
                c9.2,3.6,17.6,4.2,23.3,4H6.7z"/>
                {/* <path d="M2,98 L5,2 L98,98" /> */}
            </clipPath>
        </svg>
    </div>
    </>
    )
}

export default FluidNavBar;



 