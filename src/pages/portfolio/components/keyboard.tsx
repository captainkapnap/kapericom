import { useState, MouseEvent } from "react";
import IcT from "~/pages/components/icons";

type RowKeys = {
    [key: number]: string | JSX.Element;
}

const kbKeysIndex: { [key: number]: string } = {
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
    10: 'A',
    11: 'S',
    12: 'D',
    13: 'F',
    14: 'G',
    15: 'H',
    16: 'J',
    17: 'K',
    18: 'L',
    19: 'up',
    20: 'Z',
    21: 'X',
    22: 'C',
    23: 'V',
    24: 'B',
    25: 'N',
    26: 'M',
    27: 'backspace',
    28: '123',
    29: 'world',
    30: 'mic',
    31: 'space',
    32: 'search'
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
        0: <IcT icons="up" classNameCustom="h-[24px] w-[24px]" />,
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
                        <button onClick={(e) => handleKeyboard(e.currentTarget.id)} className='shadow-lg text-white bg-indigo-900 rounded mt-4 font-semibold hover:bg-indigo-500 kbButton' key={idx} id={`kbButton-${idx}`}>
                            {kbKeys.row1[idx]}
                        </button>
                    ))}
                </div>

                <div className='h-1/4' id="kbRow2">
                    {/* 9 keys */}
                    {Array.from({ length: 9}).map((_, idx) => (
                        <button onClick={(e) => handleKeyboard(e.currentTarget.id)} className='text-white bg-indigo-900 rounded mt-4 font-semibold hover:bg-indigo-500 kbButton' key={idx + 10}  id={`kbButton-${idx + 10}`} >
                            {kbKeys.row2[idx]}
                        </button>
                    ))}

                </div>

                <div className='h-1/4' id="kbRow3">
                    {/* 9 keys inc. kb state and backspace */}
                    {Array.from({ length: 9}).map((_, idx) => (
                        <button onClick={(e) => handleKeyboard(e.currentTarget.id)} className='text-white bg-indigo-900 rounded mt-4 font-semibold hover:bg-indigo-500 kbButton' key={idx + 10 + 9}  id={`kbButton-${idx + 10 + 9}`}>
                            {kbKeys.row3[idx]}
                        </button>
                    ))}
                </div>

                <div className='h-1/4' id="kbRow4">
                    {/* 5 keys inc space, search etc. */}
                    {Array.from({ length: 5}).map((_, idx) => (
                        <button onClick={(e) => handleKeyboard(e.currentTarget.id)} className='text-white bg-indigo-900 rounded mt-4 font-semibold hover:bg-indigo-500 kbButton' key={idx + 10 + 9 + 9}  id={`kbButton-${idx + 10 + 9 + 9}`}>
                            {kbKeys.row4[idx]}
                        </button>
                    ))}
                </div>
            </div>
        )
    }

    function handleKeyboard(e: string) {
        const kbButtonId: number = parseInt(e.replace("kbButton-", ""));
        const kbButtonPressed = kbKeysIndex[kbButtonId];

        if (kbButtonPressed === '123') {
            setKeyboardState(2);
            // Can use short circuit evaluation in the button to determine which keys should be displayed. 
            // will need to edit kbKeys to have all the other keys available.
        }

        console.log(kbKeysIndex[kbButtonId])
        
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



 