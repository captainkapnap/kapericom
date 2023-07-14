import { useState } from "react";
import IcT from "~/pages/components/icons";

type RowKeys = {
    [key: number]: string | JSX.Element;
}

const kbKeys: {row1: RowKeys, row2: RowKeys, row3: RowKeys, row4: RowKeys } = {
    row1: {
        0: 'Q',
        1: 'W',
        2: 'E',
        3: 'R',
        4: 'T',
        5: 'Y',
        6: 'U',
        7: 'I',
        8: 'O',
        9: 'P',
    },
    row2: {
        0: 'A',
        1: 'S',
        2: 'D',
        3: 'F',
        4: 'G',
        5: 'H',
        6: 'J',
        7: 'K',
        8: 'L',
    }, 
    row3: {
        0: <IcT icons="up" classNameCustom="h-[23px] w-[23px]" />,
        1: 'Z',
        2: 'X',
        3: 'C',
        4: 'V',
        5: 'B',
        6: 'N',
        7: 'M',
        8: <IcT icons="backspace" classNameCustom="h-[24px] w-[24px]" />,
    },
    row4: {
        0: '123',
        1: <IcT icons="world" classNameCustom="h-[24px] w-[24px]" />,
        2: <IcT icons="mic" classNameCustom="h-[24px] w-[24px]" />,
        3: 'space',
        4: 'Search',
    }
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
                        <button className='shadow-lg text-white bg-indigo-900 rounded mx-2 mt-4 font-semibold hover:bg-indigo-500' key={idx} id="kbButton">
                            {kbKeys.row1[idx]}
                        </button>
                    ))}
                </div>

                <div className='h-1/4' id="kbRow2">
                    {/* 9 keys */}
                    {Array.from({ length: 9}).map((_, idx) => (
                        <button className='text-white bg-indigo-900 rounded mx-2 mt-4 font-semibold hover:bg-indigo-500' key={idx + 10} id="kbButton">
                            {kbKeys.row2[idx]}
                        </button>
                    ))}

                </div>

                <div className='h-1/4' id="kbRow3">
                    {/* 9 keys inc. kb state and backspace */}
                    {Array.from({ length: 9}).map((_, idx) => (
                        <button className='text-white bg-indigo-900 rounded mx-2 mt-4 font-semibold hover:bg-indigo-500' key={idx + 10 + 9} id="kbButton">
                            {kbKeys.row3[idx]}
                        </button>
                    ))}
                </div>

                <div className='h-1/4' id="kbRow4">
                    {/* 5 keys inc space, search etc. */}
                    {Array.from({ length: 5}).map((_, idx) => (
                        <button className='text-white bg-indigo-900 rounded mx-2 mt-4 font-semibold hover:bg-indigo-500' key={idx + 10 + 9 + 9} id="kbButton">
                            {kbKeys.row4[idx]}
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



 