import { useState, MouseEvent } from "react";
import IcT from "~/pages/components/icons";

type RowKeys = {
    [key: number]: {
        [key: string]:  {
            [key: number]: string | JSX.Element
        }
    }
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
    31: 'space',
    30: 'mic',
    32: 'search'
}


const kbKeys: RowKeys = {
    1: {
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
            0: <IcT icons="up" />,
            1: 'Z',
            2: 'X',
            3: 'C',
            4: 'V',
            5: 'B',
            6: 'N',
            7: 'M',
            8: <IcT icons="backspace" />,
        },
        row4: {
            0: '123',
            1: <IcT icons="world" />,
            2: 'space',
            3: <IcT icons="mic" />,
            4: <IcT icons="arrow-back" />,
        }
    },
    2: {
        row1: {
            0: 'q',
            1: 'w',
            2: 'e',
            3: 'r',
            4: 't',
            5: 'y',
            6: 'u',
            7: 'i',
            8: 'o',
            9: 'p',
          },
          row2: {
            0: 'a',
            1: 's',
            2: 'd',
            3: 'f',
            4: 'g',
            5: 'h',
            6: 'j',
            7: 'k',
            8: 'l',
          },
          row3: {
            0: <IcT icons="up" />,
            1: 'z',
            2: 'x',
            3: 'c',
            4: 'v',
            5: 'b',
            6: 'n',
            7: 'm',
            8: <IcT icons="backspace" />,
          },
          row4: {
            0: '123',
            1: <IcT icons="world" />,
            2: 'space',
            3: <IcT icons="mic" />,
            4: <IcT icons="arrow-back" />,
          }
    },
    3: {
        row1: {
            0: '0',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
          },
          row2: {
            0: '@',
            1: '#',
            2: '$',
            3: '_',
            4: '&',
            5: '-',
            6: '+',
            7: '(',
            8: ')',
          },
          row3: {
            0: '/',
            1: '*',
            2: '"',
            3: '\'',
            4: ':',
            5: ';',
            6: '!',
            7: '?',
            8: <IcT icons="backspace" />,
          },
          row4: {
            0: 'ABC',
            1: <IcT icons="world" />,
            2: 'space',
            3: <IcT icons="mic" />,
            4: <IcT icons="arrow-back" />,
          }
    },
}

function ICodeThis() {
    // ================ STATE ================
    const [keyboardState, setKeyboardState] = useState<number>(1);

    // ================ HELPERS ================
    function CreateKeys() {

        return (
            <div className='flex flex-col justify-center items-center'>
                <div className='h-1/4' id="kbRow1">
                    {/* 10 keys */}
                    {Array.from({ length: 10 }).map((_, idx) => {
                        const rowKeys = kbKeys[keyboardState]?.row1;
                        const keyValue = rowKeys?.[idx];
                        if (keyValue === undefined) return <></>
                        return (
                            <button onClick={(e) => handleKeyboard(e.currentTarget.id, keyValue)} className='text-white bg-indigo-900 rounded font-semibold hover:bg-indigo-500 kbButton' key={idx}  id={`kbButton-${idx}`} >
                                {keyValue}
                            </button>
                        )
                    })}
                </div>

                <div className='h-1/4' id="kbRow2">
                    {/* 9 keys */}
                    {Array.from({ length: 9 }).map((_, idx) => {
                        const rowKeys = kbKeys[keyboardState]?.row2;
                        const keyValue = rowKeys?.[idx];
                        if (keyValue === undefined) return <></>
                        return (
                            <button onClick={(e) => handleKeyboard(e.currentTarget.id, keyValue)} className='text-white bg-indigo-900 rounded font-semibold hover:bg-indigo-500 kbButton' key={idx + 10}  id={`kbButton-${idx + 10}`} >
                                {keyValue}
                            </button>
                        )
                    })}

                </div>

                <div className='h-1/4' id="kbRow3">
                    {/* 9 keys inc. kb state and backspace */}
                    {Array.from({ length: 9 }).map((_, idx) => {
                        const rowKeys = kbKeys[keyboardState]?.row3;
                        const keyValue = rowKeys?.[idx];
                        if (keyValue === undefined) return <></>
                        return (
                            <button onClick={(e) => handleKeyboard(e.currentTarget.id, keyValue)} className='text-white bg-indigo-900 rounded font-semibold hover:bg-indigo-500 kbButton' key={idx + 10 + 9}  id={`kbButton-${idx + 10 + 9}`} >
                                {keyValue}
                            </button>
                        )
                    })}
                </div>

                <div className='h-1/4' id="kbRow4">
                    {/* 5 keys inc space, search etc. */}
                    {Array.from({ length: 5 }).map((_, idx) => {
                        const rowKeys = kbKeys[keyboardState]?.row4;
                        const keyValue = rowKeys?.[idx];
                        if (keyValue === undefined) return <></>
                        return (
                            <button onClick={(e) => handleKeyboard(e.currentTarget.id, keyValue)} className='text-white bg-indigo-900 rounded font-semibold hover:bg-indigo-500 kbButton' key={idx + 10 + 9 + 9}  id={`kbButton-${idx + 10 + 9 + 9}`} >
                                {keyValue}
                            </button>
                        )
                    })}
                </div>
            </div>
        )
    }

    function handleKeyboard(e: string, kbText: string | JSX.Element) {
        const kbButtonId: number = parseInt(e.replace("kbButton-", ""));
        const kbButtonPressed = kbKeysIndex[kbButtonId];

        if (kbButtonPressed === 'up' && keyboardState === 1) {
            setKeyboardState(2);
        } else if (kbButtonPressed === 'up' && keyboardState === 2) {
            setKeyboardState(1);
        } else if (kbButtonPressed === '123' && keyboardState !== 3) {
            setKeyboardState(3);
        } else if (kbButtonPressed === '123' && keyboardState === 3) {
            setKeyboardState(1);
        }

        console.log(kbKeysIndex[kbButtonId], kbText)
        
    }
    // ================ LIFECYCLE ================


    // ================ RETURN ================
    return (
      <div id="toggleDarkDiv" className="dark">
        <div id="bodyDiv" className="bg-blue-700 flex justify-center items-end min-h-screen">
            <div className='w-full' id="kbWrapper">
                <div className='bg-indigo-800 rounded-t flex justify-center items-center' id="kbContainer">
                    <CreateKeys />
                </div>
            </div>
        </div>
      </div>

    )
}

export default ICodeThis;



 