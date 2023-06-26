import { useEffect, useState } from 'react';
import IcT from '../../components/icons';


function ICodeThis() {
    // ================ STATE ================
    const [upShowing, setUpShowing] = useState<boolean>(true);
    
    
    // ================ HELPERS ================
    function handleChevronClick() {
        if (upShowing) {
            setUpShowing(false)
        } else if (!upShowing) {
            setUpShowing(true)
        }
    }
    
    function CustomMenu() {
    
        return (
            <div className='flex flex-col items-start justify-center gap-4 py-4 px-2 mt-1 w-32 h-36 bg-stone-200 shadow-lg border-zinc-300 border text-black rounded-md animate-slide-down'>
                <div>
                    <input type="checkbox" id="articles" className='form-checkbox h-3 w-3 rounded-sm outline-none hover:bg-indigo-400 active:bg-slate-700 focus:ring-0 focus:bg-slate-100 checked:bg-cyan-600' /> 
                    <label className='pl-2' htmlFor="articles">Articles</label>
                    
                </div>
                <div>
                    <input type="checkbox" id="products" className='form-checkbox h-3 w-3 rounded-sm outline-none hover:bg-indigo-400 active:bg-slate-700 focus:ring-0 focus:bg-slate-100 checked:bg-cyan-600' /> 
                    <label className='pl-2' htmlFor="products">Products</label>
                </div>                <div>
                    <input type="checkbox" id="services" className='form-checkbox h-3 w-3 rounded-sm outline-none hover:bg-indigo-400 active:bg-slate-700 focus:ring-0 focus:bg-slate-100 checked:bg-cyan-600' /> 
                    <label className='pl-2' htmlFor="services">Services</label>
                </div>
            </div>
        )
    }

    // ================ LIFECYCLE ================


    // ================ RETURN ================
    return (
      <div id="toggleDarkDiv" className="dark">
        <div id="bodyDiv" className="bg-stone-200 min-h-screen flex justify-center items-center">
  
            <div className="w-80 h-14 bg-stone-200 border-zinc-300 border-[1px] rounded-md drop-shadow shadow-lg flex relative" id="container">
                <div className='w-1/5 bg-stone-200 h-full rounded-md flex text-black hover:text-blue-600' id='arrow'>
                    {upShowing ? (
                        <button className='w-full h-full flex justify-center items-center'  onMouseEnter={handleChevronClick} onClick={handleChevronClick}>
                            <IcT icons="chevronUp" />
                        </button>
                    ) : (
                        <button className='w-full h-full flex justify-center items-center' onClick={handleChevronClick}>
                            <IcT icons="chevronDown" />
                        </button>
                    )}
                </div>
                <div className='w-3/5 p-1' id='inputBox'>
                        <input className='h-full w-full outline-none px-2 text-lg shadow-sm rounded-sm border-slate-300 border focus:border-blue-300 focus:border' type="search" />
                </div>
                <div className='w-1/5 rounded-md hover:text-white' id='searchButton'>
                        <button className='flex justify-center items-center w-full h-full bg-gradient-to-br from-blue-300 to-sky-600 hover:bg-gradient-to-br hover:from-blue-600 hover:to-sky-300 rounded-md'>
                            <IcT icons="search" />
                        </button>
                </div>
                <div className='absolute left-0 top-14'>
                    {!upShowing && <CustomMenu />}
                </div>
            </div>
        </div>
      </div>

    )
}

export default ICodeThis;

 