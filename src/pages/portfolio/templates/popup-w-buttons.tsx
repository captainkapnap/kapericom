import { useState } from 'react';


function ICodeThis() {
    // ================ STATE ================
    const [selectedButton, setSelectedButton] = useState<number>();

    // ================ HELPERS ================
    function handleButtonClick(buttonId: number) {
        setSelectedButton(buttonId);
    }

    // ================ LIFECYCLE ================


    // ================ RETURN ================
    return (
      <div id="toggleDarkDiv" className="dark">
        <div id="bodyDiv" className="bg-[#E7E9F8] min-h-screen flex justify-center items-center">
  
            <div className="bg-white w-[19rem] h-72 rounded-lg shadow-2xl flex flex-col relative" id="container">
                <div className='bg-white w-7 h-4 rounded-t-lg absolute flex flex-col -top-3 right-0'>
                    <button className="text-zinc-500 font-bold text-2xl justify-center items-center absolute -top-3 right-2">
                        -
                    </button>
                </div>
                
                <div className=''>
                    <h1 className='font-bold py-4 px-10 text-center'>
                        Why did you come to our support site today?
                    </h1>
                </div>
                <div className='py-4 px-6 flex flex-col gap-2'>
                    <button onClick={() => handleButtonClick(1)} className={`${selectedButton === 1 ? 'bg-blue-800 text-white' : ''} bg-[#f1ecec] rounded border-2 border-zinc-300 w-full h-10 text-[0.7rem] hover:bg-blue-300 hover:border-zinc-500 hover:drop-shadow-lg`}>
                        I used React and had to remove my JS.
                    </button>
                    <button onClick={() => handleButtonClick(2)} className={`${selectedButton === 2 ? 'bg-blue-800 text-white' : ''} bg-[#f1ecec] rounded border-2 border-zinc-300 w-full h-10 text-[0.7rem] hover:bg-blue-300 hover:border-zinc-500 hover:drop-shadow-lg`}>
                        I can&apos;t post to the forum.
                    </button>
                    <button onClick={() => handleButtonClick(3)} className={`${selectedButton === 3 ? 'bg-blue-800 text-white' : ''} bg-[#f1ecec] rounded border-2 border-zinc-300 w-full h-10 text-[0.7rem] hover:bg-blue-300 hover:border-zinc-500 hover:drop-shadow-lgselectedButton === 3 ? 'selected' : '' `}>
                        I have in-game purchasing issues.
                    </button>
                    
                </div>
                <div className='flex flex-col'>
                    <button  className='justify-center text-blue-500 font-bold hover:text-blue-700'>
                        SUBMIT
                    </button>
                </div>

            </div>
        </div>
      </div>

    )
}

export default ICodeThis;

 