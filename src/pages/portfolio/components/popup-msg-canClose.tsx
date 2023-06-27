import { MouseEventHandler, useState } from "react";
import IcT from "~/pages/components/icons";

type Messages = { msg2: string | null | undefined, type: 'Confirmation' | 'Error' | 'Success' | null | undefined, errorMsg: string | null | undefined}[] 

const messages: Messages = [
    {msg2: 'Payment successfully processed.', type: 'Success', errorMsg: null},
    {msg2: 'An error occurred while processing your request.', type: 'Error', errorMsg: 'Try again'},
    {msg2: 'Your changes have been saved.', type: 'Confirmation', errorMsg: null},
]

function ICodeThis() {
    // ================ STATE ================
    const [activeMsg, setActiveMsg] = useState<Messages>([{msg2: null, type: null, errorMsg: null}]);

    // ================ HELPERS ================
    function handleButton(msg2display: number) {
        if (messages && messages.length > 0) {
                setActiveMsg([{ 
                    msg2: messages[msg2display]?.msg2, 
                    type: messages[msg2display]?.type, 
                    errorMsg: messages[msg2display]?.errorMsg 
                }])

        }
    }
    
    // ================ LIFECYCLE ================


    // ================ RETURN ================
    return (
      <div id="toggleDarkDiv" className="dark">
        <div id="bodyDiv" className="bg-slate-100 min-h-screen flex justify-center items-center">
            <div className='relative bg-blue-700 h-[80dvh] w-[80%] max:w-20 flex justify-center items-center rounded-lg shadow-xl drop-shadow-lg'>
                <div className='bg-sky-500 w-[90%] h-[10%] rounded-md flex items-center' id="container">
                    <div className="" id="icon">
                        <IcT icons="check" classNameCustom="h-4 w-4" />
                    </div>
                    <div className="" id="msg">
                        <small>
                            {activeMsg[0]?.msg2}
                        </small>
                    </div>
                    <div className="" id="errorMsg">
                        <small>
                            {activeMsg[0]?.errorMsg && (
                                activeMsg[0].errorMsg
                            )}
                        </small>
                    </div>
                    <div className="" id="close">
                        <button className=''>
                            <IcT icons="x" classNameCustom="h-4 w-4"/>
                        </button>
                    </div>
                </div>
                <div className='flex absolute bottom-2 text-slate-100 font-semibold'>
                    <button className="bg-slate-800 hover:ring-offset-2 outline-none hover:ring-2 hover:ring-sky-500 m-0.5 px-3 py-1 rounded-md drop-shadow" onClick={() => handleButton(0)}>MSG 1</button>
                    <button className="bg-slate-800 hover:ring-offset-2 outline-none hover:ring-2 hover:ring-sky-500 m-0.5 px-3 py-1 rounded-md drop-shadow" onClick={() => handleButton(1)}>MSG 2</button>
                    <button className="bg-slate-800 hover:ring-offset-2 outline-none hover:ring-2 hover:ring-sky-500 m-0.5 px-3 py-1 rounded-md drop-shadow" onClick={() => handleButton(2)}>MSG 3</button>
                </div>
            </div>
  
           
        </div>
      </div>

    )
}

export default ICodeThis;
