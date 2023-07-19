import { useState, useRef, useEffect, createRef } from "react";
import type { RefObject } from 'react';
import IcT from "~/pages/components/icons";
import { MouseEvent } from "react";

type CustomCSSProperties = React.CSSProperties & { '--fnb-bgColorItem'?: string };

const fnbItems = [
    {icon: <IcT icons="home" classNameCustom="w-10 h-10"/>, id: 0, color: '#b39ddb'},
    {icon: <IcT icons="world" classNameCustom="w-10 h-10" />, id: 1, color: '#80deea'},
    {icon: <IcT icons="search" classNameCustom="w-10 h-10" />, id: 2, color: '#9fa8da'},
    {icon: <IcT icons="facebook" classNameCustom="w-10 h-10" />, id: 3, color: '#c5e1a5'},
    {icon: <IcT icons="pinterest" classNameCustom="w-10 h-10" />, id: 4, color: '#b0bec5'},
]

function ICodeThis() {
    // ================ STATE ================
    const [activeButton, setActiveButton] = useState<number>(0);
    const buttonRefs = useRef<RefObject<HTMLButtonElement>[]>([]);
    const refMenu = useRef<HTMLDivElement | null>(null);
    const refMenuBorder = useRef<HTMLDivElement | null>(null);

    // ================ HELPERS ================
    function FNBDisplayIcons() {

        return (
            <div className='flex justify-evenly items-center text-slate-100 py-5' id="fnbSVGContainer">
                {fnbItems.map((fnbItem, idx) => (
                    <div className='' id="fnvIndividualSVG" key={idx}>
                        <button className={`${activeButton === idx ? 'fnbActive fnbMoveBorder' : '' } 'fnbItem'`} onClick={(e) => handleFNBButton(parseInt(e.currentTarget.id), e)} id={idx.toString()} style={{ '--fnb-bgColorItem': fnbItem.color } as CustomCSSProperties } ref={buttonRefs.current[idx]} >{fnbItem.icon}</button>
                    </div>
                ))}
                
            </div>
        )
    }

    function handleFNBButton(buttonID: number, e: MouseEvent<HTMLButtonElement>) {
        setActiveButton(buttonID)

        const fnbMenu = refMenu.current?.getBoundingClientRect();
        const fnbMenuBorder = refMenuBorder.current?.getBoundingClientRect();        
        const fnbActiveBtn = buttonRefs.current[buttonID]?.current?.getBoundingClientRect();

        if (fnbActiveBtn && fnbMenu && fnbMenuBorder && refMenuBorder.current) {
            const fnbLeft = `${Math.floor(fnbActiveBtn.left - fnbMenu.left - (fnbMenuBorder.width - fnbActiveBtn.width) / 2)}px`;
            refMenuBorder.current.style.transform = `translateX(${fnbLeft})`;
        }
    }


    // ================ LIFECYCLE ================
    useEffect(() => {
        buttonRefs.current = buttonRefs.current.slice(0,fnbItems.length)
        for (let i = buttonRefs.current.length; i < fnbItems.length; i++) {
            buttonRefs.current[i] = createRef();
        }
        console.log(buttonRefs.current)
    }, [])


    // ================ RETURN ================
    return (
      <>
      <div id="toggleDarkDiv" className="dark">
        <div id="bodyDiv" className="bg-sky-200 flex items-end min-h-screen w-[100dvw] overflow-hidden">
            <div className='bg-slate-900 w-full' id="fnbContainer" ref={refMenu}>
                <FNBDisplayIcons />
            </div>

            <div className='fnbMenuBorder bg-slate-900' ref={refMenuBorder}></div>

        </div>
    </div>

    <div className="fnbSVGContainer">
        <svg viewBox="0 0 202.9 45.5" >
            <clipPath id="menu" clipPathUnits="objectBoundingBox" transform="scale(0.0049285362247413 0.021978021978022)">
                <path  d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
                c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
                c9.2,3.6,17.6,4.2,23.3,4H6.7z"/>
            </clipPath>
        </svg>
    </div>
    </>
    )
}

export default ICodeThis;



 