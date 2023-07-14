import { useState } from "react";

const kbKeys = {
    
}

function ICodeThis() {
    // ================ STATE ================
    const [keyboardState, setKeyboardState] = useState<number>(1);

    // ================ HELPERS ================
    function CreateKeys({whichKeyboard}: {whichKeyboard: number}) {

        return (
            <div className='flex flex-col justify-center items-center'>
                <div className='h-1/4' id="kbRow1">
                    {/* 10 keys */}
                    {Array.from({ length: 10}).map((_, idx) => (
                        <button className='text-white bg-indigo-900 rounded mx-2 mt-4 font-semibold hover:bg-indigo-500' key={idx} id="kbButton">
                            {idx}
                        </button>
                    ))}
                </div>

                <div className='h-1/4' id="kbRow2">
                    {/* 9 keys */}
                    {Array.from({ length: 9}).map((_, idx) => (
                        <button className='text-white bg-indigo-900 rounded mx-2 mt-4 font-semibold hover:bg-indigo-500' key={idx + 10} id="kbButton">
                            {idx}
                        </button>
                    ))}

                </div>

                <div className='h-1/4' id="kbRow3">
                    {/* 9 keys inc. kb state and backspace */}
                    {Array.from({ length: 9}).map((_, idx) => (
                        <button className='text-white bg-indigo-900 rounded mx-2 mt-4 font-semibold hover:bg-indigo-500' key={idx + 10 + 9} id="kbButton">
                            D
                        </button>
                    ))}
                </div>

                <div className='h-1/4' id="kbRow4">
                    {/* 5 keys inc space, search etc. */}
                    {Array.from({ length: 5}).map((_, idx) => (
                        <button className='text-white bg-indigo-900 rounded mx-2 mt-4 font-semibold hover:bg-indigo-500' key={idx + 10 + 9 + 9} id="kbButton">
                            D
                        </button>
                    ))}
                </div>
            </div>
        )
    }

    // ================ LIFECYCLE ================


    // ================ RETURN ================
    return (
      <div id="toggleDarkDiv" className="dark">
        <div id="bodyDiv" className="bg-blue-700 flex justify-center items-end min-h-screen">
            <div className='w-full' id="kbWrapper">
                <div className='bg-indigo-800 rounded-t flex justify-center items-center' id="kbContainer">
                    <CreateKeys whichKeyboard={keyboardState} />
                </div>
            </div>
        </div>
      </div>

    )
}

export default ICodeThis;



 